import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, GraduationCap, Sigma, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { coursDuNiveau, mathNiveaux } from "@/lib/mathsData";
import { getTheme } from "@/lib/quizData";

const title =
  "Cours de mathématiques — des bases au niveau ingénieur | Prépa Territoriale";
const description =
  "Un parcours complet de mathématiques pour les concours de la fonction publique territoriale : calcul et pourcentages, équations et statistiques, analyse et probabilités, algèbre linéaire et équations différentielles, optimisation et statistique inférentielle.";

export const Route = createFileRoute("/maths/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MathsPage,
});

function MathsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Raisonnement et calcul
        </p>
        <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
          Les mathématiques, des bases au niveau ingénieur
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-lg text-muted-foreground">
          Cinq niveaux progressifs, du calcul de tous les jours aux méthodes d'aide à
          la décision d'une direction technique. Chaque niveau propose des cours avec
          exemples corrigés, puis un entraînement noté.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 font-sans text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2">
            <Sigma className="size-4 text-primary" /> {mathNiveaux.length} niveaux
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2">
            <Calculator className="size-4 text-primary" /> 11 cours
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2">
            <Target className="size-4 text-primary" /> 25 questions corrigées
          </span>
        </div>

        <div className="mt-14 space-y-14">
          {mathNiveaux.map((niveau, index) => {
            const cours = coursDuNiveau(niveau.id);
            const quiz = getTheme(niveau.quizThemeId);
            return (
              <section key={niveau.id}>
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-primary/10 font-sans text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <h2 className="font-display text-2xl text-foreground">
                    {niveau.title}
                  </h2>
                  <span className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {niveau.public}
                  </span>
                </div>
                <p className="mt-3 max-w-3xl font-sans text-sm text-muted-foreground">
                  {niveau.intro}
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {cours.map((c) => (
                    <Link
                      key={c.id}
                      to="/maths/cours/$coursId"
                      params={{ coursId: c.id }}
                      className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <GraduationCap className="size-5" />
                      </span>
                      <h3 className="mt-4 font-display text-xl text-foreground group-hover:text-primary">
                        {c.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm text-muted-foreground">
                        {c.resume}
                      </p>
                      <p className="mt-4 font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
                        Cours · {c.duree}
                      </p>
                    </Link>
                  ))}
                </div>

                {quiz ? (
                  <Link
                    to="/quiz/$themeId"
                    params={{ themeId: quiz.id }}
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-sans text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    <Target className="size-4" />
                    S'entraîner sur ce niveau · {quiz.questions.length} questions
                  </Link>
                ) : null}
              </section>
            );
          })}
        </div>

        <section className="mt-16 rounded-2xl border border-border bg-card p-8">
          <h2 className="font-display text-2xl text-foreground">
            Comment progresser sans calculatrice
          </h2>
          <ol className="mt-4 space-y-3 font-sans text-sm text-muted-foreground">
            <li>
              1. Commencez par le niveau immédiatement inférieur à votre concours :
              les erreurs sanctionnées viennent presque toujours des bases.
            </li>
            <li>
              2. Refaites chaque exemple corrigé sur papier avant de lire la solution :
              c'est l'écriture des étapes qui est notée, pas seulement le résultat.
            </li>
            <li>
              3. Vérifiez systématiquement l'ordre de grandeur de votre réponse : un
              volume de terrassement de 3 000 m³ pour une tranchée doit vous alerter.
            </li>
            <li>
              4. Notez vos unités à chaque ligne : la moitié des points perdus en
              épreuve technique vient d'une conversion oubliée.
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
