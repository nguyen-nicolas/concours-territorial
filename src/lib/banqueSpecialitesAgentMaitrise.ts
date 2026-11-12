import type { QuizQuestion, QuizTheme } from "./quizData";

/**
 * Questions des spécialités du concours d'agent de maîtrise autres que le bâtiment-VRD.
 * Elles sont adaptées des annales officielles (questionnaires de vérification des connaissances
 * techniques) et des cours du site, reformulées en QCM avec des réponses vérifiées.
 */

const EH = "Tombé aux annales : questionnaire Environnement-hygiène, session 2025 (CDG 63).";
const EV =
  "Tombé aux annales : questionnaire Espaces naturels, espaces verts, session 2025 (CDG 69).";
const RE = "Tombé aux annales : questionnaire Restauration, session 2025 (CDG 38).";
const HA =
  "Tombé aux annales : questionnaire Hygiène et accueil des enfants, session 2025 (CDG 38).";
const LO =
  "Tombé aux annales : questionnaire Logistique et sécurité, session 2021 (centres de gestion).";
const PR = "Notion au programme de la spécialité (voir les cours du site).";

/** Construit une question : la bonne réponse est insérée à la position demandée. */
function Q(
  question: string,
  bonne: string,
  mauvaises: [string, string, string],
  explication: string,
  notes: [string, string, string],
  position = 0,
): QuizQuestion {
  const options = [...mauvaises];
  options.splice(position, 0, bonne);
  const optionNotes: (string | null)[] = [...notes];
  optionNotes.splice(position, 0, null);
  return { question, options, answerIndex: position, explanation: explication, optionNotes };
}

