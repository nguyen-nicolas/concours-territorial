import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { Heart, ShieldCheck, Sparkles, BookOpenCheck, CircleCheck } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { getStripe, getStripeEnvironment, paiementsDisponibles } from "@/lib/stripe";
import { createDonCheckout } from "@/lib/dons.functions";
import { useSession } from "@/hooks/useSession";

export const Route = createFileRoute("/soutenir")({
  validateSearch: (search: Record<string, unknown>): { session_id?: string } => {
    const sid = search["session_id"];
    return typeof sid === "string" ? { session_id: sid } : {};
  },
  head: () => ({
    meta: [
      { title: "Soutenir le projet — Prépa Territoriale" },
      {
        name: "description",
        content:
          "Soutenez Prépa Territoriale par un don : aidez-nous à enrichir les quiz, les cours et les dictées pour préparer les concours de la fonction publique territoriale.",
      },
      { property: "og:title", content: "Soutenir le projet — Prépa Territoriale" },
      {
        property: "og:description",
        content:
          "Soutenez Prépa Territoriale par un don : aidez-nous à enrichir les quiz, les cours et les dictées pour préparer les concours de la fonction publique territoriale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SoutenirPage,
});

const MONTANTS = [
  { cents: 300, label: "3 €", accroche: "Un café pour l'équipe" },
  { cents: 500, label: "5 €", accroche: "De nouvelles questions" },
  { cents: 1000, label: "10 €", accroche: "Un chapitre de cours" },
  { cents: 2000, label: "20 €", accroche: "Une dictée complète" },
];

function SoutenirPage() {
  const { session_id: sessionId } = Route.useSearch();
  const { session } = useSession();
  const [montantCents, setMontantCents] = useState<number>(500);
  const [montantLibre, setMontantLibre] = useState<string>("");
  const [lance, setLance] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  const montantEffectif = useMemo(() => {
    if (montantLibre.trim() !== "") {
      const valeur = Number(montantLibre.replace(",", "."));
      if (Number.isFinite(valeur)) return Math.round(valeur * 100);
      return 0;
    }
    return montantCents;
  }, [montantCents, montantLibre]);

  const checkoutOptions = useMemo(
    () => ({
      fetchClientSecret: async (): Promise<string> => {
        const email = session?.user?.email;
        const result = await createDonCheckout({
          data: {
            amountInCents: montantEffectif,
            ...(email ? { customerEmail: email } : {}),
            returnUrl: `${window.location.origin}/soutenir?session_id={CHECKOUT_SESSION_ID}`,
            environment: getStripeEnvironment(),
          },
        });
        if ("error" in result) throw new Error(result.error);
        if (!result.clientSecret)
          throw new Error("Le paiement n'a pas pu être préparé.");
        return result.clientSecret;
      },
    }),
    [montantEffectif, session?.user?.email],
  );

  return (
    <div className="bg-background min-h-screen">
      <PaymentTestModeBanner />
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        {sessionId ? (
          <div className="border-border bg-card mx-auto max-w-xl rounded-xl border p-8 text-center shadow-sm">
            <CircleCheck className="text-primary mx-auto h-12 w-12" />
            <h1 className="font-display text-foreground mt-4 text-3xl font-bold">
              Merci pour votre don !
            </h1>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Votre soutien nous aide à enrichir les quiz, les cours et les
              dictées pour tous les candidats aux concours territoriaux. Un
              reçu vous sera envoyé par e-mail.
            </p>
            <a
              href="/"
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
              Retour à l'accueil
            </a>
          </div>
        ) : (
          <>
            <div className="text-center">
              <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
                <Heart className="h-3.5 w-3.5" />
                Soutenir le projet
              </span>
              <h1 className="font-display text-foreground mt-4 text-3xl font-bold sm:text-4xl">
                Aidez Prépa Territoriale à grandir
              </h1>
              <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:text-base">
                La plateforme est gratuite pour tous les candidats. Vos dons
                financent l'enrichissement des banques de questions, la
                rédaction de nouveaux cours et l'ajout de nouvelles dictées et
                épreuves.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="border-border bg-card rounded-lg border p-4 text-center">
                <BookOpenCheck className="text-primary mx-auto h-6 w-6" />
                <p className="text-foreground mt-2 text-sm font-semibold">
                  Plus de contenus
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Questions, cours et dossiers thématiques supplémentaires.
                </p>
              </div>
              <div className="border-border bg-card rounded-lg border p-4 text-center">
                <Sparkles className="text-primary mx-auto h-6 w-6" />
                <p className="text-foreground mt-2 text-sm font-semibold">
                  De nouveaux concours
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Couvrir davantage de filières et d'épreuves.
                </p>
              </div>
              <div className="border-border bg-card rounded-lg border p-4 text-center">
                <ShieldCheck className="text-primary mx-auto h-6 w-6" />
                <p className="text-foreground mt-2 text-sm font-semibold">
                  Paiement sécurisé
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Transaction chiffrée, reçu envoyé par e-mail.
                </p>
              </div>
            </div>

            {!paiementsDisponibles() ? (
              <div className="border-border bg-card mt-10 rounded-xl border p-6 text-center shadow-sm sm:p-8">
                <Heart className="text-primary mx-auto h-8 w-8" />
                <h2 className="font-display text-foreground mt-3 text-xl font-bold">
                  Les dons sont momentanément indisponibles
                </h2>
                <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
                  Le service de paiement n'est pas actif pour le moment. Vous
                  pouvez déjà nous aider en partageant la plateforme autour de
                  vous et en nous signalant les contenus à améliorer.
                </p>
              </div>
            ) : !lance ? (
              <div className="border-border bg-card mt-10 rounded-xl border p-6 shadow-sm sm:p-8">
                <h2 className="font-display text-foreground text-xl font-bold">
                  Choisissez un montant
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {MONTANTS.map((m) => (
                    <button
                      key={m.cents}
                      type="button"
                      onClick={() => {
                        setMontantCents(m.cents);
                        setMontantLibre("");
                      }}
                      className={
                        montantLibre === "" && montantCents === m.cents
                          ? "border-primary bg-primary/5 rounded-lg border-2 p-4 text-center"
                          : "border-border bg-background hover:border-primary/50 rounded-lg border-2 p-4 text-center transition-colors"
                      }
                    >
                      <span className="font-display text-foreground block text-2xl font-bold">
                        {m.label}
                      </span>
                      <span className="text-muted-foreground mt-1 block text-xs">
                        {m.accroche}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="montant-libre"
                    className="text-foreground text-sm font-medium"
                  >
                    Ou un montant libre (en euros)
                  </label>
                  <input
                    id="montant-libre"
                    type="text"
                    inputMode="decimal"
                    placeholder="Ex. 15"
                    value={montantLibre}
                    onChange={(e) => setMontantLibre(e.target.value)}
                    className="border-input bg-background text-foreground focus:ring-primary mt-2 w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:outline-none sm:max-w-xs"
                  />
                </div>

                {erreur && (
                  <p className="text-destructive mt-3 text-sm">{erreur}</p>
                )}

                <button
                  type="button"
                  onClick={() => {
                    if (montantEffectif < 100) {
                      setErreur("Le don minimum est de 1 €.");
                      return;
                    }
                    if (montantEffectif > 500000) {
                      setErreur("Le don maximum est de 5 000 €.");
                      return;
                    }
                    setErreur(null);
                    setLance(true);
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-semibold transition-colors sm:w-auto"
                >
                  <Heart className="h-4 w-4" />
                  Faire un don de{" "}
                  {(montantEffectif / 100).toFixed(2).replace(".", ",")} €
                </button>
              </div>
            ) : (
              <div className="mt-10">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-muted-foreground text-sm">
                    Don de{" "}
                    <span className="text-foreground font-semibold">
                      {(montantEffectif / 100).toFixed(2).replace(".", ",")} €
                    </span>{" "}
                    — paiement sécurisé
                  </p>
                  <button
                    type="button"
                    onClick={() => setLance(false)}
                    className="text-primary text-sm underline underline-offset-4"
                  >
                    Modifier le montant
                  </button>
                </div>
                <EmbeddedCheckoutProvider
                  stripe={getStripe()}
                  options={checkoutOptions}
                >
                  <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
              </div>
            )}

            <p className="text-muted-foreground mt-8 text-center text-xs leading-relaxed">
              Prépa Territoriale est une plateforme d'entraînement indépendante.
              Les dons ne donnent droit à aucun avantage particulier et ne sont
              pas remboursables. Pour toute question, contactez-nous depuis
              votre espace.
            </p>
          </>
        )}
      </main>
    </div>
  );
}
