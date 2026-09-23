export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface QuizTheme {
  id: string;
  title: string;
  description: string;
  level: "Découverte" | "Approfondissement" | "Perfectionnement";
  questions: QuizQuestion[];
}

export const quizThemes: QuizTheme[] = [
  {
    id: "culture-generale",
    title: "Culture générale territoriale",
    description:
      "Institutions françaises, actualité publique, valeurs républicaines : les bases attendues à l'écrit comme à l'oral.",
    level: "Découverte",
    questions: [
      {
        question: "Quelle est la devise de la République française ?",
        options: [
          "Liberté, Égalité, Fraternité",
          "Travail, Famille, Patrie",
          "Unité, Justice, Progrès",
          "Honneur, Patrie, Valeur",
        ],
        answerIndex: 0,
        explanation:
          "L'article 2 de la Constitution de 1958 énonce : « La devise de la République est « Liberté, Égalité, Fraternité » ».",
      },
      {
        question:
          "Par quelle loi emblématique de 1982 la décentralisation a-t-elle véritablement été lancée ?",
        options: [
          "La loi Pasqua",
          "La loi Defferre",
          "La loi Chevènement",
          "La loi Vaillant",
        ],
        answerIndex: 1,
        explanation:
          "La loi du 2 mars 1982, dite « loi Defferre », relative aux droits et libertés des communes, des départements et des régions, marque le premier acte de la décentralisation.",
      },
      {
        question: "Qui a composé « La Marseillaise », hymne national français ?",
        options: [
          "Victor Hugo",
          "Claude Joseph Rouget de Lisle",
          "Hector Berlioz",
          "Jean-Jacques Rousseau",
        ],
        answerIndex: 1,
        explanation:
          "Rouget de Lisle a composé le « Chant de guerre pour l'armée du Rhin » en 1792 à Strasbourg, devenu « La Marseillaise », hymne national (article 2 de la Constitution).",
      },
      {
        question:
          "Quel est le nombre de régions métropolitaines en France (y compris la Corse) ?",
        options: ["22", "13", "18", "26"],
        answerIndex: 1,
        explanation:
          "La France métropolitaine compte 13 régions depuis la réforme territoriale de 2016. Avec les 5 régions d'outre-mer, le total s'élève à 18 régions.",
      },
      {
        question:
          "Quelle ville est le siège principal des institutions de l'Union européenne ?",
        options: [
          "Strasbourg",
          "Bruxelles",
          "Luxembourg",
          "Francfort",
        ],
        answerIndex: 1,
        explanation:
          "Bruxelles accueille la Commission européenne et le Conseil de l'UE. Strasbourg est le siège officiel du Parlement européen et Luxembourg celui de la Cour de justice.",
      },
      {
        question:
          "Que signifie le principe d'« indélogeabilité » d'un fonctionnaire territorial ?",
        options: [
          "Il ne peut pas être muté dans une autre commune",
          "Il ne peut être licencié qu'après un référendum local",
          "Il ne peut être déplacé qu'avec son accord ou par procédure disciplinaire",
          "Son logement de fonction est garanti à vie",
        ],
        answerIndex: 2,
        explanation:
          "L'indélogeabilité est l'un des principes du statut : l'agent ne peut être déplacé d'office que dans son intérêt, avec son accord, ou par décision de la commission administrative paritaire.",
      },
    ],
  },
  {
    id: "droit-public",
    title: "Droit public et institutions",
    description:
      "Constitution, hiérarchie des normes, justice administrative : le socle juridique des concours.",
    level: "Approfondissement",
    questions: [
      {
        question:
          "Quel article de la Constitution consacre la France comme république décentralisée ?",
        options: ["L'article 1er", "L'article 2", "L'article 34", "L'article 72"],
        answerIndex: 0,
        explanation:
          "Depuis la révision du 28 mars 2003, l'article 1er de la Constitution précise que « Son organisation est décentralisée ». L'article 72 détaille quant à lui l'organisation des collectivités territoriales.",
      },
      {
        question: "Quel est le juge administratif de droit commun en France ?",
        options: [
          "Le Conseil d'État",
          "La cour administrative d'appel",
          "Le tribunal administratif",
          "La cour des comptes",
        ],
        answerIndex: 2,
        explanation:
          "Le tribunal administratif est le juge de droit commun des litiges entre l'administration et les administrés. Le Conseil d'État juge en premier et dernier ressort certains recours, et en cassation sinon.",
      },
      {
        question:
          "Quel recours permet d'annuler une décision administrative illégale ?",
        options: [
          "Le recours de plein contenu",
          "Le recours pour excès de pouvoir",
          "Le recours en indemnisation",
          "Le recours en interprétation",
        ],
        answerIndex: 1,
        explanation:
          "Le recours pour excès de pouvoir, devant le tribunal administratif, vise à faire annuler un acte administratif entaché d'illégalité (incompétence, vice de forme, violation de la loi…).",
      },
      {
        question:
          "Qui peut saisir le Conseil constitutionnel pour contrôler une loi avant sa promulgation ?",
        options: [
          "Tout citoyen, directement",
          "Uniquement les juridictions",
          "Le président de la République, le Premier ministre, les présidents des assemblées et 60 parlementaires",
          "Uniquement le médiateur de la République",
        ],
        answerIndex: 2,
        explanation:
          "Avant promulgation, le contrôle de constitutionnalité peut être demandé par le président de la République, le Premier ministre, les présidents des deux assemblées ou 60 députés ou 60 sénateurs. Les citoyens passent par la QPC en aval.",
      },
      {
        question:
          "Que signifie le principe de « non-délégation » des fonctions d'ordonnateur et de comptable ?",
        options: [
          "Le maire ne peut pas déléguer sa signature",
          "Une même personne ne peut être à la fois ordonnateur et comptable public",
          "Les comptables doivent être fonctionnaires d'État uniquement",
          "Le budget doit être voté à l'unanimité",
        ],
        answerIndex: 1,
        explanation:
          "La séparation de l'ordonnateur et du comptable est un principe fondamental des finances publiques : celui qui décide la dépense (ordonnateur) ne peut pas la payer (comptable).",
      },
      {
        question:
          "Un règlement local (arrêté municipal) ne peut jamais :",
        options: [
          "Être plus sévère qu'une loi",
          "Contenir des mesures de police",
          "Contredire une loi ou un traité international",
          "Être affiché en mairie",
        ],
        answerIndex: 2,
        explanation:
          "Dans la hiérarchie des normes, les actes réglementaires locaux doivent être conformes à la loi, aux traités et à la Constitution. Un arrêté contraire serait annulable par le juge administratif.",
      },
    ],
  },
  {
    id: "cgct",
    title: "Collectivités territoriales (CGCT)",
    description:
      "Communes, départements, régions, intercommunalité : le code général des collectivités territoriales en pratique.",
    level: "Approfondissement",
    questions: [
      {
        question:
          "Quelle est la collectivité territoriale administrée par un conseil municipal et son maire ?",
        options: ["La région", "Le département", "La commune", "L'EPCI"],
        answerIndex: 2,
        explanation:
          "La commune est la collectivité de base : elle est administrée par un conseil municipal élu pour 6 ans, qui élit le maire parmi ses membres (art. L.2121-1 du CGCT).",
      },
      {
        question: "La Corse a un statut particulier de :",
        options: [
          "Collectivité d'outre-mer",
          "Collectivité à statut particulier au sein de la métropole",
          "Département unique classique",
          "Territoire d'outre-mer",
        ],
        answerIndex: 1,
        explanation:
          "Depuis 2018, la Corse est une collectivité à statut particulier qui remplace l'ancienne région et les deux anciens départements, avec des compétences élargies (collectivité unique).",
      },
      {
        question: "Qui représente l'État au niveau du département ?",
        options: [
          "Le sous-préfet",
          "Le préfet",
          "Le procureur de la République",
          "Le président du conseil départemental",
        ],
        answerIndex: 1,
        explanation:
          "Le préfet de département représente l'État, dirige les services déconcentrés et contrôle la légalité des actes des collectivités (déconcentration).",
      },
      {
        question:
          "Quelle loi de 2015 a réorganisé les compétences entre régions, départements et métropoles ?",
        options: [
          "La loi MAPAM",
          "La loi NOTRe",
          "La loi de modernisation de l'action publique (MAP)",
          "La loi 3DS",
        ],
        answerIndex: 1,
        explanation:
          "La loi NOTRe (Nouvelle Organisation Territoriale de la République) du 7 août 2015 a clarifié les compétences, renforcé le rôle des intercommunalités et supprimé la clause de compétence générale pour les départements et régions.",
      },
      {
        question:
          "Un établissement public de coopération intercommunale (EPCI) à fiscalité propre regroupant plusieurs communes autour d'une ville-centre s'appelle :",
        options: [
          "Une communauté de communes",
          "Une communauté urbaine",
          "Un pays",
          "Un syndicat mixte",
        ],
        answerIndex: 1,
        explanation:
          "La communauté urbaine regroupe un ensemble très urbain (seuil d'au moins 250 000 habitants ramené à 170 000 depuis 2023 pour certaines). La communauté de communes concerne les territoires moins denses.",
      },
      {
        question:
          "Le contrôle de légalité des actes des collectivités territoriales est exercé par :",
        options: [
          "Le conseil constitutionnel",
          "Le représentant de l'État dans le département",
          "Le juge judiciaire",
          "Le conseil départemental voisin",
        ],
        answerIndex: 1,
        explanation:
          "Depuis la loi Defferre de 1982, le préfet n'approuve plus les actes : il exerce un contrôle de légalité a posteriori, notamment en déférant les actes au tribunal administratif.",
      },
    ],
  },
  {
    id: "statut-fpt",
    title: "Statut de la fonction publique territoriale",
    description:
      "Droits et obligations des agents, recrutement, carrière : la loi du 26 janvier 1984 décryptée.",
    level: "Perfectionnement",
    questions: [
      {
        question: "La fonction publique territoriale est régie par la loi du :",
        options: [
          "13 juillet 1983",
          "26 janvier 1984",
          "9 janvier 1986",
          "20 avril 2016",
        ],
        answerIndex: 1,
        explanation:
          "La loi n° 84-53 du 26 janvier 1984 porte statut de la FPT. Elle s'appuie sur le statut général de la loi n° 83-634 du 13 juillet 1983, qui fixe les droits et obligations communs aux trois fonctions publiques.",
      },
      {
        question: "Quelles sont les trois catégories hiérarchiques de la FPT ?",
        options: [
          "A, B, C",
          "I, II, III",
          "Débutant, confirmé, expert",
          "1, 2, 3",
        ],
        answerIndex: 0,
        explanation:
          "Les emplois sont répartis en catégorie A (conception et direction), B (application et encadrement intermédiaire) et C (exécution). Chaque catégorie regroupe des cadres d'emplois.",
      },
      {
        question:
          "Combien de temps dure la période de stage d'un fonctionnaire territorial recruté par concours ?",
        options: ["3 mois", "6 mois", "1 an", "2 ans"],
        answerIndex: 2,
        explanation:
          "Le stage dure un an (renouvelable une fois dans la limite de deux ans). Il s'achève par une titularisation après avis de la commission administrative paritaire.",
      },
      {
        question:
          "Quel organe paritaire participe à la gestion des carrières des fonctionnaires territoriaux ?",
        options: [
          "Le comité social et administratif (CSA)",
          "La commission administrative paritaire (CAP)",
          "Le conseil de discipline national",
          "Le CNFPT",
        ],
        answerIndex: 1,
        explanation:
          "La CAP, composée à parité de représentants de l'employeur et des agents, émet des avis sur titularisation, avancement, notation, discipline, etc.",
      },
      {
        question:
          "Sur quel principe repose le recrutement des fonctionnaires territoriaux ?",
        options: [
          "Le libre choix du maire sans condition",
          "Le concours ou la sélection sur diplôme pour certains cadres d'emplois",
          "L'ancienneté dans les services",
          "L'inscription sur liste électorale locale",
        ],
        answerIndex: 1,
        explanation:
          "L'accès aux cadres d'emplois se fait par concours (externe, interne ou troisième voie), ou par voie de qualification (diplôme + inscription sur liste d'aptitude) pour certaines catégories.",
      },
      {
        question:
          "Un agent territorial peut être recruté sous contrat sur un emploi permanent :",
        options: [
          "Librement, sans limite de durée",
          "À titre temporaire, notamment quand aucun candidat fonctionnaire n'a été recruté ou pour un besoin saisonnier",
          "Uniquement en catégorie A",
          "Jamais",
        ],
        answerIndex: 1,
        explanation:
          "Les emplois permanents sont destinés aux fonctionnaires. Le recours aux contractuels est possible à titre temporaire (absence de candidat, vacance, besoin saisonnier, remplacement), avec des durées encadrées.",
      },
    ],
  },
  {
    id: "gestion-comptabilite",
    title: "Gestion et comptabilité publique",
    description:
      "Budget local, principe de sincérité, ordonnateurs et comptables : l'épreuve technique des concours.",
    level: "Perfectionnement",
    questions: [
      {
        question: "Le budget principal d'une commune est voté :",
        options: [
          "Par le conseil municipal, avant le 15 avril",
          "Par le maire seul, au 1er janvier",
          "Par le préfet, avant le 31 mars",
          "Par la commission des finances locale",
        ],
        answerIndex: 0,
        explanation:
          "Le budget primitif est adopté par le conseil municipal avant le 15 avril (ou dans les 2 mois suivant le renouvellement de l'assemblée), sous peine d'intervention du représentant de l'État.",
      },
      {
        question:
          "Que signifie le principe de « spécialité des crédits » budgétaires ?",
        options: [
          "Chaque crédit est affecté à une dépense précise",
          "Seuls les spécialistes peuvent voter le budget",
          "Le budget doit être secret",
          "Les crédits sont partagés entre communes",
        ],
        answerIndex: 0,
        explanation:
          "Les crédits sont spécialisés par section (fonctionnement / investissement), par nature et par fonction : un crédit voté pour un objet ne peut pas servir à une autre dépense sans modification budgétaire.",
      },
      {
        question:
          "Quels sont les deux principaux documents budgétaires d'exécution d'une collectivité ?",
        options: [
          "Le budget primitif et le compte administratif",
          "Le compte rendu et le PV de séance",
          "La décision modificative et le mandat",
          "Le rapport de la chambre régionale des comptes et le mandat",
        ],
        answerIndex: 0,
        explanation:
          "Le budget primitif prévoit, le compte administratif retrace l'exécution réelle (recettes et dépenses) de l'exercice. Il est voté par l'assemblée délibérante.",
      },
      {
        question:
          "Dans une collectivité territoriale, qui est l'ordonnateur principal des dépenses ?",
        options: [
          "Le trésorier-payeur général",
          "Le maire ou le président de l'assemblée",
          "Le directeur général des services",
          "L'agent comptable",
        ],
        answerIndex: 1,
        explanation:
          "Le maire (commune), le président du conseil départemental ou régional est l'ordonnateur : il engage, liquide et ordonnance les dépenses et constate les recettes.",
      },
      {
        question:
          "Quelle autorité contrôle les comptes et la gestion des collectivités territoriales ?",
        options: [
          "La banque de France",
          "La chambre régionale des comptes",
          "Le tribunal de commerce",
          "L'IGAS",
        ],
        answerIndex: 1,
        explanation:
          "Les chambres régionales des comptes jugent les comptes des collectivités et évaluent leur gestion ; elles peuvent saisir le préfet en cas de déséquilibre budgétaire.",
      },
      {
        question:
          "Un budget local doit présenter un équilibre dit « réel » :",
        options: [
          "Les recettes et dépenses doivent être égales, hors emprunt",
          "Il faut un déficit chaque année",
          "Seule la section d'investissement doit être équilibrée",
          "L'équilibre est vérifié uniquement par le maire",
        ],
        answerIndex: 0,
        explanation:
          "L'équilibre réel impose recettes = dépenses, section par section, et l'exclusion du produit de l'emprunt des recettes de fonctionnement. C'est une condition de sincérité vérifiée par le préfet.",
      },
    ],
  },
];

export function getTheme(id: string | undefined): QuizTheme | undefined {
  return quizThemes.find((t) => t.id === id);
}
