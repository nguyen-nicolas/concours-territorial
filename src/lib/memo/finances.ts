import type { FicheMemo } from "../memoTypes";
import { TOUS_CONCOURS, CONCOURS_AB } from "../memoTypes";

export const fichesFinances: FicheMemo[] = [
  {
    id: "fin-compte-administratif",
    title: "Le compte administratif",
    theme: "Finances et commande publique",
    resume:
      "Le document par lequel l'ordonnateur rend compte de l'exécution du budget de l'année écoulée, voté par l'assemblée délibérante.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Nature et fonction",
        points: [
          "Le compte administratif retrace les recettes et les dépenses réellement réalisées au cours de l'exercice, section de fonctionnement et section d'investissement confondues.",
          "Il est établi par l'ordonnateur, c'est-à-dire le maire, le président du conseil départemental ou régional selon la collectivité.",
          "Il permet de dégager le résultat de l'exercice, qui vient ensuite s'intégrer au budget suivant sous forme de reprise de résultat.",
          "Il doit être présenté avant le 30 juin de l'année suivant l'exercice concerné.",
        ],
      },
      {
        titre: "Procédure de vote",
        points: [
          "L'assemblée délibérante vote le compte administratif hors la présence du maire ou du président, qui doit se retirer de la séance.",
          "Un nouveau président de séance est désigné pour cette délibération particulière.",
          "Le vote intervient après présentation d'un rapport sur la gestion de la collectivité durant l'exercice écoulé.",
          "Le compte administratif doit être en concordance avec le compte de gestion établi par le comptable public.",
        ],
      },
      {
        titre: "Portée et contrôle",
        points: [
          "Un compte administratif rejeté ou en déséquilibre peut entraîner la saisine de la chambre régionale des comptes.",
          "Le résultat excédentaire ou déficitaire dégagé conditionne les marges de manœuvre du budget de l'exercice suivant.",
          "Le compte administratif est un document public soumis à publicité et transmis au représentant de l'État.",
        ],
      },
    ],
    reperes: [
      "Vote avant le 30 juin de l'année N+1",
      "Vote en l'absence de l'ordonnateur",
      "Concordance obligatoire avec le compte de gestion du comptable",
    ],
    aRetenir: [
      "Le compte administratif est établi par l'ordonnateur, le compte de gestion par le comptable public : deux documents distincts et concordants.",
      "L'ordonnateur ne prend pas part au vote de son propre compte administratif.",
      "Le résultat dégagé s'intègre au budget suivant lors de l'affectation du résultat.",
    ],
    pieges: [
      "Ne confondez pas compte administratif et budget primitif : l'un retrace l'exécution passée, l'autre prévoit l'exercice à venir.",
      "Ne dites pas que le maire vote son compte administratif : il doit quitter la séance.",
      "Le compte administratif n'est pas établi par le comptable, mais par l'ordonnateur.",
    ],
    phraseJury:
      "Le compte administratif est le bilan d'exécution du budget établi par l'ordonnateur, voté en son absence et mis en concordance avec le compte de gestion du comptable public.",
    questionsJury: [
      {
        question: "Qui établit le compte administratif ?",
        reponse: "L'ordonnateur, c'est-à-dire l'exécutif de la collectivité.",
      },
      {
        question: "Pourquoi l'ordonnateur ne vote-t-il pas son compte administratif ?",
        reponse: "Pour garantir l'objectivité du contrôle exercé par l'assemblée délibérante sur sa propre gestion.",
      },
      {
        question: "Quelle est la date limite de vote du compte administratif ?",
        reponse: "Le 30 juin de l'année suivant l'exercice concerné.",
      },
      {
        question: "Que se passe-t-il si le compte administratif est rejeté ?",
        reponse: "La chambre régionale des comptes peut être saisie pour examiner la situation.",
      },
    ],
    ultraMemo: "Compte administratif = bilan de l'ordonnateur, voté sans lui, avant le 30 juin.",
  },
  {
    id: "fin-compte-de-gestion",
    title: "Le compte de gestion",
    theme: "Finances et commande publique",
    resume:
      "Le document comptable établi par le comptable public, retraçant l'ensemble des opérations financières de la collectivité pour l'exercice écoulé.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Élaboration",
        points: [
          "Le compte de gestion est établi par le comptable public, généralement le trésorier ou le comptable de la direction générale des finances publiques.",
          "Il retrace en partie double toutes les opérations de recettes et de dépenses effectivement encaissées ou décaissées.",
          "Il comprend le bilan, le compte de résultat et des annexes retraçant la situation patrimoniale de la collectivité.",
          "Il est transmis à l'ordonnateur avant le vote du compte administratif afin d'en vérifier la concordance.",
        ],
      },
      {
        titre: "Vote et contrôle",
        points: [
          "L'assemblée délibérante arrête le compte de gestion en même temps ou peu avant le compte administratif.",
          "Le compte de gestion est ensuite soumis au juge des comptes, la chambre régionale des comptes, qui statue sur la régularité des opérations du comptable.",
          "La discordance entre compte administratif et compte de gestion doit être justifiée et, en principe, résorbée avant le vote définitif.",
        ],
      },
      {
        titre: "Distinction avec le compte administratif",
        points: [
          "Le compte administratif est un document politique et budgétaire de l'ordonnateur, le compte de gestion un document comptable du comptable.",
          "Les deux documents doivent présenter des résultats identiques, gage de la séparation entre ordonnateur et comptable.",
          "Le compte de gestion engage la responsabilité personnelle et pécuniaire du comptable public.",
        ],
      },
    ],
    reperes: [
      "Établi par le comptable public de la DGFiP",
      "Contrôlé par la chambre régionale des comptes",
      "Doit être en concordance stricte avec le compte administratif",
    ],
    aRetenir: [
      "Le compte de gestion est l'œuvre du comptable, le compte administratif celle de l'ordonnateur.",
      "La concordance des deux documents matérialise le principe de séparation ordonnateur-comptable.",
      "Le juge des comptes contrôle le compte de gestion, pas le compte administratif.",
    ],
    pieges: [
      "Ne dites pas que le maire établit le compte de gestion : c'est le comptable public.",
      "Le compte de gestion n'est pas un document de prévision mais un document d'exécution comptable.",
      "Ne confondez pas juge des comptes (chambre régionale des comptes) et juge administratif.",
    ],
    phraseJury:
      "Le compte de gestion, établi par le comptable public, doit être en parfaite concordance avec le compte administratif de l'ordonnateur, ce qui traduit le principe de séparation entre les deux fonctions.",
    questionsJury: [
      {
        question: "Qui établit le compte de gestion ?",
        reponse: "Le comptable public, notamment le trésorier de la DGFiP.",
      },
      {
        question: "Qui contrôle le compte de gestion ?",
        reponse: "La chambre régionale des comptes, en tant que juge des comptes.",
      },
      {
        question: "Quelle différence avec le compte administratif ?",
        reponse: "Le compte administratif émane de l'ordonnateur, le compte de gestion du comptable ; leurs résultats doivent coïncider.",
      },
      {
        question: "Quel principe illustre la concordance des deux comptes ?",
        reponse: "Le principe de séparation entre l'ordonnateur et le comptable public.",
      },
    ],
    ultraMemo: "Compte de gestion = document du comptable, concordant avec le compte administratif.",
  },
  {
    id: "fin-depenses-obligatoires-communes",
    title: "Les dépenses obligatoires des communes",
    theme: "Finances et commande publique",
    resume:
      "Les dépenses que la commune doit inscrire à son budget en vertu de la loi, sous peine d'inscription d'office par le préfet.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Définition et fondement",
        points: [
          "Une dépense obligatoire est une dépense que la loi impose à la commune d'inscrire à son budget, quelle que soit sa situation financière.",
          "La liste des dépenses obligatoires des communes est fixée par le code général des collectivités territoriales.",
          "Ces dépenses correspondent à des obligations légales incompressibles, souvent liées à des compétences ou à des engagements de la commune.",
        ],
      },
      {
        titre: "Exemples de dépenses obligatoires",
        points: [
          "La rémunération des agents titulaires et les cotisations sociales afférentes.",
          "L'entretien de l'hôtel de ville et des bâtiments scolaires du premier degré.",
          "Le remboursement de la dette en capital et le paiement des intérêts des emprunts contractés.",
          "Les contributions obligatoires aux organismes de regroupement, comme les EPCI ou les syndicats intercommunaux.",
          "La participation aux dépenses d'aide sociale légale et à la sécurité incendie via le SDIS.",
        ],
      },
      {
        titre: "Procédure en cas de manquement",
        points: [
          "Si une commune refuse d'inscrire une dépense obligatoire, le préfet ou tout créancier intéressé peut saisir la chambre régionale des comptes.",
          "La chambre régionale des comptes met en demeure la commune d'inscrire la dépense dans un délai déterminé.",
          "À défaut d'exécution, le préfet inscrit d'office la dépense au budget communal et peut créer les ressources nécessaires.",
        ],
      },
    ],
    reperes: [
      "Liste fixée par le code général des collectivités territoriales",
      "Procédure d'inscription d'office par le préfet en dernier recours",
      "Chambre régionale des comptes saisie en cas de refus persistant",
    ],
    aRetenir: [
      "Une dépense obligatoire s'impose à la commune indépendamment de sa volonté ou de sa situation budgétaire.",
      "Le contrôle du respect des dépenses obligatoires relève de la chambre régionale des comptes et du préfet.",
      "L'inscription d'office est une mesure exceptionnelle qui intervient après mise en demeure infructueuse.",
    ],
    pieges: [
      "Ne confondez pas dépense obligatoire et dépense facultative, qui relève d'un choix de l'assemblée délibérante.",
      "L'inscription d'office par le préfet ne concerne que les dépenses obligatoires, jamais une dépense facultative.",
      "Ce n'est pas le préfet mais la chambre régionale des comptes qui met en demeure la commune dans un premier temps.",
    ],
    phraseJury:
      "Les dépenses obligatoires s'imposent légalement à la commune ; en cas de refus d'inscription, la chambre régionale des comptes met en demeure la collectivité avant que le préfet ne procède, si besoin, à l'inscription d'office.",
    questionsJury: [
      {
        question: "Qu'est-ce qu'une dépense obligatoire ?",
        reponse: "Une dépense que la loi impose à la commune d'inscrire à son budget.",
      },
      {
        question: "Citez un exemple de dépense obligatoire.",
        reponse: "Le remboursement en capital de la dette, ou la rémunération des agents titulaires.",
      },
      {
        question: "Que se passe-t-il si la commune refuse d'inscrire une dépense obligatoire ?",
        reponse: "La chambre régionale des comptes la met en demeure, puis le préfet peut l'inscrire d'office.",
      },
      {
        question: "Qui peut saisir la chambre régionale des comptes à ce sujet ?",
        reponse: "Le préfet ou tout créancier ayant un intérêt à agir.",
      },
    ],
    ultraMemo: "Dépense obligatoire refusée : mise en demeure de la CRC, puis inscription d'office par le préfet.",
  },
  {
    id: "fin-documents-marche-public",
    title: "Les documents constitutifs d'un marché public",
    theme: "Finances et commande publique",
    resume:
      "L'ensemble des pièces contractuelles et administratives qui encadrent la passation et l'exécution d'un marché public.",
    duree: "7 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Les pièces de la consultation",
        points: [
          "L'avis de publicité, qui informe les opérateurs économiques de l'existence de la procédure.",
          "Le règlement de la consultation, qui fixe les règles applicables à la procédure de passation.",
          "Le cahier des clauses administratives particulières, qui précise les conditions administratives propres au marché.",
          "Le cahier des clauses techniques particulières, qui décrit les prestations attendues et les exigences techniques.",
        ],
      },
      {
        titre: "Les documents contractuels",
        points: [
          "L'acte d'engagement, signé par le titulaire et le pouvoir adjudicateur, qui formalise l'accord des volontés.",
          "Les cahiers des clauses administratives générales, documents types selon la nature du marché, applicables sauf dérogation expresse.",
          "Le bordereau des prix unitaires ou le détail quantitatif estimatif, selon la forme de prix retenue.",
          "Les annexes techniques et financières remises par le candidat lors de son offre.",
        ],
      },
      {
        titre: "Portée et hiérarchie",
        points: [
          "En cas de contradiction entre pièces, le règlement de la consultation fixe généralement l'ordre de priorité applicable.",
          "L'acte d'engagement prime sur les autres pièces lorsqu'il comporte des dérogations expressément signalées.",
          "Ces documents forment un ensemble contractuel opposable aux deux parties pendant toute la durée d'exécution du marché.",
        ],
      },
    ],
    reperes: [
      "Code de la commande publique, entré en vigueur le 1er avril 2019",
      "CCAG : cahiers des clauses administratives générales, par famille de marchés",
      "Acte d'engagement : pièce signée qui matérialise le contrat",
    ],
    aRetenir: [
      "Les documents de la consultation préparent l'appel d'offres, les documents contractuels engagent les parties.",
      "L'acte d'engagement est la pièce maîtresse qui matérialise l'accord entre pouvoir adjudicateur et titulaire.",
      "Le CCAP est propre au marché, le CCAG est un document type applicable par référence.",
    ],
    pieges: [
      "Ne confondez pas CCAG et CCAP : le premier est un référentiel général, le second est spécifique au marché.",
      "Le règlement de la consultation n'est pas un document contractuel mais une pièce de procédure.",
      "L'avis de publicité n'engage aucune des parties : il informe seulement de l'ouverture de la procédure.",
    ],
    phraseJury:
      "Un marché public repose sur des pièces de consultation qui organisent la procédure et des pièces contractuelles, au premier rang desquelles l'acte d'engagement, qui lient les parties pendant l'exécution.",
    questionsJury: [
      {
        question: "Quelle est la différence entre CCAG et CCAP ?",
        reponse: "Le CCAG est un document type par famille de marchés, le CCAP est rédigé spécifiquement pour le marché concerné.",
      },
      {
        question: "Quel document formalise l'accord entre les parties ?",
        reponse: "L'acte d'engagement, signé par le titulaire et le pouvoir adjudicateur.",
      },
      {
        question: "Quel document décrit les prestations techniques attendues ?",
        reponse: "Le cahier des clauses techniques particulières.",
      },
      {
        question: "Que fixe le règlement de la consultation ?",
        reponse: "Les règles de la procédure de passation du marché.",
      },
    ],
    ultraMemo: "Acte d'engagement = signature ; CCAP/CCTP = conditions ; CCAG = référentiel type.",
  },
  {
    id: "fin-budget-local",
    title: "Le budget local",
    theme: "Finances et commande publique",
    resume:
      "L'acte annuel par lequel l'assemblée délibérante prévoit et autorise les recettes et les dépenses de la collectivité, structuré en deux sections.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Structure du budget",
        points: [
          "La section de fonctionnement retrace les opérations courantes, récurrentes et nécessaires au fonctionnement des services.",
          "La section d'investissement retrace les opérations qui modifient durablement le patrimoine de la collectivité.",
          "Chaque section doit être présentée en équilibre réel, c'est-à-dire recettes et dépenses évaluées de façon sincère.",
          "Le budget est voté soit par nature, soit par fonction, selon le choix de présentation retenu par la collectivité.",
        ],
      },
      {
        titre: "Les principes budgétaires",
        points: [
          "Le principe d'annualité impose un vote du budget pour une période d'un an, du 1er janvier au 31 décembre.",
          "Le principe d'unité regroupe l'ensemble des recettes et des dépenses dans un document unique.",
          "Le principe d'universalité interdit la compensation entre recettes et dépenses et impose leur inscription pour leur montant intégral.",
          "Le principe de spécialité impose d'affecter chaque crédit à un objet déterminé.",
        ],
      },
      {
        titre: "Calendrier et adoption",
        points: [
          "Le budget primitif doit être voté avant le 15 avril de l'exercice concerné, ou le 30 avril l'année d'élection de l'assemblée.",
          "Un débat d'orientation budgétaire doit précéder le vote dans les collectivités dépassant certains seuils de population.",
          "Des décisions modificatives peuvent ajuster le budget primitif en cours d'exercice.",
        ],
      },
    ],
    reperes: [
      "Vote avant le 15 avril, ou le 30 avril l'année de renouvellement de l'assemblée",
      "Deux sections : fonctionnement et investissement",
      "Débat d'orientation budgétaire obligatoire au-delà de certains seuils",
    ],
    aRetenir: [
      "Le budget doit être voté en équilibre réel, section par section.",
      "Les quatre grands principes budgétaires sont l'annualité, l'unité, l'universalité et la spécialité.",
      "Le débat d'orientation budgétaire précède et éclaire le vote du budget primitif.",
    ],
    pieges: [
      "Ne dites pas que le budget doit simplement être équilibré globalement : l'équilibre s'apprécie section par section.",
      "Le débat d'orientation budgétaire n'est pas un vote, mais une simple discussion préparatoire.",
      "Ne confondez pas budget primitif et décision modificative, qui vient seulement l'ajuster en cours d'année.",
    ],
    phraseJury:
      "Le budget local, voté chaque année avant le 15 avril, doit respecter les principes d'annualité, d'unité, d'universalité et de spécialité, et présenter un équilibre réel entre ses deux sections.",
    questionsJury: [
      {
        question: "Quelles sont les deux sections du budget local ?",
        reponse: "La section de fonctionnement et la section d'investissement.",
      },
      {
        question: "Qu'est-ce que l'équilibre réel du budget ?",
        reponse: "Un équilibre où chaque section est votée avec des recettes et dépenses sincèrement évaluées, sans recourir à un artifice comptable.",
      },
      {
        question: "Quand le budget primitif doit-il être voté ?",
        reponse: "Avant le 15 avril, ou le 30 avril l'année de renouvellement de l'assemblée délibérante.",
      },
      {
        question: "Qu'est-ce que le débat d'orientation budgétaire ?",
        reponse: "Un débat préalable au vote du budget, obligatoire au-delà de certains seuils de population, qui présente les orientations financières envisagées.",
      },
    ],
    ultraMemo: "Budget = fonctionnement + investissement, en équilibre réel, voté avant le 15 avril.",
  },
  {
    id: "fin-commande-publique",
    title: "La commande publique",
    theme: "Finances et commande publique",
    resume:
      "L'ensemble des règles qui encadrent les achats des personnes publiques, fondées sur la liberté d'accès, l'égalité de traitement et la transparence.",
    duree: "7 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Principes fondamentaux",
        points: [
          "La liberté d'accès à la commande publique permet à tout opérateur économique de candidater à un marché.",
          "L'égalité de traitement des candidats interdit toute discrimination ou avantage injustifié entre eux.",
          "La transparence des procédures garantit la traçabilité et le contrôle des choix effectués par l'acheteur public.",
          "Ces principes découlent du droit de l'Union européenne et sont consacrés par le code de la commande publique.",
        ],
      },
      {
        titre: "Les grandes catégories de contrats",
        points: [
          "Le marché public, contrat conclu à titre onéreux pour répondre aux besoins de l'acheteur en travaux, fournitures ou services.",
          "La concession, contrat par lequel l'exploitation est confiée à un opérateur qui en assume le risque économique.",
          "Le choix de la procédure dépend du montant du besoin : procédure adaptée en dessous des seuils européens, procédure formalisée au-dessus.",
        ],
      },
      {
        titre: "Le déroulement d'une procédure",
        points: [
          "La définition préalable du besoin conditionne l'ensemble de la procédure et engage la responsabilité de l'acheteur.",
          "La publicité doit être proportionnée à l'enjeu du marché, allant d'une simple mise en ligne à une publication au Journal officiel de l'Union européenne.",
          "L'analyse des offres s'effectue selon des critères objectifs, pondérés et annoncés à l'avance aux candidats.",
          "La notification du marché ouvre la phase d'exécution, encadrée par le suivi de l'acheteur public.",
        ],
      },
    ],
    reperes: [
      "Code de la commande publique en vigueur depuis le 1er avril 2019",
      "Seuils européens de procédure formalisée révisés périodiquement",
      "Trois grands principes : liberté d'accès, égalité de traitement, transparence",
    ],
    aRetenir: [
      "Tout achat public repose sur trois principes cardinaux : liberté d'accès, égalité de traitement, transparence.",
      "Marché public et concession se distinguent par la présence ou l'absence de transfert du risque d'exploitation.",
      "Le choix de la procédure dépend essentiellement du montant estimé du besoin.",
    ],
    pieges: [
      "Ne confondez pas marché public et concession : seule la concession comporte un transfert de risque au titulaire.",
      "Une procédure adaptée n'est pas une absence de procédure : elle reste encadrée par les principes de la commande publique.",
      "Ne dites pas que le critère du prix le plus bas est obligatoire : l'acheteur peut retenir l'offre économiquement la plus avantageuse.",
    ],
    phraseJury:
      "La commande publique repose sur trois principes indissociables, liberté d'accès, égalité de traitement et transparence, qui s'appliquent aussi bien aux marchés publics qu'aux concessions.",
    questionsJury: [
      {
        question: "Quels sont les trois grands principes de la commande publique ?",
        reponse: "Liberté d'accès à la commande publique, égalité de traitement des candidats, transparence des procédures.",
      },
      {
        question: "Quelle est la différence entre marché public et concession ?",
        reponse: "Dans la concession, le titulaire assume le risque d'exploitation, ce qui n'est pas le cas dans un marché public classique.",
      },
      {
        question: "Qu'est-ce qu'une procédure adaptée ?",
        reponse: "Une procédure allégée, utilisée en dessous des seuils européens, dont les modalités sont librement fixées par l'acheteur dans le respect des grands principes.",
      },
      {
        question: "Sur quoi repose le choix de la procédure applicable ?",
        reponse: "Principalement sur le montant estimé du besoin par rapport aux seuils réglementaires.",
      },
    ],
    ultraMemo: "Commande publique = liberté d'accès + égalité de traitement + transparence.",
  },
  {
    id: "fin-dgf",
    title: "La dotation globale de fonctionnement",
    theme: "Finances et commande publique",
    resume:
      "La principale dotation de l'État aux collectivités territoriales, destinée à soutenir leur fonctionnement en compensation de charges et de recettes transférées.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Nature et objet",
        points: [
          "La DGF est une dotation de l'État versée chaque année aux communes, EPCI, départements et régions.",
          "Elle constitue la principale ressource de transfert de l'État vers les collectivités territoriales.",
          "Elle vise à compenser des charges de centralité, des charges de ruralité et des transferts de compétences.",
          "Elle est une dotation libre d'emploi, ce qui signifie que la collectivité peut l'affecter aux dépenses de son choix.",
        ],
      },
      {
        titre: "Composantes principales",
        points: [
          "Une dotation forfaitaire, calculée notamment en fonction de la population et de la superficie de la collectivité.",
          "Des dotations de péréquation, comme la dotation de solidarité urbaine ou la dotation de solidarité rurale, destinées à réduire les inégalités entre territoires.",
          "Pour les départements et régions, des composantes spécifiques adaptées à leurs compétences.",
        ],
      },
      {
        titre: "Enjeux et évolutions",
        points: [
          "Le montant global de la DGF est fixé chaque année par la loi de finances.",
          "La DGF a connu une baisse significative entre 2014 et 2017 dans le cadre de la contribution au redressement des finances publiques.",
          "La répartition de la DGF fait l'objet de débats récurrents sur l'équité entre collectivités urbaines et rurales.",
        ],
      },
    ],
    reperes: [
      "Montant fixé chaque année en loi de finances",
      "Composée d'une dotation forfaitaire et de dotations de péréquation",
      "Concerne communes, EPCI, départements et régions",
    ],
    aRetenir: [
      "La DGF est une dotation de fonctionnement libre d'emploi versée par l'État.",
      "Elle combine une logique forfaitaire et une logique de péréquation entre territoires.",
      "Son montant et ses règles de répartition sont fixés chaque année par la loi de finances.",
    ],
    pieges: [
      "Ne confondez pas la DGF, dotation de fonctionnement, avec la DETR, qui finance des projets d'investissement.",
      "La DGF n'est pas une subvention affectée à un projet précis : elle est libre d'emploi.",
      "Ne dites pas que la DGF est financée par les collectivités elles-mêmes : elle est versée par l'État.",
    ],
    phraseJury:
      "La dotation globale de fonctionnement est la principale ressource de transfert de l'État aux collectivités, libre d'emploi, combinant une part forfaitaire et des dotations de péréquation entre territoires.",
    questionsJury: [
      {
        question: "Qu'est-ce que la DGF ?",
        reponse: "La principale dotation de fonctionnement versée par l'État aux collectivités territoriales.",
      },
      {
        question: "La DGF est-elle affectée à une dépense précise ?",
        reponse: "Non, elle est libre d'emploi et peut financer toute dépense de la collectivité.",
      },
      {
        question: "Citez une composante de péréquation de la DGF.",
        reponse: "La dotation de solidarité urbaine ou la dotation de solidarité rurale.",
      },
      {
        question: "Qui fixe le montant annuel de la DGF ?",
        reponse: "Le Parlement, à travers la loi de finances de l'année.",
      },
    ],
    ultraMemo: "DGF = dotation de fonctionnement de l'État, libre d'emploi, forfaitaire et péréquation.",
  },
  {
    id: "fin-controle-interne-audit",
    title: "Le contrôle interne et l'audit",
    theme: "Finances et commande publique",
    resume:
      "Les dispositifs par lesquels une collectivité maîtrise ses risques financiers et évalue la fiabilité de ses procédures de gestion.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Le contrôle interne",
        points: [
          "Le contrôle interne désigne l'ensemble des dispositifs permanents mis en place pour maîtriser les risques et sécuriser les procédures financières et comptables.",
          "Il repose sur la séparation des tâches, la formalisation des procédures et la traçabilité des opérations.",
          "Il vise à garantir la fiabilité des comptes, la conformité aux règles applicables et la protection du patrimoine de la collectivité.",
          "Le développement du contrôle interne comptable et financier est renforcé avec le passage à la nomenclature M57.",
        ],
      },
      {
        titre: "L'audit",
        points: [
          "L'audit est un examen ponctuel et indépendant qui vérifie a posteriori la conformité et l'efficacité des procédures existantes.",
          "L'audit interne est réalisé par des agents ou services de la collectivité elle-même, l'audit externe par un organisme indépendant.",
          "L'audit peut porter sur la régularité comptable, la performance d'un service ou la conformité à la réglementation.",
        ],
      },
      {
        titre: "Articulation et enjeux",
        points: [
          "Le contrôle interne est permanent et préventif, l'audit est ponctuel et correctif.",
          "Les recommandations d'audit alimentent l'amélioration continue du dispositif de contrôle interne.",
          "Ces démarches participent à la fiabilisation des comptes publics et à la certification des comptes de certaines grandes collectivités.",
        ],
      },
    ],
    reperes: [
      "Contrôle interne : dispositif permanent et préventif",
      "Audit : démarche ponctuelle, interne ou externe",
      "Renforcement lié au passage à la nomenclature M57",
    ],
    aRetenir: [
      "Le contrôle interne est un dispositif continu, l'audit une démarche d'évaluation ponctuelle.",
      "Les deux démarches sont complémentaires et concourent à la fiabilité des comptes publics.",
      "La séparation des tâches est un principe clé du contrôle interne.",
    ],
    pieges: [
      "Ne confondez pas contrôle interne, permanent, et audit, qui est ponctuel.",
      "L'audit interne n'est pas réalisé par un organisme extérieur, contrairement à l'audit externe.",
      "Le contrôle interne ne se limite pas à la comptabilité : il concerne aussi les procédures administratives et organisationnelles.",
    ],
    phraseJury:
      "Le contrôle interne est un dispositif permanent de maîtrise des risques, tandis que l'audit est une évaluation ponctuelle, interne ou externe, dont les conclusions viennent renforcer ce contrôle interne.",
    questionsJury: [
      {
        question: "Quelle est la différence entre contrôle interne et audit ?",
        reponse: "Le contrôle interne est permanent et préventif, l'audit est ponctuel et évaluatif.",
      },
      {
        question: "Qu'est-ce que la séparation des tâches ?",
        reponse: "Un principe de contrôle interne qui répartit les responsabilités entre plusieurs agents pour éviter les erreurs ou les fraudes.",
      },
      {
        question: "Quelle est la différence entre audit interne et audit externe ?",
        reponse: "L'audit interne est mené par des agents de la collectivité, l'audit externe par un organisme indépendant.",
      },
      {
        question: "Pourquoi le contrôle interne s'est-il renforcé récemment ?",
        reponse: "Notamment avec le passage à la nomenclature comptable M57 et l'objectif de fiabilisation des comptes publics.",
      },
    ],
    ultraMemo: "Contrôle interne = permanent et préventif ; audit = ponctuel et évaluatif.",
  },
  {
    id: "fin-partenariats-public-prive",
    title: "Les partenariats public-privé",
    theme: "Finances et commande publique",
    resume:
      "Les montages contractuels associant une personne publique et un opérateur privé pour la conception, le financement, la réalisation ou l'exploitation d'un projet.",
    duree: "7 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Les formes de partenariat",
        points: [
          "Le marché de partenariat, contrat global qui confie à un opérateur privé le financement, la construction et parfois l'exploitation d'un ouvrage.",
          "La concession, qui transfère au partenaire privé le risque d'exploitation en contrepartie du droit d'exploiter l'ouvrage ou le service.",
          "Les formes plus souples de coopération, comme les sociétés d'économie mixte ou les sociétés publiques locales associant collectivités et acteurs privés.",
        ],
      },
      {
        titre: "Logique économique et juridique",
        points: [
          "Le partenariat public-privé permet à la collectivité de lisser la dépense d'investissement dans le temps via un paiement différé.",
          "Il transfère au partenaire privé une partie des risques techniques, financiers ou d'exploitation liés au projet.",
          "Le recours à ce type de contrat doit être justifié par une évaluation préalable démontrant son intérêt par rapport à une gestion classique.",
        ],
      },
      {
        titre: "Limites et vigilance",
        points: [
          "Ces montages engagent la collectivité sur le long terme et peuvent limiter ses marges de manœuvre budgétaires futures.",
          "La complexité juridique et financière de ces contrats nécessite une expertise renforcée de la collectivité.",
          "La Cour des comptes a régulièrement souligné les risques de coût final supérieur à une maîtrise d'ouvrage publique classique.",
        ],
      },
    ],
    reperes: [
      "Marché de partenariat encadré par le code de la commande publique",
      "Évaluation préalable obligatoire avant recours au partenariat",
      "Engagement financier de long terme pour la collectivité",
    ],
    aRetenir: [
      "Le partenariat public-privé permet de reporter le financement d'un investissement en contrepartie d'un paiement différé.",
      "Le transfert de risque au partenaire privé est un élément central de ces montages.",
      "Une évaluation préalable est nécessaire pour justifier le recours à ce type de contrat.",
    ],
    pieges: [
      "Ne confondez pas marché de partenariat et simple marché public de travaux : le partenariat inclut financement et souvent exploitation.",
      "Ne dites pas que ces contrats sont sans risque pour la collectivité : ils engagent ses finances sur le long terme.",
      "Un partenariat public-privé n'est pas systématiquement plus avantageux qu'une gestion publique classique.",
    ],
    phraseJury:
      "Le partenariat public-privé confie à un opérateur privé le financement et souvent l'exploitation d'un ouvrage, en contrepartie d'un paiement différé, mais engage la collectivité sur le long terme et nécessite une évaluation préalable rigoureuse.",
    questionsJury: [
      {
        question: "Qu'est-ce qu'un marché de partenariat ?",
        reponse: "Un contrat global confiant à un opérateur privé le financement, la construction et parfois l'exploitation d'un ouvrage public.",
      },
      {
        question: "Quel est l'intérêt principal d'un partenariat public-privé pour la collectivité ?",
        reponse: "Lisser la dépense d'investissement dans le temps grâce à un paiement différé.",
      },
      {
        question: "Quelle précaution est exigée avant de recourir à ce type de contrat ?",
        reponse: "Une évaluation préalable démontrant l'intérêt du montage par rapport à une gestion publique classique.",
      },
      {
        question: "Quel risque a été souligné par la Cour des comptes sur ces contrats ?",
        reponse: "Un coût final parfois supérieur à celui d'une maîtrise d'ouvrage publique classique.",
      },
    ],
    ultraMemo: "PPP = financement privé, paiement différé, transfert de risque, évaluation préalable obligatoire.",
  },
  {
    id: "fin-mutualisation-biens-moyens",
    title: "La mutualisation des biens et des moyens",
    theme: "Finances et commande publique",
    resume:
      "Le partage de services, de personnels ou d'équipements entre une intercommunalité et ses communes membres, dans un objectif d'efficience et d'économie.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Formes de mutualisation",
        points: [
          "Les services communs, créés entre un EPCI et une ou plusieurs de ses communes membres, en dehors des compétences transférées.",
          "La mise à disposition de services ou d'agents entre l'EPCI et ses communes pour l'exercice de compétences partagées.",
          "Le groupement de commandes, qui permet à plusieurs collectivités de mutualiser leurs achats publics.",
        ],
      },
      {
        titre: "Cadre juridique et outils",
        points: [
          "Le schéma de mutualisation des services est un document obligatoire établi par les EPCI à fiscalité propre.",
          "Il doit être élaboré en début de mandat et présenté aux conseils municipaux des communes membres.",
          "La mutualisation s'accompagne de conventions précisant les modalités de mise à disposition et de remboursement des coûts.",
        ],
      },
      {
        titre: "Objectifs et limites",
        points: [
          "La mutualisation vise à réaliser des économies d'échelle et à renforcer la qualité du service rendu aux usagers.",
          "Elle permet de rationaliser l'organisation administrative sans nécessairement transférer les compétences.",
          "Elle suppose un dialogue de gestion entre l'EPCI et les communes pour équilibrer les contributions financières.",
        ],
      },
    ],
    reperes: [
      "Schéma de mutualisation des services obligatoire pour les EPCI à fiscalité propre",
      "Élaboration en début de mandat",
      "Outils principaux : services communs, mise à disposition, groupements de commandes",
    ],
    aRetenir: [
      "La mutualisation ne transfère pas de compétence, elle partage des moyens humains ou matériels.",
      "Le schéma de mutualisation des services est un document obligatoire propre aux EPCI à fiscalité propre.",
      "Elle vise l'efficience de la gestion publique locale par le partage des ressources.",
    ],
    pieges: [
      "Ne confondez pas mutualisation et transfert de compétence : la première ne dessaisit pas la commune de sa compétence.",
      "Le schéma de mutualisation n'est pas facultatif pour les EPCI à fiscalité propre.",
      "Un service commun n'est pas nécessairement lié à une compétence transférée.",
    ],
    phraseJury:
      "La mutualisation permet à un EPCI et à ses communes membres de partager des services, du personnel ou des équipements, sans transfert de compétence, dans un objectif d'économie et d'efficacité de gestion.",
    questionsJury: [
      {
        question: "Qu'est-ce qu'un service commun ?",
        reponse: "Un service créé entre un EPCI et une ou plusieurs communes membres pour exercer ensemble des missions en dehors des compétences transférées.",
      },
      {
        question: "Qu'est-ce que le schéma de mutualisation des services ?",
        reponse: "Un document obligatoire élaboré par les EPCI à fiscalité propre décrivant l'organisation mutualisée envisagée avec les communes.",
      },
      {
        question: "La mutualisation transfère-t-elle une compétence ?",
        reponse: "Non, elle organise un partage de moyens sans dessaisir la commune de sa compétence.",
      },
      {
        question: "Citez un outil de mutualisation des achats.",
        reponse: "Le groupement de commandes entre plusieurs collectivités.",
      },
    ],
    ultraMemo: "Mutualisation = partage de moyens sans transfert de compétence, via un schéma obligatoire.",
  },
  {
    id: "fin-evaluation-politiques-publiques",
    title: "L'évaluation des politiques publiques",
    theme: "Finances et commande publique",
    resume:
      "La démarche qui mesure les effets réels d'une politique publique au regard des objectifs fixés, pour éclairer la décision et améliorer l'action.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Définition et objectifs",
        points: [
          "L'évaluation des politiques publiques consiste à apprécier les effets d'une politique par rapport aux objectifs qui lui avaient été assignés.",
          "Elle se distingue du contrôle, qui vérifie la régularité, et de l'audit, qui vérifie la conformité des procédures.",
          "Elle vise à améliorer la décision publique en identifiant les résultats obtenus, les effets attendus et les effets inattendus.",
        ],
      },
      {
        titre: "Méthode et critères",
        points: [
          "La pertinence, qui questionne l'adéquation entre les objectifs et les besoins identifiés.",
          "L'efficacité, qui mesure l'atteinte des objectifs fixés.",
          "L'efficience, qui rapporte les résultats obtenus aux moyens mobilisés.",
          "L'impact, qui s'intéresse aux effets globaux, y compris indirects, de la politique menée.",
        ],
      },
      {
        titre: "Acteurs et mise en œuvre",
        points: [
          "L'évaluation peut être conduite en interne par la collectivité ou confiée à un prestataire externe indépendant.",
          "Elle s'appuie sur des indicateurs quantitatifs et qualitatifs définis en amont de la politique évaluée.",
          "Ses conclusions doivent alimenter la décision politique et, le cas échéant, la réorientation de l'action publique.",
        ],
      },
    ],
    reperes: [
      "Critères classiques : pertinence, efficacité, efficience, impact",
      "Distincte du contrôle de régularité et de l'audit de conformité",
      "S'appuie sur des indicateurs définis en amont",
    ],
    aRetenir: [
      "L'évaluation mesure les effets d'une politique publique par rapport à ses objectifs.",
      "Elle se distingue nettement du contrôle et de l'audit, centrés sur la régularité et la conformité.",
      "Les indicateurs doivent être définis avant la mise en œuvre de la politique pour permettre une évaluation fiable.",
    ],
    pieges: [
      "Ne confondez pas évaluation, contrôle et audit : ces trois démarches répondent à des questions différentes.",
      "L'évaluation ne se limite pas au respect des règles : elle porte sur les résultats obtenus.",
      "Ne dites pas que l'évaluation est réservée à l'État : les collectivités territoriales y recourent également.",
    ],
    phraseJury:
      "L'évaluation des politiques publiques mesure les effets réels d'une action au regard de ses objectifs, en s'appuyant sur des critères comme la pertinence, l'efficacité, l'efficience et l'impact.",
    questionsJury: [
      {
        question: "Quelle est la différence entre évaluation et contrôle ?",
        reponse: "Le contrôle vérifie la régularité d'une action, l'évaluation mesure ses effets par rapport à ses objectifs.",
      },
      {
        question: "Citez deux critères d'évaluation d'une politique publique.",
        reponse: "L'efficacité, qui mesure l'atteinte des objectifs, et l'efficience, qui rapporte résultats et moyens engagés.",
      },
      {
        question: "Qui peut conduire une évaluation de politique publique ?",
        reponse: "La collectivité elle-même en interne, ou un prestataire externe indépendant.",
      },
      {
        question: "Quand doivent être définis les indicateurs d'évaluation ?",
        reponse: "En amont, avant la mise en œuvre de la politique publique évaluée.",
      },
    ],
    ultraMemo: "Évaluation = pertinence, efficacité, efficience, impact, au service de la décision.",
  },
  {
    id: "fin-dette-emprunt",
    title: "La dette et l'emprunt",
    theme: "Finances et commande publique",
    resume:
      "Les règles qui encadrent le recours à l'emprunt par les collectivités territoriales, réservé au financement de la section d'investissement.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Le principe d'affectation",
        points: [
          "L'emprunt est une recette qui ne peut financer que la section d'investissement, jamais des dépenses de fonctionnement.",
          "Le remboursement du capital emprunté constitue une dépense obligatoire de la section d'investissement.",
          "Les intérêts de la dette, en revanche, sont inscrits en dépenses de la section de fonctionnement.",
        ],
      },
      {
        titre: "Encadrement juridique",
        points: [
          "L'assemblée délibérante autorise le recours à l'emprunt, souvent en fixant un montant plafond au budget primitif.",
          "L'exécutif choisit librement les établissements prêteurs et les caractéristiques du contrat, dans le cadre de cette autorisation.",
          "La charte de bonne conduite dite Gissler encadre le recours aux emprunts structurés et vise à limiter les emprunts toxiques.",
        ],
      },
      {
        titre: "Indicateurs de suivi",
        points: [
          "La capacité de désendettement rapporte l'encours de la dette à l'épargne brute dégagée par la collectivité.",
          "L'épargne brute, différence entre recettes et dépenses réelles de fonctionnement, conditionne la capacité d'autofinancement des investissements.",
          "Un endettement excessif peut conduire à des difficultés financières et à un contrôle renforcé de la chambre régionale des comptes.",
        ],
      },
    ],
    reperes: [
      "Emprunt réservé au financement de l'investissement",
      "Capital remboursé en investissement, intérêts payés en fonctionnement",
      "Charte Gissler encadrant les emprunts structurés depuis 2009",
    ],
    aRetenir: [
      "L'emprunt ne peut financer que des dépenses d'investissement, jamais de fonctionnement.",
      "Le capital et les intérêts de la dette sont imputés sur des sections budgétaires différentes.",
      "La capacité de désendettement est l'indicateur central pour apprécier la soutenabilité de la dette.",
    ],
    pieges: [
      "Ne dites pas que l'emprunt peut financer le fonctionnement courant de la collectivité.",
      "Ne confondez pas capital et intérêts : seul le capital est une dépense d'investissement.",
      "La chambre régionale des comptes n'autorise pas les emprunts, mais peut intervenir en cas de déséquilibre budgétaire durable.",
    ],
    phraseJury:
      "L'emprunt est une ressource exclusivement affectée à la section d'investissement, dont le remboursement en capital pèse sur l'investissement tandis que les intérêts relèvent du fonctionnement, la soutenabilité de la dette s'appréciant par la capacité de désendettement.",
    questionsJury: [
      {
        question: "L'emprunt peut-il financer des dépenses de fonctionnement ?",
        reponse: "Non, il est réservé au financement de la section d'investissement.",
      },
      {
        question: "Comment se répartit le remboursement de l'emprunt entre les sections ?",
        reponse: "Le capital est remboursé en section d'investissement, les intérêts sont payés en section de fonctionnement.",
      },
      {
        question: "Qu'est-ce que la capacité de désendettement ?",
        reponse: "Un ratio qui rapporte l'encours de la dette à l'épargne brute, indiquant le nombre d'années nécessaires pour rembourser la dette.",
      },
      {
        question: "Qu'est-ce que la charte Gissler ?",
        reponse: "Une charte de bonne conduite encadrant le recours aux emprunts structurés pour limiter les emprunts toxiques.",
      },
    ],
    ultraMemo: "Emprunt = investissement uniquement ; capital en investissement, intérêts en fonctionnement.",
  },
  {
    id: "fin-fiscalite-locale",
    title: "La fiscalité locale",
    theme: "Finances et commande publique",
    resume:
      "L'ensemble des impôts directs et indirects perçus par les collectivités territoriales, principale ressource propre de leur budget.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les grandes impositions directes locales",
        points: [
          "La taxe foncière sur les propriétés bâties et la taxe foncière sur les propriétés non bâties, dues par les propriétaires.",
          "La taxe d'habitation, désormais supprimée pour les résidences principales, mais maintenue pour les résidences secondaires.",
          "La cotisation foncière des entreprises et la cotisation sur la valeur ajoutée des entreprises, composantes de la contribution économique territoriale.",
        ],
      },
      {
        titre: "Pouvoir fiscal des collectivités",
        points: [
          "Les communes et les EPCI à fiscalité propre votent chaque année les taux des impositions directes locales dans les limites fixées par la loi.",
          "Le vote des taux doit intervenir en même temps que le vote du budget primitif.",
          "Les bases d'imposition sont établies par l'administration fiscale, indépendamment de la collectivité.",
        ],
      },
      {
        titre: "Réformes et évolutions récentes",
        points: [
          "La suppression progressive de la taxe d'habitation sur les résidences principales a été compensée pour les communes par le transfert de la taxe foncière départementale.",
          "Les départements et régions ne disposent plus de pouvoir de taux sur des impôts ménages, ce qui a réduit leur autonomie fiscale.",
          "La fiscalité locale reste un enjeu central du débat sur l'autonomie financière des collectivités territoriales.",
        ],
      },
    ],
    reperes: [
      "Suppression de la taxe d'habitation sur les résidences principales achevée en 2023",
      "Compensation des communes par le transfert de la taxe foncière départementale",
      "Vote des taux concomitant au vote du budget primitif",
    ],
    aRetenir: [
      "La fiscalité locale constitue la principale ressource propre des collectivités territoriales.",
      "Les communes et EPCI votent les taux, mais les bases sont établies par l'administration fiscale.",
      "La suppression de la taxe d'habitation a profondément modifié l'architecture fiscale des communes.",
    ],
    pieges: [
      "Ne dites pas que la taxe d'habitation a totalement disparu : elle subsiste pour les résidences secondaires.",
      "Ne confondez pas vote des taux, décidé par la collectivité, et détermination des bases, faite par l'administration fiscale.",
      "Les départements et régions ne votent plus de taux sur la fiscalité ménages depuis les réformes récentes.",
    ],
    phraseJury:
      "La fiscalité locale, principale ressource propre des collectivités, a été profondément transformée par la suppression de la taxe d'habitation sur les résidences principales, compensée pour les communes par le transfert de la taxe foncière départementale.",
    questionsJury: [
      {
        question: "Qui vote les taux des impositions directes locales ?",
        reponse: "Les communes et les EPCI à fiscalité propre, dans les limites fixées par la loi.",
      },
      {
        question: "La taxe d'habitation existe-t-elle encore ?",
        reponse: "Oui, mais seulement pour les résidences secondaires, car elle a été supprimée pour les résidences principales.",
      },
      {
        question: "Comment les communes ont-elles été compensées de la suppression de la taxe d'habitation ?",
        reponse: "Par le transfert de la part départementale de la taxe foncière sur les propriétés bâties.",
      },
      {
        question: "Qui établit les bases d'imposition locales ?",
        reponse: "L'administration fiscale, indépendamment des collectivités territoriales.",
      },
    ],
    ultraMemo: "Fiscalité locale = ressource propre, taux votés localement, bases fixées par l'État.",
  },
  {
    id: "fin-nomenclature-m57",
    title: "La nomenclature comptable M57",
    theme: "Finances et commande publique",
    resume:
      "Le référentiel budgétaire et comptable unifié destiné à s'appliquer à l'ensemble des collectivités territoriales et de leurs établissements publics.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Origine et généralisation",
        points: [
          "La nomenclature M57 était initialement destinée aux collectivités territoriales uniques, comme la collectivité de Corse.",
          "Elle a vocation à devenir le référentiel budgétaire et comptable commun à toutes les catégories de collectivités territoriales.",
          "Sa généralisation s'est effectuée de manière progressive, sur la base du volontariat puis de façon obligatoire à compter du 1er janvier 2024.",
        ],
      },
      {
        titre: "Apports du référentiel",
        points: [
          "La M57 reprend le cadre le plus englobant des nomenclatures existantes, en intégrant les règles budgétaires les plus avancées.",
          "Elle offre plus de souplesse dans la gestion des crédits, notamment grâce aux possibilités de fongibilité entre chapitres.",
          "Elle renforce les exigences de qualité comptable et prépare la certification des comptes des grandes collectivités.",
        ],
      },
      {
        titre: "Conséquences pratiques",
        points: [
          "Le passage à la M57 implique une adaptation des logiciels financiers et une formation des agents chargés de la comptabilité.",
          "Elle facilite les comparaisons financières entre collectivités grâce à un cadre commun harmonisé.",
          "Elle s'inscrit dans le mouvement plus large de fiabilisation des comptes publics locaux.",
        ],
      },
    ],
    reperes: [
      "Généralisation obligatoire au 1er janvier 2024",
      "Référentiel unique destiné à toutes les collectivités territoriales",
      "Renforce la fongibilité des crédits et la qualité comptable",
    ],
    aRetenir: [
      "La M57 remplace progressivement les anciennes nomenclatures M14, M52 et M71.",
      "Elle est devenue obligatoire pour toutes les collectivités à compter du 1er janvier 2024.",
      "Elle vise l'harmonisation et la fiabilisation des comptes publics locaux.",
    ],
    pieges: [
      "Ne dites pas que la M57 concerne uniquement les communes : elle s'applique à toutes les catégories de collectivités.",
      "Ne confondez pas M57 et M14 : la M14 était la nomenclature communale, aujourd'hui remplacée par la M57.",
      "La généralisation n'a pas été immédiate : elle s'est faite d'abord sur la base du volontariat.",
    ],
    phraseJury:
      "La nomenclature M57 est devenue le référentiel budgétaire et comptable unique de toutes les collectivités territoriales à compter du 1er janvier 2024, en remplacement des nomenclatures M14, M52 et M71.",
    questionsJury: [
      {
        question: "Qu'est-ce que la nomenclature M57 ?",
        reponse: "Le référentiel budgétaire et comptable commun destiné à l'ensemble des collectivités territoriales.",
      },
      {
        question: "Depuis quand la M57 est-elle obligatoire pour toutes les collectivités ?",
        reponse: "Depuis le 1er janvier 2024.",
      },
      {
        question: "Quelles nomenclatures la M57 remplace-t-elle ?",
        reponse: "Notamment la M14 des communes, la M52 des départements et la M71 des régions.",
      },
      {
        question: "Quel avantage offre la M57 en gestion budgétaire ?",
        reponse: "Une plus grande souplesse grâce à la fongibilité des crédits entre chapitres.",
      },
    ],
    ultraMemo: "M57 = référentiel comptable unique, obligatoire depuis le 1er janvier 2024.",
  },
  {
    id: "fin-separation-ordonnateur-comptable",
    title: "La séparation ordonnateur-comptable",
    theme: "Finances et commande publique",
    resume:
      "Le principe fondamental des finances publiques qui distingue celui qui décide de la dépense de celui qui la paie effectivement.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Définition du principe",
        points: [
          "L'ordonnateur est l'autorité, maire, président de conseil départemental ou régional, qui décide de la dépense ou constate la recette.",
          "Le comptable public est l'agent chargé exclusivement du maniement des fonds, du recouvrement des recettes et du paiement des dépenses.",
          "Ces deux fonctions ne peuvent jamais être exercées par la même personne, ce qui garantit un double regard sur chaque opération financière.",
        ],
      },
      {
        titre: "Les contrôles du comptable",
        points: [
          "Le comptable vérifie la qualité de l'ordonnateur, la disponibilité des crédits et l'exacte imputation budgétaire de la dépense.",
          "Il contrôle la validité de la créance, notamment la justification du service fait avant tout paiement.",
          "En cas d'irrégularité, il peut suspendre le paiement et exiger de l'ordonnateur une réquisition écrite pour l'exécuter malgré tout.",
        ],
      },
      {
        titre: "Responsabilités engagées",
        points: [
          "La responsabilité du comptable public est personnelle et pécuniaire sur son patrimoine propre en cas d'irrégularité non détectée.",
          "L'ordonnateur engage sa responsabilité administrative et, le cas échéant, pénale en cas de faute de gestion.",
          "Ce principe garantit la sécurité juridique et financière des deniers publics en évitant la concentration des pouvoirs.",
        ],
      },
    ],
    reperes: [
      "Principe fondamental de la comptabilité publique française",
      "Comptable : responsabilité personnelle et pécuniaire",
      "Réquisition écrite possible de l'ordonnateur en cas de blocage",
    ],
    aRetenir: [
      "L'ordonnateur décide, le comptable paie : les deux fonctions sont incompatibles entre elles.",
      "Le comptable engage sa responsabilité personnelle et pécuniaire, l'ordonnateur sa responsabilité administrative et pénale.",
      "La réquisition permet à l'ordonnateur de passer outre le refus du comptable, sous certaines conditions strictes.",
    ],
    pieges: [
      "Ne dites pas que le comptable décide de la dépense : il ne fait qu'exécuter le paiement après contrôle.",
      "Le maire ne peut pas être comptable de sa propre commune : les fonctions sont incompatibles.",
      "La réquisition ne dégage pas totalement la responsabilité du comptable, sauf exceptions prévues par les textes.",
    ],
    phraseJury:
      "La séparation entre ordonnateur et comptable public interdit qu'une même personne décide de la dépense et en assure le paiement, ce qui garantit un double contrôle sur les deniers publics.",
    questionsJury: [
      {
        question: "Qui est l'ordonnateur d'une commune ?",
        reponse: "Le maire, qui décide des dépenses et constate les recettes.",
      },
      {
        question: "Que contrôle le comptable public avant de payer une dépense ?",
        reponse: "La qualité de l'ordonnateur, la disponibilité des crédits, l'exacte imputation et la justification du service fait.",
      },
      {
        question: "Que peut faire l'ordonnateur si le comptable refuse de payer ?",
        reponse: "Lui adresser une réquisition écrite pour l'obliger à exécuter le paiement, sous certaines conditions.",
      },
      {
        question: "Quelle est la nature de la responsabilité du comptable public ?",
        reponse: "Une responsabilité personnelle et pécuniaire sur son patrimoine propre.",
      },
    ],
    ultraMemo: "Ordonnateur décide, comptable paie : fonctions incompatibles, responsabilités distinctes.",
  },
  {
    id: "fin-mise-sous-tutelle-budgetaire",
    title: "La mise sous tutelle budgétaire",
    theme: "Finances et commande publique",
    resume:
      "La procédure exceptionnelle par laquelle le préfet, sur saisine de la chambre régionale des comptes, se substitue à une collectivité défaillante pour rétablir l'équilibre de son budget.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Les hypothèses de saisine",
        points: [
          "Le budget n'a pas été voté dans les délais légaux impartis à l'assemblée délibérante.",
          "Le budget est voté en déséquilibre réel, sans que les mesures de redressement nécessaires aient été prises.",
          "Le compte administratif fait apparaître un déficit dépassant un certain seuil du montant des recettes de fonctionnement.",
          "Une dépense obligatoire n'a pas été inscrite au budget malgré une mise en demeure.",
        ],
      },
      {
        titre: "Le déroulement de la procédure",
        points: [
          "Le préfet, un créancier ou le comptable public saisit la chambre régionale des comptes de la situation.",
          "La chambre régionale des comptes constate la situation et formule des propositions pour rétablir l'équilibre.",
          "Si l'assemblée délibérante ne suit pas ces propositions dans le délai imparti, le préfet règle le budget et le rend exécutoire d'office.",
        ],
      },
      {
        titre: "Portée du dispositif",
        points: [
          "Cette procédure reste exceptionnelle et ne remet pas en cause de façon durable la libre administration de la collectivité.",
          "Elle vise à garantir la continuité des services publics locaux malgré la défaillance budgétaire.",
          "Le préfet ne peut agir qu'après l'intervention de la chambre régionale des comptes, jamais de sa propre initiative directe.",
        ],
      },
    ],
    reperes: [
      "Saisine de la chambre régionale des comptes en amont de toute action préfectorale",
      "Le préfet règle le budget seulement si les propositions de la CRC ne sont pas suivies",
      "Procédure fondée sur le code général des collectivités territoriales",
    ],
    aRetenir: [
      "La mise sous tutelle budgétaire n'est jamais directe : elle passe obligatoirement par la chambre régionale des comptes.",
      "Elle peut résulter d'un défaut de vote, d'un déséquilibre réel ou d'un déficit excessif du compte administratif.",
      "Le règlement d'office du budget par le préfet est une mesure de dernier recours.",
    ],
    pieges: [
      "Ne dites pas que le préfet règle directement le budget sans intervention préalable de la chambre régionale des comptes.",
      "Ne confondez pas mise sous tutelle budgétaire et contrôle de légalité, qui porte sur d'autres actes que le budget.",
      "Cette procédure ne prive pas durablement la collectivité de son autonomie : elle reste ponctuelle et encadrée.",
    ],
    phraseJury:
      "En cas de défaillance budgétaire grave, la chambre régionale des comptes est saisie pour proposer les mesures de redressement nécessaires, et ce n'est qu'en dernier recours que le préfet règle et rend exécutoire le budget d'office.",
    questionsJury: [
      {
        question: "Quelles situations peuvent entraîner une saisine de la chambre régionale des comptes ?",
        reponse: "Le défaut de vote du budget, un déséquilibre réel, un déficit excessif du compte administratif ou l'absence d'inscription d'une dépense obligatoire.",
      },
      {
        question: "Le préfet peut-il régler directement le budget d'une commune ?",
        reponse: "Non, il ne peut le faire qu'après la procédure devant la chambre régionale des comptes et si ses propositions ne sont pas suivies.",
      },
      {
        question: "Quel est le rôle de la chambre régionale des comptes dans cette procédure ?",
        reponse: "Constater la situation budgétaire et proposer des mesures de redressement à l'assemblée délibérante.",
      },
      {
        question: "Cette procédure remet-elle en cause durablement l'autonomie de la collectivité ?",
        reponse: "Non, elle reste une mesure exceptionnelle et ponctuelle destinée à rétablir l'équilibre budgétaire.",
      },
    ],
    ultraMemo: "Défaillance budgétaire : CRC d'abord, préfet en dernier recours seulement.",
  },
  {
    id: "fin-recettes-departement",
    title: "Les recettes du département",
    theme: "Finances et commande publique",
    resume:
      "Les ressources qui financent l'action du département, combinant dotations de l'État, fiscalité transférée et recettes propres.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Les dotations de l'État",
        points: [
          "La dotation globale de fonctionnement, principale dotation de fonctionnement versée par l'État au département.",
          "Des dotations de compensation liées aux transferts de compétences intervenus depuis les lois de décentralisation.",
          "Des concours spécifiques destinés à financer certaines politiques sociales, notamment le RSA.",
        ],
      },
      {
        titre: "La fiscalité départementale",
        points: [
          "La taxe foncière sur les propriétés bâties, seule imposition directe conservée en partie par le département après les réformes récentes.",
          "Les droits de mutation à titre onéreux, perçus lors des ventes immobilières, qui constituent une ressource dynamique mais sensible à la conjoncture.",
          "Une fraction de taxe sur la valeur ajoutée, attribuée en compensation de la perte de certaines recettes fiscales.",
        ],
      },
      {
        titre: "Autres recettes",
        points: [
          "Les recettes tarifaires liées aux services rendus par le département, comme certains services sociaux ou culturels.",
          "Les emprunts, réservés au financement de la section d'investissement, notamment pour les collèges et les routes départementales.",
          "Les fonds de péréquation entre départements, destinés à réduire les inégalités de ressources et de charges sociales.",
        ],
      },
    ],
    reperes: [
      "Droits de mutation à titre onéreux : recette dynamique mais volatile",
      "Fraction de TVA en compensation de la fiscalité perdue",
      "Fonds de péréquation entre départements pour l'action sociale",
    ],
    aRetenir: [
      "Les recettes du département combinent dotations de l'État, fiscalité transférée et recettes propres.",
      "Les droits de mutation à titre onéreux sont une ressource très sensible à la conjoncture immobilière.",
      "Le département a perdu une large part de son pouvoir fiscal direct au profit de dotations et de fractions d'impôts nationaux.",
    ],
    pieges: [
      "Ne dites pas que le département vote librement le taux de la TVA qui lui est affectée : ce taux est fixé par l'État.",
      "Les droits de mutation ne sont pas une recette stable : ils varient fortement selon le marché immobilier.",
      "Ne confondez pas dotation de compensation et DGF : la première est liée à un transfert de compétence précis.",
    ],
    phraseJury:
      "Les recettes du département reposent sur les dotations de l'État, une fiscalité transférée réduite comme les droits de mutation, et une fraction de TVA venue compenser la perte de pouvoir fiscal direct.",
    questionsJury: [
      {
        question: "Quelle est la principale dotation de fonctionnement du département ?",
        reponse: "La dotation globale de fonctionnement versée par l'État.",
      },
      {
        question: "Qu'est-ce que les droits de mutation à titre onéreux ?",
        reponse: "Des recettes perçues par le département lors des ventes immobilières, dynamiques mais sensibles à la conjoncture.",
      },
      {
        question: "Le département dispose-t-il encore d'un large pouvoir fiscal direct ?",
        reponse: "Non, il a perdu une grande partie de ce pouvoir au profit de dotations et de fractions d'impôts nationaux comme la TVA.",
      },
      {
        question: "À quoi servent les fonds de péréquation entre départements ?",
        reponse: "À réduire les inégalités de ressources et de charges sociales entre départements.",
      },
    ],
    ultraMemo: "Recettes du département = DGF + droits de mutation + fraction de TVA + péréquation.",
  },
];
