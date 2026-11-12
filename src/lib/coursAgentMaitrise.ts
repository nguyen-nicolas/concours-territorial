/**
 * Cours du concours interne d'agent de maîtrise territorial (spécialité BTP / VRD).
 * Les valeurs réglementaires sont des repères de préparation : l'arrêté d'ouverture
 * du centre de gestion organisateur et les textes en vigueur font foi.
 */

import type { SpecialiteId } from "./specialitesAgentMaitrise";
import { coursSpecialites } from "./coursSpecialitesAgentMaitrise";
import { coursAtsem } from "./coursAtsem";

export interface CoursAMTableau {
  entetes: string[];
  lignes: string[][];
}

export interface CoursAMSection {
  titre: string;
  paragraphes?: string[];
  points?: string[];
  tableau?: CoursAMTableau;
  /** Valeurs ou règles clés, affichées en évidence. */
  reperes?: string[];
}

export interface CoursAMExemple {
  enonce: string;
  etapes: string[];
  resultat: string;
}

export const partiesCoursAM = [
  {
    id: "ecrit",
    titre: "Réussir l'écrit",
    description: "Comprendre les épreuves d'admissibilité et savoir rédiger.",
  },
  {
    id: "specialite",
    titre: "Cours de la spécialité",
    description: "Les connaissances techniques propres à la spécialité choisie.",
  },
  {
    id: "securite-encadrement",
    titre: "Sécurité et encadrement",
    description: "Le cœur du métier d'agent de maîtrise, évalué à l'écrit comme à l'oral.",
  },
  {
    id: "oral",
    titre: "Réussir l'oral",
    description: "Préparer l'exposé, les mises en situation et l'environnement territorial.",
  },
] as const;

export type PartieCoursAMId = (typeof partiesCoursAM)[number]["id"];

export interface CoursAM {
  id: string;
  partie: PartieCoursAMId;
  title: string;
  resume: string;
  duree: string;
  objectifs: string[];
  sections: CoursAMSection[];
  exemples?: CoursAMExemple[];
  aRetenir: string[];
  pieges: string[];
  /** Thème de quiz associé, proposé en fin de cours. */
  quizThemeId?: string;
  /** Documents officiels publics (annales, notes de cadrage…) cités par le cours. */
  ressources?: { label: string; url: string; details?: string }[];
  /** Spécialité concernée, ou « commun » pour le tronc commun à toutes les spécialités. */
  specialite?: SpecialiteId | "commun" | "atsem";
}

