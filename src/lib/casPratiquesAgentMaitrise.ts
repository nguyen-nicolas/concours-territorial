import type { SpecialiteId } from "./specialitesAgentMaitrise";

/**
 * Mini-cas pratiques du concours d'agent de maîtrise territorial, un par spécialité.
 * Ils sont écrits par Prépa Territoriale dans l'esprit des annales officielles (dossier, questions
 * notées, corrigé type) : ce ne sont pas des sujets officiels. Les valeurs réglementaires sont des
 * repères de préparation.
 */

export interface DocumentCas {
  titre: string;
  paragraphes?: string[];
  points?: string[];
  tableau?: { entetes: string[]; lignes: string[][] };
}

export interface QuestionCas {
  numero: number;
  intitule: string;
  points: number;
}

export interface AttenduCas {
  texte: string;
  points: number;
}

export interface CorrigeCas {
  numero: number;
  attendus: AttenduCas[];
  calculs?: string[];
}

export interface CasPratique {
  id: string;
  specialite: SpecialiteId | "atsem";
  titre: string;
  resume: string;
  contexte: string[];
  documents: DocumentCas[];
  questions: QuestionCas[];
  corrige: CorrigeCas[];
  conseils: string[];
  /** Intitulé de l'épreuve réelle, si différent de celui du cas pratique d'agent de maîtrise. */
  epreuve?: string;
}

const a = (texte: string, points: number): AttenduCas => ({ texte, points });

