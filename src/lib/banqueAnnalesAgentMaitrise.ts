import type { QuizQuestion, QuizTheme } from "./quizData";

/**
 * Questions adaptées des annales officielles du concours d'agent de maîtrise territorial
 * (spécialité bâtiment, travaux publics, voirie et réseaux divers) :
 * - questionnaires de vérification des connaissances techniques, sessions 2023 et 2025 ;
 * - cas pratique, session 2025 ;
 * - note de cadrage du questionnaire, établie par les centres de gestion.
 *
 * Les sujets officiels sont des documents rédactionnels à compléter : les questions ci-dessous
 * en reprennent les thèmes et les calculs, reformulés en QCM, avec des réponses vérifiées.
 */

const A23 = "Tombé aux annales : questionnaire BTP-VRD, session 2023 (centres de gestion AURA).";
const A25 = "Tombé aux annales : questionnaire BTP-VRD, session 2025 (CDG 63).";
const CP25 = "Tombé aux annales : cas pratique BTP-VRD, session 2025 (CDG 18).";
const CAD = "Thème cité par la note de cadrage du questionnaire (centres de gestion).";

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

export const themesAnnalesAgentMaitrise: QuizTheme[] = [
  {
    id: "am-annales-securite",
    title: "Annales : hygiène et sécurité",
    description:
      "Questions adaptées des annales officielles (questionnaires 2023 et 2025, cas pratique 2025) : coordination de la sécurité, produits chimiques, panneaux, amiante, incendie, management.",
    level: "Approfondissement",
    questions: [
      Q(
        "Sur un chantier où interviennent plusieurs entreprises, qui rédige le plan général de coordination (PGC) ?",
        "Le coordonnateur SPS, désigné par le maître d'ouvrage",
        ["Chaque entreprise intervenante", "L'inspecteur du travail", "Le conducteur d'engins"],
        `Le PGC fixe les mesures communes à tout le chantier. Chaque entreprise rédige ensuite son propre PPSPS. ${A25}`,
        [
          "Chaque entreprise rédige son PPSPS, pas le PGC.",
          "L'inspection du travail contrôle, elle ne rédige pas le plan.",
          "Le conducteur d'engins n'a aucun rôle de coordination.",
        ],
      ),
      Q(
        "Qui rédige le plan particulier de sécurité et de protection de la santé (PPSPS) ?",
        "Chaque entreprise intervenant sur le chantier, pour ses propres travaux",
        ["Le coordonnateur SPS", "Le maire", "Le médecin du travail"],
        `Le PPSPS détaille les modes opératoires et les mesures de prévention propres à chaque entreprise. ${A25}`,
        [
          "Le coordonnateur rédige le PGC, qui est commun à tous.",
          "Le maire est l'autorité territoriale, il ne rédige pas les plans de sécurité des entreprises.",
          "Le médecin du travail suit la santé des agents, il ne rédige pas ce plan.",
        ],
        1,
      ),
      Q(
        "Quel document, remis par le fournisseur d'un produit chimique, détaille ses dangers et les précautions à prendre ?",
        "La fiche de données de sécurité (FDS)",
        ["Le bon de livraison", "La facture", "Le devis"],
        `La FDS comporte 16 rubriques obligatoires. L'encadrant s'assure que chaque produit utilisé par son équipe est accompagné de sa fiche. ${A25}`,
        [
          "Le bon de livraison atteste de la livraison, pas des dangers.",
          "La facture est un document comptable.",
          "Le devis précède la commande.",
        ],
        2,
      ),
      Q(
        "Parmi ces informations, laquelle figure obligatoirement dans une fiche de données de sécurité ?",
        "Les mesures de premiers secours",
        [
          "Le prix du produit",
          "La liste des agents autorisés à l'utiliser",
          "La date d'achat par la collectivité",
        ],
        `La FDS indique notamment l'identification des dangers, les premiers secours, la lutte contre l'incendie, la manipulation et le stockage, la protection individuelle. ${A25}`,
        [
          "Le prix relève du commerce, pas de la sécurité.",
          "Les autorisations d'utilisation relèvent de l'organisation du service.",
          "La date d'achat est une information de gestion.",
        ],
      ),
      Q(
        "Que signifie un panneau de sécurité rond, à fond blanc, avec un bord et une barre rouges ?",
        "Une interdiction",
        ["Une obligation", "Un danger", "Une indication de secours"],
        `Code des signaux de sécurité : rond rouge = interdiction ; triangle jaune = avertissement ; rond bleu = obligation ; carré vert = sauvetage ; carré rouge = lutte contre l'incendie. ${A23}`,
        [
          "L'obligation est signalée par un rond bleu.",
          "Le danger est signalé par un triangle jaune.",
          "Le secours est signalé par un carré vert.",
        ],
      ),
      Q(
        "Que signale un panneau triangulaire à fond jaune cerné de noir ?",
        "Un danger (avertissement)",
        ["Une interdiction", "Une obligation de porter un EPI", "Une issue de secours"],
        `Exemples : danger électrique, risque de chute, matières inflammables. ${A23}`,
        [
          "L'interdiction est un rond à bord rouge.",
          "L'obligation est un rond bleu.",
          "L'issue de secours est un carré vert.",
        ],
        1,
      ),
      Q(
        "Que signifie un panneau de sécurité rond à fond bleu ?",
        "Une obligation, par exemple le port d'un équipement de protection",
        ["Une interdiction", "Un danger", "Un matériel d'incendie"],
        `Exemples : port du casque, des gants, des protections auditives. ${A23}`,
        [
          "L'interdiction est un rond à bord rouge.",
          "Le danger est un triangle jaune.",
          "Le matériel d'incendie est signalé par un carré rouge.",
        ],
        2,
      ),
      Q(
        "Que signale un panneau de sécurité carré à fond vert ?",
        "Une information de sauvetage ou de secours (issue de secours, poste de premiers secours)",
        ["Un danger électrique", "Une interdiction de fumer", "Une obligation de porter le casque"],
        `Le vert indique la conduite à tenir pour évacuer ou se secourir. ${A23}`,
        [
          "Un danger est signalé par un triangle jaune.",
          "Une interdiction est signalée par un rond à bord rouge.",
          "Une obligation est signalée par un rond bleu.",
        ],
      ),
      Q(
        "Que signale un panneau de sécurité carré à fond rouge ?",
        "Un matériel de lutte contre l'incendie (extincteur, alarme, poste d'incendie)",
        ["Une issue de secours", "Un danger de chute", "Une obligation de porter des gants"],
        `Il aide à localiser le matériel à utiliser en cas de départ de feu. ${A23}`,
        [
          "L'issue de secours est signalée en vert.",
          "Le danger est signalé par un triangle jaune.",
          "L'obligation est signalée par un rond bleu.",
        ],
        3,
      ),
      Q(
        "Que signifie le pictogramme de danger représentant une flamme au-dessus d'un cercle ?",
        "Un produit comburant, qui peut aggraver un incendie",
        [
          "Un produit inflammable au contact de l'air",
          "Un gaz sous pression",
          "Un produit corrosif",
        ],
        `Un comburant favorise la combustion et entretient un feu. Une flamme seule signale un produit inflammable. ${CP25}`,
        [
          "Le produit inflammable est représenté par une flamme seule.",
          "Le gaz sous pression est représenté par une bouteille.",
          "Le produit corrosif est représenté par une main et une surface attaquées.",
        ],
      ),
      Q(
        "Que signale le pictogramme représentant une bouteille de gaz ?",
        "Un gaz sous pression",
        ["Un produit toxique", "Un produit explosif", "Un produit corrosif"],
        `Un récipient sous pression peut exploser sous l'effet de la chaleur. ${CP25}`,
        [
          "La toxicité est représentée par une tête de mort.",
          "Le produit explosif est représenté par une bombe explosant.",
          "Le produit corrosif est représenté par une main et une surface attaquées.",
        ],
        1,
      ),
      Q(
        "Que signale le pictogramme de la tête de mort sur deux tibias ?",
        "Une toxicité aiguë : danger mortel en cas d'ingestion, d'inhalation ou de contact",
        [
          "Un danger pour le milieu aquatique",
          "Un produit cancérogène à long terme",
          "Un produit simplement irritant",
        ],
        `Ce pictogramme impose les plus grandes précautions de manipulation. ${CP25}`,
        [
          "Le danger pour le milieu aquatique est représenté par un poisson et un arbre.",
          "Le danger à long terme est représenté par un buste avec une étoile.",
          "L'irritant est représenté par un point d'exclamation.",
        ],
      ),
      Q(
        "Que signale le pictogramme représentant un poisson mort et un arbre ?",
        "Un produit dangereux pour le milieu aquatique",
        ["Un produit comburant", "Un produit corrosif", "Un gaz sous pression"],
        `Ces produits ne doivent pas être rejetés dans les réseaux d'eaux pluviales ni dans le milieu naturel. ${CP25}`,
        [
          "Le comburant est représenté par une flamme sur un cercle.",
          "Le corrosif est représenté par une main et une surface attaquées.",
          "Le gaz sous pression est représenté par une bouteille.",
        ],
        2,
      ),
      Q(
        "Que signale le pictogramme représentant un buste avec une étoile sur la poitrine ?",
        "Un danger grave pour la santé à long terme (cancérogène, mutagène, toxique pour la reproduction…)",
        ["Un produit simplement irritant", "Un produit inflammable", "Un gaz sous pression"],
        `Il impose de limiter l'exposition et de respecter les consignes de la FDS. ${CP25}`,
        [
          "L'irritant est représenté par un point d'exclamation.",
          "L'inflammable est représenté par une flamme.",
          "Le gaz sous pression est représenté par une bouteille.",
        ],
      ),
      Q(
        "Comment doit-on ranger les produits dans un local de stockage de produits chimiques ?",
        "En séparant les produits incompatibles : comburants à l'écart des inflammables, acides et bases dans des bacs de rétention distincts",
        [
          "Par ordre alphabétique, sans tenir compte de leur nature",
          "Tous ensemble, pour limiter la place",
          "Les plus dangereux à portée de main, près de la porte",
        ],
        `On conserve aussi les produits dans leur emballage d'origine et on évacue régulièrement ceux qui ne servent plus par les filières adaptées. ${CP25}`,
        [
          "Deux produits incompatibles peuvent réagir violemment s'ils sont voisins.",
          "Regrouper des produits incompatibles crée un risque d'incendie ou de réaction dangereuse.",
          "Les produits dangereux ne doivent pas être faciles d'accès à tous.",
        ],
      ),
      Q(
        "Parmi ces aménagements, lequel convient à un local de stockage de produits chimiques ?",
        "Une aération, des bacs de rétention et un point d'eau à proximité",
        [
          "Une porte ouverte en permanence pour faciliter les livraisons",
          "Un stockage au sol sans rétention, pour gagner de la place",
          "L'absence de ventilation, pour conserver les produits au frais",
        ],
        `On prévoit aussi un affichage des consignes, un extincteur, des EPI, une matière absorbante, une fermeture à clé et un dispositif hors gel. ${CP25}`,
        [
          "Le local doit être fermé à clé.",
          "Sans rétention, un déversement se répandrait dans le local.",
          "Sans ventilation, les vapeurs s'accumulent.",
        ],
        1,
      ),
      Q(
        "Quels EPI faut-il prévoir pour un agent qui utilise une tronçonneuse ?",
        "Gants anti-coupures, tenue et chaussures ou bottes anti-coupure, casque forestier (visière et protections auditives), gilet haute visibilité",
        [
          "Un simple gilet haute visibilité et des gants de jardinage",
          "Des lunettes de soleil et une casquette",
          "Des chaussures de ville et un pantalon en jean",
        ],
        `Les EPI sont fournis gratuitement par l'employeur et portés pendant toute l'activité. ${CP25}`,
        [
          "Ces équipements ne protègent pas des coupures ni du bruit.",
          "Ils ne protègent ni la tête, ni les oreilles, ni les jambes.",
          "Un jean ne résiste pas à une tronçonneuse.",
        ],
      ),
      Q(
        "Avant d'envoyer une équipe tronçonner, que doit vérifier le chef d'équipe ?",
        "La formation des agents, le port des EPI, l'état de la tronçonneuse et de ses dispositifs de sécurité, le périmètre de sécurité et l'absence de lignes électriques ; personne ne travaille seul",
        [
          "Seulement que la tronçonneuse est pleine de carburant",
          "Uniquement l'heure de fin du chantier",
          "Que les agents ont déjà utilisé une débroussailleuse",
        ],
        `Un nouvel agent doit d'abord être formé à l'activité. ${CP25}`,
        [
          "La sécurité ne se limite pas au plein de carburant.",
          "L'horaire ne dispense d'aucune vérification de sécurité.",
          "Une autre machine ne remplace pas la formation à la tronçonneuse.",
        ],
        2,
      ),
      Q(
        "Quelles sont les deux méthodes de traitement d'un matériau amianté dégradé présent dans un bâtiment ?",
        "Le retrait et l'encapsulage (ou confinement)",
        ["Le ponçage et le brossage", "La peinture et le rebouchage", "L'arrosage et le grattage"],
        `Poncer, gratter ou brosser libèrent des fibres dans l'air : ces gestes sont interdits sur des matériaux amiantés. ${A25}`,
        [
          "Poncer et brosser libèrent des fibres d'amiante.",
          "Peindre ou reboucher ne traite pas le matériau dégradé.",
          "Gratter libère des fibres.",
        ],
      ),
      Q(
        "Combien de temps avant le début de travaux de retrait ou d'encapsulage d'amiante le plan de travail doit-il être transmis à l'inspection du travail et aux organismes de prévention ?",
        "Un mois",
        ["Vingt-quatre heures", "Trois jours", "Un an"],
        `Ce délai permet aux services de contrôle d'examiner les méthodes prévues avant l'intervention. ${A25}`,
        [
          "Ce délai serait trop court pour un examen sérieux.",
          "Ce délai est inférieur au délai réglementaire.",
          "Ce délai est beaucoup trop long.",
        ],
        1,
      ),
      Q(
        "Quels sont les deux matériaux dangereux les plus souvent recherchés avant des travaux de démolition d'un bâtiment ancien ?",
        "L'amiante et le plomb",
        ["Le bois et le verre", "Le béton et l'acier", "Le sable et le gravier"],
        `Une recherche et une détection sont obligatoires avant démolition. ${A23}`,
        [
          "Ces matériaux courants ne justifient pas un repérage obligatoire.",
          "Béton et acier sont les matériaux de structure habituels.",
          "Sable et gravier sont des granulats courants.",
        ],
      ),
      Q(
        "Quels polluants recherche-t-on avant des travaux d'enlèvement d'enrobés bitumineux ?",
        "L'amiante et les HAP (hydrocarbures aromatiques polycycliques)",
        [
          "Le plomb et le mercure des peintures murales",
          "Le radon et le chlore",
          "Le dioxyde de carbone et l'azote",
        ],
        `Certains anciens enrobés contiennent de l'amiante ou des goudrons riches en HAP, ce qui modifie les précautions et la filière d'évacuation. ${A25}`,
        [
          "Ces polluants concernent d'autres supports que les enrobés.",
          "Ils ne sont pas à rechercher dans un enrobé.",
          "Ce sont des composants de l'air, sans lien avec les enrobés.",
        ],
        2,
      ),
      Q(
        "Pour quels feux un extincteur à dioxyde de carbone (CO2) est-il destiné ?",
        "Les feux de classe B (liquides inflammables) et les feux d'origine électrique",
        [
          "Les feux de classe A (solides) uniquement",
          "Les feux de métaux uniquement",
          "Tous les feux sans exception",
        ],
        `Le CO2 ne laisse pas de résidu et n'est pas conducteur, ce qui convient aux installations électriques. ${A25}`,
        [
          "Il est surtout destiné aux liquides et aux feux électriques.",
          "Les feux de métaux exigent des agents spéciaux.",
          "Aucun extincteur n'est universel.",
        ],
      ),
      Q(
        "À quelle classe de feux est destiné avant tout un extincteur à eau pulvérisée ?",
        "Les feux de classe A (matériaux solides : bois, papier, tissus)",
        ["Les feux électriques sous tension", "Les feux de métaux", "Les feux de gaz uniquement"],
        `L'eau refroidit les matériaux solides. Elle est déconseillée sur une installation électrique sous tension. ${A25}`,
        [
          "L'eau est conductrice : danger d'électrocution.",
          "Les feux de métaux réagissent violemment à l'eau.",
          "L'eau ne convient pas aux feux de gaz.",
        ],
        1,
      ),
      Q(
        "À quelles classes de feux convient un extincteur à mousse ?",
        "Aux feux de classes A et B",
        [
          "Aux feux de classe C uniquement",
          "Aux feux d'origine électrique sous tension",
          "Aux feux de métaux",
        ],
        `La mousse refroidit les solides et étouffe les liquides inflammables. ${A25}`,
        [
          "La classe C (gaz) n'est pas son domaine.",
          "La mousse contient de l'eau : danger sous tension.",
          "Les feux de métaux exigent des poudres spéciales.",
        ],
      ),
      Q(
        "Les véhicules équipés d'un gyrophare orange sont-ils prioritaires ?",
        "Non : le gyrophare orange signale un véhicule en intervention ou lent, qui présente un danger pour les autres usagers",
        [
          "Oui, comme les véhicules de secours",
          "Oui, mais seulement la nuit",
          "Oui, s'ils appartiennent à une collectivité",
        ],
        `Seuls les véhicules d'intervention prioritaires (bleu) bénéficient du passage prioritaire. ${A23}`,
        [
          "La priorité est réservée aux véhicules équipés de feux bleus.",
          "L'heure ne change rien : le gyrophare orange ne donne aucune priorité.",
          "Le statut du propriétaire ne confère aucune priorité.",
        ],
        2,
      ),
      Q(
        "Entre quelles températures règle-t-on idéalement un chauffe-eau dans un bâtiment tertiaire ?",
        "Entre 55 et 60 °C",
        ["Entre 30 et 40 °C", "Entre 40 et 45 °C", "Entre 70 et 80 °C"],
        `Plus bas, des bactéries comme la légionelle risquent de proliférer ; plus haut, risques de brûlures, d'entartrage et de surconsommation. ${A25}`,
        [
          "À cette température, les bactéries prolifèrent.",
          "La légionelle se développe encore dans cette plage.",
          "Cette température expose à des brûlures et à l'entartrage.",
        ],
        1,
      ),
      Q(
        "Quels risques présente un chauffe-eau réglé à une température trop élevée ?",
        "Brûlures, entartrage plus rapide de l'installation et surconsommation d'énergie",
        [
          "Prolifération de la légionelle",
          "Gel des canalisations",
          "Baisse de pression du réseau d'eau",
        ],
        `Il faut trouver l'équilibre : assez chaud pour éviter les bactéries, pas trop pour éviter les brûlures. ${A25}`,
        [
          "La légionelle prolifère dans une eau tiède, pas trop chaude.",
          "Une eau chaude ne gèle pas.",
          "La température n'agit pas sur la pression du réseau.",
        ],
      ),
      Q(
        "Quel mode de management est le mieux adapté à la gestion d'une situation de crise ?",
        "Le management directif",
        [
          "Le management délégatif",
          "Le management participatif",
          "Aucun : on attend que la crise passe",
        ],
        `En crise, il faut décider vite et donner des consignes claires. ${A23}`,
        [
          "La délégation suppose du temps et un cadre stable.",
          "La concertation demande du temps qu'une crise ne laisse pas.",
          "Une crise exige une direction immédiate.",
        ],
      ),
      Q(
        "Quel mode de management est le mieux adapté à l'encadrement de plusieurs chefs d'équipe ?",
        "Le management délégatif",
        ["Le management directif", "Aucun management", "Le management par la contrainte"],
        `Des chefs d'équipe autonomes reçoivent des objectifs et organisent eux-mêmes leur travail. L'encadrant contrôle les résultats. ${A23}`,
        [
          "Il démotiverait des encadrants expérimentés.",
          "Manager, c'est choisir un style adapté à la situation.",
          "La contrainte n'est pas un style de management situationnel.",
        ],
        1,
      ),
      Q(
        "Quel mode de management est le mieux adapté à la conception d'un projet ?",
        "Le management participatif",
        ["Le management directif", "Le management délégatif", "Le management par la sanction"],
        `Associer l'équipe à la conception enrichit le projet et favorise l'adhésion. ${A23}`,
        [
          "Il laisserait l'équipe en simple exécution, sans apport.",
          "Déléguer sans cadrage ne garantit pas un projet cohérent.",
          "La sanction n'est pas un style de management.",
        ],
        2,
      ),
      Q(
        "Quels points sont abordés lors de l'entretien professionnel annuel d'un agent ?",
        "Les résultats et les objectifs, la manière de servir, les besoins de formation et les perspectives d'évolution",
        [
          "Le classement de l'agent par rapport à ses collègues",
          "La vie privée de l'agent",
          "Le montant des primes versées aux autres agents",
        ],
        `Il est conduit par le supérieur hiérarchique direct et donne lieu à un compte rendu. ${A23}`,
        [
          "Les agents ne sont pas classés entre eux lors de l'entretien.",
          "La vie privée n'entre pas dans l'entretien professionnel.",
          "La rémunération des autres agents est confidentielle.",
        ],
      ),
    ],
  },
  {
    id: "am-annales-connaissances",
    title: "Annales : connaissances techniques BTP-VRD",
    description:
      "Questions adaptées des annales officielles : matériaux, béton, isolation, voirie, réseaux, accessibilité, charpente, engins et vocabulaire de la spécialité.",
    level: "Approfondissement",
    questions: [
      Q(
        "Pourquoi huile-t-on un coffrage avant de couler le béton ?",
        "Pour éviter que le béton adhère au coffrage et faciliter le décoffrage",
        [
          "Pour accélérer la prise du béton",
          "Pour rendre le béton plus résistant au gel",
          "Pour colorer la surface du béton",
        ],
        `Le produit de décoffrage forme un film qui empêche le béton de coller au moule. ${CAD}`,
        [
          "L'huile ne modifie pas la vitesse de prise.",
          "La résistance au gel dépend de la formulation du béton.",
          "Ce n'est pas un colorant.",
        ],
      ),
      Q(
        "Pourquoi vibre-t-on le béton lors du coulage ?",
        "Pour chasser l'air emprisonné et obtenir un béton compact et homogène",
        ["Pour le faire durcir plus vite", "Pour le refroidir", "Pour augmenter sa teneur en eau"],
        `Un béton mal vibré garde des vides : sa résistance diminue et l'acier est mal protégé. ${CAD}`,
        [
          "Le durcissement dépend de la prise du ciment.",
          "Le vibrage ne refroidit pas le béton.",
          "On ne rajoute pas d'eau en vibrant.",
        ],
        1,
      ),
      Q(
        "Quelle est la composition d'un enrobé bitumineux ?",
        "Des granulats (gravillons, sable, filler) enrobés de bitume",
        [
          "Du ciment, du sable et de l'eau",
          "Du plâtre et des fibres",
          "De la chaux et de l'argile",
        ],
        `Il se fabrique à chaud en centrale et se met en œuvre avant refroidissement. ${CAD}`,
        [
          "C'est la composition d'un mortier.",
          "Le plâtre n'entre pas dans les enrobés.",
          "Ces matériaux ne forment pas un revêtement routier.",
        ],
      ),
      Q(
        "Quelle est la différence entre une grave non traitée (GNT) et une grave-bitume ?",
        "La GNT n'a pas de liant ; la grave-bitume est liée par du bitume",
        [
          "La GNT contient du bitume, pas la grave-bitume",
          "La GNT est utilisée uniquement en couche de roulement",
          "Il n'y en a aucune",
        ],
        `La GNT est un matériau granulaire ; la grave-bitume est un matériau traité, utilisé en couche d'assise. ${A23}`,
        [
          "C'est l'inverse.",
          "La GNT sert surtout en couches d'assise et en remblai, pas en couche de roulement.",
          "Le liant fait toute la différence.",
        ],
        2,
      ),
      Q(
        "Lequel de ces isolants thermiques est d'origine naturelle ?",
        "La laine de chanvre",
        ["La laine de verre", "Le polystyrène expansé", "La mousse de polyuréthane"],
        `Isolants naturels : chanvre, lin, liège, fibre de bois, ouate de cellulose, laine de mouton, paille… ${A23}`,
        [
          "La laine de verre est un isolant minéral.",
          "Le polystyrène est dérivé du pétrole.",
          "Le polyuréthane est dérivé du pétrole.",
        ],
      ),
      Q(
        "Qu'est-ce qu'un matériau biosourcé ?",
        "Un matériau issu de la biomasse végétale ou animale, comme le bois, le chanvre ou la paille",
        [
          "Un matériau issu uniquement du recyclage de métaux",
          "Un matériau fabriqué à partir de pétrole",
          "Un matériau extrait de carrières de roche",
        ],
        `Les matériaux biosourcés existent en bâtiment (bois, chanvre, paille, ouate de cellulose) comme en voirie. ${A25}`,
        [
          "Le recyclage de métaux n'est pas de la biomasse.",
          "Le pétrole est une ressource fossile.",
          "La roche est une ressource minérale.",
        ],
        1,
      ),
      Q(
        "L'utilisation de matériaux biosourcés contribue notamment au stockage de quel élément ?",
        "Du carbone (CO2)",
        ["De l'oxygène", "Du plomb", "Du chlore"],
        `Les végétaux ont absorbé du CO2 en poussant : ce carbone reste stocké dans le matériau. Ils contribuent aussi à préserver les ressources non renouvelables. ${A25}`,
        [
          "L'oxygène est rejeté par les plantes, il n'est pas stocké ainsi.",
          "Le plomb est un métal polluant.",
          "Le chlore n'est pas concerné.",
        ],
      ),
      Q(
        "Que signifient les lettres du classement UPEC des revêtements de sols intérieurs ?",
        "Usure à la marche, Poinçonnement, comportement à l'Eau, tenue aux agents Chimiques",
        [
          "Usure, Poussière, Électricité, Chaleur",
          "Utilisation, Protection, Entretien, Couleur",
          "Uniformité, Planéité, Étanchéité, Contraste",
        ],
        `Le classement UPEC permet de choisir un revêtement adapté à l'usage d'un local. ${A25}`,
        [
          "Ces termes ne correspondent pas à la norme.",
          "Ces termes ne correspondent pas à la norme.",
          "Ces termes ne correspondent pas à la norme.",
        ],
        1,
      ),
      Q(
        "Dans le classement UPEC, que mesure la lettre P ?",
        "La résistance au poinçonnement (charges concentrées, comme un pied de meuble)",
        ["La propreté du revêtement", "La puissance du chauffage au sol", "La pente du sol"],
        `U : usure à la marche ; P : poinçonnement ; E : comportement à l'eau ; C : tenue aux agents chimiques. ${A25}`,
        [
          "La propreté ne fait pas partie du classement.",
          "Le chauffage n'entre pas dans le classement.",
          "La pente n'entre pas dans le classement.",
        ],
      ),
      Q(
        "Quel est le principal avantage d'une isolation thermique par l'extérieur ?",
        "Elle traite les ponts thermiques et ne réduit pas la surface habitable",
        [
          "Elle coûte toujours moins cher qu'une isolation par l'intérieur",
          "Elle ne nécessite jamais d'autorisation d'urbanisme",
          "Elle se pose sans échafaudage",
        ],
        `Inconvénients : coût plus élevé, façade modifiée (autorisation d'urbanisme possible), travaux plus lourds. ${A25}`,
        [
          "Elle est en général plus coûteuse.",
          "Elle modifie l'aspect extérieur : une autorisation peut être nécessaire.",
          "Les travaux en façade demandent le plus souvent un échafaudage.",
        ],
      ),
      Q(
        "Quel est un inconvénient d'une isolation thermique par l'intérieur ?",
        "La perte de surface habitable et la persistance de ponts thermiques",
        [
          "Elle empêche toute ventilation",
          "Elle est impossible dans un bâtiment ancien",
          "Elle modifie obligatoirement l'aspect de la façade",
        ],
        `Avantage : un coût plus faible et une pose plus simple. ${A25}`,
        [
          "La ventilation reste nécessaire et possible.",
          "Elle se pratique couramment dans l'ancien.",
          "L'aspect extérieur n'est pas modifié.",
        ],
        2,
      ),
      Q(
        "Qu'est-ce qu'un adjuvant dans un enduit ou un mortier ?",
        "Un produit ajouté en faible quantité pour modifier une de ses propriétés (plasticité, prise, imperméabilité…)",
        [
          "Le liant principal de l'enduit",
          "Le sable qui constitue la masse de l'enduit",
          "La peinture appliquée par-dessus",
        ],
        `Exemples : hydrofuge (imperméabilité), plastifiant (maniabilité), entraîneur d'air (résistance au gel), accélérateur ou retardateur de prise. ${A25}`,
        [
          "Le liant est le ciment ou la chaux.",
          "Le sable est un granulat.",
          "La peinture est un revêtement de finition.",
        ],
      ),
      Q(
        "Quel procédé de soudage à l'arc utilise une électrode non fusible en tungstène sous protection d'un gaz inerte ?",
        "Le soudage TIG",
        [
          "Le soudage au chalumeau oxyacétylénique",
          "Le soudage par résistance (par points)",
          "Le soudage à l'électrode enrobée",
        ],
        `Procédés courants : électrode enrobée, MIG/MAG (fil fusible sous gaz), TIG, chalumeau, résistance. ${A25}`,
        [
          "Le chalumeau utilise une flamme, pas un arc.",
          "La résistance utilise un courant qui chauffe les pièces.",
          "L'électrode enrobée est fusible.",
        ],
        1,
      ),
      Q(
        "Que contient le dossier des ouvrages exécutés (DOE) remis à la fin d'un chantier ?",
        "Les plans de récolement, les notices d'utilisation et d'entretien, les fiches techniques et les garanties",
        [
          "Les devis refusés et les offres des entreprises non retenues",
          "Le planning prévisionnel uniquement",
          "Les fiches de paie des ouvriers",
        ],
        `Il permet d'entretenir l'ouvrage et d'intervenir dessus par la suite. ${A25}`,
        [
          "Les offres non retenues relèvent de la consultation, pas de l'ouvrage exécuté.",
          "Le planning prévisionnel est un document de chantier.",
          "La paie n'a aucun lien avec l'ouvrage.",
        ],
      ),
      Q(
        "Dans un réseau d'eaux pluviales, comment s'appelle la sur-profondeur sous le tuyau de sortie d'un regard à grille ?",
        "Le décanteur (ou fosse de décantation)",
        ["Le tampon", "Le branchement", "La buse"],
        `Il retient les sables, boues et déchets, qui ne partent pas dans le réseau. ${A25}`,
        [
          "Le tampon est le couvercle.",
          "Le branchement relie un immeuble au réseau.",
          "La buse est un gros tuyau sous une route.",
        ],
        1,
      ),
      Q(
        "Quel diamètre minimal doit avoir le cercle de manœuvre d'un fauteuil roulant dans un sanitaire PMR ?",
        "1,50 m",
        ["0,80 m", "1,00 m", "2,50 m"],
        `Le cercle de manœuvre permet un demi-tour du fauteuil. ${A25}`,
        [
          "0,80 m est insuffisant pour un demi-tour.",
          "1,00 m est insuffisant pour un demi-tour.",
          "2,50 m dépasse l'exigence.",
        ],
      ),
      Q(
        "Vous rénovez les peintures et le carrelage d'une salle de classe dont la date des derniers travaux est inconnue. Quelle démarche est obligatoire avant d'intervenir ?",
        "Consulter ou faire réaliser le repérage amiante, et vérifier la présence de plomb dans les peintures anciennes",
        [
          "Aucune : des travaux de peinture ne sont jamais concernés",
          "Demander l'avis du comptable public",
          "Faire un essai à la plaque",
        ],
        `Percer, poncer ou décaper un matériau amianté libère des fibres. ${A25}`,
        [
          "Peinture, ponçage et décapage peuvent libérer des fibres d'amiante.",
          "Le comptable public n'intervient pas dans la sécurité des travaux.",
          "L'essai à la plaque mesure la portance d'un sol.",
        ],
        2,
      ),
      Q(
        "Qu'est-ce qu'un acrotère ?",
        "Un muret situé en bordure d'une toiture-terrasse",
        [
          "La pièce horizontale d'une ferme",
          "L'orifice d'évacuation d'un mur de soutènement",
          "Le couvercle d'un regard",
        ],
        `L'étanchéité de la toiture-terrasse remonte contre l'acrotère (relevé d'étanchéité). ${A23}`,
        ["C'est l'entrait.", "C'est la barbacane.", "C'est le tampon."],
      ),
      Q(
        "Qu'est-ce qu'une barbacane ?",
        "Une ouverture ménagée dans un mur de soutènement pour évacuer l'eau",
        [
          "Un renfort métallique d'un mur",
          "Un joint de dilatation",
          "Une marche d'escalier extérieure",
        ],
        `Elle évite l'accumulation d'eau derrière le mur et la pression qui en résulte. ${A23}`,
        [
          "Un renfort est une armature ou un contrefort.",
          "Un joint de dilatation limite la fissuration.",
          "Une marche n'est pas un dispositif d'évacuation.",
        ],
        1,
      ),
      Q(
        "Quelle est l'utilité d'un drain placé derrière un mur de soutènement ?",
        "Collecter et évacuer l'eau pour éviter la pression de l'eau sur le mur",
        [
          "Renforcer la couleur du mur",
          "Augmenter le poids du mur",
          "Empêcher toute infiltration dans le sol",
        ],
        `Une eau qui s'accumule derrière un mur augmente fortement les efforts qu'il subit. ${A23}`,
        [
          "Le drain n'a aucune fonction esthétique.",
          "Il n'est pas là pour alourdir le mur.",
          "Il capte l'eau plutôt qu'il n'arrête les infiltrations.",
        ],
      ),
      Q(
        "Quel autre mode de fondation peut-on envisager lorsque le sol de surface porte mal ?",
        "Des fondations profondes (pieux ou puits), qui vont chercher le bon sol en profondeur",
        [
          "Une simple dalle posée sur la terre végétale",
          "Un décapage de 5 cm",
          "Un remblai non compacté",
        ],
        `Avantage : reporter les charges sur une couche résistante située sous le mauvais sol. ${A23}`,
        [
          "Une dalle posée sur de la terre végétale tasserait.",
          "Décaper 5 cm ne règle pas le défaut de portance.",
          "Un remblai non compacté tasserait.",
        ],
        2,
      ),
      Q(
        "Dans une ferme de charpente, quelle pièce horizontale relie le pied des deux arbalétriers ?",
        "L'entrait",
        ["Le poinçon", "Le chevron", "Le faîtage"],
        `Dans une ferme triangulaire : les arbalétriers sont inclinés, l'entrait est horizontal, le poinçon est vertical au centre. ${A23}`,
        [
          "Le poinçon est la pièce verticale centrale.",
          "Le chevron est une pièce inclinée qui porte les liteaux.",
          "Le faîtage est le sommet du toit.",
        ],
      ),
      Q(
        "Que désigne, en charpente, un assemblage par tenon et mortaise ?",
        "Une partie saillante (le tenon) qui s'emboîte dans une cavité (la mortaise)",
        [
          "Deux pièces collées bout à bout",
          "Un assemblage uniquement par vis métalliques",
          "Une soudure de pièces en acier",
        ],
        `C'est un assemblage traditionnel de menuiserie et de charpente, souvent complété par une cheville en bois. ${A23}`,
        [
          "Aucun collage bout à bout n'est décrit ici.",
          "Il ne repose pas sur des vis.",
          "On ne soude pas le bois.",
        ],
      ),
      Q(
        "À quoi sert la lame d'une mini-pelle ?",
        "À niveler et remblayer, et à stabiliser la machine en appui au sol",
        [
          "À creuser en profondeur comme le godet",
          "À faire contrepoids à l'arrière",
          "À protéger l'opérateur de la pluie",
        ],
        `Le godet creuse, le balancier et la flèche le portent, le contrepoids équilibre la machine. ${CAD}`,
        ["C'est le rôle du godet.", "C'est le rôle du contrepoids.", "C'est le rôle de la cabine."],
        1,
      ),
      Q(
        "Que signifie AOT dans le domaine de la voirie et des chantiers ?",
        "Autorisation d'occupation temporaire du domaine public",
        [
          "Attestation d'ouvrage terminé",
          "Assurance obligatoire des travaux",
          "Avis d'ordre de travaux",
        ],
        `Elle est nécessaire pour installer un échafaudage, une benne ou une base de vie sur le domaine public. ${CAD}`,
        [
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
          "Ce n'est pas la signification du sigle.",
        ],
      ),
      Q(
        "Quelle est la couleur du grillage avertisseur d'un réseau de chauffage urbain ou de climatisation ?",
        "Violet",
        ["Rouge", "Bleu", "Marron"],
        `Rappel du code couleur : rouge électricité, jaune gaz, bleu eau potable, vert télécommunications, marron assainissement, violet chauffage et climatisation, orange produits chimiques, blanc équipements routiers. ${CAD}`,
        [
          "Le rouge signale l'électricité.",
          "Le bleu signale l'eau potable.",
          "Le marron signale l'assainissement.",
        ],
      ),
      Q(
        "Quelle est la couleur du grillage avertisseur d'une canalisation de produits chimiques ?",
        "Orange",
        ["Jaune", "Vert", "Violet"],
        `Le jaune est réservé au gaz et aux hydrocarbures ; l'orange aux produits chimiques. ${CAD}`,
        [
          "Le jaune signale le gaz.",
          "Le vert signale les télécommunications.",
          "Le violet signale le chauffage et la climatisation.",
        ],
      ),
      Q(
        "À quelle distance au-dessus de l'ouvrage pose-t-on un grillage avertisseur dans une tranchée ?",
        "De 20 à 30 cm au-dessus de l'ouvrage à signaler",
        [
          "Directement au contact de la canalisation",
          "À 1,50 m au-dessus de la canalisation",
          "En surface, sous l'enrobé",
        ],
        `Il doit aussi être de la même couleur que la canalisation signalée. ${CAD}`,
        [
          "Au contact, il ne préviendrait pas à temps.",
          "Il serait trop proche de la surface pour avertir avant l'ouvrage.",
          "Il se place dans la tranchée, au-dessus de l'ouvrage.",
        ],
        1,
      ),
      Q(
        "Quelle est l'unité de mesure de la fréquence ?",
        "Le hertz (Hz)",
        ["Le volt (V)", "L'ampère (A)", "Le watt (W)"],
        `Tension : volt ; intensité : ampère ; puissance : watt ; fréquence : hertz ; pression : pascal ou bar. ${A25}`,
        [
          "Le volt mesure la tension.",
          "L'ampère mesure l'intensité.",
          "Le watt mesure la puissance.",
        ],
      ),
      Q(
        "Qu'est-ce que le pouvoir de coupure d'un disjoncteur ?",
        "L'intensité maximale de court-circuit qu'il peut interrompre sans être détérioré",
        [
          "Le nombre d'appareils qu'il peut alimenter",
          "La durée de vie de ses contacts en années",
          "La tension nominale du réseau",
        ],
        `Un disjoncteur au pouvoir de coupure insuffisant peut être détruit lors d'un court-circuit. ${A23}`,
        [
          "Ce n'est pas une notion de nombre d'appareils.",
          "Il ne s'agit pas d'une durée de vie.",
          "La tension nominale est une autre caractéristique.",
        ],
        2,
      ),
    ],
  },
  {
    id: "am-annales-calculs",
    title: "Annales : calculs de chantier",
    description:
      "Calculs repris des annales officielles : dalle de béton, vidange de conduite, surfaces à peindre, compteur d'eau, fractions, échelles, bons de commande et conversions.",
    level: "Approfondissement",
    questions: [
      Q(
        "Une dalle de béton mesure 12 m × 6 m × 0,20 m. Quel est son volume ?",
        "14,4 m³",
        ["72 m³", "1 440 m³", "18,2 m³"],
        `Volume = longueur × largeur × épaisseur = 12 × 6 × 0,20 = 14,4 m³. ${A25}`,
        [
          "72 est la surface en m², pas le volume.",
          "On a utilisé 20 au lieu de 0,20 m : il faut convertir les centimètres en mètres.",
          "On a additionné les dimensions au lieu de les multiplier.",
        ],
      ),
      Q(
        "Pour 1 m³ de béton, il faut 350 kg de ciment. Combien de ciment pour cette dalle de 14,4 m³ ?",
        "5 040 kg",
        ["350 kg", "504 kg", "50 400 kg"],
        `14,4 × 350 = 5 040 kg. ${A25}`,
        [
          "350 kg suffit pour 1 m³ seulement.",
          "Erreur d'un facteur 10.",
          "Erreur d'un facteur 10 dans l'autre sens.",
        ],
        1,
      ),
      Q(
        "Pour 1 m³ de béton, il faut 500 litres de sable (densité 1,6 kg/L). Quelle masse de sable pour la dalle de 14,4 m³ ?",
        "11 520 kg",
        ["7 200 kg", "18 432 kg", "11,52 kg"],
        `Volume : 14,4 × 500 = 7 200 L ; masse : 7 200 × 1,6 = 11 520 kg. ${A25}`,
        [
          "7 200 est le volume en litres : il faut multiplier par la densité.",
          "La densité a été appliquée deux fois.",
          "Erreur de conversion : 11 520 kg = 11,52 tonnes.",
        ],
      ),
      Q(
        "Pour cette dalle de 14,4 m³ : 5 040 kg de ciment, 11 520 kg de sable, 17 136 kg de gravier et 2 520 kg d'eau. Quelle est sa masse totale ?",
        "36,2 tonnes",
        ["30,2 tonnes", "14,4 tonnes", "362 tonnes"],
        `5 040 + 11 520 + 17 136 + 2 520 = 36 216 kg, soit environ 36,2 t. ${A25}`,
        [
          "30,18 t est la masse d'une dalle de 12 m³ (10 m × 6 m × 0,20 m).",
          "14,4 est le volume en m³, pas la masse.",
          "Erreur d'un facteur 10.",
        ],
        2,
      ),
      Q(
        "Une dalle de 10 m × 6 m × 0,20 m demande 4,2 t de ciment, 9,6 t de sable, 14,28 t de gravier et 2,1 t d'eau. Quelle est sa masse ?",
        "30,18 tonnes",
        ["28,08 tonnes", "30,18 kg", "301,8 tonnes"],
        `4,2 + 9,6 + 14,28 + 2,1 = 30,18 t. ${CP25}`,
        [
          "On a oublié 2,1 t : l'eau compte dans la masse.",
          "Erreur d'unité : la réponse est en tonnes.",
          "Erreur d'un facteur 10.",
        ],
      ),
      Q(
        "Une conduite de 150 m a un diamètre intérieur de 250 mm. Quel volume d'eau contient-elle (π ≈ 3,14) ?",
        "7,36 m³",
        ["29,4 m³", "58,9 m³", "0,74 m³"],
        `V = π × r² × L = 3,14 × 0,125² × 150 = 7,36 m³, soit environ 7 360 litres. ${A23}`,
        [
          "On a utilisé le diamètre à la place du rayon.",
          "On a oublié d'élever le rayon au carré.",
          "Erreur d'un facteur 10.",
        ],
        1,
      ),
      Q(
        "Un robinet de vidange débite 10 litres par seconde. Combien de temps pour vidanger 7 360 litres ?",
        "12 min 16 s",
        ["7 min 36 s", "2 h 02 min 40 s", "1 min 14 s"],
        `7 360 ÷ 10 = 736 secondes = 12 × 60 + 16, soit 12 min 16 s. ${A23}`,
        [
          "736 s ne s'écrit pas 7 min 36 s.",
          "On a divisé par 1 L/s au lieu de 10 L/s.",
          "On a divisé une seconde fois par 10.",
        ],
      ),
      Q(
        "Une conduite présente un dénivelé de 50 m. Quelle pression (en bar) règne approximativement à son point bas, à l'arrêt ?",
        "Environ 5 bar",
        ["50 bar", "0,5 bar", "500 bar"],
        `10 m de colonne d'eau correspondent à environ 1 bar : 50 m ≈ 5 bar. ${A23}`,
        [
          "Erreur d'un facteur 10 : 10 m de colonne d'eau ≈ 1 bar.",
          "Erreur d'un facteur 10 dans l'autre sens.",
          "Erreur d'un facteur 100.",
        ],
        2,
      ),
      Q(
        "Quelle est la puissance consommée par un appareil alimenté en 220 V qui appelle 10 A ?",
        "2,2 kW",
        ["22 kW", "0,22 kW", "2,2 W"],
        `P = U × I = 220 × 10 = 2 200 W = 2,2 kW. ${A23}`,
        [
          "Erreur d'un facteur 10.",
          "Erreur d'un facteur 10 dans l'autre sens.",
          "2 200 W valent 2,2 kW, pas 2,2 W.",
        ],
      ),
      Q(
        "Sur un plan au 1/200, à combien de mètres sur le terrain correspondent 2 centimètres ?",
        "4 m",
        ["0,4 m", "40 m", "400 m"],
        `2 cm × 200 = 400 cm = 4 m. ${A25}`,
        [
          "Erreur d'un facteur 10 dans la conversion.",
          "Erreur d'un facteur 10 dans l'autre sens.",
          "400 est la valeur en cm, pas en m.",
        ],
        1,
      ),
      Q(
        "Sur un plan, 2 cm représentent 1 m sur le terrain. Quelle est l'échelle du plan ?",
        "1/50",
        ["1/200", "1/100", "1/20"],
        `1 m = 100 cm ; 100 ÷ 2 = 50 : 1 cm sur le plan représente 50 cm. ${A25}`,
        [
          "Au 1/200, 2 cm représentent 4 m.",
          "Au 1/100, 2 cm représentent 2 m.",
          "Au 1/20, 2 cm représentent 0,40 m.",
        ],
      ),
      Q(
        "Combien de secondes représentent 2 heures, 46 minutes et 40 secondes ?",
        "10 000 secondes",
        ["9 960 secondes", "7 286 secondes", "1 000 secondes"],
        `2 × 3 600 + 46 × 60 + 40 = 7 200 + 2 760 + 40 = 10 000 s. ${A25}`,
        [
          "Les 40 secondes ont été oubliées.",
          "Les 46 minutes ont été comptées comme 46 secondes.",
          "Confusion entre heures, minutes et secondes.",
        ],
        2,
      ),
      Q(
        "Quelle distance parcourt-on en 48 minutes à 80 km/h, en hectomètres ?",
        "640 hm",
        ["64 hm", "6 400 hm", "3 840 hm"],
        `48 min = 0,8 h ; 80 × 0,8 = 64 km = 640 hm (1 km = 10 hm). ${A25}`,
        [
          "64 est la distance en kilomètres.",
          "Erreur d'un facteur 10.",
          "On a multiplié 80 par 48 sans convertir les minutes en heures.",
        ],
        1,
      ),
      Q(
        "Une salle de 12 m × 6 m × 2,40 m a 4 fenêtres de 1,20 × 1,20 m, une porte de 0,90 × 2 m et un tableau non démontable de 3 × 2 m. Quelle surface de murs à peindre ?",
        "72,84 m²",
        ["86,40 m²", "74,64 m²", "78,84 m²"],
        `Murs : 2 × (12 + 6) × 2,40 = 86,40 m². Ouvertures : 5,76 + 1,80 + 6 = 13,56 m². 86,40 − 13,56 = 72,84 m². ${A25}`,
        [
          "On n'a retranché aucune ouverture.",
          "La porte n'a pas été retranchée.",
          "Le tableau non démontable n'a pas été retranché.",
        ],
      ),
      Q(
        "Les murs font 72,84 m². La peinture se vend en pots de 5 L (1 L pour 5 m²) et se passe en 2 couches. Combien de pots faut-il ?",
        "6 pots",
        ["3 pots", "5 pots", "15 pots"],
        `72,84 ÷ 5 = 14,568 L par couche ; × 2 = 29,136 L ; ÷ 5 = 5,83 pots, arrondi à 6. ${A25}`,
        [
          "On n'a compté qu'une seule couche.",
          "5,83 s'arrondit au supérieur : 6.",
          "On a raisonné en pots de 1 L au lieu de 5 L.",
        ],
        2,
      ),
      Q(
        "Quelle surface de carrelage faut-il changer dans une salle de 12 m × 6 m ?",
        "72 m²",
        ["72,84 m²", "36 m²", "86,40 m²"],
        `Surface du sol = 12 × 6 = 72 m². ${A25}`,
        [
          "72,84 m² est la surface des murs à peindre.",
          "36 m est le périmètre, pas la surface.",
          "86,40 m² est la surface totale des murs, avant déduction.",
        ],
      ),
      Q(
        "Le compteur d'eau d'un gymnase (en m³) passe de 00125511 à 00134464. Quelle est la consommation du mois, en litres ?",
        "8 953 000 litres",
        ["8 953 litres", "895 300 litres", "8 953 m³"],
        `134 464 − 125 511 = 8 953 m³ ; 1 m³ = 1 000 L, soit 8 953 000 L. ${CAD}`,
        [
          "8 953 est la consommation en m³, pas en litres.",
          "Erreur d'un facteur 10.",
          "La valeur est exacte en m³, mais la question demande des litres.",
        ],
        1,
      ),
      Q(
        "Aux élections professionnelles, la liste A obtient 1/3 des voix exprimées, la liste B 2/5, la liste C 1/7. Quelle fraction obtient la liste D ?",
        "13/105",
        ["92/105", "1/4", "1/105"],
        `1/3 + 2/5 + 1/7 = 35/105 + 42/105 + 15/105 = 92/105 ; D = 1 − 92/105 = 13/105. ${CAD}`,
        [
          "92/105 est la somme des trois premières listes.",
          "1/4 ne se déduit pas des fractions données.",
          "Le numérateur ne vient pas du calcul.",
        ],
      ),
      Q(
        "315 agents sont votants, mais seuls les 2/3 se sont exprimés. Combien de voix pour la liste B, qui obtient 2/5 des voix exprimées ?",
        "84 voix",
        ["126 voix", "70 voix", "210 voix"],
        `Voix exprimées : 315 × 2/3 = 210 ; liste B : 210 × 2/5 = 84. ${CAD}`,
        [
          "126 = 2/5 de 315 : on a oublié que seuls les 2/3 se sont exprimés.",
          "70 est le nombre de voix de la liste A.",
          "210 est le nombre total de voix exprimées.",
        ],
        2,
      ),
      Q(
        "Une commande atteint 3 573,70 € HT. Après une remise fidélité de 5 %, quel est le nouveau montant HT ?",
        "3 395,02 €",
        ["3 568,70 €", "3 752,39 €", "1 786,85 €"],
        `3 573,70 × 0,95 = 3 395,015, arrondi à 3 395,02 €. ${CP25}`,
        [
          "On a retranché 5 € au lieu de 5 %.",
          "On a ajouté 5 % au lieu de les retrancher.",
          "On a pris 50 % au lieu de 5 %.",
        ],
      ),
      Q(
        "Il faut 80 L de savon vendu en bidons de 20 L à 65,30 € HT l'unité. Quel est le montant TTC (TVA 20 %) ?",
        "313,44 €",
        ["261,20 €", "78,36 €", "6 268,80 €"],
        `80 ÷ 20 = 4 bidons ; 4 × 65,30 = 261,20 € HT ; × 1,20 = 313,44 € TTC. ${CP25}`,
        [
          "261,20 € est le montant HT.",
          "78,36 € est le prix TTC d'un seul bidon.",
          "On a compté 80 unités au lieu de 4 bidons.",
        ],
        1,
      ),
      Q(
        "Une tranchée de 1,20 m de profondeur a 0,60 m de large au fond. Ses parois sont talutées à 1 pour 1. Quelle largeur en haut ?",
        "3,00 m",
        ["1,80 m", "2,40 m", "1,20 m"],
        `Avec une pente de 1 pour 1, chaque bord s'écarte de 1,20 m : 0,60 + 2 × 1,20 = 3,00 m. ${A23}`,
        [
          "On n'a compté le talus que d'un côté.",
          "On a oublié la largeur du fond.",
          "1,20 m est la profondeur.",
        ],
        2,
      ),
      Q(
        "5 agents réalisent un travail en 12 jours. En combien de jours 8 agents, travaillant au même rythme, le réalisent-ils ?",
        "7,5 jours",
        ["19,2 jours", "12 jours", "4,5 jours"],
        `Le travail représente 5 × 12 = 60 jours-agent ; 60 ÷ 8 = 7,5 jours. Règle de trois à proportionnalité inverse. ${CAD}`,
        [
          "On a raisonné comme si plus d'agents demandaient plus de temps.",
          "Le nombre d'agents modifie la durée.",
          "Le calcul ne donne pas 4,5.",
        ],
      ),
      Q(
        "Un gravier a une densité de 1,7 kg/L. Quelle est la masse de 1 m³ de ce gravier ?",
        "1 700 kg",
        ["1,7 kg", "170 kg", "17 000 kg"],
        `1 m³ = 1 000 L ; 1 000 × 1,7 = 1 700 kg. ${CAD}`,
        [
          "Erreur de conversion de m³ en litres.",
          "Erreur d'un facteur 10.",
          "Erreur d'un facteur 10 dans l'autre sens.",
        ],
      ),
      Q(
        "Une bordure fait le tour d'un massif circulaire de rayon 6 m. Quelle longueur (π ≈ 3,14) ?",
        "37,68 m",
        ["113,04 m", "18,84 m", "75,36 m"],
        `Périmètre = 2 × π × r = 2 × 3,14 × 6 = 37,68 m. ${CAD}`,
        [
          "113,04 est la surface en m².",
          "18,84 est la moitié du périmètre.",
          "75,36 correspond à un rayon de 12 m.",
        ],
        1,
      ),
      Q(
        "Un tas de sable conique a un rayon de 1,5 m et une hauteur de 1,2 m. Quel est son volume (π ≈ 3,14) ?",
        "2,83 m³",
        ["8,48 m³", "1,88 m³", "5,65 m³"],
        `V = (1/3) × π × r² × h = 3,14 × 2,25 × 1,2 ÷ 3 = 2,826 m³. ${CAD}`,
        [
          "On a oublié le tiers : c'est le volume d'un cylindre.",
          "On a oublié d'élever le rayon au carré.",
          "On a pris les 2/3 au lieu du tiers.",
        ],
        2,
      ),
    ],
  },
];
