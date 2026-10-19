import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";
import { ArrowLeft, ArrowRight, CheckCircle2, RefreshCw, RotateCcw, XCircle } from "lucide-react";
import { getTheme } from "@/lib/quizData";
import { TAILLE_SESSION, melangerSerie, tirerSession } from "@/lib/quizSession";
import { getConcours } from "@/lib/concours";
import { useConcoursChoisi } from "@/hooks/useConcoursChoisi";

export const Route = createFileRoute("/quiz/$themeId")({
  // ?concours=<id> : le quiz a été ouvert depuis la page d'un concours, on y ramène l'utilisateur.
  validateSearch: (search: Record<string, unknown>): { concours?: string } => {
    const concours = search["concours"];
    return typeof concours === "string" ? { concours } : {};
  },
  head: ({ params }) => {
    const theme = getTheme(params.themeId);
    const title = theme
      ? `${theme.title} — Quiz d'entraînement | Prépa Territoriale`
      : "Quiz — Prépa Territoriale";
    const description = theme
      ? `Entraînez-vous au quiz « ${theme.title} » pour préparer les concours de la fonction publique territoriale : questions corrigées et expliquées.`
      : "Quiz d'entraînement aux concours de la fonction publique territoriale.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: QuizPage,
});

type ModeSerie = "serie" | "erreurs";

const LETTRES = ["a", "b", "c", "d", "e", "f"];

/** Défilement doux, sauf si l'utilisateur a demandé à réduire les animations. */
function comportementDefilement(): ScrollBehavior {
  if (typeof window === "undefined") return "auto";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function QuizPage() {
  const { themeId } = Route.useParams();
  const theme = getTheme(themeId);
  const { concours: concoursDepuis } = Route.useSearch();
  const { concoursId: concoursChoisi } = useConcoursChoisi();

  // Concours de rattachement pour les liens de retour : celui d'où l'on vient,
  // sinon celui que l'utilisateur prépare (si ce thème en fait partie).
  const concoursRetour =
    getConcours(concoursDepuis ?? "") ??
    (concoursChoisi && getConcours(concoursChoisi)?.themeIds.includes(themeId)
      ? getConcours(concoursChoisi)
      : undefined);

  const { session } = useSession();
  const [questions, setQuestions] = useState(() =>
    theme ? tirerSession(theme, TAILLE_SESSION) : [],
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  /** Réponse choisie pour chaque question de la série (même ordre que `questions`). */
  const [reponses, setReponses] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);
  const [mode, setMode] = useState<ModeSerie>("serie");
  const enregistre = useRef(false);

  const titreQuestionRef = useRef<HTMLHeadingElement>(null);
  const titreFinRef = useRef<HTMLHeadingElement>(null);
  const correctionRef = useRef<HTMLDivElement>(null);
  const suivantRef = useRef<HTMLButtonElement>(null);
  const premierRendu = useRef(true);

  const total = questions.length;
  const current = questions[currentIndex];
  const answered = selected !== null;
  const isLast = currentIndex === total - 1;
  const score = questions.reduce(
    (somme, q, i) => (reponses[i] === q.answerIndex ? somme + 1 : somme),
    0,
  );
  const erreurs = questions
    .map((q, i) => ({ question: q, reponse: reponses[i] ?? null }))
    .filter(({ question, reponse }) => reponse !== question.answerIndex);

  // Enregistre le score des séries normales (les révisions d'erreurs ne faussent pas la progression).
  useEffect(() => {
    if (!finished || mode !== "serie" || !session || enregistre.current || total === 0) return;
    enregistre.current = true;
    supabase
      .from("quiz_resultats")
      .insert({ user_id: session.user.id, theme_id: themeId, score, total })
      .then(({ error }) => {
        if (error) {
          enregistre.current = false;
          console.error(error);
        }
      });
  }, [finished, mode, session, score, total, themeId]);

  const repondre = useCallback(
    (index: number) => {
      if (selected !== null || !current || index >= current.options.length) return;
      setSelected(index);
      setReponses((precedentes) => {
        const copie = [...precedentes];
        copie[currentIndex] = index;
        return copie;
      });
    },
    [selected, current, currentIndex],
  );

  const suivant = useCallback(() => {
    if (selected === null) return;
    if (isLast) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
    }
  }, [selected, isLast]);

  function demarrer(nouvelles: typeof questions, nouveauMode: ModeSerie) {
    setQuestions(nouvelles);
    setCurrentIndex(0);
    setSelected(null);
    setReponses([]);
    setFinished(false);
    setMode(nouveauMode);
    enregistre.current = false;
  }

  // Après une réponse : la correction est annoncée (zone aria-live), le focus passe sur
  // « Question suivante » et, sur petit écran, la page défile jusqu'à la correction.
  useEffect(() => {
    if (selected === null) return;
    suivantRef.current?.focus({ preventScroll: true });
    const correction = correctionRef.current;
    if (!correction) return;
    const rect = correction.getBoundingClientRect();
    if (rect.bottom > window.innerHeight || rect.top < 0) {
      correction.scrollIntoView({ behavior: comportementDefilement(), block: "start" });
    }
  }, [selected]);

  // Nouvelle question ou fin de série : on remonte en haut et on place le focus sur le titre,
  // pour que le lecteur d'écran lise la nouvelle question.
  useEffect(() => {
    if (premierRendu.current) {
      premierRendu.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: comportementDefilement() });
    (finished ? titreFinRef : titreQuestionRef).current?.focus({ preventScroll: true });
  }, [currentIndex, finished, questions]);

  // Raccourcis clavier : A à D (ou 1 à 4) pour répondre, Entrée pour continuer.
  useEffect(() => {
    if (finished) return;
    function auClavier(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      const cible = event.target as HTMLElement | null;
      if (cible && ["INPUT", "TEXTAREA", "SELECT"].includes(cible.tagName)) return;
      const touche = event.key.toLowerCase();
      if (selected === null) {
        const parLettre = LETTRES.indexOf(touche);
        const parChiffre = /^[1-6]$/.test(touche) ? Number(touche) - 1 : -1;
        const index = parLettre >= 0 ? parLettre : parChiffre;
        if (index >= 0) {
          event.preventDefault();
          repondre(index);
        }
      } else if (touche === "enter" && cible?.tagName !== "BUTTON" && cible?.tagName !== "A") {
        event.preventDefault();
        suivant();
      }
    }
    window.addEventListener("keydown", auClavier);
    return () => window.removeEventListener("keydown", auClavier);
  }, [finished, selected, repondre, suivant]);

  if (!theme) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-bold">Quiz introuvable</h1>
          <p className="text-muted-foreground mt-3 text-sm">
            Ce thème d'entraînement n'existe pas (ou plus).
          </p>
          <Link
            to="/"
            hash="themes"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux thèmes
          </Link>
        </div>
      </div>
    );
  }

  if (!current) {
    return null;
  }

  const lienRetourClass =
    "border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors";

  if (finished) {
    const percentage = Math.round((score / total) * 100);
    let verdict: string;
    if (mode === "erreurs") {
      verdict =
        erreurs.length === 0
          ? "Toutes vos erreurs sont corrigées : ces notions sont acquises."
          : "Encore quelques notions à revoir : relisez les corrections ci-dessous et réessayez.";
    } else if (percentage >= 80) {
      verdict =
        "Excellent ! Vous maîtrisez ce thème, passez au suivant pour consolider l'ensemble.";
    } else if (percentage >= 50) {
      verdict = "Bonne base ! Relisez les corrections de vos erreurs ci-dessous, puis rejouez-les.";
    } else {
      verdict =
        "C'est le moment d'apprendre : relisez chaque correction et rejouez vos erreurs, le score montera vite.";
    }

    return (
      <div className="bg-background flex min-h-screen flex-col">
        <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-12 sm:py-16">
          <div className="flex flex-col items-center text-center">
            <p className="text-primary text-xs font-semibold tracking-wide uppercase">
              {theme.title}
              {mode === "erreurs" && " · révision des erreurs"}
            </p>
            <span className="bg-secondary text-secondary-foreground font-display mt-4 flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold">
              {score}/{total}
            </span>
            <h1
              ref={titreFinRef}
              tabIndex={-1}
              className="font-display mt-6 text-3xl font-bold outline-none"
            >
              {percentage}% de bonnes réponses
            </h1>
            <p className="text-muted-foreground mt-3 max-w-md leading-relaxed">{verdict}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {erreurs.length > 0 && (
                <button
                  type="button"
                  onClick={() => demarrer(melangerSerie(erreurs.map((e) => e.question)), "erreurs")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                  Rejouer mes {erreurs.length} erreur{erreurs.length > 1 ? "s" : ""}
                </button>
              )}
              <button
                type="button"
                onClick={() => demarrer(tirerSession(theme, TAILLE_SESSION), "serie")}
                className={
                  erreurs.length > 0
                    ? lienRetourClass
                    : "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
                }
              >
                <RotateCcw className="h-4 w-4" />
                Nouvelle série de questions
              </button>
              {concoursRetour ? (
                <Link
                  to="/concours/$concoursId"
                  params={{ concoursId: concoursRetour.id }}
                  className={lienRetourClass}
                >
                  Autres thèmes de ce concours
                </Link>
              ) : (
                <Link to="/" hash="themes" className={lienRetourClass}>
                  Autres thèmes
                </Link>
              )}
            </div>

            {mode === "erreurs" ? (
              <p className="text-muted-foreground mt-6 text-sm">
                Les séries de révision des erreurs ne sont pas comptées dans votre progression.
              </p>
            ) : session ? (
              <p className="text-muted-foreground mt-6 text-sm">
                Résultat enregistré dans{" "}
                <Link
                  to="/mon-espace"
                  className="text-primary font-semibold underline-offset-4 hover:underline"
                >
                  votre espace
                </Link>
                .
              </p>
            ) : (
              <p className="text-muted-foreground mt-6 text-sm">
                <Link
                  to="/auth"
                  search={{ mode: "inscription" }}
                  className="text-primary font-semibold underline-offset-4 hover:underline"
                >
                  Créez votre compte
                </Link>{" "}
                pour conserver vos scores et suivre votre progression.
              </p>
            )}
          </div>

          {erreurs.length > 0 && (
            <section aria-labelledby="titre-erreurs" className="mt-12">
              <h2 id="titre-erreurs" className="font-display text-xl font-bold">
                Vos erreurs à revoir
              </h2>
              <ol className="mt-4 space-y-4">
                {erreurs.map(({ question, reponse }, i) => (
                  <li key={question.question} className="bg-card rounded-2xl border p-5 shadow-sm">
                    <p className="text-muted-foreground text-xs font-semibold">Erreur {i + 1}</p>
                    <p className="font-display mt-1 font-bold leading-snug">{question.question}</p>
                    {reponse !== null && (
                      <div className="border-destructive/30 bg-destructive/10 mt-3 rounded-lg border p-3">
                        <p className="text-destructive text-xs font-semibold tracking-wide uppercase">
                          Votre réponse
                        </p>
                        <p className="mt-1 text-sm font-medium">{question.options[reponse]}</p>
                        {question.optionNotes[reponse] && (
                          <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                            {question.optionNotes[reponse]}
                          </p>
                        )}
                      </div>
                    )}
                    <div className="border-success/30 bg-success/10 mt-3 rounded-lg border p-3">
                      <p className="text-success text-xs font-semibold tracking-wide uppercase">
                        La bonne réponse
                      </p>
                      <p className="mt-1 text-sm font-medium">
                        {question.options[question.answerIndex]}
                      </p>
                      <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </main>
      </div>
    );
  }

  const isCorrect = selected === current.answerIndex;

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10 sm:py-14">
        {concoursRetour ? (
          <Link
            to="/concours/$concoursId"
            params={{ concoursId: concoursRetour.id }}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {concoursRetour.title}
          </Link>
        ) : (
          <Link
            to="/"
            hash="themes"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les quiz
          </Link>
        )}

        <div className="mt-6">
          <p className="text-primary text-xs font-semibold tracking-wide uppercase">
            {theme.title}
            {mode === "erreurs" && " · révision des erreurs"}
          </p>
          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm font-medium">
              Question {currentIndex + 1} sur {total}
            </p>
            <p className="text-muted-foreground text-sm font-medium">Score : {score}</p>
          </div>
          <div
            className="bg-muted mt-2 h-2 overflow-hidden rounded-full"
            role="progressbar"
            aria-label="Progression de la série"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={currentIndex + (answered ? 1 : 0)}
          >
            <div
              className="bg-primary h-full rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + (answered ? 1 : 0)) / total) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="bg-card mt-6 rounded-2xl border p-6 shadow-sm sm:p-8">
          <h1
            ref={titreQuestionRef}
            tabIndex={-1}
            className="font-display text-xl leading-snug font-bold outline-none sm:text-2xl"
          >
            {current.question}
          </h1>

          <div className="mt-6 space-y-3">
            {current.options.map((option, index) => {
              const isSelected = selected === index;
              const isAnswer = index === current.answerIndex;
              let optionClass = "border-border hover:border-primary/50 hover:bg-accent/50";
              if (answered) {
                if (isAnswer) {
                  optionClass = "border-success/60 bg-success/10 text-foreground";
                } else if (isSelected) {
                  optionClass = "border-destructive/60 bg-destructive/10";
                } else {
                  optionClass = "border-border opacity-60";
                }
              }
              return (
                <button
                  key={index}
                  type="button"
                  disabled={answered}
                  onClick={() => repondre(index)}
                  className={`focus-visible:ring-ring flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm leading-relaxed transition-colors outline-none focus-visible:ring-2 ${optionClass}`}
                >
                  <span
                    aria-hidden="true"
                    className="bg-secondary text-secondary-foreground flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {answered && isAnswer && (
                    <CheckCircle2
                      className="text-success h-5 w-5 shrink-0"
                      aria-label="Bonne réponse"
                    />
                  )}
                  {answered && isSelected && !isAnswer && (
                    <XCircle
                      className="text-destructive h-5 w-5 shrink-0"
                      aria-label="Votre réponse, incorrecte"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {!answered && (
            <p className="text-muted-foreground mt-4 hidden text-xs md:block">
              Astuce : répondez au clavier avec les touches A, B, C, D, puis Entrée pour continuer.
            </p>
          )}

          {/* Zone toujours présente pour que les lecteurs d'écran annoncent la correction */}
          <div ref={correctionRef} aria-live="polite" className="scroll-mt-4">
            {answered && (
              <div
                className={`mt-6 rounded-xl border p-4 ${
                  isCorrect
                    ? "border-success/40 bg-success/5"
                    : "border-destructive/40 bg-destructive/5"
                }`}
              >
                {isCorrect ? (
                  <>
                    <p className="text-success flex items-center gap-2 text-sm font-semibold">
                      <CheckCircle2 className="text-success h-4 w-4" aria-hidden="true" />
                      Bonne réponse !
                    </p>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {current.explanation}
                    </p>
                  </>
                ) : (
                  <div className="space-y-4">
                    <p className="text-destructive flex items-center gap-2 text-sm font-semibold">
                      <XCircle className="text-destructive h-4 w-4" aria-hidden="true" />
                      Ce n'était pas la bonne réponse
                    </p>
                    <div className="border-destructive/30 bg-destructive/10 rounded-lg border p-3">
                      <p className="text-destructive text-xs font-semibold tracking-wide uppercase">
                        Votre réponse — {String.fromCharCode(65 + (selected ?? 0))}
                      </p>
                      <p className="mt-1 text-sm font-medium">{current.options[selected ?? 0]}</p>
                      {current.optionNotes[selected ?? 0] && (
                        <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                          {current.optionNotes[selected ?? 0]}
                        </p>
                      )}
                    </div>
                    <div className="border-success/30 bg-success/10 rounded-lg border p-3">
                      <p className="text-success text-xs font-semibold tracking-wide uppercase">
                        La bonne réponse — {String.fromCharCode(65 + current.answerIndex)}
                      </p>
                      <p className="mt-1 text-sm font-medium">
                        {current.options[current.answerIndex]}
                      </p>
                      <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                        {current.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {answered && (
            <button
              ref={suivantRef}
              type="button"
              onClick={suivant}
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              {isLast ? "Voir mon score" : "Question suivante"}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
