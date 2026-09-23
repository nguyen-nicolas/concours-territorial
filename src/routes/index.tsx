import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  CircleCheckBig,
  Landmark,
  LineChart,
  ListChecks,
  Scale,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { quizThemes } from "@/lib/quizData";
import { concoursList } from "@/lib/concours";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Prépa Territoriale — Entraînement aux concours de la fonction publique territoriale",
      },
      {
        name: "description",
        content:
          "Quiz d'entraînement gratuits pour préparer les concours de la fonction publique territoriale : culture générale, droit public, CGCT, statut, gestion budgétaire.",
      },
      {
        property: "og:title",
        content:
          "Prépa Territoriale — Entraînement aux concours de la fonction publique territoriale",
      },
      {
        property: "og:description",
        content:
          "Quiz d'entraînement gratuits pour préparer les concours de la fonction publique territoriale : culture générale, droit public, CGCT, statut, gestion budgétaire.",
      },
    ],
  }),
  component: Index,
});

const themeIcons: Record<string, typeof Landmark> = {
  "culture-generale": Landmark,
  "droit-public": Scale,
  cgct: BookOpenCheck,
  "statut-fpt": ShieldCheck,
  "gestion-comptabilite": Wallet,
};

const totalQuestions = quizThemes.reduce((sum, t) => sum + t.questions.length, 0);

function Index() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--color-primary) 0, transparent 45%), radial-gradient(circle at 85% 60%, var(--color-chart-2) 0, transparent 40%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
          <p className="bg-secondary text-secondary-foreground inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
            <Landmark className="h-3.5 w-3.5" />
            Fonction publique territoriale
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-4xl leading-tight font-bold text-balance sm:text-5xl lg:text-6xl">
            Préparez vos concours territoriaux, question par question.
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
            Fonctionnaire ou contractuel, révisez à votre rythme avec des quiz
            courts et concrets : chaque réponse est corrigée et expliquée, pour
            ancrer durablement les connaissances attendues le jour de l'épreuve.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/concours"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-colors"
            >
              Choisir mon concours
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#methode"
              className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
            >
              Comment ça marche
            </a>
          </div>
          <dl className="border-border mt-14 grid grid-cols-3 gap-6 border-t pt-8 sm:max-w-lg">
            <div>
              <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                Thèmes
              </dt>
              <dd className="font-display mt-1 text-3xl font-bold">
                {quizThemes.length}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                Questions
              </dt>
              <dd className="font-display mt-1 text-3xl font-bold">
                {totalQuestions}
              </dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs tracking-wide uppercase">
                Concours
              </dt>
              <dd className="font-display mt-1 text-3xl font-bold">
                {concoursList.length}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Thèmes */}
      <section id="themes" className="scroll-mt-20 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold">
                Choisissez votre thème d'entraînement
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Chaque série tire 10 questions au hasard dans la banque du
                thème, dans un ordre différent à chaque fois, avec correction
                détaillée.
              </p>
            </div>
            <Link
              to="/concours"
              className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              Voir par concours
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quizThemes.map((theme) => {
              const Icon =
                themeIcons[theme.id] ?? ListChecks;
              return (
                <Link
                  key={theme.id}
                  to="/quiz/$themeId"
                  params={{ themeId: theme.id }}
                  className="group bg-card hover:border-primary/40 relative flex flex-col rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="bg-secondary text-secondary-foreground flex h-11 w-11 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-4 text-lg leading-snug font-bold">
                    {theme.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                    {theme.description}
                  </p>
                  <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
                    <span className="text-muted-foreground text-xs font-medium">
                      {theme.questions.length} questions en banque ·{" "}
                      {theme.level}
                    </span>
                    <span className="text-primary inline-flex items-center gap-1 text-sm font-semibold">
                      Réviser
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="bg-primary text-primary-foreground scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-bold">
            Une méthode simple, qui tient dans une pause déjeuner
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: ListChecks,
                title: "1. Choisissez un thème",
                text: "Culture générale, droit public, CGCT, statut ou gestion : ciblez la matière où vous vous sentez le moins à l'aise.",
              },
              {
                icon: CircleCheckBig,
                title: "2. Répondez et apprenez",
                text: "Chaque question est corrigée immédiatement, avec l'explication du texte de référence (Constitution, CGCT, lois statutaires).",
              },
              {
                icon: LineChart,
                title: "3. Mesurez vos progrès",
                text: "À la fin de chaque quiz, votre score vous dit où vous en êtes — et sur quelles notions revenir.",
              },
            ].map((step) => (
              <div key={step.title}>
                <span className="bg-primary-foreground/10 flex h-12 w-12 items-center justify-center rounded-xl">
                  <step.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-4 text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          <Link
            to="/"
            hash="themes"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 mt-12 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors"
          >
            Voir les thèmes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-border border-t">
        <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:px-6">
          <p>Prépa Territoriale — s'informer, se former, réussir.</p>
          <p>Contenus d'entraînement, sans valeur réglementaire.</p>
        </div>
      </footer>
    </div>
  );
}
