import { getTheme, type QuizQuestion } from "./quizData";
import { getSpecialite, type SpecialiteId } from "./specialitesAgentMaitrise";

export type ModeExamen = "complet" | "court";

export const MODES_EXAMEN: Record<
  ModeExamen,
  { libelle: string; questions: number; minutes: number; description: string }
> = {
  complet: {
    libelle: "Examen complet",
    questions: 60,
    minutes: 120,
    description: "60 questions en 2 heures, comme la durée du vrai questionnaire.",
  },
  court: {
    libelle: "Mini-examen",
    questions: 20,
    minutes: 40,
    description: "20 questions en 40 minutes, pour s'évaluer rapidement.",
  },
};

/** Thèmes du tronc commun, communs à toutes les spécialités. */
export const THEMES_COMMUNS = ["am-hygiene-securite", "am-encadrement", "am-environnement"];

/** Part des questions tirées dans les thèmes de la spécialité. */
const PART_SPECIALITE = 0.7;

export interface QuestionExamen extends QuizQuestion {
  themeId: string;
  themeTitre: string;
}

function melanger<T>(items: T[]): T[] {
  const copie = [...items];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i]!, copie[j]!] = [copie[j]!, copie[i]!];
  }
  return copie;
}

function melangerOptions(q: QuestionExamen): QuestionExamen {
  const indices = melanger(q.options.map((_, i) => i));
  return {
    ...q,
    options: indices.map((i) => q.options[i]!),
    optionNotes: indices.map((i) => q.optionNotes[i] ?? null),
    answerIndex: indices.indexOf(q.answerIndex),
  };
}

function reserve(themeIds: string[]): QuestionExamen[] {
  return themeIds.flatMap((id) => {
    const theme = getTheme(id);
    return theme
      ? theme.questions.map((q): QuestionExamen => ({
          ...q,
          themeId: theme.id,
          themeTitre: theme.title,
        }))
      : [];
  });
}

/** Compose un examen blanc : 70 % de questions de la spécialité, 30 % du tronc commun. */
export function composerExamen(specialiteId: SpecialiteId, mode: ModeExamen): QuestionExamen[] {
  const total = MODES_EXAMEN[mode].questions;
  const specialite = getSpecialite(specialiteId);
  const poolSpecialite = melanger(reserve(specialite?.quizThemeIds ?? []));
  const poolCommun = melanger(reserve(THEMES_COMMUNS));

  let nSpecialite = Math.min(Math.round(total * PART_SPECIALITE), poolSpecialite.length);
  let nCommun = Math.min(total - nSpecialite, poolCommun.length);
  // Si le tronc commun est insuffisant, on complète avec la spécialité (et inversement).
  nSpecialite = Math.min(total - nCommun, poolSpecialite.length);
  nCommun = Math.min(total - nSpecialite, poolCommun.length);

  return melanger([...poolSpecialite.slice(0, nSpecialite), ...poolCommun.slice(0, nCommun)]).map(
    melangerOptions,
  );
}

export interface ResultatTheme {
  titre: string;
  bonnes: number;
  total: number;
}

export interface ResultatExamen {
  bonnes: number;
  total: number;
  sansReponse: number;
  /** Note sur 20, arrondie au demi-point. */
  note: number;
  parTheme: ResultatTheme[];
}

/** Note l'examen : une bonne réponse = 1 point, ramené sur 20. */
export function noterExamen(
  questions: QuestionExamen[],
  reponses: (number | null)[],
): ResultatExamen {
  let bonnes = 0;
  let sansReponse = 0;
  const themes = new Map<string, ResultatTheme>();
  questions.forEach((q, i) => {
    const t = themes.get(q.themeId) ?? { titre: q.themeTitre, bonnes: 0, total: 0 };
    t.total += 1;
    const r = reponses[i] ?? null;
    if (r === null) sansReponse += 1;
    if (r === q.answerIndex) {
      bonnes += 1;
      t.bonnes += 1;
    }
    themes.set(q.themeId, t);
  });
  const total = questions.length;
  const note = total > 0 ? Math.round((bonnes / total) * 20 * 2) / 2 : 0;
  return {
    bonnes,
    total,
    sansReponse,
    note,
    parTheme: [...themes.values()].sort((a, b) => a.bonnes / a.total - b.bonnes / b.total),
  };
}

/** Appréciation indicative selon la note. */
export function appreciation(note: number): string {
  if (note < 5)
    return "Sous le seuil de 5 sur 20 : à l'épreuve réelle, une telle note serait éliminatoire. Reprenez les cours avant de recommencer.";
  if (note < 10)
    return "Des bases à consolider : revoyez les thèmes où votre score est le plus faible.";
  if (note < 14) return "Un niveau correct : visez les thèmes les plus faibles pour progresser.";
  return "Un très bon niveau : continuez à vous entraîner sur les cas pratiques et l'oral.";
}
