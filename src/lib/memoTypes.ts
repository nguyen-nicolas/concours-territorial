import type { Categorie } from "./concours";

export interface MemoSection {
  titre: string;
  points: string[];
}

export interface QuestionJury {
  question: string;
  reponse: string;
}

export interface FicheMemo {
  id: string;
  title: string;
  /** Grand thème de rattachement (sert de filtre). */
  theme: string;
  resume: string;
  /** Temps de lecture indicatif. */
  duree: string;
  /** Catégories de concours concernées. */
  categories: Categorie[];
  /** Identifiants de concours concernés (voir concours.ts). */
  concoursIds: string[];
  sections: MemoSection[];
  /** Chiffres ou dates à citer en épreuve. */
  reperes: string[];
  /** Les trois ou quatre idées à retenir absolument. */
  aRetenir: string[];
  /** Confusions fréquemment sanctionnées. */
  pieges: string[];
  /** Réponse modèle à dire à l'oral. */
  phraseJury?: string;
  /** Questions que le jury pose souvent, avec une réponse courte. */
  questionsJury?: QuestionJury[];
  /** Formule ultra-courte à mémoriser. */
  ultraMemo?: string;
}

/** Tous les concours couverts par l'application. */
export const TOUS_CONCOURS = [
  "adjoint-administratif",
  "atsem",
  "adjoint-technique",
  "agent-maitrise",
  "gardien-brigadier",
  "redacteur",
  "animateur",
  "technicien",
  "assistant-conservation",
  "attache",
  "ingenieur",
  "bibliothecaire",
];

/** Concours de catégories A et B. */
export const CONCOURS_AB = [
  "redacteur",
  "animateur",
  "technicien",
  "assistant-conservation",
  "attache",
  "ingenieur",
  "bibliothecaire",
];
