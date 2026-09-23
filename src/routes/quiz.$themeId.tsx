import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { getTheme, quizThemes } from "@/lib/quizData";

export const Route = createFileRoute("/quiz/$themeId")({
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

function QuizPage() {
  const { themeId } = Route.useParams();
  const theme = getTheme(themeId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { session } = useSession();
  const enregistre = useRef(false);
  const total = theme?.questions.length ?? 0;

  useEffect(() => {
    if (!finished || !session || enregistre.current || total === 0) return;
    enregistre.current = true;
    void supabase
      .from("quiz_resultats")
      .insert({ user_id: session.user.id, theme_id: themeId, score, total });
  }, [finished, session, score, total, themeId]);


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
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux thèmes
          </Link>
        </div>
      </div>
    );
  }

  const questions = theme.questions;
  const current = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  if (!current) {
    return null;
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    let verdict: string;
    if (percentage >= 80) {
      verdict =
        "Excellent ! Vous maîtrisez ce thème, passez au suivant pour consolider l'ensemble.";
    } else if (percentage >= 50) {
      verdict =
        "Bonne base ! Relisez les explications des questions manquées, puis rejouez le quiz.";
    } else {
      verdict =
        "C'est le moment d'apprendre : relisez chaque explication et recommencez, le score montera vite.";
    }

    return (
      <div className="bg-background flex min-h-screen flex-col">
        <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 py-16">
          <span className="bg-secondary text-secondary-foreground font-display flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold">
            {score}/{questions.length}
          </span>
          <h1 className="font-display mt-6 text-3xl font-bold">
            {percentage}% de bonnes réponses
          </h1>
          <p className="text-muted-foreground mt-3 max-w-md text-center leading-relaxed">
            {verdict}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setSelected(null);
                setScore(0);
                setFinished(false);
                enregistre.current = false;
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Refaire ce quiz
            </button>
            <Link
              to="/"
              hash="themes"
              className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              Autres thèmes
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const answered = selected !== null;
  const isCorrect = selected === current.answerIndex;

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10 sm:py-14">
        <Link
          to="/"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Tous les thèmes
        </Link>

        <div className="mt-6">
          <p className="text-primary text-xs font-semibold tracking-wide uppercase">
            {theme.title}
          </p>
          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm font-medium">
              Question {currentIndex + 1} sur {questions.length}
            </p>
            <p className="text-muted-foreground text-sm font-medium">
              Score : {score}
            </p>
          </div>
          <div className="bg-muted mt-2 h-2 overflow-hidden rounded-full">
            <div
              className="bg-primary h-full rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + (answered ? 1 : 0)) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="bg-card mt-6 rounded-2xl border p-6 shadow-sm sm:p-8">
          <h1 className="font-display text-xl leading-snug font-bold sm:text-2xl">
            {current.question}
          </h1>

          <div className="mt-6 space-y-3">
            {current.options.map((option, index) => {
              const isSelected = selected === index;
              const isAnswer = index === current.answerIndex;
              let optionClass =
                "border-border hover:border-primary/50 hover:bg-accent/50";

              if (answered) {
                if (isAnswer) {
                  optionClass =
                    "border-success/60 bg-success/10 text-foreground";
                } else if (isSelected) {
                  optionClass = "border-destructive/60 bg-destructive/10";
                } else {
                  optionClass = "border-border opacity-60";
                }
              }

              return (
                <button
                  key={index}
                  disabled={answered}
                  onClick={() => {
                    setSelected(index);
                    if (index === current.answerIndex) {
                      setScore((s) => s + 1);
                    }
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm leading-relaxed transition-colors ${optionClass}`}
                >
                  <span className="bg-secondary text-secondary-foreground flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {answered && isAnswer && (
                    <CheckCircle2 className="text-success h-5 w-5 shrink-0" />
                  )}
                  {answered && isSelected && !isAnswer && (
                    <XCircle className="text-destructive h-5 w-5 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

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
                    <CheckCircle2 className="text-success h-4 w-4" />
                    Bonne réponse !
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {current.explanation}
                  </p>
                </>
              ) : (
                <div className="space-y-4">
                  <p className="text-destructive flex items-center gap-2 text-sm font-semibold">
                    <XCircle className="text-destructive h-4 w-4" />
                    Ce n'était pas la bonne réponse
                  </p>
                  <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3">
                    <p className="text-destructive text-xs font-semibold tracking-wide uppercase">
                      Votre réponse — {String.fromCharCode(65 + (selected ?? 0))}
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      {current.options[selected ?? 0]}
                    </p>
                    {current.optionNotes[selected ?? 0] && (
                      <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                        {current.optionNotes[selected ?? 0]}
                      </p>
                    )}
                  </div>
                  <div className="rounded-lg border border-success/30 bg-success/10 p-3">
                    <p className="text-success text-xs font-semibold tracking-wide uppercase">
                      La bonne réponse —{" "}
                      {String.fromCharCode(65 + current.answerIndex)}
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

          {answered && (
            <button
              onClick={() => {
                if (isLast) {
                  setFinished(true);
                } else {
                  setCurrentIndex((i) => i + 1);
                  setSelected(null);
                }
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors"
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
