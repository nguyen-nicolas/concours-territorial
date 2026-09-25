import type { FicheMemo } from "./memoTypes";
import { fichesFondamentaux } from "./memo/fondamentaux";
import { fichesOrganisation } from "./memo/organisation";
import { fichesRessourcesHumaines } from "./memo/ressourcesHumaines";
import { fichesFinances } from "./memo/finances";
import { fichesEnjeux } from "./memo/enjeux";

export type { FicheMemo, MemoSection, QuestionJury } from "./memoTypes";

const TOUS = [
  "adjoint-administratif",
  "atsem",
  "adjoint-technique",
  "agent-maitrise",
  "gardien-brigadier",
  "redacteur",
  "animateur",
  "technicien",
  "assistant-conservation",
  "attache",
  "ingenieur",
  "bibliothecaire",
];

const CAT_AB = ["redacteur", "animateur", "technicien", "assistant-conservation", "attache", "ingenieur", "bibliothecaire"];

export const memoThemes = [
  "Institutions et organisation territoriale",
  "Statut et carrière",
  "Finances et commande publique",
  "Action publique et services",
  "Méthode et expression",
] as const;

const fichesDeBase: FicheMemo[] = [
  {
    id: "organisation-collectivites",
    title: "Les collectivités territoriales et leurs compétences",
    theme: "Institutions et organisation territoriale",
    resume:
      "Communes, départements, régions, collectivités à statut particulier : qui fait quoi, avec quelle assemblée et quel exécutif.",
    duree: "8 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "Les trois niveaux",
        points: [
          "Commune : conseil municipal élu pour 6 ans, maire élu par le conseil. Compétences de proximité — état civil, urbanisme, écoles maternelles et élémentaires, voirie communale, police municipale.",
          "Département : conseil départemental élu par binômes paritaires dans chaque canton. Chef de file de l'action sociale — RSA, protection de l'enfance, autonomie, collèges, routes départementales.",
          "Région : conseil régional élu à la proportionnelle de liste. Développement économique, aménagement du territoire, lycées, transports régionaux, formation professionnelle.",
        ],
      },
      {
        titre: "Les principes constitutionnels",
        points: [
          "Libre administration des collectivités par des conseils élus (article 72 de la Constitution).",
          "Absence de tutelle d'une collectivité sur une autre : aucune n'est hiérarchiquement supérieure.",
          "Clause de compétence générale conservée par la seule commune depuis la loi NOTRe de 2015 ; département et région ont des compétences d'attribution.",
          "Contrôle de légalité exercé a posteriori par le préfet, qui peut déférer un acte au tribunal administratif.",
        ],
      },
      {
        titre: "Le maire, double casquette",
        points: [
          "Agent de la commune : il exécute les délibérations, dirige les services, ordonnance les dépenses.",
          "Agent de l'État : état civil, publication des lois, organisation des élections, police judiciaire sous l'autorité du procureur.",
        ],
      },
    ],
    reperes: [
      "Environ 34 900 communes en France",
      "101 départements, 18 régions dont 5 d'outre-mer",
      "Articles 72 à 72-4 de la Constitution : organisation décentralisée",
      "Loi NOTRe : 7 août 2015",
    ],
    aRetenir: [
      "La décentralisation transfère des compétences à des collectivités élues ; la déconcentration délègue à des services de l'État sur le territoire.",
      "Seule la commune dispose encore de la clause de compétence générale.",
      "Le contrôle du préfet est un contrôle de légalité a posteriori, pas un contrôle d'opportunité.",
    ],
    pieges: [
      "Ne confondez pas décentralisation et déconcentration : le préfet relève de la seconde.",
      "Le maire n'est pas élu au suffrage direct : il est élu par le conseil municipal.",
      "« Collectivité de tutelle » n'existe pas : écrivez « chef de file » pour le département en action sociale.",
    ],
  },
  {
    id: "intercommunalite",
    title: "L'intercommunalité",
    theme: "Institutions et organisation territoriale",
    resume:
      "Communautés de communes, d'agglomération, urbaines et métropoles : formes, compétences obligatoires et logique financière.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "Les EPCI à fiscalité propre",
        points: [
          "Communauté de communes : la forme la plus répandue, en milieu rural et périurbain.",
          "Communauté d'agglomération : autour d'une ville-centre, à partir d'un seuil de population.",
          "Communauté urbaine et métropole : intégration forte, compétences larges en transports, habitat, développement économique.",
        ],
      },
      {
        titre: "Compétences et gouvernance",
        points: [
          "Compétences obligatoires fixées par la loi (aménagement de l'espace, développement économique, GEMAPI, ordures ménagères selon la forme), complétées par des compétences optionnelles et facultatives.",
          "Principe de spécialité : l'EPCI n'agit que dans le champ des compétences transférées.",
          "Principe d'exclusivité : la commune perd la compétence transférée, elle ne l'exerce plus en parallèle.",
          "Conseil communautaire composé de conseillers municipaux fléchés lors des élections municipales dans les communes de 1 000 habitants et plus.",
        ],
      },
      {
        titre: "Les syndicats",
        points: [
          "SIVU : syndicat à vocation unique, une seule compétence (eau, transport scolaire).",
          "SIVOM : plusieurs compétences.",
          "Syndicats mixtes : associent des collectivités de niveaux différents, voire des EPCI.",
          "Ces syndicats sont des EPCI sans fiscalité propre : ils vivent de contributions de leurs membres.",
        ],
      },
    ],
    reperes: [
      "Loi Chevènement : 12 juillet 1999",
      "Loi MAPTAM créant les métropoles : 27 janvier 2014",
      "Loi NOTRe relevant le seuil des EPCI : 7 août 2015",
      "GEMAPI : gestion des milieux aquatiques et prévention des inondations, obligatoire depuis 2018",
    ],
    aRetenir: [
      "Tout EPCI obéit aux principes de spécialité et d'exclusivité.",
      "Les syndicats n'ont pas de fiscalité propre, les communautés et métropoles si.",
      "Les conseillers communautaires ne sont pas élus séparément : ils sont fléchés sur la liste municipale.",
    ],
    pieges: [
      "Ne dites pas qu'une commune « partage » une compétence transférée : elle la perd.",
      "Métropole de Lyon : ce n'est pas un EPCI mais une collectivité à statut particulier.",
    ],
  },
  {
    id: "statut-fpt",
    title: "Le statut de la fonction publique territoriale",
    theme: "Statut et carrière",
    resume:
      "Filières, catégories, cadres d'emplois, grades et échelons : le vocabulaire exact attendu par le jury.",
    duree: "8 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "L'architecture",
        points: [
          "Trois versants : fonction publique de l'État, territoriale, hospitalière. Le code général de la fonction publique (CGFP) les regroupe depuis 2022.",
          "Catégories : A (conception et direction), B (application et encadrement intermédiaire), C (exécution).",
          "Filières : administrative, technique, culturelle, sportive, animation, médico-sociale, sécurité, sapeurs-pompiers.",
          "Cadre d'emplois = ensemble des grades d'un même métier (par exemple le cadre d'emplois des rédacteurs territoriaux).",
        ],
      },
      {
        titre: "Grade, emploi, poste",
        points: [
          "Le grade appartient à l'agent ; l'emploi appartient à la collectivité : c'est le principe de séparation du grade et de l'emploi.",
          "L'avancement d'échelon dépend de l'ancienneté ; l'avancement de grade suppose un tableau d'avancement, parfois un examen professionnel.",
          "La promotion interne permet de changer de cadre d'emplois, dans un quota fixé par la loi.",
        ],
      },
      {
        titre: "Le recrutement",
        points: [
          "Le concours est la règle (principe d'égal accès aux emplois publics, article 6 de la Déclaration de 1789).",
          "Lauréat inscrit sur une liste d'aptitude : il doit chercher son poste, la réussite au concours ne vaut pas nomination.",
          "Stage d'une durée en principe d'un an, puis titularisation.",
          "Contractuels : recrutés pour des besoins temporaires ou sur des emplois permanents dans les cas prévus par la loi.",
        ],
      },
    ],
    reperes: [
      "Loi Le Pors, droits et obligations : 13 juillet 1983",
      "Loi du 26 janvier 1984 pour la territoriale",
      "Code général de la fonction publique : entré en vigueur le 1er mars 2022",
      "Environ 1,9 million d'agents territoriaux",
    ],
    aRetenir: [
      "La liste d'aptitude ne garantit pas un emploi : c'est au lauréat de trouver sa collectivité.",
      "Le grade est détenu par l'agent, l'emploi par la collectivité.",
      "Les centres de gestion organisent les concours des catégories B et C, le CNFPT ceux des cadres A+ (administrateurs, conservateurs, ingénieurs en chef).",
    ],
    pieges: [
      "« Titulaire » et « stagiaire » ne sont pas synonymes.",
      "On écrit « cadre d'emplois » au pluriel à « emplois », toujours.",
      "Ne dites pas « fonctionnaire contractuel » : un contractuel n'est pas fonctionnaire.",
    ],
  },
  {
    id: "droits-obligations",
    title: "Droits et obligations de l'agent public",
    theme: "Statut et carrière",
    resume:
      "Ce que l'agent doit, ce qu'il peut, et la frontière entre faute personnelle et faute de service.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "Les obligations",
        points: [
          "Dignité, impartialité, intégrité, probité : socle déontologique inscrit dans le code général de la fonction publique.",
          "Neutralité et laïcité : interdiction de manifester ses opinions religieuses ou politiques dans le service.",
          "Obéissance hiérarchique, sauf ordre manifestement illégal et de nature à compromettre gravement un intérêt public.",
          "Secret professionnel et discrétion professionnelle sur les faits connus dans l'exercice des fonctions.",
          "Obligation de servir et de consacrer l'intégralité de son activité professionnelle à ses fonctions (cumul d'activités très encadré).",
        ],
      },
      {
        titre: "Les droits",
        points: [
          "Rémunération après service fait : traitement indiciaire, indemnité de résidence, supplément familial, régime indemnitaire.",
          "Droit syndical et droit de grève, ce dernier encadré par le service minimum d'accueil et le préavis.",
          "Protection fonctionnelle : la collectivité protège l'agent attaqué à raison de ses fonctions et répare le préjudice.",
          "Droit à la formation, à un entretien professionnel annuel, à la communication de son dossier individuel.",
        ],
      },
      {
        titre: "Discipline",
        points: [
          "Quatre groupes de sanctions, de l'avertissement à la révocation.",
          "Groupe 1 (avertissement, blâme, exclusion jusqu'à 3 jours) sans conseil de discipline ; au-delà, saisine obligatoire.",
          "Indépendance des poursuites disciplinaires et pénales : un non-lieu pénal n'interdit pas la sanction.",
        ],
      },
    ],
    reperes: [
      "Loi déontologie : 20 avril 2016",
      "Arrêt Pelletier, 1873 : distinction faute personnelle / faute de service",
      "Signalement des faits répréhensibles : article 40 du code de procédure pénale",
    ],
    aRetenir: [
      "La neutralité s'impose à l'agent, pas à l'usager.",
      "Un ordre illégal ne se discute que s'il est manifestement illégal ET gravement dommageable à l'intérêt public.",
      "La protection fonctionnelle est un droit, pas une faveur du maire.",
    ],
    pieges: [
      "Ne confondez pas discrétion professionnelle (interne au service) et secret professionnel (protégé pénalement).",
      "Le droit de retrait n'est pas le droit de grève.",
    ],
  },
  {
    id: "carriere-positions",
    title: "Positions, temps de travail et santé au travail",
    theme: "Statut et carrière",
    resume:
      "Disponibilité, détachement, congés, durée légale et instances : les repères pratiques de la vie de l'agent.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "Les positions statutaires",
        points: [
          "Activité : la position normale, y compris en congé annuel ou de maladie.",
          "Détachement : l'agent exerce hors de son cadre d'emplois tout en continuant à y progresser.",
          "Disponibilité : suspension de la carrière, avec ou sans droit à réintégration immédiate.",
          "Congé parental : position distincte, avec conservation partielle des droits.",
        ],
      },
      {
        titre: "Temps de travail",
        points: [
          "Durée annuelle de référence : 1 607 heures, applicable à toutes les collectivités depuis la loi de transformation de la fonction publique.",
          "Temps partiel de droit (naissance, adoption, handicap) ou sur autorisation.",
          "Compte épargne-temps, astreintes et heures supplémentaires encadrés par délibération.",
        ],
      },
      {
        titre: "Instances et santé",
        points: [
          "Comité social territorial (CST) : organisation et conditions de travail ; il comprend une formation spécialisée en santé et sécurité au-delà d'un seuil d'effectifs.",
          "Commission administrative paritaire (CAP) : questions individuelles de carrière (discipline, refus de titularisation).",
          "Médecine préventive, document unique d'évaluation des risques professionnels obligatoire.",
        ],
      },
    ],
    reperes: [
      "1 607 heures annuelles",
      "Loi de transformation de la fonction publique : 6 août 2019",
      "Fusion CT + CHSCT en CST : depuis 2022",
      "25 jours ouvrés de congés annuels pour un temps plein",
    ],
    aRetenir: [
      "Le détachement conserve la carrière d'origine, la disponibilité la suspend.",
      "Le CST traite du collectif, la CAP de l'individuel.",
      "Le document unique est obligatoire dans toute collectivité, quelle que soit sa taille.",
    ],
    pieges: [
      "Ne dites pas « mise à disposition » pour « disponibilité » : la mise à disposition maintient l'agent dans son cadre d'emplois au service d'un autre employeur.",
    ],
  },
  {
    id: "finances-locales",
    title: "Les finances locales",
    theme: "Finances et commande publique",
    resume:
      "Budget, sections, grands principes budgétaires et ressources des collectivités après la réforme de la fiscalité.",
    duree: "8 min",
    categories: ["A", "B"],
    concoursIds: CAT_AB,
    sections: [
      {
        titre: "Les cinq principes budgétaires",
        points: [
          "Annualité : le budget est voté pour une année civile.",
          "Unité : toutes les recettes et dépenses figurent dans un document unique.",
          "Universalité : pas de compensation entre recettes et dépenses, pas d'affectation d'une recette à une dépense.",
          "Spécialité : les crédits sont votés par chapitre ou article.",
          "Sincérité : évaluation de bonne foi des recettes et des charges.",
        ],
      },
      {
        titre: "Structure du budget",
        points: [
          "Section de fonctionnement : dépenses courantes (personnel, fluides, subventions) et recettes courantes (fiscalité, dotations).",
          "Section d'investissement : équipements, travaux, remboursement du capital de la dette ; financée par l'autofinancement, le FCTVA, les subventions et l'emprunt.",
          "Équilibre réel obligatoire de chaque section : on ne vote pas un budget en déficit.",
          "L'emprunt ne peut financer que l'investissement, jamais le fonctionnement.",
        ],
      },
      {
        titre: "Recettes et contrôle",
        points: [
          "Fiscalité : taxe foncière, CFE et CVAE pour le bloc communal ; la taxe d'habitation sur les résidences principales a été supprimée et compensée.",
          "Dotations de l'État, au premier rang desquelles la DGF.",
          "Séparation de l'ordonnateur (le maire) et du comptable public : l'un engage et mandate, l'autre paie et contrôle.",
          "Contrôle budgétaire du préfet et de la chambre régionale des comptes en cas de déséquilibre ou de dépense obligatoire non inscrite.",
        ],
      },
    ],
    reperes: [
      "Budget voté avant le 15 avril (30 avril l'année de renouvellement des conseils)",
      "Compte financier unique généralisé aux collectivités",
      "FCTVA : remboursement forfaitaire de la TVA sur les investissements",
      "DGF : principale dotation de fonctionnement de l'État",
    ],
    aRetenir: [
      "Chaque section doit être votée en équilibre réel.",
      "L'emprunt finance l'investissement, jamais les charges courantes.",
      "La séparation ordonnateur / comptable est la garantie majeure de la comptabilité publique.",
    ],
    pieges: [
      "Ne confondez pas déficit et besoin de financement : le budget primitif ne peut être voté en déficit.",
      "Amortissement et remboursement du capital sont deux opérations distinctes.",
    ],
  },
  {
    id: "commande-publique",
    title: "La commande publique",
    theme: "Finances et commande publique",
    resume:
      "Marchés publics et concessions : principes fondamentaux, procédures et déroulement d'une consultation.",
    duree: "7 min",
    categories: ["A", "B"],
    concoursIds: CAT_AB,
    sections: [
      {
        titre: "Les trois principes",
        points: [
          "Liberté d'accès à la commande publique.",
          "Égalité de traitement des candidats.",
          "Transparence des procédures.",
          "Ces principes ont valeur constitutionnelle et s'appliquent quel que soit le montant.",
        ],
      },
      {
        titre: "Les procédures",
        points: [
          "Marché sans publicité ni mise en concurrence préalables en dessous du seuil de dispense, avec obligation de bonne gestion des deniers publics.",
          "Procédure adaptée (MAPA) : la collectivité fixe elle-même les modalités, proportionnées à l'objet.",
          "Procédures formalisées au-delà des seuils européens : appel d'offres ouvert ou restreint, procédure avec négociation, dialogue compétitif.",
          "Concession (ex-délégation de service public) : le titulaire se rémunère substantiellement sur l'exploitation et supporte un risque.",
        ],
      },
      {
        titre: "Déroulé d'une consultation",
        points: [
          "Définition précise du besoin, allotissement en principe obligatoire.",
          "Publicité adaptée, dossier de consultation (règlement, CCAP, CCTP).",
          "Analyse des candidatures puis des offres au regard des critères annoncés et pondérés.",
          "Rejet des offres anormalement basses après demande de justification, information des candidats évincés, délai de standstill, notification.",
        ],
      },
    ],
    reperes: [
      "Code de la commande publique : entré en vigueur le 1er avril 2019",
      "Allotissement : principe, la dérogation doit être motivée",
      "Référé précontractuel : recours avant la signature du marché",
    ],
    aRetenir: [
      "Les trois principes s'appliquent même en dessous des seuils.",
      "L'allotissement est la règle, le marché global l'exception motivée.",
      "Une concession se distingue d'un marché par le transfert du risque d'exploitation.",
    ],
    pieges: [
      "« Appel d'offres » n'est pas un synonyme générique de « marché public » : c'est une procédure précise.",
      "On ne dit plus « délégation de service public » dans le code, mais « concession ».",
    ],
  },
  {
    id: "acte-administratif",
    title: "L'acte administratif et le contentieux",
    theme: "Institutions et organisation territoriale",
    resume:
      "Décisions, délibérations, arrêtés : conditions de légalité, entrée en vigueur et voies de recours.",
    duree: "7 min",
    categories: ["A", "B"],
    concoursIds: CAT_AB,
    sections: [
      {
        titre: "Typologie",
        points: [
          "Acte réglementaire : portée générale et impersonnelle (arrêté de circulation permanent).",
          "Acte individuel : nominatif (arrêté de nomination, permis de construire).",
          "Délibération : décision de l'assemblée ; arrêté : décision de l'exécutif.",
        ],
      },
      {
        titre: "Légalité et entrée en vigueur",
        points: [
          "Légalité externe : compétence de l'auteur, forme, procédure. Légalité interne : but, motifs, contenu.",
          "Publication ou affichage pour les actes réglementaires, notification pour les actes individuels.",
          "Transmission au préfet des actes soumis au contrôle de légalité (caractère exécutoire).",
          "Obligation de motiver les décisions individuelles défavorables.",
        ],
      },
      {
        titre: "Recours",
        points: [
          "Recours gracieux devant l'auteur de l'acte, recours hiérarchique devant l'autorité supérieure : ils prorogent le délai contentieux.",
          "Recours pour excès de pouvoir devant le tribunal administratif : deux mois, gratuit, tendant à l'annulation.",
          "Recours de plein contentieux : indemnisation, contrats.",
          "Référé-suspension et référé-liberté pour l'urgence.",
        ],
      },
    ],
    reperes: [
      "Délai de recours contentieux : 2 mois",
      "Silence de l'administration pendant 2 mois : vaut acceptation en principe, rejet dans les cas prévus",
      "Arrêt Blanco, 1873 : autonomie du droit administratif",
    ],
    aRetenir: [
      "Un acte n'est exécutoire qu'après publicité et, le cas échéant, transmission au préfet.",
      "Le recours pour excès de pouvoir vise l'annulation, pas la réparation.",
      "Les décisions individuelles défavorables doivent être motivées en droit et en fait.",
    ],
    pieges: [
      "Ne confondez pas délibération (conseil) et arrêté (maire ou président).",
      "Le recours gracieux n'est pas un préalable obligatoire, sauf texte spécial.",
    ],
  },
  {
    id: "service-public",
    title: "Le service public et ses usagers",
    theme: "Action publique et services",
    resume:
      "Lois de Rolland, modes de gestion et relation à l'usager : la fiche transversale la plus rentable en épreuve.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "Les lois de Rolland",
        points: [
          "Continuité : le service fonctionne de manière régulière ; justifie l'encadrement du droit de grève.",
          "Égalité : traitement identique des usagers placés dans une situation identique ; des tarifs différenciés sont admis si la différence de situation est réelle.",
          "Mutabilité (adaptabilité) : le service évolue avec l'intérêt général, l'usager n'a pas de droit acquis à son maintien en l'état.",
          "Principes complémentaires : neutralité, laïcité, transparence, accessibilité.",
        ],
      },
      {
        titre: "Modes de gestion",
        points: [
          "Régie directe : la collectivité assure le service avec ses agents et ses moyens.",
          "Régie autonome ou personnalisée : budget annexe, voire personnalité morale.",
          "Concession et affermage : gestion déléguée avec risque d'exploitation.",
          "Marché public de services, société publique locale, association subventionnée sous convention d'objectifs.",
        ],
      },
      {
        titre: "Relation à l'usager",
        points: [
          "Droit à l'information, accusé de réception des demandes, indication des voies de recours.",
          "Accès aux documents administratifs, saisine de la CADA en cas de refus.",
          "Accessibilité numérique et maintien d'un accueil physique ou téléphonique pour ne pas exclure.",
          "Médiateur ou référent déontologue selon les collectivités.",
        ],
      },
    ],
    reperes: [
      "SPA et SPIC : distinction selon l'objet, le financement et les modalités de fonctionnement",
      "Arrêt Bac d'Eloka, 1921 : naissance du SPIC",
      "CADA : commission d'accès aux documents administratifs",
    ],
    aRetenir: [
      "Continuité, égalité, mutabilité : citez les trois, dans cet ordre, avec un exemple chacune.",
      "L'égalité n'interdit pas les tarifs au quotient familial.",
      "Le choix du mode de gestion est un choix politique et financier, pas seulement juridique.",
    ],
    pieges: [
      "L'usager d'un SPIC est dans une relation contractuelle de droit privé ; l'usager d'un SPA dans une situation légale et réglementaire.",
    ],
  },
  {
    id: "laicite-deontologie",
    title: "Laïcité et déontologie au quotidien",
    theme: "Action publique et services",
    resume:
      "Ce que la laïcité impose à l'agent, ce qu'elle n'impose pas à l'usager, et la conduite à tenir face à une demande difficile.",
    duree: "5 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "Le cadre",
        points: [
          "Loi de 1905 : la République ne reconnaît, ne salarie ni ne subventionne aucun culte ; elle garantit le libre exercice des cultes.",
          "L'agent public est tenu à une stricte neutralité : aucun signe religieux visible, aucun prosélytisme, aucune préférence.",
          "L'usager est libre de manifester sa conviction, sauf trouble à l'ordre public ou textes particuliers (dissimulation du visage, accompagnement scolaire encadré).",
        ],
      },
      {
        titre: "Face à une demande",
        points: [
          "Écouter, reformuler, ne jamais juger la conviction elle-même.",
          "Répondre par le droit et l'intérêt du service, pas par l'opinion personnelle.",
          "Rappeler la règle avec calme, proposer la solution possible dans le cadre légal.",
          "Rendre compte à la hiérarchie et tracer l'échange si la situation se répète.",
        ],
      },
    ],
    reperes: [
      "Loi de séparation des Églises et de l'État : 9 décembre 1905",
      "Loi du 15 mars 2004 sur les signes religieux à l'école",
      "Loi confortant le respect des principes de la République : 24 août 2021",
      "Référent laïcité obligatoire dans chaque collectivité",
    ],
    aRetenir: [
      "Neutralité pour l'agent, liberté encadrée pour l'usager.",
      "La laïcité n'est pas l'effacement des religions mais la neutralité de l'État.",
      "En entretien, une réponse juridique calme vaut mieux qu'une réponse morale.",
    ],
    pieges: [
      "Ne dites jamais « la laïcité interdit à l'usager de porter un signe religieux » : c'est faux dans le cas général.",
    ],
  },
  {
    id: "transition-ecologique",
    title: "Transition écologique dans les collectivités",
    theme: "Action publique et services",
    resume:
      "Les leviers concrets d'une collectivité : énergie des bâtiments, eau, mobilité, déchets, artificialisation.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "Les leviers",
        points: [
          "Patrimoine bâti : rénovation énergétique des écoles et gymnases, sobriété des usages, suivi des consommations.",
          "Mobilités : plan vélo, transports collectifs, zones à faibles émissions dans les grandes agglomérations.",
          "Eau : réduction des fuites de réseau, désimperméabilisation, gestion économe de l'arrosage.",
          "Déchets : prévention, tri à la source des biodéchets, tarification incitative.",
          "Achats : critères environnementaux dans les marchés, restauration collective en circuits courts.",
        ],
      },
      {
        titre: "Les documents",
        points: [
          "PCAET : plan climat-air-énergie territorial, porté par les EPCI d'une certaine taille.",
          "SCoT et PLU(i) : maîtrise de l'urbanisation, trame verte et bleue.",
          "Objectif ZAN : zéro artificialisation nette, avec une trajectoire de réduction du rythme d'artificialisation.",
        ],
      },
    ],
    reperes: [
      "Loi Climat et résilience : 22 août 2021",
      "Loi AGEC sur l'économie circulaire : 10 février 2020",
      "Tri à la source des biodéchets obligatoire depuis le 1er janvier 2024",
      "Objectif ZAN à l'horizon 2050",
    ],
    aRetenir: [
      "Citez toujours un levier concret et chiffré plutôt qu'une généralité sur le climat.",
      "Le PCAET est l'outil de planification climatique du bloc intercommunal.",
      "La commande publique est un levier écologique sous-estimé par les candidats.",
    ],
    pieges: [
      "Ne réduisez pas la transition aux panneaux photovoltaïques : l'eau, la sobriété et le foncier comptent autant.",
    ],
  },
  {
    id: "action-sociale",
    title: "Action sociale et cohésion territoriale",
    theme: "Action publique et services",
    resume:
      "CCAS, compétences sociales du département, publics fragiles et articulation des acteurs.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "Les acteurs",
        points: [
          "Département : chef de file de l'action sociale — RSA, aide sociale à l'enfance, autonomie des personnes âgées et handicapées, insertion.",
          "CCAS ou CIAS : analyse des besoins sociaux, aides facultatives, domiciliation, portage de repas, animation seniors.",
          "CAF, France Travail, bailleurs sociaux, associations conventionnées : partenaires quotidiens.",
        ],
      },
      {
        titre: "Les dispositifs à connaître",
        points: [
          "RSA et accompagnement vers l'emploi.",
          "APA à domicile et en établissement, PCH pour le handicap via la MDPH.",
          "Aide sociale à l'enfance : prévention, placement, accompagnement des familles.",
          "Hébergement d'urgence, lutte contre le non-recours aux droits.",
        ],
      },
    ],
    reperes: [
      "Analyse des besoins sociaux obligatoire pour le CCAS",
      "MDPH : maison départementale des personnes handicapées",
      "Non-recours : une part significative des ayants droit ne demandent pas leurs prestations",
    ],
    aRetenir: [
      "Le département est chef de file, le CCAS agit au plus près des habitants.",
      "Le non-recours aux droits est un angle d'analyse apprécié par les jurys.",
      "Le secret partagé encadre strictement l'échange d'informations entre professionnels.",
    ],
    pieges: [
      "Le CCAS est un établissement public distinct de la commune, avec son propre budget.",
    ],
  },
  {
    id: "securite-police-municipale",
    title: "Sécurité et police municipale",
    theme: "Action publique et services",
    resume:
      "Pouvoirs de police du maire, missions de la police municipale et articulation avec les forces de l'État.",
    duree: "6 min",
    categories: ["C"],
    concoursIds: ["gardien-brigadier", "adjoint-administratif", "agent-maitrise"],
    sections: [
      {
        titre: "La police administrative du maire",
        points: [
          "Objet : assurer le bon ordre, la sûreté, la sécurité et la salubrité publiques.",
          "Prévention, pas répression : la police administrative précède l'infraction, la police judiciaire la constate.",
          "Les mesures doivent être nécessaires, adaptées et proportionnées (jurisprudence Benjamin).",
        ],
      },
      {
        titre: "L'agent de police municipale",
        points: [
          "Agent de police judiciaire adjoint, placé sous l'autorité du maire.",
          "Constate par procès-verbal les contraventions dans son champ de compétence.",
          "Agrément du préfet et du procureur de la République, assermentation.",
          "Convention de coordination avec la police ou la gendarmerie nationales.",
        ],
      },
      {
        titre: "Déontologie",
        points: [
          "Code de déontologie commun aux polices municipales : discernement, impartialité, respect des personnes.",
          "Usage de la contrainte strictement nécessaire et proportionné.",
          "Port de la carte professionnelle et identification.",
        ],
      },
    ],
    reperes: [
      "Article L. 2212-2 du CGCT : pouvoirs de police du maire",
      "Arrêt Benjamin, 1933 : proportionnalité des mesures de police",
      "Convention de coordination obligatoire au-delà d'un seuil d'agents",
    ],
    aRetenir: [
      "Police administrative : prévenir. Police judiciaire : constater et rechercher les auteurs.",
      "Toute mesure de police doit être proportionnée, sous peine d'annulation.",
      "L'APM agit sous l'autorité du maire, mais sous le contrôle du procureur pour ses missions judiciaires.",
    ],
    pieges: [
      "L'agent de police municipale n'est pas officier de police judiciaire.",
    ],
  },
  {
    id: "petite-enfance",
    title: "Petite enfance et milieu scolaire",
    theme: "Action publique et services",
    resume:
      "Repères de développement de l'enfant, hygiène, sécurité et posture professionnelle en école maternelle.",
    duree: "6 min",
    categories: ["C"],
    concoursIds: ["atsem", "animateur", "adjoint-administratif"],
    sections: [
      {
        titre: "Le cadre",
        points: [
          "L'ATSEM assiste l'enseignant pour l'accueil, l'hygiène et les activités des enfants ; il participe à la communauté éducative.",
          "Recruté par la commune, placé sous l'autorité fonctionnelle du directeur d'école pendant le temps scolaire.",
          "Sur le temps périscolaire, il relève de la collectivité.",
        ],
      },
      {
        titre: "Développement de l'enfant",
        points: [
          "2-3 ans : autonomie naissante, langage en explosion, besoin de repères stables.",
          "3-4 ans : jeu symbolique, socialisation, propreté acquise.",
          "5-6 ans : coopération, règles, préparation aux apprentissages fondamentaux.",
          "Le rythme, le sommeil et la sécurité affective conditionnent les apprentissages.",
        ],
      },
      {
        titre: "Hygiène et sécurité",
        points: [
          "Protocoles de nettoyage et de désinfection, traçabilité des produits.",
          "PAI pour les enfants atteints de troubles de santé, conduite à tenir affichée.",
          "PPMS : plan particulier de mise en sûreté, exercices réguliers.",
          "Information immédiate de l'enseignant et de la hiérarchie en cas d'accident ou de suspicion de maltraitance.",
        ],
      },
    ],
    reperes: [
      "CAP Accompagnant éducatif petite enfance : diplôme d'accès",
      "PAI : projet d'accueil individualisé",
      "PPMS : plan particulier de mise en sûreté",
      "119 : numéro de l'enfance en danger",
    ],
    aRetenir: [
      "Double autorité : hiérarchique communale, fonctionnelle scolaire.",
      "En cas de doute sur la sécurité d'un enfant, on alerte, on ne temporise pas.",
      "La posture attendue est bienveillante mais cadrante : le professionnel pose les limites.",
    ],
    pieges: [
      "L'ATSEM n'enseigne pas et ne remplace jamais l'enseignant dans la classe.",
    ],
  },
  {
    id: "hygiene-securite-travail",
    title: "Hygiène, sécurité et prévention des risques",
    theme: "Statut et carrière",
    resume:
      "Obligations de l'employeur territorial, document unique, EPI et conduite à tenir en cas de danger.",
    duree: "5 min",
    categories: ["C", "B"],
    concoursIds: ["adjoint-technique", "agent-maitrise", "technicien", "ingenieur", "atsem"],
    sections: [
      {
        titre: "Les obligations",
        points: [
          "L'autorité territoriale est responsable de la santé et de la sécurité des agents : obligation de moyens renforcée.",
          "Document unique d'évaluation des risques professionnels, mis à jour au moins chaque année.",
          "Formation à la sécurité au poste, accueil sécurité des nouveaux arrivants.",
          "Assistant et conseiller de prévention désignés dans la collectivité.",
        ],
      },
      {
        titre: "Sur le terrain",
        points: [
          "Principes généraux de prévention : éviter le risque, l'évaluer, le combattre à la source, adapter le travail à l'homme, privilégier la protection collective avant l'individuelle.",
          "EPI fournis gratuitement par l'employeur : casque, gants, chaussures, protections auditives, harnais.",
          "Signalisation des chantiers, balisage, consignation des énergies.",
          "Registre de santé et de sécurité au travail accessible à tous les agents.",
        ],
      },
      {
        titre: "Droit d'alerte et de retrait",
        points: [
          "L'agent qui a un motif raisonnable de penser être exposé à un danger grave et imminent alerte et peut se retirer.",
          "Aucune sanction ni retenue de traitement si le motif est raisonnable.",
          "Inscription au registre spécial de danger grave et imminent, enquête de la formation spécialisée.",
        ],
      },
    ],
    reperes: [
      "Protection collective avant protection individuelle : principe fondateur",
      "DUERP : mise à jour annuelle obligatoire",
      "Registre de danger grave et imminent",
    ],
    aRetenir: [
      "La protection collective prime toujours sur l'EPI.",
      "Le droit de retrait suppose un danger grave ET imminent.",
      "Le document unique est le pivot de toute la démarche de prévention.",
    ],
    pieges: [
      "Le droit de retrait ne permet pas de refuser une tâche jugée simplement désagréable.",
    ],
  },
  {
    id: "culture-lecture-publique",
    title: "Culture et lecture publique",
    theme: "Action publique et services",
    resume:
      "Politiques culturelles locales, missions des bibliothèques et du patrimoine dans une collectivité.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: ["bibliothecaire", "assistant-conservation", "attache", "animateur"],
    sections: [
      {
        titre: "Le cadre",
        points: [
          "La culture est une compétence partagée entre toutes les collectivités et l'État.",
          "DRAC : service déconcentré de l'État, partenaire de financement et de conseil.",
          "Bibliothèque départementale : appui aux réseaux de lecture publique des petites communes.",
        ],
      },
      {
        titre: "Missions de la lecture publique",
        points: [
          "Accès libre et gratuit à l'information et à la lecture, pluralisme des collections.",
          "Action culturelle : lectures, expositions, accueil des classes, ateliers numériques.",
          "Publics éloignés : portage à domicile, actions en EHPAD, en milieu pénitentiaire, hors les murs.",
          "Politique documentaire écrite : acquisitions, désherbage, conservation.",
        ],
      },
      {
        titre: "Patrimoine",
        points: [
          "Inventaire, conservation préventive, régulation du climat et de la lumière.",
          "Monuments historiques : classement et inscription, avis de l'architecte des Bâtiments de France.",
          "Médiation : valoriser sans abîmer, concilier accès du public et conservation.",
        ],
      },
    ],
    reperes: [
      "Loi Robert relative aux bibliothèques : 21 décembre 2021",
      "Pluralisme et neutralité des collections : principes légaux",
      "DRAC : direction régionale des affaires culturelles",
    ],
    aRetenir: [
      "La bibliothèque est un service public : lois de Rolland incluses.",
      "Le pluralisme des collections est une obligation légale, pas une préférence professionnelle.",
      "Le hors-les-murs est la réponse la plus citée face au non-public.",
    ],
    pieges: [
      "Classement et inscription au titre des monuments historiques ne sont pas le même niveau de protection.",
    ],
  },
  {
    id: "redaction-administrative",
    title: "Mémo de rédaction administrative",
    theme: "Méthode et expression",
    resume:
      "Les formules, la structure et les règles de forme d'une lettre, d'une note et d'un compte rendu.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "Règles générales",
        points: [
          "Une idée par paragraphe, une phrase par idée, des phrases courtes.",
          "Style impersonnel : « il est proposé de », « la commune envisage », jamais « je pense que ».",
          "Temps de référence : présent de l'indicatif ; futur pour les engagements.",
          "Pas d'abréviation non développée à la première occurrence, pas de sigle nu.",
        ],
      },
      {
        titre: "La lettre administrative",
        points: [
          "Timbre (collectivité, service), lieu et date, objet, référence, destinataire.",
          "Formule d'appel : « Monsieur le Maire », « Madame la Directrice ».",
          "Corps en trois temps : rappel de la demande, analyse, réponse ou décision.",
          "Formule de politesse adaptée au destinataire, signature avec qualité complète.",
        ],
      },
      {
        titre: "Formules utiles",
        points: [
          "« J'ai l'honneur de vous informer que… » (vers une autorité supérieure).",
          "« Par courrier du 12 mars, vous avez sollicité… »",
          "« Après examen de votre dossier, il apparaît que… »",
          "« Je vous invite à prendre l'attache du service… »",
          "« Mes services se tiennent à votre disposition pour tout complément. »",
        ],
      },
    ],
    reperes: [
      "Lettre à en-tête : réservée à un destinataire extérieur",
      "Note : usage interne, hiérarchique ou de service",
      "Compte rendu : factuel ; procès-verbal : valeur officielle",
    ],
    aRetenir: [
      "Neutralité et impersonnalité sont les deux marqueurs du style administratif.",
      "L'objet doit permettre de comprendre le courrier sans le lire.",
      "Une copie sans plan apparent perd des points, même bien écrite.",
    ],
    pieges: [
      "Ne mélangez pas compte rendu et procès-verbal.",
      "« Veuillez agréer » s'emploie sans « Monsieur » répété maladroitement en fin de formule.",
    ],
  },
  {
    id: "oral-entretien",
    title: "Mémo entretien avec le jury",
    theme: "Méthode et expression",
    resume:
      "Structure de l'exposé, questions récurrentes et attitudes qui font la différence à l'oral.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS,
    sections: [
      {
        titre: "L'exposé",
        points: [
          "Annoncez un plan en deux ou trois parties dès les premières secondes.",
          "Parcours, compétences transférables, projet professionnel dans la collectivité : trois blocs suffisent.",
          "Terminez par une phrase d'ouverture sur le poste visé, pas sur vous.",
          "Tenez le temps : un dépassement est toujours pénalisé.",
        ],
      },
      {
        titre: "Questions récurrentes",
        points: [
          "« Pourquoi la fonction publique territoriale ? » — attendez-vous à devoir citer des valeurs ET une réalité de terrain.",
          "« Qu'est-ce qu'un bon agent public selon vous ? » — déontologie, sens du service, capacité à rendre compte.",
          "« Que feriez-vous si un usager devient agressif ? » — mise à distance, écoute, cadre, alerte.",
          "« Un ordre vous paraît illégal, que faites-vous ? » — la réponse est statutaire, pas morale.",
        ],
      },
      {
        titre: "Attitude",
        points: [
          "Regardez l'ensemble du jury, pas seulement celui qui pose la question.",
          "Reformulez une question mal comprise plutôt que de répondre à côté.",
          "Assumez une lacune en proposant une méthode pour y remédier.",
          "Débit posé, silences assumés : la précipitation trahit le stress plus que l'ignorance.",
        ],
      },
    ],
    reperes: [
      "Exposé : souvent 5 minutes, entretien total de 15 à 20 minutes",
      "Le jury note l'aptitude à exercer, pas l'érudition",
    ],
    aRetenir: [
      "Un plan annoncé vaut mieux qu'un contenu brillant mais désordonné.",
      "Une réponse juridique calme est toujours mieux notée qu'une opinion personnelle.",
      "Dire « je ne sais pas, voici comment je m'y prendrais » n'est pas éliminatoire.",
    ],
    pieges: [
      "Ne critiquez jamais un ancien employeur.",
      "N'inventez pas une donnée chiffrée : le jury vérifie.",
    ],
  },
];

export function getFicheMemo(id: string): FicheMemo | undefined {
  return fichesMemo.find((f) => f.id === id);
}
