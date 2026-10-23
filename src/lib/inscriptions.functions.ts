import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

/**
 * Notification des nouvelles inscriptions et validation en un clic.
 *
 * Secrets à définir dans Lovable Cloud :
 * - RESEND_API_KEY     : clé API Resend (service d'envoi d'e-mails) ;
 * - NOTIF_EMAIL        : adresse qui reçoit les alertes (celle du compte Resend) ;
 * - VALIDATION_SECRET  : longue chaîne aléatoire qui signe les liens de validation.
 */

const DUREE_LIEN_JOURS = 30;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function secret(nom: string): string {
  const valeur = process.env[nom];
  if (!valeur) throw new Error(`Secret manquant : ${nom}`);
  return valeur;
}

async function signer(texte: string): Promise<string> {
  const cle = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret("VALIDATION_SECRET")),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", cle, new TextEncoder().encode(texte));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Comparaison en temps constant pour ne pas révéler la signature par le temps de réponse. */
function egal(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function echapper(texte: string): string {
  return texte.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

type LienSigne = { u: string; e: string; s: string };

function validerLien(data: LienSigne): LienSigne {
  if (
    typeof data?.u !== "string" ||
    !UUID.test(data.u) ||
    typeof data.e !== "string" ||
    !/^\d{9,11}$/.test(data.e) ||
    typeof data.s !== "string" ||
    !/^[0-9a-f]{64}$/.test(data.s)
  ) {
    throw new Error("Lien de validation invalide.");
  }
  return data;
}

async function verifierLien({ u, e, s }: LienSigne): Promise<void> {
  if (Number(e) * 1000 < Date.now()) throw new Error("Ce lien de validation a expiré.");
  if (!egal(await signer(`${u}.${e}`), s)) throw new Error("Lien de validation invalide.");
}

/**
 * Appelée par la page « Compte en attente » : envoie une seule fois un e-mail à l'administratrice
 * avec un lien de validation signé. Ne fait rien si le compte est déjà validé ou déjà signalé.
 */
export const signalerInscription = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const userId = context.userId;
    const { data: profil } = await supabaseAdmin
      .from("profiles")
      .select("prenom, is_approved")
      .eq("id", userId)
      .maybeSingle();
    if (!profil || profil.is_approved) return { envoye: false };

    const { data: compte, error } = await supabaseAdmin.auth.admin.getUserById(userId);
    if (error || !compte?.user) throw new Error("Utilisateur introuvable.");
    const meta = compte.user.app_metadata ?? {};
    if (meta["notif_admin"]) return { envoye: false };

    const expiration = String(Math.floor(Date.now() / 1000) + DUREE_LIEN_JOURS * 86400);
    const signature = await signer(`${userId}.${expiration}`);
    const origine = new URL(getRequest().url).origin;
    const lien = `${origine}/valider?u=${userId}&e=${expiration}&s=${signature}`;

    const prenom = echapper(profil.prenom || "(sans prénom)");
    const email = echapper(compte.user.email ?? "(adresse inconnue)");
    const reponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Prépa Territoriale <onboarding@resend.dev>",
        to: [secret("NOTIF_EMAIL")],
        subject: `Nouvel inscrit à valider : ${profil.prenom || compte.user.email}`,
        html: `
          <div style="font-family:Arial,sans-serif;font-size:16px;color:#1d2f25;line-height:1.5">
            <p>Une nouvelle personne attend la validation de son compte :</p>
            <p><strong>${prenom}</strong><br>${email}</p>
            <p>
              <a href="${lien}" style="display:inline-block;background:#233d2f;color:#ffffff;padding:12px 22px;border-radius:999px;text-decoration:none;font-weight:bold">
                Voir et valider ce compte
              </a>
            </p>
            <p style="font-size:13px;color:#4f6457">Ce lien est personnel et valable ${DUREE_LIEN_JOURS} jours. Ne le transférez pas : il permet de valider ce compte sans connexion.</p>
          </div>`,
      }),
    });
    if (!reponse.ok) {
      console.error("[Inscription] envoi de l'e-mail impossible :", await reponse.text());
      return { envoye: false };
    }

    await supabaseAdmin.auth.admin.updateUserById(userId, {
      app_metadata: { ...meta, notif_admin: true },
    });
    return { envoye: true };
  });

/** Lit la personne concernée par un lien de validation (page /valider). */
export const lireDemandeValidation = createServerFn({ method: "POST" })
  .inputValidator(validerLien)
  .handler(async ({ data }) => {
    await verifierLien(data);
    const { data: profil } = await supabaseAdmin
      .from("profiles")
      .select("prenom, is_approved")
      .eq("id", data.u)
      .maybeSingle();
    const { data: compte } = await supabaseAdmin.auth.admin.getUserById(data.u);
    if (!profil || !compte?.user) throw new Error("Ce compte n'existe plus.");
    return {
      prenom: profil.prenom ?? "",
      email: compte.user.email ?? "",
      dejaValide: profil.is_approved === true,
    };
  });

/** Valide le compte désigné par un lien signé. */
export const validerInscription = createServerFn({ method: "POST" })
  .inputValidator(validerLien)
  .handler(async ({ data }) => {
    await verifierLien(data);
    const { error } = await supabaseAdmin
      .from("profiles")
      .update({ is_approved: true })
      .eq("id", data.u);
    if (error) throw new Error("La validation n'a pas pu être enregistrée.");
    return { ok: true };
  });
