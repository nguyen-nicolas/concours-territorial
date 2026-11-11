import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Clock, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { coursAMDeLaPartie, coursAgentMaitrise, partiesCoursAM } from "@/lib/coursAgentMaitrise";
import { getTheme } from "@/lib/quizData";

const title = "Cours du concours d'agent de maîtrise territorial (BTP / VRD) | Prépa Territoriale";
const description =
  "Onze cours pour préparer le concours interne d'agent de maîtrise territorial : méthode de l'écrit, bâtiment, terrassement, voirie, réseaux, calculs de chantier, sécurité, encadrement et oral.";

export const Route = createFileRoute("/cours-agent-maitrise/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CoursAgentMaitrisePage,
});

function CoursAgentMaitrisePage() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
          Agent de maîtrise territorial · BTP / VRD
        </p>
        <h1 className="font-display text-foreground mt-3 text-4xl sm:text-5xl">
          Les cours du concours
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
          Du cas pratique à l'entretien avec le jury : chaque cours reprend l'essentiel du
          programme, avec des exemples corrigés, les pièges fréquents et un entraînement noté.
        </p>

        <div className="text-muted-foreground mt-8 flex flex-wrap gap-4 text-sm">
          <span className="border-border inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <BookOpen className="text-primary size-4" /> {coursAgentMaitrise.length} cours
          </span>
          <Link
            to="/concours/$concoursId"
            params={{ concoursId: "agent-maitrise" }}
            className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-colors"
          >
            <Target className="text-primary size-4" /> Voir tous les quiz du concours
          </Link>
        </div>

        <div className="mt-14 space-y-14">
          {partiesCoursAM.map((partie, index) => {
            const cours = coursAMDeLaPartie(partie.id);
            return (
              <section key={partie.id}>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="bg-primary/10 text-primary inline-flex size-9 items-center justify-center rounded-xl text-sm font-semibold">
                    {index + 1}
                  </span>
                  <h2 className="font-display text-foreground text-2xl">{partie.titre}</h2>
                </div>
                <p className="text-muted-foreground mt-2 max-w-3xl text-sm">{partie.description}</p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {cours.map((c) => {
                    const quiz = c.quizThemeId ? getTheme(c.quizThemeId) : undefined;
                    return (
                      <Link
                        key={c.id}
                        to="/cours-agent-maitrise/$coursId"
                        params={{ coursId: c.id }}
                        className="group border-border bg-card hover:border-primary flex flex-col rounded-2xl border p-6 transition hover:shadow-lg"
                      >
                        <h3 className="font-display text-foreground group-hover:text-primary text-xl">
                          {c.title}
                        </h3>
                        <p className="text-muted-foreground mt-2 text-sm">{c.resume}</p>
                        <p className="text-muted-foreground mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs tracking-[0.1em] uppercase">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="size-3.5" /> {c.duree}
                          </span>
                          {quiz ? (
                            <span className="inline-flex items-center gap-1.5">
                              <Target className="size-3.5" /> {quiz.questions.length} questions
                            </span>
                          ) : null}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <p className="text-muted-foreground border-border mt-16 rounded-2xl border p-6 text-sm leading-relaxed">
          Les valeurs réglementaires citées sont des repères de préparation. Vérifiez toujours les
          épreuves, durées et coefficients dans l'arrêté d'ouverture et la note de cadrage du centre
          de gestion organisateur.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