export const themesSpecialitesAgentMaitrise: QuizTheme[] = [
  {
    id: "am-eh",
    title: "Annales : environnement, hygiène",
    description:
      "Produits d'entretien, dosages, prévention des risques, DUERP, bac à graisses, piscines, déchets et funéraire : questions adaptées des annales.",
    level: "Approfondissement",
    questions: [
      Q(
        "Que signifie FDS pour un produit d'entretien ?",
        "Fiche de données de sécurité",
        [
          "Fiche de dosage simplifiée",
          "Fiche de désinfection standard",
          "Facture de dépôt de stock",
        ],
        `Remise par le fabricant, elle précise les dangers, les premiers secours, les précautions de stockage et la protection individuelle. ${EH}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce document n'a rien de comptable.",
        ],
      ),
      Q(
        "Que précise la fiche technique (FT) d'un produit d'entretien ?",
        "Ses propriétés, son domaine d'emploi, son mode d'emploi et ses concentrations d'utilisation",
        [
          "Uniquement ses dangers et les premiers secours",
          "Le prix et les remises du fournisseur",
          "La liste des agents autorisés à l'utiliser",
        ],
        `La FT explique comment bien utiliser le produit ; la FDS décrit ses dangers. ${EH}`,
        [
          "Les dangers et les premiers secours relèvent de la FDS.",
          "Le prix figure sur le devis ou la facture.",
          "Les autorisations relèvent de l'organisation du service.",
        ],
        1,
      ),
      Q(
        "Qu'est-ce qu'un détergent ?",
        "Un produit qui nettoie en éliminant salissures et graisses",
        [
          "Un produit qui détruit tous les micro-organismes",
          "Un produit qui parfume l'air",
          "Un produit qui protège les sols de l'usure",
        ],
        `On nettoie d'abord avec un détergent, puis on désinfecte si nécessaire. ${EH}`,
        [
          "C'est le rôle du désinfectant.",
          "Le parfum n'est pas la fonction d'un détergent.",
          "La protection des sols relève d'autres produits.",
        ],
        2,
      ),
      Q(
        "Quelle est la différence entre un désinfectant et un détergent ?",
        "Le désinfectant détruit les micro-organismes ; le détergent élimine les salissures",
        [
          "Le désinfectant élimine les salissures ; le détergent détruit les micro-organismes",
          "Il n'y a aucune différence",
          "Le désinfectant s'utilise uniquement sur les sols",
        ],
        `Un désinfectant s'applique sur une surface déjà propre. ${EH}`,
        [
          "C'est l'inverse.",
          "Leurs rôles sont distincts.",
          "On désinfecte aussi des surfaces, des sanitaires, du matériel.",
        ],
      ),
      Q(
        "Un détergent a un pH de 13. Est-il acide, neutre ou basique ?",
        "Basique",
        ["Acide", "Neutre", "Cela dépend de la température"],
        `Le pH va de 0 à 14 : inférieur à 7, acide ; égal à 7, neutre ; supérieur à 7, basique. ${HA}`,
        [
          "Un produit acide a un pH inférieur à 7.",
          "Un produit neutre a un pH de 7.",
          "Le pH de 13 est basique quelle que soit la température.",
        ],
      ),
      Q(
        "On dilue dans l'eau un détergent de pH 13. Que devient le pH de la solution obtenue ?",
        "Il diminue : il est inférieur à 13",
        ["Il augmente", "Il reste égal à 13", "Il devient acide dans tous les cas"],
        `La dilution rapproche le pH de 7, sans le rendre acide. ${HA}`,
        [
          "La dilution ne peut pas augmenter le pH d'un produit basique.",
          "L'ajout d'eau modifie le pH.",
          "Un produit basique dilué reste basique, simplement moins fort.",
        ],
        1,
      ),
      Q(
        "Pourquoi ne faut-il jamais mélanger de l'eau de Javel et un produit acide ?",
        "Le mélange dégage du chlore, gaz toxique",
        [
          "Le mélange devient inactif",
          "Le mélange mousse excessivement sans danger",
          "Le mélange colore les sols",
        ],
        `On n'associe jamais deux produits d'entretien différents. ${PR}`,
        [
          "Le danger vient d'un dégagement de gaz toxique.",
          "Le mélange est dangereux pour la santé.",
          "La coloration n'est pas le risque principal.",
        ],
      ),
      Q(
        "Un produit s'utilise à 2,5 mL par litre sur un sol peu encrassé. Quelle quantité faut-il pour 8 litres de solution ?",
        "20 mL",
        ["2,5 mL", "200 mL", "60 mL"],
        `8 × 2,5 = 20 mL. ${EH}`,
        [
          "2,5 mL est la dose pour 1 litre.",
          "Erreur d'un facteur 10.",
          "60 mL = 8 × 7,5 : c'est la dose d'un sol fortement encrassé.",
        ],
      ),
      Q(
        "Le même produit s'utilise à 5 mL par litre sur un sol moyennement encrassé. Quelle quantité pour 5 litres ?",
        "25 mL",
        ["5 mL", "12,5 mL", "37,5 mL"],
        `5 × 5 = 25 mL. ${EH}`,
        [
          "5 mL est la dose pour 1 litre.",
          "12,5 mL = 5 × 2,5 : dose d'un sol peu encrassé.",
          "37,5 mL = 5 × 7,5 : dose d'un sol fortement encrassé.",
        ],
        1,
      ),
      Q(
        "Le même produit s'utilise à 7,5 mL par litre sur un sol fortement encrassé. Quelle quantité pour 10 litres ?",
        "75 mL",
        ["7,5 mL", "25 mL", "50 mL"],
        `10 × 7,5 = 75 mL. ${EH}`,
        [
          "7,5 mL est la dose pour 1 litre.",
          "25 mL = 10 × 2,5 : dose d'un sol peu encrassé.",
          "50 mL = 10 × 5 : dose d'un sol moyennement encrassé.",
        ],
        2,
      ),
      Q(
        "Que signifie TMS ?",
        "Troubles musculo-squelettiques",
        [
          "Techniques de maintenance des sols",
          "Traitement mécanique des surfaces",
          "Test de mesure sanitaire",
        ],
        `Ils touchent muscles, tendons et articulations : gestes répétitifs, postures contraignantes, efforts. ${EH}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
      ),
      Q(
        "Quel est un avantage de la méthode de nettoyage par pré-imprégnation ?",
        "Moins de manutention de seaux et d'essorage, donc moins de TMS",
        [
          "Elle supprime le besoin de produit",
          "Elle permet de nettoyer sans bandeau",
          "Elle augmente le poids à porter",
        ],
        `Elle permet aussi un dosage maîtrisé et un bandeau propre par pièce. ${EH}`,
        [
          "Le produit reste nécessaire.",
          "On utilise des bandeaux pré-imprégnés.",
          "Elle réduit au contraire la manutention.",
        ],
        1,
      ),
      Q(
        "Quelle est une voie de pénétration d'un produit chimique dans l'organisme ?",
        "La voie respiratoire (inhalation)",
        ["La voie auditive", "La voie osseuse", "La voie électrique"],
        `Les trois voies principales : cutanée, respiratoire et digestive. ${EH}`,
        [
          "Ce n'est pas une voie de pénétration de produits chimiques.",
          "Ce n'est pas une voie de pénétration.",
          "Ce n'est pas une voie de pénétration chimique.",
        ],
      ),
      Q(
        "Laquelle de ces obligations incombe à l'employeur en matière de sécurité ?",
        "Évaluer les risques et fournir gratuitement des EPI adaptés",
        [
          "Porter lui-même les EPI de ses agents",
          "Faire payer les EPI aux agents",
          "Laisser chaque agent décider de ses consignes",
        ],
        `L'employeur évalue, forme, fournit les équipements et organise la prévention. ${EH}`,
        [
          "Chaque agent porte ses propres EPI.",
          "Les EPI sont fournis gratuitement.",
          "Les consignes de sécurité sont fixées par l'employeur et l'encadrement.",
        ],
        2,
      ),
      Q(
        "Laquelle de ces obligations incombe à l'agent en matière de sécurité ?",
        "Respecter les consignes et porter les EPI fournis",
        [
          "Évaluer les risques de tout le service",
          "Rédiger le DUERP",
          "Fournir les EPI à ses collègues",
        ],
        `L'agent prend aussi soin de sa sécurité et de celle des autres, et signale les situations dangereuses. ${EH}`,
        [
          "L'évaluation des risques relève de l'employeur.",
          "Le DUERP est sous la responsabilité de l'autorité territoriale.",
          "Les EPI sont fournis par l'employeur.",
        ],
        1,
      ),
      Q(
        "Que signifie DUERP ?",
        "Document unique d'évaluation des risques professionnels",
        [
          "Dossier unique d'entretien des réseaux publics",
          "Diagnostic d'usure des équipements de recyclage",
          "Document unifié d'enregistrement des rapports de prévention",
        ],
        `Il recense, pour chaque unité de travail, les risques et les actions de prévention. ${EH}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
      ),
      Q(
        "Dans quel cas faut-il mettre à jour le DUERP ?",
        "À l'arrivée d'un nouveau produit chimique ou lors d'un aménagement important des conditions de travail",
        [
          "Uniquement lors du départ à la retraite d'un agent",
          "Jamais : il est établi une seule fois",
          "Seulement si un usager le demande",
        ],
        `Il est aussi mis à jour au moins une fois par an dans les collectivités d'au moins 11 agents. ${EH}`,
        [
          "Le départ d'un agent n'est pas un critère de mise à jour.",
          "Le DUERP est un document vivant.",
          "Il ne dépend pas des demandes des usagers.",
        ],
        1,
      ),
      Q(
        "Que signifient les sigles EPI et EPC ?",
        "Équipement de protection individuelle et équipement de protection collective",
        [
          "Équipement de première intervention et équipement de poste de contrôle",
          "Équipement portatif d'inspection et équipement permanent de chantier",
          "Équipement de prévention incendie et équipement de pompage",
        ],
        `La protection collective est prioritaire sur la protection individuelle. ${EH}`,
        [
          "Ce n'est pas la signification des sigles.",
          "Ce n'est pas la signification des sigles.",
          "Ce n'est pas la signification des sigles.",
        ],
        2,
      ),
      Q(
        "Quelle mesure de prévention limite le risque lié au port de charges lourdes ?",
        "Des aides à la manutention (chariot, diable) et une formation aux gestes et postures",
        [
          "Porter les charges en courant",
          "Porter les charges seul quelle que soit leur masse",
          "Soulever en gardant le dos arrondi",
        ],
        `Le travail à deux est aussi recommandé. ${EH}`,
        [
          "Courir augmente les risques de chute et de blessure.",
          "Au-delà d'une certaine masse, on se fait aider.",
          "Le dos doit rester droit, les jambes fléchies.",
        ],
      ),
      Q(
        "Quelle mesure de prévention limite le risque d'agression externe d'un agent ?",
        "Une procédure d'alerte, le travail en binôme et une formation à la gestion des conflits",
        [
          "Le travail isolé et sans moyen d'alerte",
          "La suppression de tout contact avec les usagers",
          "Le port d'un équipement de protection chimique",
        ],
        `Il s'agit de prévenir les situations de tension et de savoir réagir. ${EH}`,
        [
          "Le travail isolé aggrave le risque.",
          "Cette mesure n'est pas réaliste pour un agent en contact avec le public.",
          "Les EPI chimiques protègent d'un autre risque.",
        ],
        1,
      ),
      Q(
        "Pourquoi une cuisine de lycée hôtelier est-elle équipée d'un bac à graisses ?",
        "Pour retenir les graisses des eaux usées de cuisine et éviter de colmater les canalisations",
        [
          "Pour stocker l'huile de friture neuve",
          "Pour chauffer l'eau des cuisines",
          "Pour filtrer l'eau potable",
        ],
        `Il protège aussi le réseau d'assainissement et la station d'épuration. ${EH}`,
        [
          "Le bac traite des eaux usées, pas un stock d'huile neuve.",
          "Il ne chauffe rien.",
          "Il intervient sur les eaux usées, pas sur l'eau potable.",
        ],
      ),
      Q(
        "Quel est le principe de fonctionnement d'un bac à graisses ?",
        "Les graisses, plus légères, remontent en surface ; l'eau débarrassée de ses graisses sort par le milieu",
        [
          "Les graisses sont brûlées par une résistance électrique",
          "Les graisses sont dissoutes par un produit chimique",
          "Les graisses coulent au fond et l'eau sort en surface",
        ],
        `C'est une séparation par différence de densité. ${EH}`,
        [
          "Aucune combustion n'a lieu.",
          "Il n'y a pas de dissolution chimique.",
          "Les graisses sont moins denses que l'eau : elles flottent.",
        ],
        2,
      ),
      Q(
        "Citez un mode de chauffage d'une piscine.",
        "Une pompe à chaleur",
        [
          "Un ventilateur de toiture",
          "Un déshumidificateur seul",
          "Un groupe électrogène de chantier",
        ],
        `D'autres modes existent : chaudière, échangeur sur un réseau de chaleur, panneaux solaires. ${EH}`,
        [
          "Un ventilateur ne chauffe pas l'eau.",
          "Un déshumidificateur traite l'air, pas l'eau.",
          "Un groupe électrogène produit de l'électricité, pas un chauffage d'eau en tant que tel.",
        ],
      ),
      Q(
        "Lequel de ces produits sert à l'entretien d'une piscine ?",
        "Un correcteur de pH",
        ["Un décapant à four", "Un dégrippant moteur", "Un antigel"],
        `Autres produits : chlore (désinfectant), floculant (clarifiant), anti-algues. ${EH}`,
        [
          "Ce produit n'est pas destiné à l'eau d'une piscine.",
          "Ce produit est dangereux et sans rapport.",
          "Un antigel n'est pas un produit de traitement de l'eau de baignade.",
        ],
        1,
      ),
      Q(
        "Une piscine mesure 25 m de long, 8 m de large, avec une profondeur moyenne de 1,75 m. Quel est son volume ?",
        "350 m³",
        ["200 m³", "34,75 m³", "3 500 m³"],
        `Volume = 25 × 8 × 1,75 = 350 m³. ${EH}`,
        [
          "200 est la surface en m², pas le volume.",
          "On a additionné les trois dimensions.",
          "Erreur d'un facteur 10.",
        ],
      ),
      Q(
        "Cette piscine de 350 m³ est remplie avec un débit de 25 litres en 8 secondes. Quelle est la durée de remplissage ?",
        "Environ 31 h 07 min",
        ["Environ 3 h 07 min", "Environ 11 h 12 min", "Environ 311 h"],
        `Débit : 3,125 L/s ; 350 000 ÷ 3,125 = 112 000 s, soit 31 h 6 min 40 s. ${EH}`,
        [
          "Erreur d'un facteur 10.",
          "Erreur de conversion des secondes en heures.",
          "Erreur d'un facteur 10 dans l'autre sens.",
        ],
        2,
      ),
      Q(
        "Le cercueil est-il obligatoire en France ?",
        "Oui, pour l'inhumation comme pour la crémation",
        [
          "Non, il est facultatif",
          "Oui, mais seulement pour l'inhumation",
          "Oui, mais seulement pour la crémation",
        ],
        `Les deux modes d'obsèques sont l'inhumation et la crémation. ${EH}`,
        [
          "Le cercueil est obligatoire.",
          "Il est aussi obligatoire pour la crémation.",
          "Il est aussi obligatoire pour l'inhumation.",
        ],
      ),
      Q(
        "Quels sont les deux modes d'obsèques en France ?",
        "L'inhumation et la crémation",
        [
          "L'inhumation et la dispersion libre",
          "La crémation et l'immersion en mer",
          "L'embaumement et l'inhumation",
        ],
        `Les autres pratiques sont encadrées par la réglementation funéraire. ${EH}`,
        [
          "La dispersion libre n'est pas un mode d'obsèques.",
          "L'immersion en mer n'est pas un mode d'obsèques.",
          "L'embaumement n'est pas un mode d'obsèques.",
        ],
        1,
      ),
      Q(
        "Qu'est-ce que la valorisation énergétique d'un déchet ?",
        "L'utilisation de l'énergie produite par sa combustion, sous forme de chaleur ou d'électricité",
        [
          "Sa transformation en nouvelle matière première",
          "Son enfouissement dans une décharge",
          "Son transport vers un autre pays",
        ],
        `La valorisation peut aussi être de matière (recyclage) ou organique (compostage, méthanisation). ${EH}`,
        [
          "C'est le recyclage.",
          "L'enfouissement n'est pas une valorisation.",
          "Le transport n'est pas une valorisation.",
        ],
      ),
      Q(
        "Quelle est la différence entre le tri et le recyclage des déchets ?",
        "Le tri sépare les déchets par catégories ; le recyclage les transforme en nouvelle matière",
        [
          "Le tri transforme les déchets ; le recyclage les sépare",
          "Ce sont deux mots pour la même opération",
          "Le recyclage consiste à brûler les déchets",
        ],
        `Le tri précède et rend possible le recyclage. ${EH}`,
        [
          "C'est l'inverse.",
          "Ce sont deux étapes différentes.",
          "Brûler avec récupération d'énergie est une valorisation énergétique.",
        ],
        1,
      ),
      Q(
        "Dans quel ordre nettoie-t-on une pièce, selon les règles d'hygiène ?",
        "Du plus propre au plus sale, et du haut vers le bas",
        [
          "Du plus sale au plus propre, et du bas vers le haut",
          "Dans un ordre quelconque",
          "Uniquement les sols, jamais les surfaces hautes",
        ],
        `On évite ainsi de recontaminer les zones déjà nettoyées. ${PR}`,
        [
          "Cet ordre ramènerait les saletés vers les zones propres.",
          "L'ordre compte pour éviter de recontaminer.",
          "Les surfaces hautes se nettoient aussi.",
        ],
        2,
      ),
    ],
  },
  {
    id: "am-enev",
    title: "Annales : espaces naturels, espaces verts",
    description:
      "Vocabulaire de l'arbre, plantes à risque, jussie, biodiversité, taille, abattage, CACES, EPI, canicule et calculs : questions adaptées des annales.",
    level: "Approfondissement",
    questions: [
      Q(
        "Qu'appelle-t-on le houppier d'un arbre ?",
        "L'ensemble des branches et du feuillage situé au-dessus du tronc",
        [
          "La partie vivante du bois sous l'écorce",
          "Le système racinaire",
          "La base du tronc au niveau du sol",
        ],
        `Ne pas confondre avec les rémanents, résidus d'une coupe. ${EV}`,
        ["C'est l'aubier.", "Ce sont les racines.", "C'est le collet."],
      ),
      Q(
        "Qu'est-ce que l'aubier ?",
        "La partie vivante périphérique du bois, qui conduit la sève brute",
        ["L'écorce extérieure", "Le cœur sec de l'arbre", "L'ensemble des feuilles"],
        `Il se situe entre l'écorce et le bois de cœur. ${EV}`,
        [
          "L'écorce est la couche externe.",
          "Le cœur de l'arbre est le duramen.",
          "Les feuilles forment le feuillage.",
        ],
        1,
      ),
      Q(
        "Qu'est-ce qu'une forêt équienne ?",
        "Une forêt dont tous les arbres ont le même âge",
        [
          "Une forêt composée de plusieurs essences mélangées",
          "Une forêt réservée aux chevaux",
          "Une forêt de plaine uniquement",
        ],
        `À l'inverse, une forêt irrégulière contient des arbres d'âges variés. ${EV}`,
        [
          "La notion d'équienne concerne l'âge, pas les essences.",
          "Ce n'est pas le sens du mot.",
          "L'altitude n'est pas en cause.",
        ],
      ),
      Q(
        "Qu'est-ce qu'une plante mellifère ?",
        "Une plante dont le nectar et le pollen sont butinés par les abeilles",
        [
          "Une plante vénéneuse",
          "Une plante de milieu aquatique",
          "Une plante qui supporte la sécheresse",
        ],
        `Elles soutiennent les pollinisateurs et la biodiversité. ${EV}`,
        [
          "Le caractère mellifère n'a rien de toxique.",
          "Ce n'est pas une notion de milieu.",
          "Ce n'est pas lié à la sécheresse.",
        ],
        2,
      ),
      Q(
        "Que sont les rémanents d'une coupe ou d'un abattage ?",
        "Les résidus laissés sur place : branches, rameaux, cimes",
        ["Les racines de l'arbre", "Le bois d'œuvre vendu", "Les graines de l'arbre"],
        `Ils peuvent être broyés, laissés en tas pour la faune ou valorisés. ${EV}`,
        [
          "Les racines forment le système racinaire.",
          "Le bois d'œuvre est la partie valorisée.",
          "Les graines sont les semences.",
        ],
      ),
      Q(
        "Qu'est-ce qu'une ripisylve ?",
        "La végétation boisée qui borde un cours d'eau",
        ["Une forêt de montagne", "Une prairie fleurie", "Une plantation de peupliers"],
        `Elle stabilise les berges et abrite une faune variée. ${EV}`,
        [
          "La ripisylve est liée à l'eau.",
          "Une prairie n'est pas boisée.",
          "Ce terme n'est pas lié à une essence.",
        ],
        1,
      ),
      Q(
        "Qu'est-ce que la mycorhize ?",
        "Une association entre un champignon du sol et les racines d'une plante",
        ["Une maladie des racines", "Un engrais minéral", "Un insecte du sol"],
        `Elle améliore l'absorption de l'eau et des éléments nutritifs. ${EV}`,
        [
          "La mycorhize est bénéfique.",
          "Ce n'est pas un engrais chimique.",
          "C'est un champignon, pas un insecte.",
        ],
      ),
      Q(
        "Quel est l'intérêt de planter des plants mycorhizés en racines nues ?",
        "Une meilleure reprise et une meilleure absorption de l'eau et des nutriments",
        [
          "Une croissance sans aucun arrosage ni entretien",
          "Une suppression de tout risque de maladie",
          "Un feuillage plus coloré",
        ],
        `Le champignon aide la plante à résister aux stress. ${EV}`,
        [
          "L'arrosage reste nécessaire après plantation.",
          "Aucun traitement n'élimine tout risque.",
          "L'effet principal concerne les racines, pas la couleur.",
        ],
        2,
      ),
      Q(
        "Quelle technique est interdite pour gérer la jussie en milieu aquatique ?",
        "L'utilisation de pesticides de synthèse",
        [
          "L'arrachage manuel",
          "L'ombrage par des plantations sur les berges",
          "L'arrachage mécanique encadré",
        ],
        `Les pesticides sont interdits en milieu aquatique et nuisent aux écosystèmes. ${EV}`,
        [
          "L'arrachage manuel est la méthode de base.",
          "L'ombrage fait partie du contrôle écologique.",
          "L'arrachage mécanique est possible, avec précautions.",
        ],
      ),
      Q(
        "Quel est l'inconvénient principal d'un arrachage mécanique de la jussie ?",
        "Les fragments peuvent bouturer et la décomposition des plantes désoxygène le milieu",
        [
          "Il est toujours illégal",
          "Il tue toute la faune du cours d'eau en une journée",
          "Il demande un permis spécial pour chaque plante",
        ],
        `Il faut donc récupérer les fragments. ${EV}`,
        [
          "Il n'est pas interdit.",
          "L'effet n'est pas aussi radical.",
          "Aucun permis spécial par plante n'existe.",
        ],
        1,
      ),
      Q(
        "Dans quelle catégorie classe-t-on la berce du Caucase pour une charte de végétalisation ?",
        "Exotique envahissante et urticante ou irritante",
        [
          "Épineuse seulement",
          "À racines traçantes seulement",
          "Très toxique par ingestion seulement",
        ],
        `Sa sève provoque des brûlures en présence de lumière. ${EV}`,
        [
          "La berce n'est pas épineuse.",
          "Ce n'est pas sa caractéristique principale.",
          "Son danger vient du contact de la sève.",
        ],
      ),
      Q(
        "Dans quelle catégorie classe-t-on l'aubépine ?",
        "Végétal épineux",
        ["Végétal à racines traçantes", "Végétal très toxique", "Végétal urticant"],
        `Autres plantes épineuses : berberis, ronces. ${EV}`,
        [
          "Les bambous traçants illustrent plutôt cette catégorie.",
          "La belladone illustre plutôt cette catégorie.",
          "L'ortie illustre plutôt cette catégorie.",
        ],
        1,
      ),
      Q(
        "Dans quelle catégorie classe-t-on la belladone ?",
        "Végétal très toxique",
        ["Végétal épineux", "Végétal à racines traçantes", "Végétal exotique envahissant"],
        `Le ricin commun est aussi très toxique. ${EV}`,
        [
          "La belladone n'a pas d'épines.",
          "Ses racines ne sont pas la caractéristique concernée.",
          "Elle n'est pas classée comme envahissante.",
        ],
        2,
      ),
      Q(
        "Quelle précaution limite l'impact de la tonte sur la faune ?",
        "Tondre du centre vers l'extérieur et laisser des zones refuges non tondues",
        [
          "Tondre le plus ras possible",
          "Tondre en pleine période de nidification",
          "Tondre toujours à vitesse maximale",
        ],
        `Il faut aussi vérifier la présence de nids avant d'intervenir. ${EV}`,
        [
          "Une coupe rase prive la faune d'abri.",
          "La période de reproduction est sensible.",
          "Une vitesse élevée empêche les animaux de fuir.",
        ],
      ),
      Q(
        "Comment protéger les racines d'un arbre pendant des travaux de voirie ?",
        "Délimiter un périmètre de protection et interdire stockage et circulation d'engins sur la zone racinaire",
        [
          "Stocker les matériaux au pied de l'arbre",
          "Faire passer les engins sous le houppier",
          "Creuser une tranchée au contact du tronc",
        ],
        `On protège aussi le tronc par des planches ou une gaine. ${EV}`,
        [
          "Le stockage tasse le sol et abîme les racines.",
          "Les engins tassent la zone racinaire.",
          "Les tranchées sectionnent les racines.",
        ],
        1,
      ),
      Q(
        "Quel conseil de compostage donne-t-on aux habitants ?",
        "Alterner déchets verts humides et déchets bruns secs, et aérer le tas régulièrement",
        [
          "Ajouter de la viande et des produits laitiers",
          "Ne jamais retourner le tas",
          "Couvrir le tas de plastique hermétique",
        ],
        `Garder une bonne humidité facilite aussi la décomposition. ${EV}`,
        [
          "La viande attire les nuisibles.",
          "L'aération est nécessaire.",
          "Sans air, la décomposition tourne mal.",
        ],
      ),
      Q(
        "Quelle pratique de taille est à proscrire ?",
        "L'étêtage",
        [
          "Une coupe nette près du col de la branche",
          "L'utilisation d'outils affûtés et propres",
          "Le respect de la période de reproduction de la faune",
        ],
        `L'étêtage affaiblit l'arbre et le rend vulnérable. ${EV}`,
        ["C'est une bonne pratique.", "C'est une bonne pratique.", "C'est une bonne pratique."],
      ),
      Q(
        "Pourquoi éviter de tailler les arbres au printemps et en début d'été ?",
        "Pour ne pas déranger la nidification et la reproduction de la faune",
        [
          "Parce que les arbres n'ont plus de sève",
          "Parce que le bois est trop dur",
          "Parce que les outils rouillent plus vite",
        ],
        `Les arbres sont au contraire en pleine activité à cette période. ${EV}`,
        [
          "La sève circule au printemps.",
          "Le bois n'est pas plus dur à cette saison.",
          "Cette raison est fantaisiste.",
        ],
        1,
      ),
      Q(
        "Que faut-il éviter autour d'un arbre encroué ?",
        "Passer ou travailler sous l'arbre encroué",
        [
          "Baliser la zone",
          "Utiliser un treuil avec des agents formés",
          "Signaler le danger à l'équipe",
        ],
        `Il est aussi interdit de grimper sur l'arbre encroué ou sur l'arbre d'appui. ${EV}`,
        [
          "Baliser est une mesure indispensable.",
          "Un treuil est un moyen adapté.",
          "Signaler le danger est nécessaire.",
        ],
        2,
      ),
      Q(
        "Quelle autorisation de conduite (CACES) permet de conduire une mini-pelle ?",
        "R482",
        ["R486", "R490", "R489"],
        `R482 : engins de chantier ; R486 : nacelles ; R490 : grues de chargement ; R489 : chariots. ${EV}`,
        [
          "R486 concerne les nacelles.",
          "R490 concerne les grues de chargement.",
          "R489 concerne les chariots de manutention.",
        ],
      ),
      Q(
        "Quelle autorisation de conduite (CACES) concerne les nacelles élévatrices ?",
        "R486",
        ["R482", "R490", "R483"],
        `Une nacelle est une plateforme élévatrice mobile de personnes. ${EV}`,
        [
          "R482 concerne les engins de chantier.",
          "R490 concerne les grues de chargement.",
          "Ce numéro ne correspond pas aux nacelles.",
        ],
        1,
      ),
      Q(
        "Quel document sert de référence pour déterminer les EPI à affecter à un agent ?",
        "Le DUERP, au regard des missions de sa fiche de poste",
        ["Le règlement de voirie", "Le bon de livraison des EPI", "Le plan d'occupation des sols"],
        `L'autorité territoriale en est responsable et le met à jour au moins une fois par an. ${EV}`,
        [
          "Il ne traite pas des EPI.",
          "Le bon de livraison atteste de la livraison, pas de l'évaluation des risques.",
          "Ce document concerne l'urbanisme.",
        ],
      ),
      Q(
        "Un agent constate que son casque est fissuré. À qui incombe la responsabilité de fournir des EPI en bon état ?",
        "À l'employeur (autorité territoriale)",
        ["À l'agent seul", "Au fabricant du casque uniquement", "Aux usagers du service"],
        `L'agent signale tout équipement défectueux. ${EV}`,
        [
          "L'employeur doit fournir les EPI et les remplacer.",
          "Le fabricant n'est pas l'employeur.",
          "Les usagers n'ont pas ce rôle.",
        ],
        1,
      ),
      Q(
        "Quelle mesure améliore les conditions de travail en extérieur lors d'une canicule ?",
        "Décaler les horaires pour travailler aux heures fraîches, prévoir des pauses à l'ombre et de l'eau fraîche",
        [
          "Supprimer les pauses pour terminer plus vite",
          "Interdire de boire pendant le travail",
          "Travailler à l'heure la plus chaude",
        ],
        `Il faut aussi limiter les efforts pénibles et surveiller les signes de malaise. ${EV}`,
        [
          "Les pauses sont indispensables.",
          "L'hydratation régulière est essentielle.",
          "Les heures chaudes sont les plus dangereuses.",
        ],
        2,
      ),
      Q(
        "Une parcelle de 200 arbres compte 42,5 % de chênes. Combien de chênes ?",
        "85",
        ["42", "17", "8 500"],
        `200 × 0,425 = 85. ${EV}`,
        [
          "42 est la moitié de 85, environ.",
          "17 est le nombre de mélèzes de l'énoncé.",
          "Erreur d'un facteur 100.",
        ],
      ),
      Q(
        "Cette parcelle compte 26 douglas, 17 mélèzes et 3 séquoias sur 200 arbres. Quelle est la proportion de conifères ?",
        "23 %",
        ["46 %", "13 %", "8,5 %"],
        `Conifères : 26 + 17 + 3 = 46 ; 46 ÷ 200 = 23 %. ${EV}`,
        [
          "46 est le nombre de conifères, pas le pourcentage.",
          "13 % correspond aux seuls douglas.",
          "Cela ne correspond à aucune somme de l'énoncé.",
        ],
        1,
      ),
      Q(
        "Sur 24 châtaigniers, il n'en reste que 17 en bonne santé. Quelle est l'évolution ?",
        "Environ −29 %",
        ["Environ +29 %", "Environ −41 %", "Environ −7 %"],
        `(17 − 24) ÷ 24 = −0,29. ${EV}`,
        [
          "Il s'agit d'une baisse.",
          "−41 % vient d'un calcul sur la valeur finale.",
          "−7 est la baisse en nombre d'arbres, pas en pourcentage.",
        ],
      ),
      Q(
        "Un parterre circulaire de 64 m de diamètre reçoit 30 arbres régulièrement espacés tout autour (π ≈ 3,14). Quel espacement ?",
        "Environ 6,70 m",
        ["Environ 2,13 m", "Environ 201 m", "Environ 13,4 m"],
        `Circonférence : 3,14 × 64 = 200,96 m ; 200,96 ÷ 30 ≈ 6,70 m. ${EV}`,
        [
          "2,13 m vient de 64 ÷ 30 : on a divisé le diamètre.",
          "201 m est la circonférence totale.",
          "13,4 m correspond à 15 arbres seulement.",
        ],
        2,
      ),
      Q(
        "Un plateau de camion mesure 4 m sur 2,3 m. Peut-on y coucher un tronc de 4,55 m sans qu'il dépasse ?",
        "Oui, en diagonale : la diagonale mesure environ 4,61 m",
        [
          "Non, le plateau ne mesure que 4 m de long",
          "Non, la largeur est trop petite",
          "Oui, car 4 + 2,3 = 6,3 m",
        ],
        `Diagonale = √(4² + 2,3²) ≈ 4,61 m, supérieure à 4,55 m. ${EV}`,
        [
          "La diagonale est plus longue que le côté.",
          "La largeur ne limite pas un objet placé en diagonale.",
          "La somme des côtés n'est pas la diagonale.",
        ],
      ),
    ],
  },
  {
    id: "am-resto",
    title: "Annales : restauration",
    description:
      "Liaisons chaude et froide, gammes, HACCP, hygiène alimentaire, lois EGalim et Climat et Résilience, fiches techniques et coûts : questions adaptées des annales.",
    level: "Approfondissement",
    questions: [
      Q(
        "Quelle est la température de conservation d'un plat en liaison chaude avant consommation ?",
        "Au moins +63 °C",
        ["Entre 0 et +3 °C", "−18 °C", "Environ +20 °C"],
        `Liaison chaude : au moins +63 °C ; liaison froide : 0 à +3 °C ; surgelé : −18 °C. ${RE}`,
        [
          "C'est la liaison froide.",
          "C'est la température des surgelés.",
          "À cette température, les bactéries se multiplient.",
        ],
      ),
      Q(
        "Quelle est la température de conservation d'un plat en liaison froide avant consommation ?",
        "Entre 0 et +3 °C",
        ["Au moins +63 °C", "−18 °C", "Entre +8 et +12 °C"],
        `La liaison froide suppose un refroidissement rapide après cuisson. ${RE}`,
        [
          "C'est la liaison chaude.",
          "C'est la température des surgelés.",
          "Cette plage est trop élevée pour la liaison froide.",
        ],
        1,
      ),
      Q(
        "Quelle est la température de conservation des produits surgelés ?",
        "−18 °C",
        ["0 °C", "−5 °C", "+3 °C"],
        `Elle doit rester constante jusqu'à l'utilisation. ${RE}`,
        [
          "0 °C n'est pas la température des surgelés.",
          "−5 °C est insuffisant.",
          "+3 °C est la limite haute de la liaison froide.",
        ],
        2,
      ),
      Q(
        "En liaison froide, en combien de temps doit-on faire passer un plat de +63 °C à +10 °C ?",
        "En moins de 2 heures",
        ["En moins de 12 heures", "En moins de 5 heures", "Il n'y a aucune durée imposée"],
        `Un refroidissement lent favorise le développement des bactéries. ${PR}`,
        [
          "Cette durée est beaucoup trop longue.",
          "Cette durée est trop longue.",
          "Une durée maximale est imposée.",
        ],
      ),
      Q(
        "Que sont les produits de première gamme ?",
        "Des produits bruts frais, non transformés",
        ["Des conserves stérilisées", "Des produits surgelés", "Des plats cuisinés sous vide"],
        `1re : bruts frais ; 2e : conserves ; 3e : surgelés ; 4e : crus prêts à l'emploi ; 5e : cuits sous vide. ${RE}`,
        [
          "Ce sont des produits de 2e gamme.",
          "Ce sont des produits de 3e gamme.",
          "Ce sont des produits de 5e gamme.",
        ],
      ),
      Q(
        "Que sont les produits de deuxième gamme ?",
        "Des conserves stérilisées (appertisées)",
        ["Des produits bruts frais", "Des produits surgelés", "Des légumes lavés et découpés"],
        `Elles se conservent à température ambiante avant ouverture. ${RE}`,
        [
          "Ce sont des produits de 1re gamme.",
          "Ce sont des produits de 3e gamme.",
          "Ce sont des produits de 4e gamme.",
        ],
        1,
      ),
      Q(
        "Que sont les produits de troisième gamme ?",
        "Des produits surgelés ou congelés",
        [
          "Des conserves",
          "Des produits frais non transformés",
          "Des plats cuits sous vide réfrigérés",
        ],
        `Leur chaîne du froid ne doit jamais être rompue. ${RE}`,
        [
          "Ce sont des produits de 2e gamme.",
          "Ce sont des produits de 1re gamme.",
          "Ce sont des produits de 5e gamme.",
        ],
      ),
      Q(
        "Que sont les produits de quatrième gamme ?",
        "Des légumes et fruits frais lavés, épluchés et découpés, prêts à l'emploi, conditionnés et réfrigérés",
        [
          "Des plats cuits et réchauffés",
          "Des conserves de légumes",
          "Des légumes entiers en vrac",
        ],
        `Ils évitent l'épluchage en cuisine et demandent le respect de la chaîne du froid. ${RE}`,
        [
          "Ce sont des produits de 5e gamme.",
          "Ce sont des produits de 2e gamme.",
          "Des légumes en vrac sont de 1re gamme.",
        ],
        2,
      ),
      Q(
        "Que sont les produits de cinquième gamme ?",
        "Des produits cuits, conditionnés sous vide ou atmosphère protectrice, réfrigérés et à réchauffer",
        ["Des légumes crus prêts à l'emploi", "Des produits surgelés", "Des conserves stérilisées"],
        `Ils se consomment après réchauffage. ${RE}`,
        [
          "Ce sont des produits de 4e gamme.",
          "Ce sont des produits de 3e gamme.",
          "Ce sont des produits de 2e gamme.",
        ],
      ),
      Q(
        "Quel est le premier principe de la méthode HACCP ?",
        "Analyser les dangers",
        [
          "Documenter les enregistrements",
          "Vérifier le système",
          "Prévoir les actions correctives",
        ],
        `Les 7 principes : dangers, CCP, limites critiques, surveillance, actions correctives, vérification, documentation. ${RE}`,
        [
          "C'est le dernier principe.",
          "C'est le sixième principe.",
          "C'est le cinquième principe.",
        ],
      ),
      Q(
        "Que désigne un point critique pour la maîtrise (CCP) ?",
        "Une étape où une maîtrise est indispensable pour prévenir ou éliminer un danger",
        [
          "Une étape sans aucune importance sanitaire",
          "Un fournisseur de produits",
          "Un contrôle comptable",
        ],
        `Chaque CCP est assorti d'une limite critique, par exemple une température. ${RE}`,
        [
          "Au contraire, c'est une étape déterminante.",
          "Un CCP concerne le procédé, pas un fournisseur.",
          "Il s'agit de sécurité sanitaire, pas de comptabilité.",
        ],
        1,
      ),
      Q(
        "Quel est le septième principe de la méthode HACCP ?",
        "Constituer un dossier et conserver les enregistrements (documentation)",
        ["Analyser les dangers", "Fixer les limites critiques", "Mettre en place une surveillance"],
        `La documentation permet de prouver que la maîtrise est effective. ${RE}`,
        [
          "C'est le premier principe.",
          "C'est le troisième principe.",
          "C'est le quatrième principe.",
        ],
      ),
      Q(
        "Que désigne la règle des 5M en hygiène alimentaire ?",
        "Matière première, matériel, méthode, milieu, main-d'œuvre",
        [
          "Menu, marmite, marmiton, matin, mesure",
          "Mixer, mijoter, mouler, mélanger, mariner",
          "Mètre, masse, minute, millilitre, monnaie",
        ],
        `Ce sont les cinq sources possibles de contamination. ${PR}`,
        [
          "Ces termes n'ont aucun lien avec la règle.",
          "Ce sont des verbes de cuisine.",
          "Ce sont des unités ou des mots sans rapport.",
        ],
      ),
      Q(
        "Que signifie le principe de la marche en avant ?",
        "Les denrées vont du sale vers le propre, sans croisement entre produits crus et prêts à consommer",
        [
          "On travaille toujours dans le sens contraire des aiguilles d'une montre",
          "On sert d'abord les plats les plus chauds",
          "On avance le rythme de production quand le service est en retard",
        ],
        `Elle réduit le risque de contamination croisée. ${PR}`,
        [
          "Ce n'est pas le sens de ce principe.",
          "Ce n'est pas le sens de ce principe.",
          "Ce n'est pas le sens de ce principe.",
        ],
        2,
      ),
      Q(
        "Combien de temps conserve-t-on au minimum les plats témoins en restauration collective, et à quelle température ?",
        "Au moins cinq jours, entre 0 et +3 °C",
        ["24 heures à température ambiante", "Un mois à +10 °C", "Une heure au congélateur"],
        `Ils permettent d'enquêter en cas d'intoxication alimentaire. ${PR}`,
        [
          "Cette durée est trop courte et la température inadaptée.",
          "Une température de +10 °C est trop élevée.",
          "Cette durée est trop courte.",
        ],
        1,
      ),
      Q(
        "Combien d'allergènes sont à déclaration obligatoire dans les denrées alimentaires ?",
        "14",
        ["4", "7", "25"],
        `Les convives doivent pouvoir connaître leur présence. ${PR}`,
        ["Il y en a beaucoup plus.", "Il y en a plus.", "Il y en a moins."],
      ),
      Q(
        "Que regroupe le plan de maîtrise sanitaire (PMS) ?",
        "Les bonnes pratiques d'hygiène, l'HACCP et la traçabilité",
        [
          "Les plans de financement de la cuisine",
          "Les menus de l'année",
          "La liste des fournisseurs agréés uniquement",
        ],
        `Il permet de prouver la maîtrise de la sécurité des aliments. ${PR}`,
        [
          "Il ne traite pas de finances.",
          "Il ne se limite pas aux menus.",
          "Il couvre bien plus que les fournisseurs.",
        ],
      ),
      Q(
        "Citez les deux lois emblématiques qui encadrent la restauration scolaire depuis 2018.",
        "La loi EGalim (2018) et la loi Climat et Résilience (2021)",
        [
          "La loi Évin et la loi Informatique et Libertés",
          "La loi Travail et la loi Macron",
          "La loi Notre et la loi Mapam",
        ],
        `La loi Climat et Résilience renforce notamment le menu végétarien. ${RE}`,
        [
          "Ces lois traitent d'autres sujets.",
          "Ces lois traitent du droit du travail et de l'économie.",
          "Ces lois traitent de l'organisation territoriale.",
        ],
      ),
      Q(
        "Depuis le 1er janvier 2022, quelle part de produits de qualité et durables, dont bio, doit comporter un repas de restauration collective publique ?",
        "Au moins 50 % de produits de qualité et durables, dont au moins 20 % de bio",
        ["Au moins 10 % dont 5 % de bio", "Au moins 80 % dont 50 % de bio", "Aucune obligation"],
        `Les convives sont informés par affichage. ${RE}`,
        [
          "Ces seuils sont inférieurs à l'obligation.",
          "Ces seuils sont supérieurs à l'obligation.",
          "L'obligation existe.",
        ],
        1,
      ),
      Q(
        "Sur quelle base est calculé le taux de bio des repas produits ?",
        "La valeur, hors taxes, de la somme des achats annuels",
        [
          "Le nombre de plats présentés dans l'année",
          "Le poids total des approvisionnements",
          "Le nombre de convives inscrits",
        ],
        `Le calcul se fait en valeur d'achat, pas en nombre de plats ni en poids. ${RE}`,
        [
          "Le nombre de plats n'est pas la base de calcul.",
          "Le poids total n'est pas la base de calcul.",
          "Le nombre de convives n'est pas la base de calcul.",
        ],
      ),
      Q(
        "Quelle obligation s'impose en restauration scolaire en matière de repas végétarien ?",
        "Proposer un menu végétarien au moins une fois par semaine",
        [
          "Proposer un menu végétarien chaque jour",
          "Interdire la viande dans les cantines",
          "Aucune obligation",
        ],
        `La loi Climat et Résilience a pérennisé cette mesure. ${RE}`,
        [
          "L'obligation est hebdomadaire, pas quotidienne.",
          "La viande n'est pas interdite.",
          "Une obligation existe.",
        ],
        2,
      ),
      Q(
        "À compter de quelle date les contenants alimentaires de cuisson, de réchauffage et de service en plastique sont-ils interdits dans la restauration scolaire ?",
        "À compter du 1er janvier 2025",
        ["À compter du 1er janvier 2030", "Depuis 2005", "Ils ne sont pas concernés"],
        `Un calendrier particulier existe pour les petites communes. ${RE}`,
        ["Cette date est trop lointaine.", "Cette date est trop ancienne.", "Ils sont concernés."],
      ),
      Q(
        "Quel objectif de réduction du gaspillage alimentaire la loi fixe-t-elle pour la restauration collective ?",
        "−50 % d'ici 2025 par rapport à 2015",
        ["−5 % d'ici 2030", "−10 % d'ici 2022", "Aucun objectif chiffré"],
        `Un diagnostic de gaspillage est obligatoire pour la restauration collective. ${RE}`,
        [
          "Cet objectif est trop faible.",
          "Cet objectif ne correspond pas à la loi.",
          "Un objectif chiffré existe.",
        ],
        1,
      ),
      Q(
        "La fiche d'un crumble est établie pour 50 élèves avec 3 kg de pommes. Combien de kilos de pommes pour 400 élèves ?",
        "24 kg",
        ["3 kg", "8 kg", "150 kg"],
        `400 ÷ 50 = 8 ; 3 × 8 = 24 kg. ${RE}`,
        [
          "3 kg est la quantité pour 50 élèves.",
          "8 est le coefficient multiplicateur.",
          "Erreur de calcul.",
        ],
      ),
      Q(
        "Cette fiche demande 2,5 kg de poires pour 50 élèves. Combien pour 400 élèves ?",
        "20 kg",
        ["2,5 kg", "8 kg", "125 kg"],
        `2,5 × 8 = 20 kg. ${RE}`,
        [
          "2,5 kg est la quantité pour 50 élèves.",
          "8 est le coefficient multiplicateur.",
          "Erreur de calcul.",
        ],
        1,
      ),
      Q(
        "Elle demande 0,2 kg de beurre pour 50 élèves, vendu en plaquettes de 0,25 kg. Combien de plaquettes pour 400 élèves ?",
        "7 plaquettes",
        ["6 plaquettes", "1,6 plaquette", "8 plaquettes"],
        `0,2 × 8 = 1,6 kg ; 1,6 ÷ 0,25 = 6,4, arrondi à 7. ${RE}`,
        [
          "6,4 s'arrondit au supérieur : 7.",
          "1,6 est la quantité en kilos.",
          "7 plaquettes suffisent.",
        ],
        2,
      ),
      Q(
        "Le total des ingrédients de ce crumble coûte 15,87 € pour 50 élèves. Quel est le coût par élève ?",
        "Environ 0,32 €",
        ["Environ 3,17 €", "Environ 15,87 €", "Environ 0,03 €"],
        `15,87 ÷ 50 = 0,3174 €. ${RE}`,
        [
          "Erreur d'un facteur 10.",
          "C'est le coût total pour 50 élèves.",
          "Erreur d'un facteur 10 dans l'autre sens.",
        ],
      ),
      Q(
        "Deux équipes se renvoient une tâche (sortir les poubelles). Quelle est la meilleure première action de l'encadrant ?",
        "Écouter chaque équipe, vérifier les fiches de poste et l'organisation, puis en parler avec l'autre encadrant",
        [
          "Imposer la tâche à l'équipe de cuisine sans discussion",
          "Attendre que le conflit se règle seul",
          "Confier la tâche à un agent en cachette",
        ],
        `La répartition doit être clarifiée par écrit et validée par la hiérarchie. ${RE}`,
        [
          "Une décision sans écoute envenime le conflit.",
          "Un conflit non traité s'aggrave.",
          "Contourner l'organisation n'est pas une solution.",
        ],
        1,
      ),
      Q(
        "Un agent habituellement irréprochable ne porte plus ses EPI pour la deuxième fois. Que faire ?",
        "Le recevoir en entretien, comprendre les raisons, rappeler l'obligation, tracer et informer la hiérarchie si besoin",
        [
          "Le sanctionner immédiatement soi-même",
          "Ne rien dire car c'est un bon agent",
          "L'exclure définitivement de la cuisine",
        ],
        `L'encadrant constate et recadre : la sanction relève de l'autorité territoriale. ${RE}`,
        [
          "La sanction n'est pas de la compétence de l'encadrant.",
          "Ignorer le manquement engage la responsabilité de l'encadrant.",
          "Cette mesure est disproportionnée et hors de sa compétence.",
        ],
        2,
      ),
    ],
  },
  {
    id: "am-hae",
    title: "Annales : hygiène et accueil des enfants",
    description:
      "Acronymes de l'école, PAI, projet pédagogique, pHARe, produits d'entretien, dilution, accident du travail et prévention des intrusions : questions adaptées des annales.",
    level: "Approfondissement",
    questions: [
      Q(
        "Que signifie DDEN ?",
        "Délégué départemental de l'Éducation nationale",
        [
          "Directeur départemental de l'enseignement numérique",
          "Délégué des enfants de l'école nouvelle",
          "Division départementale des écoles nationales",
        ],
        `C'est un bénévole qui visite les écoles. ${HA}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
      ),
      Q(
        "Que signifie SDJES ?",
        "Service départemental à la jeunesse, à l'engagement et aux sports",
        [
          "Service de défense de la jeunesse et de l'enseignement scolaire",
          "Syndicat départemental des jeux éducatifs et sportifs",
          "Secrétariat des jeunes enseignants spécialisés",
        ],
        `Il relève des services de l'Éducation nationale. ${HA}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
        1,
      ),
      Q(
        "Que signifie PEDT ?",
        "Projet éducatif territorial",
        [
          "Plan d'éducation du département territorial",
          "Programme d'enseignement du temps scolaire",
          "Projet d'établissement du directeur de territoire",
        ],
        `Il organise la cohérence des temps scolaires, périscolaires et extrascolaires. ${HA}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
      ),
      Q(
        "Que signifie DASEN ?",
        "Directeur académique des services de l'Éducation nationale",
        [
          "Délégué académique des services de l'enseignement numérique",
          "Directeur des activités scolaires et éducatives nationales",
          "Délégué aux agents spécialisés des écoles nationales",
        ],
        `Il dirige les services départementaux de l'Éducation nationale. ${HA}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
      ),
      Q(
        "Quelles informations figurent dans le projet pédagogique d'un accueil périscolaire ?",
        "Les objectifs éducatifs, le public, l'organisation de la journée, l'équipe, les moyens et l'évaluation",
        [
          "Uniquement le menu de la cantine",
          "Uniquement le salaire des animateurs",
          "Uniquement le règlement du stationnement",
        ],
        `Il décline le projet éducatif de l'organisateur en actions concrètes. ${HA}`,
        [
          "Le menu n'est pas son contenu principal.",
          "Les rémunérations n'y figurent pas.",
          "Le stationnement n'y figure pas.",
        ],
        2,
      ),
      Q(
        "Dans quels cas met-on en place un PAI ?",
        "Pour un enfant atteint d'une maladie chronique, d'une allergie ou d'une intolérance nécessitant un traitement ou un régime",
        [
          "Pour tout enfant qui arrive en retard",
          "Pour tous les enfants à la rentrée sans exception",
          "Pour un enfant qui change d'école",
        ],
        `PAI : projet d'accueil individualisé. ${HA}`,
        [
          "Un retard n'est pas un motif de PAI.",
          "Le PAI est individuel et médical.",
          "Un changement d'école n'est pas un motif de PAI.",
        ],
      ),
      Q(
        "Quelles informations comporte un PAI ?",
        "La pathologie, les traitements, la conduite à tenir en urgence, les personnes à prévenir et les aménagements ou régimes",
        [
          "Le résultat scolaire de l'enfant",
          "L'adresse de ses camarades",
          "Le salaire de ses parents",
        ],
        `Il est établi avec la famille, le médecin et l'équipe éducative. ${HA}`,
        [
          "Les résultats scolaires n'y figurent pas.",
          "Cela n'a aucun rapport avec la santé de l'enfant.",
          "Ce n'est pas un élément de santé.",
        ],
        1,
      ),
      Q(
        "Quelle est la durée de validité d'un PAI ?",
        "L'année scolaire : il est à reconduire chaque année",
        ["Toute la scolarité maternelle sans réexamen", "Une semaine", "Dix ans"],
        `Il est révisé quand la situation de l'enfant évolue. ${HA}`,
        [
          "Il est réexaminé, pas définitif.",
          "C'est une durée beaucoup trop courte.",
          "C'est une durée beaucoup trop longue.",
        ],
      ),
      Q(
        "Que désigne le programme pHARe ?",
        "Le programme de lutte contre le harcèlement à l'école",
        [
          "Un programme d'harmonisation des horaires",
          "Un plan de gestion des repas à l'école",
          "Un projet d'aménagement des cours",
        ],
        `Il comprend prévention, formation des adultes et traitement des situations. ${HA}`,
        [
          "Ce n'est pas l'objet du programme.",
          "Ce n'est pas l'objet du programme.",
          "Ce n'est pas l'objet du programme.",
        ],
      ),
      Q(
        "Quelle qualité est indispensable à un ATSEM pour mener ses missions éducatives ?",
        "La bienveillance associée à une autorité calme",
        ["L'impatience", "L'indifférence", "La rigidité absolue"],
        `Autres qualités : sens de l'observation, discrétion, esprit d'équipe, rigueur. ${HA}`,
        [
          "Les jeunes enfants demandent de la patience.",
          "Le métier demande de l'attention.",
          "La rigidité nuit à la relation avec les enfants.",
        ],
      ),
      Q(
        "Que remet-on à un agent de remplacement dès son arrivée ?",
        "Les consignes d'hygiène et de sécurité, la liste des produits et des PAI, et son planning",
        [
          "Uniquement les clés du bureau du directeur",
          "Rien : il apprend seul",
          "Uniquement un badge de visiteur",
        ],
        `On le présente aussi à l'équipe et à la direction, et on lui fait visiter les locaux. ${HA}`,
        [
          "Cela ne suffit pas à assurer sa sécurité ni celle des enfants.",
          "Un accueil structuré est indispensable.",
          "Il n'est pas un visiteur : il fait partie de l'équipe.",
        ],
        1,
      ),
      Q(
        "Parmi ces équipements, lequel est un EPI utilisé pour l'entretien des locaux ?",
        "Des gants de protection contre les produits chimiques",
        ["Un balai", "Un seau", "Un chariot de ménage"],
        `Les gants protègent la peau des produits chimiques et des contaminations. ${HA}`,
        [
          "Un balai est un matériel de nettoyage, pas un EPI.",
          "Un seau est un matériel de nettoyage.",
          "Un chariot est un matériel de transport.",
        ],
      ),
      Q(
        "Quelle est la première obligation d'un agent victime d'un accident du travail ?",
        "Prévenir sans délai son supérieur et faire constater ses blessures par un médecin",
        [
          "Attendre une semaine avant d'en parler",
          "Ne rien dire si la douleur est supportable",
          "Informer seulement ses collègues",
        ],
        `Le certificat médical est ensuite transmis à l'employeur. ${HA}`,
        [
          "Le retard peut compromettre la prise en charge.",
          "L'accident doit être déclaré.",
          "La déclaration passe par la hiérarchie.",
        ],
        2,
      ),
      Q(
        "Que fait le supérieur hiérarchique après l'accident d'un agent ?",
        "Il fait secourir l'agent, recueille les circonstances et les témoins, rédige un rapport et déclare l'accident",
        [
          "Il ne fait rien tant que l'agent ne reprend pas son travail",
          "Il demande à l'agent de se déclarer lui-même seul",
          "Il classe l'événement sans suite",
        ],
        `La collectivité analyse ensuite l'accident pour éviter qu'il ne se reproduise. ${HA}`,
        [
          "L'encadrant a des obligations immédiates.",
          "La déclaration incombe aussi à l'encadrant et à la collectivité.",
          "Un accident ne se classe pas sans suite.",
        ],
      ),
      Q(
        "Quelle mesure prévient les intrusions dans une école hors du temps scolaire ?",
        "Fermer et verrouiller les accès, équiper l'entrée d'un interphone et tenir un registre des visiteurs",
        [
          "Laisser le portail ouvert en permanence",
          "Donner les clés à toute personne qui les demande",
          "Supprimer les clôtures",
        ],
        `Le PPMS décrit aussi la conduite à tenir en cas d'intrusion. ${HA}`,
        [
          "Un portail ouvert facilite l'intrusion.",
          "Les clés doivent être contrôlées.",
          "Les clôtures protègent les enfants.",
        ],
        1,
      ),
      Q(
        "Que signifie PPMS ?",
        "Plan particulier de mise en sûreté",
        [
          "Programme pédagogique de maintenance scolaire",
          "Plan de prévention des maladies saisonnières",
          "Projet provisoire de médiation scolaire",
        ],
        `Il prévoit la conduite à tenir en cas de risque majeur ou d'intrusion. ${PR}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
      ),
      Q(
        "Quelle est la différence entre un produit désinfectant et un produit détergent ?",
        "Le détergent nettoie ; le désinfectant détruit les micro-organismes",
        [
          "Le détergent désinfecte ; le désinfectant nettoie",
          "Ils ont le même rôle",
          "Le désinfectant s'emploie sur les enfants",
        ],
        `On nettoie avant de désinfecter. ${HA}`,
        [
          "C'est l'inverse.",
          "Leurs rôles sont distincts.",
          "Les désinfectants ne s'utilisent jamais sur la peau des enfants.",
        ],
      ),
      Q(
        "Citez un exemple de produit détergent d'origine naturelle.",
        "Le savon noir",
        ["L'eau de Javel", "L'acide chlorhydrique", "Le white-spirit"],
        `Le vinaigre blanc et le bicarbonate sont aussi des produits d'entretien naturels. ${HA}`,
        [
          "L'eau de Javel est un produit chimique désinfectant.",
          "C'est un acide fort, dangereux.",
          "C'est un solvant d'origine pétrolière.",
        ],
        1,
      ),
      Q(
        "Qu'est-ce que le pH d'une solution ?",
        "La mesure de son acidité, sur une échelle de 0 à 14",
        ["Sa température", "Sa densité", "Sa couleur"],
        `Inférieur à 7, acide ; supérieur à 7, basique. ${HA}`,
        [
          "Le pH ne mesure pas la température.",
          "Le pH ne mesure pas la densité.",
          "Le pH n'est pas une couleur, même si des indicateurs colorés existent.",
        ],
        2,
      ),
      Q(
        "On dilue un détergent à 1 volume de produit pour 9 volumes d'eau. Quels volumes pour obtenir 15 litres de solution ?",
        "1,5 litre de détergent et 13,5 litres d'eau",
        [
          "1 litre de détergent et 14 litres d'eau",
          "3 litres de détergent et 12 litres d'eau",
          "9 litres de détergent et 6 litres d'eau",
        ],
        `Total : 10 parts ; 15 ÷ 10 = 1,5 L de détergent ; 15 − 1,5 = 13,5 L d'eau. ${HA}`,
        [
          "1 litre de détergent ferait une dilution trop forte.",
          "3 litres de détergent correspondent à une dilution de 1 pour 4.",
          "On a inversé détergent et eau.",
        ],
      ),
      Q(
        "Que signale le pictogramme de danger représentant une flamme au-dessus d'un cercle ?",
        "Un produit comburant",
        ["Un produit inflammable seul", "Un gaz sous pression", "Un produit corrosif"],
        `Un comburant favorise la combustion. ${HA}`,
        [
          "Le produit inflammable est représenté par une flamme seule.",
          "Le gaz sous pression est représenté par une bouteille.",
          "Le corrosif est représenté par une main et une surface attaquées.",
        ],
      ),
      Q(
        "Que signale le pictogramme représentant une main et une surface attaquées par un liquide ?",
        "Un produit corrosif",
        [
          "Un produit comburant",
          "Un gaz sous pression",
          "Un produit dangereux pour le milieu aquatique",
        ],
        `Il peut provoquer de graves brûlures de la peau et des lésions des yeux. ${HA}`,
        [
          "Le comburant est représenté par une flamme sur un cercle.",
          "Le gaz sous pression est représenté par une bouteille.",
          "Le danger aquatique est représenté par un poisson et un arbre.",
        ],
        1,
      ),
    ],
  },
  {
    id: "am-logsec",
    title: "Annales : logistique et sécurité",
    description:
      "Gestion des stocks, vocabulaire logistique, manutention, extincteurs, ERP, informatique de base, vidéoprotection et calculs : questions adaptées des annales.",
    level: "Approfondissement",
    questions: [
      Q(
        "Qu'est-ce que le flux tendu ?",
        "Une organisation qui réduit les stocks au minimum en approvisionnant au plus près des besoins",
        [
          "Une accumulation de stocks de sécurité très importants",
          "Un transport de marchandises uniquement de nuit",
          "Une livraison une fois par an",
        ],
        `Il réduit le coût de stockage mais augmente le risque de rupture. ${LO}`,
        [
          "C'est l'inverse.",
          "Le flux tendu n'est pas une question d'horaire.",
          "Il suppose des livraisons fréquentes.",
        ],
      ),
      Q(
        "Qu'est-ce que le gerbage ?",
        "L'empilement de charges, par exemple de palettes, les unes sur les autres",
        [
          "Le rangement des palettes dans un palettier",
          "Le comptage des palettes à l'inventaire",
          "Le lavage des palettes",
        ],
        `Il demande des charges stables et un sol adapté. ${LO}`,
        [
          "Le palettier est un rayonnage.",
          "Le comptage relève de l'inventaire.",
          "Le gerbage n'a rien à voir avec le lavage.",
        ],
      ),
      Q(
        "Qu'est-ce que la gestion des stocks ?",
        "L'ensemble des opérations qui permettent de disposer des quantités nécessaires : suivi des entrées et sorties, inventaire, réapprovisionnement",
        [
          "La vente des stocks aux usagers",
          "Le stockage sans aucun suivi",
          "La destruction des stocks anciens uniquement",
        ],
        `Elle s'appuie sur un logiciel et des inventaires. ${LO}`,
        [
          "La gestion ne se limite pas à la vente.",
          "Sans suivi, il n'y a pas de gestion.",
          "La destruction n'est qu'une opération parmi d'autres.",
        ],
        1,
      ),
      Q(
        "Qu'est-ce qu'un palettier ?",
        "Un rayonnage métallique destiné à stocker des palettes",
        [
          "Un chariot élévateur",
          "Une palette de grande taille",
          "Un logiciel de gestion de stocks",
        ],
        `Il permet de stocker en hauteur avec accès à chaque palette. ${LO}`,
        [
          "Le chariot est un engin de manutention.",
          "Un palettier n'est pas une palette.",
          "Ce n'est pas un logiciel.",
        ],
      ),
      Q(
        "Qu'est-ce que le picking ?",
        "La préparation de commande : le prélèvement des articles dans le stock",
        ["Le comptage de nuit", "Le nettoyage des allées", "L'achat de palettes"],
        `Il s'agit de rassembler les articles demandés. ${LO}`,
        ["Ce n'est pas un comptage.", "Ce n'est pas du nettoyage.", "Ce n'est pas un achat."],
        2,
      ),
      Q(
        "Que signifie FIFO ?",
        "Premier entré, premier sorti",
        [
          "Premier périmé, premier sorti",
          "Dernier entré, premier sorti",
          "Premier commandé, dernier livré",
        ],
        `Les articles les plus anciens en stock partent d'abord. ${LO}`,
        [
          "C'est la signification de FEFO.",
          "C'est la méthode LIFO.",
          "Ce n'est pas la signification du sigle.",
        ],
      ),
      Q(
        "Que signifie FEFO ?",
        "Premier périmé, premier sorti",
        [
          "Premier entré, premier sorti",
          "Dernier entré, dernier sorti",
          "Premier fourni, dernier facturé",
        ],
        `On sort d'abord les produits dont la date de péremption est la plus proche. ${LO}`,
        [
          "C'est la signification de FIFO.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
        1,
      ),
      Q(
        "Qu'est-ce qu'une rupture de stock ?",
        "Une situation où un article n'est plus disponible alors qu'il est demandé",
        ["Un stock trop important", "Un inventaire terminé", "Une livraison en avance"],
        `Le flux tendu augmente ce risque. ${LO}`,
        ["Ce serait un surstock.", "Ce n'est pas une rupture.", "Ce n'est pas une rupture."],
      ),
      Q(
        "Qu'est-ce qu'un logigramme ?",
        "La représentation graphique, étape par étape, du déroulement d'un processus",
        ["Un tableau de comptabilité", "Un plan de bâtiment", "Un logiciel de calcul"],
        `Exemple : réception, contrôle, stockage, marquage au code-barres, livraison. ${LO}`,
        [
          "Un logigramme n'est pas un tableau comptable.",
          "Un plan représente des lieux.",
          "Ce n'est pas un logiciel.",
        ],
        2,
      ),
      Q(
        "Quel est l'intérêt du code-barres et de la douchette pour un inventaire ?",
        "Identifier rapidement chaque matériel et suivre ses mouvements",
        ["Remplacer le stockage", "Supprimer tout contrôle", "Augmenter la masse des charges"],
        `Les données sont ensuite enregistrées dans la base de données. ${LO}`,
        [
          "Ils n'enlèvent pas le besoin de stocker.",
          "Ils facilitent le contrôle.",
          "Ils n'agissent pas sur la masse.",
        ],
      ),
      Q(
        "Les dépenses passent de 25 012 € à 27 520 € entre 2016 et 2017. Quel est le taux d'évolution ?",
        "Environ +10,0 %",
        ["Environ +9,1 %", "Environ +2 508 %", "Environ −10,0 %"],
        `(27 520 − 25 012) ÷ 25 012 ≈ 10,0 %. ${LO}`,
        [
          "+9,1 % vient d'un calcul sur la valeur finale.",
          "2 508 est la hausse en euros.",
          "C'est une hausse, pas une baisse.",
        ],
      ),
      Q(
        "Les dépenses passent de 32 824 € à 31 246 € entre 2018 et 2019. Quel est le taux d'évolution ?",
        "Environ −4,8 %",
        ["Environ +4,8 %", "Environ −5,0 %", "Environ −1 578 %"],
        `(31 246 − 32 824) ÷ 32 824 ≈ −4,8 %. ${LO}`,
        [
          "C'est une baisse.",
          "−5,0 % vient d'un calcul sur la valeur finale.",
          "1 578 est la baisse en euros.",
        ],
        1,
      ),
      Q(
        "Les dépenses passent de 31 246 € à 19 450 € entre 2019 et 2020. Quel est le taux d'évolution ?",
        "Environ −37,8 %",
        ["Environ −60,6 %", "Environ +37,8 %", "Environ −11 796 %"],
        `(19 450 − 31 246) ÷ 31 246 ≈ −37,8 %. ${LO}`,
        [
          "−60,6 % vient d'un calcul sur la valeur finale.",
          "C'est une baisse.",
          "11 796 est la baisse en euros.",
        ],
        2,
      ),
      Q(
        "Que signifie CACES ?",
        "Certificat d'aptitude à la conduite en sécurité",
        [
          "Contrôle annuel des chariots et des engins de service",
          "Centre d'aptitude à la conduite des engins spéciaux",
          "Certificat d'analyse des charges et des stocks",
        ],
        `Pour les chariots de manutention, c'est la recommandation R489. ${LO}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
      ),
      Q(
        "Qui délivre l'autorisation de conduite d'un chariot élévateur ?",
        "L'employeur, après vérification de l'aptitude médicale, des connaissances et de la connaissance des lieux",
        ["Le fabricant du chariot", "Le préfet", "Le magasinier chef de rayon seul"],
        `Elle s'ajoute au CACES, qui atteste de la formation. ${LO}`,
        [
          "Le fabricant ne délivre pas cette autorisation.",
          "Le préfet n'intervient pas.",
          "Elle est délivrée par l'employeur, pas par un collègue.",
        ],
      ),
      Q(
        "Quelle précaution est essentielle pour déposer une palette en hauteur ?",
        "Circuler charge basse et s'assurer que personne ne se trouve sous ou près de la charge",
        [
          "Circuler avec la charge levée au maximum",
          "Laisser des agents se tenir sous la charge pour la guider",
          "Dépasser la capacité de la plaque de charge si la palette est stable",
        ],
        `On vérifie aussi la stabilité du gerbage et l'environnement. ${LO}`,
        [
          "Une charge haute rend le chariot instable.",
          "Personne ne doit se tenir sous une charge.",
          "La plaque de charge indique la limite à ne jamais dépasser.",
        ],
        1,
      ),
      Q(
        "Que renseigne la plaque de charge d'un chariot élévateur ?",
        "La charge maximale admissible selon la hauteur de levée et la distance du centre de gravité",
        ["Le prix du chariot", "La vitesse maximale sur route", "La date du dernier lavage"],
        `Plus la charge est haute et son centre de gravité éloigné, plus la charge admissible diminue. ${LO}`,
        [
          "Elle n'a pas de fonction commerciale.",
          "Elle ne traite pas de la vitesse.",
          "Elle ne traite pas de l'entretien.",
        ],
      ),
      Q(
        "Comment range-t-on des palettes de masses différentes dans un palettier ?",
        "Les plus lourdes en bas, les plus légères en haut",
        [
          "Les plus lourdes en haut",
          "Dans un ordre quelconque",
          "Toutes à la même hauteur sans considération de masse",
        ],
        `Cela abaisse le centre de gravité et réduit le risque de chute. ${LO}`,
        [
          "Cela déstabiliserait le rayonnage.",
          "L'ordre compte pour la sécurité.",
          "La masse conditionne le niveau de rangement.",
        ],
        2,
      ),
      Q(
        "Quel modèle d'extincteur installe-t-on pour un tableau électrique général basse tension (TGBT) ?",
        "Un extincteur à dioxyde de carbone (CO2)",
        ["Un extincteur à eau pulvérisée", "Un extincteur à mousse", "Un seau d'eau"],
        `Le CO2 n'est pas conducteur et ne laisse pas de résidu. ${LO}`,
        [
          "L'eau est conductrice : danger d'électrocution.",
          "La mousse contient de l'eau.",
          "L'eau est dangereuse sur une installation sous tension.",
        ],
      ),
      Q(
        "Quelle est la différence entre un extincteur à pression permanente et un extincteur à pression auxiliaire ?",
        "Permanente : l'agent extincteur et le gaz propulseur sont dans le même réservoir ; auxiliaire : une cartouche de gaz sépare met le réservoir en pression",
        [
          "Il n'y en a aucune",
          "Permanente : sans agent extincteur ; auxiliaire : sans réservoir",
          "Permanente : réservé aux feux électriques ; auxiliaire : réservé aux feux de gaz",
        ],
        `Il s'agit de deux modes de fonctionnement. ${LO}`,
        [
          "Les deux modes sont distincts.",
          "Les deux ont un agent extincteur et un réservoir.",
          "La différence ne concerne pas le type de feu.",
        ],
        1,
      ),
      Q(
        "À quelle fréquence minimale les extincteurs doivent-ils être vérifiés ?",
        "Au moins une fois par an, par une personne ou une entreprise compétente",
        ["Tous les dix ans", "Jamais, s'ils ne sont pas utilisés", "Uniquement après un incendie"],
        `Les blocs autonomes d'éclairage de sécurité sont aussi contrôlés régulièrement. ${LO}`,
        [
          "Cette fréquence est trop faible.",
          "Un extincteur inutilisé doit aussi être contrôlé.",
          "Le contrôle est préventif.",
        ],
        2,
      ),
      Q(
        "Quel type d'ERP désigne les restaurants et débits de boissons ?",
        "Le type N",
        ["Le type R", "Le type X", "Le type U"],
        `R : enseignement ; X : sportifs couverts ; U : soins ; L : spectacles et réunions ; O : hôtels. ${LO}`,
        [
          "R désigne les établissements d'éveil et d'enseignement.",
          "X désigne les établissements sportifs couverts.",
          "U désigne les établissements de soins.",
        ],
      ),
      Q(
        "Quelle catégorie d'ERP concerne un établissement de plus de 1 500 personnes ?",
        "La 1re catégorie",
        ["La 3e catégorie", "La 4e catégorie", "La 5e catégorie"],
        `2e : 701 à 1 500 ; 3e : 301 à 700 ; 4e : jusqu'à 300 ; 5e : sous le seuil du type. ${LO}`,
        [
          "La 3e catégorie compte de 301 à 700 personnes.",
          "La 4e catégorie compte jusqu'à 300 personnes.",
          "La 5e catégorie est sous le seuil réglementaire.",
        ],
      ),
      Q(
        "Quel est le rôle d'un switch (commutateur réseau) ?",
        "Relier plusieurs appareils d'un réseau local et acheminer les données vers le seul destinataire concerné",
        [
          "Stocker les données d'un ordinateur",
          "Imprimer des documents en réseau",
          "Fournir l'électricité aux ordinateurs",
        ],
        `Il évite d'envoyer les données à tous les appareils. ${LO}`,
        [
          "C'est le rôle d'un disque.",
          "C'est le rôle d'une imprimante.",
          "Ce n'est pas un équipement d'alimentation.",
        ],
      ),
      Q(
        "Quel est un avantage d'un disque SSD par rapport à un disque dur classique ?",
        "Il est plus rapide, silencieux et résistant aux chocs",
        [
          "Il est toujours moins cher au gigaoctet",
          "Il consomme beaucoup plus d'énergie",
          "Il est lent mais très fragile",
        ],
        `Inconvénient : un prix au gigaoctet plus élevé. ${LO}`,
        [
          "Son prix au gigaoctet est plus élevé.",
          "Il consomme moins d'énergie.",
          "Il est rapide et sans pièce mobile.",
        ],
        1,
      ),
      Q(
        "Qu'est-ce qu'une caméra de lecture automatique de plaques d'immatriculation (LAPI) ?",
        "Une caméra qui lit et enregistre les plaques des véhicules, même rapides",
        [
          "Une caméra qui mesure la température",
          "Une caméra qui compte les piétons uniquement",
          "Une caméra qui produit de l'électricité",
        ],
        `Elle est utile à la sécurité routière et aux enquêtes. ${LO}`,
        [
          "Ce n'est pas sa fonction.",
          "Elle lit les plaques de véhicules.",
          "Ce n'est pas sa fonction.",
        ],
      ),
      Q(
        "Que signifie CSU ?",
        "Centre de supervision urbain",
        [
          "Contrôle de sécurité des usagers",
          "Comité de suivi urbain",
          "Coordination des services d'urgence",
        ],
        `Des opérateurs y visionnent les images de vidéoprotection de la commune. ${LO}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
        2,
      ),
      Q(
        "Qui peut entrer dans un centre de supervision urbain ?",
        "Uniquement les personnes habilitées et autorisées",
        [
          "Tout visiteur sans contrôle",
          "Tout habitant de la commune",
          "Tout journaliste sur simple demande",
        ],
        `L'accès est strictement limité dans un cadre légal de protection des données. ${LO}`,
        [
          "L'accès est contrôlé.",
          "L'accès n'est pas public.",
          "L'accès n'est pas ouvert sur demande.",
        ],
      ),
      Q(
        "55 km de voirie de 8 m de large sont salés à 15 g/m². Quelle quantité de sel pour une tournée ?",
        "6,6 tonnes",
        ["6,6 kilogrammes", "66 tonnes", "660 tonnes"],
        `55 000 × 8 = 440 000 m² ; × 15 g = 6 600 000 g = 6,6 t. ${LO}`,
        [
          "Erreur d'unité : on a pris des kilogrammes.",
          "Erreur d'un facteur 10.",
          "Erreur d'un facteur 100.",
        ],
      ),
      Q(
        "Pour 4 tournées à 6,6 tonnes de sel, la saumure économise 25 % de sel. Quelle est l'économie totale ?",
        "6,6 tonnes",
        ["26,4 tonnes", "1,65 tonne", "25 tonnes"],
        `4 × 6,6 = 26,4 t ; 26,4 × 25 % = 6,6 t. ${LO}`,
        [
          "26,4 t est la quantité totale de sel, avant économie.",
          "1,65 t est l'économie d'une seule tournée.",
          "25 est le pourcentage, pas une quantité.",
        ],
        1,
      ),
      Q(
        "L'économie par tournée est de 1,65 t de sel à 260 € la tonne. L'équipement coûte 3 320 € + 2 × 1 214 €. En combien de tournées est-il rentabilisé ?",
        "14 tournées",
        ["13 tournées", "4 tournées", "20 tournées"],
        `Économie : 429 € par tournée ; investissement : 5 748 € ; 5 748 ÷ 429 ≈ 13,4, arrondi à 14. ${LO}`,
        [
          "13 tournées n'ont pas encore rentabilisé l'équipement.",
          "4 tournées ne représentent que 1 716 € d'économies.",
          "L'équipement est rentabilisé plus tôt.",
        ],
        2,
      ),
    ],
  },
];
