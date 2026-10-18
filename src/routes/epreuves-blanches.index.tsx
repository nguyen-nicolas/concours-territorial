import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, Clock, ListChecks, Timer } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { epreuvesBlanches } from "@/lib/epreuvesBlanches";

export const Route = createFileRoute("/epreuves-blanches/")({
  head: () => ({
    meta: [
      {
        title: "Épreuves blanches — QCM chronométrés | Prépa Territoriale",
      },
      {
        name: "description",
        content:
          "Entraînez-vous en conditions réelles : des épreuves blanches chronométrées, sans correction immédiate, avec correction détaillée à la fin.",
      },
    ],
  }),
  component: EpreuvesBlanchesIndex,
});

function EpreuvesBlanchesIndex() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="bg-secondary text-secondary-foreground inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
          <Timer className="h-3.5 w-3.5" />
          Conditions d'examen
        </p>
        <h1 className="font-display mt-6 max-w-3xl text-4xl leading-tight font-bold sm:text-5xl">
          Espace épreuves blanches
        </h1>
        <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-relaxed">
          Le jour du concours, pas de correction immédiate et un temps limité :
          entraînez-vous exactement dans ces conditions. Choisissez une épreuve,
          le chronomètre démarre, et vous ne découvrez le corrigé détaillé
          qu'à la fin.
        </p>

        <div className="border-border mt-8 grid gap-4 rounded-2xl border p-5 sm:grid-cols-3">
          {[
            {
              icon: Clock,
              title: "Chronométré",
              text: "Le temps imparti s'affiche en permanence ; à zéro, la copie est rendue automatiquement.",
            },
            {
              icon: ClipboardCheck,
              title: "Sans filet",
              text: "Aucune correction pendant l'épreuve : vous pouvez revenir sur vos réponses avant de rendre.",
            },
            {
              icon: ListChecks,
              title: "Corrigé complet",
              text: "À la fin, chaque question est reprise : votre réponse, la bonne réponse et l'explication.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="bg-secondary text-secondary-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-bold">{item.title}</p>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {epreuvesBlanches.map((epreuve) => (
            <Link
              key={epreuve.id}
              to="/epreuves-blanches/$epreuveId"
              params={{ epreuveId: epreuve.id }}
              className="group bg-card hover:border-primary/40 relative flex flex-col rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="bg-secondary text-secondary-foreground flex h-11 w-11 items-center justify-center rounded-xl">
                <Timer className="h-5 w-5" />
              </span>
              <h2 className="font-display mt-4 text-lg leading-snug font-bold">
                {epreuve.titre}
              </h2>
              <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                {epreuve.description}
              </p>
              <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
                <span className="text-muted-foreground text-xs font-medium">
                  {epreuve.dureeMinutes} min · {epreuve.niveau}
                </span>
                <span className="text-primary inline-flex items-center gap-1 text-sm font-semibold">
                  Commencer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
