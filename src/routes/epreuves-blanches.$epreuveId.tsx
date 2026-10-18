import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlarmClock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  RotateCcw,
  XCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import {
  composerSujet,
  getEpreuve,
  type QuestionEpreuve,
} from "@/lib/epreuvesBlanches";

export const Route = createFileRoute("/epreuves-blanches/$epreuveId")({
  head: ({ params }) => {
    const epreuve = getEpreuve(params.epreuveId);
    const title = epreuve
      ? `${epreuve.titre} | Prépa Territoriale`
      : "Épreuve blanche — Prépa Territoriale";
    return {
      meta: [
        { title },
        {
          name: "description",
          content:
            "Épreuve blanche chronométrée en conditions réelles : QCM sans correction immédiate, corrigé détaillé à la fin.",
        },
      ],
    };
  },
  component: EpreuveBlanchePage,
});

function formatTemps(secondes: number): string {
  const m = Math.floor(secondes / 60);
  const s = secondes % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function EpreuveBlanchePage() {
  const { epreuveId } = Route.useParams();
  const epreuve = getEpreuve(epreuveId);

  const [sujet, setSujet] = useState<QuestionEpreuve[]>([]);
  const [demarre, setDemarre] = useState(false);
  const [rendu, setRendu] = useState(false);
  const [index, setIndex] = useState(0);
  const [reponses, setReponses] = useState<(number | null)[]>([]);
  const [reste, setReste] = useState(0);

  const finRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (epreuve) {
      const s = composerSujet(epreuve);
      setSujet(s);
      setReponses(Array<number | null>(s.length).fill(null));
      setReste(epreuve.dureeMinutes * 60);
    }
  }, [epreuve?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Rendu automatique toujours à jour pour le chronomètre.
  finRef.current = () => setRendu(true);

  // Chronomètre : décompte puis rendu automatique.
  useEffect(() => {
    if (!demarre || rendu) return;
    const interval = setInterval(() => {
      setReste((r) => {
        if (r <= 1) {
          clearInterval(interval);
          finRef.current?.();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [demarre, rendu]);

  const score = useMemo(
    () =>
      sujet.reduce(
        (n, q, i) => (reponses[i] === q.answerIndex ? n + 1 : n),
        0,
      ),
    [sujet, reponses],
  );

  if (!epreuve) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-2xl font-bold">
            Épreuve introuvable
          </h1>
          <p className="text-muted-foreground mt-3 text-sm">
            Cette épreuve blanche n'existe pas (ou plus).
          </p>
          <Link
            to="/epreuves-blanches"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Toutes les épreuves blanches
          </Link>
        </div>
      </div>
    );
  }

  function recommencer() {
    const s = composerSujet(epreuve!);
    setSujet(s);
    setReponses(Array<number | null>(s.length).fill(null));
    setReste(epreuve!.dureeMinutes * 60);
    setIndex(0);
    setDemarre(false);
    setRendu(false);
  }

  /* ---------------------------------- Intro --------------------------------- */
  if (!demarre && !rendu) {
    return (
      <div className="bg-background min-h-screen">
        <SiteHeader />
        <main className="mx-auto max-w-2xl px-4 py-12 sm:py-16">
          <Link
            to="/epreuves-blanches"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Toutes les épreuves blanches
          </Link>
          <p className="text-primary mt-6 text-xs font-semibold tracking-wide uppercase">
            {epreuve.niveau}
          </p>
          <h1 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
            {epreuve.titre}
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            {epreuve.description}
          </p>

          <div className="bg-card mt-8 rounded-2xl border p-6 shadow-sm">
            <div className="grid grid-cols-3 gap-4 border-b pb-5 text-center">
              <div>
                <p className="font-display text-2xl font-bold">
                  {sujet.length || "…"}
                </p>
                <p className="text-muted-foreground text-xs tracking-wide uppercase">
                  Questions
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold">
                  {epreuve.dureeMinutes} min
                </p>
                <p className="text-muted-foreground text-xs tracking-wide uppercase">
                  Temps imparti
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold">QCM</p>
                <p className="text-muted-foreground text-xs tracking-wide uppercase">
                  Format
                </p>
              </div>
            </div>
            <ul className="text-muted-foreground space-y-2.5 pt-5 text-sm leading-relaxed">
              <li>
                • Le chronomètre démarre dès que vous cliquez sur « Commencer »,
                sans possibilité de le mettre en pause.
              </li>
              <li>
                • Aucune correction pendant l'épreuve : vous pouvez changer vos
                réponses et naviguer librement entre les questions.
              </li>
              <li>
                • À la fin du temps imparti — ou quand vous rendez la copie — le
                corrigé détaillé s'affiche question par question.
              </li>
            </ul>
            <button
              onClick={() => sujet.length > 0 && setDemarre(true)}
              disabled={sujet.length === 0}
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:opacity-60"
            >
              <AlarmClock className="h-4 w-4" />
              Commencer l'épreuve
            </button>
          </div>
        </main>
      </div>
    );
  }

  /* --------------------------------- Résultats ------------------------------- */
  if (rendu) {
    const pourcentage = Math.round((score / Math.max(1, sujet.length)) * 100);
    let verdict: string;
    if (pourcentage >= 80) {
      verdict =
        "Excellent résultat : vous êtes en condition d'admissibilité. Continuez avec les autres épreuves pour confirmer.";
    } else if (pourcentage >= 50) {
      verdict =
        "Bonne base : reprenez le corrigé ci-dessous question par question, puis refaites l'épreuve pour gagner en vitesse.";
    } else {
      verdict =
        "Pas de panique : lisez chaque explication du corrigé, révisez les fiches mémo associées, puis retentez l'épreuve.";
    }
    const sansReponse = reponses.filter((r) => r === null).length;

    return (
      <div className="bg-background min-h-screen">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="text-center">
            <span className="bg-secondary text-secondary-foreground font-display flex h-28 w-28 items-center justify-center rounded-full text-3xl font-bold max-sm:mx-auto">
              {score}/{sujet.length}
            </span>
            <h1 className="font-display mt-6 text-3xl font-bold">
              {pourcentage}% de bonnes réponses
            </h1>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto leading-relaxed">
              {verdict}
            </p>
            {sansReponse > 0 && (
              <p className="text-muted-foreground mt-2 text-sm">
                {sansReponse} question{sansReponse > 1 ? "s" : ""} sans réponse.
              </p>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={recommencer}
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Refaire l'épreuve
              </button>
              <Link
                to="/epreuves-blanches"
                className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                Autres épreuves blanches
              </Link>
            </div>
          </div>

          <h2 className="font-display mt-14 text-2xl font-bold">
            Corrigé détaillé
          </h2>
          <div className="mt-6 space-y-5">
            {sujet.map((q, i) => {
              const choisie = reponses[i];
              const correcte = choisie === q.answerIndex;
              return (
                <div
                  key={i}
                  className={`bg-card rounded-2xl border p-5 shadow-sm sm:p-6 ${
                    choisie === null
                      ? "border-border"
                      : correcte
                        ? "border-success/40"
                        : "border-destructive/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                      Question {i + 1} · {q.themeTitre}
                    </p>
                    {choisie === null ? (
                      <span className="text-muted-foreground inline-flex shrink-0 items-center gap-1 text-xs font-semibold">
                        <XCircle className="h-4 w-4" />
                        Sans réponse
                      </span>
                    ) : correcte ? (
                      <span className="text-success inline-flex shrink-0 items-center gap-1 text-xs font-semibold">
                        <CheckCircle2 className="h-4 w-4" />
                        Bonne réponse
                      </span>
                    ) : (
                      <span className="text-destructive inline-flex shrink-0 items-center gap-1 text-xs font-semibold">
                        <XCircle className="h-4 w-4" />
                        Erreur
                      </span>
                    )}
                  </div>
                  <p className="font-display mt-2 text-base leading-snug font-bold">
                    {q.question}
                  </p>
                  <div className="mt-4 space-y-2">
                    {choisie !== null && !correcte && (
                      <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm">
                        <span className="text-destructive text-xs font-semibold tracking-wide uppercase">
                          Votre réponse
                        </span>
                        <br />
                        {q.options[choisie]}
                        {q.optionNotes[choisie] && (
                          <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
                            {q.optionNotes[choisie]}
                          </span>
                        )}
                      </p>
                    )}
                    <p className="rounded-lg border border-success/30 bg-success/10 p-3 text-sm">
                      <span className="text-success text-xs font-semibold tracking-wide uppercase">
                        Bonne réponse
                      </span>
                      <br />
                      {q.options[q.answerIndex]}
                      <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
                        {q.explanation}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  /* ---------------------------------- Épreuve -------------------------------- */
  const current = sujet[index];
  const repondues = reponses.filter((r) => r !== null).length;
  const danger = reste <= 60;

  return (
    <div className="bg-background flex min-h-screen flex-col">
      {/* Bandeau chronomètre */}
      <div
        className={`sticky top-0 z-20 border-b backdrop-blur ${
          danger
            ? "bg-destructive/10 border-destructive/30"
            : "bg-background/90 border-border"
        }`}
      >
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <ClipboardCheck className="text-primary h-4 w-4 shrink-0" />
            <p className="truncate text-sm font-semibold">{epreuve.titre}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <p className="text-muted-foreground text-xs font-medium">
              {repondues}/{sujet.length} répondues
            </p>
            <p
              className={`font-display inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold tabular-nums ${
                danger
                  ? "bg-destructive text-destructive-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <AlarmClock className="h-3.5 w-3.5" />
              {formatTemps(reste)}
            </p>
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        {/* Grille de navigation entre questions */}
        <div className="flex flex-wrap gap-1.5">
          {sujet.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Aller à la question ${i + 1}`}
              className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-bold transition-colors ${
                i === index
                  ? "bg-primary text-primary-foreground border-primary"
                  : reponses[i] !== null
                    ? "bg-primary/10 text-primary border-primary/30"
                    : "border-border text-muted-foreground hover:bg-accent"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {current && (
          <div className="bg-card mt-6 rounded-2xl border p-6 shadow-sm sm:p-8">
            <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              Question {index + 1} sur {sujet.length} · {current.themeTitre}
            </p>
            <h1 className="font-display mt-3 text-xl leading-snug font-bold sm:text-2xl">
              {current.question}
            </h1>
            <div className="mt-6 space-y-3">
              {current.options.map((option, i) => {
                const choisie = reponses[index] === i;
                return (
                  <button
                    key={i}
                    onClick={() =>
                      setReponses((r) => r.map((v, j) => (j === index ? i : v)))
                    }
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm leading-relaxed transition-colors ${
                      choisie
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border hover:border-primary/50 hover:bg-accent/50"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        choisie
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1">{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
                Précédent
              </button>
              {index < sujet.length - 1 ? (
                <button
                  onClick={() => setIndex((i) => i + 1)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
                >
                  Suivante
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={() => setRendu(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
                >
                  <ClipboardCheck className="h-4 w-4" />
                  Rendre la copie
                </button>
              )}
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              if (
                repondues === sujet.length ||
                window.confirm(
                  `Il vous reste ${sujet.length - repondues} question(s) sans réponse. Rendre la copie maintenant ?`,
                )
              ) {
                setRendu(true);
              }
            }}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 transition-colors hover:underline"
          >
            <ClipboardCheck className="h-4 w-4" />
            Rendre la copie et voir le corrigé
          </button>
        </div>
      </main>
    </div>
  );
}
