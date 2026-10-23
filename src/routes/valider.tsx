import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, ShieldCheck, XCircle } from "lucide-react";
import { lireDemandeValidation, validerInscription } from "@/lib/inscriptions.functions";

type Recherche = { u?: string | undefined; e?: string | undefined; s?: string | undefined };

export const Route = createFileRoute("/valider")({
  validateSearch: (search: Record<string, unknown>): Recherche => ({
    u: typeof search["u"] === "string" ? search["u"] : undefined,
    e: typeof search["e"] === "string" ? search["e"] : String(search["e"] ?? "") || undefined,
    s: typeof search["s"] === "string" ? search["s"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Valider un compte | Prépa Territoriale" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ValiderPage,
});

type Etat =
  | { etape: "chargement" }
  | { etape: "pret"; prenom: string; email: string }
  | { etape: "envoi"; prenom: string; email: string }
  | { etape: "valide"; prenom: string; email: string }
  | { etape: "erreur"; message: string };

function ValiderPage() {
  const { u, e, s } = Route.useSearch();
  const [etat, setEtat] = useState<Etat>({ etape: "chargement" });

  useEffect(() => {
    if (!u || !e || !s) {
      setEtat({ etape: "erreur", message: "Ce lien de validation est incomplet." });
      return;
    }
    lireDemandeValidation({ data: { u, e, s } })
      .then((r) =>
        setEtat(
          r.dejaValide
            ? { etape: "valide", prenom: r.prenom, email: r.email }
            : { etape: "pret", prenom: r.prenom, email: r.email },
        ),
      )
      .catch((err: Error) => setEtat({ etape: "erreur", message: err.message }));
  }, [u, e, s]);

  async function valider() {
    if (etat.etape !== "pret" || !u || !e || !s) return;
    setEtat({ ...etat, etape: "envoi" });
    try {
      await validerInscription({ data: { u, e, s } });
      setEtat({ etape: "valide", prenom: etat.prenom, email: etat.email });
    } catch (err) {
      setEtat({ etape: "erreur", message: (err as Error).message });
    }
  }

  return (
    <div className="bg-background flex min-h-screen items-center justify-center px-4 py-12">
      <div className="bg-card w-full max-w-md rounded-2xl border p-8 text-center shadow-sm">
        {etat.etape === "chargement" && (
          <Loader2 className="text-primary mx-auto h-8 w-8 animate-spin" aria-label="Chargement" />
        )}

        {(etat.etape === "pret" || etat.etape === "envoi") && (
          <>
            <ShieldCheck className="text-primary mx-auto h-8 w-8" aria-hidden="true" />
            <h1 className="font-display mt-4 text-2xl font-bold">Valider ce compte ?</h1>
            <p className="mt-4 text-lg font-semibold">{etat.prenom || "(sans prénom)"}</p>
            <p className="text-muted-foreground text-sm">{etat.email}</p>
            <button
              type="button"
              onClick={valider}
              disabled={etat.etape === "envoi"}
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:opacity-70"
            >
              {etat.etape === "envoi" && <Loader2 className="h-4 w-4 animate-spin" />}
              Valider l'accès
            </button>
          </>
        )}

        {etat.etape === "valide" && (
          <>
            <CheckCircle2 className="text-success mx-auto h-8 w-8" aria-hidden="true" />
            <h1 className="font-display mt-4 text-2xl font-bold">Compte validé</h1>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {etat.prenom || etat.email} a maintenant accès à tout le contenu. Il lui suffit de se
              reconnecter ou de recharger la page.
            </p>
          </>
        )}

        {etat.etape === "erreur" && (
          <>
            <XCircle className="text-destructive mx-auto h-8 w-8" aria-hidden="true" />
            <h1 className="font-display mt-4 text-2xl font-bold">Validation impossible</h1>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{etat.message}</p>
          </>
        )}

        <Link
          to="/"
          className="text-muted-foreground hover:text-foreground mt-8 inline-block text-sm underline-offset-4 hover:underline"
        >
          Retour au site
        </Link>
      </div>
    </div>
  );
}
