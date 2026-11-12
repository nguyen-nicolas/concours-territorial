import { questionsQcmAtsem, type QuestionQcm, type ThemeQcmId } from "./qcmAtsem";

export type ModeQcm = "epreuve" | "entrainement";

export const EPREUVE = { questions: 20, minutes: 45 };
export const TAILLE_ENTRAINEMENT = 10;

export interface QuestionSession extends QuestionQcm {
  /** Indices d'origine des propositions, pour retrouver les bonnes réponses après mélange. */
  ordre: number[];
}

function melanger<T>(items: T[]): T[] {
  const copie = [...items];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i]!, copie[j]!] = [copie[j]!, copie[i]!];
  }
  return copie;
}

function melangerPropositions(q: QuestionQcm): QuestionSession {
  const ordre = melanger(q.options.map((_, i) => i));
  return {
    ...q,
    options: ordre.map((i) => q.options[i]!),
    bonnes: q.bonnes.map((b) => ordre.indexOf(b)).sort((a, b) => a - b),
    ordre,
  };
}

/** Tire une série : toute la banque pour l'épreuve blanche, ou un thème pour l'entraînement. */
export function composerSerie(mode: ModeQcm, theme: ThemeQcmId | "tous"): QuestionSession[] {
  const reserve =
    theme === "tous" || mode === "epreuve"
      ? questionsQcmAtsem
      : questionsQcmAtsem.filter((q) => q.theme === theme);
  const taille = mode === "epreuve" ? EPREUVE.questions : TAILLE_ENTRAINEMENT;
  return melanger(reserve).slice(0, Math.min(taille, reserve.length)).map(melangerPropositions);
}

/**
 * Barème officiel de la session 2026 : toutes les bonnes réponses et aucune fausse = 1 point ;
 * au moins la moitié des bonnes réponses sans aucune fausse = 0,5 point ; sinon 0.
 */
export function noterQuestion(bonnes: number[], choisies: number[]): number {
  if (choisies.length === 0) return 0;
  if (choisies.some((c) => !bonnes.includes(c))) return 0;
  if (choisies.length === bonnes.length) return 1;
  return choisies.length >= bonnes.length / 2 ? 0.5 : 0;
}

export function totalPoints(serie: QuestionSession[], reponses: number[][]): number {
  return serie.reduce((n, q, i) => n + noterQuestion(q.bonnes, reponses[i] ?? []), 0);
}

export function appreciationQcm(note: number): string {
  if (note < 5)
    return "Sous le seuil de 5 sur 20 : à l'épreuve réelle, une telle note serait éliminatoire. Reprenez les cours avant de recommencer.";
  if (note < 10)
    return "Des bases à consolider : revoyez les cours des thèmes où vous perdez le plus de points.";
  if (note < 14)
    return "Un niveau correct : travaillez les thèmes les plus faibles pour sécuriser l'admissibilité.";
  return "Un très bon niveau : poursuivez avec les cas pratiques et l'entretien.";
}
