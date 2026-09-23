import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mic, PenLine, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { repondreFiches } from "@/lib/repondreData";

export const Route = createFileRoute("/savoir-repondre/")({
  head: () => {
    const description =
      "Méthode pour répondre quand on ne connaît pas la réponse, à l'écrit comme à l'oral des concours de la fonction publique territoriale : techniques, formulations et réflexes.";
    const title = "Répondre quand on ne sait pas | Prépa Territoriale";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: SavoirRepondreIndex;
});

function SavoirRepondreIndex() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-primary font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          Méthode transversale
        </p>
        <h1 className="text-foreground font-display mt-3 text-3xl sm:text-4xl">
          Répondre quand on ne sait pas
        </h1>
        <p className="text-muted-foreground mt-3 font-sans text-lg">
          Aucun candidat ne connaît tout. Ce qui distingue les admis, c'est la
          manière de traiter une question hors de leur portée : poser le
          problème, raisonner à partir des principes, assumer une limite et
          proposer une démarche. Cela s'apprend et se répète.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {repondreFiches.map((fiche) => (
            <Link
              key={fiche.id}
              to="/savoir-repondre/$ficheId"
              params={{ ficheId: fiche.id }}
              className="border-border bg-card hover:border-primary/50 group block rounded-2xl border p-6 transition"
            >
              <p className="text-muted-foreground flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase">
                {fiche.contexte === "ecrit" ? (
                  <PenLine className="size-4" />
                ) : (
                  <Mic className="size-4" />
                )}
                {fiche.contexte === "ecrit" ? "Épreuves écrites" : "Entretien oral"}
              </p>
              <h2 className="text-foreground font-display mt-2 text-xl">
                {fiche.title}
              </h2>
              <p className="text-primary mt-2 font-sans text-sm font-semibold">
                {fiche.accroche}
              </p>
              <p className="text-muted-foreground mt-2 font-sans text-sm">
                {fiche.resume}
              </p>
              <span className="text-primary mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold">
                Ouvrir la fiche
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <section className="border-primary/30 bg-primary/5 mt-12 rounded-2xl border p-6">
          <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
            <ShieldCheck className="size-4" /> Les trois règles d'or
          </p>
          <ul className="text-muted-foreground mt-3 space-y-2 font-sans text-sm">
            <li>
              Ne jamais rendre une question vide à l'écrit, ni rester muet à
              l'oral : il y a toujours quelque chose de juste à dire.
            </li>
            <li>
              Ne jamais inventer une référence précise : préférez un principe
              général assumé à un faux article de loi.
            </li>
            <li>
              Toujours proposer une démarche : où chercher, qui consulter,
              comment vérifier. C'est exactement ce qu'on attend d'un agent.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
