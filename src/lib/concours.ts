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
  /** Documents à télécharger, réservés aux comptes validés (fichiers rangés dans /public). */
  telechargements?: { titre: string; fichier: string; details: string }[];
  /** Cours en ligne propres au concours (page /cours-agent-maitrise). */
  coursEnLigne?: { titre: string; details: string; to?: "/cours-agent-maitrise" | "/atsem" };
  /** Liens officiels (annales, notes de cadrage) ; optionnel, non affiché partout. */
  ressources?: { label: string; url: string }[];
  /** Date indicative de l'épreuve, publiée par un centre de gestion (à vérifier par le candidat). */
  dateIndicative?: { date: string; libelle: string };
  /** Vidéo YouTube présentée sur la page du concours. */
  video?: { id: string; titre: string; details: string };
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
    themeIds: ["culture-generale", "statut-fpt", "orthographe", "grammaire", "maths-fondamentaux"],
    aVenir: ["Orthographe et grammaire", "Dictée", "Compréhension de texte"],
  },
  {
    id: "atsem",
    title: "ATSEM",
    categorie: "C",
    filiere: "Médico-sociale",
    tagline: "Agent territorial spécialisé des écoles maternelles.",
    description:
      "Assistance de l'enseignant, accueil et hygiène des jeunes enfants, entretien des locaux et du matériel, surveillance de la restauration, animation du périscolaire. Concours ouvert aux titulaires du CAP Accompagnant éducatif petite enfance (externe), aux agents publics (interne) et selon l'expérience (3e concours).",
    epreuves: [
      "Externe : QCM de 20 questions de mise en situation, à plusieurs bonnes réponses (45 minutes, coefficient 1), puis entretien de 15 minutes (coefficient 2)",
      "Interne et 3e concours : 3 à 5 questions à réponses courtes sur dossier (2 heures, coefficient 1), puis entretien de 20 minutes dont 5 minutes d'exposé (coefficient 2)",
      "Toute note inférieure à 5 sur 20 est éliminatoire",
    ],
    dateIndicative: {
      date: "2027-09-29",
      libelle:
        "premières épreuves de la session 2027 annoncées par certains centres de gestion (Calvados, Somme, Martinique) ; en Auvergne-Rhône-Alpes, le concours a lieu tous les deux ans, prochaine session en 2028",
    },
    coursEnLigne: {
      titre: "Préparation dédiée à l'ATSEM",
      details: "7 cours, QCM au barème officiel, 2 cas pratiques et préparation de l'entretien",
      to: "/atsem",
    },
    themeIds: ["statut-fpt", "culture-generale", "orthographe", "grammaire", "maths-fondamentaux"],
    aVenir: [],
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
    themeIds: ["culture-generale", "statut-fpt", "orthographe", "grammaire", "maths-fondamentaux"],
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
      "Admissibilité : cas pratique à partir d'un dossier portant sur les problèmes rencontrés dans la spécialité (2 heures, coefficient 3)",
      "Admissibilité : vérification des connaissances techniques, notamment en hygiène et sécurité, par questionnaire (2 heures, coefficient 2) ; le concours externe comporte une épreuve de mathématiques à la place",
      "Admission : entretien avec le jury, qui débute par un exposé sur l'expérience professionnelle",
    ],
    dateIndicative: {
      date: "2027-01-28",
      libelle:
        "épreuves d'admissibilité de la session 2027, date prévisionnelle des centres de gestion d'Auvergne-Rhône-Alpes",
    },
    video: {
      id: "XzYGr6grF_U",
      titre: "40 questions pour préparer un concours Agent de maîtrise",
      details:
        "Entraînez-vous avec 40 questions corrigées : temps de réflexion, puis bonne réponse et correction.",
    },
    coursEnLigne: {
      titre: "Les cours du concours",
      details:
        "12 cours : méthode de l'écrit, annales, spécialité BTP / VRD, sécurité, encadrement et oral",
    },
    themeIds: [
      "am-annales-securite",
      "am-annales-connaissances",
      "am-annales-calculs",
      "am-btp-vrd",
      "am-batiment",
      "am-terrassement",
      "am-voirie",
      "am-reseaux",
      "am-calculs",
      "am-hygiene-securite",
      "am-encadrement",
      "am-environnement",
      "culture-generale",
      "statut-fpt",
      "gestion-comptabilite",
      "orthographe",
      "grammaire",
      "maths-fondamentaux",
    ],
    aVenir: [],
    telechargements: [
      {
        titre: "Manuel de préparation à l'écrit (BTP / VRD)",
        fichier: "/manuel-agent-de-maitrise-btp-vrd.pdf",
        details: "PDF · 43 pages · cours, exercices, sujet blanc et corrigés",
      },
      {
        titre: "Manuel de préparation à l'oral",
        fichier: "/manuel-oral-agent-de-maitrise-btp-vrd.pdf",
        details:
          "PDF · 33 pages · exposé, questions types, mises en situation, simulations de jury",
      },
    ],
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
    themeIds: [
      "culture-generale",
      "droit-public",
      "statut-fpt",
      "orthographe",
      "grammaire",
      "maths-fondamentaux",
    ],
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
      "orthographe",
      "grammaire",
      "maths-consolidation",
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
    themeIds: [
      "culture-generale",
      "cgct",
      "statut-fpt",
      "orthographe",
      "grammaire",
      "maths-consolidation",
    ],
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
    themeIds: [
      "culture-generale",
      "cgct",
      "gestion-comptabilite",
      "orthographe",
      "grammaire",
      "maths-consolidation",
    ],
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
    themeIds: [
      "culture-generale",
      "cgct",
      "statut-fpt",
      "orthographe",
      "grammaire",
      "maths-consolidation",
    ],
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
      "orthographe",
      "grammaire",
      "maths-consolidation",
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
    themeIds: [
      "culture-generale",
      "cgct",
      "gestion-comptabilite",
      "orthographe",
      "grammaire",
      "maths-ingenieur",
    ],
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
    themeIds: [
      "culture-generale",
      "cgct",
      "statut-fpt",
      "orthographe",
      "grammaire",
      "maths-consolidation",
    ],
    aVenir: ["Lecture publique", "Note de synthèse"],
  },
  {
    id: "adjoint-animation",
    title: "Adjoint territorial d'animation principal de 2e classe",
    categorie: "C",
    filiere: "Animation",
    tagline: "Animation, accueil, loisirs et médiation socio-culturelle.",
    description:
      "Mise en œuvre des activités d'animation (accueil de loisirs, animations socio-culturelles, médiation…). Épreuve externe : QCM de 40 questions en 45 minutes. Épreuve interne : QCM + note rédigée. Toute note inférieure à 5 sur 20 est éliminatoire.",
    epreuves: [
      "Externe — admissibilité : QCM (~40 questions, 45 min, coef 1) sur l'organisation des collectivités locales, l'hygiène et la sécurité ; admission : entretien (coef 1)",
      "Interne — admissibilité : QCM (45 min, coef 3) sur l'accueil, la protection et les droits de l'enfant + note rédigée à partir d'un article de presse sur l'animation (2 h, coef 2) ; admission : entretien",
      "3e concours — admissibilité : 3 à 5 questions courtes sur les collectivités territoriales (45 min, coef 2) + cas pratique (1 h 30, coef 3) ; admission : entretien",
    ],
    themeIds: ["culture-generale", "statut-fpt", "cgct", "orthographe", "grammaire"],
    aVenir: ["Animation, accueil et loisirs", "Protection et droits de l'enfant"],
    ressources: [
      {
        label: "Brochure et notes de cadrage (CDG 59)",
        url: "https://cdg59.fr/fileadmin/services/documentation_concours/cadrage/animation/adjointanim/2024crsadjanip2qcmextint.pdf",
      },
    ],
  },
  {
    id: "adjoint-patrimoine",
    title: "Adjoint territorial du patrimoine principal de 2e classe",
    categorie: "C",
    filiere: "Culturelle",
    tagline: "Bibliothèques, archives, musées, parcs et établissements culturels.",
    description:
      "Accueil du public, surveillance, classement des collections, animation et médiation culturelle dans les bibliothèques, archives, musées et établissements d'enseignement artistique. Concours sur titre et épreuves.",
    epreuves: [
      "Externe et 3e concours — admissibilité : questionnaire à réponses brèves sur l'accueil du public, l'animation et la sécurité (1 h, coef 2) + cas pratique (2 h, coef 4) ; admission : entretien",
      "Interne — admissibilité : commentaire sur dossier (2 h, coef 4) ; admission : entretien",
      "Toute note inférieure à 5 sur 20 est éliminatoire",
    ],
    themeIds: ["culture-generale", "statut-fpt", "cgct"],
    aVenir: [
      "Accueil du public et médiation culturelle",
      "Sécurité des personnes et des biens",
      "Techniques documentaires",
    ],
    ressources: [
      {
        label: "Note de cadrage questionnaire (Cellule pédagogique nationale, nov. 2024)",
        url: "https://agirhe-concours.fr/docs/33/brochures/ADPP2C_2025_Cadrage_questions.pdf",
      },
    ],
  },
  {
    id: "agent-social",
    title: "Agent social territorial principal de 2e classe",
    categorie: "C",
    filiere: "Médico-sociale",
    tagline:
      "Aide à domicile, maintien à domicile des personnes âgées, handicapées ou en difficulté.",
    description:
      "Aide-ménagère, auxiliaire de vie ou travailleur familial : maintien à domicile, aide aux actes de la vie quotidienne auprès des personnes âgées, handicapées ou des familles en difficulté. Accès principalement par examen professionnel (avancement de grade) ou par concours.",
    epreuves: [
      "Examen professionnel d'avancement de grade — admissibilité : 3 à 5 questions courtes sur dossier (coef 2) ; admission : entretien de 15 minutes dont 5 minutes d'exposé (coef 3)",
      "Toute note inférieure à 5 sur 20 est éliminatoire",
    ],
    themeIds: ["culture-generale", "statut-fpt", "cgct"],
    aVenir: [
      "Aide à domicile et maintien à domicile",
      "Personnes âgées, handicap et dépendance",
      "Rôle préventif et éducatif",
    ],
    ressources: [
      {
        label: "Note de cadrage entretien (Cellule pédagogique nationale, oct. 2024)",
        url: "https://www.cdg59.fr/fileadmin/services/documentation_concours/cadrage/medicosoc/agentsocial/2024exagtsocialp2entretien.pdf",
      },
    ],
  },
  {
    id: "auxiliaire-puericulture",
    title: "Auxiliaire de puériculture territorial de classe normale",
    categorie: "C",
    filiere: "Médico-sociale",
    tagline: "Soins aux nourrissons et aux jeunes enfants dans les crèches et haltes-garderies.",
    description:
      "Collabore aux soins infirmiers, participe à l'accueil et aux activités d'éveil des enfants en structures petite enfance. Concours sur titres avec une unique épreuve d'admission : entretien avec le jury. Accès réservé aux titulaires du diplôme professionnel d'auxiliaire de puériculture (DPAP) ou équivalent.",
    epreuves: [
      "Épreuve unique d'admission : entretien avec le jury évaluant les connaissances professionnelles, la motivation et l'aptitude (note de 0 à 20, éliminatoire sous 5)",
      "Pas d'épreuve d'admissibilité écrite : concours sur titre avec entretien uniquement",
    ],
    themeIds: ["culture-generale", "statut-fpt"],
    aVenir: [
      "Soins à l'enfant et développement du nourrisson",
      "Hygiène, sécurité et prévention en crèche",
    ],
    ressources: [
      {
        label: "Brochure et note de cadrage (Agirhe Concours)",
        url: "https://agirhe-concours.fr/docs/33/brochures/APUER_2025_Note_cadrage.pdf",
      },
    ],
  },
  {
    id: "garde-champetre",
    title: "Garde champêtre principal",
    categorie: "C",
    filiere: "Police municipale",
    tagline: "Police rurale, surveillance des espaces naturels et de l'environnement.",
    description:
      "Chargé sous l'autorité du maire de constater les infractions aux lois rurales et de pêche, surveiller et protéger les espaces naturels, assurer la police rurale. Concours externe sur titre et épreuves.",
    epreuves: [
      "Admissibilité : épreuve écrite de mise en situation professionnelle (3 h) ou QCM selon le centre de gestion ; admission : entretien avec le jury",
      "Toute note inférieure à 5 sur 20 à une épreuve obligatoire est éliminatoire",
    ],
    themeIds: ["culture-generale", "statut-fpt", "cgct"],
    aVenir: [
      "Police rurale et droit de l'environnement",
      "Missions et pouvoirs du garde champêtre",
    ],
    ressources: [],
  },
  {
    id: "chef-service-pm",
    title: "Chef de service de police municipale",
    categorie: "B",
    filiere: "Police municipale",
    tagline: "Encadrement d'un service de police municipale.",
    description:
      "Dirige, anime et contrôle les gardiens-brigadiers et agents de police sous l'autorité du maire. Assure la coordination opérationnelle des missions de police administrative et judiciaire. Concours externe, interne et 3e concours.",
    epreuves: [
      "Admissibilité — externe : composition sur un sujet d'ordre général relatif à la sécurité locale (3 h, coef 2) ; interne et 3e concours : rapport avec propositions sur la base d'un dossier (3 h, coef 2)",
      "Admission : épreuve sportive (coef 1) + tests psychotechniques (coef 1) + entretien avec le jury (coef 2)",
      "Toute note inférieure à 5 sur 20 à une épreuve obligatoire est éliminatoire",
    ],
    themeIds: ["culture-generale", "statut-fpt", "cgct", "droit-public"],
    aVenir: [
      "Organisation de la police municipale",
      "Droit pénal et procédure pénale",
      "Management et encadrement d'équipe",
    ],
    ressources: [],
  },
  {
    id: "educateur-jeunes-enfants",
    title: "Éducateur territorial de jeunes enfants",
    categorie: "A",
    filiere: "Sanitaire et sociale",
    tagline: "Conception et pilotage de projets éducatifs dans les structures petite enfance.",
    description:
      "Conçoit et met en œuvre des projets éducatifs et pédagogiques dans les établissements d'accueil du jeune enfant. Travaille en équipe pluridisciplinaire, en relation avec les familles. Accès sur titre (diplôme d'État d'EJE) avec épreuve d'admission.",
    epreuves: [
      "Épreuve d'admissibilité : étude de situation professionnelle à partir d'un dossier (3 h, coef 2)",
      "Épreuve d'admission : entretien avec le jury (45 min dont 15 min d'exposé, coef 3)",
      "Toute note inférieure à 5 sur 20 est éliminatoire",
    ],
    themeIds: ["culture-generale", "statut-fpt", "cgct"],
    aVenir: [
      "Projet éducatif et pédagogique petite enfance",
      "Développement de l'enfant",
      "Travail en équipe pluridisciplinaire",
    ],
    ressources: [],
  },
  {
    id: "educateur-aps",
    title: "Éducateur territorial des activités physiques et sportives",
    categorie: "B",
    filiere: "Sportive",
    tagline: "Encadrement des activités physiques et sportives pour les collectivités.",
    description:
      "Encadre des pratiques sportives dans les équipements de la collectivité (piscines, gymnases, stades…), participe à la définition des politiques sportives locales et organise des animations sportives. Concours externe sur épreuves, interne et 3e concours.",
    epreuves: [
      "Admissibilité — externe : composition sur un sujet d'ordre général relatif à l'animation sportive (3 h, coef 2) ; interne : note administrative à partir d'un dossier (3 h, coef 2)",
      "Admission : épreuve physique sur une ou plusieurs pratiques sportives (coef 2) + entretien professionnel (coef 2)",
      "Toute note inférieure à 5 sur 20 à une épreuve obligatoire est éliminatoire",
    ],
    themeIds: ["culture-generale", "statut-fpt", "cgct"],
    aVenir: [
      "Animation sportive et politiques sportives locales",
      "Encadrement des APS et réglementation",
    ],
    ressources: [],
  },
  {
    id: "operateur-aps",
    title: "Opérateur territorial des activités physiques et sportives",
    categorie: "C",
    filiere: "Sportive",
    tagline: "Accueil et surveillance des équipements sportifs municipaux.",
    description:
      "Assure l'accueil, la surveillance et la gestion des équipements sportifs (piscines, gymnases…). Participe à des animations sportives sous la direction d'un éducateur des APS. Concours externe, interne et 3e concours.",
    epreuves: [
      "Admissibilité : QCM sur les collectivités territoriales, les activités physiques et sportives et la sécurité (45 min) ; admission : épreuve physique + entretien",
      "Toute note inférieure à 5 sur 20 à une épreuve obligatoire est éliminatoire",
    ],
    themeIds: ["culture-generale", "statut-fpt"],
    aVenir: ["Gestion des équipements sportifs", "Réglementation des APS et sécurité"],
    ressources: [],
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
