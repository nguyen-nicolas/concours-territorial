export type Categorie = "A" | "B" | "C";

export interface Concours {
  id: string;
  title: string;
  categorie: Categorie;
  filiere: string;
  tagline: string;
  description: string;
  epreuves: string[];
  /** Identifiants de thèmes de quiz disponibles pour ce concours. */
  themeIds: string[];
  /** Matières prévues mais pas encore ouvertes à l'entraînement. */
  aVenir: string[];
}

/**
 * Catalogue des principaux concours de la fonction publique territoriale.
 * Contenus indicatifs, sans valeur réglementaire : se référer à l'arrêté
 * d'ouverture du centre de gestion organisateur.
 */
export const concoursList: Concours[] = [
  {
    id: "adjoint-administratif",
    title: "Adjoint administratif territorial",
    categorie: "C",
    filiere: "Administrative",
    tagline: "L'entrée la plus fréquente dans les mairies et intercommunalités.",
    description:
      "Accueil du public, traitement de dossiers, rédaction de courriers et gestion administrative courante. Le concours externe est ouvert sans condition de diplôme pour le premier grade d'accès.",
    epreuves: [
      "Admissibilité : questions à réponse courte à partir d'un texte (compréhension et expression écrite)",
      "Admissibilité : exercices de français — orthographe, grammaire, vocabulaire",
      "Admission : entretien avec le jury sur la motivation et l'aptitude au poste",
    ],
    themeIds: ["culture-generale", "statut-fpt"],
    aVenir: ["Orthographe et grammaire", "Dictée", "Compréhension de texte"],
  },
  {
    id: "atsem",
    title: "ATSEM",
    categorie: "C",
    filiere: "Médico-sociale",
    tagline: "Agent territorial spécialisé des écoles maternelles.",
    description:
      "Assistance de l'enseignant, hygiène et sécurité des jeunes enfants, entretien des locaux et du matériel. Concours accessible avec le CAP Accompagnant éducatif petite enfance.",
    epreuves: [
      "Admissibilité : questionnaire à choix multiples sur les missions de l'ATSEM et la petite enfance",
      "Admission : entretien sur la motivation et les situations professionnelles",
    ],
    themeIds: ["culture-generale", "statut-fpt"],
    aVenir: ["Petite enfance et hygiène", "Situations professionnelles"],
  },
  {
    id: "adjoint-technique",
    title: "Adjoint technique territorial",
    categorie: "C",
    filiere: "Technique",
    tagline: "Métiers techniques : bâtiment, espaces verts, restauration, voirie.",
    description:
      "Exécution de travaux techniques dans une spécialité choisie à l'inscription. Le concours combine des questions professionnelles propres à la spécialité et un entretien.",
    epreuves: [
      "Admissibilité : questionnaire portant sur la spécialité choisie",
      "Admission : entretien professionnel avec le jury",
    ],
    themeIds: ["culture-generale", "statut-fpt"],
    aVenir: ["Hygiène et sécurité au travail", "Questions par spécialité"],
  },
  {
    id: "agent-maitrise",
    title: "Agent de maîtrise territorial",
    categorie: "C",
    filiere: "Technique",
    tagline: "Encadrement d'équipes techniques de proximité.",
    description:
      "Organisation et contrôle des chantiers, encadrement d'agents d'exécution, suivi des consignes de sécurité. Un concours technique avec une dimension managériale.",
    epreuves: [
      "Admissibilité : réponses à des questions techniques dans la spécialité",
      "Admission : entretien portant sur l'encadrement d'équipe et l'environnement territorial",
    ],
    themeIds: ["culture-generale", "statut-fpt", "gestion-comptabilite"],
    aVenir: ["Encadrement d'équipe", "Hygiène et sécurité"],
  },
  {
    id: "gardien-brigadier",
    title: "Gardien-brigadier de police municipale",
    categorie: "C",
    filiere: "Sécurité",
    tagline: "Tranquillité publique et pouvoirs de police du maire.",
    description:
      "Surveillance de la voie publique, verbalisation, relation avec la population. Le concours comporte des épreuves physiques en plus des écrits.",
    epreuves: [
      "Admissibilité : explication de texte relatif à un problème de société",
      "Admission : épreuves physiques et entretien avec le jury",
    ],
    themeIds: ["culture-generale", "droit-public", "statut-fpt"],
    aVenir: ["Pouvoirs de police du maire", "Explication de texte"],
  },
  {
    id: "redacteur",
    title: "Rédacteur territorial",
    categorie: "B",
    filiere: "Administrative",
    tagline: "Le concours de référence pour l'encadrement intermédiaire.",
    description:
      "Instruction de dossiers, rédaction d'actes et de rapports, application des règles juridiques et financières. Accessible avec le baccalauréat en externe.",
    epreuves: [
      "Admissibilité : rédaction d'une note à partir d'un dossier portant sur les missions des collectivités",
      "Admissibilité : réponses à des questions sur des problèmes concrets (droit public ou finances publiques)",
      "Admission : entretien avec le jury",
    ],
    themeIds: [
      "culture-generale",
      "droit-public",
      "cgct",
      "statut-fpt",
      "gestion-comptabilite",
    ],
    aVenir: ["Méthode de la note administrative", "Orthographe et grammaire"],
  },
  {
    id: "animateur",
    title: "Animateur territorial",
    categorie: "B",
    filiere: "Animation",
    tagline: "Projets d'animation, jeunesse et politique de la ville.",
    description:
      "Conception et conduite de projets d'animation socio-éducative, encadrement d'équipes d'animation, travail avec les associations et les familles.",
    epreuves: [
      "Admissibilité : réponses à des questions sur les politiques publiques d'animation",
      "Admissibilité : note ou projet à partir d'un dossier",
      "Admission : entretien avec le jury",
    ],
    themeIds: ["culture-generale", "cgct", "statut-fpt"],
    aVenir: ["Politiques jeunesse", "Méthode de projet"],
  },
  {
    id: "technicien",
    title: "Technicien territorial",
    categorie: "B",
    filiere: "Technique",
    tagline: "Suivi technique des équipements et des travaux.",
    description:
      "Conduite d'opérations techniques, suivi de marchés de travaux, contrôle de prestataires, dans une spécialité (bâtiments, réseaux, aménagement urbain…).",
    epreuves: [
      "Admissibilité : rapport technique avec propositions opérationnelles à partir d'un dossier",
      "Admission : entretien avec le jury sur les compétences techniques",
    ],
    themeIds: ["culture-generale", "cgct", "gestion-comptabilite"],
    aVenir: ["Méthode du rapport technique", "Commande publique"],
  },
  {
    id: "assistant-conservation",
    title: "Assistant de conservation du patrimoine et des bibliothèques",
    categorie: "B",
    filiere: "Culturelle",
    tagline: "Bibliothèques, musées, archives et médiation culturelle.",
    description:
      "Traitement des collections, accueil et médiation, action culturelle. Spécialités : bibliothèques, musées, archives, documentation.",
    epreuves: [
      "Admissibilité : note à partir d'un dossier dans la spécialité",
      "Admissibilité : questions sur les politiques culturelles",
      "Admission : entretien avec le jury",
    ],
    themeIds: ["culture-generale", "cgct", "statut-fpt"],
    aVenir: ["Politiques culturelles", "Méthode de la note"],
  },
  {
    id: "attache",
    title: "Attaché territorial",
    categorie: "A",
    filiere: "Administrative",
    tagline: "Cadre A administratif : pilotage, juridique, finances, RH.",
    description:
      "Encadrement de services, conduite de projets transversaux, conseil aux élus. Concours externe accessible à bac+3, avec des spécialités (administration générale, gestion du secteur sanitaire et social, analyste, urbanisme, animation).",
    epreuves: [
      "Admissibilité : composition portant sur l'action des collectivités territoriales",
      "Admissibilité : note de synthèse ou note administrative dans la spécialité",
      "Admission : entretien avec le jury sur les motivations et les compétences",
    ],
    themeIds: [
      "culture-generale",
      "droit-public",
      "cgct",
      "statut-fpt",
      "gestion-comptabilite",
    ],
    aVenir: ["Note de synthèse", "Dissertation de culture générale"],
  },
  {
    id: "ingenieur",
    title: "Ingénieur territorial",
    categorie: "A",
    filiere: "Technique",
    tagline: "Direction des services techniques et grands projets.",
    description:
      "Pilotage d'infrastructures, d'ouvrages et de politiques techniques (eau, déchets, énergie, urbanisme), encadrement de services techniques.",
    epreuves: [
      "Admissibilité : établissement d'un projet ou d'une étude dans la spécialité",
      "Admissibilité : note de synthèse à partir d'un dossier technique",
      "Admission : entretien avec le jury",
    ],
    themeIds: ["culture-generale", "cgct", "gestion-comptabilite"],
    aVenir: ["Commande publique", "Transition écologique"],
  },
  {
    id: "bibliothecaire",
    title: "Bibliothécaire territorial",
    categorie: "A",
    filiere: "Culturelle",
    tagline: "Direction d'établissements de lecture publique.",
    description:
      "Politique documentaire, encadrement d'équipes, développement de la lecture publique et des usages numériques.",
    epreuves: [
      "Admissibilité : composition de culture générale",
      "Admissibilité : note de synthèse sur les bibliothèques et la lecture publique",
      "Admission : entretien avec le jury",
    ],
    themeIds: ["culture-generale", "cgct", "statut-fpt"],
    aVenir: ["Lecture publique", "Note de synthèse"],
  },
];

export function getConcours(id: string) {
  return concoursList.find((c) => c.id === id);
}

export const categorieLabels: Record<Categorie, string> = {
  A: "Catégorie A — conception et direction",
  B: "Catégorie B — application et encadrement intermédiaire",
  C: "Catégorie C — exécution et proximité",
};
