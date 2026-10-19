import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  CircleCheckBig,
  Landmark,
  LineChart,
  ListChecks,
  Scale,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { quizThemes, type QuizTheme } from "@/lib/quizData";
import { francaisThemes } from "@/lib/francaisQuiz";
import { mathsThemes } from "@/lib/mathsQuiz";
import { themesAgentMaitrise } from "@/lib/banqueAgentMaitrise";
import { concoursList, getConcours } from "@/lib/concours";
import { useConcoursChoisi } from "@/hooks/useConcoursChoisi";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Prépa Territoriale — Entraînement aux concours de la fonction publique territoriale",
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

/**
 * Regroupement des thèmes de l'accueil. Les thèmes de français, de maths et d'agent de maîtrise
 * sont repris automatiquement de leurs fichiers ; tous les autres forment le socle commun.
 */
const idsFrancais = new Set(francaisThemes.map((t) => t.id));
const idsMaths = new Set(mathsThemes.map((t) => t.id));
const idsAgentMaitrise = new Set(themesAgentMaitrise.map((t) => t.id));

const GROUPES_THEMES: { titre: string; description: string; themes: QuizTheme[] }[] = [
  {
    titre: "Socle commun",
    description: "Culture générale, institutions, statut et finances locales.",
    themes: quizThemes.filter(
      (t) => !idsFrancais.has(t.id) && !idsMaths.has(t.id) && !idsAgentMaitrise.has(t.id),
    ),
  },
  {
    titre: "Français",
    description: "Orthographe, grammaire et conjugaison.",
    themes: quizThemes.filter((t) => idsFrancais.has(t.id)),
  },
  {
    titre: "Mathématiques",
    description: "Du niveau catégorie C au concours d'ingénieur en chef.",
    themes: quizThemes.filter((t) => idsMaths.has(t.id)),
  },
  {
    titre: "Agent de maîtrise",
    description: "Hygiène et sécurité, encadrement, techniques BTP et VRD.",
    themes: quizThemes.filter((t) => idsAgentMaitrise.has(t.id)),
  },
];

function CarteTheme({ theme }: { theme: QuizTheme }) {
  const Icon = themeIcons[theme.id] ?? ListChecks;
  return (
    <Link
      to="/quiz/$themeId"
      params={{ themeId: theme.id }}
      className="group bg-card hover:border-primary/40 relative flex flex-col rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <span className="bg-secondary text-secondary-foreground flex h-11 w-11 items-center justify-center rounded-xl">
        <Icon className="h-5 w-5" />
      </span>
      <h4 className="font-display mt-4 text-lg leading-snug font-bold">{theme.title}</h4>
      <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
        {theme.description}
      </p>
      <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
        <span className="text-muted-foreground text-xs font-medium">
          {theme.questions.length} questions en banque · {theme.level}
        </span>
        <span className="text-primary inline-flex items-center gap-1 text-sm font-semibold">
          Réviser
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

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
            Fonctionnaire ou contractuel, révisez à votre rythme avec des quiz courts et concrets :
            chaque réponse est corrigée et expliquée, pour ancrer durablement les connaissances
            attendues le jour de l'épreuve.
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
              <dt className="text-muted-foreground text-xs tracking-wide uppercase">Thèmes</dt>
              <dd className="font-display mt-1 text-3xl font-bold">{quizThemes.length}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs tracking-wide uppercase">Questions</dt>
              <dd className="font-display mt-1 text-3xl font-bold">{totalQuestions}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs tracking-wide uppercase">Concours</dt>
              <dd className="font-display mt-1 text-3xl font-bold">{concoursList.length}</dd>
            </div>
          </dl>
        </div>
      </section>

      <BandeauMonConcours />

      {/* Thèmes */}
      <section id="themes" className="scroll-mt-20 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold">
                Choisissez votre thème d'entraînement
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Chaque série tire 10 questions au hasard dans la banque du thème, dans un ordre
                différent à chaque fois, avec correction détaillée.
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
          <div className="mt-10 space-y-12">
            {GROUPES_THEMES.filter((groupe) => groupe.themes.length > 0).map((groupe) => (
              <div key={groupe.titre}>
                <div className="border-border flex flex-wrap items-baseline justify-between gap-2 border-b pb-3">
                  <h3 className="font-display text-xl font-bold">{groupe.titre}</h3>
                  <p className="text-muted-foreground text-sm">{groupe.description}</p>
                </div>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {groupe.themes.map((theme) => (
                    <CarteTheme key={theme.id} theme={theme} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Épreuves blanches */}
      <section id="epreuves-blanches" className="scroll-mt-20 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-card hover:border-primary/40 group relative overflow-hidden rounded-3xl border p-8 shadow-sm transition-all sm:p-10">
            <div
              className="absolute inset-0 -z-10 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, var(--color-primary) 0, transparent 50%)",
              }}
            />
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                  Conditions d'examen
                </p>
                <h2 className="font-display mt-3 max-w-xl text-3xl font-bold">
                  Passez les épreuves blanches chronométrées
                </h2>
                <p className="text-muted-foreground mt-3 max-w-xl leading-relaxed">
                  Trois sujets complets, un temps imparti, aucune correction pendant l'épreuve : le
                  vrai test pour savoir si vous êtes prêt(e), avec le corrigé détaillé à la fin.
                </p>
              </div>
              <Link
                to="/epreuves-blanches"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold shadow-lg transition-colors"
              >
                Découvrir l'espace
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
                <h3 className="font-display mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{step.text}</p>
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
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <p>Contenus d'entraînement, sans valeur réglementaire.</p>
            <Link
              to="/soutenir"
              className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
            >
              Soutenir le projet
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Bandeau personnalisé pour l'utilisateur connecté : reprend son concours,
 * ou l'invite à en choisir un. Rien ne s'affiche pour un visiteur non connecté.
 */
function BandeauMonConcours() {
  const { connecte, chargement, concoursId } = useConcoursChoisi();
  if (!connecte || chargement) return null;

  const concours = concoursId ? getConcours(concoursId) : undefined;
  const themes = concours
    ? concours.themeIds
        .map((id) => quizThemes.find((t) => t.id === id))
        .filter((t): t is QuizTheme => Boolean(t))
        .slice(0, 3)
    : [];

  return (
    <section aria-label="Mon concours" className="pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-card rounded-2xl border p-6 shadow-sm sm:p-8">
          {concours ? (
            <>
              <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                Votre concours
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                <h2 className="font-display text-2xl font-bold">{concours.title}</h2>
                <Link
                  to="/concours/$concoursId"
                  params={{ concoursId: concours.id }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
                >
                  Reprendre mes entraînements
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              {themes.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {themes.map((theme) => (
                    <Link
                      key={theme.id}
                      to="/quiz/$themeId"
                      params={{ themeId: theme.id }}
                      search={{ concours: concours.id }}
                      className="border-border hover:border-primary/40 hover:bg-accent rounded-full border px-4 py-2 text-sm transition-colors"
                    >
                      {theme.title}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-1 h-5 w-5 shrink-0" />
                <div>
                  <h2 className="font-display text-xl font-bold">Quel concours préparez-vous ?</h2>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Choisissez-le pour retrouver vos thèmes dès l'accueil.
                  </p>
                </div>
              </div>
              <Link
                to="/concours"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                Choisir mon concours
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