export const casPratiques: CasPratique[] = [
  {
    id: "cas-btp-vrd-canalisation",
    specialite: "btp-vrd",
    titre: "Remplacement d'une canalisation d'eaux pluviales, rue des Tilleuls",
    resume:
      "Quantités de matériaux, planning d'une équipe de 4 agents, sécurité d'une tranchée près d'une école et d'un réseau de gaz, note de synthèse.",
    contexte: [
      "Vous êtes agent de maîtrise à la commune de Techniville (7 500 habitants), responsable de l'équipe voirie et réseaux du centre technique (4 agents).",
      "Nous sommes le lundi 30 novembre. Le directeur des services techniques vous confie le remplacement, en régie, d'une canalisation d'eaux pluviales effondrée sur 12 m devant l'école élémentaire, rue des Tilleuls. Les travaux doivent être terminés avant le vendredi 18 décembre, dernier jour d'école avant les vacances.",
    ],
    documents: [
      {
        titre: "Document 1 : note du directeur des services techniques",
        paragraphes: [
          "« L'inspection télévisée de la semaine dernière confirme l'effondrement de la conduite sur 12 m. Lors des orages, l'eau envahit la cour de l'école. Je vous demande d'organiser son remplacement en régie et de me transmettre pour jeudi les quantités à commander, le planning, les mesures de sécurité et une note de synthèse. »",
        ],
      },
      {
        titre: "Document 2 : données techniques",
        tableau: {
          entetes: ["Élément", "Donnée"],
          lignes: [
            ["Longueur à remplacer", "12 m"],
            ["Tranchée", "0,70 m de large, 1,40 m de profondeur"],
            ["Canalisation", "PVC DN 200, en barres de 3 m"],
            [
              "Lit de pose et enrobage en sable",
              "Hauteur totale 0,40 m sur toute la largeur (on néglige le volume du tuyau)",
            ],
            ["Remblai", "GNT, masse volumique 2,1 t/m³ ; les déblais ne sont pas réutilisés"],
            ["Foisonnement et camion", "Coefficient 1,3 ; camion de 6 m³"],
            [
              "Réfection de surface",
              "Enrobé sur 1,00 m de large et 6 cm d'épaisseur, masse volumique 2,4 t/m³",
            ],
          ],
        },
      },
      {
        titre: "Document 3 : extrait du récépissé de DICT",
        paragraphes: [
          "« Une conduite de gaz basse pression est présente à environ 1,5 m de l'axe de votre tranchée. Classe de précision : B. Des investigations complémentaires ou des précautions particulières sont nécessaires. »",
        ],
      },
      {
        titre: "Document 4 : équipe et contraintes",
        points: [
          "Agent A : CACES R482 et autorisation de conduite. Agent B : permis C. Agents C et D : polyvalents.",
          "L'agent D est en formation le mardi et le mercredi de chaque semaine de décembre.",
          "Pas de blindage en stock : location possible sous 48 heures. L'enrobé se commande 3 jours à l'avance.",
          "L'école accueille les élèves à 8 h 20 et les libère à 16 h 30.",
        ],
      },
    ],
    questions: [
      {
        numero: 1,
        intitule:
          "Calculez : a) le volume de déblais en place et foisonnés, puis le nombre de rotations ; b) le nombre de barres de PVC ; c) le volume de sable ; d) le volume et la masse de GNT ; e) la masse d'enrobé, et la quantité à commander arrondie à 0,1 t. Détaillez vos calculs.",
        points: 8,
      },
      {
        numero: 2,
        intitule:
          "Proposez un planning et une organisation de l'équipe, en tenant compte de toutes les contraintes du dossier.",
        points: 4,
      },
      { numero: 3, intitule: "Listez les mesures de sécurité du chantier.", points: 4 },
      {
        numero: 4,
        intitule: "Rédigez la note de synthèse destinée au directeur des services techniques.",
        points: 4,
      },
    ],
    corrige: [
      {
        numero: 1,
        calculs: [
          "Déblais en place : 12 × 0,70 × 1,40 = 11,76 m³. Foisonnés : 11,76 × 1,3 = 15,29 m³. Rotations : 15,29 ÷ 6 = 2,55, arrondi à 3.",
          "Barres : 12 ÷ 3 = 4 barres.",
          "Sable : 12 × 0,70 × 0,40 = 3,36 m³.",
          "GNT : hauteur = 1,40 − 0,40 − 0,06 = 0,94 m ; volume = 12 × 0,70 × 0,94 = 7,90 m³ ; masse = 7,90 × 2,1 = 16,58 t.",
          "Enrobé : 12 × 1,00 × 0,06 = 0,72 m³ ; masse = 0,72 × 2,4 = 1,728 t, soit 1,8 t à commander.",
        ],
        attendus: [
          a("Déblais en place (11,76 m³)", 1),
          a("Déblais foisonnés (15,29 m³)", 1),
          a("Nombre de rotations arrondi au supérieur (3)", 0.5),
          a("Nombre de barres (4)", 0.5),
          a("Volume de sable (3,36 m³)", 1),
          a("Hauteur de GNT tenant compte du sable et de l'enrobé (0,94 m)", 1),
          a("Volume de GNT (7,90 m³)", 0.5),
          a("Masse de GNT (16,58 t)", 0.5),
          a("Volume d'enrobé (0,72 m³)", 0.5),
          a("Masse d'enrobé (1,728 t)", 0.5),
          a("Quantité à commander arrondie (1,8 t)", 0.5),
          a("Démarche : formules, unités, phrases-réponses", 0.5),
        ],
      },
      {
        numero: 2,
        attendus: [
          a(
            "Semaine du 30 novembre consacrée à la préparation : commande du blindage (disponible sous 48 h), du PVC, du sable, de la GNT et de l'enrobé (3 jours à l'avance), arrêté de circulation, marquage-piquetage, information de l'école",
            1,
          ),
          a(
            "Affectation selon les habilitations : agent A à la pelle (CACES R482), agent B à l'évacuation des déblais (permis C), C et D en pose et remblai",
            1,
          ),
          a(
            "Enchaînement logique sur 4 jours, par exemple semaine du 7 décembre : J1 signalisation, découpe, sondages à la main côté gaz, terrassement et blindage ; J2 pose de la canalisation et du sable ; J3 remblai en GNT compacté par couches ; J4 enrobé, nettoyage et repli",
            1,
          ),
          a(
            "Prise en compte des contraintes : travaux sans l'agent D les mardi et mercredi (tâches adaptées ou travaux décalés), pas de livraisons ni de manœuvres aux heures d'entrée et de sortie de l'école, marge de la semaine du 14 décembre pour les aléas avant le 18",
            1,
          ),
        ],
      },
      {
        numero: 3,
        attendus: [
          a(
            "Réseaux : DT-DICT respectée, marquage-piquetage, sondages à la main ou par aspiration près du gaz (classe B), agents titulaires de l'AIPR, conduite à tenir en cas d'accrochage (arrêt, éloignement, appel du 18 et de l'exploitant, aucune flamme)",
            1,
          ),
          a(
            "Tranchée : blindage obligatoire (1,40 m dépasse 1,30 m), déblais à plus de 40 cm du bord ou évacués, barrières ou garde-corps, échelle d'accès",
            1,
          ),
          a(
            "École et circulation : arrêté de circulation, signalisation temporaire AK5 et balisage, cheminement piéton séparé pour les élèves, accès des secours maintenus, livraisons hors des horaires d'entrée et de sortie",
            1,
          ),
          a(
            "Engins et agents : CACES et autorisation de conduite vérifiés, personne dans le rayon d'action de la pelle, EPI complets, arrêt du chantier en cas d'orage",
            1,
          ),
        ],
      },
      {
        numero: 4,
        attendus: [
          a("En-tête complet : collectivité, service, de, à, date, objet précis", 0.5),
          a("Constat factuel : conduite effondrée sur 12 m, inondations de la cour", 0.5),
          a("Mesures déjà prises ou prévues : DICT, commandes, information de l'école", 0.5),
          a(
            "Quantités à commander (déblais, barres, sable, GNT, enrobé) et contraintes (gaz classe B, tranchée de 1,40 m, école)",
            1,
          ),
          a(
            "Propositions concrètes : planning, location du blindage, arrêté de circulation, validation de la dépense",
            1,
          ),
          a("Conclusion avec formule de disponibilité, présentation claire et sans faute", 0.5),
        ],
      },
    ],
    conseils: [
      "Lisez d'abord les questions, puis le dossier en surlignant chiffres, dates et contraintes.",
      "Dans les calculs, convertissez tout en mètres et arrondissez à la fin ; une commande s'arrondit toujours au supérieur.",
      "Pour la note, restez factuel dans le constat et proposez des solutions chiffrées.",
    ],
  },
  {
    id: "cas-eh-complexe-sportif",
    specialite: "environnement-hygiene",
    titre: "Entretien du complexe sportif et incident chimique dans les vestiaires",
    resume:
      "Dosage et rendement d'un produit d'entretien, conduite à tenir après un mélange de produits, prévention des TMS, plan d'actions.",
    contexte: [
      "Vous êtes agent de maîtrise responsable de l'équipe d'entretien et de propreté (6 agents) de la commune de Techniville.",
      "Le complexe sportif comprend un gymnase (600 m² de sol), des vestiaires (120 m²) et un hall d'accueil (80 m²). Hier, un agent a mélangé un détartrant acide et de l'eau de Javel pour gagner du temps dans les vestiaires. Il a ressenti une irritation respiratoire et des yeux qui piquent, et a quitté la salle.",
    ],
    documents: [
      {
        titre: "Document 1 : étiquette et fiche technique du détergent pour sols",
        tableau: {
          entetes: ["Rubrique", "Information"],
          lignes: [
            [
              "Type de produit",
              "Détergent pour sols, pH 11 ; pictogramme point d'exclamation (irritant)",
            ],
            [
              "Dosage",
              "Sol peu encrassé : 2,5 mL par litre ; moyennement encrassé : 5 mL par litre ; fortement encrassé : 7,5 mL par litre",
            ],
            [
              "Rendement",
              "Méthode par pré-imprégnation : 1 litre de solution nettoie 20 m². Méthode au seau et à la frange : 1 litre de solution nettoie 12,5 m²",
            ],
          ],
        },
      },
      {
        titre: "Document 2 : état des sols après le tournoi du week-end",
        tableau: {
          entetes: ["Zone", "Surface", "Niveau d'encrassement"],
          lignes: [
            ["Gymnase", "600 m²", "Fortement encrassé"],
            ["Vestiaires", "120 m²", "Moyennement encrassé"],
            ["Hall d'accueil", "80 m²", "Peu encrassé"],
          ],
        },
      },
      {
        titre: "Document 3 : bilan social du service",
        points: [
          "Trois arrêts de travail pour troubles musculo-squelettiques en douze mois, tous liés à la manutention de seaux d'eau et à l'essorage des franges.",
          "Le service utilise encore la méthode au seau et à la frange pour la plupart des sols.",
        ],
      },
    ],
    questions: [
      {
        numero: 1,
        intitule:
          "En utilisant la méthode par pré-imprégnation, calculez pour chaque zone le volume de solution et la quantité de produit nécessaires. Calculez ensuite le total, puis comparez avec la méthode au seau et à la frange (volume de solution et pourcentage d'économie).",
        points: 6,
      },
      {
        numero: 2,
        intitule:
          "Que faites-vous immédiatement après l'incident, puis dans les jours qui suivent ?",
        points: 5,
      },
      {
        numero: 3,
        intitule:
          "Définissez les TMS et expliquez comment la méthode par pré-imprégnation et l'organisation du travail permettent de les prévenir.",
        points: 4,
      },
      {
        numero: 4,
        intitule:
          "Rédigez une note au responsable du service proposant un plan d'actions pour éviter qu'un tel incident ne se reproduise.",
        points: 5,
      },
    ],
    corrige: [
      {
        numero: 1,
        calculs: [
          "Pré-imprégnation : gymnase 600 ÷ 20 = 30 L, soit 30 × 7,5 = 225 mL de produit ; vestiaires 120 ÷ 20 = 6 L, soit 6 × 5 = 30 mL ; hall 80 ÷ 20 = 4 L, soit 4 × 2,5 = 10 mL.",
          "Totaux : 40 L de solution et 265 mL de produit.",
          "Seau et frange : 600 ÷ 12,5 = 48 L ; 120 ÷ 12,5 = 9,6 L ; 80 ÷ 12,5 = 6,4 L ; total 64 L.",
          "Économie de solution : 64 − 40 = 24 L, soit 24 ÷ 64 = 37,5 %.",
        ],
        attendus: [
          a("Volumes de solution par zone (30 L, 6 L, 4 L)", 1.5),
          a("Quantités de produit par zone (225 mL, 30 mL, 10 mL)", 1.5),
          a("Totaux (40 L de solution et 265 mL de produit)", 1),
          a("Volume de solution à la frange (64 L)", 1),
          a("Économie de 24 L, soit 37,5 %", 1),
        ],
      },
      {
        numero: 2,
        attendus: [
          a(
            "Sécuriser : faire évacuer et aérer la zone sans s'exposer, interdire l'accès, ne pas laisser l'agent seul",
            1,
          ),
          a(
            "Soins : air frais, rinçage des yeux à l'eau claire pendant au moins 15 minutes, appel du 15, du 18 ou d'un centre antipoison en donnant les produits en cause, consultation de la FDS",
            1.5,
          ),
          a(
            "Informer la hiérarchie et déclarer l'accident de service avec le certificat médical",
            1,
          ),
          a(
            "Analyser l'événement avec l'assistant de prévention (causes : manque d'information, gain de temps), mettre à jour le DUERP",
            1,
          ),
          a(
            "Rappeler la règle : ne jamais mélanger de produits (l'eau de Javel avec un acide dégage du chlore toxique), former l'équipe",
            0.5,
          ),
        ],
      },
      {
        numero: 3,
        attendus: [
          a(
            "Définition : troubles musculo-squelettiques, atteintes des muscles, tendons et articulations dues aux gestes répétitifs, postures et efforts",
            1,
          ),
          a(
            "Pré-imprégnation : plus de seau à porter ni d'essorage, bandeaux préparés et utilisés un par un",
            1,
          ),
          a(
            "Autres avantages : dosage maîtrisé, moindre consommation d'eau et de produit, bandeau propre par pièce donc meilleure hygiène",
            1,
          ),
          a(
            "Organisation : formation aux gestes et postures, rotation des tâches, matériel ergonomique (manches télescopiques, chariots)",
            1,
          ),
        ],
      },
      {
        numero: 4,
        attendus: [
          a("En-tête complet et objet précis", 0.5),
          a("Constat factuel de l'incident et mesures immédiates prises", 1),
          a(
            "Propositions concrètes : rappel collectif, étiquetage des flacons, dosage par centrale de dilution, suppression des produits acides et chlorés en libre accès, fiches de poste actualisées",
            2,
          ),
          a("Formation de l'équipe et suivi (contrôle régulier, point sécurité)", 1),
          a("Conclusion et qualité rédactionnelle", 0.5),
        ],
      },
    ],
    conseils: [
      "Le dosage se calcule toujours par litre de solution : volume × concentration.",
      "En cas d'incident, l'ordre est : sécuriser, secourir, alerter, informer, analyser.",
      "Une note efficace distingue constat, mesures prises et propositions.",
    ],
  },
  {
    id: "cas-ev-placette",
    specialite: "espaces-verts",
    titre: "Création d'une placette plantée et protection des arbres existants",
    resume:
      "Calculs de surface, de semences, de terre et d'espacement, choix des plantes, protection des arbres pendant des travaux, canicule et sécurité d'élagage.",
    contexte: [
      "Vous êtes agent de maîtrise responsable de l'équipe espaces verts (5 agents) de la commune de Techniville.",
      "La commune aménage la placette Jean-Jaurès : un parterre circulaire de 24 m de diamètre, à engazonner et à entourer de 20 arbres régulièrement espacés. Trois arbres existants se trouvent à proximité d'un chantier de voirie. Une association d'habitants propose une liste de plantes pour la charte de végétalisation.",
    ],
    documents: [
      {
        titre: "Document 1 : données du projet",
        tableau: {
          entetes: ["Élément", "Donnée"],
          lignes: [
            ["Parterre", "Cercle de 24 m de diamètre (prendre π = 3,14)"],
            ["Gazon", "Semis à 30 g par m²"],
            ["Terre végétale", "Couche de 10 cm sur toute la surface, livrée par camions de 8 m³"],
            ["Arbres", "20 arbres régulièrement espacés sur le pourtour du parterre"],
          ],
        },
      },
      {
        titre: "Document 2 : plantes proposées par l'association",
        paragraphes: [
          "Berce du Caucase, buddleia (arbre à papillon), aubépine, lavande, bambou traçant, sauge, belladone.",
        ],
      },
      {
        titre: "Document 3 : contexte du chantier",
        points: [
          "Un chantier de voirie voisin utilise des engins et prévoit une tranchée à 2 m du tronc de l'un des arbres existants.",
          "Un platane voisin doit être élagué ; une ligne électrique aérienne passe à proximité de son houppier.",
          "Une période de canicule est annoncée pour la semaine prochaine, avec des températures supérieures à 35 °C l'après-midi.",
        ],
      },
    ],
    questions: [
      {
        numero: 1,
        intitule:
          "Calculez : la surface du parterre, la quantité de semences, le volume de terre végétale et le nombre de rotations de camion, puis le périmètre et la distance entre deux arbres. Détaillez vos calculs.",
        points: 6,
      },
      {
        numero: 2,
        intitule:
          "Parmi les plantes du document 2, lesquelles écartez-vous de la charte de végétalisation ? Justifiez par la catégorie à risque.",
        points: 4,
      },
      {
        numero: 3,
        intitule:
          "Quelles mesures prenez-vous pour protéger les arbres existants pendant les travaux de voirie, et quelles consignes de taille donnez-vous à votre équipe ?",
        points: 4,
      },
      {
        numero: 4,
        intitule:
          "Proposez quatre mesures pour limiter les risques liés à la canicule pour votre équipe.",
        points: 3,
      },
      {
        numero: 5,
        intitule:
          "Quelles précautions et quels équipements prévoyez-vous pour l'élagage du platane près de la ligne électrique ?",
        points: 3,
      },
    ],
    corrige: [
      {
        numero: 1,
        calculs: [
          "Surface : π × r² = 3,14 × 12² = 3,14 × 144 = 452,16 m².",
          "Semences : 452,16 × 30 = 13 564,8 g, soit environ 13,6 kg, arrondi à 14 kg à commander.",
          "Terre végétale : 452,16 × 0,10 = 45,2 m³ ; rotations : 45,2 ÷ 8 = 5,65, arrondi à 6.",
          "Périmètre : π × d = 3,14 × 24 = 75,36 m ; espacement : 75,36 ÷ 20 = 3,77 m.",
        ],
        attendus: [
          a("Surface du parterre (452,16 m²), en utilisant le rayon", 1),
          a("Quantité de semences (13,6 kg, 14 kg à commander)", 1),
          a("Volume de terre végétale (45,2 m³)", 1),
          a("Nombre de rotations arrondi au supérieur (6)", 1),
          a("Périmètre du parterre (75,36 m)", 1),
          a("Distance entre deux arbres (3,77 m)", 1),
        ],
      },
      {
        numero: 2,
        attendus: [
          a(
            "Berce du Caucase : exotique envahissante et irritante (sève photosensibilisante)",
            0.75,
          ),
          a("Buddleia : exotique envahissante", 0.75),
          a("Aubépine : épineuse", 0.5),
          a("Bambou traçant : racines traçantes", 0.5),
          a("Belladone : très toxique", 0.5),
          a("Lavande et sauge conservées : plantes mellifères, sans risque", 0.5),
          a("Proposition d'alternatives adaptées", 0.5),
        ],
      },
      {
        numero: 3,
        attendus: [
          a("Délimiter un périmètre de protection par des barrières autour des arbres", 0.5),
          a(
            "Protéger les troncs (planches, gaine), interdire stockage, circulation d'engins et tassement de la zone racinaire",
            0.75,
          ),
          a(
            "Éviter ou réaliser à la main toute tranchée à proximité des racines, et arroser si besoin",
            0.75,
          ),
          a(
            "Taille : éviter la période de reproduction de la faune, couper net près du col sans blesser le bourrelet cicatriciel",
            1,
          ),
          a(
            "Proscrire l'étêtage, utiliser des outils propres et affûtés, limiter la quantité enlevée",
            1,
          ),
        ],
      },
      {
        numero: 4,
        attendus: [
          a("Décaler les horaires pour travailler tôt le matin", 0.75),
          a("Prévoir des pauses fréquentes à l'ombre ou au frais", 0.75),
          a("Mettre de l'eau fraîche à disposition et inciter à boire régulièrement", 0.75),
          a(
            "Vêtements adaptés, protection de la tête, limitation des efforts pénibles et surveillance des malaises, personne seule",
            0.75,
          ),
        ],
      },
      {
        numero: 5,
        attendus: [
          a(
            "Informer l'exploitant de la ligne, respecter les distances de sécurité (au moins 3 m pour une ligne de moins de 50 000 V) et prévoir des agents formés",
            1,
          ),
          a("Nacelle avec agent titulaire du CACES R486 et de l'autorisation de conduite", 1),
          a(
            "EPI : casque forestier, gants et pantalon anti-coupure, chaussures de sécurité, gilet haute visibilité ; balisage de la zone et personne sous la zone de travail",
            1,
          ),
        ],
      },
    ],
    conseils: [
      "Pour une surface circulaire, utilisez le rayon (la moitié du diamètre) ; pour le périmètre, le diamètre.",
      "Les calculs de commande s'arrondissent au supérieur.",
      "Citez toujours la catégorie de risque d'une plante : envahissante, épineuse, traçante, urticante, toxique.",
    ],
  },
  {
    id: "cas-resto-cuisine-centrale",
    specialite: "restauration",
    titre: "Cuisine centrale : commandes, conformité EGalim et température non conforme",
    resume:
      "Adaptation d'une fiche technique, calcul du coût, taux de produits durables et bio, conduite à tenir face à une livraison non conforme, management.",
    contexte: [
      "Vous êtes agent de maîtrise, responsable de la cuisine centrale de la commune de Techniville (12 agents, 600 repas par jour servis en liaison froide dans les écoles).",
      "Un gratin de légumes est au menu de la semaine prochaine. Ce matin, à la réception, une livraison de plats cuisinés en liaison froide a été mesurée à +9 °C. Le livreur parle d'une panne de son groupe froid.",
    ],
    documents: [
      {
        titre: "Document 1 : fiche technique du gratin de légumes pour 20 portions",
        tableau: {
          entetes: ["Ingrédient", "Quantité pour 20 portions", "Prix", "Conditionnement de vente"],
          lignes: [
            ["Pommes de terre", "3 kg", "1,10 € le kg", "Filet de 25 kg"],
            ["Courgettes", "2 kg", "2,40 € le kg", "Caisse de 6 kg"],
            ["Béchamel", "2 L", "1,50 € le litre", "Bidon de 5 L"],
            ["Fromage râpé", "0,4 kg", "8,00 € le kg", "Sachet de 1 kg"],
          ],
        },
      },
      {
        titre: "Document 2 : achats de l'année",
        tableau: {
          entetes: ["Catégorie d'achats (hors taxes)", "Montant"],
          lignes: [
            ["Total des achats alimentaires", "180 000 €"],
            ["Produits issus de l'agriculture biologique", "41 400 €"],
            [
              "Autres produits de qualité et durables (labels officiels, circuits courts)",
              "52 200 €",
            ],
          ],
        },
      },
      {
        titre: "Document 3 : relevé de réception",
        points: [
          "Livraison de plats cuisinés en liaison froide, température mesurée à la réception : +9 °C.",
          "Le bon de livraison ne mentionne aucune anomalie de transport.",
          "Un agent de la cuisine est arrivé ce matin sans charlotte, pour la deuxième fois cette semaine.",
        ],
      },
    ],
    questions: [
      {
        numero: 1,
        intitule:
          "Adaptez la fiche technique à 600 portions, indiquez les quantités à commander compte tenu des conditionnements, et calculez le coût de revient d'une portion.",
        points: 6,
      },
      {
        numero: 2,
        intitule:
          "Calculez la part de produits bio et la part de produits de qualité et durables dans les achats. La cuisine centrale respecte-t-elle les obligations de la loi EGalim ? Quelle obligation concerne en outre les menus ?",
        points: 4,
      },
      {
        numero: 3,
        intitule:
          "Que faites-vous face à la livraison mesurée à +9 °C ? Rattachez votre réponse aux principes de la méthode HACCP.",
        points: 5,
      },
      {
        numero: 4,
        intitule:
          "Que faites-vous à propos de l'agent sans charlotte, et comment organisez-vous le rappel des règles d'hygiène dans l'équipe ?",
        points: 5,
      },
    ],
    corrige: [
      {
        numero: 1,
        calculs: [
          "Coefficient : 600 ÷ 20 = 30. Quantités : pommes de terre 90 kg ; courgettes 60 kg ; béchamel 60 L ; fromage 12 kg.",
          "Commandes : pommes de terre 90 ÷ 25 = 3,6, soit 4 filets ; courgettes 60 ÷ 6 = 10 caisses ; béchamel 60 ÷ 5 = 12 bidons ; fromage 12 sachets.",
          "Coût pour 20 portions : 3 × 1,10 + 2 × 2,40 + 2 × 1,50 + 0,4 × 8 = 3,30 + 4,80 + 3,00 + 3,20 = 14,30 €. Par portion : 14,30 ÷ 20 = 0,715 €, soit environ 0,72 €.",
        ],
        attendus: [
          a("Coefficient 30 et quantités pour 600 portions (90 kg, 60 kg, 60 L, 12 kg)", 2),
          a(
            "Quantités à commander arrondies au supérieur (4 filets, 10 caisses, 12 bidons, 12 sachets)",
            2,
          ),
          a("Coût de la fiche (14,30 €) et coût par portion (0,72 €)", 2),
        ],
      },
      {
        numero: 2,
        calculs: [
          "Part de bio : 41 400 ÷ 180 000 = 23 %, supérieure à l'objectif de 20 %.",
          "Part de produits de qualité et durables, bio compris : (41 400 + 52 200) ÷ 180 000 = 93 600 ÷ 180 000 = 52 %, supérieure à l'objectif de 50 %.",
        ],
        attendus: [
          a("Part de bio (23 %) calculée sur la valeur des achats hors taxes", 1),
          a("Part de produits de qualité et durables (52 %)", 1),
          a("Conclusion : objectifs de 50 % dont 20 % de bio respectés", 1),
          a("Menu végétarien au moins une fois par semaine en restauration scolaire", 1),
        ],
      },
      {
        numero: 3,
        attendus: [
          a(
            "Isoler ou refuser le lot : une liaison froide doit être entre 0 et +3 °C ; +9 °C est non conforme, ne pas utiliser les plats",
            1.5,
          ),
          a(
            "Mesurer la température à cœur sur plusieurs plats, noter les relevés et photographier",
            1,
          ),
          a(
            "Formuler une réserve sur le bon de livraison, informer le fournisseur et la hiérarchie, demander un remplacement et conserver la traçabilité du lot",
            1,
          ),
          a(
            "Lien HACCP : la température est un point critique, la limite critique est de +3 °C, l'action corrective est le refus du lot, la surveillance est le contrôle à réception, et tout est enregistré",
            1.5,
          ),
        ],
      },
      {
        numero: 4,
        attendus: [
          a(
            "Recevoir l'agent en entretien, rappeler la règle (tenue complète, charlotte) et ses raisons : éviter la contamination des aliments",
            1.5,
          ),
          a(
            "Comprendre les causes (oubli, manque de matériel) et fournir immédiatement une charlotte",
            1,
          ),
          a(
            "Rappel collectif des bonnes pratiques d'hygiène lors d'une réunion ou d'un point en début de service",
            1,
          ),
          a(
            "Tracer l'entretien, contrôler régulièrement le port de la tenue, informer la hiérarchie si le manquement persiste",
            1,
          ),
          a("Ne pas sanctionner soi-même : la sanction relève de l'autorité territoriale", 0.5),
        ],
      },
    ],
    conseils: [
      "Les températures de référence : liaison chaude au moins +63 °C, liaison froide 0 à +3 °C, surgelé −18 °C.",
      "En cas de non-conformité : isoler, mesurer, tracer, informer, corriger.",
      "Le taux de bio se calcule en valeur d'achats hors taxes.",
    ],
  },
  {
    id: "cas-hae-ecole-maternelle",
    specialite: "hygiene-accueil-enfants",
    titre: "École maternelle : PAI, intrusion dans l'école et produits d'entretien",
    resume:
      "Mise en œuvre d'un PAI pour une allergie, réaction à une intrusion, dilution d'un détergent, accueil d'un remplaçant, accident du travail.",
    contexte: [
      "Vous êtes ATSEM référent(e) et agent de maîtrise responsable d'une équipe de 6 ATSEM et de 4 agents d'entretien répartis sur cinq écoles maternelles de la commune de Techniville.",
      "Ce matin à 8 h 40, une personne inconnue est entrée dans l'école des Lilas par le portail resté ouvert. Elle est ressortie après avoir circulé dans le couloir. Par ailleurs, un nouvel élève de petite section, Léo, est allergique aux arachides.",
    ],
    documents: [
      {
        titre: "Document 1 : extrait du PAI de Léo",
        tableau: {
          entetes: ["Rubrique", "Contenu"],
          lignes: [
            ["Pathologie", "Allergie sévère aux arachides"],
            [
              "Traitement",
              "Stylo d'adrénaline auto-injectable, conservé dans la trousse d'urgence, dans la classe",
            ],
            [
              "Signes d'alerte",
              "Démangeaisons, gonflement des lèvres, difficulté à respirer, malaise",
            ],
            [
              "Conduite à tenir",
              "Injecter l'adrénaline selon le protocole, appeler le 15, prévenir la directrice et les parents",
            ],
            ["Restauration", "Repas sans arachides, contrôle de l'étiquetage des produits"],
          ],
        },
      },
      {
        titre: "Document 2 : fiche du détergent pour sols",
        points: [
          "Détergent de pH 12, à diluer à raison de 1 volume de produit pour 19 volumes d'eau.",
          "Chaque nettoyage d'une salle nécessite 10 L de solution. Le produit concentré est vendu en bidons de 5 L.",
          "L'équipe prévoit 30 nettoyages de salles par mois.",
        ],
      },
      {
        titre: "Document 3 : planning",
        points: [
          "Une ATSEM est absente à partir de lundi. Un agent de remplacement arrive lundi à 8 h 00 à l'école des Lilas.",
          "Mardi matin, un agent d'entretien a glissé sur un sol mouillé dans un couloir et se plaint d'une douleur au poignet.",
        ],
      },
    ],
    questions: [
      {
        numero: 1,
        intitule:
          "Qu'est-ce qu'un PAI, dans quels cas est-il mis en place, quelle est sa durée ? Que fait l'équipe si Léo présente une réaction allergique à la cantine ?",
        points: 5,
      },
      {
        numero: 2,
        intitule:
          "Que faites-vous après l'intrusion de ce matin, puis quelles mesures de prévention proposez-vous ?",
        points: 4,
      },
      {
        numero: 3,
        intitule:
          "Calculez les volumes de produit et d'eau pour 10 L puis pour 40 L de solution, le nombre de bidons de 5 L pour 30 nettoyages par mois, et indiquez si le pH de la solution sera supérieur ou inférieur à 12. Rappelez la différence entre un détergent et un désinfectant.",
        points: 5,
      },
      {
        numero: 4,
        intitule: "Comment accueillez-vous l'agent de remplacement lundi à 8 h 00 ?",
        points: 3,
      },
      {
        numero: 5,
        intitule:
          "Quelle est la procédure de déclaration de l'accident de l'agent d'entretien, pour l'agent et pour vous ?",
        points: 3,
      },
    ],
    corrige: [
      {
        numero: 1,
        attendus: [
          a(
            "Définition : projet d'accueil individualisé, élaboré avec la famille, le médecin et l'équipe pour accueillir un enfant",
            1,
          ),
          a(
            "Cas : maladie chronique, allergie, intolérance alimentaire nécessitant un traitement, un régime ou des précautions",
            1,
          ),
          a("Durée : année scolaire, à réviser et reconduire chaque année", 0.5),
          a(
            "Réaction allergique : rester auprès de l'enfant, injecter l'adrénaline selon le protocole du PAI, appeler le 15",
            1.5,
          ),
          a("Prévenir la directrice et les parents, remettre la trousse d'urgence aux secours", 1),
        ],
      },
      {
        numero: 2,
        attendus: [
          a(
            "Vérifier qu'aucun enfant n'a été approché et que personne n'est en danger, prévenir la directrice et, si besoin, la police",
            1,
          ),
          a(
            "Rendre compte à la hiérarchie et noter les faits (heure, description, circonstances)",
            1,
          ),
          a(
            "Prévention : fermer et verrouiller les accès, interphone ou visiophone, ne laisser entrer que les personnes identifiées",
            1,
          ),
          a(
            "Registre des visiteurs et exercices du plan particulier de mise en sûreté (PPMS), consignes rappelées à l'équipe",
            1,
          ),
        ],
      },
      {
        numero: 3,
        calculs: [
          "Dilution : 1 + 19 = 20 parts. Pour 10 L : 10 ÷ 20 = 0,5 L de produit et 9,5 L d'eau. Pour 40 L : 2 L de produit et 38 L d'eau.",
          "30 nettoyages × 0,5 L = 15 L de produit ; 15 ÷ 5 = 3 bidons de 5 L.",
          "Après dilution, le pH est inférieur à 12 (il se rapproche de 7).",
        ],
        attendus: [
          a("Volumes pour 10 L (0,5 L de produit et 9,5 L d'eau)", 1),
          a("Volumes pour 40 L (2 L de produit et 38 L d'eau)", 1),
          a("Nombre de bidons (3)", 1),
          a("pH inférieur à 12 après dilution", 1),
          a(
            "Détergent : nettoie ; désinfectant : détruit les micro-organismes sur une surface déjà propre",
            1,
          ),
        ],
      },
      {
        numero: 4,
        attendus: [
          a(
            "Présenter le remplaçant à l'équipe et à la direction, lui faire visiter les locaux",
            1,
          ),
          a(
            "Remettre les consignes d'hygiène et de sécurité, la liste des produits, le PAI de Léo et les consignes en cas d'intrusion",
            1,
          ),
          a(
            "Lui présenter son planning, désigner une personne référente et faire un point en fin de journée",
            1,
          ),
        ],
      },
      {
        numero: 5,
        attendus: [
          a(
            "L'agent prévient aussitôt son supérieur et fait constater ses blessures par un médecin, puis transmet le certificat médical",
            1,
          ),
          a(
            "Le supérieur fait secourir l'agent, recueille les circonstances et les témoins, rédige un rapport",
            1,
          ),
          a(
            "Déclaration de l'accident de service aux ressources humaines dans les délais, analyse avec l'assistant de prévention et mesures (signalisation des sols mouillés, produits antidérapants)",
            1,
          ),
        ],
      },
    ],
    conseils: [
      "Dans un PAI, retenez : pathologie, traitement, conduite à tenir en urgence, personnes à prévenir.",
      "Pour une dilution « 1 pour 19 », la solution compte 20 parts.",
      "Face à une intrusion : protéger les enfants d'abord, rendre compte, puis prévenir.",
    ],
  },
  {
    id: "cas-logsec-magasin",
    specialite: "logistique-securite",
    titre: "Magasin du centre technique : stocks, chariot élévateur et sécurité incendie",
    resume:
      "Calcul de stocks et seuils, lecture d'une plaque de charge, sécurité incendie du magasin, évolution des dépenses.",
    contexte: [
      "Vous êtes agent de maîtrise responsable du magasin du centre technique de la commune de Techniville (3 magasiniers).",
      "En fin de mois, vous faites le point sur les stocks d'articles de la régie voirie, vérifiez l'utilisation du chariot élévateur et préparez le contrôle de sécurité du magasin.",
    ],
    documents: [
      {
        titre: "Document 1 : mouvements de stock du mois",
        tableau: {
          entetes: ["Article", "Stock initial", "Entrées", "Sorties", "Seuil minimal"],
          lignes: [
            ["Gants (paires)", "400", "600", "520", "300"],
            ["Cônes de chantier", "120", "0", "45", "60"],
            ["Sel de déneigement (sacs de 25 kg)", "200", "0", "140", "80"],
            ["Bidons d'huile", "30", "24", "36", "20"],
          ],
        },
      },
      {
        titre: "Document 2 : plaque de charge du chariot élévateur",
        tableau: {
          entetes: ["Hauteur de levée", "Centre de gravité à 500 mm", "Centre de gravité à 600 mm"],
          lignes: [
            ["Jusqu'à 3,0 m", "1 600 kg", "1 400 kg"],
            ["De 3,0 à 4,5 m", "1 200 kg", "1 000 kg"],
          ],
        },
      },
      {
        titre: "Document 3 : dépenses du magasin",
        tableau: {
          entetes: ["Année", "2022", "2023", "2024", "2025"],
          lignes: [["Dépenses en € TTC", "18 400", "21 160", "19 044", "22 853"]],
        },
      },
      {
        titre: "Document 4 : observations du contrôle de sécurité",
        points: [
          "L'armoire électrique générale est équipée d'un extincteur à eau.",
          "Les palettes lourdes de parpaings sont rangées sur les niveaux hauts du palettier.",
          "Les bidons d'huile sont stockés à côté des sacs de sel, sans consigne particulière.",
        ],
      },
    ],
    questions: [
      {
        numero: 1,
        intitule:
          "Calculez le stock final de chaque article (stock initial + entrées − sorties), identifiez les articles passés sous leur seuil, et indiquez quelle règle de sortie appliquer aux produits périssables. Que risque-t-on avec une gestion en flux tendu ?",
        points: 6,
      },
      {
        numero: 2,
        intitule:
          "À partir de la plaque de charge : peut-on déposer 1 200 kg dont le centre de gravité est à 600 mm à 2,5 m de hauteur ? À 4,2 m de hauteur ? Quels documents l'agent doit-il détenir pour conduire le chariot ?",
        points: 4,
      },
      {
        numero: 3,
        intitule:
          "Relevez les anomalies du document 4 et proposez une mesure corrective pour chacune.",
        points: 4,
      },
      {
        numero: 4,
        intitule:
          "Calculez le taux d'évolution des dépenses entre 2022 et 2023, 2023 et 2024, 2024 et 2025.",
        points: 3,
      },
      {
        numero: 5,
        intitule:
          "Rédigez une note courte au responsable du service présentant les articles à commander en priorité.",
        points: 3,
      },
    ],
    corrige: [
      {
        numero: 1,
        calculs: [
          "Gants : 400 + 600 − 520 = 480, supérieur au seuil de 300. Cônes : 120 + 0 − 45 = 75, supérieur au seuil de 60. Sel : 200 + 0 − 140 = 60, inférieur au seuil de 80. Bidons d'huile : 30 + 24 − 36 = 18, inférieur au seuil de 20.",
        ],
        attendus: [
          a("Stocks finaux calculés correctement (480, 75, 60, 18)", 2),
          a("Articles sous leur seuil : le sel et les bidons d'huile", 1),
          a(
            "Règle FEFO : premier périmé, premier sorti, pour les produits périssables (FIFO pour les autres)",
            1.5,
          ),
          a(
            "Risque du flux tendu : stocks minimaux donc rupture de stock possible en cas de retard ou de pic de demande",
            1.5,
          ),
        ],
      },
      {
        numero: 2,
        attendus: [
          a(
            "À 2,5 m (jusqu'à 3,0 m) avec un centre de gravité à 600 mm : capacité 1 400 kg, donc oui pour 1 200 kg",
            1,
          ),
          a("À 4,2 m (de 3,0 à 4,5 m) avec 600 mm : capacité 1 000 kg, donc non pour 1 200 kg", 1),
          a(
            "CACES (R489 pour les chariots) et autorisation de conduite délivrée par l'employeur",
            1,
          ),
          a("Respecter la plaque de charge, circuler charge basse, personne sous la charge", 1),
        ],
      },
      {
        numero: 3,
        attendus: [
          a(
            "Extincteur à eau sur une armoire électrique : le remplacer par un extincteur à dioxyde de carbone (CO2)",
            1.5,
          ),
          a(
            "Palettes lourdes en hauteur : ranger les charges les plus lourdes en bas du palettier, les plus légères en haut",
            1.5,
          ),
          a(
            "Produits stockés sans consigne : séparer les produits selon leur nature et leur FDS, mettre en place un affichage et des bacs de rétention",
            1,
          ),
        ],
      },
      {
        numero: 4,
        calculs: [
          "2022-2023 : (21 160 − 18 400) ÷ 18 400 = 15,0 %.",
          "2023-2024 : (19 044 − 21 160) ÷ 21 160 = −10,0 %.",
          "2024-2025 : (22 853 − 19 044) ÷ 19 044 = 20,0 %.",
        ],
        attendus: [
          a("Taux 2022-2023 : +15,0 %", 1),
          a("Taux 2023-2024 : −10,0 %", 1),
          a("Taux 2024-2025 : +20,0 %", 1),
        ],
      },
      {
        numero: 5,
        attendus: [
          a("En-tête et objet précis", 0.5),
          a(
            "Constat chiffré : sel à 60 sacs pour un seuil de 80, bidons d'huile à 18 pour un seuil de 20",
            1,
          ),
          a(
            "Proposition de commande, compte tenu des délais de livraison et de la saison de viabilité hivernale",
            1,
          ),
          a("Conclusion et présentation soignée", 0.5),
        ],
      },
    ],
    conseils: [
      "Un stock se calcule : stock initial + entrées − sorties.",
      "La plaque de charge se lit selon la hauteur de levée et la distance du centre de gravité.",
      "Pour une armoire électrique, pensez extincteur à CO2.",
    ],
  },
  {
    id: "cas-atsem-petite-section",
    specialite: "atsem",
    epreuve:
      "Série de 3 à 5 questions à réponses courtes · 2 heures · coefficient 1 à l'épreuve réelle (concours interne et 3e concours)",
    titre: "Une journée en petite section : organisation, PAI, hygiène et sieste",
    resume:
      "Lecture d'un planning et calculs simples, mise en œuvre d'un PAI, gestes d'hygiène, accompagnement d'un enfant qui refuse la sieste.",
    contexte: [
      "Vous êtes ATSEM dans une classe de petite section de 24 élèves à l'école maternelle Les Lilas, avec Mme Durand, enseignante.",
      "Le dossier comprend le planning de la journée, un extrait du projet d'accueil individualisé d'Inès, la consigne de l'enseignante pour la sieste et une demande d'un parent. Répondez de façon brève, en listant ou sous forme de tableaux si besoin.",
    ],
    documents: [
      {
        titre: "Document 1 : planning de la journée en petite section",
        tableau: {
          entetes: ["Horaires", "Temps"],
          lignes: [
            ["8 h 20 – 8 h 50", "Accueil des enfants et des familles"],
            ["8 h 50 – 9 h 20", "Regroupement : rituels, langage"],
            ["9 h 20 – 10 h 15", "Ateliers (graphisme, manipulation)"],
            ["10 h 15 – 10 h 30", "Récréation"],
            ["10 h 30 – 11 h 30", "Ateliers (motricité, jeux symboliques)"],
            ["11 h 30 – 13 h 30", "Pause méridienne : repas puis temps calme"],
            ["13 h 30 – 15 h 30", "Sieste"],
            ["15 h 30 – 16 h 30", "Réveil échelonné, goûter, jeux, départ des enfants"],
          ],
        },
      },
      {
        titre: "Document 2 : extrait du PAI d'Inès",
        tableau: {
          entetes: ["Rubrique", "Contenu"],
          lignes: [
            ["Allergie", "Allergie sévère aux œufs"],
            [
              "Signes d'alerte",
              "Plaques rouges, gonflement du visage, difficulté à respirer, malaise",
            ],
            [
              "Conduite à tenir",
              "Appeler le 15, appliquer le protocole du PAI, prévenir la directrice et les parents",
            ],
            ["Restauration", "Repas sans œuf, vérification systématique de l'étiquetage"],
          ],
        },
      },
      {
        titre: "Document 3 : demande d'un parent",
        paragraphes: [
          "Le papa de Noé propose d'apporter, à 15 h 45, un gâteau fait maison pour l'anniversaire de son fils. Il précise : « Il n'y a presque pas d'œufs dedans. »",
        ],
      },
      {
        titre: "Document 4 : consigne de l'enseignante pour la sieste",
        points: [
          "Chaque enfant dort avec son drap et sa couverture marqués à son nom.",
          "Les enfants qui ne dorment pas reçoivent un livre ou un jeu calme dans un coin de la pièce.",
          "Une adulte reste toujours dans le dortoir.",
        ],
      },
    ],
    questions: [
      {
        numero: 1,
        intitule:
          "À l'aide du document 1, calculez la durée totale des ateliers du matin, puis la part qu'ils représentent dans le temps de présence des enfants le matin (8 h 20 – 11 h 30), en pourcentage arrondi à l'unité. Citez ensuite trois tâches de l'ATSEM avant l'arrivée des enfants.",
        points: 5,
      },
      {
        numero: 2,
        intitule:
          "Que faites-vous face à la proposition du papa de Noé ? Justifiez. Que fait l'ATSEM si Inès présente des plaques rouges et un gonflement du visage après le goûter ?",
        points: 6,
      },
      {
        numero: 3,
        intitule:
          "Présentez sous forme de tableau quatre moments où l'on fait laver les mains des enfants, et pour chacun un geste ou une précaution à respecter.",
        points: 4,
      },
      {
        numero: 4,
        intitule:
          "Pendant la sieste, Lila, 3 ans, refuse de rester couchée et pleure. Décrivez votre attitude, puis expliquez ce que vous dites à Mme Durand en fin de sieste.",
        points: 5,
      },
    ],
    corrige: [
      {
        numero: 1,
        calculs: [
          "Ateliers du matin : 9 h 20 – 10 h 15 = 55 min ; 10 h 30 – 11 h 30 = 60 min ; total 115 min, soit 1 h 55.",
          "Temps de présence du matin : 8 h 20 – 11 h 30 = 3 h 10 = 190 min.",
          "Part : 115 ÷ 190 = 0,605, soit environ 61 %.",
        ],
        attendus: [
          a("Durée des ateliers du matin : 115 minutes (1 h 55)", 1.5),
          a("Temps de présence du matin : 190 minutes", 0.5),
          a("Pourcentage : environ 61 %", 1),
          a(
            "Trois tâches avant l'arrivée des enfants : aérer et préparer la salle, nettoyer ou vérifier les sanitaires, préparer le matériel des ateliers, installer les espaces, vérifier les PAI et la trousse d'urgence (3 tâches cohérentes)",
            2,
          ),
        ],
      },
      {
        numero: 2,
        attendus: [
          a(
            "Ne pas accepter ni distribuer le gâteau en l'état : une allergie sévère aux œufs, donc le PAI exige un aliment conforme ; « presque pas d'œufs » ne suffit pas",
            2,
          ),
          a(
            "Informer l'enseignante ou la directrice et proposer une alternative : gâteau sans œuf avec étiquetage vérifiable, ou un goûter de la collectivité ; remercier le parent sans le brusquer",
            1.5,
          ),
          a(
            "Réaction allergique : rester auprès d'Inès, appliquer le protocole du PAI, appeler le 15",
            1.5,
          ),
          a("Prévenir la directrice et les parents, remettre la trousse d'urgence aux secours", 1),
        ],
      },
      {
        numero: 3,
        attendus: [
          a("Avant le repas : savon, rinçage, séchage avec un essuie-mains à usage unique", 1),
          a("Après être passé aux toilettes : surveiller que l'enfant se lave bien les mains", 1),
          a("Après s'être mouché : jeter le mouchoir à la poubelle puis se laver les mains", 1),
          a(
            "Après une activité salissante ou la récréation : aider l'enfant sans faire à sa place",
            1,
          ),
        ],
      },
      {
        numero: 4,
        attendus: [
          a("Rassurer Lila calmement, la rejoindre près de son lit sans élever la voix", 1.5),
          a(
            "Respecter son rythme : lui proposer un livre ou un jeu calme dans le coin prévu, comme la consigne de l'enseignante le permet",
            1.5,
          ),
          a(
            "Ne pas la gronder, ne pas la forcer, rester dans le dortoir et garder les autres enfants endormis sous surveillance",
            1,
          ),
          a(
            "Informer Mme Durand de ce qui s'est passé (réaction de l'enfant, durée), en restant factuel(le)",
            1,
          ),
        ],
      },
    ],
    conseils: [
      "Lisez d'abord toutes les questions, puis repérez dans les documents les informations utiles.",
      "Répondez par des phrases courtes ou des listes de 10 à 15 lignes au maximum.",
      "Justifiez vos réponses avec vos connaissances : PAI, hygiène, posture professionnelle.",
    ],
  },
  {
    id: "cas-atsem-cantine-periscolaire",
    specialite: "atsem",
    epreuve:
      "Série de 3 à 5 questions à réponses courtes · 2 heures · coefficient 1 à l'épreuve réelle (concours interne et 3e concours)",
    titre: "Cantine, conflit et temps périscolaire du soir",
    resume:
      "Calculs de matériel, dosage d'un produit d'entretien, accompagnement d'un conflit entre enfants, réaction aux situations de repas.",
    contexte: [
      "Vous êtes ATSEM à l'école maternelle Les Tilleuls. Vous surveillez la cantine à midi, puis vous animez l'accueil périscolaire de 16 h 30 à 18 h 00 avec deux collègues.",
      "Le dossier comprend l'organisation du périscolaire, la fiche d'un produit d'entretien, une fiche sur la résolution des conflits et des situations vécues au repas.",
    ],
    documents: [
      {
        titre: "Document 1 : organisation du temps périscolaire",
        points: [
          "36 enfants de petite et moyenne section sont inscrits ce soir, répartis en 3 groupes de même effectif.",
          "Activité du jour : peinture sur grandes feuilles. Une feuille A3 pour 2 enfants, et 5 mL de peinture par enfant.",
          "Les photos de l'activité peuvent être publiées sur le blog de l'accueil périscolaire.",
        ],
      },
      {
        titre: "Document 2 : fiche du produit d'entretien pour sols",
        tableau: {
          entetes: ["Rubrique", "Information"],
          lignes: [
            ["Dosage", "2,5 % dans l'eau, c'est-à-dire 2,5 mL de produit pour 100 mL de solution"],
            [
              "Rangement",
              "Hors de portée des enfants, flacon d'origine ou flacon pulvérisateur dédié et étiqueté",
            ],
            ["Précaution", "Ne pas mélanger avec un autre produit ; porter des gants"],
          ],
        },
      },
      {
        titre: "Document 3 : les étapes pour résoudre un conflit entre enfants",
        points: [
          "1. Désamorcer et permettre un retour au calme.",
          "2. Laisser chacun s'expliquer et exprimer ses émotions.",
          "3. Chercher une solution ensemble.",
          "4. Appliquer la solution.",
          "5. Prévenir le prochain conflit.",
        ],
      },
      {
        titre: "Document 4 : situations vécues pendant le repas",
        points: [
          "Situation A : Maëlle, 4 ans, refuse de toucher aux haricots verts qu'elle ne connaît pas.",
          "Situation B : Tom s'étouffe soudainement en mangeant et tousse sans réussir à reprendre son souffle.",
          "Situation C : Un agent de restauration lance à un enfant : « Tu es nul, tu ne sais même pas tenir ta fourchette. »",
        ],
      },
    ],
    questions: [
      {
        numero: 1,
        intitule:
          "Calculez le nombre d'enfants par groupe, le nombre de feuilles A3 nécessaires pour toute l'activité, et la quantité totale de peinture. Que faites-vous des photos de l'activité ?",
        points: 5,
      },
      {
        numero: 2,
        intitule:
          "Calculez la quantité de produit nécessaire pour préparer 8 litres de solution, puis 12 litres. Rappelez deux règles de rangement et deux précautions d'utilisation.",
        points: 5,
      },
      {
        numero: 3,
        intitule:
          "Deux enfants de moyenne section se disputent un camion et l'un d'eux en pousse un autre. Indiquez quatre attitudes à adopter, puis proposez pour chaque étape du document 3 une formulation adaptée, comme sur cet exemple : « Je vois que vous êtes très en colère. Nous allons d'abord nous calmer. »",
        points: 5,
      },
      {
        numero: 4,
        intitule:
          "Pour chacune des situations A, B et C du document 4, indiquez votre réaction professionnelle.",
        points: 5,
      },
    ],
    corrige: [
      {
        numero: 1,
        calculs: [
          "Enfants par groupe : 36 ÷ 3 = 12.",
          "Feuilles A3 : 36 ÷ 2 = 18 feuilles pour toute l'activité (6 par groupe).",
          "Peinture : 36 × 5 mL = 180 mL.",
        ],
        attendus: [
          a("12 enfants par groupe", 1),
          a("18 feuilles A3 (6 par groupe)", 1.5),
          a("180 mL de peinture", 1),
          a(
            "Photos : ne publier que celles d'enfants dont les familles ont signé une autorisation de droit à l'image ; flouter ou écarter les autres",
            1.5,
          ),
        ],
      },
      {
        numero: 2,
        calculs: [
          "8 litres = 8 000 mL ; 2,5 % de 8 000 = 200 mL.",
          "12 litres = 12 000 mL ; 2,5 % de 12 000 = 300 mL.",
        ],
        attendus: [
          a("200 mL de produit pour 8 litres", 1.5),
          a("300 mL de produit pour 12 litres", 1.5),
          a(
            "Deux règles de rangement : hors de portée des enfants, flacon d'origine ou flacon dédié étiqueté",
            1,
          ),
          a(
            "Deux précautions : ne pas mélanger les produits, porter des gants, respecter le dosage",
            1,
          ),
        ],
      },
      {
        numero: 3,
        attendus: [
          a(
            "Quatre attitudes : intervenir car il y a violence, rester calme, séparer les enfants, rester impartial, ne pas punir collectivement, écouter sans juger",
            1,
          ),
          a(
            "Formulation pour permettre à chacun de s'expliquer : « Dis-moi ce qui s'est passé, puis j'écouterai Adam. »",
            1,
          ),
          a(
            "Formulation pour chercher une solution : « Comment peut-on faire pour que vous jouiez tous les deux avec le camion ? »",
            1,
          ),
          a(
            "Formulation pour appliquer la solution : « Vous avez décidé de jouer chacun votre tour : on essaie tout de suite. »",
            1,
          ),
          a(
            "Formulation pour prévenir le prochain conflit : « La prochaine fois, on pourra demander ou prendre un deuxième camion. »",
            1,
          ),
        ],
      },
      {
        numero: 4,
        attendus: [
          a(
            "Situation A : encourager à goûter sans forcer, présenter l'aliment, proposer une petite quantité, ne pas obliger à finir l'assiette",
            1.5,
          ),
          a(
            "Situation B : alerter les secours (15, 18 ou 112) et pratiquer les gestes adaptés si l'on est formé ; ne pas lui donner à boire, ne pas le laisser seul",
            2,
          ),
          a(
            "Situation C : intervenir calmement, rappeler le respect dû aux enfants, valoriser l'enfant et informer sa hiérarchie",
            1.5,
          ),
        ],
      },
    ],
    conseils: [
      "Détaillez vos calculs : ils sont notés autant que le résultat.",
      "Pour une situation, structurez : sécuriser, agir dans son rôle, rendre compte.",
      "Reprenez les formulations du document pour rédiger des phrases adaptées aux enfants.",
    ],
  },
];

export function getCasPratique(id: string | undefined): CasPratique | undefined {
  return casPratiques.find((c) => c.id === id);
}

export function casDeSpecialite(specialite: SpecialiteId | "atsem"): CasPratique[] {
  return casPratiques.filter((c) => c.specialite === specialite);
}
