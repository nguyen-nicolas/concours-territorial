/**
 * Spécialités du concours d'agent de maîtrise territorial.
 * Liste établie d'après les notes de cadrage des centres de gestion : les spécialités du concours
 * correspondent à celles du concours d'adjoint technique principal de 2e classe, avec quelques
 * différences (pas de « conduite de véhicules », une seule spécialité « techniques de la
 * communication et des activités artistiques », et une spécialité propre au concours interne :
 * « hygiène et accueil des enfants des écoles maternelles ou des classes enfantines »).
 */

export type SpecialiteId =
  | "btp-vrd"
  | "environnement-hygiene"
  | "espaces-verts"
  | "restauration"
  | "hygiene-accueil-enfants"
  | "logistique-securite";

export interface SpecialiteAM {
  id: SpecialiteId;
  titre: string;
  /** Intitulé réglementaire de la spécialité. */
  intitule: string;
  description: string;
  /** Métiers cités par la note de cadrage, à titre indicatif. */
  metiers: string[];
  /** Voies d'accès concernées. */
  voies: string;
  /** Thèmes de quiz propres à la spécialité. */
  quizThemeIds: string[];
  ressources: { label: string; url: string }[];
}

export const specialitesAM: SpecialiteAM[] = [
  {
    id: "btp-vrd",
    titre: "Bâtiment, travaux publics, voirie et réseaux divers",
    intitule: "Bâtiment, travaux publics, voirie et réseaux divers",
    description:
      "Chantiers, voirie, réseaux et bâtiments : maçonnerie, terrassement, assainissement, signalisation, calculs de chantier.",
    metiers: [
      "Maçon, ouvrier du béton",
      "Ouvrier en VRD, paveur",
      "Agent d'exploitation de la voirie publique",
      "Plombier, plombier-canalisateur",
      "Charpentier, couvreur-zingueur, menuisier, peintre, carreleur",
      "Maintenance des bâtiments (agent polyvalent)",
    ],
    voies: "Concours externe, interne et troisième concours",
    quizThemeIds: [
      "am-annales-connaissances",
      "am-annales-securite",
      "am-annales-calculs",
      "am-btp-vrd",
      "am-batiment",
      "am-terrassement",
      "am-voirie",
      "am-reseaux",
      "am-calculs",
    ],
    ressources: [
      {
        label: "Sujet 2025 du questionnaire BTP-VRD (CDG 63)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg63-am-2025-sujetquestions-btp_vrd.pdf",
      },
      {
        label: "Sujet 2023 du questionnaire BTP-VRD (CDG 63)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg63_concours_agent_de_maitrise_2023_-_sujet_questions_btp_vrd.pdf",
      },
    ],
  },
  {
    id: "environnement-hygiene",
    titre: "Environnement, hygiène",
    intitule: "Environnement, hygiène",
    description:
      "Propreté et hygiène des locaux, produits d'entretien, eau et assainissement, piscines, déchets, funéraire.",
    metiers: [
      "Propreté urbaine, collecte des déchets",
      "Hygiène et entretien des locaux et espaces publics",
      "Agent d'assainissement, qualité de l'eau",
      "Entretien des piscines et des patinoires",
      "Opérations mortuaires (fossoyeur, porteur)",
      "Maintenance des équipements de production d'eau et d'épuration",
    ],
    voies: "Concours externe, interne et troisième concours",
    quizThemeIds: ["am-eh"],
    ressources: [
      {
        label: "Sujet 2025 du questionnaire Environnement-hygiène (CDG 63)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg63-am-2025-sujetquestions-eh.pdf",
      },
      {
        label: "Sujet 2025 du cas pratique Environnement-hygiène (CDG 63)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg63-am-2025-sujetcaspratique-eh.pdf",
      },
    ],
  },
  {
    id: "espaces-verts",
    titre: "Espaces naturels, espaces verts",
    intitule: "Espaces naturels, espaces verts",
    description:
      "Végétaux, arbres, biodiversité, taille et abattage, plantes invasives, sécurité des équipes et calculs.",
    metiers: [
      "Employé polyvalent des espaces verts et naturels",
      "Bûcheron, élagueur",
      "Production de plantes : pépinières, plantes à massif, floriculture",
      "Soins apportés aux animaux",
    ],
    voies: "Concours externe, interne et troisième concours",
    quizThemeIds: ["am-enev"],
    ressources: [
      {
        label: "Sujet 2025 du questionnaire Espaces naturels, espaces verts (CDG 69)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/2025_am_evn_connaiss_tech.pdf",
      },
      {
        label: "Sujet 2025 du cas pratique Espaces naturels, espaces verts (CDG 69)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/2025_am_enev_cas_pratique.pdf",
      },
    ],
  },
  {
    id: "restauration",
    titre: "Restauration",
    intitule: "Restauration",
    description:
      "Hygiène alimentaire et HACCP, liaisons chaude et froide, restauration scolaire, réglementation, fiches techniques et coûts.",
    metiers: [
      "Cuisinier, pâtissier",
      "Boucher, charcutier",
      "Opérateur transformateur de viandes",
      "Restauration collective : liaison chaude, liaison froide (hygiène et sécurité alimentaire)",
    ],
    voies: "Concours externe, interne et troisième concours",
    quizThemeIds: ["am-resto"],
    ressources: [
      {
        label: "Sujet 2025 du questionnaire Restauration (CDG 38)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg38-am-2025-sujetverificationconnaissancetechnique-restauration.pdf",
      },
      {
        label: "Sujet 2025 du cas pratique Restauration (CDG 38)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg38-am-2025-sujetcaspratique-restauration.pdf",
      },
    ],
  },
  {
    id: "hygiene-accueil-enfants",
    titre: "Hygiène et accueil des enfants des écoles maternelles",
    intitule: "Hygiène et accueil des enfants des écoles maternelles ou des classes enfantines",
    description:
      "Cadre de l'école, projets éducatifs, PAI, produits d'entretien, sécurité des enfants et encadrement d'une équipe d'ATSEM.",
    metiers: [
      "Agent territorial spécialisé des écoles maternelles (ATSEM) comptant trois années de service effectif",
    ],
    voies: "Concours interne uniquement",
    quizThemeIds: ["am-hae"],
    ressources: [
      {
        label: "Sujet 2025 du questionnaire Hygiène et accueil des enfants (CDG 38)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg38-am-2025-sujetverificationconnaissancetechnique-hae.pdf",
      },
      {
        label: "Sujet 2025 du cas pratique Hygiène et accueil des enfants (CDG 38)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg38-am-2025-sujetcaspratique-hae.pdf",
      },
    ],
  },
  {
    id: "logistique-securite",
    titre: "Logistique et sécurité",
    intitule: "Logistique et sécurité",
    description:
      "Gestion des stocks, manutention et chariots élévateurs, sécurité incendie, informatique de base, vidéoprotection et calculs.",
    metiers: [
      "Magasinier",
      "Monteur, levageur, cariste",
      "Maintenance bureautique",
      "Surveillance, télésurveillance, gardiennage",
    ],
    voies: "Concours externe, interne et troisième concours",
    quizThemeIds: ["am-logsec"],
    ressources: [
      {
        label: "Sujet 2021 du questionnaire Logistique et sécurité (CDG 33)",
        url: "https://www.cdg33.fr/wp-content/uploads/ressources/AGM21_INT_QUESTIONNAIRE_LOGISTIQUE_ET_SECURITE.pdf",
      },
      {
        label:
          "Sujet 2021 du questionnaire Logistique et sécurité (centres de gestion des Hauts-de-France)",
        url: "https://www.cdg59.fr/fileadmin/services/documentation_concours/annales/technique/2021concagtmaitrise/2021concagtmaitrisequestionslogistiqueint3ev.pdf",
      },
    ],
  },
];

export function getSpecialite(id: string | undefined): SpecialiteAM | undefined {
  return specialitesAM.find((s) => s.id === id);
}
