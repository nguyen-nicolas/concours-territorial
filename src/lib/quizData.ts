import { francaisThemes } from "./francaisQuiz";
import { mathsThemes } from "./mathsQuiz";

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  /** Note pour chaque option (alignée sur `options`) : ce que c'est vraiment. `null` pour la bonne réponse. */
  optionNotes: (string | null)[];
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
          "L'article 2 de la Constitution de 1958 énonce : « La devise de la République est « Liberté, Égalité, Fraternité » ». Elle apparaît sur tous les bâtiments publics et les documents officiels.",
        optionNotes: [
          null,
          "C'est la devise du régime de Vichy (1940-1944), qui a remplacé la devise républicaine pendant l'Occupation : une réponse historiquement marquante, mais contraire aux valeurs de la République.",
          "Cette triplette n'est pas une devise officielle française ; elle apparaît parfois dans des slogans politiques, mais jamais dans la Constitution.",
          "C'est la devise de l'ordre national de la Légion d'honneur, non celle de la République.",
        ],
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
          "La loi du 2 mars 1982, dite « loi Defferre », relative aux droits et libertés des communes, des départements et des régions, marque le premier acte de la décentralisation : elle supprime la tutelle préfectorale a priori et donne aux collectivités le pouvoir de décision.",
        optionNotes: [
          "La loi Pasqua (1986) est venue après : elle a défini le ressort des régions et modifié l'exécutif régional, mais elle n'a pas lancé la décentralisation.",
          null,
          "La loi Chevènement (12 juillet 1999) a organisé l'intercommunalité simplifiée (communautés de communes et d'agglomération) : c'est le deuxième acte de la décentralisation, 17 ans plus tard.",
          "La loi Vaillant (27 février 2002) est une loi de démocratie de proximité : référendums communaux, conseils de quartier et participation des habitants.",
        ],
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
          "Rouget de Lisle, officier de l'armée du Rhin, a composé le « Chant de guerre pour l'armée du Rhin » en 1792 à Strasbourg, devenu « La Marseillaise », hymne national (article 2 de la Constitution).",
        optionNotes: [
          "Victor Hugo est un écrivain (romans, poésie, théâtre), pas un compositeur : il a écrit sur la nation, jamais la musique de l'hymne.",
          null,
          "Hector Berlioz est un compositeur romantique (Symphonie fantastique) ; il a réalisé des arrangements de l'hymne, mais pas son œuvre originale.",
          "Jean-Jacques Rousseau est un philosophe des Lumières ; il s'est essayé à la musique, mais il n'est pas l'auteur de l'hymne national.",
        ],
      },
      {
        question:
          "Quel est le nombre de régions métropolitaines en France (y compris la Corse) ?",
        options: ["22", "13", "18", "26"],
        answerIndex: 1,
        explanation:
          "La France métropolitaine compte 13 régions depuis la réforme territoriale de 2016. Avec les 5 régions d'outre-mer, le total s'élève à 18 régions.",
        optionNotes: [
          "22 était le nombre de régions métropolitaines avant la loi de 2015 : les fusions ont ramené ce chiffre à 13 depuis le 1er janvier 2016.",
          null,
          "18 est le total pour la France entière (13 métropolitaines + 5 régions d'outre-mer) : piège classique, la question porte sur la seule métropole.",
          "26 ne correspond à aucun découpage régional actuel : ce chiffre rappelle l'ancien total France entière (22 + 4 outre-mer) avant la création de Mayotte.",
        ],
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
          "Bruxelles accueille la Commission européenne (le pouvoir exécutif qui propose les lois) et le Conseil de l'UE (les ministres des États membres) : c'est le centre de décision de l'Union.",
        optionNotes: [
          "Strasbourg est le siège officiel du Parlement européen (sessions plénières mensuelles) : institution majeure, mais pas le siège « principal » de l'ensemble des institutions.",
          null,
          "Luxembourg abrite la Cour de justice de l'UE, la Cour des comptes et le secrétariat du Parlement : un pôle judiciaire et financier, pas politique.",
          "Francfort est le siège de la Banque centrale européenne (BCE), qui gère l'euro : institution économique, pas le centre politique de l'Union.",
        ],
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
          "L'indélogeabilité est l'un des principes du statut : l'agent ne peut être déplacé d'office que dans son intérêt, avec son accord, ou par décision de la commission administrative paritaire. Elle protège l'agent des pressions politiques.",
        optionNotes: [
          "C'est l'inverse : l'indélogeabilité protège précisément contre les mutations forcées. Une mutation reste possible, mais uniquement dans les cas encadrés par le statut.",
          "Aucun référendum n'intervient dans un licenciement : la procédure disciplinaire passe par le conseil de discipline et la commission administrative paritaire.",
          null,
          "Confusion avec le logement de fonction : l'indélogeabilité protège la fonction, pas le logement de l'agent.",
        ],
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
          "Depuis la révision du 28 mars 2003, l'article 1er de la Constitution précise que « Son organisation est décentralisée » : c'est la consécration constitutionnelle du principe.",
        optionNotes: [
          null,
          "L'article 2 définit les caractères de la République : indivisible, laïque, démocratique et sociale — la devise, la langue et le drapeau, mais pas la décentralisation.",
          "L'article 34 délimite le domaine de la loi par rapport au règlement : il organise le travail du Parlement.",
          "L'article 72 détaille l'organisation des collectivités territoriales et le principe de libre administration, mais c'est l'article 1er qui consacre la décentralisation.",
        ],
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
          "Le tribunal administratif est le juge de droit commun : toute affaire relevant du contentieux administratif lui revient d'abord, sauf texte spécial. C'est lui qui tranche la plupart des litiges entre l'administration et les administrés.",
        optionNotes: [
          "Le Conseil d'État est le juge suprême : il juge en cassation la plupart des affaires et en premier et dernier ressort certains recours, mais il n'est pas le juge de droit commun.",
          "La cour administrative d'appel revoit les jugements déjà rendus par les tribunaux administratifs : elle est un juge d'appel, pas de premier ressort.",
          null,
          "La cour des comptes juge les comptes publics et évalue la gestion, pas le contentieux de l'administration : c'est un juge financier.",
        ],
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
          "Le recours pour excès de pouvoir, devant le tribunal administratif, vise à faire annuler un acte administratif entaché d'illégalité (incompétence, vice de forme, violation de la loi…). Il est ouvert à toute personne justifiant d'un intérêt lésé.",
        optionNotes: [
          "Le recours de plein contenu permet au juge d'annuler ET de réformer l'acte (notamment en matière de contrats) : il va plus loin, mais il n'est ouvert que dans des cas prévus par les textes.",
          null,
          "Le recours en indemnisation répare le préjudice causé par l'administration : il donne une compensation financière, mais ne supprime pas l'acte.",
          "Le recours en interprétation fait préciser le sens d'un acte ambigu ; l'acte reste en vigueur et il est très rare.",
        ],
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
          "Avant promulgation (article 61 de la Constitution), le contrôle de constitutionnalité peut être demandé par le président de la République, le Premier ministre, les présidents des deux assemblées ou 60 députés ou 60 sénateurs. Les citoyens ne saisissent pas directement.",
        optionNotes: [
          "Un citoyen ne peut jamais saisir directement le Conseil constitutionnel : il passe par la QPC (question prioritaire de constitutionnalité), soulevée devant un juge pendant un procès, après la promulgation.",
          "Les juridictions interviennent en aval, via la QPC, pour transmettre les questions des justiciables : elles ne participent pas au contrôle a priori d'une loi votée.",
          null,
          "Le médiateur de la République, devenu Défenseur des droits, reçoit les réclamations contre l'administration : il n'a aucun pouvoir de saisine du Conseil constitutionnel.",
        ],
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
          "La séparation de l'ordonnateur et du comptable est un principe fondamental des finances publiques : celui qui décide la dépense (ordonnateur) ne peut pas la payer (comptable). Cette séparation des fonctions prévient les détournements et se contrôle mutuellement.",
        optionNotes: [
          "La délégation de signature existe bel et bien : le maire peut déléguer sa signature à des adjoints ou des fonctionnaires. La non-délégation porte sur les fonctions, pas sur la signature.",
          null,
          "C'est vrai en pratique (les comptables publics relèvent du réseau de la DGFiP de l'État), mais le principe visé par la question est la séparation des deux fonctions, pas le statut des agents.",
          "Aucune règle n'exige l'unanimité : le budget est voté à la majorité par l'assemblée délibérante.",
        ],
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
        optionNotes: [
          "Un arrêté peut être plus sévère qu'une loi : dans le cadre de ses pouvoirs de police, le maire peut renforcer des règles (par exemple sur la circulation ou le bruit).",
          "Les mesures de police sont le cœur des attributions du maire : circulation, salubrité, sûreté et tranquillité publics (art. L.2212-1 et suivants du CGCT).",
          null,
          "Un arrêté doit au contraire être affiché et publié pour être opposable aux administrés : c'est une formalité obligatoire.",
        ],
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
        optionNotes: [
          "La région est administrée par un conseil régional et son président : mêmes principes, autre échelle.",
          "Le département est administré par un conseil départemental et son président.",
          null,
          "L'EPCI (communauté de communes, d'agglomération…) est administré par un conseil communautaire issu des conseils municipaux, et non par un conseil municipal élu directement.",
        ],
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
        optionNotes: [
          "Les collectivités d'outre-mer (COM) sont Saint-Pierre-et-Miquelon, Saint-Martin, Saint-Barthélemy et Wallis-et-Futuna : la Corse n'en fait pas partie, elle est en métropole.",
          null,
          "La Corse a remplacé ses deux départements (Corse-du-Sud et Haute-Corse) en 2018 : ce n'est plus un simple département.",
          "Le territoire d'outre-mer n'existe plus comme catégorie depuis la révision constitutionnelle de 2003.",
        ],
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
        optionNotes: [
          "Le sous-préfet représente l'État à l'échelon inférieur : l'arrondissement, pas le département.",
          null,
          "Le procureur de la République est une autorité judiciaire : il représente le ministère public devant les tribunaux, pas l'administration.",
          "Le président du conseil départemental est un élu local : il représente la collectivité départementale face à l'État, l'inverse du rôle du préfet.",
        ],
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
        optionNotes: [
          "La loi MAPAM (27 janvier 2014) a fixé la carte des intercommunalités et créé les métropoles : elle a préparé le terrain, un an avant la NOTRe.",
          null,
          "La loi MAP (23 avril 2012) portait sur la modernisation de l'administration de l'État (réduction des effectifs, simplification), pas sur les compétences territoriales.",
          "La loi 3DS (2 février 2022) est postérieure : elle porte sur la décentralisation, la différenciation et la déconcentration, et renforce les outils de proximité.",
        ],
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
          "La communauté urbaine regroupe un ensemble très urbain (seuil d'au moins 250 000 habitants ramené à 170 000 depuis 2023 pour certaines) : c'est l'EPCI le plus intégré, avec des compétences très étendues.",
        optionNotes: [
          "La communauté de communes regroupe des communes de territoires peu denses, sans seuil de population : elle ne correspond pas à un ensemble urbain autour d'une ville-centre.",
          null,
          "Le « pays » est un territoire de projet sans personnalité juridique d'EPCI : il n'a pas de fiscalité propre et n'a plus de valeur juridique depuis la loi NOTRe.",
          "Le syndicat mixte regroupe des collectivités et EPCI pour gérer un service (transports, déchets…) : il n'est pas à fiscalité propre et ne rassemble pas des communes autour d'une ville-centre.",
        ],
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
          "Depuis la loi Defferre de 1982, le préfet n'approuve plus les actes : il exerce un contrôle de légalité a posteriori, notamment en déférant les actes illégaux au tribunal administratif.",
        optionNotes: [
          "Le Conseil constitutionnel contrôle les lois et traités, jamais les actes administratifs des collectivités.",
          null,
          "Le juge judiciaire ne contrôle pas les actes administratifs : c'est la compétence du juge administratif (tribunal administratif).",
          "Il n'existe aucune hiérarchie entre collectivités : un département ne contrôle pas un autre département.",
        ],
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
          "La loi n° 84-53 du 26 janvier 1984 porte statut de la FPT : elle organise le recrutement, la carrière et les droits des agents territoriaux. Elle s'appuie sur le statut général de 1983 commun aux trois fonctions publiques.",
        optionNotes: [
          "La loi du 13 juillet 1983 est le statut général des droits et obligations commun aux trois fonctions publiques : elle ne concerne pas spécifiquement les territoriaux.",
          null,
          "La loi du 9 janvier 1986 concerne la fonction publique d'État, pas la FPT.",
          "La loi du 20 avril 2016 porte sur la gestion prévisionnelle des ressources humaines (GPRH) : c'est une loi d'actualisation, pas le statut fondateur.",
        ],
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
        optionNotes: [
          null,
          "Les chiffres romains I, II et III désignent des grades dans la fonction publique d'État, pas les catégories de la FPT.",
          "Ces libellés décrivent des niveaux d'expérience informels : ils n'existent dans aucun texte du statut.",
          "Il n'existe pas de catégories « 1, 2, 3 » : les textes utilisent les lettres A, B et C.",
        ],
      },
      {
        question:
          "Combien de temps dure la période de stage d'un fonctionnaire territorial recruté par concours ?",
        options: ["3 mois", "6 mois", "1 an", "2 ans"],
        answerIndex: 2,
        explanation:
          "Le stage dure un an (renouvelable une fois dans la limite de deux ans). Il s'achève par une titularisation après avis de la commission administrative paritaire.",
        optionNotes: [
          "3 mois ne correspond à aucune durée de stage prévue par le statut pour un lauréat de concours.",
          "6 mois n'est pas la durée réglementaire : le statut prévoit une année complète.",
          null,
          "2 ans est la durée maximale atteinte en cas de renouvellement du stage, pas la durée de droit commun.",
        ],
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
          "La CAP, composée à parité de représentants de l'employeur et des agents, émet des avis sur titularisation, avancement, notation, discipline, etc. C'est l'organe paritaire central de la gestion des carrières.",
        optionNotes: [
          "Le CSA est l'instance de dialogue social créée en 2022 (conditions de travail, formation, sécurité) : il ne statue pas sur les carrières individuelles.",
          null,
          "Il n'existe pas de « conseil de discipline national » : les questions disciplinaires relèvent précisément de la CAP.",
          "Le CNFPT (Centre national de la fonction publique territoriale) organise la formation obligatoire des agents : c'est un organisme de formation, pas un organe paritaire de gestion.",
        ],
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
          "L'accès aux cadres d'emplois se fait par concours (externe, interne ou troisième voie), ou par voie de qualification (diplôme + inscription sur liste d'aptitude) pour certaines catégories. Ce principe garantit l'égal accès aux emplois publics.",
        optionNotes: [
          "Le maire ne recrute pas librement un fonctionnaire : il doit recruter sur liste d'aptitude issue d'un concours. Le libre choix ne concerne que les contractuels temporaires.",
          null,
          "L'ancienneté peut jouer dans l'avancement de grade ou l'accès aux concours internes, mais elle n'est jamais la voie de recrutement.",
          "L'inscription sur une liste électorale n'a aucun lien avec le recrutement public : c'est un droit citoyen, pas une condition d'emploi.",
        ],
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
        optionNotes: [
          "Le recours aux contractuels n'est jamais libre : les textes limitent les motifs et les durées (généralement 3 ans renouvelable une fois).",
          null,
          "Les contractuels peuvent être recrutés dans toutes les catégories A, B et C, selon l'emploi vacant.",
          "Le recrutement contractuel est possible, mais uniquement dans les cas prévus par le statut : la réponse « jamais » est trop absolue.",
        ],
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
          "Le budget primitif est adopté par le conseil municipal avant le 15 avril (ou dans les 2 mois suivant le renouvellement de l'assemblée), sous peine d'intervention du représentant de l'État. C'est l'assemblée délibérante qui décide du budget.",
        optionNotes: [
          null,
          "Le maire prépare le budget et le propose, mais il ne le vote jamais seul : l'adoption relève du conseil municipal.",
          "Depuis la loi Defferre de 1982, le préfet n'approuve plus les budgets locaux : il ne contrôle que la légalité et peut, en dernier recours, régler le budget si l'équilibre n'est pas respecté.",
          "Il n'existe pas de « commission des finances locale » votant le budget : l'adoption relève de l'assemblée délibérante dans son ensemble.",
        ],
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
          "Les crédits sont spécialisés par section (fonctionnement / investissement), par nature et par fonction : un crédit voté pour un objet ne peut pas servir à une autre dépense sans modification budgétaire. Ce principe garantit la lisibilité du budget.",
        optionNotes: [
          null,
          "C'est un jeu de mots : la spécialité ne dit rien du profil des votants, le budget est voté par l'ensemble de l'assemblée délibérante.",
          "Le budget est au contraire un document public, voté en séance ouverte et consultable par tout administré.",
          "Les crédits ne sont jamais partagés entre communes : chaque collectivité vote et exécute son propre budget.",
        ],
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
          "Le budget primitif prévoit, le compte administratif retrace l'exécution réelle (recettes et dépenses) de l'exercice. Il est voté par l'assemblée délibérante et permet de vérifier que la prévision s'est réalisée.",
        optionNotes: [
          null,
          "Le compte rendu et le procès-verbal relatent les délibérations du conseil : ce sont des documents de séance, pas des documents budgétaires.",
          "La décision modificative ajuste le budget en cours d'année et le mandat engage le paiement d'une dépense : ce sont des pièces d'exécution ponctuelles, pas les deux documents budgétaires principaux.",
          "Le rapport de la chambre régionale des comptes est un document de contrôle a posteriori, pas un document budgétaire voté par la collectivité.",
        ],
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
          "Le maire (commune), le président du conseil départemental ou régional est l'ordonnateur : il engage, liquide et ordonnance les dépenses et constate les recettes. C'est lui qui décide de la dépense.",
        optionNotes: [
          "Le trésorier-payeur général est un comptable public principal : il paie les dépenses ordonnancées, il ne les décide pas.",
          null,
          "Le directeur général des services peut recevoir une délégation de l'ordonnateur pour certaines opérations, mais il n'est pas l'ordonnateur principal.",
          "L'agent comptable paie les dépenses et contrôle leur régularité : c'est le rôle opposé à celui de l'ordonnateur (séparation ordonnateur / comptable).",
        ],
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
          "Les chambres régionales des comptes jugent les comptes des collectivités et évaluent leur gestion ; elles peuvent saisir le préfet en cas de déséquilibre budgétaire. Elles garantissent le bon usage de l'argent public local.",
        optionNotes: [
          "La Banque de France conduit la politique monétaire et surveille les banques : elle n'a aucun rôle de contrôle des finances locales.",
          null,
          "Le tribunal de commerce est une juridiction judiciaire pour les litiges entre commerçants : il n'examine jamais la gestion publique.",
          "L'IGAS (Inspection générale des affaires sociales) contrôle les politiques sociales de l'État, pas les comptes des collectivités.",
        ],
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
          "L'équilibre réel impose recettes = dépenses, section par section (fonctionnement et investissement), et l'exclusion du produit de l'emprunt des recettes de fonctionnement. C'est une condition de sincérité vérifiée par le représentant de l'État.",
        optionNotes: [
          null,
          "C'est l'inverse : un déficit structurel empêche le vote du budget et expose la collectivité à l'intervention du représentant de l'État.",
          "Les deux sections doivent être équilibrées séparément : fonctionnement ET investissement.",
          "Le maire n'a pas à vérifier seul l'équilibre : c'est le représentant de l'État (et, après coup, la chambre régionale des comptes) qui contrôle la sincérité du budget.",
        ],
      },
    ],
  },
  ...francaisThemes,
  ...mathsThemes,
];

export function getTheme(id: string | undefined): QuizTheme | undefined {
  return quizThemes.find((t) => t.id === id);
}
