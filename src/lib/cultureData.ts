export interface CultureRepere {
  date: string;
  fait: string;
}

export interface CultureDebat {
  question: string;
  pour: string[];
  contre: string[];
  position: string;
}

export interface CultureDossier {
  id: string;
  title: string;
  famille: string;
  resume: string;
  duree: string;
  /** Définitions des notions à maîtriser. */
  notions: { terme: string; definition: string }[];
  reperes: CultureRepere[];
  chiffres: { valeur: string; libelle: string }[];
  acteurs: { nom: string; role: string }[];
  debats: CultureDebat[];
  exemples: { titre: string; contenu: string }[];
  sujets: string[];
  citations: string[];
}

export const cultureDossiers: CultureDossier[] = [
  {
    id: "decentralisation",
    title: "Décentralisation et organisation territoriale",
    famille: "Institutions",
    resume:
      "Quarante ans après les lois Defferre, la France cherche encore l'équilibre entre proximité, efficacité et égalité des territoires.",
    duree: "45 minutes",
    notions: [
      {
        terme: "Décentralisation",
        definition:
          "Transfert de compétences de l'État vers des collectivités dotées de la personnalité juridique, d'organes élus et d'un budget propre.",
      },
      {
        terme: "Déconcentration",
        definition:
          "Délégation de pouvoirs à l'intérieur de l'État, à ses services locaux (préfet, directions régionales). L'État reste seul décideur.",
      },
      {
        terme: "Libre administration",
        definition:
          "Principe de valeur constitutionnelle (article 72) : les collectivités s'administrent librement par des conseils élus, dans les conditions fixées par la loi.",
      },
      {
        terme: "Subsidiarité",
        definition:
          "La compétence revient à l'échelon le mieux placé pour l'exercer, au plus près du citoyen.",
      },
      {
        terme: "Clause de compétence générale",
        definition:
          "Faculté de traiter toute affaire d'intérêt local ; conservée par la commune, supprimée pour le département et la région par la loi NOTRe.",
      },
    ],
    reperes: [
      { date: "1789-1790", fait: "Création des communes et des départements." },
      { date: "1884", fait: "Loi municipale : élection du maire par le conseil municipal." },
      {
        date: "1982",
        fait: "Loi Defferre : suppression de la tutelle a priori du préfet, acte I de la décentralisation.",
      },
      {
        date: "1983",
        fait: "Lois de répartition des compétences entre communes, départements, régions.",
      },
      {
        date: "2003",
        fait: "Révision constitutionnelle : « l'organisation de la République est décentralisée », autonomie financière, référendum local.",
      },
      {
        date: "2014-2015",
        fait: "Loi MAPTAM (métropoles, chef de filat) puis loi NOTRe (13 régions, compétences régionales renforcées).",
      },
      {
        date: "2022",
        fait: "Loi 3DS : différenciation, décentralisation, déconcentration, simplification.",
      },
    ],
    chiffres: [
      { valeur: "34 935", libelle: "communes environ en France" },
      { valeur: "101", libelle: "départements, dont 5 d'outre-mer" },
      { valeur: "18", libelle: "régions, dont 5 d'outre-mer" },
      { valeur: "~1 250", libelle: "intercommunalités à fiscalité propre" },
      { valeur: "~1,9 M", libelle: "agents dans la fonction publique territoriale" },
      { valeur: "~70 %", libelle: "de l'investissement public civil porté par les collectivités" },
    ],
    acteurs: [
      { nom: "Le maire", role: "Exécutif de la commune et agent de l'État (état civil, police)." },
      {
        nom: "Le préfet",
        role: "Représentant de l'État, exerce le contrôle de légalité a posteriori.",
      },
      {
        nom: "L'EPCI",
        role: "Communauté de communes, d'agglomération, urbaine ou métropole : exerce les compétences transférées.",
      },
      {
        nom: "La chambre régionale des comptes",
        role: "Contrôle budgétaire et examen de la gestion des collectivités.",
      },
    ],
    debats: [
      {
        question: "Faut-il poursuivre la décentralisation ou recentraliser ?",
        pour: [
          "La proximité permet des politiques adaptées aux réalités locales.",
          "Les collectivités ont démontré leur réactivité lors des crises récentes.",
          "La différenciation évite d'appliquer la même règle à des territoires très dissemblables.",
        ],
        contre: [
          "Les inégalités entre territoires riches et pauvres s'accroissent.",
          "L'empilement des échelons nuit à la lisibilité pour le citoyen.",
          "L'autonomie fiscale s'est réduite : les collectivités dépendent de dotations.",
        ],
        position:
          "Une copie solide ne tranche pas brutalement : elle montre que la décentralisation n'a de sens qu'accompagnée d'une péréquation efficace et d'une clarification des compétences.",
      },
      {
        question: "L'intercommunalité a-t-elle affaibli la commune ?",
        pour: [
          "Elle mutualise des moyens hors de portée des petites communes.",
          "Elle permet de conduire des politiques à l'échelle du bassin de vie.",
        ],
        contre: [
          "Les conseillers communautaires sont peu identifiés par les habitants.",
          "Le maire perd des leviers concrets tout en restant l'interlocuteur des administrés.",
        ],
        position:
          "L'enjeu est démocratique autant que technique : rapprocher la décision intercommunale du citoyen.",
      },
    ],
    exemples: [
      {
        titre: "Les compétences obligatoires d'une communauté de communes",
        contenu:
          "Aménagement de l'espace, développement économique, gestion des milieux aquatiques et prévention des inondations (GEMAPI), aire d'accueil des gens du voyage, collecte et traitement des déchets, assainissement et eau.",
      },
      {
        titre: "Le contrôle de légalité en pratique",
        contenu:
          "Une délibération est exécutoire dès sa transmission au préfet et sa publication. Le préfet peut, dans les deux mois, saisir le tribunal administratif s'il l'estime illégale : c'est le déféré préfectoral.",
      },
    ],
    sujets: [
      "La décentralisation a-t-elle rapproché la décision du citoyen ?",
      "Faut-il supprimer un échelon territorial ?",
      "L'autonomie financière des collectivités est-elle encore réelle ?",
      "La différenciation territoriale menace-t-elle l'égalité républicaine ?",
    ],
    citations: [
      "« La France a besoin d'un pouvoir fort au sommet et de libertés à la base. » — esprit des lois de 1982",
      "« L'organisation de la République est décentralisée. » — article 1er de la Constitution, depuis 2003",
    ],
  },
  {
    id: "service-public",
    title: "Le service public et la relation à l'usager",
    famille: "Action publique",
    resume:
      "Les grands principes du service public restent le socle du métier d'agent, mais leurs conditions d'application se transforment avec le numérique et les contraintes budgétaires.",
    duree: "40 minutes",
    notions: [
      {
        terme: "Lois de Rolland",
        definition:
          "Les trois principes classiques du service public : continuité, égalité, mutabilité (adaptabilité).",
      },
      {
        terme: "SPA / SPIC",
        definition:
          "Service public administratif (régime de droit public) ou industriel et commercial (droit privé dominant, financé par une redevance de l'usager).",
      },
      {
        terme: "Délégation de service public",
        definition:
          "Contrat par lequel une collectivité confie la gestion d'un service à un tiers dont la rémunération est substantiellement liée aux résultats d'exploitation.",
      },
      {
        terme: "Médiateur / défenseur des droits",
        definition:
          "Autorité indépendante saisissable gratuitement par tout usager s'estimant lésé par un service public.",
      },
      {
        terme: "Illectronisme",
        definition:
          "Difficulté ou incapacité à utiliser les outils numériques, qui touche une part importante des usagers des services publics.",
      },
    ],
    reperes: [
      { date: "1901-1930", fait: "Construction jurisprudentielle du service public (arrêts Blanco, Bac d'Eloka)." },
      { date: "1938", fait: "Arrêt Caisse primaire Aide et Protection : un privé peut gérer un service public." },
      { date: "2000", fait: "Loi DCRA : droits des usagers, motivation et accusé de réception des demandes." },
      { date: "2016", fait: "Loi pour une République numérique : ouverture des données publiques." },
      { date: "2018", fait: "Loi ESSOC : « droit à l'erreur » et administration de conseil." },
      { date: "2019-2024", fait: "Déploiement des France Services pour rapprocher les démarches des habitants." },
    ],
    chiffres: [
      { valeur: "~2 800", libelle: "espaces France Services sur le territoire" },
      { valeur: "~13 M", libelle: "personnes en difficulté avec le numérique" },
      { valeur: "5,7 M", libelle: "agents publics, trois versants confondus" },
      { valeur: "~250", libelle: "démarches administratives les plus utilisées suivies en qualité" },
    ],
    acteurs: [
      { nom: "L'usager", role: "Destinataire du service, titulaire de droits opposables." },
      { nom: "L'agent d'accueil", role: "Premier visage du service public, rôle de médiation et d'orientation." },
      { nom: "Le CCAS", role: "Établissement public communal chargé de l'action sociale de proximité." },
      { nom: "Le Défenseur des droits", role: "Traite les réclamations et lutte contre les discriminations." },
    ],
    debats: [
      {
        question: "La dématérialisation améliore-t-elle le service rendu ?",
        pour: [
          "Démarches accessibles 24 h/24, délais raccourcis, moins de déplacements.",
          "Les agents se recentrent sur les situations complexes.",
          "Traçabilité et égalité de traitement renforcées.",
        ],
        contre: [
          "Exclusion des publics éloignés du numérique, souvent les plus fragiles.",
          "Disparition du contact humain et sentiment d'abandon.",
          "Pannes et erreurs difficiles à corriger sans interlocuteur.",
        ],
        position:
          "Le « zéro guichet » est un risque : la bonne réponse associe démarche en ligne et accueil physique maintenu, principe rappelé par le Défenseur des droits.",
      },
      {
        question: "Le service public doit-il être géré comme une entreprise ?",
        pour: [
          "La recherche d'efficience protège l'argent public.",
          "Les indicateurs de qualité rendent le service redevable devant l'usager.",
        ],
        contre: [
          "L'égalité et la continuité ne se mesurent pas en rentabilité.",
          "Certaines missions sont par nature déficitaires et pourtant essentielles.",
        ],
        position:
          "Distinguez performance (bien remplir la mission) et rentabilité (dégager un profit) : seule la première s'applique au service public.",
      },
    ],
    exemples: [
      {
        titre: "La continuité en pratique",
        contenu:
          "Le droit de grève des agents se concilie avec la continuité : préavis obligatoire, service minimum d'accueil dans les écoles, réquisitions possibles pour les fonctions vitales.",
      },
      {
        titre: "L'égalité n'est pas l'uniformité",
        contenu:
          "Des tarifs de cantine modulés selon le quotient familial sont légaux : des situations différentes peuvent être traitées différemment dans un but d'intérêt général.",
      },
    ],
    sujets: [
      "Le numérique rapproche-t-il l'administration de l'usager ?",
      "Que signifie encore l'égalité devant le service public ?",
      "Faut-il rendre des comptes à l'usager comme à un client ?",
      "L'accueil du public : simple fonction ou cœur du métier ?",
    ],
    citations: [
      "« Le service public est l'un des rares biens que possèdent ceux qui ne possèdent rien. »",
      "« Nul n'est censé être exclu du service public par la technique. » — esprit des rapports du Défenseur des droits",
    ],
  },
  {
    id: "transition-ecologique",
    title: "Transition écologique et collectivités",
    famille: "Environnement",
    resume:
      "Les collectivités concentrent une grande part des leviers concrets de la transition : bâtiments, mobilité, déchets, eau, urbanisme, alimentation.",
    duree: "45 minutes",
    notions: [
      {
        terme: "ZAN",
        definition:
          "Zéro artificialisation nette : trajectoire de réduction de la consommation d'espaces naturels, avec neutralité visée à l'horizon 2050.",
      },
      {
        terme: "PCAET",
        definition:
          "Plan climat-air-énergie territorial, obligatoire pour les intercommunalités de plus de 20 000 habitants.",
      },
      {
        terme: "GEMAPI",
        definition:
          "Gestion des milieux aquatiques et prévention des inondations, compétence intercommunale obligatoire depuis 2018.",
      },
      {
        terme: "Îlot de chaleur urbain",
        definition:
          "Écart de température entre le centre urbain minéralisé et sa périphérie, pouvant dépasser plusieurs degrés la nuit.",
      },
      {
        terme: "Sobriété",
        definition:
          "Réduction de la demande en énergie et en ressources par les usages, distincte de l'efficacité qui porte sur les équipements.",
      },
    ],
    reperes: [
      { date: "2015", fait: "Accord de Paris ; loi de transition énergétique pour la croissance verte." },
      { date: "2019", fait: "Loi énergie-climat : objectif de neutralité carbone en 2050." },
      { date: "2021", fait: "Loi Climat et résilience : ZAN, ZFE, rénovation des logements." },
      { date: "2022", fait: "Plan de sobriété énergétique après la crise des prix de l'énergie." },
      { date: "2023-2024", fait: "Planification écologique territorialisée, COP régionales." },
    ],
    chiffres: [
      { valeur: "~20 000 ha", libelle: "d'espaces artificialisés chaque année en France" },
      { valeur: "~76 %", libelle: "de la population française vivant en zone urbaine" },
      { valeur: "~30 %", libelle: "de hausse moyenne des dépenses d'énergie des collectivités en 2022-2023" },
      { valeur: "~280 M", libelle: "de tonnes de déchets produites chaque année, tous acteurs confondus" },
    ],
    acteurs: [
      { nom: "L'ADEME", role: "Agence de la transition écologique : expertise et financement des projets locaux." },
      { nom: "Les syndicats d'énergie", role: "Portent la rénovation et l'éclairage public à l'échelle départementale." },
      { nom: "La région", role: "Chef de file climat-air-énergie, autorité de gestion des fonds européens." },
      { nom: "Les habitants", role: "La réussite dépend de l'acceptabilité et du changement des usages." },
    ],
    debats: [
      {
        question: "Le ZAN est-il applicable sans bloquer les communes rurales ?",
        pour: [
          "L'étalement urbain détruit des terres agricoles et accroît la dépendance à la voiture.",
          "Le renouvellement urbain (friches, logements vacants) offre un gisement important.",
        ],
        contre: [
          "Les communes déjà peu construites craignent d'être privées de tout développement.",
          "La réhabilitation coûte plus cher que la construction neuve en périphérie.",
        ],
        position:
          "La réponse passe par la mutualisation des droits à construire à l'échelle intercommunale et par l'aide à la remise sur le marché des friches.",
      },
      {
        question: "Faut-il privilégier la sobriété ou l'investissement technologique ?",
        pour: [
          "La sobriété produit des effets immédiats et peu coûteux (température, éclairage, usages).",
          "Elle mobilise les agents et les habitants autour d'un objectif partagé.",
        ],
        contre: [
          "Sans rénovation lourde, les gains atteignent vite un plafond.",
          "La sobriété peut dégrader le confort et le service si elle est mal expliquée.",
        ],
        position:
          "Les deux se complètent : la sobriété finance dans le temps les investissements structurels.",
      },
    ],
    exemples: [
      {
        titre: "Rénovation d'une école",
        contenu:
          "Isolation des combles, remplacement des menuiseries, régulation du chauffage et végétalisation de la cour : gains énergétiques mesurables et amélioration du confort d'été.",
      },
      {
        titre: "Restauration collective",
        contenu:
          "La loi EGalim impose au moins 50 % de produits durables ou sous signe de qualité, dont 20 % de bio, et un menu végétarien hebdomadaire.",
      },
    ],
    sujets: [
      "Les collectivités sont-elles à la hauteur de l'urgence climatique ?",
      "Sobriété : contrainte subie ou projet politique ?",
      "L'adaptation au changement climatique doit-elle primer sur l'atténuation ?",
      "Comment concilier développement local et zéro artificialisation nette ?",
    ],
    citations: [
      "« Penser globalement, agir localement. » — devise popularisée par René Dubos",
      "« L'adaptation n'est plus une option, c'est une politique publique à part entière. »",
    ],
  },
  {
    id: "cohesion-sociale",
    title: "Cohésion sociale, égalité et politique de la ville",
    famille: "Société",
    resume:
      "Pauvreté, logement, éducation, vieillissement : les collectivités sont en première ligne des politiques de solidarité, souvent avec le département comme chef de file.",
    duree: "40 minutes",
    notions: [
      {
        terme: "Quartier prioritaire (QPV)",
        definition:
          "Territoire identifié sur le critère du revenu des habitants, bénéficiant du contrat de ville et de moyens renforcés.",
      },
      {
        terme: "Chef de filat social",
        definition:
          "Le département coordonne l'action sociale : RSA, protection de l'enfance, autonomie des personnes âgées et handicapées.",
      },
      {
        terme: "Logement social",
        definition:
          "La loi SRU impose 20 à 25 % de logements sociaux dans les communes concernées, sous peine de pénalités financières.",
      },
      {
        terme: "Laïcité",
        definition:
          "Neutralité de l'État et des agents, liberté de conscience des usagers ; l'agent est astreint à une stricte neutralité dans l'exercice de ses fonctions.",
      },
      {
        terme: "Non-recours",
        definition:
          "Fait, pour une personne éligible, de ne pas demander une prestation à laquelle elle a droit.",
      },
    ],
    reperes: [
      { date: "1988", fait: "Création du RMI, devenu RSA en 2009." },
      { date: "2000", fait: "Loi SRU : obligation de logements sociaux et mixité urbaine." },
      { date: "2005", fait: "Loi sur l'égalité des droits et des chances des personnes handicapées." },
      { date: "2014", fait: "Loi Lamy : nouvelle géographie prioritaire, contrats de ville." },
      { date: "2021", fait: "Loi confortant le respect des principes de la République." },
    ],
    chiffres: [
      { valeur: "~9,1 M", libelle: "personnes sous le seuil de pauvreté en France" },
      { valeur: "~1 500", libelle: "quartiers prioritaires de la politique de la ville" },
      { valeur: "~2,4 M", libelle: "demandes de logement social en attente" },
      { valeur: "~30 %", libelle: "de non-recours estimé pour certaines prestations sociales" },
    ],
    acteurs: [
      { nom: "Le département", role: "Chef de file de l'action sociale et de l'autonomie." },
      { nom: "Le CCAS / CIAS", role: "Analyse des besoins sociaux, aides facultatives, accompagnement." },
      { nom: "Les bailleurs sociaux", role: "Construction et gestion du parc de logements sociaux." },
      { nom: "Le tissu associatif", role: "Relais indispensable de proximité, souvent conventionné." },
    ],
    debats: [
      {
        question: "Faut-il conditionner les aides sociales à une contrepartie ?",
        pour: [
          "L'accompagnement renforcé favoriserait le retour à l'activité.",
          "La contrepartie légitime la solidarité aux yeux des contribuables.",
        ],
        contre: [
          "Le risque est d'accroître le non-recours des personnes les plus fragiles.",
          "Les freins réels (mobilité, garde d'enfants, santé) ne dépendent pas de la volonté.",
        ],
        position:
          "Les copies les mieux notées distinguent l'accompagnement intensif, efficace, de la sanction, dont les effets sont incertains.",
      },
      {
        question: "La laïcité : contrainte ou protection ?",
        pour: [
          "Elle garantit à chacun la liberté de croire ou non et l'égalité de traitement.",
          "Elle protège l'agent des pressions de toute nature.",
        ],
        contre: [
          "Son application concrète (accueil, cantine, sorties scolaires) reste source de tensions.",
          "Elle est parfois invoquée pour interdire au-delà de ce que le droit prévoit.",
        ],
        position:
          "Rappelez la distinction fondamentale : neutralité stricte pour l'agent, liberté d'expression religieuse pour l'usager, sauf trouble à l'ordre public ou à la continuité du service.",
      },
    ],
    exemples: [
      {
        titre: "L'analyse des besoins sociaux",
        contenu:
          "Le CCAS conduit une ABS obligatoire en début de mandat : elle objective les besoins du territoire et fonde le projet social de la commune.",
      },
      {
        titre: "Aller vers",
        contenu:
          "Bus itinérants, permanences en pied d'immeuble, médiation numérique : des dispositifs qui réduisent le non-recours en allant au-devant des personnes.",
      },
    ],
    sujets: [
      "La politique de la ville a-t-elle échoué ?",
      "Comment lutter contre le non-recours aux droits ?",
      "La laïcité dans les services publics locaux : quelles règles pour l'agent ?",
      "Le vieillissement de la population : quels défis pour les collectivités ?",
    ],
    citations: [
      "« La République assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion. » — article 1er de la Constitution",
      "« L'accès aux droits ne se décrète pas, il s'organise. »",
    ],
  },
  {
    id: "numerique-donnees",
    title: "Numérique, données publiques et intelligence artificielle",
    famille: "Transformation publique",
    resume:
      "Les collectivités produisent, exploitent et protègent des données massives ; l'IA arrive dans les services sans que le cadre professionnel soit encore stabilisé.",
    duree: "40 minutes",
    notions: [
      {
        terme: "Open data",
        definition:
          "Obligation de publication en ligne des données publiques pour les collectivités de plus de 3 500 habitants et 50 agents.",
      },
      {
        terme: "RGPD",
        definition:
          "Règlement européen sur la protection des données : finalité, minimisation, durée de conservation, droits des personnes.",
      },
      {
        terme: "DPO",
        definition:
          "Délégué à la protection des données, obligatoire dans toute collectivité, souvent mutualisé.",
      },
      {
        terme: "Souveraineté numérique",
        definition:
          "Capacité à maîtriser l'hébergement, les logiciels et les données publiques sans dépendance critique à un fournisseur étranger.",
      },
      {
        terme: "Cybersécurité",
        definition:
          "Protection des systèmes d'information ; les collectivités figurent parmi les cibles les plus fréquentes des rançongiciels.",
      },
    ],
    reperes: [
      { date: "1978", fait: "Loi Informatique et Libertés, création de la CNIL." },
      { date: "2016", fait: "Loi pour une République numérique : ouverture par défaut des données publiques." },
      { date: "2018", fait: "Entrée en application du RGPD." },
      { date: "2022", fait: "Multiplication des cyberattaques contre hôpitaux et collectivités." },
      { date: "2024-2025", fait: "Règlement européen sur l'intelligence artificielle, approche par niveaux de risque." },
    ],
    chiffres: [
      { valeur: "~1 sur 10", libelle: "cyberattaques en France visant une collectivité" },
      { valeur: "3 500", libelle: "habitants : seuil de l'obligation d'open data" },
      { valeur: "72 h", libelle: "délai de notification d'une violation de données à la CNIL" },
      { valeur: "4 %", libelle: "du chiffre d'affaires mondial : plafond des sanctions RGPD" },
    ],
    acteurs: [
      { nom: "La CNIL", role: "Régulateur des données personnelles, conseille et sanctionne." },
      { nom: "L'ANSSI", role: "Agence de cybersécurité : prévention, alerte et réponse aux incidents." },
      { nom: "Le DPO", role: "Garant de la conformité et point de contact des usagers." },
      { nom: "Les opérateurs de services numériques", role: "Hébergeurs et éditeurs, dont dépend la continuité du service." },
    ],
    debats: [
      {
        question: "Faut-il déployer l'IA dans les services publics locaux ?",
        pour: [
          "Gains de temps sur les tâches répétitives, meilleure information des usagers.",
          "Aide à la détection précoce (fraudes, dégradations de réseaux, besoins sociaux).",
        ],
        contre: [
          "Opacité des décisions et risque de biais discriminatoires.",
          "Dépendance technologique et coût réel souvent sous-estimé.",
          "Responsabilité juridique : la décision administrative doit rester imputable à une personne.",
        ],
        position:
          "Le principe cardinal : l'IA assiste, l'humain décide. Toute décision individuelle doit rester explicable et contestable.",
      },
      {
        question: "L'ouverture des données met-elle en danger la vie privée ?",
        pour: [
          "Elle nourrit la transparence démocratique et l'innovation locale.",
          "Elle permet aux citoyens de contrôler l'action publique.",
        ],
        contre: [
          "Le recoupement de jeux de données peut réidentifier des personnes.",
          "Toutes les collectivités n'ont pas les compétences pour anonymiser correctement.",
        ],
        position:
          "Transparence des données publiques, protection stricte des données personnelles : les deux exigences ne s'opposent pas si l'anonymisation est maîtrisée.",
      },
    ],
    exemples: [
      {
        titre: "Après une cyberattaque",
        contenu:
          "Isoler les systèmes, déposer plainte, notifier la CNIL sous 72 heures si des données personnelles sont touchées, informer les usagers, activer le plan de continuité en mode dégradé (papier).",
      },
      {
        titre: "Un projet de vidéoprotection",
        contenu:
          "Autorisation préfectorale, information du public par panneaux, durée de conservation limitée, accès restreint et traçé, analyse d'impact obligatoire si le dispositif est étendu.",
      },
    ],
    sujets: [
      "L'intelligence artificielle peut-elle améliorer le service public sans le déshumaniser ?",
      "Données publiques : jusqu'où aller dans la transparence ?",
      "La cybersécurité, nouvelle mission de service public ?",
      "Le numérique réduit-il ou creuse-t-il les inégalités territoriales ?",
    ],
    citations: [
      "« Les données publiques sont un bien commun. »",
      "« La machine propose, l'agent public décide et en répond. »",
    ],
  },
  {
    id: "finances-publiques",
    title: "Finances publiques locales et contrainte budgétaire",
    famille: "Gestion publique",
    resume:
      "Comprendre d'où vient l'argent des collectivités et comment il est contrôlé permet de traiter la moitié des sujets de culture administrative.",
    duree: "40 minutes",
    notions: [
      {
        terme: "Sections du budget",
        definition:
          "Le budget comprend une section de fonctionnement (dépenses courantes) et une section d'investissement (patrimoine, équipements).",
      },
      {
        terme: "Règle d'or",
        definition:
          "Les collectivités doivent voter un budget en équilibre réel ; l'emprunt ne peut financer que l'investissement, jamais le fonctionnement.",
      },
      {
        terme: "Épargne brute",
        definition:
          "Excédent des recettes réelles de fonctionnement sur les dépenses réelles de fonctionnement : le principal indicateur de santé financière.",
      },
      {
        terme: "DGF",
        definition:
          "Dotation globale de fonctionnement, principal concours financier de l'État aux collectivités.",
      },
      {
        terme: "Péréquation",
        definition:
          "Mécanismes de redistribution entre collectivités riches et pauvres, verticale (par l'État) ou horizontale (entre collectivités).",
      },
    ],
    reperes: [
      { date: "1982-1983", fait: "Transferts de compétences accompagnés de transferts de ressources." },
      { date: "2010", fait: "Suppression de la taxe professionnelle, remplacée par la CET." },
      { date: "2018", fait: "Contrats de Cahors encadrant la hausse des dépenses de fonctionnement." },
      { date: "2020-2023", fait: "Suppression progressive de la taxe d'habitation sur les résidences principales." },
      { date: "2023-2026", fait: "Suppression progressive de la CVAE et débat sur l'autonomie fiscale." },
    ],
    chiffres: [
      { valeur: "~290 Md€", libelle: "de dépenses annuelles des collectivités" },
      { valeur: "~70 %", libelle: "de l'investissement public civil" },
      { valeur: "~8 %", libelle: "de la dette publique portée par les collectivités" },
      { valeur: "~1/2", libelle: "des dépenses de fonctionnement consacré aux charges de personnel dans une commune" },
    ],
    acteurs: [
      { nom: "L'ordonnateur", role: "Le maire ou le président : engage, liquide et mandate la dépense." },
      { nom: "Le comptable public", role: "Contrôle la régularité et paie : c'est le principe de séparation." },
      { nom: "La chambre régionale des comptes", role: "Contrôle des comptes et examen de la gestion." },
      { nom: "Le préfet", role: "Saisit la CRC en cas de budget déséquilibré ou non voté dans les délais." },
    ],
    debats: [
      {
        question: "La suppression des impôts locaux menace-t-elle la libre administration ?",
        pour: [
          "Elle a rendu du pouvoir d'achat aux ménages et simplifié la fiscalité.",
          "La compensation par fraction de TVA a été globalement dynamique.",
        ],
        contre: [
          "Le lien fiscal entre l'habitant et sa commune s'est distendu.",
          "Les collectivités ne maîtrisent plus le taux de leurs recettes principales.",
        ],
        position:
          "Sans pouvoir de taux, l'autonomie financière devient une autonomie de dépense : c'est le cœur du débat constitutionnel actuel.",
      },
      {
        question: "Faut-il réduire les dépenses de fonctionnement des collectivités ?",
        pour: [
          "La contrainte sur les finances publiques nationales est réelle.",
          "Les mutualisations offrent des gains sans dégrader le service.",
        ],
        contre: [
          "Les dépenses reflètent des services rendus à la population.",
          "Une baisse trop forte réduit l'épargne et donc la capacité d'investir.",
        ],
        position:
          "Raisonnez en qualité de dépense plutôt qu'en volume : l'objectif est l'efficacité au regard du service rendu.",
      },
    ],
    exemples: [
      {
        titre: "Lire un budget en trois indicateurs",
        contenu:
          "Épargne brute (capacité à financer l'investissement), capacité de désendettement en années (dette / épargne brute, seuil d'alerte autour de 12 ans), taux d'endettement par habitant.",
      },
      {
        titre: "Le cycle budgétaire",
        contenu:
          "Débat d'orientation budgétaire, vote du budget primitif avant le 15 avril, décisions modificatives en cours d'année, compte administratif et compte de gestion avant le 30 juin de l'année suivante.",
      },
    ],
    sujets: [
      "L'autonomie financière des collectivités est-elle un mythe ?",
      "Investir ou désendetter : quelle priorité pour une commune ?",
      "La péréquation suffit-elle à corriger les inégalités territoriales ?",
      "Performance et service public sont-ils compatibles ?",
    ],
    citations: [
      "« Pas d'autonomie sans ressources propres. »",
      "« Le budget est l'acte politique majeur d'une collectivité. »",
    ],
  },
];

export function getCultureDossier(id: string | undefined): CultureDossier | undefined {
  return cultureDossiers.find((d) => d.id === id);
}
