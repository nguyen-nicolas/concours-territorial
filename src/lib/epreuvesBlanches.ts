import type { QuizQuestion } from "./quizData";
import { quizThemes } from "./quizData";

/** Une épreuve blanche : un QCM chronométré en conditions d'examen. */
export interface EpreuveBlanche {
  id: string;
  titre: string;
  description: string;
  /** Durée de l'épreuve en minutes. */
  dureeMinutes: number;
  /** Nombre de questions souhaitées par thème (ajusté selon la banque disponible). */
  composition: { themeId: string; nb: number }[];
  /** Niveau affiché sur la carte. */
  niveau: "Découverte" | "Entraînement" | "Conditions réelles";
}

export const epreuvesBlanches: EpreuveBlanche[] = [
  {
    id: "premiers-pas",
    titre: "Épreuve blanche n°1 — Premiers pas",
    description:
      "Un premier passage chronométré pour tester vos réflexes sur les bases : culture générale, droit public et premières notions de décentralisation.",
    dureeMinutes: 20,
    niveau: "Découverte",
    composition: [
      { themeId: "culture-generale", nb: 8 },
      { themeId: "droit-public", nb: 6 },
      { themeId: "cgct", nb: 6 },
    ],
  },
  {
    id: "admissibilite",
    titre: "Concours blanc — Admissibilité",
    description:
      "Le format type d'un QCM d'admissibilité : les cinq thèmes au programme, dans les conditions du jour, sans correction immédiate.",
    dureeMinutes: 45,
    niveau: "Entraînement",
    composition: [
      { themeId: "culture-generale", nb: 6 },
      { themeId: "droit-public", nb: 6 },
      { themeId: "cgct", nb: 6 },
      { themeId: "statut-fpt", nb: 6 },
      { themeId: "gestion-comptabilite", nb: 6 },
    ],
  },
  {
    id: "grand-concours-blanc",
    titre: "Grand concours blanc — Conditions réelles",
    description:
      "L'épreuve la plus complète du site : une heure, tous les thèmes, un rythme soutenu. Le vrai test avant le jour J.",
    dureeMinutes: 60,
    niveau: "Conditions réelles",
    composition: [
      { themeId: "culture-generale", nb: 8 },
      { themeId: "droit-public", nb: 8 },
      { themeId: "cgct", nb: 8 },
      { themeId: "statut-fpt", nb: 8 },
      { themeId: "gestion-comptabilite", nb: 8 },
    ],
  },
];

export function getEpreuve(id: string): EpreuveBlanche | undefined {
  return epreuvesBlanches.find((e) => e.id === id);
}

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

/** Question enrichie du thème d'origine, pour l'affichage du sujet. */
export interface QuestionEpreuve extends QuizQuestion {
  themeTitre: string;
}

/**
 * Compose le sujet d'une épreuve blanche : questions tirées au hasard
 * dans chaque thème de la composition, puis mélangées comme un vrai sujet.
 * Le nombre de questions est ajusté à la taille réelle des banques.
 */
export function composerSujet(epreuve: EpreuveBlanche): QuestionEpreuve[] {
  const sujet: QuestionEpreuve[] = [];
  for (const part of epreuve.composition) {
    const theme = quizThemes.find((t) => t.id === part.themeId);
    if (!theme) continue;
    const prise = Math.min(part.nb, theme.questions.length);
    for (const q of melanger(theme.questions).slice(0, prise)) {
      sujet.push({ ...melangerOptions(q), themeTitre: theme.title });
    }
  }
  return melanger(sujet);
}
