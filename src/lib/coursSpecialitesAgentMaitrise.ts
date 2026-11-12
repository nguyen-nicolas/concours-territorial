import type { CoursAM } from "./coursAgentMaitrise";

/**
 * Cours des spécialités du concours d'agent de maîtrise autres que le bâtiment-VRD.
 * Rédigés à partir des notes de cadrage et des annales publiques des centres de gestion.
 * Les valeurs réglementaires sont des repères de préparation : les textes en vigueur font foi.
 */

export const coursSpecialites: CoursAM[] = [
  // ───────────────────────── Environnement, hygiène ─────────────────────────
  {
    id: "eh-hygiene-locaux",
    partie: "specialite",
    specialite: "environnement-hygiene",
    title: "Hygiène des locaux : produits, dosages et gestes",
    resume:
      "Fiche de données de sécurité et fiche technique, détergent et désinfectant, pH, dosage des produits, nettoyage par pré-imprégnation, troubles musculo-squelettiques.",
    duree: "50 minutes",
    objectifs: [
      "Distinguer fiche de données de sécurité, fiche technique et étiquette",
      "Différencier un détergent d'un désinfectant et lire un pH",
      "Calculer un dosage et une dilution",
      "Prévenir les troubles musculo-squelettiques et les risques chimiques",
    ],
    sections: [
      {
        titre: "Fiche de données de sécurité, fiche technique, étiquette",
        tableau: {
          entetes: ["Document", "Contenu"],
          lignes: [
            [
              "FDS (fiche de données de sécurité)",
              "Remise par le fournisseur. Dangers du produit, premiers secours, lutte contre l'incendie, manipulation et stockage, protection individuelle, élimination",
            ],
            [
              "FT (fiche technique)",
              "Propriétés du produit, domaine d'emploi, mode d'emploi, concentrations d'utilisation",
            ],
            [
              "Étiquette",
              "Nom du produit, pictogrammes de danger, mentions de danger, conseils de prudence, coordonnées du fournisseur",
            ],
          ],
        },
        paragraphes: [
          "L'encadrant s'assure que chaque produit utilisé par son équipe est accompagné de sa FDS, accessible aux agents.",
        ],
      },
      {
        titre: "Détergent, désinfectant et pH",
        points: [
          "Un détergent nettoie : il décolle et élimine les salissures et les graisses.",
          "Un désinfectant détruit ou inactive les micro-organismes (bactéries, virus, champignons) sur une surface déjà propre. On nettoie d'abord, on désinfecte ensuite.",
          "Le pH mesure l'acidité d'une solution, sur une échelle de 0 à 14 : inférieur à 7, acide ; égal à 7, neutre ; supérieur à 7, basique (alcalin). Un détergent de pH 13 est donc fortement basique.",
          "Les produits acides détartrent ; les produits basiques dégraissent.",
          "Une solution diluée voit son pH se rapprocher de 7 : le pH d'un produit de pH 13 dilué dans de l'eau est inférieur à 13.",
        ],
        reperes: [
          "Ne jamais mélanger deux produits : l'eau de Javel mélangée à un acide dégage du chlore toxique",
        ],
      },
      {
        titre: "Dosage et dilution",
        paragraphes: [
          "Les calculs de dosage sont un classique des annales : quantité de produit = volume de solution × concentration.",
        ],
        tableau: {
          entetes: ["Salissure du sol", "Concentration", "Pour 10 litres de solution"],
          lignes: [
            ["Peu encrassé", "2,5 mL par litre", "25 mL"],
            ["Moyennement encrassé", "5 mL par litre", "50 mL"],
            ["Fortement encrassé", "7,5 mL par litre", "75 mL"],
          ],
        },
      },
      {
        titre: "Méthode par pré-imprégnation et troubles musculo-squelettiques",
        points: [
          "TMS : troubles musculo-squelettiques. Ils touchent muscles, tendons et articulations, à cause de gestes répétitifs, de postures contraignantes et d'efforts.",
          "Pré-imprégnation : les bandeaux sont imprégnés de la solution à l'avance, dans un bac, puis utilisés un par un.",
          "Avantages : plus de seau à porter ni d'essorage, donc moins de TMS ; dosage maîtrisé et moindre consommation d'eau et de produit ; un bandeau propre à chaque pièce, donc une meilleure hygiène.",
          "Principes du nettoyage : du plus propre au plus sale, du haut vers le bas, avec un code couleur des matériels selon les zones.",
        ],
      },
      {
        titre: "Les voies de pénétration des produits chimiques",
        points: [
          "Voie cutanée : par contact avec la peau.",
          "Voie respiratoire : par inhalation de vapeurs, d'aérosols ou de poussières.",
          "Voie digestive : par ingestion, par exemple en mangeant avec des mains souillées.",
          "Les projections dans les yeux sont aussi un danger : lunettes et gants adaptés selon la FDS.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Un produit s'utilise à 2,5 mL par litre sur un sol peu encrassé. Quelle quantité pour 8 litres de solution ?",
        etapes: ["Quantité = volume × concentration.", "8 × 2,5 = 20 mL."],
        resultat: "Il faut 20 mL de produit.",
      },
      {
        enonce:
          "Même produit, à 7,5 mL par litre sur un sol fortement encrassé. Quelle quantité pour 10 litres ?",
        etapes: ["10 × 7,5 = 75 mL."],
        resultat: "Il faut 75 mL de produit.",
      },
    ],
    aRetenir: [
      "La FDS dit tout sur les dangers ; la fiche technique, comment bien utiliser.",
      "On nettoie, puis on désinfecte.",
      "pH inférieur à 7 : acide ; supérieur à 7 : basique.",
      "La pré-imprégnation réduit les TMS et améliore l'hygiène.",
    ],
    pieges: [
      "Mélanger des produits d'entretien différents.",
      "Confondre détergent et désinfectant.",
      "Dépasser la concentration indiquée : ce n'est pas plus efficace, mais plus dangereux et plus coûteux.",
      "Oublier l'unité (mL, litres) dans un calcul de dosage.",
    ],
    quizThemeId: "am-eh",
  },
  {
    id: "eh-prevention",
    partie: "specialite",
    specialite: "environnement-hygiene",
    title: "Prévention des risques dans les métiers de l'hygiène et de l'environnement",
    resume:
      "Obligations de l'employeur et de l'agent, DUERP, risques chimique, biologique, de manutention et d'agression, EPI et EPC.",
    duree: "40 minutes",
    objectifs: [
      "Citer les obligations de l'employeur et celles de l'agent",
      "Expliquer à quoi sert le DUERP et quand le mettre à jour",
      "Associer un risque à une mesure de prévention",
      "Distinguer EPI et EPC",
    ],
    sections: [
      {
        titre: "Obligations de l'employeur et de l'agent",
        tableau: {
          entetes: ["Employeur (autorité territoriale)", "Agent"],
          lignes: [
            [
              "Évaluer les risques et tenir à jour le DUERP",
              "Prendre soin de sa sécurité et de celle des autres",
            ],
            [
              "Fournir gratuitement des EPI adaptés, en bon état",
              "Porter les EPI fournis et respecter les consignes",
            ],
            [
              "Informer et former les agents aux risques de leur poste",
              "Signaler toute situation dangereuse (droit d'alerte)",
            ],
            [
              "Organiser la prévention et le suivi médical",
              "Participer aux formations de sécurité",
            ],
          ],
        },
      },
      {
        titre: "Le DUERP",
        points: [
          "DUERP : document unique d'évaluation des risques professionnels. Il recense, pour chaque unité de travail, les risques et les actions de prévention.",
          "Il est mis à jour au moins une fois par an (collectivités d'au moins 11 agents), lors de tout aménagement important des conditions de travail, et quand une information nouvelle sur un risque est connue.",
          "Un accident grave, l'arrivée d'un nouveau produit ou d'une nouvelle machine sont des situations qui imposent aussi de revoir le document.",
        ],
      },
      {
        titre: "Risques et mesures de prévention",
        tableau: {
          entetes: ["Risque", "Situation de travail", "Mesure de prévention"],
          lignes: [
            [
              "Risque chimique",
              "Manipulation de produits d'entretien : brûlure de l'épiderme",
              "Port des EPI adaptés (gants, lunettes), respect des dosages, lecture de la FDS",
            ],
            [
              "Port de charges lourdes",
              "Manutention de sacs, de bacs, de mobilier",
              "Aides à la manutention (chariot, diable), formation aux gestes et postures, travail à deux",
            ],
            [
              "Agression externe",
              "Contact avec des usagers mécontents ou agressifs",
              "Procédure d'alerte, travail en binôme, formation à la gestion des conflits",
            ],
            [
              "Exposition aux virus et contaminations",
              "Nettoyage de sanitaires, gestion de déchets",
              "Hygiène des mains, gants, vêtements de travail, gestion des déchets selon les consignes",
            ],
          ],
        },
      },
      {
        titre: "EPI et EPC",
        points: [
          "EPI : équipement de protection individuelle, porté par l'agent (gants, lunettes, masque, chaussures, vêtement haute visibilité).",
          "EPC : équipement de protection collective, qui protège tous les agents présents (garde-corps, ventilation, hotte, barrières).",
          "La protection collective est prioritaire sur la protection individuelle.",
        ],
      },
    ],
    aRetenir: [
      "L'employeur évalue, fournit, forme ; l'agent applique et alerte.",
      "Le DUERP se met à jour au moins une fois par an et à chaque changement important.",
      "Protection collective d'abord, EPI en complément.",
    ],
    pieges: [
      "Croire que le DUERP est rédigé une fois pour toutes.",
      "Faire peser sur l'agent seul une sécurité qui relève de l'employeur.",
      "Confondre EPI (individuel) et EPC (collectif).",
    ],
    quizThemeId: "am-eh",
  },
  {
    id: "eh-eau-dechets",
    partie: "specialite",
    specialite: "environnement-hygiene",
    title: "Eau, piscines, déchets et funéraire",
    resume:
      "Bac à graisses, chauffage et entretien des piscines, volumes et temps de remplissage, tri et valorisation des déchets, notions de funéraire.",
    duree: "45 minutes",
    objectifs: [
      "Expliquer le rôle et le principe d'un bac à graisses",
      "Citer les modes de chauffage et les produits d'une piscine",
      "Calculer un volume et un temps de remplissage",
      "Distinguer tri, recyclage et valorisation des déchets",
    ],
    sections: [
      {
        titre: "Le bac à graisses",
        points: [
          "Rôle : retenir les graisses et huiles des eaux usées de cuisine, pour éviter de colmater les canalisations et de polluer le réseau d'assainissement et la station d'épuration.",
          "Principe : les graisses, plus légères que l'eau, remontent et flottent en surface ; les matières lourdes se déposent au fond ; l'eau débarrassée de ses graisses sort par le milieu. C'est une séparation par différence de densité.",
          "Il doit être vidangé et nettoyé régulièrement, avec évacuation des graisses par une filière agréée.",
        ],
      },
      {
        titre: "Les piscines",
        points: [
          "Modes de chauffage : pompe à chaleur, chaudière (gaz ou fioul), échangeur sur un réseau de chaleur, panneaux solaires, réchauffeur électrique.",
          "Produits d'entretien : chlore (désinfectant), correcteurs de pH (pH moins, pH plus), floculant ou clarifiant, anti-algues.",
          "Volume d'un bassin : longueur × largeur × profondeur moyenne. Temps de remplissage : volume ÷ débit.",
        ],
      },
      {
        titre: "Les déchets",
        points: [
          "Tri : séparer les déchets par catégories pour les orienter vers la bonne filière.",
          "Recyclage : transformer un déchet en nouvelle matière première.",
          "Valorisation : de matière (recyclage), organique (compostage, méthanisation) ou énergétique (incinération avec récupération de chaleur ou d'électricité).",
          "Logos : le point vert indique une contribution financière à la valorisation de l'emballage ; le Triman signale une consigne de tri ; le ruban de Möbius indique un produit recyclable.",
        ],
      },
      {
        titre: "Funéraire",
        points: [
          "Le cercueil est obligatoire en France, pour l'inhumation comme pour la crémation.",
          "Les deux modes d'obsèques sont l'inhumation et la crémation.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Un bassin de 25 m × 8 m, de profondeur moyenne 1,75 m, se remplit avec un débit de 25 litres en 8 secondes. Combien de temps pour le remplir ?",
        etapes: [
          "Volume : 25 × 8 × 1,75 = 350 m³ = 350 000 litres.",
          "Débit : 25 ÷ 8 = 3,125 litres par seconde.",
          "Durée : 350 000 ÷ 3,125 = 112 000 secondes.",
          "112 000 s ÷ 3 600 = 31,11 h, soit 31 h 6 min 40 s.",
        ],
        resultat: "Le remplissage dure environ 31 heures 7 minutes.",
      },
    ],
    aRetenir: [
      "Bac à graisses : les graisses flottent, l'eau claire sort au milieu.",
      "Volume = longueur × largeur × profondeur ; durée = volume ÷ débit.",
      "Tri, recyclage et valorisation sont trois notions différentes.",
      "Obsèques : inhumation ou crémation, dans un cercueil.",
    ],
    pieges: [
      "Oublier de convertir les m³ en litres avant de diviser par un débit en litres par seconde.",
      "Confondre recyclage (nouvelle matière) et valorisation énergétique (production d'énergie).",
      "Confondre durée en secondes et durée en heures et minutes.",
    ],
    quizThemeId: "am-eh",
  },
  // ───────────────────────── Espaces naturels, espaces verts ─────────────────────────
  {
    id: "ev-vegetaux-biodiversite",
    partie: "specialite",
    specialite: "espaces-verts",
    title: "Végétaux, arbres et biodiversité",
    resume:
      "Vocabulaire de l'arbre, plantes à risque ou envahissantes, gestion de la jussie, tonte et biodiversité, protection des arbres, compostage, mycorhize.",
    duree: "55 minutes",
    objectifs: [
      "Employer le vocabulaire de l'arbre et du milieu naturel",
      "Reconnaître les catégories de plantes à exclure d'une charte de végétalisation",
      "Citer des précautions pour protéger la biodiversité et les arbres",
      "Expliquer le compostage et la mycorhize",
    ],
    sections: [
      {
        titre: "Le vocabulaire de l'arbre et du milieu",
        tableau: {
          entetes: ["Terme", "Définition"],
          lignes: [
            ["Aubier", "Partie vivante périphérique du bois, qui conduit la sève brute"],
            [
              "Houppier",
              "Partie de l'arbre située au-dessus du tronc : ensemble des branches et du feuillage",
            ],
            ["Forêt équienne", "Forêt dont tous les arbres ont le même âge"],
            [
              "Plante mellifère",
              "Plante dont le nectar et le pollen sont butinés par les abeilles",
            ],
            [
              "Rémanents",
              "Résidus d'une coupe ou d'un abattage : branches, rameaux, cimes laissés sur place",
            ],
            ["Ripisylve", "Végétation boisée qui borde un cours d'eau"],
            ["Mycorhize", "Association entre un champignon du sol et les racines d'une plante"],
          ],
        },
      },
      {
        titre: "Plantes à exclure d'une charte de végétalisation",
        paragraphes: [
          "Les annales demandent de classer des plantes dans des catégories à risque. Repères pour chaque catégorie :",
        ],
        tableau: {
          entetes: ["Catégorie", "Exemples"],
          lignes: [
            ["Exotiques envahissantes", "Berce du Caucase, buddleia (arbre à papillon), herbe de la pampa, jussie, renouée du Japon"],
            ["Épineuses", "Aubépine, berberis"],
            ["À racines traçantes", "Bambous traçants"],
            ["Urticantes ou irritantes", "Berce du Caucase, rue des jardins (sève photosensibilisante)"],
            ["Très toxiques", "Belladone, ricin commun"],
          ],
        },
        points: ["Une même plante peut relever de plusieurs catégories : la berce du Caucase est à la fois envahissante et irritante."],
      },
      {
        titre: "Gérer une plante exotique envahissante : l'exemple de la jussie",
        points: [
          "Contrôle mécanique : arrachage ou faucardage avec du matériel ; inconvénient : les fragments peuvent bouturer et la décomposition des plantes désoxygène le milieu.",
          "Contrôle écologique : modifier le milieu, par exemple planter des arbres le long du cours d'eau pour réduire la lumière ; effet lent.",
          "Contrôle biologique : utiliser un organisme antagoniste de la plante ; risque de déséquilibres écologiques.",
          "Contrôle chimique : pesticides, interdits en milieu aquatique et dommageables pour les écosystèmes.",
        ],
      },
      {
        titre: "Protéger la biodiversité et les arbres",
        points: [
          "Tonte et biodiversité : tonte différenciée avec des zones de refuge non tondues, éviter la période de reproduction, tondre du centre vers l'extérieur pour laisser la faune fuir, hauteur de coupe relevée, vérifier la présence de nids ou de petits animaux.",
          "Arbres et travaux : délimiter un périmètre de protection autour des arbres, protéger les troncs par des planches ou une gaine, ne pas stocker de matériaux ni faire circuler d'engins sur la zone racinaire, éviter les tranchées près des racines, fouiller à la main si besoin.",
        ],
      },
      {
        titre: "Compostage et mycorhize",
        points: [
          "Compostage : alterner déchets verts (humides, riches en azote) et déchets bruns (secs, riches en carbone), aérer en retournant le tas, garder une bonne humidité, couper les gros morceaux, éviter la viande et les produits laitiers.",
          "Mycorhize : symbiose entre champignon et racines. Un plant mycorhizé en pépinière absorbe mieux l'eau et les éléments nutritifs, reprend plus facilement après plantation et résiste mieux aux stress.",
        ],
      },
    ],
    aRetenir: [
      "Houppier : le feuillage et les branches ; aubier : le bois vivant périphérique ; ripisylve : la végétation des berges.",
      "Pesticides de synthèse interdits en milieu aquatique.",
      "Protéger la zone racinaire : ni stockage, ni engins, ni tassement.",
      "Compost : alterner matières humides et sèches, aérer.",
    ],
    pieges: [
      "Confondre rémanents (résidus de coupe) et houppier (cime de l'arbre).",
      "Arracher une plante invasive sans récupérer les fragments : elle se bouture et repart.",
      "Tondre en pleine période de reproduction sans vérifier la présence de nids.",
    ],
    quizThemeId: "am-enev",
  },
  {
    id: "ev-taille-securite",
    partie: "specialite",
    specialite: "espaces-verts",
    title: "Taille, abattage, EPI et sécurité des équipes",
    resume:
      "Consignes de taille, abattage, arbre encroué, habilitations CACES, EPI et DUERP, canicule.",
    duree: "45 minutes",
    objectifs: [
      "Donner des consignes de taille respectueuses de l'arbre et de son écosystème",
      "Connaître les règles de sécurité de l'abattage",
      "Associer CACES et engins",
      "Protéger les équipes en cas de canicule",
    ],
    sections: [
      {
        titre: "Consignes de taille",
        points: [
          "Respecter la période de reproduction de la faune : éviter de tailler au printemps et en début d'été.",
          "Pratiquer des coupes nettes, près du col de la branche, sans blesser le bourrelet cicatriciel.",
          "Proscrire l'étêtage et les tailles drastiques, qui affaiblissent l'arbre et le rendent vulnérable.",
          "Utiliser des outils propres et affûtés, désinfectés entre deux arbres.",
          "Conserver si possible le bois mort sans danger, qui abrite insectes et oiseaux.",
        ],
      },
      {
        titre: "Abattage et arbre encroué",
        paragraphes: [
          "Un arbre encroué est un arbre abattu dont la chute s'est arrêtée dans un autre arbre : situation très dangereuse.",
        ],
        points: [
          "Il est interdit de passer, de travailler ou de rester sous un arbre encroué.",
          "Il est interdit de grimper sur l'arbre encroué ou sur l'arbre d'appui.",
          "On balise la zone et on utilise des moyens adaptés (treuil, tracteur) avec des agents formés.",
        ],
      },
      {
        titre: "Habilitations et EPI",
        tableau: {
          entetes: ["Autorisation de conduite (CACES)", "Engin"],
          lignes: [
            ["R482", "Engins de chantier, dont la mini-pelle"],
            ["R486", "Plateformes élévatrices mobiles de personnes (nacelles)"],
            ["R490", "Grues de chargement"],
          ],
        },
        points: [
          "Le DUERP est le document de référence pour définir les EPI à affecter à un agent selon les missions de sa fiche de poste.",
          "L'autorité territoriale, employeur, en est responsable : elle l'élabore et le met à jour au moins une fois par an.",
          "Elle est aussi responsable de fournir des EPI en bon état ; l'agent signale tout équipement défectueux.",
          "EPI usuels : casque forestier (visière et protections auditives), gants anti-coupures, pantalon et chaussures ou bottes anti-coupure, gilet haute visibilité.",
        ],
      },
      {
        titre: "Travailler en extérieur pendant une canicule",
        points: [
          "Décaler les horaires pour travailler aux heures les plus fraîches.",
          "Prévoir des pauses fréquentes à l'ombre ou au frais.",
          "Mettre de l'eau fraîche à disposition en permanence et inciter à boire régulièrement.",
          "Fournir ou recommander des vêtements adaptés et une protection de la tête ; limiter les efforts les plus pénibles.",
          "Surveiller les signes de malaise et ne laisser personne travailler seul.",
        ],
      },
    ],
    aRetenir: [
      "Taille : coupes nettes, pas d'étêtage, éviter la reproduction de la faune.",
      "Sous un arbre encroué : on ne passe jamais.",
      "R482 mini-pelle, R486 nacelle, R490 grue de chargement.",
      "Le DUERP détermine les EPI ; l'employeur en est responsable.",
    ],
    pieges: [
      "Étêter un arbre pour limiter son volume.",
      "Prendre un raccourci sous un arbre encroué.",
      "Croire que l'agent est responsable du mauvais état de ses EPI.",
    ],
    quizThemeId: "am-enev",
  },
  {
    id: "ev-calculs-organisation",
    partie: "specialite",
    specialite: "espaces-verts",
    title: "Calculs et organisation des chantiers d'espaces verts",
    resume:
      "Pourcentages et évolutions, périmètre et distances de plantation, débit et temps de remplissage, géométrie d'un plateau de camion.",
    duree: "40 minutes",
    objectifs: [
      "Calculer des proportions et un taux d'évolution",
      "Répartir des plantations le long d'un cercle",
      "Calculer un temps de remplissage à partir d'un débit",
      "Utiliser la diagonale d'un rectangle",
    ],
    sections: [
      {
        titre: "Proportions et évolution",
        points: [
          "Nombre d'éléments = effectif total × pourcentage. Pour 200 arbres dont 42,5 % de chênes : 200 × 0,425 = 85 chênes.",
          "Proportion = effectif de la catégorie ÷ effectif total × 100.",
          "Taux d'évolution = (valeur finale − valeur initiale) ÷ valeur initiale × 100. Un résultat négatif est une baisse.",
        ],
        reperes: ["Évolution (%) = (final − initial) ÷ initial × 100"],
      },
      {
        titre: "Cercles, distances et diagonales",
        points: [
          "Circonférence d'un cercle : π × diamètre (ou 2 × π × rayon). On répartit ensuite la distance entre les arbres : circonférence ÷ nombre d'arbres.",
          "Diagonale d'un rectangle : √(longueur² + largeur²). Elle permet de savoir si un objet long tient en diagonale.",
        ],
      },
      {
        titre: "Débit et temps de remplissage",
        points: [
          "Débit = volume ÷ durée. Durée = volume ÷ débit.",
          "Convertir tous les volumes dans la même unité avant de calculer, puis exprimer la durée en heures, minutes et secondes.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Une parcelle compte 200 arbres : 26 douglas, 17 mélèzes, 3 séquoias, 85 chênes, 45 hêtres, 24 châtaigniers. Quelle proportion de conifères ?",
        etapes: ["Conifères : douglas, mélèzes, séquoias : 26 + 17 + 3 = 46.", "46 ÷ 200 = 0,23."],
        resultat: "Les conifères représentent 23 % de la parcelle.",
      },
      {
        enonce:
          "Après une sécheresse, il ne reste que 17 châtaigniers en bonne santé sur 24. Quelle évolution ?",
        etapes: ["(17 − 24) ÷ 24 = −7 ÷ 24 = −0,292."],
        resultat: "Une baisse d'environ 29 %.",
      },
      {
        enonce:
          "Un parterre circulaire de 64 m de diamètre reçoit 30 arbres régulièrement espacés tout autour (π ≈ 3,14). Quel espacement ?",
        etapes: ["Circonférence : 3,14 × 64 = 200,96 m.", "Espacement : 200,96 ÷ 30 = 6,70 m."],
        resultat: "Environ 6,70 m entre deux arbres.",
      },
      {
        enonce:
          "Un plateau de camion mesure 4 m sur 2,3 m. Peut-on y coucher un tronc de 4,55 m en diagonale ?",
        etapes: [
          "Diagonale : √(4² + 2,3²) = √(16 + 5,29) = √21,29 ≈ 4,61 m.",
          "4,61 m est supérieur à 4,55 m.",
        ],
        resultat: "Oui, le tronc tient en diagonale, sans dépasser.",
      },
    ],
    aRetenir: [
      "Une évolution se calcule sur la valeur de départ.",
      "Circonférence = π × diamètre ; espacement = circonférence ÷ nombre d'arbres.",
      "Un objet long tient parfois en diagonale.",
    ],
    pieges: [
      "Calculer une évolution en divisant par la valeur finale.",
      "Utiliser le rayon à la place du diamètre dans la circonférence.",
      "Oublier de justifier : les calculs doivent être détaillés.",
    ],
    quizThemeId: "am-enev",
  },
  // ───────────────────────── Restauration ─────────────────────────
  {
    id: "resto-hygiene-haccp",
    partie: "specialite",
    specialite: "restauration",
    title: "Hygiène alimentaire : HACCP, températures et traçabilité",
    resume:
      "Liaisons chaude et froide, gammes de produits, les 7 principes de l'HACCP, bonnes pratiques d'hygiène, plats témoins et allergènes.",
    duree: "55 minutes",
    objectifs: [
      "Connaître les températures de conservation selon le mode de liaison",
      "Distinguer les cinq gammes de produits alimentaires",
      "Énoncer les 7 principes de la méthode HACCP",
      "Appliquer les bonnes pratiques d'hygiène en cuisine collective",
    ],
    sections: [
      {
        titre: "Les modes de liaison et leurs températures",
        tableau: {
          entetes: ["Type de liaison", "Température avant consommation"],
          lignes: [
            ["Liaison chaude", "Au moins +63 °C"],
            ["Liaison froide", "Entre 0 et +3 °C"],
            ["Surgelé", "−18 °C"],
          ],
        },
        paragraphes: [
          "En liaison chaude, le plat est préparé puis maintenu chaud jusqu'au service. En liaison froide, il est refroidi rapidement après la cuisson, stocké au froid, puis remis en température avant d'être servi. Le refroidissement rapide doit faire passer le plat de +63 °C à +10 °C en moins de 2 heures.",
        ],
      },
      {
        titre: "Les gammes de produits alimentaires",
        tableau: {
          entetes: ["Gamme", "Caractéristiques"],
          lignes: [
            ["1re gamme", "Produits bruts frais, non transformés"],
            ["2e gamme", "Conserves stérilisées (appertisées)"],
            ["3e gamme", "Produits surgelés ou congelés"],
            [
              "4e gamme",
              "Légumes et fruits frais lavés, épluchés, découpés, prêts à l'emploi, conditionnés et réfrigérés",
            ],
            [
              "5e gamme",
              "Produits cuits, conditionnés sous vide ou atmosphère protectrice, réfrigérés, à réchauffer",
            ],
          ],
        },
      },
      {
        titre: "La méthode HACCP en 7 principes",
        points: [
          "1. Analyser les dangers (biologiques, chimiques, physiques).",
          "2. Déterminer les points critiques pour la maîtrise (CCP).",
          "3. Fixer les limites critiques pour chaque point critique (par exemple une température).",
          "4. Mettre en place un système de surveillance de ces points.",
          "5. Définir les actions correctives quand une limite est dépassée.",
          "6. Vérifier que le système fonctionne efficacement.",
          "7. Constituer un dossier et conserver les enregistrements (documentation).",
        ],
      },
      {
        titre: "Bonnes pratiques d'hygiène",
        points: [
          "5M : matière première, matériel, méthode, milieu (locaux), main-d'œuvre : les cinq sources possibles de contamination.",
          "Marche en avant : le circuit des denrées va du sale vers le propre, sans croisement entre produits crus et produits cuits ou prêts à consommer.",
          "Plats témoins : un échantillon de chaque plat servi est conservé au froid (0 à +3 °C), pendant au moins cinq jours, pour mener une enquête en cas d'intoxication.",
          "Traçabilité : conserver les étiquettes et les références des produits pour retrouver un lot en cas de problème.",
          "Allergènes : quatorze allergènes à déclaration obligatoire doivent être signalés aux convives.",
          "Plan de maîtrise sanitaire (PMS) : regroupe les bonnes pratiques d'hygiène, l'HACCP et la traçabilité.",
        ],
      },
    ],
    aRetenir: [
      "Liaison chaude : au moins +63 °C. Liaison froide : 0 à +3 °C. Surgelé : −18 °C.",
      "L'HACCP repose sur 7 principes : dangers, CCP, limites, surveillance, corrections, vérification, documentation.",
      "Marche en avant : jamais de croisement entre cru et cuit.",
      "Plats témoins : au moins cinq jours, au froid.",
    ],
    pieges: [
      "Confondre 4e gamme (crus prêts à l'emploi) et 5e gamme (produits cuits sous vide).",
      "Oublier la documentation et les enregistrements, dernier principe de l'HACCP.",
      "Laisser refroidir lentement un plat : le passage de +63 °C à +10 °C doit durer moins de 2 heures.",
    ],
    quizThemeId: "am-resto",
  },
  {
    id: "resto-reglementation",
    partie: "specialite",
    specialite: "restauration",
    title: "Restauration collective : lois, qualité et nutrition",
    resume:
      "Les lois EGalim et Climat et Résilience, produits de qualité et bio, menu végétarien, gaspillage alimentaire, contenants plastiques, information des convives.",
    duree: "40 minutes",
    objectifs: [
      "Citer les lois qui encadrent la restauration scolaire depuis 2018",
      "Connaître les objectifs de produits de qualité et durables",
      "Expliquer les obligations sur le gaspillage et les contenants plastiques",
    ],
    sections: [
      {
        titre: "Les deux lois emblématiques",
        points: [
          "La loi EGalim du 30 octobre 2018, pour l'équilibre des relations commerciales dans le secteur agricole et alimentaire et une alimentation saine, durable et accessible.",
          "La loi Climat et Résilience de 2021, qui prolonge et renforce certaines de ses mesures, notamment le menu végétarien.",
        ],
      },
      {
        titre: "Produits de qualité, durables et bio",
        points: [
          "Depuis le 1er janvier 2022, les repas servis en restauration collective publique doivent comporter au moins 50 % de produits de qualité et durables, dont au moins 20 % de produits issus de l'agriculture biologique ou en conversion.",
          "Le taux de produits bio est calculé sur la base de la valeur des achats, hors taxes, sur l'année.",
          "Les convives sont informés par un affichage à l'entrée du restaurant de la part des produits de qualité et durables.",
        ],
      },
      {
        titre: "Menu végétarien, gaspillage et plastiques",
        points: [
          "En restauration scolaire, un menu végétarien est proposé au moins une fois par semaine.",
          "Gaspillage alimentaire : diagnostic préalable obligatoire pour la restauration collective et mise en place d'une démarche de lutte, avec un objectif de réduction de 50 % d'ici 2025 par rapport à 2015.",
          "Contenants plastiques : l'interdiction des contenants alimentaires de cuisson, de réchauffage et de service en plastique dans les services de restauration scolaire et d'accueil des jeunes enfants s'applique à compter du 1er janvier 2025 (calendrier particulier pour les petites communes).",
        ],
      },
      {
        titre: "Nutrition et fréquence des plats",
        paragraphes: [
          "La réglementation sur la qualité nutritionnelle de la restauration scolaire fixe des fréquences de présentation, exprimées par série de vingt repas : par exemple, un minimum de crudités ou de fruits frais, de légumes secs ou de féculents, de produits laitiers contenant du calcium, et un plafond pour les entrées ou les desserts gras ou sucrés.",
          "Les fréquences exactes figurent dans le texte en vigueur : ne les apprenez pas de mémoire sans les vérifier.",
        ],
      },
    ],
    aRetenir: [
      "50 % de produits de qualité et durables, dont 20 % de bio, depuis 2022.",
      "Le taux de bio se calcule sur la valeur des achats hors taxes.",
      "Un menu végétarien par semaine en restauration scolaire.",
      "Lutte contre le gaspillage : diagnostic et démarche, objectif de réduction de 50 % d'ici 2025.",
    ],
    pieges: [
      "Calculer le taux de bio sur le nombre de plats ou le poids plutôt que sur la valeur des achats.",
      "Confondre l'objectif de 50 % de produits durables et celui de 20 % de bio.",
      "Citer des seuils réglementaires de mémoire sans vérifier le texte à jour.",
    ],
    quizThemeId: "am-resto",
  },
  {
    id: "resto-calculs-management",
    partie: "specialite",
    specialite: "restauration",
    title: "Fiches techniques, commandes, coûts et management en cuisine",
    resume:
      "Proportionnalité des fiches techniques, quantités à commander, coût de revient d'un dessert, situations de management en cuisine centrale.",
    duree: "45 minutes",
    objectifs: [
      "Adapter une fiche technique au nombre de convives",
      "Déterminer les quantités à commander selon le conditionnement",
      "Calculer le coût de revient par convive",
      "Gérer un conflit entre équipes et un défaut de port d'EPI",
    ],
    sections: [
      {
        titre: "De la fiche technique à la commande",
        points: [
          "On adapte les quantités par proportionnalité : si une fiche est établie pour 50 convives et que 400 sont inscrits, on multiplie chaque quantité par 400 ÷ 50 = 8.",
          "On compare ensuite à l'unité de vente : le nombre d'unités à commander s'arrondit toujours au supérieur.",
          "Coût de revient : somme des (quantité × prix unitaire) pour tous les ingrédients, divisée par le nombre de convives.",
        ],
      },
      {
        titre: "Situation de management : un conflit entre deux équipes",
        points: [
          "Écouter séparément chaque équipe, pour comprendre les faits et les arguments.",
          "Vérifier ce que prévoient les fiches de poste et l'organisation du service.",
          "En parler avec le chef de l'autre équipe pour une réponse commune.",
          "Clarifier la répartition de la tâche par écrit, la faire valider par la hiérarchie et l'expliquer aux deux équipes lors d'une réunion commune.",
          "Assurer un suivi et tracer la décision.",
        ],
      },
      {
        titre: "Situation de management : un agent ne porte pas ses EPI",
        points: [
          "Le recevoir en entretien, calmement, sur la base de faits précis.",
          "Comprendre les causes : EPI inadapté, abîmé, inconfortable, indisponible ? Les corriger si elles sont matérielles.",
          "Rappeler l'obligation et les risques, pour lui et pour l'équipe, ainsi que la responsabilité de l'encadrant.",
          "Prévoir un rappel collectif des consignes et tracer l'entretien ; informer la hiérarchie si le comportement se répète.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Un crumble est prévu pour 400 élèves. La fiche pour 50 élèves demande 3 kg de pommes, 2,5 kg de poires et 0,2 kg de beurre. Beurre vendu en plaquettes de 250 g. Quelles quantités ?",
        etapes: [
          "Coefficient : 400 ÷ 50 = 8.",
          "Pommes : 3 × 8 = 24 kg. Poires : 2,5 × 8 = 20 kg.",
          "Beurre : 0,2 × 8 = 1,6 kg = 1 600 g ; 1 600 ÷ 250 = 6,4, arrondi à 7 plaquettes.",
        ],
        resultat: "24 kg de pommes, 20 kg de poires et 7 plaquettes de beurre.",
      },
      {
        enonce:
          "Pour 50 élèves : 3 kg de pommes à 2,20 €/kg, 2,5 kg de poires à 2,50 €/kg, 0,1 kg de cassonade à 2,10 €/kg, 0,2 kg de sucre semoule à 0,85 €/kg, 0,2 kg de farine à 0,60 €/kg, 0,2 kg d'amandes à 6,50 €/kg, 0,2 kg de beurre à 6,10 €/kg. Quel coût par élève ?",
        etapes: [
          "Pommes 6,60 ; poires 6,25 ; cassonade 0,21 ; sucre 0,17 ; farine 0,12 ; amandes 1,30 ; beurre 1,22.",
          "Total pour 50 élèves : 15,87 €.",
          "Par élève : 15,87 ÷ 50 = 0,3174 €.",
        ],
        resultat: "Environ 0,32 € par élève.",
      },
    ],
    aRetenir: [
      "Une fiche technique s'adapte par proportionnalité.",
      "Une quantité à commander s'arrondit à l'unité de vente supérieure.",
      "En cas de conflit entre équipes : écouter, clarifier, faire valider, tracer.",
      "Face à un défaut d'EPI : comprendre, rappeler, tracer, informer.",
    ],
    pieges: [
      "Arrondir au plus proche ou à l'inférieur une quantité à commander.",
      "Oublier de convertir les grammes et les kilogrammes.",
      "Trancher un conflit entre deux équipes sans en parler à l'autre encadrant.",
    ],
    quizThemeId: "am-resto",
  },
  // ───────────────────────── Hygiène et accueil des enfants ─────────────────────────
  {
    id: "hae-cadre-ecole",
    partie: "specialite",
    specialite: "hygiene-accueil-enfants",
    title: "Le cadre de l'école et de l'accueil : acronymes, PAI et projets éducatifs",
    resume:
      "DDEN, SDJES, PEDT, DASEN, projet pédagogique d'un accueil périscolaire, PAI, programme pHARe, qualités et missions d'un ATSEM.",
    duree: "45 minutes",
    objectifs: [
      "Savoir ce que signifient les acronymes de l'école et de l'accueil périscolaire",
      "Expliquer le contenu d'un projet pédagogique",
      "Analyser un PAI : cas, contenu, durée",
      "Citer des qualités attendues d'un ATSEM",
    ],
    sections: [
      {
        titre: "Les acronymes à connaître",
        tableau: {
          entetes: ["Sigle", "Signification"],
          lignes: [
            [
              "DDEN",
              "Délégué départemental de l'Éducation nationale (bénévole qui visite les écoles)",
            ],
            ["SDJES", "Service départemental à la jeunesse, à l'engagement et aux sports"],
            [
              "PEDT",
              "Projet éducatif territorial : il organise la cohérence des temps scolaires, périscolaires et extrascolaires",
            ],
            ["DASEN", "Directeur académique des services de l'Éducation nationale"],
            ["PAI", "Projet d'accueil individualisé"],
            ["ATSEM", "Agent territorial spécialisé des écoles maternelles"],
          ],
        },
      },
      {
        titre: "Le projet pédagogique d'un temps d'accueil périscolaire",
        paragraphes: [
          "Il décline le projet éducatif de l'organisateur en actions concrètes pour l'équipe d'animation. Il comporte notamment :",
        ],
        points: [
          "les objectifs éducatifs et pédagogiques ;",
          "le public accueilli et les effectifs ;",
          "l'organisation d'une journée type : horaires, activités, temps de repos et de repas ;",
          "l'équipe, ses rôles, les locaux et les moyens ;",
          "les règles de vie et de sécurité ;",
          "les modalités d'évaluation du projet.",
        ],
      },
      {
        titre: "Le PAI",
        points: [
          "Cas : un enfant atteint d'une maladie chronique, d'une allergie, d'une intolérance alimentaire, qui nécessite un traitement ou un régime particulier ou des précautions pendant le temps scolaire.",
          "Contenu : la pathologie, les traitements et leur dosage, la conduite à tenir en cas d'urgence (protocole), les personnes à prévenir, les aménagements ou régimes nécessaires.",
          "Élaboration : avec la famille, le médecin, le directeur et, selon les cas, la collectivité pour le temps périscolaire.",
          "Durée : établi pour l'année scolaire, il est à réviser et à reconduire d'une année à l'autre.",
        ],
      },
      {
        titre: "Harcèlement et qualités d'un ATSEM",
        points: [
          "Le programme pHARe est le programme de lutte contre le harcèlement à l'école : prévention, formation des adultes, traitement des situations.",
          "Qualités d'un ATSEM : patience et bienveillance, sens de l'observation, discrétion professionnelle, autorité calme, esprit d'équipe, rigueur dans l'hygiène et la sécurité.",
          "Accueillir un agent remplaçant : le présenter à l'équipe et à la direction, lui faire visiter les locaux, lui remettre les consignes d'hygiène, de produits et de sécurité, lui préciser les PAI à connaître et son planning.",
        ],
      },
    ],
    aRetenir: [
      "PAI : enfant avec maladie chronique, allergie ou intolérance ; valable pour l'année scolaire.",
      "PEDT : cohérence des temps scolaires, périscolaires et extrascolaires.",
      "pHARe : programme de lutte contre le harcèlement à l'école.",
    ],
    pieges: [
      "Confondre PAI (individuel, santé) et projet pédagogique (collectif, accueil).",
      "Confondre DDEN (délégué bénévole) et DASEN (directeur académique).",
      "Oublier de transmettre au remplaçant les PAI et les consignes de sécurité.",
    ],
    quizThemeId: "am-hae",
  },
  {
    id: "hae-hygiene-produits",
    partie: "specialite",
    specialite: "hygiene-accueil-enfants",
    title: "Hygiène des locaux de l'école : produits, pH et dilution",
    resume: "Détergent et désinfectant, pH, dilution d'un produit, pictogrammes de danger, EPI.",
    duree: "35 minutes",
    objectifs: [
      "Distinguer un détergent d'un désinfectant",
      "Lire un pH et réaliser une dilution",
      "Interpréter des pictogrammes de danger",
      "Choisir des EPI et en donner la fonction",
    ],
    sections: [
      {
        titre: "Détergent, désinfectant, pH",
        points: [
          "Un détergent nettoie : il élimine salissures et graisses. Un désinfectant détruit les micro-organismes sur une surface propre.",
          "Exemple de produit détergent naturel : le savon noir.",
          "pH : mesure de l'acidité d'une solution, de 0 à 14. Inférieur à 7 : acide ; égal à 7 : neutre ; supérieur à 7 : basique. Un pH de 13 est fortement basique.",
          "En diluant un produit basique, son pH diminue et se rapproche de 7.",
        ],
      },
      {
        titre: "Dilution",
        paragraphes: [
          "Une dilution « 1 volume de produit pour 9 volumes d'eau » donne 10 volumes de solution : le produit représente un dixième du total.",
        ],
        reperes: [
          "Volume de produit = volume total ÷ 10 ; volume d'eau = volume total − volume de produit",
        ],
      },
      {
        titre: "Pictogrammes et EPI",
        points: [
          "Pictogrammes : flamme (inflammable), flamme sur un cercle (comburant), bouteille de gaz (gaz sous pression), tête de mort (toxicité aiguë), corrosion (produit corrosif), point d'exclamation (nocif ou irritant), buste à étoile (danger grave pour la santé à long terme), poisson et arbre (danger pour le milieu aquatique).",
          "EPI : équipement de protection individuelle. Exemples : gants (protéger la peau des produits chimiques et des contaminations), lunettes (protéger les yeux des projections), chaussures antidérapantes (éviter les chutes sur sol mouillé).",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Un détergent de pH 13 se dilue à 1 volume de produit pour 9 volumes d'eau. On veut 15 litres de solution. Quels volumes mélanger ?",
        etapes: [
          "Volume total : 1 + 9 = 10 parts.",
          "Détergent : 15 ÷ 10 = 1,5 litre.",
          "Eau : 15 − 1,5 = 13,5 litres.",
        ],
        resultat:
          "1,5 litre de détergent et 13,5 litres d'eau. Le pH de la solution est inférieur à 13.",
      },
    ],
    aRetenir: [
      "Détergent : il nettoie. Désinfectant : il détruit les micro-organismes.",
      "pH supérieur à 7 : basique ; inférieur à 7 : acide.",
      "1 pour 9 donne 10 parts : un dixième de produit.",
    ],
    pieges: [
      "Confondre « 1 pour 9 » et « 1 pour 10 » : la dilution 1/10 correspond à 1 volume de produit et 9 volumes d'eau.",
      "Penser que diluer un produit basique augmente son pH.",
      "Utiliser un désinfectant sur une surface sale.",
    ],
    quizThemeId: "am-hae",
  },
  {
    id: "hae-securite-equipe",
    partie: "specialite",
    specialite: "hygiene-accueil-enfants",
    title: "Sécurité des enfants, accident du travail et encadrement d'une équipe",
    resume:
      "Prévention des intrusions, déclaration d'un accident du travail, organisation du travail d'une équipe d'agents d'entretien et d'ATSEM.",
    duree: "35 minutes",
    objectifs: [
      "Proposer des mesures contre les intrusions dans l'école",
      "Décrire la procédure de déclaration d'un accident du travail",
      "Organiser le travail et accueillir un agent de remplacement",
    ],
    sections: [
      {
        titre: "Prévenir les intrusions hors du temps scolaire",
        points: [
          "Fermer et verrouiller les accès (portail, portes), y compris pendant les temps d'accueil.",
          "Équiper l'entrée d'un interphone ou d'un visiophone et ne laisser entrer que les personnes identifiées.",
          "Tenir un registre des visiteurs et des entrées.",
          "Vérifier chaque soir la fermeture des locaux et signaler toute défaillance.",
          "Connaître et faire connaître les consignes du plan particulier de mise en sûreté (PPMS) et s'y exercer.",
        ],
      },
      {
        titre: "Déclarer un accident du travail",
        paragraphes: [
          "Exemple : un agent d'entretien chute dans un escalier de l'école et se plaint de douleurs intenses au poignet.",
        ],
        tableau: {
          entetes: ["Qui", "Que fait-il ?"],
          lignes: [
            [
              "L'agent",
              "Prévient aussitôt son responsable, fait constater ses blessures par un médecin et transmet le certificat médical",
            ],
            [
              "Le supérieur hiérarchique",
              "Fait donner les premiers secours et appeler les secours si besoin, recueille les circonstances et les témoins, rédige un rapport et déclare l'accident au service des ressources humaines dans les délais prévus",
            ],
            [
              "La collectivité",
              "Instruit la déclaration et analyse l'accident pour prévenir un nouvel événement, avec l'assistant de prévention",
            ],
          ],
        },
      },
      {
        titre: "Organiser le travail d'une équipe",
        points: [
          "Planifier les tâches de l'équipe d'entretien et des ATSEM, en tenant compte de la présence des enfants.",
          "Accueillir un remplaçant : présentation de l'équipe et des locaux, consignes d'hygiène et de sécurité, produits, PAI, planning.",
          "Faire respecter les règles de sécurité : port des EPI, rangement et fermeture à clé des produits, signalisation des sols mouillés.",
          "Rendre compte à la hiérarchie et au service scolaire.",
        ],
      },
    ],
    aRetenir: [
      "Intrusions : accès fermés, interphone, registre des visiteurs, PPMS.",
      "Accident du travail : l'agent prévient et fait constater ; l'encadrant fait secourir, rapporte et déclare.",
      "Un remplaçant reçoit les consignes de sécurité et la liste des PAI dès son arrivée.",
    ],
    pieges: [
      "Laisser un accident sans déclaration écrite.",
      "Ranger les produits d'entretien à portée des enfants.",
      "Ne pas informer le remplaçant des enfants concernés par un PAI.",
    ],
    quizThemeId: "am-hae",
  },
  // ───────────────────────── Logistique et sécurité ─────────────────────────
  {
    id: "log-gestion-stocks",
    partie: "specialite",
    specialite: "logistique-securite",
    title: "Gestion des stocks et vocabulaire de la logistique",
    resume:
      "Flux tendu, gerbage, picking, FIFO et FEFO, rupture de stock, inventaire, code-barres, logigramme et taux d'évolution.",
    duree: "45 minutes",
    objectifs: [
      "Définir les termes de la logistique du magasin",
      "Appliquer les règles FIFO et FEFO",
      "Décrire le circuit d'un matériel : réception, stockage, marquage, livraison",
      "Calculer un taux d'évolution de dépenses",
    ],
    sections: [
      {
        titre: "Le vocabulaire de la logistique",
        tableau: {
          entetes: ["Terme", "Définition"],
          lignes: [
            [
              "Flux tendu",
              "Organisation qui réduit les stocks au minimum en approvisionnant au plus près des besoins",
            ],
            ["Gerbage", "Empilement de charges, par exemple de palettes, les unes sur les autres"],
            [
              "Gestion des stocks",
              "Ensemble des opérations qui permettent de disposer des quantités nécessaires : suivi des entrées et des sorties, inventaire, réapprovisionnement",
            ],
            ["Palettier", "Rayonnage métallique destiné à stocker des palettes"],
            ["Picking", "Préparation de commande : prélèvement des articles dans le stock"],
            [
              "FIFO (premier entré, premier sorti)",
              "Les articles les plus anciens en stock sont sortis en premier",
            ],
            [
              "FEFO (premier périmé, premier sorti)",
              "Les articles dont la date de péremption est la plus proche sont sortis en premier",
            ],
            [
              "Rupture de stock",
              "Situation où un article n'est plus disponible alors qu'il est demandé",
            ],
          ],
        },
      },
      {
        titre: "Inventaire et suivi",
        points: [
          "Un inventaire compare les quantités réelles aux quantités théoriques du logiciel de gestion de stocks.",
          "Le code-barres et la douchette (scanner) permettent d'identifier et de suivre un matériel à chaque étape.",
          "Un logigramme représente graphiquement, étape par étape, le déroulement d'un processus : réception, contrôle, stockage, marquage au code-barres, saisie dans la base de données, livraison sur site.",
        ],
      },
      {
        titre: "Calculer un taux d'évolution",
        points: [
          "Taux d'évolution (%) = (valeur finale − valeur initiale) ÷ valeur initiale × 100.",
          "Un résultat positif est une hausse, un résultat négatif une baisse.",
          "On représente l'évolution de dépenses par un graphique en barres ou en courbe, avec un axe des années et un axe des montants.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Dépenses en consommables informatiques : 25 012 € en 2016, 27 520 € en 2017, 32 824 € en 2018, 31 246 € en 2019, 19 450 € en 2020. Quelles évolutions ?",
        etapes: [
          "2016-2017 : (27 520 − 25 012) ÷ 25 012 = 10,0 %.",
          "2017-2018 : (32 824 − 27 520) ÷ 27 520 = 19,3 %.",
          "2018-2019 : (31 246 − 32 824) ÷ 32 824 = −4,8 %.",
          "2019-2020 : (19 450 − 31 246) ÷ 31 246 = −37,8 %.",
        ],
        resultat: "+10,0 %, +19,3 %, −4,8 % puis −37,8 %.",
      },
    ],
    aRetenir: [
      "FIFO : le plus ancien sort d'abord. FEFO : le plus proche de la péremption sort d'abord.",
      "Flux tendu : stocks minimum, approvisionnement au plus juste.",
      "Un taux d'évolution se calcule par rapport à la valeur de départ.",
    ],
    pieges: [
      "Confondre FIFO (date d'entrée) et FEFO (date de péremption).",
      "Calculer un taux d'évolution sur la valeur finale.",
      "Mélanger le gerbage (empilement) et le stockage en palettier (rayonnage).",
    ],
    quizThemeId: "am-logsec",
  },
  {
    id: "log-manutention-incendie",
    partie: "specialite",
    specialite: "logistique-securite",
    title: "Manutention, chariots élévateurs et sécurité incendie",
    resume:
      "CACES et autorisation de conduite, dépose d'une palette gerbée, plaque de charge, rangement, extincteurs, éclairage de sécurité, établissements recevant du public.",
    duree: "50 minutes",
    objectifs: [
      "Distinguer CACES et autorisation de conduite",
      "Décrire la dépose d'une palette en hauteur avec un chariot élévateur",
      "Lire une plaque de charge et ranger des palettes en sécurité",
      "Choisir un extincteur et connaître les contrôles de sécurité incendie",
    ],
    sections: [
      {
        titre: "CACES et autorisation de conduite",
        points: [
          "CACES : certificat d'aptitude à la conduite en sécurité. Pour les chariots de manutention automoteurs, il s'agit de la recommandation R489.",
          "L'autorisation de conduite est délivrée par l'employeur, en plus du CACES, après vérification de l'aptitude médicale, des connaissances et de la connaissance des lieux et des consignes de sécurité.",
        ],
      },
      {
        titre: "Déposer la palette du haut d'un gerbage",
        points: [
          "Vérifier l'environnement : sol, stabilité du gerbage, absence de personnes dans la zone.",
          "Approcher lentement, mât vertical et fourches basses, perpendiculairement au gerbage.",
          "Lever les fourches à hauteur de la palette, les engager à fond sous la palette.",
          "Soulever légèrement, incliner le mât vers l'arrière, reculer.",
          "Redescendre les fourches en position basse, puis circuler charge basse et déposer la palette.",
          "Personne ne se tient sous la charge ni à proximité.",
        ],
      },
      {
        titre: "Plaque de charge et rangement",
        points: [
          "La plaque de charge du chariot indique la charge maximale admissible en fonction de la hauteur de levée et de la distance du centre de gravité de la charge : plus la charge est haute et son centre de gravité éloigné, plus la charge admissible diminue.",
          "Dans un palettier ou un gerbage, les charges les plus lourdes se placent en bas, les plus légères en haut.",
          "Des produits incompatibles ne se rangent pas ensemble, et les produits dangereux se stockent selon leur FDS.",
        ],
      },
      {
        titre: "Incendie et établissements recevant du public",
        points: [
          "Extincteurs : un contrôle périodique annuel par une personne ou une entreprise compétente ; les blocs autonomes d'éclairage de sécurité sont aussi vérifiés régulièrement.",
          "Extincteur à pression permanente : l'agent extincteur et le gaz propulseur sont dans le même réservoir. Extincteur à pression auxiliaire : une cartouche de gaz séparée met le réservoir en pression quand on l'actionne.",
          "Pour un tableau électrique, on choisit un extincteur à dioxyde de carbone (CO2), adapté aux feux d'origine électrique.",
          "Types d'ERP : N restaurants et débits de boissons ; X établissements sportifs couverts ; R établissements d'éveil, d'enseignement, de formation ; U établissements de soins ; L salles d'audition, de conférences, de réunions, de spectacles ; O hôtels et pensions de famille.",
          "Catégories d'ERP selon l'effectif : 1re catégorie au-delà de 1 500 personnes ; 2e de 701 à 1 500 ; 3e de 301 à 700 ; 4e jusqu'à 300 ; 5e sous le seuil du type d'établissement.",
        ],
      },
    ],
    aRetenir: [
      "CACES + autorisation de conduite de l'employeur.",
      "Plus la charge est haute et éloignée, plus la charge admissible baisse.",
      "Extincteur CO2 pour un tableau électrique.",
      "Charges lourdes en bas, légères en haut.",
    ],
    pieges: [
      "Croire que le CACES suffit pour conduire.",
      "Circuler avec la charge levée.",
      "Dépasser la capacité de la plaque de charge parce que le centre de gravité est « presque » au bon endroit.",
    ],
    quizThemeId: "am-logsec",
  },
  {
    id: "log-informatique-videoprotection",
    partie: "specialite",
    specialite: "logistique-securite",
    title: "Informatique de base, vidéoprotection et calculs de viabilité hivernale",
    resume:
      "Switch, disque SSD, caméra de lecture de plaques, centre de supervision urbain, calculs de quantités de sel et de rentabilité d'un équipement.",
    duree: "40 minutes",
    objectifs: [
      "Expliquer le rôle d'un switch et comparer SSD et disque dur",
      "Définir la lecture de plaques d'immatriculation et le centre de supervision urbain",
      "Calculer des quantités de sel et le seuil de rentabilité d'un équipement",
    ],
    sections: [
      {
        titre: "Informatique de base",
        points: [
          "Switch (commutateur) : équipement réseau qui relie plusieurs appareils d'un même réseau local et achemine les données uniquement vers l'appareil destinataire.",
          "Disque SSD : plus rapide, silencieux, résistant aux chocs, moins gourmand en énergie qu'un disque dur classique. Inconvénients : prix au gigaoctet plus élevé et capacité souvent moindre.",
        ],
      },
      {
        titre: "Vidéoprotection",
        points: [
          "Caméra LAPI (lecture automatique de plaques d'immatriculation) : lit et enregistre les plaques des véhicules, même rapides ; utile pour la sécurité routière, la lutte contre les infractions et les enquêtes.",
          "CSU : centre de supervision urbain, lieu où des opérateurs visionnent les images de vidéoprotection de la commune.",
          "L'accès à un CSU est strictement limité aux personnes habilitées, dans un cadre légal de protection des données.",
        ],
      },
      {
        titre: "Calculs de viabilité hivernale",
        points: [
          "Quantité de sel = longueur × largeur × dose au mètre carré × nombre de tournées.",
          "Économie avec la saumure : pourcentage d'économie × quantité de sel initiale.",
          "Seuil de rentabilité : investissement ÷ économie par tournée, arrondi au supérieur.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Une commune a 55 km de voirie de 8 m de large. On épand 15 g de sel par m² à chaque tournée. Quelle quantité de sel pour 4 tournées ?",
        etapes: [
          "Surface : 55 000 m × 8 m = 440 000 m².",
          "Par tournée : 440 000 × 15 g = 6 600 000 g = 6,6 t.",
          "Pour 4 tournées : 6,6 × 4 = 26,4 t.",
        ],
        resultat: "Il faut 26,4 tonnes de sel pour 4 tournées.",
      },
      {
        enonce:
          "La saumure économise 25 % de sel. Le sel coûte 260 € la tonne. L'équipement coûte 3 320 € (centrale) + 2 × 1 214 € (adaptation de 2 véhicules). En combien de tournées est-il rentabilisé ?",
        etapes: [
          "Économie par tournée : 6,6 t × 25 % = 1,65 t, soit 1,65 × 260 = 429 €.",
          "Investissement : 3 320 + 2 × 1 214 = 5 748 €.",
          "5 748 ÷ 429 = 13,4, arrondi au supérieur.",
        ],
        resultat: "L'équipement est rentabilisé en 14 tournées.",
      },
    ],
    aRetenir: [
      "Un switch envoie les données au bon destinataire, pas à tous.",
      "LAPI : lecture automatique de plaques ; CSU : centre de supervision urbain.",
      "Un seuil de rentabilité s'arrondit au supérieur.",
    ],
    pieges: [
      "Oublier le nombre de véhicules à équiper dans l'investissement.",
      "Confondre l'économie totale sur 4 tournées et l'économie par tournée.",
      "Mélanger grammes et tonnes.",
    ],
    quizThemeId: "am-logsec",
  },
];
