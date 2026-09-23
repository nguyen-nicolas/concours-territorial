import type { QuizQuestion, QuizTheme } from "./quizData";

/** Taille d'une session d'entraînement. */
export const TAILLE_SESSION = 10;

function melanger<T>(items: T[]): T[] {
  const copie = [...items];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i]!, copie[j]!] = [copie[j]!, copie[i]!];
  }
  return copie;
}

/** Mélange les propositions d'une question en conservant la bonne réponse et ses notes. */
function melangerOptions(q: QuizQuestion): QuizQuestion {
  const indices = melanger(q.options.map((_, i) => i));
  return {
    ...q,
    options: indices.map((i) => q.options[i]!),
    optionNotes: indices.map((i) => q.optionNotes[i] ?? null),
    answerIndex: indices.indexOf(q.answerIndex),
  };
}

/**
 * Tire une série de questions au hasard dans la banque du thème,
 * dans un ordre différent à chaque fois, propositions mélangées.
 */
export function tirerSession(
  theme: QuizTheme,
  taille: number = TAILLE_SESSION,
): QuizQuestion[] {
  return melanger(theme.questions)
    .slice(0, Math.min(taille, theme.questions.length))
    .map(melangerOptions);
}

/** Nombre de séries distinctes possibles (indicatif, pour l'affichage). */
export function nombreDeSeries(theme: QuizTheme, taille = TAILLE_SESSION): number {
  return Math.max(1, Math.floor(theme.questions.length / taille));
}
