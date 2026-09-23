export interface Dictee {
  id: string;
  title: string;
  level: "Découverte" | "Approfondissement" | "Perfectionnement";
  duree: string;
  intro: string;
  /** Texte de référence, une phrase par entrée : il est lu à voix haute puis comparé à votre saisie. */
  phrases: string[];
  pieges: string[];
}

export const dictees: Dictee[] = [
  {
    id: "conseil-municipal",
    title: "La séance du conseil municipal",
    level: "Découverte",
    duree: "environ 5 minutes",
    intro:
      "Une dictée courte sur le vocabulaire des assemblées locales : accords simples, pluriels et participes passés courants.",
    phrases: [
      "Le conseil municipal s'est réuni en séance publique le premier mardi du mois.",
      "Les délibérations adoptées ce soir-là concernaient le budget des écoles.",
      "Le maire a remercié les agents qui avaient préparé les dossiers.",
      "Aucune observation n'a été formulée par les élus de l'opposition.",
      "La séance a été levée à vingt-deux heures.",
    ],
    pieges: [
      "« s'est réuni » : accord du participe avec le sujet masculin singulier « le conseil ».",
      "« les dossiers qu'ils avaient préparés » : ici le complément est placé après, donc « avaient préparé les dossiers » reste invariable.",
      "« Aucune observation n'a été formulée » : ne pas oublier le « ne » explétif ni l'accord au féminin.",
    ],
  },
  {
    id: "service-public",
    title: "Les principes du service public",
    level: "Approfondissement",
    duree: "environ 8 minutes",
    intro:
      "Une dictée de niveau concours de catégorie B : homophones, subjonctif et accords du participe passé.",
    phrases: [
      "Le service public repose sur trois principes que tout agent doit connaître.",
      "La continuité impose que les usagers soient accueillis sans interruption injustifiée.",
      "L'égalité interdit toute distinction entre les personnes placées dans une situation comparable.",
      "L'adaptabilité permet de faire évoluer les prestations quand les besoins ont changé.",
      "Les décisions que la collectivité a prises doivent rester motivées et proportionnées.",
      "Quelles que soient les circonstances, la neutralité s'impose à chacun.",
    ],
    pieges: [
      "« que les usagers soient accueillis » : subjonctif après « impose que ».",
      "« les décisions que la collectivité a prises » : le complément d'objet est placé avant, l'accord est obligatoire.",
      "« Quelles que soient » en deux mots, accordé avec « les circonstances ».",
    ],
  },
  {
    id: "transition-ecologique",
    title: "La transition écologique des territoires",
    level: "Perfectionnement",
    duree: "environ 10 minutes",
    intro:
      "Une dictée exigeante : vocabulaire technique, chiffres en lettres et constructions complexes.",
    phrases: [
      "Les collectivités territoriales se sont engagées dans une transition écologique ambitieuse.",
      "Elles ont rénové des centaines de bâtiments publics afin de réduire leur consommation d'énergie.",
      "Bien qu'elles disposent de moyens inégaux, toutes doivent atteindre les objectifs fixés par la loi.",
      "Les habitants, que l'on associe désormais aux projets, participent aux comités de suivi.",
      "Quelque deux mille agents ont été formés aux nouvelles pratiques d'achat responsable.",
      "Il faudra que chacun s'approprie ces exigences pour que les résultats soient durables.",
    ],
    pieges: [
      "« se sont engagées » : accord avec le sujet féminin pluriel du verbe pronominal.",
      "« Bien qu'elles disposent » : subjonctif après « bien que ».",
      "« Quelque deux mille » : « quelque » est ici adverbe (environ), donc invariable ; « mille » ne prend jamais de « s ».",
    ],
  },
];

export function getDictee(id: string | undefined): Dictee | undefined {
  return dictees.find((d) => d.id === id);
}

/** Normalise un texte pour la comparaison : minuscules, espaces et apostrophes homogènes. */
export function normaliser(texte: string): string {
  return texte
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

export interface MotCompare {
  attendu: string;
  saisi: string | null;
  correct: boolean;
}

/** Compare mot à mot la saisie de l'utilisateur au texte de référence. */
export function comparerDictee(reference: string, saisie: string): MotCompare[] {
  const mots = (t: string) =>
    normaliser(t)
      .split(" ")
      .filter(Boolean);
  const attendus = mots(reference);
  const donnes = mots(saisie);
  return attendus.map((attendu, i) => {
    const saisi = donnes[i] ?? null;
    const nettoyer = (m: string) => m.replace(/[.,;:!?«»"()]/g, "");
    return {
      attendu,
      saisi,
      correct: saisi !== null && nettoyer(saisi) === nettoyer(attendu),
    };
  });
}
