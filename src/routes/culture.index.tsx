import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Lightbulb } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { cultureDossiers } from "@/lib/cultureData";

export const Route = createFileRoute("/culture/")({
  head: () => {
    const description =
      "Dossiers thématiques de culture générale et administrative pour les concours territoriaux : décentralisation, service public, transition écologique, cohésion sociale, numérique, finances locales.";
    const title = "Culture générale approfondie | Prépa Territoriale";
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
  component: CultureIndex,
});

function CultureIndex() {
  const totalSujets = cultureDossiers.reduce((n, d) => n + d.sujets.length, 0);

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-primary font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          Culture générale approfondie
        </p>
        <h1 className="text-foreground font-display mt-3 text-3xl sm:text-4xl">
          Les dossiers thématiques
        </h1>
        <p className="text-muted-foreground mt-3 font-sans text-lg">
          Six dossiers pour construire une culture administrative solide :
          définitions exactes, repères historiques, chiffres à citer, acteurs,
          débats argumentés dans les deux sens et sujets d'entraînement. De quoi
          alimenter aussi bien une copie qu'un entretien avec le jury.
        </p>
        <p className="text-muted-foreground mt-2 font-sans text-sm">
          {cultureDossiers.length} dossiers · {totalSujets} sujets d'entraînement
        </p>

        <div className="mt-10 space-y-5">
          {cultureDossiers.map((dossier) => (
            <Link
              key={dossier.id}
              to="/culture/$dossierId"
              params={{ dossierId: dossier.id }}
              className="border-border bg-card hover:border-primary/50 group block rounded-2xl border p-6 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-muted-foreground flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase">
                    <BookOpen className="size-4" />
                    {dossier.famille}
                  </p>
                  <h2 className="text-foreground font-display mt-2 text-2xl">
                    {dossier.title}
                  </h2>
                  <p className="text-muted-foreground mt-2 font-sans text-sm">
                    {dossier.resume}
                  </p>
                  <p className="text-muted-foreground mt-3 flex items-center gap-2 font-sans text-xs">
                    <Clock className="size-3.5" />
                    {dossier.duree} · {dossier.chiffres.length} chiffres clés ·{" "}
                    {dossier.debats.length} débats
                  </p>
                </div>
                <ArrowRight className="text-primary mt-1 size-5 shrink-0 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <section className="border-primary/30 bg-primary/5 mt-12 rounded-2xl border p-6">
          <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
            <Lightbulb className="size-4" /> Comment utiliser ces dossiers
          </p>
          <ul className="text-muted-foreground mt-3 space-y-2 font-sans text-sm">
            <li>
              Apprenez d'abord les définitions : une notion mal employée décrédibilise
              toute une copie.
            </li>
            <li>
              Retenez trois chiffres et trois dates par dossier, pas davantage :
              ils suffisent à donner du poids à votre propos.
            </li>
            <li>
              Sur chaque débat, entraînez-vous à défendre les deux positions avant
              de formuler la vôtre, nuancée.
            </li>
            <li>
              Traitez un sujet par semaine en trente minutes, plan détaillé
              uniquement.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