const coursBase: CoursAM[] = [
  {
    id: "methode-ecrit",
    partie: "ecrit",
    title: "Méthode de l'écrit : cas pratique et questionnaire",
    resume:
      "Les épreuves d'admissibilité du concours interne (cas pratique et questionnaire de connaissances techniques), la méthode en 6 étapes du cas pratique, les formats à maîtriser (note, courrier, planning) et la méthode des calculs.",
    duree: "45 minutes",
    objectifs: [
      "Situer chaque épreuve et la posture attendue par le jury",
      "Traiter un dossier de cas pratique dans le temps imparti",
      "Rédiger une note à la hiérarchie, un courrier à un usager et un planning",
      "Poser et justifier un calcul sans perdre de points",
    ],
    sections: [
      {
        titre: "Le concours interne en bref",
        paragraphes: [
          "L'agent de maîtrise territorial relève de la catégorie C de la filière technique. Son rôle : encadrer une équipe d'agents techniques, organiser et contrôler l'exécution des travaux, assurer la sécurité et rendre compte à sa hiérarchie. Le cadre d'emplois compte deux grades : agent de maîtrise et agent de maîtrise principal.",
          "Le concours externe ne comporte pas le questionnaire : il prévoit une épreuve de mathématiques en plus du cas pratique. Pour le concours interne comme pour le troisième concours, toute note inférieure à 5 sur 20 à l'une des épreuves est éliminatoire. Ces informations sont issues des notes de cadrage des centres de gestion et des sujets de concours : vérifiez toujours l'arrêté d'ouverture.",
        ],
        tableau: {
          entetes: ["Épreuve (concours interne)", "Nature"],
          lignes: [
            [
              "Admissibilité : cas pratique",
              "Résolution d'un cas pratique exposé dans un dossier, portant sur les problèmes qu'un agent de maîtrise peut rencontrer dans la spécialité. Durée : 2 heures · coefficient 3",
            ],
            [
              "Admissibilité : connaissances techniques",
              "Questionnaire, tableaux ou schémas à compléter, sans épreuve rédactionnelle, sur les connaissances techniques de la spécialité, notamment en hygiène et sécurité (calculs compris). Durée : 2 heures · coefficient 2",
            ],
            [
              "Admission",
              "Entretien avec le jury, qui débute par un exposé sur l'expérience professionnelle",
            ],
          ],
        },
      },
      {
        titre: "La posture attendue par le jury",
        paragraphes: [
          "Le jury ne cherche ni un ingénieur ni un simple exécutant. Il veut un encadrant de proximité qui sécurise d'abord, organise avec les moyens disponibles, contrôle la qualité, rend compte par écrit et propose des solutions sans décider à la place des élus ou de la direction.",
          "Les durées, coefficients et conditions d'inscription sont fixés par la réglementation et rappelés dans l'arrêté d'ouverture : vérifiez-les auprès du centre de gestion organisateur.",
        ],
        reperes: ["Sécuriser → organiser → contrôler → rendre compte → proposer"],
      },
      {
        titre: "Méthode du cas pratique en 6 étapes",
        points: [
          "1. Lire les questions en premier (5 min) : vous saurez quoi chercher dans le dossier.",
          "2. Lire tout le dossier (20 à 30 min) en surlignant les chiffres, les dates, les contraintes et les noms.",
          "3. Lister les pièges sur un brouillon : école à proximité, réseau dans le sol, habilitation expirée, agent absent, devis non conforme, délai trop court, événement récurrent (marché, sortie d'école).",
          "4. Faire un plan par question au brouillon, sans rédiger.",
          "5. Rédiger en soignant la présentation : titres, phrases courtes, calculs détaillés avec unités.",
          "6. Relire (10 min minimum) : orthographe (ses / ces / c'est, accords), unités, cohérence des chiffres.",
        ],
      },
      {
        titre: "Les formats écrits à maîtriser",
        paragraphes: [
          "La note à la hiérarchie est l'écrit le plus fréquent. Elle donne les faits, ce qui a été fait et ce que vous proposez, sans opinion dans le constat.",
        ],
        tableau: {
          entetes: ["Partie de la note", "Contenu"],
          lignes: [
            [
              "En-tête",
              "Collectivité et service, De (nom et fonction), À (destinataire), date, objet précis",
            ],
            ["Constat", "Les faits : quoi, où, quand, comment vous l'avez appris. Pas d'opinion"],
            ["Mesures prises", "Ce que vous avez déjà fait, en particulier pour la sécurité"],
            [
              "Analyse",
              "Causes probables, enjeux, contraintes (délais, budget, personnel, réglementation)",
            ],
            [
              "Propositions",
              "Solutions numérotées et chiffrées si possible, avec votre avis argumenté",
            ],
            ["Conclusion", "Une phrase de disponibilité, puis la signature"],
          ],
        },
        points: [
          "Courrier à un usager (à la signature du maire) : collectivité et service en haut à gauche, lieu et date en haut à droite, destinataire, objet, formule d'appel, trois paragraphes (je prends acte de votre demande ; voici les informations et les mesures prévues ; voici le contact), formule de politesse complète, « Le Maire » et signature.",
          "Ton du courrier : courtois, factuel, sans jargon technique ni promesse impossible à tenir.",
          "Planning : un tableau avec les jours et les tâches, qui indique pour chaque tâche les agents, le matériel et les contraintes. Ajoutez toujours une marge pour les aléas (météo, livraison) et signalez les jalons (livraison, fin de travaux, événement).",
        ],
      },
      {
        titre: "Méthode des calculs (questionnaire et cas pratique)",
        paragraphes: [
          "Les calculs sont présents dans les deux épreuves : volumes, surfaces, quantités de matériaux, commandes avec TVA, durées. Ils doivent toujours être justifiés : indiquez le raisonnement et les calculs intermédiaires. L'orthographe n'est pas pénalisée dans le questionnaire à ce jour, mais l'absence d'unité ou une erreur d'arrondi peut l'être.",
        ],
        points: [
          "1. Relever les données avec leurs unités.",
          "2. Tout convertir en mètres, mètres carrés, mètres cubes et tonnes.",
          "3. Écrire la formule, puis remplacer par les valeurs.",
          "4. Garder les décimales jusqu'au bout et n'arrondir qu'à la fin.",
          "5. Ajouter les marges ou pertes demandées, puis arrondir à l'unité supérieure pour une commande.",
          "6. Vérifier que le résultat est réaliste.",
          "7. Rédiger une phrase-réponse : « Il faut commander 1,9 m³ de béton. »",
        ],
      },
      {
        titre: "Plan de révision sur 8 semaines",
        tableau: {
          entetes: ["Semaine", "Programme"],
          lignes: [
            ["1", "Cette méthode et les calculs de base de votre spécialité"],
            ["2 à 5", "Les cours de votre spécialité, avec le quiz associé à chaque cours"],
            ["6", "Sécurité des chantiers et hygiène et sécurité propres à votre spécialité"],
            ["7", "Encadrement et fonction publique, préparation de l'exposé oral"],
            ["8", "Épreuve blanche en temps réel, puis révision des pièges"],
          ],
        },
      },
    ],
    aRetenir: [
      "Lire les questions avant le dossier, puis surligner chiffres, dates et contraintes.",
      "La sécurité passe toujours en premier dans vos réponses.",
      "Une démarche juste avec une petite erreur de calcul rapporte l'essentiel des points.",
      "Rendre compte par écrit et proposer, sans décider à la place des élus.",
    ],
    pieges: [
      "Oublier de convertir les centimètres en mètres (5 cm = 0,05 m, pas 0,5 m).",
      "Arrondir trop tôt, ou arrondir une commande à l'inférieur.",
      "Donner un résultat sans unité ni phrase-réponse.",
      "Ne pas relire : les fautes d'accord coûtent des points à l'écrit.",
    ],
    quizThemeId: "am-calculs",
  },
  {
    id: "annales",
    partie: "ecrit",
    title: "Les annales : ce qui tombe vraiment",
    resume:
      "Le format officiel des épreuves, ce que disent les notes de cadrage, les thèmes qui reviennent aux sessions 2023 à 2025, à quoi ressemble un cas pratique, et où trouver les sujets officiels.",
    duree: "40 minutes",
    objectifs: [
      "Connaître la durée, le coefficient et la nature de chaque épreuve écrite",
      "Repérer les thèmes qui reviennent d'une session à l'autre",
      "Savoir à quoi s'attendre dans un cas pratique en spécialité BTP / VRD",
      "Organiser son entraînement avec les annales et les ressources officielles",
    ],
    sections: [
      {
        titre: "Les épreuves écrites, d'après les sujets officiels",
        tableau: {
          entetes: ["Épreuve", "Voies concernées", "Durée", "Coefficient"],
          lignes: [
            ["Cas pratique", "Interne, externe, troisième concours", "2 heures", "3"],
            [
              "Vérification des connaissances techniques (questionnaire)",
              "Interne, troisième concours",
              "2 heures",
              "2",
            ],
            ["Mathématiques", "Externe", "Voir l'arrêté d'ouverture", "Voir l'arrêté d'ouverture"],
          ],
        },
        paragraphes: [
          "Une note inférieure à 5 sur 20 à l'une des épreuves élimine le candidat. Les sujets sont souvent élaborés à l'échelle régionale par plusieurs centres de gestion : un même sujet peut donc être publié par plusieurs sites.",
        ],
      },
      {
        titre: "Ce que précise la note de cadrage du questionnaire",
        paragraphes: [
          "La note de cadrage, établie par une cellule pédagogique nationale associant des centres de gestion, n'est pas un texte réglementaire mais éclaire candidats et formateurs.",
        ],
        points: [
          "Pas de programme réglementaire, mais une place prépondérante donnée à l'hygiène et à la sécurité.",
          "Les questions peuvent porter sur : la lecture de plans, le calcul de quantités, de longueurs, de surfaces et de volumes, les matériaux, matières et matériels, le vocabulaire technique, le matériel de sécurité individuel, les règles d'hygiène et de sécurité.",
          "Épreuve non rédactionnelle : réponse sous forme d'un nombre, d'un mot, de quelques lignes, de tableaux ou de schémas à compléter ; quelques questions peuvent être à choix multiples.",
          "Les calculs sont justifiés : le raisonnement et les résultats intermédiaires sont attendus. L'absence ou l'erreur d'unité et le non-respect des règles d'arrondi peuvent être pénalisés.",
          "L'orthographe et la syntaxe ne sont pas pénalisées à ce jour ; une présentation négligée peut l'être.",
          "Pour les calculs, la note de cadrage renvoie à un programme de mathématiques de base : quatre opérations (entiers, décimaux, fractions), mesures de longueurs, surfaces, capacités et poids, densité, règle de trois, partages proportionnels, mélanges, surfaces (triangles, quadrilatères, cercle), volumes courants (parallélépipède, prisme, cylindre, cône).",
          "La calculatrice « collège » non programmable est autorisée.",
        ],
      },
      {
        titre: "Ce qui est tombé en BTP / VRD (sessions 2023 à 2025)",
        paragraphes: [
          "Ces thèmes reviennent d'une session à l'autre : ce sont ceux sur lesquels il faut être le plus solide.",
        ],
        tableau: {
          entetes: ["Thème", "Exemples de questions posées"],
          lignes: [
            [
              "Prévention et sécurité",
              "Registres de santé et sécurité et de danger grave et imminent, 9 principes de prévention, plan de prévention, PGC et PPSPS, droit de retrait, ordre des actions après un accident, panneaux de sécurité",
            ],
            [
              "Produits chimiques",
              "Fiche de données de sécurité (16 rubriques), pictogrammes de danger, stockage dans un local",
            ],
            [
              "Amiante et polluants",
              "Traitement d'un matériau amianté dégradé, délai de transmission du plan aux services de contrôle, polluants des enrobés, repérage avant rénovation",
            ],
            ["Incendie", "Classes de feux et choix de l'extincteur"],
            [
              "Bâtiment",
              "Vide sanitaire, fondations profondes, chaînage, pièces d'une ferme, tenon et mortaise, drain, barbacane, acrotère, isolation par l'intérieur ou l'extérieur, isolants naturels, matériaux biosourcés, classement UPEC, adjuvants, DOE",
            ],
            [
              "Voirie et réseaux",
              "Couches de chaussée, dégradations, GNT et géotextile, couleurs de grillages, DICT, regard à grille, accessibilité PMR (trottoir, ressaut, sanitaire)",
            ],
            [
              "Calculs",
              "Volume et masse d'une dalle de béton, volume, durée de vidange et pression d'une conduite, surfaces à peindre et nombre de pots, échelle, durée et vitesse, puissance électrique, bon de commande avec TVA et remise",
            ],
            [
              "Encadrement",
              "Modes de management selon la situation, entretien professionnel annuel, agent en état d'ébriété",
            ],
          ],
        },
      },
      {
        titre: "Le cas pratique : à quoi s'attendre",
        paragraphes: [
          "Le sujet met en scène un agent de maîtrise qui encadre une équipe, avec un dossier de documents (fiches de prévention, plans, bordereau de prix, articles) et des annexes. Les questions sont notées et pèsent lourd, puisque l'épreuve est affectée du coefficient 3.",
        ],
        points: [
          "Organiser : répartir les agents, planifier les interventions, tenir compte des rendements et des absences.",
          "Chiffrer : métrés, quantités de matériaux, bordereau de prix, bon de commande avec TVA à 20 % et remise.",
          "Sécuriser : EPI à prévoir, vérifications avant une intervention, stockage de produits chimiques, signalisation, conduite à tenir après un accident.",
          "Rédiger : une note à l'équipe, des recommandations, une réponse structurée à partir des documents fournis.",
          "Exemple de session 2025 : note sur les mesures de protection sanitaire, EPI d'un agent qui tronçonne, aménagement d'un local de produits chimiques avec pictogrammes, bon de commande et dalle de béton à calculer.",
        ],
      },
      {
        titre: "Comment travailler avec les annales",
        points: [
          "1. Faites un sujet complet en temps réel (2 heures), avec une calculatrice simple et sans documents.",
          "2. Corrigez avec les corrigés et les rapports de jury, quand ils existent, puis refaites les calculs en justifiant chaque étape.",
          "3. Lisez les bonnes copies publiées par les centres de gestion : elles montrent le niveau de détail attendu.",
          "4. Notez les thèmes qui reviennent et reprenez les cours correspondants.",
          "5. Entraînez-vous avec les quiz « Annales » du site, adaptés des sujets officiels, puis passez aux épreuves blanches.",
        ],
      },
      {
        titre: "Les préparations du CNFPT",
        paragraphes: [
          "D'après la fiche de cursus du CNFPT pour l'agent de maîtrise, la préparation du concours interne comprend, pour l'écrit, la méthodologie du cas pratique (3 devoirs, 1 concours blanc) et la préparation à la vérification des connaissances techniques (français et mathématiques en lien avec l'épreuve, 3 devoirs, 1 concours blanc). Elle ajoute des apports de connaissances en culture territoriale, connaissances liées au cadre d'emplois et santé et sécurité au travail, puis, pour l'oral, un travail sur les acquis de l'expérience, la méthodologie et les mises en situation.",
          "L'accès à ces préparations passe par l'inscription en ligne du CNFPT, avec un test de positionnement possible. Leurs contenus sont réservés aux inscrits : ce site ne les reproduit pas. Les cours et les questions de Prépa Territoriale sont rédigés à partir des notes de cadrage et des annales publiques des centres de gestion.",
        ],
      },
    ],
    aRetenir: [
      "Cas pratique : 2 heures, coefficient 3. Questionnaire de connaissances techniques : 2 heures, coefficient 2.",
      "L'hygiène et la sécurité occupent une place prépondérante.",
      "Les calculs sont justifiés, avec unités et arrondis corrects.",
      "Les mêmes thèmes reviennent : sécurité, produits chimiques, amiante, matériaux, voirie et réseaux, calculs de chantier.",
    ],
    pieges: [
      "Croire que le concours interne comporte une épreuve de mathématiques : elle est propre au concours externe, mais les calculs sont bien présents dans le questionnaire et le cas pratique.",
      "Négliger l'hygiène et la sécurité, alors qu'elles ont la place la plus importante.",
      "Donner un résultat sans justifier le calcul ou sans unité.",
      "Se préparer sur un seul sujet : les thèmes changent de forme d'une année à l'autre.",
    ],
    quizThemeId: "am-annales-connaissances",
    ressources: [
      {
        label:
          "Fiche du concours d'agent de maîtrise, avec annales, cadrages et rapports de jury (CDG Auvergne-Rhône-Alpes)",
        url: "https://www.cdg-aura.fr/concours/agent-maitrise",
      },
      {
        label:
          "Note de cadrage : vérification des connaissances techniques (concours interne et 3e concours)",
        url: "https://www.cdg-aura.fr/sites/default/files/Notes%20de%20cadrage/agent_maitrise_int_3c_cadrage_questionnaire.pdf",
      },
      {
        label: "Note de cadrage : cas pratique",
        url: "https://www.cdg-aura.fr/sites/default/files/Notes%20de%20cadrage/agent_maitrise_ext-int_3c_cadrage_cas_pratique.pdf",
      },
      {
        label: "Sujet 2025 du questionnaire BTP-VRD (CDG 63)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg63-am-2025-sujetquestions-btp_vrd.pdf",
      },
      {
        label: "Sujet 2023 du questionnaire BTP-VRD (CDG 63)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg63_concours_agent_de_maitrise_2023_-_sujet_questions_btp_vrd.pdf",
      },
      {
        label: "Sujet 2025 du cas pratique BTP-VRD (CDG 63)",
        url: "https://www.cdg-aura.fr/sites/default/files/Annales/cdg63-am-2025-sujetcaspratique-btp_vrd.pdf",
      },
      {
        label: "Sujet et corrigé 2025 du cas pratique BTP-VRD (CDG 18)",
        url: "https://www.cdg18.fr/fileadmin/bibliotheque/Documents/Concours/Annales/Filiere_Technique/Concours_Agent_de_Maitrise/Session_2025_-_1_-_Corrige_Cas_pratique.pdf",
      },
      {
        label: "Sujet 2023 du cas pratique BTP-VRD (CDG 62)",
        url: "https://www.cdg62.fr/images/docs/EDEP/concours/annales/filiere-technique/Annales-concours-Agent-de-maitrise-2023-Sujet-Cas-pratique-BTPVR-Int-Ext-3e-21112023.pdf",
      },
      {
        label: "Sujet 2020-2021 du cas pratique BTP-VRD (CDG 49)",
        url: "https://cdg49.fr/wp-content/uploads/2023/02/conc-agent-de-maitrise-2020-2021-cas-pratique-btp-vrd.pdf",
      },
      {
        label: "Fiche de cursus de la préparation CNFPT au concours d'agent de maîtrise",
        url: "https://www.cnfpt.fr/sites/default/files/technique_agent_maitrise_concours_v2021.pdf",
      },
    ],
  },
  {
    id: "batiment",
    partie: "specialite",
    title: "Bâtiment : gros œuvre, second œuvre et pathologies",
    resume:
      "Les phases d'une construction, les fondations, le béton, la maçonnerie, la toiture, les désordres courants, les acteurs et les garanties.",
    duree: "50 minutes",
    objectifs: [
      "Distinguer gros œuvre, clos et couvert, second œuvre",
      "Connaître le vocabulaire des fondations, du béton et de la maçonnerie",
      "Reconnaître un désordre courant et adopter le bon réflexe",
      "Citer les acteurs, les documents de marché et les garanties",
    ],
    sections: [
      {
        titre: "Les phases d'une construction",
        paragraphes: [
          "Un bâtiment se construit en deux grandes phases : le gros œuvre, qui assure la solidité, puis le second œuvre, qui rend le bâtiment utilisable. L'agent de maîtrise intervient surtout en entretien, en petits travaux neufs en régie et en suivi d'entreprises.",
        ],
        tableau: {
          entetes: ["Phase", "Ce qu'elle comprend", "Exemples"],
          lignes: [
            [
              "Gros œuvre",
              "Tout ce qui assure la solidité et la stabilité",
              "Fondations, murs porteurs, planchers, poteaux, poutres, charpente",
            ],
            [
              "Clos et couvert",
              "Mettre le bâtiment hors d'eau et hors d'air",
              "Couverture, menuiseries extérieures",
            ],
            [
              "Second œuvre",
              "Finitions et équipements",
              "Cloisons, plâtrerie, électricité, plomberie, chauffage, peinture, sols",
            ],
          ],
        },
      },
      {
        titre: "Fondations et sol",
        points: [
          "Fondations : partie de l'ouvrage qui transmet les charges du bâtiment au sol.",
          "Semelle filante : fondation continue sous un mur. Semelle isolée : fondation ponctuelle sous un poteau.",
          "Fondations profondes : pieux ou puits qui vont chercher le bon sol en profondeur. Radier : dalle de béton armé sous toute la surface du bâtiment.",
          "Hors gel : profondeur minimale des fondations (souvent 50 à 80 cm en France selon la région) pour éviter les dégâts du gel.",
          "Béton de propreté : couche de béton maigre au fond de la fouille (souvent 5 cm), pour travailler sur une surface propre.",
          "Vide sanitaire : espace ventilé entre le sol et le premier plancher. Arase étanche : couche qui bloque les remontées d'humidité en haut des fondations.",
        ],
      },
      {
        titre: "Béton, mortier et béton armé",
        tableau: {
          entetes: ["Matériau", "Composition", "Usage"],
          lignes: [
            ["Mortier", "Ciment + sable + eau", "Hourder (assembler) les blocs, enduire, sceller"],
            ["Béton", "Ciment + sable + gravillons + eau", "Fondations, dalles, poteaux"],
            [
              "Béton armé",
              "Béton + armatures en acier",
              "Éléments qui travaillent en flexion : poutres, dalles, linteaux",
            ],
          ],
        },
        points: [
          "Le béton résiste bien à la compression, l'acier à la traction : c'est le principe du béton armé.",
          "Ferraillage : ensemble des armatures (barres, étriers, treillis soudé). Enrobage : épaisseur de béton qui protège l'acier de la rouille (2 à 5 cm).",
          "Coffrage : moule du béton. Banche : grand panneau de coffrage pour les murs. Vibrage : chasse l'air du béton frais. Cure : protège le béton du dessèchement les premiers jours.",
          "BPE : béton prêt à l'emploi, livré en camion toupie. Joint de dilatation : coupure qui évite la fissuration.",
        ],
        reperes: [
          "Résistance de référence du béton : mesurée à 28 jours",
          "Dosage courant : 350 kg de ciment par m³",
        ],
      },
      {
        titre: "Maçonnerie et structure",
        points: [
          "Mur porteur : supporte planchers et toiture ; on ne le modifie jamais sans étude. Cloison : mur non porteur.",
          "Parpaing : bloc béton, le plus courant mesure 20 × 20 × 50 cm, soit 10 blocs par m² de mur. Brique : bloc en terre cuite.",
          "Chaînage : ceinture en béton armé, horizontale ou verticale, qui rigidifie les murs. Linteau : poutre au-dessus d'une ouverture. Appui : partie basse de la fenêtre, en pente pour évacuer l'eau.",
          "Poteau : élément vertical porteur. Poutre : élément horizontal porteur. Dalle : plancher en béton.",
          "Chape : couche de mortier pour obtenir un sol plan. Ragréage : couche fine de finition. Enduit : revêtement des murs.",
          "Aplomb : parfaitement vertical. De niveau : parfaitement horizontal.",
        ],
      },
      {
        titre: "Charpente, couverture et second œuvre",
        points: [
          "Charpente : ossature qui porte la couverture. Panne : pièce horizontale qui porte les chevrons. Chevron : pièce inclinée qui porte les liteaux. Liteau : reçoit les tuiles. Faîtage : sommet du toit.",
          "Couverture : tuiles, ardoises, bac acier, zinc. Gouttière et descente EP : recueillent et évacuent l'eau de pluie.",
          "Toiture-terrasse : toit plat avec une membrane d'étanchéité. Acrotère : petit mur en bord de toiture. Relevé d'étanchéité : remontée de la membrane contre l'acrotère.",
          "Corps d'état (ou lot) : un métier sur le chantier. TCE : tous corps d'état.",
          "Isolation : sa performance se mesure par la résistance thermique R (plus R est grand, mieux c'est). Pont thermique : zone de fuite de chaleur.",
          "VMC : ventilation mécanique contrôlée. Plomberie : alimentation en eau, évacuations EU (eaux usées) et EV (eaux vannes des WC).",
        ],
      },
      {
        titre: "Pathologies du bâtiment",
        tableau: {
          entetes: ["Désordre", "Signes", "Causes fréquentes", "Réaction de l'agent de maîtrise"],
          lignes: [
            [
              "Fissure",
              "Ouverture dans un mur",
              "Tassement du sol, retrait, surcharge",
              "Photos, témoins pour suivre l'évolution, alerte si traversante ou évolutive",
            ],
            [
              "Remontées capillaires",
              "Salpêtre, peinture qui cloque en bas des murs",
              "Absence ou rupture d'arase étanche",
              "Signaler, faire diagnostiquer",
            ],
            [
              "Infiltration",
              "Traces d'eau au plafond",
              "Étanchéité, relevés, évacuations bouchées",
              "Vérifier les évacuations, sécuriser, vérifier les garanties",
            ],
            [
              "Condensation",
              "Moisissures, buée",
              "Manque de ventilation",
              "Vérifier la VMC et les entrées d'air",
            ],
            [
              "Épaufrure",
              "Béton éclaté, acier visible",
              "Acier qui rouille et gonfle",
              "Purger, traiter l'acier, reconstituer",
            ],
          ],
        },
      },
      {
        titre: "Acteurs, documents et garanties",
        points: [
          "Maître d'ouvrage (MOA) : commande et paie l'ouvrage (la collectivité). Maître d'œuvre (MOE) : conçoit et suit les travaux.",
          "CCTP : cahier des clauses techniques particulières. BPU : bordereau des prix unitaires. DQE : détail quantitatif estimatif. DPGF : décomposition du prix global et forfaitaire.",
          "OS : ordre de service. Réception : acceptation de l'ouvrage, avec ou sans réserves. DOE : dossier des ouvrages exécutés. DIUO : dossier d'intervention ultérieure sur l'ouvrage.",
          "ERP : établissement recevant du public, soumis à des règles renforcées d'incendie et d'accessibilité.",
        ],
        reperes: [
          "Garanties : parfait achèvement 1 an, bon fonctionnement 2 ans, décennale 10 ans",
          "Amiante : repérage obligatoire avant travaux dans un bâtiment dont le permis de construire est antérieur au 1er juillet 1997",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Rampe PMR à l'entrée d'une école : la marche fait 15 cm, la rampe aura une pente de 5 %, une largeur de 1,40 m et une dalle de 12 cm. Quel volume de béton prévoir, avec 10 % de marge ?",
        etapes: [
          "Longueur de la rampe : 0,15 ÷ 0,05 = 3 m.",
          "Surface : 3 × 1,40 = 4,20 m².",
          "Volume : 4,20 × 0,12 = 0,504 m³.",
          "Avec 10 % de marge : 0,504 × 1,10 = 0,55 m³ environ.",
        ],
        resultat: "Il faut commander environ 0,55 m³ de béton.",
      },
      {
        enonce:
          "Un mur de 8 m de long et 2,50 m de haut est monté en parpaings de 20 × 20 × 50 cm. Il comporte une porte de 0,90 × 2,10 m. Combien de parpaings commander avec 5 % de casse ?",
        etapes: [
          "Surface du mur : 8 × 2,50 = 20 m². Surface de la porte : 0,90 × 2,10 = 1,89 m².",
          "Surface nette : 20 − 1,89 = 18,11 m².",
          "À 10 parpaings par m² : 18,11 × 10 = 181,1 parpaings.",
          "Avec 5 % de casse : 181,1 × 1,05 = 190,2, arrondi à l'unité supérieure.",
        ],
        resultat: "Il faut commander 191 parpaings.",
      },
    ],
    aRetenir: [
      "Béton = ciment + sable + gravillons + eau ; mortier = sans gravillons.",
      "L'acier reprend la traction, le béton la compression ; l'enrobage protège l'acier.",
      "Un linteau reprend les charges au-dessus d'une ouverture ; le chaînage rigidifie les murs.",
      "Garanties après réception : 1 an, 2 ans, 10 ans.",
    ],
    pieges: [
      "Percer, poncer ou démolir dans un bâtiment d'avant juillet 1997 sans consulter le repérage amiante (et penser au plomb des vieilles peintures).",
      "Modifier un mur porteur sans étude.",
      "Réparer en régie un désordre couvert par une garantie : cela peut compliquer sa mise en jeu.",
      "Confondre linteau, chaînage et appui.",
    ],
    quizThemeId: "am-batiment",
  },
  {
    id: "terrassement",
    partie: "specialite",
    title: "Travaux publics et terrassement",
    resume:
      "Le vocabulaire du terrassement, les sols, le foisonnement, les matériaux granulaires, les engins, la topographie et les ouvrages d'art.",
    duree: "50 minutes",
    objectifs: [
      "Employer le vocabulaire juste : déblai, remblai, fond de forme, talus, cubature",
      "Calculer un volume foisonné et un nombre de rotations",
      "Lire une granulométrie d/D et situer une grave dans une chaussée",
      "Calculer une altitude au niveau de chantier",
    ],
    sections: [
      {
        titre: "Le vocabulaire du terrassement",
        paragraphes: [
          "Les travaux publics regroupent les ouvrages d'intérêt général hors bâtiment : routes, réseaux, ouvrages d'art. Tout commence par le terrassement, qui prépare le sol à recevoir l'ouvrage.",
        ],
        tableau: {
          entetes: ["Terme", "Définition"],
          lignes: [
            ["Déblai", "Terre que l'on enlève"],
            ["Remblai", "Terre ou matériau que l'on apporte pour combler ou rehausser"],
            [
              "Décapage",
              "Enlèvement de la terre végétale en surface (20 à 30 cm), stockée pour réemploi",
            ],
            ["Décaissement", "Creusement sur une épaisseur précise pour construire une structure"],
            [
              "Fouille / tranchée",
              "Trou pour une fondation / fouille longue et étroite pour un réseau",
            ],
            ["Fond de forme", "Fond du terrassement sur lequel on construit"],
            ["Talus", "Pente de terre sur le côté d'un déblai ou d'un remblai"],
            [
              "Blindage",
              "Soutènement des parois d'une tranchée, obligatoire au-delà de 1,30 m de profondeur si les parois ne sont pas talutées",
            ],
            ["Cubature", "Calcul des volumes de terre"],
            [
              "ISDI",
              "Installation de stockage de déchets inertes, où l'on évacue les terres non réutilisées",
            ],
          ],
        },
      },
      {
        titre: "Les sols",
        points: [
          "Portance : capacité d'un sol à supporter une charge. Elle se mesure par l'essai à la plaque.",
          "Sol argileux : gonfle à l'eau, se rétracte en séchant. Sol sableux ou graveleux : draine bien, bonne portance.",
          "Nappe phréatique : eau souterraine. Si elle est haute, on rabat la nappe par pompage.",
          "Traitement des sols : à la chaux (sécher une argile) ou au liant hydraulique (durcir).",
          "Géotextile : toile qui sépare, filtre ou renforce. Étude géotechnique : analyse du sol avant travaux.",
        ],
      },
      {
        titre: "Foisonnement et compactage",
        paragraphes: [
          "La terre extraite prend plus de volume qu'en place, car elle contient davantage de vides : c'est le foisonnement. Le coefficient courant est de 1,1 à 1,4. Le volume foisonné est celui qu'on transporte.",
          "Le compactage se fait par couches de 20 à 30 cm, avec une teneur en eau correcte (déterminée par l'essai Proctor). Un remblai mal compacté est la cause classique d'affaissement des tranchées.",
        ],
        reperes: [
          "Volume foisonné = volume en place × coefficient",
          "Nombre de rotations = volume foisonné ÷ capacité du camion, arrondi au supérieur",
        ],
      },
      {
        titre: "Les matériaux granulaires",
        points: [
          "Granulométrie d/D : taille mini/maxi des grains en mm. Une GNT 0/31,5 contient des grains de 0 à 31,5 mm.",
          "Sable : environ 0 à 4 mm. Gravillons : environ 4 à 31,5 mm.",
          "GNT : grave non traitée, sans liant. Grave-ciment, grave-bitume : graves traitées. Tout-venant : matériau non trié pour remblais.",
        ],
      },
      {
        titre: "Engins et matériel",
        points: [
          "Mini-pelle : petites tranchées en ville. Pelle hydraulique : terrassement et tranchées profondes. Chargeuse, tractopelle : charger, déplacer, petit terrassement. Niveleuse : régler une surface. Compacteur : compacter sols et enrobés. Tombereau, dumper : transporter les matériaux.",
          "La conduite d'un engin de chantier suppose un CACES R482 correspondant à l'engin, mais le CACES ne suffit pas : il faut aussi une autorisation de conduite délivrée par l'employeur.",
          "Petit matériel : plaque vibrante, pilonneuse, scie de sol, brise-roche, niveau laser.",
        ],
      },
      {
        titre: "Topographie et implantation",
        points: [
          "Implantation, piquetage : report sur le terrain de la position des ouvrages.",
          "Cote NGF : altitude par rapport au nivellement général de la France. Repère de nivellement : point d'altitude connue.",
          "Nivellement : mesure des différences de hauteur au niveau de chantier et à la mire.",
          "Profil en long : coupe dans la longueur (altitudes, pentes). Profil en travers : coupe dans la largeur (dévers, trottoirs, structure).",
          "Plan de récolement : plan de ce qui a réellement été construit.",
        ],
        paragraphes: [
          "Pour calculer une altitude au niveau de chantier : on vise la mire sur un repère d'altitude connue (lecture arrière), puis sur le point cherché (lecture avant).",
        ],
        reperes: [
          "Hauteur de l'appareil = altitude du repère + lecture arrière",
          "Altitude du point = hauteur de l'appareil − lecture avant",
        ],
      },
      {
        titre: "Ouvrages d'art",
        points: [
          "Ouvrage d'art : pont, passerelle, tunnel, mur de soutènement. Un mur de soutènement retient la terre d'un talus.",
          "Buse : gros tuyau sous une route. Dalot : ouvrage hydraulique rectangulaire. Tête d'aqueduc : maçonnerie à l'entrée et à la sortie d'une buse.",
          "Tablier : partie circulée d'un pont. Culée : appui d'extrémité. Pile : appui intermédiaire.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Une aire de stationnement de 25 m × 12 m : décapage de 25 cm, foisonnement 1,3, camion de 8 m³. Combien de rotations pour évacuer les déblais ?",
        etapes: [
          "Surface : 25 × 12 = 300 m².",
          "Déblais en place : 300 × 0,25 = 75 m³.",
          "Déblais foisonnés : 75 × 1,3 = 97,5 m³.",
          "Rotations : 97,5 ÷ 8 = 12,2, arrondi au supérieur.",
        ],
        resultat: "Il faut 13 rotations.",
      },
      {
        enonce:
          "Un repère a une altitude de 52,30 m. La lecture arrière sur ce repère est de 1,45 m et la lecture avant sur le point B est de 2,10 m. Quelle est l'altitude de B ?",
        etapes: [
          "Hauteur de l'appareil : 52,30 + 1,45 = 53,75 m.",
          "Altitude de B : 53,75 − 2,10 = 51,65 m.",
        ],
        resultat: "Le point B est à 51,65 m, soit 0,65 m plus bas que le repère.",
      },
    ],
    aRetenir: [
      "Déblai : on enlève. Remblai : on apporte.",
      "On transporte le volume foisonné, jamais le volume en place.",
      "Blindage au-delà de 1,30 m si les parois ne sont pas talutées ; déblais à au moins 40 cm du bord.",
      "CACES + autorisation de conduite de l'employeur.",
    ],
    pieges: [
      "Oublier le foisonnement pour l'évacuation des déblais.",
      "Arrondir un nombre de rotations à l'inférieur.",
      "Confondre profil en long (altitudes, pentes) et profil en travers (largeurs, dévers).",
      "Compacter en couches trop épaisses.",
    ],
    quizThemeId: "am-terrassement",
  },
  {
    id: "voirie",
    partie: "specialite",
    title: "Voirie : chaussées, enrobés, accessibilité et signalisation",
    resume:
      "Les couches d'une chaussée, les enrobés, les dégradations et leurs remèdes, les bordures, les règles d'accessibilité et la gestion du domaine public.",
    duree: "50 minutes",
    objectifs: [
      "Classer les couches d'une chaussée, du haut vers le bas",
      "Reconnaître une dégradation, en déduire la cause et le remède",
      "Appliquer les règles d'accessibilité de la voirie",
      "Distinguer permission de voirie et permis de stationnement",
    ],
    sections: [
      {
        titre: "Les couches d'une chaussée (du haut vers le bas)",
        paragraphes: [
          "Une chaussée est un empilement de couches qui répartissent les charges des véhicules jusqu'au sol. C'est le trafic poids lourds qui détermine l'épaisseur de la structure.",
        ],
        tableau: {
          entetes: ["Couche", "Rôle", "Matériaux courants"],
          lignes: [
            [
              "Couche de roulement",
              "Adhérence, étanchéité, confort",
              "Enrobé BB, BBSG, BBM, enduit superficiel",
            ],
            ["Couche de liaison", "Lien avec la base (voies très circulées)", "Enrobé"],
            [
              "Couche de base",
              "Reprend et répartit les efforts",
              "Grave-bitume, grave-ciment, GNT",
            ],
            ["Couche de fondation", "Répartit les charges sur le sol", "GNT, grave traitée"],
            [
              "Couche de forme",
              "Protège et améliore le sol support",
              "Granulats, sol traité à la chaux",
            ],
            ["Sol support", "Terrain naturel", "—"],
          ],
        },
        points: [
          "Corps de chaussée : couche de base + couche de fondation. Plate-forme : dessus de la couche de forme.",
          "Chaussée souple : enrobés sur grave. Chaussée rigide : dalle en béton.",
        ],
      },
      {
        titre: "Enrobés et revêtements",
        points: [
          "Bitume : liant noir issu du pétrole. Enrobé : granulats + bitume, fabriqué à chaud en centrale.",
          "BB : béton bitumineux. BBSG : semi-grenu, très courant. BBM : mince. BB 0/6 : fin (trottoirs). BB 0/10 : courant en chaussée.",
          "Enrobé à chaud : mis en œuvre vers 150 °C, compacté avant refroidissement. Enrobé à froid : réparations provisoires.",
          "Couche d'accrochage : émulsion de bitume qui colle l'enrobé à la couche inférieure.",
          "Enduit superficiel : bitume + gravillons, économique pour les voies peu circulées.",
          "Rabotage (fraisage) : enlèvement de l'ancien enrobé avant renouvellement. PATA : point à temps automatique.",
          "Pavage, dallage : posés sur un lit de pose (sable ou mortier), avec des joints.",
        ],
      },
      {
        titre: "Les dégradations",
        tableau: {
          entetes: ["Dégradation", "Description", "Cause principale", "Remède"],
          lignes: [
            [
              "Nid-de-poule",
              "Trou dans la chaussée",
              "Eau + gel-dégel",
              "Rebouchage (froid en provisoire, chaud en définitif)",
            ],
            [
              "Faïençage",
              "Fissures en mailles",
              "Fatigue de la structure",
              "Purge et reconstitution de la structure",
            ],
            [
              "Ornière",
              "Creux longitudinal",
              "Passage des poids lourds, enrobé trop mou",
              "Rabotage et nouvel enrobé",
            ],
            [
              "Ressuage",
              "Bitume qui remonte, surface glissante",
              "Excès de bitume, chaleur",
              "Gravillonnage, renouvellement",
            ],
            [
              "Plumage",
              "Perte des gravillons",
              "Vieillissement, mauvaise mise en œuvre",
              "Enduit ou nouvel enrobé",
            ],
            [
              "Affaissement",
              "Enfoncement localisé",
              "Remblai mal compacté, fuite de réseau",
              "Recherche de la cause puis reprise",
            ],
          ],
        },
      },
      {
        titre: "Bordures, caniveaux et profil de la voie",
        points: [
          "Bordure T (T1, T2, T3) : bordure de trottoir haute, T2 la plus courante. Bordure A : arrondie, franchissable. Bordure P : petite bordure d'allée.",
          "Caniveau (CS1, CS2) : recueille l'eau au pied de la bordure. Fil d'eau : ligne la plus basse où coule l'eau. Vue : hauteur visible de la bordure, souvent 14 à 16 cm.",
          "Abaissé de trottoir : passage piéton. Bateau (entrée charretière) : accès véhicules à une propriété.",
          "Emprise : surface totale de la voie. Chaussée : partie circulée. Accotement : bande latérale hors agglomération.",
          "Dévers : pente transversale de 2 à 2,5 % pour évacuer l'eau. Fossé : recueille les eaux de pluie.",
        ],
      },
      {
        titre: "Accessibilité de la voirie",
        tableau: {
          entetes: ["Règle", "Valeur de repère"],
          lignes: [
            [
              "Largeur du cheminement",
              "1,40 m libre d'obstacle (1,20 m sans mur ni obstacle de part et d'autre)",
            ],
            ["Dévers (pente transversale)", "2 % maximum"],
            ["Pente en long", "5 % maximum de préférence ; 8 % toléré sur 2 m et 12 % sur 0,50 m"],
            ["Ressaut", "2 cm maximum, bord arrondi ou chanfreiné"],
            [
              "Bande d'éveil de vigilance (BEV)",
              "Conforme à la norme NF P98-351, en haut des abaissés",
            ],
            [
              "Place de stationnement PMR",
              "3,30 m de large minimum, reliée à un cheminement accessible",
            ],
          ],
        },
        paragraphes: [
          "Le PAVE (plan de mise en accessibilité de la voirie et des espaces publics) programme les travaux de la commune. Les obstacles doivent être contrastés visuellement, et des bandes de guidage peuvent aider les personnes malvoyantes.",
        ],
      },
      {
        titre: "Signalisation et domaine public",
        points: [
          "Signalisation verticale : A (danger), AB (intersection), B (prescription), C (indication), D (direction).",
          "Signalisation temporaire : panneaux AK à fond jaune, équipements K (cônes, barrières).",
          "Pouvoir de police de la circulation : en agglomération, c'est le maire qui prend les arrêtés.",
          "Permission de voirie : occupation avec emprise au sol (canalisation). Permis de stationnement : occupation sans emprise (benne, échafaudage posé).",
          "Règlement de voirie : fixe les règles des travaux sur la voie publique (réfections, délais, garanties). Après une tranchée : réfection provisoire, puis définitive.",
          "Viabilité hivernale : salage et déneigement par niveaux de priorité. Patrouille : tournée de repérage des dégradations.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "30 nids-de-poule mesurent en moyenne 0,60 m × 0,60 m après découpe, sur 6 cm d'épaisseur. Masse volumique de l'enrobé : 2,4 t/m³. Quelle masse d'enrobé commander, avec 10 % de marge ?",
        etapes: [
          "Volume par trou : 0,60 × 0,60 × 0,06 = 0,0216 m³.",
          "Volume total : 0,0216 × 30 = 0,648 m³.",
          "Masse : 0,648 × 2,4 = 1,555 t.",
          "Avec 10 % de marge : 1,555 × 1,10 = 1,71 t.",
        ],
        resultat: "Il faut commander environ 1,7 t d'enrobé.",
      },
      {
        enonce:
          "Un trottoir a une vue de 15 cm. On crée un abaissé qui ramène le trottoir à 2 cm au-dessus du caniveau, avec une pente de 5 %. Quelle longueur de rampe faut-il ?",
        etapes: [
          "Dénivelé à rattraper : 15 − 2 = 13 cm = 0,13 m.",
          "Longueur = dénivelé ÷ pente = 0,13 ÷ 0,05 = 2,60 m.",
        ],
        resultat: "La rampe doit mesurer 2,60 m.",
      },
    ],
    aRetenir: [
      "Du haut vers le bas : roulement, base, fondation, forme.",
      "Cheminement 1,40 m, dévers 2 %, ressaut 2 cm, place PMR 3,30 m.",
      "Un faïençage signale une structure fatiguée : un simple enrobé de surface ne suffit pas.",
      "En agglomération, le maire prend l'arrêté de circulation.",
    ],
    pieges: [
      "Confondre dévers (dans la largeur) et pente en long (dans le sens de la marche).",
      "Confondre permission de voirie (avec emprise) et permis de stationnement (sans emprise).",
      "Oublier la couche d'accrochage avant un enrobé.",
      "Traiter le symptôme d'une dégradation sans rechercher sa cause (eau, trafic, fuite de réseau).",
    ],
    quizThemeId: "am-voirie",
  },
  {
    id: "reseaux",
    partie: "specialite",
    title: "Réseaux divers : assainissement, eau potable et DT-DICT",
    resume:
      "Eaux usées et pluviales, ouvrages, entretien, eau potable, couleurs des grillages et procédure DT-DICT avant tout travail près des réseaux.",
    duree: "50 minutes",
    objectifs: [
      "Distinguer réseau unitaire et séparatif, EU, EV et EP",
      "Nommer les ouvrages : regard, avaloir, boîte de branchement, tampon",
      "Associer chaque couleur de grillage à son réseau",
      "Appliquer la procédure DT-DICT et connaître le rôle de l'ATU",
    ],
    sections: [
      {
        titre: "L'assainissement : les bases",
        paragraphes: [
          "On distingue les réseaux humides (eau potable, eaux usées, eaux pluviales) et les réseaux secs (électricité, gaz, télécom, éclairage). Avant toute tranchée, la règle d'or est de savoir ce qu'il y a dans le sol.",
        ],
        tableau: {
          entetes: ["Terme", "Définition"],
          lignes: [
            ["EU / EV / EP", "Eaux usées / eaux vannes (WC) / eaux pluviales"],
            [
              "Réseau unitaire",
              "Une seule canalisation pour EU et EP ; risque de débordement par forte pluie",
            ],
            ["Réseau séparatif", "Deux canalisations distinctes, solution recommandée aujourd'hui"],
            [
              "Mauvais branchement",
              "EU dans le pluvial (pollution) ou EP dans le réseau EU (surcharge de la station)",
            ],
            [
              "Assainissement collectif",
              "Raccordement au réseau public jusqu'à la station d'épuration",
            ],
            [
              "ANC et SPANC",
              "Assainissement non collectif (installation individuelle), contrôlé par le service public d'assainissement non collectif",
            ],
            ["STEP", "Station d'épuration"],
          ],
        },
      },
      {
        titre: "Les ouvrages",
        points: [
          "Collecteur : canalisation principale. Branchement : relie l'habitation au collecteur. Boîte de branchement : regard en limite de propriété, fin de la partie privée.",
          "Regard de visite : accès au collecteur, à chaque changement de direction, de pente ou de diamètre, et environ tous les 50 à 80 m.",
          "Tampon : couvercle en fonte. Classe D400 sous chaussée circulée, C250 en bordure de trottoir, B125 sur trottoir.",
          "Cunette : rigole au fond du regard. Radier : fond de l'ouvrage.",
          "Avaloir : bouche sous la bordure. Grille : bouche au sol. Décanteur : retient sables et déchets.",
          "Poste de relevage : pompes qui remontent les eaux. Refoulement : canalisation sous pression. Gravitaire : écoulement par la pente.",
          "Autres ouvrages : déversoir d'orage, bassin de rétention, noue, séparateur d'hydrocarbures, clapet anti-retour.",
        ],
      },
      {
        titre: "Pentes, diamètres et matériaux",
        points: [
          "Les pentes de repère sont de l'ordre de 0,3 % minimum pour un collecteur EU et de 1 % ou plus pour un branchement. Les valeurs exactes sont fixées par le règlement de service et les normes : celles de l'énoncé font foi.",
          "DN : diamètre nominal. Collecteur EU souvent DN 200 minimum, branchement DN 150 ou 160.",
          "Matériaux : PVC (léger), fonte (fortes charges), grès (effluents agressifs), béton (gros diamètres), PEHD (souple).",
          "Pose : lit de pose, enrobage jusqu'à 10 à 20 cm au-dessus de la canalisation, grillage avertisseur, remblai compacté.",
        ],
      },
      {
        titre: "Entretien et contrôle",
        points: [
          "Curage : nettoyage à haute pression par hydrocureuse.",
          "ITV : inspection télévisée par caméra. Test à la fumée : repère les mauvais branchements.",
          "Tests d'étanchéité à l'eau ou à l'air ; contrôle de compactage au pénétromètre pour les réseaux neufs.",
          "Défauts courants : racines, dépôts, fissures, déboîtements, contre-pentes, effondrements.",
          "H2S : gaz toxique (odeur d'œuf pourri) qui, à forte dose, ne se sent plus. Voir le cours « Sécurité des chantiers ».",
        ],
      },
      {
        titre: "Eau potable (AEP)",
        points: [
          "Le trajet de l'eau : captage → traitement → réservoir (château d'eau) → réseau sous pression → compteur.",
          "Réseau maillé (en boucles) ou ramifié (en arbre).",
          "Équipements : vanne, bouche à clé, ventouse (sortie d'air), vidange. Poteau incendie (PI) et bouche incendie (BI) : contrôlés régulièrement (débit, pression).",
        ],
      },
      {
        titre: "Réseaux secs et grillages avertisseurs",
        tableau: {
          entetes: ["Couleur du grillage", "Réseau"],
          lignes: [
            ["Bleu", "Eau potable"],
            ["Marron", "Assainissement"],
            ["Jaune", "Gaz"],
            ["Rouge", "Électricité et éclairage public"],
            ["Vert", "Télécommunications et fibre"],
          ],
        },
        paragraphes: [
          "Un fourreau est un tube qui protège les câbles ; une chambre de tirage est un regard télécom. Le concessionnaire ou exploitant est celui qui gère un réseau (gaz, électricité, télécom).",
        ],
      },
      {
        titre: "Travaux à proximité des réseaux : DT-DICT",
        tableau: {
          entetes: ["Étape", "Qui", "Quoi"],
          lignes: [
            ["Guichet unique", "Tous", "Recense les exploitants de réseaux sur la zone"],
            ["DT", "Maître d'ouvrage", "Déclaration de projet de travaux"],
            ["DICT", "Exécutant", "Déclaration d'intention de commencement de travaux"],
            ["Récépissé", "Exploitant", "Plans et recommandations de sécurité"],
            [
              "Marquage-piquetage",
              "Maître d'ouvrage / exécutant",
              "Repérage au sol avant terrassement",
            ],
            ["ATU", "Exécutant", "Avis de travaux urgents, remplace la DT-DICT en cas d'urgence"],
          ],
        },
        points: [
          "Classe de précision : A (localisation précise), B ou C (moins sûre). En B ou C, des investigations complémentaires sont nécessaires.",
          "AIPR : autorisation d'intervention à proximité des réseaux, obligatoire pour les agents concernés.",
          "Près d'un réseau, on travaille avec des techniques douces : à la main ou par aspiration.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Une maison neuve est à raccorder au collecteur EU, à 12 m. La pente minimale imposée est de 1 %. La sortie de la maison est à 0,70 m de profondeur, le terrain est plat. À quelle profondeur minimale le branchement arrive-t-il au collecteur ?",
        etapes: [
          "Dénivelé minimal : 0,01 × 12 = 0,12 m.",
          "Profondeur à l'arrivée : 0,70 + 0,12 = 0,82 m.",
        ],
        resultat:
          "L'arrivée est à 0,82 m au moins ; le collecteur doit être assez profond pour la recevoir.",
      },
      {
        enonce:
          "Quel volume d'eau contient une conduite de DN 200 (diamètre intérieur 0,20 m) sur 50 m ?",
        etapes: [
          "Rayon : 0,10 m.",
          "Volume = π × r² × longueur = 3,14 × 0,10² × 50 = 3,14 × 0,01 × 50 = 1,57 m³.",
        ],
        resultat: "1,57 m³, soit 1 570 litres.",
      },
    ],
    aRetenir: [
      "Bleu : eau potable. Marron : assainissement. Jaune : gaz. Rouge : électricité. Vert : télécom.",
      "DT par le maître d'ouvrage, DICT par l'exécutant, ATU en urgence.",
      "Classe de précision B ou C : investigations complémentaires, travail à la main ou par aspiration.",
      "Tampon D400 sous chaussée circulée, B125 sur trottoir.",
    ],
    pieges: [
      "Brancher une gouttière sur le réseau EU : surcharge de la station et débordements.",
      "Confondre DT (maître d'ouvrage) et DICT (exécutant).",
      "Descendre dans un regard sans mesurer l'atmosphère : jamais seul, jamais sans mesure.",
      "Terrasser à la pelle mécanique près d'un réseau de classe de précision B ou C.",
    ],
    quizThemeId: "am-reseaux",
  },
  {
    id: "calculs",
    partie: "specialite",
    title: "Mathématiques appliquées au chantier",
    resume:
      "Conversions, formules, masses volumiques et échelles : tous les calculs de chantier se ramènent à quelques formules, à écrire avec leurs unités.",
    duree: "50 minutes",
    objectifs: [
      "Convertir longueurs, surfaces, volumes, masses et pentes sans erreur",
      "Choisir la bonne formule : surface, volume, masse, pente, foisonnement",
      "Appliquer une marge ou une perte, puis arrondir correctement",
      "Comparer deux devis (HT et TTC) et lire une échelle",
    ],
    sections: [
      {
        titre: "Conversions",
        paragraphes: [
          "La règle numéro 1 : tout convertir en mètres avant de calculer, et écrire chaque étape avec son unité.",
        ],
        tableau: {
          entetes: ["Grandeur", "Conversions utiles"],
          lignes: [
            ["Longueur", "1 m = 100 cm = 1 000 mm ; 6 cm = 0,06 m ; 25 cm = 0,25 m"],
            ["Surface", "1 m² = 10 000 cm² ; 1 are = 100 m² ; 1 hectare = 10 000 m²"],
            ["Volume", "1 m³ = 1 000 litres ; 1 litre = 1 dm³"],
            ["Masse", "1 tonne = 1 000 kg"],
            ["Pente", "1 % = 1 cm par mètre = 10 mm/m"],
            ["Temps", "1 h = 60 min ; 0,5 h = 30 min ; 0,25 h = 15 min"],
          ],
        },
      },
      {
        titre: "Les formules",
        tableau: {
          entetes: ["Calcul", "Formule"],
          lignes: [
            ["Rectangle", "S = longueur × largeur"],
            ["Triangle", "S = (base × hauteur) ÷ 2"],
            ["Trapèze", "S = (grande base + petite base) × hauteur ÷ 2"],
            ["Disque", "S = π × rayon² (π ≈ 3,14)"],
            ["Périmètre du cercle", "P = 2 × π × rayon"],
            ["Volume d'une couche", "V = surface × épaisseur"],
            ["Volume d'un cylindre (tuyau)", "V = π × rayon² × longueur"],
            ["Masse", "M = volume × masse volumique"],
            ["Volume foisonné", "V foisonné = V en place × coefficient"],
            ["Nombre de rotations", "V foisonné ÷ capacité du camion, arrondi au supérieur"],
            ["Pente", "pente = dénivelé ÷ longueur (× 100 pour des %)"],
            ["Dénivelé", "dénivelé = pente × longueur"],
            ["Échelle", "réel = plan × dénominateur ; plan = réel ÷ dénominateur"],
            ["Marge, perte", "quantité × (1 + taux) ; 5 % → × 1,05"],
            ["TVA à 20 %", "TTC = HT × 1,20 ; HT = TTC ÷ 1,20"],
            ["Durée de travaux", "quantité ÷ rendement journalier, arrondi au supérieur"],
          ],
        },
      },
      {
        titre: "Masses volumiques de repère",
        paragraphes: [
          "Prenez toujours la valeur donnée par l'énoncé : ces valeurs ne servent qu'à juger l'ordre de grandeur.",
        ],
        tableau: {
          entetes: ["Matériau", "Masse volumique"],
          lignes: [
            ["Enrobé", "2,3 à 2,4 t/m³"],
            ["Béton", "2,3 à 2,5 t/m³"],
            ["GNT compactée", "2,0 à 2,2 t/m³"],
            ["Sable", "1,5 à 1,7 t/m³"],
            ["Terre", "1,6 à 1,8 t/m³"],
            ["Eau", "1 t/m³"],
          ],
        },
      },
      {
        titre: "Échelles courantes",
        tableau: {
          entetes: ["Échelle", "1 cm sur le plan =", "Usage"],
          lignes: [
            ["1/50", "0,50 m", "Détail d'ouvrage"],
            ["1/100", "1 m", "Plan de bâtiment"],
            ["1/200", "2 m", "Plan de voirie"],
            ["1/500", "5 m", "Plan de réseaux, de quartier"],
            ["1/1 000", "10 m", "Plan d'ensemble"],
          ],
        },
      },
    ],
    exemples: [
      {
        enonce:
          "Une parcelle en forme de trapèze a des bases de 30 m et 20 m, pour une hauteur de 15 m. Quelle est sa surface ?",
        etapes: [
          "Formule : (grande base + petite base) × hauteur ÷ 2.",
          "(30 + 20) × 15 ÷ 2 = 50 × 15 ÷ 2 = 375.",
        ],
        resultat: "La surface est de 375 m².",
      },
      {
        enonce:
          "L'entreprise A propose 4 200 € HT. L'entreprise B propose 4 920 € TTC (TVA 20 %). Laquelle est la moins chère ?",
        etapes: [
          "On compare dans la même unité : B en HT = 4 920 ÷ 1,20 = 4 100 € HT.",
          "A : 4 200 € HT ; B : 4 100 € HT.",
        ],
        resultat:
          "B est moins chère de 100 € HT (soit 120 € TTC). Il ne faut jamais comparer un HT et un TTC.",
      },
      {
        enonce:
          "Un camion fait une rotation en 40 minutes et il faut 12 rotations. Une journée de 7 h de travail effectif suffit-elle ?",
        etapes: ["12 × 40 = 480 minutes.", "480 min = 8 h, soit plus que les 7 h disponibles."],
        resultat: "Non : il faut un deuxième camion ou deux jours.",
      },
    ],
    aRetenir: [
      "Convertir d'abord, calculer ensuite, arrondir à la fin.",
      "Une commande ou un nombre de rotations s'arrondit toujours au supérieur.",
      "1 % de pente = 1 cm par mètre.",
      "Comparer des devis dans la même unité : tout en HT ou tout en TTC.",
    ],
    pieges: [
      "Oublier de convertir les centimètres en mètres (5 cm = 0,05 m, pas 0,5 m).",
      "Arrondir trop tôt : gardez 1,728 et non 1,72.",
      "Oublier le foisonnement pour l'évacuation des déblais.",
      "Donner un résultat sans unité ni phrase-réponse.",
    ],
    quizThemeId: "am-calculs",
  },
  {
    id: "securite",
    partie: "securite-encadrement",
    title: "Sécurité des chantiers",
    resume:
      "Principes de prévention, droit d'alerte et de retrait, EPI, habilitations, signalisation temporaire, tranchées, espaces confinés et conduite à tenir après un accident.",
    duree: "60 minutes",
    objectifs: [
      "Citer les 9 principes généraux de prévention et les acteurs de la prévention",
      "Distinguer droit d'alerte et droit de retrait",
      "Connaître les habilitations et la signalisation temporaire",
      "Appliquer les règles des tranchées et des espaces confinés",
    ],
    sections: [
      {
        titre: "Principes et acteurs de la prévention",
        paragraphes: [
          "L'agent de maîtrise est responsable de la sécurité de son équipe et des usagers sur ses chantiers. Au concours, la sécurité passe toujours en premier dans vos réponses.",
        ],
        tableau: {
          entetes: ["Acteur", "Rôle"],
          lignes: [
            [
              "Autorité territoriale",
              "Protège la santé et la sécurité des agents ; responsable du DUERP",
            ],
            ["Agent", "Prend soin de sa sécurité et de celle des autres, respecte les consignes"],
            [
              "Encadrant de proximité",
              "Fait appliquer les règles, donne les consignes, ne laisse pas travailler un agent en danger",
            ],
            ["Assistant de prévention", "Conseille l'encadrement"],
            ["Conseiller de prévention", "Coordonne la prévention"],
            [
              "ACFI",
              "Agent chargé de la fonction d'inspection : contrôle l'application des règles",
            ],
            [
              "F3SCT",
              "Formation spécialisée en santé, sécurité et conditions de travail du comité social territorial",
            ],
            ["Médecine préventive", "Aptitude, restrictions, aménagements de poste"],
          ],
        },
        points: [
          "Documents : DUERP (évaluation des risques), registre de santé et sécurité au travail, registre de danger grave et imminent.",
        ],
      },
      {
        titre: "Les 9 principes généraux de prévention",
        points: [
          "1. Éviter les risques.",
          "2. Évaluer ceux qu'on ne peut pas éviter.",
          "3. Les combattre à la source.",
          "4. Adapter le travail à l'homme.",
          "5. Tenir compte de l'évolution de la technique.",
          "6. Remplacer ce qui est dangereux par ce qui l'est moins.",
          "7. Planifier la prévention.",
          "8. Donner la priorité à la protection collective sur la protection individuelle.",
          "9. Donner les instructions appropriées aux agents.",
        ],
      },
      {
        titre: "Droit d'alerte et droit de retrait",
        points: [
          "Droit d'alerte : l'agent signale immédiatement une situation qu'il estime dangereuse.",
          "Droit de retrait : possible s'il a un motif raisonnable de penser qu'il y a un danger grave et imminent pour sa vie ou sa santé.",
          "Il alerte sa hiérarchie, et son retrait ne doit pas créer un nouveau danger pour autrui. Aucune sanction ni retenue de salaire si le retrait est justifié.",
        ],
      },
      {
        titre: "Équipements de protection",
        points: [
          "Protection collective (barrières, blindage, garde-corps) : prioritaire.",
          "EPI : fournis gratuitement, obligatoires. En voirie : vêtement haute visibilité (classe 2 minimum, classe 3 sur route circulée), chaussures de sécurité, casque, gants, lunettes, protections auditives, masque.",
          "Silice : découpe à l'eau et masque adapté.",
        ],
        reperes: ["Bruit : protections fournies dès 80 dB(A), port obligatoire dès 85 dB(A)"],
      },
      {
        titre: "Habilitations",
        tableau: {
          entetes: ["Habilitation", "Pour quoi faire"],
          lignes: [
            ["CACES R482", "Engins de chantier (pelles, chargeuses, compacteurs)"],
            ["CACES R486 / R489 / R490", "Nacelles / chariots élévateurs / grues de chargement"],
            ["Autorisation de conduite", "Délivrée par l'employeur, en plus du CACES"],
            ["AIPR", "Travaux à proximité des réseaux"],
            [
              "Habilitation électrique",
              "Travaux sur ou près d'installations électriques (B0, H0, BR, BS…)",
            ],
            ["CATEC", "Intervention en espaces confinés d'eau et d'assainissement"],
            ["SST", "Sauveteur secouriste du travail"],
          ],
        },
      },
      {
        titre: "Signalisation temporaire",
        tableau: {
          entetes: ["Élément", "Exemples"],
          lignes: [
            [
              "Panneaux AK (danger temporaire, fond jaune)",
              "AK5 travaux, AK3 chaussée rétrécie, AK14 autres dangers, AK17 feux tricolores",
            ],
            ["Panneaux KC, KD", "Indications temporaires, directions de déviation"],
            [
              "Équipements K",
              "K2 barrière, K5 cônes et balises, K8 panneau de position, K10 piquet mobile d'alternat",
            ],
          ],
        },
        points: [
          "Trois temps : pré-signalisation (annoncer), signalisation de position (protéger), fin de prescription (libérer).",
          "Pose dans le sens de la circulation, du plus loin au plus proche. Dépose dans l'ordre inverse.",
          "Alternat : feux tricolores ou piquets K10. Arrêté de circulation pris par le maire en agglomération.",
          "Maintenir un cheminement piéton sécurisé et un balisage visible la nuit.",
        ],
      },
      {
        titre: "Tranchées et engins",
        points: [
          "Ensevelissement : risque mortel. Blindage obligatoire au-delà de 1,30 m si les parois ne sont pas talutées.",
          "Déblais à au moins 40 cm du bord. Garde-corps ou barrières autour des fouilles, échelle pour descendre.",
          "Engins : personne dans le rayon d'action, signes convenus avec le conducteur.",
          "Lignes électriques aériennes : au moins 3 m sous 50 000 volts, 5 m au-dessus.",
        ],
      },
      {
        titre: "Espaces confinés",
        paragraphes: [
          "Un regard d'assainissement est un espace confiné : manque d'oxygène, H2S toxique, gaz explosifs. Jamais seul, jamais sans mesure.",
        ],
        points: [
          "1. Autorisation et agents formés (CATEC).",
          "2. Mesure de l'atmosphère au détecteur multigaz avant la descente, puis en continu.",
          "3. Ventilation, harnais, trépied, surveillant en surface, moyen d'alerte.",
          "4. Auto-sauveteur à portée de main.",
          "5. Si l'alarme sonne : évacuation immédiate. Personne ne descend chercher une victime sans appareil respiratoire. Appel au 18 ou 112.",
        ],
      },
      {
        titre: "Accidents et coordination",
        points: [
          "Protéger, alerter, secourir. Déclarer rapidement tout accident de service. Analyser aussi les presque-accidents.",
          "Arbre des causes : rechercher toutes les causes, sans chercher de coupable. Quart d'heure sécurité : court échange d'équipe sur un risque.",
          "Plan de prévention : quand une entreprise extérieure intervient sur un site de la collectivité.",
          "Coordonnateur SPS, PGC et PPSPS : quand plusieurs entreprises travaillent sur un même chantier. Permis de feu : pour les travaux par point chaud.",
        ],
      },
    ],
    aRetenir: [
      "Protection collective d'abord, EPI en complément.",
      "Droit de retrait : danger grave et imminent, sans sanction ni retenue si le retrait est justifié.",
      "Espace confiné : mesure, ventilation, jamais seul, pas de sauvetage sans protection.",
      "Après un accident : protéger, alerter, secourir, puis déclarer et analyser.",
    ],
    pieges: [
      "Remplacer des barrières par des gilets haute visibilité « pour gagner du temps » : la protection collective est prioritaire.",
      "Croire que le CACES suffit pour conduire un engin : il faut aussi l'autorisation de conduite.",
      "Descendre chercher un collègue dans un regard sans appareil respiratoire.",
      "Sanctionner soi-même un agent qui refuse ses EPI : on retire l'agent du chantier, on trace et on informe.",
    ],
    quizThemeId: "am-hygiene-securite",
  },
  {
    id: "encadrement",
    partie: "securite-encadrement",
    title: "Encadrement et fonction publique",
    resume:
      "Les missions de l'agent de maîtrise, les droits et obligations du fonctionnaire, l'organisation du travail, le management d'équipe et la communication.",
    duree: "45 minutes",
    objectifs: [
      "Décrire les six missions de l'agent de maîtrise",
      "Citer les droits et obligations du fonctionnaire et les sanctions du premier groupe",
      "Prioriser, planifier et suivre le travail d'une équipe",
      "Gérer un conflit, accueillir un nouvel agent, rendre compte",
    ],
    sections: [
      {
        titre: "Les missions de l'agent de maîtrise",
        paragraphes: [
          "C'est ce qui distingue l'agent de maîtrise de l'adjoint technique : il organise le travail des autres, il manage, il communique et il rend compte.",
        ],
        tableau: {
          entetes: ["Mission", "Exemples concrets"],
          lignes: [
            ["Organiser", "Répartir les tâches, planifier, préparer le matériel et les matériaux"],
            ["Encadrer", "Donner les consignes, accompagner, évaluer, faire respecter les règles"],
            ["Contrôler", "Qualité des travaux, sécurité, respect des délais et des quantités"],
            [
              "Gérer les moyens",
              "Stocks, outillage, véhicules, commandes, suivi des consommations",
            ],
            [
              "Communiquer",
              "Rendre compte à la hiérarchie, informer les usagers, échanger avec les entreprises",
            ],
            ["Participer", "Réaliser lui-même des travaux techniques avec son équipe"],
          ],
        },
      },
      {
        titre: "Droits et obligations du fonctionnaire",
        tableau: {
          entetes: ["Obligations", "Droits"],
          lignes: [
            ["Exercer ses fonctions", "Liberté d'opinion"],
            [
              "Obéissance hiérarchique (sauf ordre manifestement illégal et de nature à compromettre gravement un intérêt public)",
              "Droit syndical et droit de grève",
            ],
            ["Secret et discrétion professionnels", "Droit à la formation"],
            ["Neutralité et laïcité", "Protection fonctionnelle"],
            ["Dignité, impartialité, intégrité, probité", "Rémunération après service fait"],
            ["Réserve dans l'expression", "Congés"],
          ],
        },
        points: [
          "Sanctions disciplinaires : quatre groupes. Le 1er groupe comprend l'avertissement, le blâme et l'exclusion temporaire jusqu'à 3 jours. C'est l'autorité territoriale qui sanctionne, jamais l'encadrant.",
          "Entretien professionnel annuel : conduit par le supérieur hiérarchique direct. Comme agent de maîtrise, vous mènerez celui de vos agents.",
          "Après la réussite au concours et la nomination, l'agent effectue un stage avant sa titularisation.",
        ],
      },
      {
        titre: "Organiser le travail",
        points: [
          "Prioriser : sécurité des personnes, puis obligations réglementaires, puis service aux usagers, puis confort.",
          "Planifier : planning hebdomadaire, en intégrant congés, formations, restrictions médicales, habilitations et météo.",
          "Préparer : demandes d'intervention, bons de travaux, matériaux commandés à temps, véhicules disponibles.",
          "Suivre : tableau de bord (interventions réalisées, délais, consommations), pour rendre compte et justifier les moyens.",
        ],
      },
      {
        titre: "Manager une équipe",
        paragraphes: ["Méthode pour gérer un conflit entre deux agents :"],
        points: [
          "1. Arrêter la situation si elle dégénère, et assurer la sécurité.",
          "2. Recevoir chaque agent séparément et l'écouter, en s'en tenant aux faits.",
          "3. Rappeler la règle et le cadre (respect, consignes, organisation).",
          "4. Réunir les deux agents pour chercher une solution, si c'est possible.",
          "5. Assurer un suivi, tracer les faits, informer la hiérarchie si nécessaire.",
          "Ancien collègue devenu agent : même règle pour tous, fermeté et respect, pas de favoritisme, explication du nouveau rôle.",
          "Briefing du matin : tâches, consignes de sécurité, points d'attention de la journée.",
          "Reconnaître le travail bien fait est un levier de motivation sans coût.",
          "Agent avec restriction médicale : adapter les tâches selon l'avis du médecin, sans le stigmatiser.",
          "Nouvel agent : accueil, présentation de l'équipe, consignes de sécurité, tuteur, point d'étape.",
        ],
      },
      {
        titre: "Communiquer et rendre compte",
        points: [
          "Hiérarchie : informer vite à l'oral, confirmer par écrit (note, mail), proposer des solutions.",
          "Élus : une demande directe d'un élu se traite avec courtoisie, mais passe par la hiérarchie, qui arbitre.",
          "Usagers : écouter, informer, expliquer les contraintes, orienter vers le bon interlocuteur ; en cas d'agressivité, garder son calme et protéger son équipe.",
          "Entreprises : contrôler l'exécution, noter les écarts, les signaler au responsable du marché.",
          "Réunion de chantier : un compte rendu avec date, présents, avancement, problèmes, décisions, actions (qui, quoi, quand).",
        ],
      },
    ],
    aRetenir: [
      "Organiser, encadrer, contrôler, gérer les moyens, communiquer, participer.",
      "L'encadrant constate, recadre et rend compte ; la sanction relève de l'autorité territoriale.",
      "Prioriser : sécurité, réglementaire, usagers, confort.",
      "Une demande d'un élu passe par la hiérarchie.",
    ],
    pieges: [
      "Proposer de sanctionner soi-même un agent.",
      "Contourner la voie hiérarchique pour satisfaire un élu.",
      "Favoriser d'anciens collègues ou, à l'inverse, les mettre à l'écart.",
      "Oublier de tracer les faits et d'informer la hiérarchie.",
    ],
    quizThemeId: "am-encadrement",
  },
  {
    id: "oral-expose",
    partie: "oral",
    title: "L'oral : préparer son exposé et soigner sa posture",
    resume:
      "Le déroulement de l'entretien, ce que le jury évalue, le plan type de l'exposé en 5 temps, la posture, la gestion du stress et le jour J.",
    duree: "50 minutes",
    objectifs: [
      "Comprendre le déroulement de l'oral et les critères du jury",
      "Construire un exposé de 5 minutes en 5 temps",
      "Répondre en 3 temps et gérer les moments difficiles",
      "Préparer la veille et le jour de l'épreuve",
    ],
    sections: [
      {
        titre: "Le déroulement de l'oral",
        paragraphes: [
          "L'oral d'admission est un entretien avec le jury qui commence par votre exposé sur votre expérience professionnelle. Il permet de vérifier que vous avez la carrure d'un encadrant de proximité : motivation, connaissances, sens des responsabilités et capacité à communiquer.",
          "Selon les rapports de jury des sessions 2023 et 2025 du concours interne et du troisième concours, l'entretien dure 15 minutes, dont 5 minutes au plus d'exposé, avec un coefficient 4. Vérifiez toujours ces données dans l'arrêté d'ouverture et la note de cadrage du centre de gestion.",
        ],
        tableau: {
          entetes: ["Temps", "Ce qui se passe", "Votre objectif"],
          lignes: [
            [
              "Accueil",
              "Le jury vous invite à entrer et à vous asseoir, vérifie votre identité",
              "Première impression : calme, sourire, bonjour",
            ],
            [
              "Exposé",
              "Vous présentez votre parcours et votre expérience, sans être interrompu",
              "Montrer un parcours cohérent et votre motivation pour encadrer",
            ],
            [
              "Échange",
              "Le jury pose des questions : sur l'exposé, techniques, de management, sur la fonction publique, de motivation",
              "Répondre de façon structurée, concrète et honnête",
            ],
            [
              "Fin",
              "Le président remercie et met fin à l'entretien",
              "Remercier et sortir calmement, quelle que soit votre impression",
            ],
          ],
        },
      },
      {
        titre: "Ce que le jury évalue",
        tableau: {
          entetes: ["Critère", "Ce que le jury cherche à savoir", "Comment le montrer"],
          lignes: [
            [
              "Motivation et projet",
              "Pourquoi voulez-vous encadrer ? Le projet est-il réfléchi ?",
              "Des raisons concrètes, liées à votre expérience",
            ],
            [
              "Expérience",
              "Qu'avez-vous réellement fait ? Qu'en avez-vous retiré ?",
              "Des exemples précis de chantiers et de situations",
            ],
            [
              "Connaissances techniques",
              "Maîtrisez-vous les bases de la spécialité BTP/VRD ?",
              "Vocabulaire juste, réflexes de sécurité",
            ],
            [
              "Aptitude à encadrer",
              "Saurez-vous organiser, décider, gérer une équipe ?",
              "Réponses structurées aux mises en situation",
            ],
            [
              "Environnement territorial",
              "Connaissez-vous votre collectivité et la fonction publique ?",
              "Organisation, élus, statut, obligations",
            ],
            [
              "Communication",
              "Vous exprimez-vous clairement ? Restez-vous calme ?",
              "Phrases courtes, regard, écoute, honnêteté",
            ],
          ],
        },
        paragraphes: [
          "Le jury ne cherche pas quelqu'un qui sait tout. Il cherche une personne fiable, qui connaît ses limites, qui place la sécurité en premier, qui sait rendre compte et qui a envie de faire progresser une équipe. Répondre « je ne sais pas, mais je chercherais auprès de… » vaut mieux qu'une réponse inventée.",
        ],
      },
      {
        titre: "Le plan de l'exposé en 5 temps",
        paragraphes: [
          "L'exposé est le seul moment de l'oral que vous maîtrisez totalement. Il doit être préparé, structuré, chronométré et appris dans son plan plutôt que mot à mot. C'est aussi lui qui oriente les premières questions du jury : chaque exemple cité est une porte que vous ouvrez.",
        ],
        tableau: {
          entetes: ["Partie", "Contenu", "Durée indicative"],
          lignes: [
            [
              "1. Accroche et présentation",
              "Bonjour, nom, poste actuel, collectivité, service",
              "20 secondes",
            ],
            [
              "2. Parcours",
              "Ce que vous faisiez avant, votre entrée dans la fonction publique, les étapes (contractuel, stagiaire, titularisation)",
              "1 minute",
            ],
            [
              "3. Missions actuelles",
              "Votre service, vos activités principales, 1 ou 2 exemples précis de chantiers",
              "1 min 30",
            ],
            [
              "4. Compétences et responsabilités",
              "Ce que vous savez faire, ce que vous avez appris, les situations où vous avez déjà guidé ou organisé, les formations",
              "1 minute",
            ],
            [
              "5. Projet",
              "Pourquoi agent de maîtrise, ce que vous apporterez, comment vous voyez ce rôle",
              "1 minute",
            ],
          ],
        },
        points: [
          "Respecter le temps : ni trop court (il paraît vide), ni coupé par le jury. Visez 30 secondes de moins que le maximum.",
          "Parler de vous et de votre travail, pas de la collectivité en général, avec des exemples concrets : un chantier, une difficulté, ce que vous avez fait, le résultat.",
          "Montrer une progression : ce que vous avez appris, les responsabilités prises, les formations suivies.",
          "Finir sur votre projet d'agent de maîtrise : c'est la dernière impression du jury avant les questions.",
          "Ne rien inventer : le jury creusera tout ce que vous dites. Ne pas lire : regardez le jury.",
        ],
      },
      {
        titre: "Exemple de trame à personnaliser",
        paragraphes: [
          "« Madame, Messieurs les membres du jury, bonjour. Je m'appelle [prénom nom]. Je suis [grade] au sein de [collectivité], au service [assainissement / voirie / bâtiments], et je me présente aujourd'hui au concours interne d'agent de maîtrise, spécialité bâtiment, travaux publics, voirie et réseaux divers. »",
          "« Avant de rejoindre la fonction publique, j'ai [parcours : métiers, secteurs, compétences acquises]. Cette expérience m'a appris [la rigueur, le travail en équipe, le contact avec le public]. J'ai intégré [collectivité] en [mois année], d'abord comme contractuel, puis j'ai été nommé stagiaire. »",
          "« Au quotidien, mes missions sont [exemples : entretien et curage des réseaux, interventions sur les branchements et les regards, contrôles de conformité, appui aux chantiers de voirie]. Je souhaite vous présenter un exemple concret : [contexte, difficulté, ce que j'ai fait, résultat]. Cette intervention m'a montré l'importance de [la préparation, la sécurité, la communication avec les usagers]. »",
          "« Au fil des années, j'ai développé des compétences en [lecture de plans, sécurité de chantier, utilisation de tel matériel] et suivi des formations sur [AIPR, espaces confinés, SST, CACES…]. Il m'est arrivé de [guider un nouvel agent, organiser une intervention, faire le lien avec une entreprise], et c'est là que j'ai pris goût à l'organisation et à l'accompagnement d'une équipe. »",
          "« Comme agent de maîtrise, je souhaite organiser le travail de l'équipe, veiller à la sécurité de chacun, contrôler la qualité des interventions et faire le lien avec ma hiérarchie et les usagers. Je sais que ce rôle demande de l'écoute, de l'équité et de la fermeté, et je suis prêt à continuer à me former. Je vous remercie de votre attention. »",
        ],
        points: [
          "Remplacez tout ce qui est entre crochets par vos vraies informations. Gardez ce qui vous ressemble et supprimez le reste : un exposé sincère vaut mieux qu'un texte parfait appris par cœur.",
        ],
      },
      {
        titre: "Préparer les questions sur l'exposé",
        paragraphes: [
          "Pour chaque phrase de l'exposé, demandez-vous : « quelle question le jury peut-il me poser là-dessus ? ». Préparez une réponse courte et concrète pour chacune.",
        ],
        tableau: {
          entetes: ["Si vous dites…", "Le jury peut demander…"],
          lignes: [
            [
              "« J'ai participé à un chantier de branchement »",
              "Comment l'avez-vous préparé ? Quelles démarches avant de creuser ? Quels risques ?",
            ],
            [
              "« J'ai suivi la formation AIPR »",
              "À quoi sert-elle ? Qu'est-ce qu'une DICT ? Qu'est-ce qu'une classe de précision ?",
            ],
            [
              "« J'ai guidé un nouvel agent »",
              "Comment vous y êtes-vous pris ? Qu'est-ce qui était difficile ?",
            ],
            [
              "« Je veux encadrer »",
              "Avez-vous déjà encadré ? Comment gérerez-vous d'anciens collègues ?",
            ],
            [
              "« Je travaille en assainissement »",
              "Quels sont les risques des espaces confinés ? Différence entre unitaire et séparatif ?",
            ],
          ],
        },
      },
      {
        titre: "Posture et communication",
        points: [
          "Entrée : saluer, attendre qu'on vous invite à vous asseoir, poser vos affaires calmement.",
          "Assise : dos droit, mains posées sur la table ou les genoux, pas de stylo qu'on fait tourner.",
          "Regard : regardez tous les membres du jury à tour de rôle, surtout celui qui pose la question.",
          "Voix : un peu plus lentement et un peu plus fort que d'habitude, avec des pauses.",
          "Tenue : propre, sobre et confortable, comme pour un rendez-vous professionnel.",
        ],
        paragraphes: [
          "La réponse en 3 temps : 1) réponse directe en une phrase (« Oui, il faut une DICT. ») ; 2) explication ou exemple (« C'est l'exécutant qui la fait, avant de commencer. Dans mon service, par exemple… ») ; 3) conclusion ou ouverture (« C'est une étape indispensable pour la sécurité de l'équipe. »).",
        ],
        tableau: {
          entetes: ["À dire", "À éviter"],
          lignes: [
            ["« Ma priorité serait la sécurité de… »", "« Je ferais comme on fait d'habitude. »"],
            ["« J'en informerais ma hiérarchie. »", "« Je réglerais ça tout seul. »"],
            [
              "« Je proposerais à mon responsable… »",
              "« Je déciderais de… » (pour ce qui relève des élus ou de la direction)",
            ],
            ["« Dans mon service, par exemple… »", "« On fait comme ça, c'est tout. »"],
            ["« Je ne sais pas, mais je chercherais… »", "Une réponse inventée"],
            [
              "« Je rappellerais la règle à l'agent. »",
              "« Je le sanctionnerais. » (ce n'est pas votre rôle)",
            ],
          ],
        },
      },
      {
        titre: "Gérer le stress et les difficultés",
        tableau: {
          entetes: ["Situation", "Ce que vous pouvez faire ou dire"],
          lignes: [
            [
              "Vous n'avez pas compris la question",
              "« Pourriez-vous reformuler la question, s'il vous plaît ? »",
            ],
            [
              "Vous avez besoin de réfléchir",
              "« Je prends quelques secondes pour réfléchir. » Respirez et structurez votre réponse",
            ],
            [
              "Vous ne connaissez pas la réponse",
              "« Je ne connais pas la réponse précise. Dans ma pratique, je me renseignerais auprès de… »",
            ],
            [
              "Vous vous êtes trompé",
              "« Je me permets de corriger ce que j'ai dit tout à l'heure… » : c'est très bien perçu",
            ],
            [
              "Le jury vous contredit",
              "Ne vous braquez pas : « Je comprends votre point de vue. Dans mon expérience… » Restez poli, même si vous maintenez votre position",
            ],
            ["Trou de mémoire", "Pause, respiration, revenez au plan de votre réponse en 3 temps"],
            [
              "Le jury semble froid",
              "C'est souvent volontaire pour tester votre calme : continuez normalement",
            ],
          ],
        },
      },
      {
        titre: "Le jour de l'oral",
        points: [
          "La veille : relisez votre fiche d'exposé et votre fiche « ma collectivité », pas de nouvelle notion. Préparez convocation, pièce d'identité, tenue, eau. Faites une dernière fois l'exposé à voix haute, puis couchez-vous tôt.",
          "Avant d'entrer : arrivez en avance, respirez lentement (inspirez 4 secondes, soufflez 6 secondes), répétez la première phrase de l'exposé, éteignez votre téléphone.",
          "Pendant : bonjour et sourire, regard sur tout le jury, 2 secondes pour réfléchir avant de répondre, réponses en 3 temps. À la fin : « Je vous remercie », puis sortez calmement.",
          "Après : notez les questions posées dès la sortie. Ne refaites pas l'oral dans votre tête : votre impression est rarement le reflet exact de la note.",
        ],
      },
    ],
    aRetenir: [
      "Exposé en 5 temps : présentation, parcours, missions, compétences, projet.",
      "Réponse en 3 temps : réponse directe, explication ou exemple, conclusion.",
      "Reconnaître ses limites vaut mieux qu'inventer.",
      "Finir l'exposé sur son projet d'agent de maîtrise.",
    ],
    pieges: [
      "Réciter un CV avec des dates, sans dire ce que vous avez fait ou appris.",
      "Rester vague (« je fais de l'entretien ») au lieu de décrire des gestes, du matériel, un réflexe de sécurité.",
      "Critiquer sa hiérarchie, ses collègues ou un ancien employeur.",
      "Dire « on » tout le temps : le jury veut savoir ce que vous avez fait.",
      "Dépasser le temps et être coupé par le président.",
    ],
  },
  {
    id: "oral-situations",
    partie: "oral",
    title: "L'oral : mises en situation, questions techniques et motivation",
    resume:
      "Les 5 réflexes face à une mise en situation, des réponses types aux situations les plus fréquentes, aux questions techniques et aux questions pièges.",
    duree: "55 minutes",
    objectifs: [
      "Appliquer les 5 réflexes à toute mise en situation",
      "Répondre aux situations fréquentes : EPI refusés, conflit, alcool, usager agressif, demande d'un élu",
      "Répondre en 1 minute aux grandes questions techniques",
      "Aborder les questions de motivation et les questions pièges",
    ],
    sections: [
      {
        titre: "Les 5 réflexes en situation",
        paragraphes: [
          "C'est la partie la plus décisive de l'oral. Le jury vous place dans une situation d'encadrement et observe votre logique. Il relance souvent (« Et si cela ne suffit pas ? ») : c'est normal, il veut voir jusqu'où va votre raisonnement.",
        ],
        tableau: {
          entetes: ["Réflexe", "Je dis…"],
          lignes: [
            ["Je sécurise", "« Ma priorité est la sécurité de l'équipe et des usagers. »"],
            ["Je comprends", "« J'écoute, je m'en tiens aux faits. »"],
            ["J'agis dans mon rôle", "« Je rappelle la règle, j'organise, je propose. »"],
            ["Je rends compte", "« J'informe ma hiérarchie, par écrit si nécessaire. »"],
            ["Je fais le suivi", "« Je vérifie que c'est réglé, je trace. »"],
          ],
        },
      },
      {
        titre: "Les mises en situation les plus fréquentes",
        tableau: {
          entetes: ["Situation", "Éléments d'une bonne réponse"],
          lignes: [
            [
              "Un agent refuse de porter ses EPI",
              "Il arrête son activité tant qu'il n'est pas équipé. Je cherche la cause (EPI inadapté, abîmé, inconfortable) et je règle le problème matériel. S'il s'agit d'un refus : je rappelle que le port est obligatoire et que ma responsabilité est engagée ; si le refus persiste, j'écarte l'agent du chantier, je trace et j'informe la hiérarchie, qui décide des suites. Rappel collectif avec l'assistant de prévention",
            ],
            [
              "Vous encadrez d'anciens collègues",
              "J'explique mon rôle dès le début en réunion d'équipe, mêmes règles pour tous, sans favoritisme, je m'appuie sur leur expérience, je recadre si nécessaire. La légitimité vient de l'équité et de la cohérence",
            ],
            [
              "Deux agents se disputent",
              "Je fais cesser la dispute et je sécurise. Je reçois chacun séparément, en m'en tenant aux faits. Je rappelle le cadre, puis je les réunis pour trouver une solution. Je trace et j'informe la hiérarchie si c'est grave ou répété",
            ],
            [
              "Un agent semble sous l'emprise de l'alcool",
              "Sécurité d'abord : il ne travaille pas et ne conduit pas. Je le retire de son poste, je ne le laisse ni seul ni repartir en voiture, j'appelle les secours si son état est inquiétant. J'informe la hiérarchie, j'applique le règlement intérieur, je trace sans jugement",
            ],
            [
              "Un usager agressif interpelle l'équipe",
              "Je m'interpose calmement pour protéger l'équipe, j'écoute, je reformule, j'explique les travaux et leur durée. S'il devient menaçant, je mets l'équipe à l'abri et j'appelle la police. J'informe la hiérarchie et je trace l'incident",
            ],
            [
              "Un élu vous demande d'intervenir directement",
              "Courtois, je note la demande et j'explique que j'en informe mon responsable, qui fixe les priorités. Je transmets aussitôt avec une estimation des moyens. Je ne refuse pas sèchement, mais je ne contourne pas la voie hiérarchique",
            ],
            [
              "Vous avez commis une erreur",
              "Je la reconnais immédiatement, je mesure les conséquences, je sécurise, j'en informe la hiérarchie avec une proposition de correction, j'en tire une leçon",
            ],
            [
              "Un agent arrive régulièrement en retard",
              "Entretien pour comprendre, sans jugement. Rappel des obligations et des conséquences pour l'équipe, recherche d'une solution si une cause est identifiée, traçabilité, information de la hiérarchie. Une éventuelle sanction relève de l'autorité territoriale",
            ],
            [
              "Deux urgences en même temps",
              "Priorité à la sécurité des personnes, puis aux obligations réglementaires, puis au service aux usagers. Je sécurise la situation la plus dangereuse (balisage), j'organise l'équipe, j'informe la hiérarchie, je demande du renfort si nécessaire",
            ],
            [
              "Une consigne que vous jugez inadaptée",
              "J'exprime mon point de vue en privé, avec des arguments et une proposition. Si la décision est maintenue, je l'applique loyalement, sauf ordre manifestement illégal et de nature à compromettre gravement un intérêt public",
            ],
            [
              "Un agent signale du harcèlement ou des propos discriminatoires",
              "Je prends le signalement au sérieux, j'écoute et je rassure, je fais cesser les faits que je constate, j'informe sans attendre la hiérarchie, qui saisira les dispositifs prévus. Je ne mène pas l'enquête seul et je respecte la discrétion",
            ],
            [
              "Disparition de matériel",
              "Je vérifie les faits (inventaire, prêt, oubli), j'informe la hiérarchie par écrit avec la liste, je n'accuse pas sans preuve, puis je propose un registre de sortie et un inventaire régulier",
            ],
          ],
        },
      },
      {
        titre: "Les questions techniques à connaître",
        paragraphes: [
          "Réponses types à dire en 30 secondes à 1 minute. Apprenez l'idée, pas le texte, et ajoutez dès que possible un exemple de votre service.",
        ],
        tableau: {
          entetes: ["Question", "Réponse en bref"],
          lignes: [
            [
              "Qu'est-ce qu'une DICT ?",
              "Déclaration d'intention de commencement de travaux, faite par l'exécutant avant de travailler près de réseaux. Elle complète la DT du maître d'ouvrage. Les exploitants répondent par un récépissé. En urgence : ATU",
            ],
            [
              "Unitaire ou séparatif ?",
              "Unitaire : eaux usées et pluviales dans une seule canalisation, risque de débordement. Séparatif : deux canalisations, qui protège la station d'épuration et le milieu naturel",
            ],
            [
              "Avant de descendre dans un regard ?",
              "Espace confiné : agents formés (CATEC), mesure de l'atmosphère, ventilation, harnais et trépied, surveillant en surface, auto-sauveteur. Jamais seul",
            ],
            [
              "Qui prend un arrêté de circulation ?",
              "En agglomération, le maire. L'agent de maîtrise prépare la demande (dates, lieu, mesures) mais ne signe pas",
            ],
            [
              "Quand blinder une tranchée ?",
              "Au-delà de 1,30 m si les parois ne sont pas talutées ; déblais à au moins 40 cm du bord",
            ],
            [
              "Un CACES suffit-il pour conduire un engin ?",
              "Non : il faut aussi une autorisation de conduite délivrée par l'employeur",
            ],
            [
              "Droit de retrait ?",
              "Danger grave et imminent pour la vie ou la santé ; l'agent alerte sa hiérarchie et ne crée pas de nouveau danger",
            ],
            [
              "Avant de percer un mur dans une école ancienne ?",
              "Repérage amiante (bâtiments d'avant juillet 1997) et plomb dans les peintures",
            ],
            [
              "Comment contrôler une entreprise sur un chantier ?",
              "Conformité à la commande et aux règles de l'art, sécurité (signalisation, blindage, EPI), écarts notés avec photos et dates, signalés au responsable du marché ; arrêt de la situation en cas de danger grave",
            ],
          ],
        },
      },
      {
        titre: "Motivation et parcours",
        tableau: {
          entetes: ["Question", "Comment répondre"],
          lignes: [
            [
              "Pourquoi voulez-vous devenir agent de maîtrise ?",
              "Une situation vécue où vous avez aimé organiser ou guider, votre connaissance du terrain, ce que vous voulez apporter (sécurité, organisation, qualité), la cohérence avec votre parcours",
            ],
            [
              "Quelles sont vos qualités pour encadrer ?",
              "2 ou 3 qualités, chacune avec un exemple : la rigueur, l'écoute, le sens de l'organisation",
            ],
            [
              "Quel est votre principal défaut ?",
              "Un vrai défaut, non rédhibitoire, et comment vous le corrigez (par exemple : vouloir tout faire soi-même, d'où l'apprentissage de la délégation). Évitez les faux défauts",
            ],
            [
              "Avez-vous déjà encadré ?",
              "Honnêteté. Sinon, citez des situations proches : accueil d'un nouvel agent, organisation d'une intervention, lien avec une entreprise, remplacement du chef d'équipe",
            ],
            [
              "Comment comptez-vous vous former ?",
              "Formations du CNFPT, échanges avec des agents de maîtrise expérimentés, entretien professionnel, veille réglementaire",
            ],
          ],
        },
      },
      {
        titre: "Les questions pièges",
        tableau: {
          entetes: ["Question", "Comment répondre"],
          lignes: [
            [
              "Vous avez peu d'ancienneté, pourquoi vous ?",
              "Votre expérience antérieure, les responsabilités prises rapidement, votre capacité à vous appuyer sur la hiérarchie et les collègues",
            ],
            [
              "Que pensez-vous de votre chef ?",
              "Ne critiquez jamais. Parlez de ce que vous avez appris à son contact. Les désaccords s'expriment en privé, en restant loyal",
            ],
            [
              "Et si votre hiérarchie vous demandait quelque chose d'illégal ?",
              "J'exprime mon désaccord, je demande une confirmation écrite. L'obéissance a une limite : l'ordre manifestement illégal et de nature à compromettre gravement un intérêt public. Je peux solliciter le référent déontologue",
            ],
            [
              "Et si vous échouez aujourd'hui ?",
              "Comprendre ce qui a manqué, continuer à se former, se représenter. Cette préparation a déjà apporté beaucoup au travail quotidien",
            ],
            [
              "Pourquoi pas directement le concours de technicien ?",
              "Agent de maîtrise correspond à ce que vous voulez faire aujourd'hui : encadrer une équipe sur le terrain. Étape cohérente, sans exclure d'évoluer plus tard",
            ],
            [
              "Seriez-vous prêt à changer de collectivité ?",
              "Répondez sincèrement. Montrez que vous connaissez le fonctionnement (liste d'aptitude, recherche de poste)",
            ],
            [
              "Comment vous faire respecter par une équipe ?",
              "Par l'exemple (sécurité, horaires), par l'équité, par la compétence, et par l'écoute sans renoncer à la fermeté",
            ],
          ],
        },
      },
      {
        titre: "Simulation de jury à faire seul ou avec un proche",
        points: [
          "Présentez-vous en quelques minutes.",
          "Vous avez parlé d'un chantier dans votre exposé : comment l'avez-vous préparé ?",
          "Qu'est-ce qu'une DT et une DICT ? Qui les fait ?",
          "Vous devez ouvrir une tranchée de 1,50 m sur un trottoir devant un collège : quelles mesures prenez-vous ?",
          "Un agent de votre équipe n'a pas d'AIPR : peut-il participer au chantier ?",
          "Un adjoint au maire vous demande de passer en priorité le chantier de sa rue : que répondez-vous ?",
          "Quelles sont les obligations du fonctionnaire ?",
          "Pourquoi souhaitez-vous devenir agent de maîtrise ?",
          "Avez-vous une question à poser au jury ? (Remerciez, ou posez une question simple sur le métier ; évitez les questions sur votre note.)",
        ],
        paragraphes: [
          "Chronométrez-vous, enregistrez-vous, puis notez-vous sur 4 : exposé, connaissances techniques, encadrement, environnement territorial, communication. En dessous de 3 sur un critère, retravaillez le cours correspondant.",
        ],
      },
    ],
    aRetenir: [
      "Je sécurise, je comprends, j'agis dans mon rôle, je rends compte, je fais le suivi.",
      "Le jury relance : c'est normal, il veut voir votre raisonnement.",
      "Sanctionner, décider à la place des élus ou régler seul : ce n'est pas le rôle de l'encadrant.",
      "Sincérité, exemples concrets et humilité.",
    ],
    pieges: [
      "Une motivation uniquement financière ou « pour ne plus être sur le terrain ».",
      "La critique de collègues, de la hiérarchie ou des élus.",
      "Les réponses toutes faites, sans aucun exemple personnel.",
      "Le manque d'humilité (« je sais déjà tout faire ») ou l'excès de doute (« je ne suis pas sûr d'y arriver »).",
    ],
  },
  {
    id: "environnement-territorial",
    partie: "oral",
    title: "L'environnement territorial : collectivités, budget et fonction publique",
    resume:
      "Qui décide, qui exécute, d'où vient l'argent : les notions de collectivités, de budget, de commande publique et de statut à relier à votre travail.",
    duree: "45 minutes",
    objectifs: [
      "Distinguer élus et agents, et situer les compétences de chaque collectivité",
      "Classer une dépense en fonctionnement ou en investissement",
      "Expliquer en une phrase la commande publique et le statut",
      "Préparer sa fiche « ma collectivité »",
    ],
    sections: [
      {
        titre: "Les collectivités territoriales",
        paragraphes: [
          "Le jury attend d'un futur agent de maîtrise qu'il comprenne dans quel cadre il travaille : qui décide, qui exécute, comment fonctionne le statut, d'où vient l'argent. Il ne s'agit pas d'un examen de droit : quelques notions claires suffisent, à condition de les relier à votre travail.",
        ],
        tableau: {
          entetes: ["Collectivité", "Assemblée et exécutif", "Compétences principales (exemples)"],
          lignes: [
            [
              "Commune",
              "Conseil municipal, maire",
              "Voirie communale, écoles primaires, état civil, urbanisme, police municipale",
            ],
            [
              "Intercommunalité (EPCI)",
              "Conseil communautaire, président",
              "Développement économique, déchets, souvent eau et assainissement, aménagement",
            ],
            [
              "Département",
              "Conseil départemental, président",
              "Action sociale, routes départementales, collèges",
            ],
            [
              "Région",
              "Conseil régional, président",
              "Lycées, transports régionaux, développement économique, formation professionnelle",
            ],
          ],
        },
        points: [
          "Les élus sont élus pour 6 ans. Ils décident (délibérations, budget). Les agents préparent et exécutent leurs décisions.",
          "Le maire est l'exécutif de la commune : il exécute les délibérations, dirige les services et détient des pouvoirs de police (sécurité, salubrité, tranquillité publiques, circulation et stationnement). Il agit aussi comme agent de l'État (état civil).",
          "Le directeur général des services (DGS) dirige l'administration. Le directeur des services techniques (DST) dirige les services techniques.",
        ],
      },
      {
        titre: "Le budget en bref",
        tableau: {
          entetes: ["Section", "Contenu", "Exemples en BTP/VRD"],
          lignes: [
            [
              "Fonctionnement",
              "Dépenses courantes qui reviennent chaque année",
              "Salaires, carburant, petites fournitures, entretien courant",
            ],
            [
              "Investissement",
              "Dépenses qui enrichissent durablement le patrimoine",
              "Réfection complète d'une rue, achat d'un camion, construction d'un local",
            ],
          ],
        },
        points: [
          "Le budget est voté chaque année par l'assemblée délibérante (le conseil municipal pour une commune). Il doit être équilibré et respecter des principes : annualité, unité, universalité, spécialité, sincérité.",
          "Certains services comme l'eau et l'assainissement ont souvent un budget annexe, financé principalement par la redevance payée par les usagers.",
          "Pourquoi c'est utile : vous suivrez des consommations, préparerez des demandes de matériel, comparerez des devis. Savoir si une dépense relève du fonctionnement ou de l'investissement montre que vous comprenez le cadre.",
        ],
      },
      {
        titre: "La commande publique en bref",
        points: [
          "Une collectivité ne peut pas acheter librement : elle respecte les principes de la commande publique (liberté d'accès, égalité de traitement des candidats, transparence des procédures).",
          "Selon le montant, l'achat se fait sans publicité ni mise en concurrence en dessous d'un seuil, ou par une procédure adaptée ou formalisée au-dessus. Les seuils évoluent : vérifiez-les dans les règles de votre collectivité.",
          "Beaucoup de collectivités utilisent des marchés à bons de commande : les prix sont fixés à l'avance, on commande au fur et à mesure.",
          "Rôle de l'agent de maîtrise : exprimer le besoin précisément, contrôler la livraison et la bonne exécution, signaler les écarts. Il ne choisit pas seul un fournisseur hors des règles.",
        ],
      },
      {
        titre: "La fonction publique territoriale",
        tableau: {
          entetes: ["Notion", "Définition"],
          lignes: [
            ["Trois versants", "Fonction publique de l'État, territoriale et hospitalière"],
            [
              "Catégories",
              "A (conception, direction), B (application, encadrement intermédiaire), C (exécution et encadrement de proximité)",
            ],
            [
              "Cadre d'emplois",
              "Ensemble de fonctionnaires soumis au même statut particulier (ex. : agents de maîtrise territoriaux)",
            ],
            [
              "Grade",
              "Titre qui donne vocation à occuper certains emplois (agent de maîtrise, agent de maîtrise principal)",
            ],
            ["Échelon", "Niveau dans le grade, qui détermine la rémunération"],
            [
              "Concours",
              "Mode normal d'accès. La réussite donne une inscription sur une liste d'aptitude, puis il faut être recruté par une collectivité",
            ],
            [
              "Stage et titularisation",
              "Après la nomination, une période de stage précède la titularisation",
            ],
            [
              "Avancement",
              "D'échelon (ancienneté), de grade (ex. : vers agent de maîtrise principal), promotion interne vers un autre cadre d'emplois",
            ],
            [
              "CNFPT",
              "Centre national de la fonction publique territoriale : formation des agents",
            ],
            [
              "Centre de gestion (CDG)",
              "Organise de nombreux concours, gère certaines questions de carrière pour les collectivités affiliées",
            ],
          ],
        },
      },
      {
        titre: "Droits, obligations et instances",
        points: [
          "Obligations : exercer ses fonctions, obéissance hiérarchique (sauf ordre manifestement illégal et de nature à compromettre gravement un intérêt public), secret et discrétion professionnels, neutralité et laïcité, dignité, impartialité, intégrité, probité, réserve.",
          "Droits : liberté d'opinion, droit syndical et droit de grève, droit à la formation, protection fonctionnelle, rémunération après service fait, congés.",
          "Comité social territorial (CST) : instance consultée sur l'organisation des services, avec une formation spécialisée en santé, sécurité et conditions de travail dans les collectivités qui en ont une.",
          "Commission administrative paritaire (CAP) : consultée sur certaines décisions individuelles ; elle siège en conseil de discipline pour les sanctions les plus lourdes.",
          "Sanctions : quatre groupes, prononcées par l'autorité territoriale. Le 1er groupe : avertissement, blâme, exclusion temporaire jusqu'à 3 jours.",
          "Entretien professionnel annuel : mené par le supérieur hiérarchique direct ; il fait le bilan de l'année et fixe les objectifs. Formation : formation d'intégration après la nomination, puis formations de professionnalisation.",
        ],
      },
      {
        titre: "Les enjeux actuels du métier",
        points: [
          "Transition écologique : gestion des eaux pluviales à la source (noues, revêtements drainants, désimperméabilisation), réemploi des déblais, recyclage des enrobés, réduction des consommations d'énergie des bâtiments.",
          "Zéro pesticide : les collectivités n'utilisent plus de produits phytosanitaires chimiques sur la plupart des espaces publics, ce qui change les méthodes d'entretien.",
          "Accessibilité : mise en accessibilité de la voirie (PAVE) et des établissements recevant du public.",
          "Sécurité et prévention : baisse des accidents, prévention de l'usure professionnelle, maintien dans l'emploi.",
          "Moyens contraints : faire mieux avec des budgets serrés, prioriser, mutualiser le matériel.",
          "Relation aux usagers : information sur les chantiers, réactivité, qualité du service rendu.",
        ],
      },
      {
        titre: "À préparer avant l'oral : la fiche « ma collectivité »",
        points: [
          "Le nombre d'habitants, le nom du maire ou du président, l'intercommunalité à laquelle elle appartient.",
          "L'organigramme des services techniques : votre chef, son chef, le DST ; le nombre d'agents de votre service.",
          "Les grands chantiers récents ou en cours.",
          "Les compétences exercées en eau, assainissement et voirie.",
          "Un projet de la collectivité qui vous intéresse.",
        ],
      },
    ],
    aRetenir: [
      "Les élus décident, les agents préparent et exécutent.",
      "Fonctionnement : dépenses courantes. Investissement : dépenses durables.",
      "Le maire détient la police de la circulation et prend les arrêtés en agglomération.",
      "Les sanctions sont prononcées par l'autorité territoriale.",
    ],
    pieges: [
      "Confondre élu et agent, ou attribuer à l'agent de maîtrise une décision qui relève des élus ou de la direction.",
      "Classer un camion benne (investissement) et son carburant (fonctionnement) dans la même section.",
      "Ne pas connaître sa propre collectivité : population, élus, intercommunalité.",
      "Citer des seuils de marchés publics de mémoire : ils évoluent.",
    ],
    quizThemeId: "am-environnement",
  },
];

/** Cours rattachés à la spécialité bâtiment, travaux publics, voirie et réseaux divers. */
const COURS_BTP_VRD = new Set([
  "batiment",
  "terrassement",
  "voirie",
  "reseaux",
  "calculs",
  "annales",
]);

/** Tous les cours : tronc commun, spécialité BTP / VRD et autres spécialités. */
export const coursAgentMaitrise: CoursAM[] = [
  ...coursBase.map((c): CoursAM => ({
    ...c,
    specialite: c.specialite ?? (COURS_BTP_VRD.has(c.id) ? "btp-vrd" : "commun"),
  })),
  ...coursSpecialites,
  ...coursAtsem,
];

export function getCoursAM(id: string | undefined): CoursAM | undefined {
  return coursAgentMaitrise.find((c) => c.id === id);
}

export function coursAMDeLaPartie(partie: PartieCoursAMId): CoursAM[] {
  return coursAgentMaitrise.filter((c) => c.partie === partie);
}

/** Cours d'une spécialité donnée, ou du tronc commun avec « commun ». */
export function coursDeSpecialite(specialite: SpecialiteId | "commun" | "atsem"): CoursAM[] {
  return coursAgentMaitrise.filter((c) => c.specialite === specialite);
}

/** Cours du tronc commun, d'une partie donnée (écrit, sécurité et encadrement, oral). */
export function coursCommunsDeLaPartie(partie: PartieCoursAMId): CoursAM[] {
  return coursAgentMaitrise.filter((c) => c.specialite === "commun" && c.partie === partie);
}
