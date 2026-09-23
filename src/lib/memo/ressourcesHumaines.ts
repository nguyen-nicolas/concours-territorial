import type { FicheMemo } from "../memoTypes";
import { TOUS_CONCOURS, CONCOURS_AB } from "../memoTypes";

export const fichesRessourcesHumaines: FicheMemo[] = [
  {
    id: "rh-droits-devoirs-fonctionnaire",
    title: "Droits et devoirs du fonctionnaire",
    theme: "Statut et carrière",
    resume:
      "Le statut général organise un équilibre entre garanties offertes à l'agent et obligations attachées à l'exercice d'une mission de service public.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les droits fondamentaux",
        points: [
          "Liberté d'opinion : aucune discrimination ne peut être fondée sur les opinions politiques, syndicales, religieuses ou philosophiques de l'agent.",
          "Droit syndical : possibilité de créer un syndicat, d'y adhérer et d'exercer un mandat, avec des autorisations d'absence dédiées.",
          "Droit de grève, encadré par la loi, sauf pour certains corps dont l'exercice est restreint pour des motifs d'ordre public.",
          "Droit à la protection fonctionnelle, à la formation tout au long de la carrière et à une rémunération après service fait.",
        ],
      },
      {
        titre: "Les obligations professionnelles",
        points: [
          "Obligation d'exercer ses fonctions avec neutralité et de respecter le principe de laïcité dans le service public.",
          "Obligation de discrétion professionnelle pour les faits, informations et documents dont l'agent a connaissance.",
          "Obligation d'obéissance hiérarchique, sauf ordre manifestement illégal et de nature à compromettre gravement un intérêt public.",
          "Obligation de consacrer l'intégralité de son activité professionnelle aux tâches confiées, sous réserve des dérogations au cumul d'activités.",
        ],
      },
      {
        titre: "Le cadre juridique",
        points: [
          "Le statut général se compose de quatre titres législatifs couvrant les droits communs, l'État, la territoriale et l'hospitalière.",
          "La loi du 13 juillet 1983 pose les droits et obligations communs à tous les fonctionnaires.",
          "La loi du 26 janvier 1984 organise spécifiquement la fonction publique territoriale.",
        ],
      },
    ],
    reperes: [
      "Loi n° 83-634 du 13 juillet 1983, dite loi Le Pors",
      "Loi n° 84-53 du 26 janvier 1984 relative à la FPT",
      "Loi du 20 avril 2016 relative à la déontologie et aux droits des fonctionnaires",
    ],
    aRetenir: [
      "Droits et obligations forment un couple indissociable propre au statut de fonctionnaire.",
      "La neutralité s'impose à l'agent, la laïcité s'impose au service public.",
      "Le devoir d'obéissance connaît une limite : l'ordre manifestement illégal.",
    ],
    pieges: [
      "Ne confondez pas discrétion professionnelle, qui protège l'administration, et secret professionnel, qui protège les usagers.",
      "Le droit de grève n'est pas absolu : certains agents ne peuvent pas y recourir.",
      "La liberté d'opinion n'autorise pas la manifestation de convictions dans l'exercice des fonctions.",
    ],
    phraseJury:
      "Le statut général protège l'agent public tout en lui imposant des exigences particulières liées à sa mission de service public. Cet équilibre garantit à la fois son indépendance et la confiance des usagers.",
    questionsJury: [
      {
        question: "Qu'est-ce que l'obligation de réserve ?",
        reponse: "Une exigence de modération dans l'expression publique des opinions, distincte de la neutralité et du devoir de discrétion.",
      },
      {
        question: "Un agent peut-il refuser un ordre de son supérieur ?",
        reponse: "Oui, uniquement si l'ordre est manifestement illégal et compromet gravement un intérêt public.",
      },
      {
        question: "Quelle loi fonde le statut général des fonctionnaires ?",
        reponse: "La loi du 13 juillet 1983, dite loi Le Pors.",
      },
      {
        question: "La liberté d'opinion est-elle absolue au travail ?",
        reponse: "Elle est reconnue mais encadrée par le devoir de neutralité dans l'exercice des fonctions.",
      },
    ],
    ultraMemo: "Statut = droits protecteurs + obligations de service, avec la loi de 1983 en socle commun.",
  },
  {
    id: "rh-categories-agents",
    title: "Les catégories d'agents : titulaires, contractuels, A, B, C",
    theme: "Statut et carrière",
    resume:
      "La fonction publique territoriale emploie des agents relevant de statuts différents et regroupe les corps en trois catégories hiérarchiques.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Titulaires et contractuels",
        points: [
          "Le fonctionnaire titulaire est nommé dans un grade après réussite à un concours et effectue une période de stage probatoire.",
          "L'agent contractuel de droit public est recruté par contrat, pour répondre à un besoin permanent ou temporaire.",
          "Le recours au contrat s'est élargi depuis la loi de transformation de la fonction publique, notamment pour les emplois de direction.",
          "Le contractuel ne bénéficie pas de la garantie de l'emploi propre au statut, mais dispose de droits sociaux comparables.",
        ],
      },
      {
        titre: "Les trois catégories hiérarchiques",
        points: [
          "Catégorie A : fonctions de conception, de direction et d'encadrement, accès en général avec un diplôme de niveau licence ou plus.",
          "Catégorie B : fonctions d'application et d'encadrement intermédiaire, accès généralement avec le baccalauréat.",
          "Catégorie C : fonctions d'exécution, accès sans condition de diplôme ou avec un diplôme de niveau brevet.",
        ],
      },
      {
        titre: "Cadres d'emplois et filières",
        points: [
          "Le fonctionnaire appartient à un cadre d'emplois, regroupement de grades correspondant à des missions comparables.",
          "Les cadres d'emplois sont organisés en filières : administrative, technique, culturelle, sociale, sportive, animation, police municipale, sapeurs-pompiers.",
          "Le grade est distinct de l'emploi : le fonctionnaire est propriétaire de son grade, non de son poste.",
        ],
      },
    ],
    reperes: [
      "Loi du 26 janvier 1984 : cadres d'emplois de la FPT",
      "Loi du 6 août 2019 de transformation de la fonction publique",
      "Environ un cinquième des effectifs territoriaux sont des contractuels",
    ],
    aRetenir: [
      "Trois catégories : A conception, B application, C exécution.",
      "Le grade est la propriété du fonctionnaire, l'emploi appartient à la collectivité.",
      "Le contrat se développe mais reste dérogatoire au principe du recrutement par concours.",
    ],
    pieges: [
      "Ne dites pas que le contractuel est un fonctionnaire : c'est un agent public non titulaire.",
      "Ne confondez pas grade et emploi : leur distinction est un pilier du statut.",
      "La catégorie ne détermine pas seul le niveau de rémunération, qui dépend aussi de l'échelon et du régime indemnitaire.",
    ],
    phraseJury:
      "La fonction publique territoriale repose sur une architecture de cadres d'emplois répartis en catégories, complétée par un recours croissant au contrat. Cette diversité de statuts permet d'adapter le recrutement aux besoins des collectivités.",
    questionsJury: [
      { question: "Quelle est la différence entre grade et emploi ?", reponse: "Le grade est attaché à la personne, l'emploi est attaché au poste dans la collectivité." },
      { question: "Un contractuel peut-il devenir titulaire ?", reponse: "Oui, en réussissant un concours ou par la voie de dispositifs de titularisation prévus par la loi." },
      { question: "Quelle catégorie recrute au niveau baccalauréat ?", reponse: "La catégorie B." },
      { question: "Le contrat est-il devenu la norme de recrutement ?", reponse: "Non, le concours reste le principe, le contrat demeure une voie dérogatoire même si elle s'est développée." },
    ],
    ultraMemo: "A conçoit, B applique, C exécute ; le fonctionnaire a un grade, la collectivité a des emplois.",
  },
  {
    id: "rh-recrutement-fpt",
    title: "Le recrutement dans la fonction publique territoriale",
    theme: "Statut et carrière",
    resume:
      "Le concours demeure le mode principal d'accès à la fonction publique territoriale, complété par d'autres voies encadrées.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les trois types de concours",
        points: [
          "Concours externe : ouvert sur titres ou diplômes, apprécie les connaissances générales des candidats.",
          "Concours interne : réservé aux agents publics justifiant d'une certaine ancienneté, valorise l'expérience professionnelle.",
          "Troisième concours : ouvert aux candidats justifiant d'une expérience professionnelle dans le secteur privé ou associatif ou d'un mandat électif.",
        ],
      },
      {
        titre: "Après le concours",
        points: [
          "Le lauréat est inscrit sur une liste d'aptitude, valable un an renouvelable deux fois s'il ne trouve pas d'employeur.",
          "Il doit ensuite être recruté par une collectivité, qui le nomme stagiaire sur un emploi correspondant à son grade.",
          "Le stage, d'une durée d'un an en général, doit être validé pour permettre la titularisation.",
        ],
      },
      {
        titre: "Les autres voies de recrutement",
        points: [
          "Le recrutement direct sans concours existe pour certains grades de catégorie C, notamment le premier grade des adjoints.",
          "Le recrutement de travailleurs handicapés peut s'effectuer par contrat donnant vocation à titularisation.",
          "Le contrat est mobilisé lorsqu'aucun fonctionnaire n'a pu être recruté ou pour répondre à un besoin temporaire ou spécifique.",
        ],
      },
    ],
    reperes: [
      "Liste d'aptitude : validité d'un an, renouvelable deux fois",
      "Loi du 26 janvier 1984, articles relatifs au recrutement",
      "Centres de gestion : organisateurs des concours pour de nombreux cadres d'emplois",
    ],
    aRetenir: [
      "Trois voies de concours : externe, interne, troisième concours.",
      "Réussir le concours ne garantit pas un emploi : il faut ensuite être recruté par une collectivité.",
      "Le stage valide l'aptitude réelle de l'agent avant titularisation.",
    ],
    pieges: [
      "La réussite au concours n'emporte pas titularisation automatique.",
      "Le centre de gestion organise le concours, il n'emploie pas nécessairement le lauréat.",
      "Ne confondez pas recrutement direct sans concours et recrutement contractuel : le premier reste une nomination statutaire.",
    ],
    phraseJury:
      "Le recrutement territorial articule un principe de concours et des voies complémentaires pour répondre à la diversité des besoins des employeurs locaux. La liste d'aptitude illustre la séparation entre réussite au concours et obtention effective d'un poste.",
    questionsJury: [
      { question: "Que se passe-t-il si un lauréat ne trouve pas de poste dans le délai imparti ?", reponse: "Il perd le bénéfice du concours à l'expiration de la liste d'aptitude." },
      { question: "Qui organise les concours de catégorie C et B en général ?", reponse: "Les centres de gestion départementaux ou interdépartementaux." },
      { question: "Quelle est la durée habituelle du stage ?", reponse: "Un an, pouvant être prolongé si nécessaire." },
      { question: "Le troisième concours s'adresse à qui ?", reponse: "Aux personnes ayant une expérience professionnelle privée, associative ou un mandat électif." },
    ],
    ultraMemo: "Concours puis inscription sur liste d'aptitude, puis recrutement effectif, puis stage, puis titularisation.",
  },
  {
    id: "rh-qualite-vie-travail",
    title: "La qualité de vie au travail",
    theme: "Action publique et services",
    resume:
      "La qualité de vie et des conditions de travail vise à concilier performance du service public et bien-être des agents.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les composantes de la démarche",
        points: [
          "Organisation du travail : charge de travail équilibrée, autonomie laissée aux agents, clarté des missions.",
          "Relations professionnelles : qualité du dialogue social, reconnaissance du travail accompli, soutien managérial.",
          "Conditions matérielles : environnement de travail, équipements adaptés, sécurité et santé au travail.",
          "Conciliation vie professionnelle et vie personnelle, notamment via le télétravail et les horaires aménagés.",
        ],
      },
      {
        titre: "Les acteurs mobilisés",
        points: [
          "La direction générale porte la démarche et l'inscrit dans le projet d'administration.",
          "Le service de médecine préventive ou de santé au travail contribue au suivi de l'état de santé des agents.",
          "La formation et le comité social territorial participent à l'élaboration et au suivi des plans d'action.",
        ],
      },
      {
        titre: "Les enjeux pour la collectivité",
        points: [
          "Réduire l'absentéisme et prévenir les risques psychosociaux et les troubles musculo-squelettiques.",
          "Améliorer l'attractivité de la collectivité employeur et fidéliser les agents en poste.",
          "Renforcer la qualité du service rendu aux usagers grâce à des équipes mobilisées.",
        ],
      },
    ],
    reperes: [
      "Accord-cadre relatif à la qualité de vie au travail dans la fonction publique de 2013",
      "Notion élargie en QVCT, qualité de vie et des conditions de travail",
      "Le DUERP constitue le socle de la prévention des risques professionnels",
    ],
    aRetenir: [
      "La qualité de vie au travail n'est pas un supplément mais une condition de la performance publique.",
      "Elle implique tous les niveaux de la collectivité, de la direction générale à l'agent.",
      "Elle s'articule étroitement avec la prévention des risques professionnels et psychosociaux.",
    ],
    pieges: [
      "Ne réduisez pas la qualité de vie au travail à des avantages ponctuels comme des activités de détente.",
      "Ne confondez pas QVCT et seule prévention des risques : elle englobe aussi l'organisation et le sens du travail.",
      "Le télétravail est un outil parmi d'autres, pas une fin en soi.",
    ],
    phraseJury:
      "La qualité de vie au travail articule organisation, relations professionnelles et conditions matérielles pour concilier bien-être des agents et efficacité du service public. Elle constitue un levier managérial autant qu'un enjeu de santé au travail.",
    questionsJury: [
      { question: "Quels sont les principaux leviers de la qualité de vie au travail ?", reponse: "L'organisation du travail, le management, les conditions matérielles et la conciliation des temps de vie." },
      { question: "Quel document formalise la prévention des risques ?", reponse: "Le document unique d'évaluation des risques professionnels." },
      { question: "Pourquoi une collectivité investit-elle dans la QVCT ?", reponse: "Pour réduire l'absentéisme, fidéliser les agents et améliorer la qualité du service rendu." },
      { question: "Le télétravail relève-t-il de la QVCT ?", reponse: "Oui, il en est un des outils, à condition d'être encadré par une charte ou un accord." },
    ],
    ultraMemo: "QVCT = organisation + relations + conditions matérielles + conciliation des temps, au service de la performance publique.",
  },
  {
    id: "rh-types-management",
    title: "Les types de management",
    theme: "Méthode et expression",
    resume:
      "Plusieurs styles de management coexistent et doivent être adaptés au contexte, à l'équipe et à la nature de la mission.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Les grands styles identifiés",
        points: [
          "Management directif : le manager décide seul et donne des instructions précises, adapté aux situations d'urgence.",
          "Management persuasif : le manager explique ses décisions pour emporter l'adhésion sans partager le pouvoir de décision.",
          "Management participatif : le manager associe les agents à la réflexion avant de trancher, favorisant l'implication.",
          "Management délégatif : le manager confie une large autonomie à des collaborateurs compétents et responsables.",
        ],
      },
      {
        titre: "Le management situationnel",
        points: [
          "Le style adapté dépend du degré d'autonomie et de compétence de l'agent sur la mission concernée.",
          "Un agent débutant nécessite davantage de directives, un agent expérimenté davantage de délégation.",
          "Le bon manager fait évoluer son style au fil du développement des compétences de chacun.",
        ],
      },
      {
        titre: "Application dans la collectivité",
        points: [
          "Le management public doit concilier cadre statutaire, contraintes budgétaires et exigence de continuité du service.",
          "L'encadrant territorial articule autorité hiérarchique et animation d'équipe au quotidien.",
          "Un management trop uniforme, quel qu'il soit, génère de la démotivation à long terme.",
        ],
      },
    ],
    reperes: [
      "Modèle du leadership situationnel développé par Hersey et Blanchard",
      "Quatre styles principaux : directif, persuasif, participatif, délégatif",
    ],
    aRetenir: [
      "Il n'existe pas un style de management universellement bon, seulement un style adapté à la situation.",
      "L'autonomie et la compétence de l'agent déterminent le style à privilégier.",
      "Le management territorial doit rester compatible avec le cadre statutaire.",
    ],
    pieges: [
      "Ne présentez pas le management participatif comme systématiquement supérieur aux autres styles.",
      "Ne confondez pas délégation et abandon de responsabilité : le manager reste responsable des résultats.",
      "Le style directif n'est pas synonyme d'autoritarisme s'il reste justifié par le contexte.",
    ],
    phraseJury:
      "Le bon management consiste à savoir mobiliser différents styles selon les personnes et les situations rencontrées. Un encadrant efficace ajuste sa posture plutôt que d'appliquer une méthode unique en toute circonstance.",
    questionsJury: [
      { question: "Quels sont les quatre grands styles de management ?", reponse: "Directif, persuasif, participatif et délégatif." },
      { question: "Qu'est-ce que le management situationnel ?", reponse: "Une adaptation du style de management au niveau d'autonomie et de compétence de chaque collaborateur." },
      { question: "Le management participatif est-il toujours préférable ?", reponse: "Non, il convient surtout lorsque le temps et les compétences des agents le permettent." },
      { question: "Un manager délégatif renonce-t-il à sa responsabilité ?", reponse: "Non, il reste garant des résultats même en accordant une large autonomie." },
    ],
    ultraMemo: "Pas de style unique : adapter directif, persuasif, participatif ou délégatif à la situation.",
  },
  {
    id: "rh-bon-manager",
    title: "Qu'est-ce qu'un bon manager",
    theme: "Méthode et expression",
    resume:
      "Un bon manager combine exemplarité, écoute, capacité de décision et souci constant du sens donné à l'action collective.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Les qualités attendues",
        points: [
          "Exemplarité dans le respect des règles et des valeurs du service public, condition de la crédibilité.",
          "Écoute active des agents pour identifier les difficultés et valoriser les propositions de terrain.",
          "Capacité à fixer des objectifs clairs et à donner du sens à l'action de chacun dans le collectif.",
          "Aptitude à prendre des décisions et à les assumer, y compris lorsqu'elles sont impopulaires.",
        ],
      },
      {
        titre: "Les pratiques concrètes",
        points: [
          "Organiser des points réguliers avec l'équipe pour suivre l'avancement des missions.",
          "Reconnaître le travail accompli et accompagner les erreurs par une posture formative plutôt que punitive.",
          "Développer les compétences des agents par la formation et la délégation progressive de responsabilités.",
        ],
      },
      {
        titre: "Les limites à éviter",
        points: [
          "Le micro-management, qui étouffe l'autonomie et démotive les agents compétents.",
          "L'absence de retour sur le travail réalisé, source de démobilisation durable.",
          "La confusion entre autorité hiérarchique et autoritarisme relationnel.",
        ],
      },
    ],
    reperes: [
      "Notion de leadership distincte de l'autorité statutaire",
      "Reconnaissance au travail identifiée comme premier facteur de motivation dans de nombreuses enquêtes RH",
    ],
    aRetenir: [
      "Le bon manager articule exigence et bienveillance sans opposer les deux.",
      "Donner du sens à l'action est aussi important que fixer des objectifs.",
      "L'exemplarité conditionne la légitimité du manager auprès de son équipe.",
    ],
    pieges: [
      "Ne réduisez pas le management à l'autorité hiérarchique statutaire.",
      "Bienveillance ne signifie pas absence d'exigence ou de contrôle.",
      "Un bon manager ne cherche pas à tout faire lui-même mais à faire grandir son équipe.",
    ],
    phraseJury:
      "Un bon manager combine exemplarité, écoute et capacité à donner du sens à l'action de son équipe. Il sait conjuguer exigence professionnelle et attention portée aux personnes qu'il encadre.",
    questionsJury: [
      { question: "Quelle est la première qualité d'un bon manager selon vous ?", reponse: "L'exemplarité, condition de sa légitimité et de la confiance de l'équipe." },
      { question: "Comment un manager peut-il motiver son équipe ?", reponse: "En donnant du sens aux missions, en reconnaissant le travail accompli et en développant les compétences." },
      { question: "Qu'est-ce que le micro-management ?", reponse: "Un contrôle excessif des tâches qui prive les agents d'autonomie et nuit à leur motivation." },
      { question: "Bienveillance et exigence sont-elles compatibles ?", reponse: "Oui, un management efficace conjugue les deux plutôt que de les opposer." },
    ],
    ultraMemo: "Bon manager = exemplarité + écoute + sens + décision assumée.",
  },
  {
    id: "rh-document-unique-duerp",
    title: "Le document unique d'évaluation des risques professionnels",
    theme: "Action publique et services",
    resume:
      "Le DUERP recense et hiérarchise les risques professionnels de la collectivité afin de bâtir un plan d'action de prévention.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Le contenu du document",
        points: [
          "Inventaire des risques identifiés par unité de travail, incluant les risques physiques, chimiques et psychosociaux.",
          "Hiérarchisation des risques selon leur gravité et leur probabilité d'occurrence.",
          "Proposition d'actions de prévention associées à un calendrier de mise en œuvre.",
        ],
      },
      {
        titre: "Les obligations de l'employeur",
        points: [
          "Élaboration obligatoire dans toute collectivité employant du personnel, quelle que soit sa taille.",
          "Mise à jour au moins annuelle et à chaque changement important des conditions de travail.",
          "Association des instances de dialogue social, en particulier la formation spécialisée compétente en santé et sécurité.",
          "Mise à disposition du document aux agents, aux membres des instances et aux services de contrôle.",
        ],
      },
      {
        titre: "La responsabilité de l'autorité territoriale",
        points: [
          "L'autorité territoriale, en tant qu'employeur, est responsable de la santé et de la sécurité des agents placés sous son autorité.",
          "L'absence de document unique peut engager la responsabilité de la collectivité en cas d'accident.",
          "Le document constitue la première pièce examinée en cas de contrôle ou de contentieux lié à un accident du travail.",
        ],
      },
    ],
    reperes: [
      "Obligation issue du décret du 5 novembre 2001",
      "Mise à jour au moins annuelle imposée par le code du travail applicable",
      "Formation spécialisée en matière de santé, sécurité et conditions de travail associée à l'élaboration",
    ],
    aRetenir: [
      "Le DUERP est obligatoire dans toutes les collectivités, sans exception de taille.",
      "Sa mise à jour régulière conditionne sa validité juridique et sa pertinence opérationnelle.",
      "Il engage directement la responsabilité de l'autorité territoriale employeur.",
    ],
    pieges: [
      "Ce n'est pas un document facultatif réservé aux grandes collectivités.",
      "Le document unique ne se limite pas aux risques physiques : il couvre aussi les risques psychosociaux.",
      "Rédiger le DUERP une fois ne suffit pas : il doit être actualisé régulièrement.",
    ],
    phraseJury:
      "Le document unique d'évaluation des risques professionnels formalise la démarche de prévention et engage la responsabilité de l'employeur territorial. Il doit vivre au rythme des évolutions de l'organisation, sous peine de perdre son utilité.",
    questionsJury: [
      { question: "Qui doit élaborer le document unique ?", reponse: "Toute collectivité employeur, quelle que soit sa taille." },
      { question: "À quelle fréquence doit-il être mis à jour ?", reponse: "Au moins une fois par an et à chaque changement important des conditions de travail." },
      { question: "Quels risques couvre-t-il ?", reponse: "L'ensemble des risques professionnels, y compris les risques psychosociaux." },
      { question: "Quelle instance est associée à son élaboration ?", reponse: "La formation spécialisée en santé, sécurité et conditions de travail." },
    ],
    ultraMemo: "DUERP = inventaire des risques + plan d'action, obligatoire et à jour chaque année.",
  },
  {
    id: "rh-directeur-general-services",
    title: "Le rôle du directeur général des services",
    theme: "Institutions et organisation territoriale",
    resume:
      "Le directeur général des services est le collaborateur direct de l'exécutif local et le chef de l'administration territoriale.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Les missions principales",
        points: [
          "Traduction des orientations politiques de l'exécutif en actions administratives opérationnelles.",
          "Direction de l'ensemble des services et encadrement de l'équipe de direction générale.",
          "Préparation et exécution du budget en lien avec les élus et le service financier.",
          "Conseil juridique et stratégique auprès du maire ou du président de l'exécutif local.",
        ],
      },
      {
        titre: "Un positionnement particulier",
        points: [
          "Emploi fonctionnel occupé sur détachement, distinct du grade d'origine du fonctionnaire.",
          "Position charnière entre légitimité politique des élus et expertise technique de l'administration.",
          "Recrutement fondé sur la confiance de l'exécutif, ce qui explique la possibilité de fin de détachement.",
        ],
      },
      {
        titre: "Les enjeux du poste",
        points: [
          "Garantir la continuité et la neutralité du service public au-delà des alternances politiques.",
          "Animer le dialogue social et porter les projets de modernisation de l'administration.",
          "Veiller à la sécurité juridique des décisions prises par la collectivité.",
        ],
      },
    ],
    reperes: [
      "Emploi fonctionnel prévu par la loi du 26 janvier 1984",
      "Seuil de population conditionnant l'existence de l'emploi de DGS",
      "Nomination par détachement sur emploi fonctionnel",
    ],
    aRetenir: [
      "Le DGS traduit les orientations politiques en actions administratives concrètes.",
      "Il occupe un emploi fonctionnel, pas un grade, ce qui explique la fragilité relative de sa position.",
      "Il assure l'interface entre légitimité élue et expertise technique.",
    ],
    pieges: [
      "Ne confondez pas DGS et maire : le DGS ne dispose d'aucune légitimité électorale propre.",
      "Le DGS n'est pas présent dans toutes les communes, un seuil de population conditionne l'emploi.",
      "L'emploi fonctionnel n'est pas un grade : il peut y être mis fin dans des conditions particulières.",
    ],
    phraseJury:
      "Le directeur général des services incarne le lien entre la volonté politique des élus et la mise en œuvre technique par l'administration. Sa position d'emploi fonctionnel traduit la confiance particulière que lui accorde l'exécutif local.",
    questionsJury: [
      { question: "Le DGS est-il un fonctionnaire comme les autres ?", reponse: "Il est fonctionnaire mais occupe un emploi fonctionnel par détachement, distinct de son grade d'origine." },
      { question: "Quel est le rôle central du DGS ?", reponse: "Traduire les orientations politiques en actions administratives et diriger l'ensemble des services." },
      { question: "Toutes les communes ont-elles un DGS ?", reponse: "Non, l'emploi est conditionné à un seuil de population fixé par la loi." },
      { question: "Pourquoi le poste de DGS est-il sensible politiquement ?", reponse: "Parce qu'il repose sur la confiance de l'exécutif et peut prendre fin lors d'un changement de majorité." },
    ],
    ultraMemo: "DGS = chef de l'administration, emploi fonctionnel, interface entre élus et services.",
  },
  {
    id: "rh-rifseep",
    title: "Le RIFSEEP",
    theme: "Statut et carrière",
    resume:
      "Le RIFSEEP est le régime indemnitaire de référence dans la fonction publique territoriale, fondé sur les fonctions et l'engagement professionnel.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les deux composantes",
        points: [
          "L'IFSE, indemnité de fonctions, de sujétions et d'expertise, valorise le niveau de responsabilité et la technicité du poste occupé.",
          "Le CIA, complément indemnitaire annuel, valorise l'engagement professionnel et la manière de servir de l'agent.",
          "Ces deux parts se cumulent mais suivent des logiques différentes, l'une liée au poste, l'autre à l'évaluation individuelle.",
        ],
      },
      {
        titre: "La mise en œuvre",
        points: [
          "Chaque cadre d'emplois est classé en groupes de fonctions selon le niveau de responsabilité, d'expertise ou de sujétions.",
          "L'organe délibérant fixe les montants plafonds et les critères applicables après avis du comité social territorial.",
          "Le RIFSEEP se substitue progressivement aux régimes indemnitaires antérieurs fondés sur d'autres logiques.",
        ],
      },
      {
        titre: "Les enjeux pour la collectivité",
        points: [
          "Renforcer la reconnaissance individuelle de l'engagement professionnel des agents.",
          "Harmoniser les régimes indemnitaires entre cadres d'emplois comparables au sein d'une même collectivité.",
          "Constituer un levier managérial pour valoriser la prise de responsabilités.",
        ],
      },
    ],
    reperes: [
      "Décret du 20 mai 2014 instituant le RIFSEEP",
      "IFSE : part liée aux fonctions, réexaminée en principe tous les quatre ans",
      "CIA : part liée à la manière de servir, versée annuellement",
    ],
    aRetenir: [
      "Le RIFSEEP combine une part fonctionnelle, l'IFSE, et une part liée au mérite, le CIA.",
      "La délibération de la collectivité fixe les critères et les plafonds applicables.",
      "Le régime s'applique cadre d'emplois par cadre d'emplois selon des groupes de fonctions.",
    ],
    pieges: [
      "Ne confondez pas IFSE et prime de fonctions et de résultats, qu'elle a remplacée.",
      "Le CIA n'est pas automatique : il dépend de l'évaluation professionnelle de l'agent.",
      "Le RIFSEEP n'est pas identique pour tous les agents d'un même grade : il varie selon le groupe de fonctions occupé.",
    ],
    phraseJury:
      "Le RIFSEEP structure le régime indemnitaire territorial autour des fonctions exercées et de l'engagement professionnel individuel. Il donne à la collectivité un véritable outil de gestion des ressources humaines et de reconnaissance managériale.",
    questionsJury: [
      { question: "Que signifie l'acronyme RIFSEEP ?", reponse: "Régime indemnitaire tenant compte des fonctions, des sujétions, de l'expertise et de l'engagement professionnel." },
      { question: "Quelles sont ses deux composantes ?", reponse: "L'IFSE, liée au poste, et le CIA, lié à la manière de servir." },
      { question: "Qui fixe les montants applicables dans une collectivité ?", reponse: "L'organe délibérant, après avis du comité social territorial." },
      { question: "Le CIA est-il garanti chaque année ?", reponse: "Non, il dépend de l'évaluation professionnelle annuelle de l'agent." },
    ],
    ultraMemo: "RIFSEEP = IFSE (fonction) + CIA (mérite), fixé par délibération.",
  },
  {
    id: "rh-gpeec",
    title: "La GPEEC",
    theme: "Statut et carrière",
    resume:
      "La gestion prévisionnelle des effectifs, des emplois et des compétences anticipe les besoins en ressources humaines de la collectivité.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Les objectifs de la démarche",
        points: [
          "Anticiper les évolutions des métiers territoriaux liées aux transformations réglementaires, technologiques et démographiques.",
          "Adapter les compétences des agents aux besoins futurs de la collectivité par la formation et la mobilité interne.",
          "Préparer les départs à la retraite et sécuriser la continuité des savoir-faire critiques.",
        ],
      },
      {
        titre: "Les outils mobilisés",
        points: [
          "Cartographie des emplois et des compétences existantes au sein de la collectivité.",
          "Référentiel de métiers et de compétences permettant de comparer besoins actuels et besoins futurs.",
          "Entretiens professionnels annuels et plan de formation pluriannuel articulés à la démarche.",
        ],
      },
      {
        titre: "Les acteurs impliqués",
        points: [
          "La direction des ressources humaines pilote la démarche en lien avec les directions opérationnelles.",
          "Les encadrants de proximité identifient les besoins d'évolution de leurs équipes.",
          "Le comité social territorial est informé des orientations en matière d'évolution des emplois.",
        ],
      },
    ],
    reperes: [
      "Démarche également appelée GPEC dans le secteur privé",
      "Articulée avec le plan de formation et les lignes directrices de gestion",
      "Renforcée par la loi de transformation de la fonction publique du 6 août 2019",
    ],
    aRetenir: [
      "La GPEEC anticipe les besoins futurs plutôt que de gérer les seules urgences.",
      "Elle repose sur une cartographie précise des emplois et des compétences.",
      "Elle s'articule avec la formation, la mobilité et l'entretien professionnel.",
    ],
    pieges: [
      "Ne confondez pas GPEEC et simple gestion administrative des effectifs.",
      "La GPEEC n'est pas un exercice ponctuel mais une démarche continue.",
      "Elle concerne les compétences autant que les effectifs, ne l'oubliez pas dans votre développement.",
    ],
    phraseJury:
      "La GPEEC permet à la collectivité d'anticiper les évolutions de ses métiers plutôt que de les subir. Elle articule cartographie des compétences, formation et mobilité au service d'une gestion RH de long terme.",
    questionsJury: [
      { question: "Que signifie GPEEC ?", reponse: "Gestion prévisionnelle des effectifs, des emplois et des compétences." },
      { question: "Quel est l'objectif principal de la démarche ?", reponse: "Anticiper les besoins futurs en compétences et adapter les ressources humaines en conséquence." },
      { question: "Quels outils l'accompagnent ?", reponse: "La cartographie des emplois, le référentiel de compétences et le plan de formation." },
      { question: "Quel document RH récent renforce la GPEEC dans les collectivités ?", reponse: "Les lignes directrices de gestion issues de la loi du 6 août 2019." },
    ],
    ultraMemo: "GPEEC = anticiper les métiers de demain par la cartographie, la formation et la mobilité.",
  },
  {
    id: "rh-instances-dialogue-social",
    title: "Les instances de dialogue social : CST, F3SCT, CAP",
    theme: "Statut et carrière",
    resume:
      "Le dialogue social territorial s'organise autour d'instances consultatives réunissant représentants de l'administration et des personnels.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Le comité social territorial",
        points: [
          "Le CST est consulté sur l'organisation des services, les conditions de travail et les orientations en matière de ressources humaines.",
          "Il est composé de représentants de la collectivité et de représentants du personnel élus lors des élections professionnelles.",
          "Il a fusionné les anciens comités techniques et les comités d'hygiène, de sécurité et des conditions de travail.",
        ],
      },
      {
        titre: "La formation spécialisée F3SCT",
        points: [
          "La F3SCT traite spécifiquement des questions de santé, de sécurité et de conditions de travail.",
          "Elle est créée au sein du CST dans les collectivités atteignant un certain seuil d'effectifs ou présentant des risques particuliers.",
          "Elle peut procéder à des visites de sites et être associée aux enquêtes après accident de service.",
        ],
      },
      {
        titre: "Les commissions administratives paritaires",
        points: [
          "La CAP examine les décisions individuelles défavorables concernant la carrière des fonctionnaires, comme certains refus de titularisation.",
          "Elle est organisée par catégorie hiérarchique, A, B ou C, et composée à parité de représentants de l'administration et du personnel.",
          "Son champ de compétence a été recentré par la loi de transformation de la fonction publique de 2019.",
        ],
      },
    ],
    reperes: [
      "Réforme du dialogue social par l'ordonnance du 17 février 2021",
      "Élections professionnelles organisées tous les quatre ans",
      "Loi du 6 août 2019 recentrant le rôle des CAP sur les décisions individuelles défavorables",
    ],
    aRetenir: [
      "Le CST est l'instance généraliste du dialogue social territorial.",
      "La F3SCT est dédiée à la santé, la sécurité et les conditions de travail.",
      "La CAP concerne les situations individuelles défavorables à la carrière, par catégorie hiérarchique.",
    ],
    pieges: [
      "Ne confondez pas CST et CAP : le premier traite de sujets collectifs, la seconde de situations individuelles.",
      "La F3SCT n'existe pas systématiquement dans toutes les collectivités, un seuil conditionne sa création.",
      "Le rôle des CAP a été réduit en 2019 : elles ne sont plus consultées sur tous les avancements.",
    ],
    phraseJury:
      "Le dialogue social territorial repose sur des instances complémentaires, du niveau collectif avec le CST et la F3SCT au niveau individuel avec la CAP. La réforme de 2019 a clarifié et recentré les compétences respectives de ces instances.",
    questionsJury: [
      { question: "Quelle instance a remplacé le comité technique et le CHSCT ?", reponse: "Le comité social territorial, le CST." },
      { question: "Que traite la F3SCT ?", reponse: "Les questions de santé, de sécurité et de conditions de travail." },
      { question: "Sur quoi porte la CAP ?", reponse: "Les décisions individuelles défavorables relatives à la carrière des fonctionnaires." },
      { question: "Comment sont composées ces instances ?", reponse: "À parité entre représentants de l'administration et représentants élus du personnel." },
    ],
    ultraMemo: "CST collectif, F3SCT santé-sécurité, CAP individuel par catégorie.",
  },
  {
    id: "rh-attractivite-fpt",
    title: "L'attractivité de la fonction publique territoriale",
    theme: "Action publique et services",
    resume:
      "Face aux tensions de recrutement, les collectivités développent des leviers pour attirer et fidéliser leurs agents.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les difficultés constatées",
        points: [
          "Tensions de recrutement sur certains métiers en tension, notamment technique, social, médico-social et petite enfance.",
          "Concurrence accrue avec le secteur privé sur les niveaux de rémunération et les conditions de travail.",
          "Vieillissement démographique des effectifs territoriaux et départs massifs à la retraite dans les prochaines années.",
        ],
      },
      {
        titre: "Les leviers d'action",
        points: [
          "Amélioration du régime indemnitaire et développement de l'action sociale en faveur des agents.",
          "Développement du télétravail et des dispositifs de conciliation entre vie professionnelle et vie personnelle.",
          "Valorisation du sens du service public et des perspectives de mobilité et de formation.",
          "Simplification des procédures de recrutement, notamment via le recours facilité au contrat.",
        ],
      },
      {
        titre: "Une approche de marque employeur",
        points: [
          "Communication renforcée sur les métiers territoriaux, souvent méconnus du grand public.",
          "Partenariats avec les établissements de formation et présence sur les forums de l'emploi.",
          "Amélioration du parcours candidat, de la publication de l'offre à l'intégration de l'agent.",
        ],
      },
    ],
    reperes: [
      "Loi du 6 août 2019 de transformation de la fonction publique facilitant le recours au contrat",
      "Métiers en tension identifiés notamment dans le secteur social et technique",
      "Développement des dispositifs d'apprentissage dans la fonction publique territoriale",
    ],
    aRetenir: [
      "L'attractivité territoriale se joue autant sur la rémunération que sur le sens et les conditions de travail.",
      "Les collectivités développent une véritable stratégie de marque employeur.",
      "Les métiers en tension nécessitent des réponses ciblées, au-delà des mesures générales.",
    ],
    pieges: [
      "Ne réduisez pas l'attractivité à la seule question salariale.",
      "Ne présentez pas le contrat comme la seule réponse aux difficultés de recrutement.",
      "Les tensions de recrutement ne concernent pas uniformément tous les métiers territoriaux.",
    ],
    phraseJury:
      "L'attractivité de la fonction publique territoriale suppose d'agir simultanément sur la rémunération, les conditions de travail et le sens donné aux missions. Les collectivités développent désormais une véritable démarche de marque employeur pour se différencier.",
    questionsJury: [
      { question: "Quels métiers territoriaux connaissent le plus de tensions de recrutement ?", reponse: "Les métiers techniques, sociaux, médico-sociaux et de la petite enfance notamment." },
      { question: "Quels leviers une collectivité peut-elle actionner pour attirer des candidats ?", reponse: "Le régime indemnitaire, le télétravail, la formation et une communication de marque employeur." },
      { question: "Le salaire est-il le seul facteur d'attractivité ?", reponse: "Non, le sens du travail et les conditions de travail jouent un rôle tout aussi déterminant." },
      { question: "Pourquoi parle-t-on de marque employeur pour les collectivités ?", reponse: "Parce qu'elles doivent désormais valoriser leur image pour concurrencer le secteur privé sur le marché de l'emploi." },
    ],
    ultraMemo: "Attractivité = rémunération + conditions de travail + sens + marque employeur.",
  },
  {
    id: "rh-droit-erreur-essoc",
    title: "Le droit à l'erreur et la loi ESSOC",
    theme: "Action publique et services",
    resume:
      "La loi pour un État au service d'une société de confiance instaure un droit à l'erreur au bénéfice des usagers dans leurs relations avec l'administration.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Le principe du droit à l'erreur",
        points: [
          "Un usager de bonne foi qui commet une erreur dans une déclaration à l'administration ne peut être sanctionné dès la première fois.",
          "Le principe s'applique notamment en matière fiscale et sociale, sous réserve de régularisation spontanée ou après demande de l'administration.",
          "Il ne concerne pas les fraudes intentionnelles ni les récidives caractérisées, exclues du bénéfice du dispositif.",
        ],
      },
      {
        titre: "Les autres apports de la loi ESSOC",
        points: [
          "Développement du rescrit administratif, permettant à l'usager d'obtenir une position formelle et opposable de l'administration.",
          "Renforcement de la médiation entre les usagers et certaines administrations, notamment fiscales et sociales.",
          "Expérimentation du droit au contrôle, permettant à un usager de demander un contrôle pour sécuriser sa situation.",
        ],
      },
      {
        titre: "Les conséquences pour les collectivités",
        points: [
          "Nécessité de développer une culture de conseil et d'accompagnement plutôt que de sanction immédiate.",
          "Adaptation des procédures internes pour intégrer la bonne foi dans le traitement des dossiers des usagers.",
          "Renforcement de la lisibilité de l'information transmise aux administrés pour prévenir les erreurs.",
        ],
      },
    ],
    reperes: [
      "Loi n° 2018-727 du 10 août 2018 pour un État au service d'une société de confiance",
      "Principe de présomption de bonne foi de l'usager",
      "Exclusion des cas de fraude et de récidive du bénéfice du droit à l'erreur",
    ],
    aRetenir: [
      "Le droit à l'erreur repose sur la présomption de bonne foi de l'usager.",
      "Il ne s'applique ni à la fraude ni à la récidive.",
      "La loi ESSOC promeut une administration de conseil plutôt que de sanction systématique.",
    ],
    pieges: [
      "Le droit à l'erreur n'exonère pas de régulariser sa situation lorsque l'administration le demande.",
      "Il ne s'applique pas à toutes les erreurs, en particulier lorsque la mauvaise foi est établie.",
      "Ne confondez pas droit à l'erreur et droit au contrôle, deux dispositifs distincts de la même loi.",
    ],
    phraseJury:
      "La loi ESSOC transforme la relation entre administration et usagers en privilégiant l'accompagnement et la bonne foi sur la sanction immédiate. Elle invite les collectivités à développer une posture de conseil dans le traitement des démarches administratives.",
    questionsJury: [
      { question: "Que garantit le droit à l'erreur ?", reponse: "Qu'un usager de bonne foi ne soit pas sanctionné dès sa première erreur déclarative." },
      { question: "Le droit à l'erreur s'applique-t-il en cas de fraude ?", reponse: "Non, il exclut explicitement la fraude et la récidive." },
      { question: "Quelle loi instaure ce droit ?", reponse: "La loi ESSOC du 10 août 2018." },
      { question: "Qu'est-ce que le droit au contrôle introduit par la même loi ?", reponse: "La possibilité pour un usager de demander un contrôle afin de sécuriser sa situation administrative." },
    ],
    ultraMemo: "ESSOC 2018 : droit à l'erreur pour l'usager de bonne foi, sauf fraude ou récidive.",
  },
  {
    id: "rh-inclusion-handicap-fpt",
    title: "L'inclusion et le handicap dans la fonction publique territoriale",
    theme: "Action publique et services",
    resume:
      "Les collectivités ont une obligation d'emploi de travailleurs handicapés et développent des politiques d'inclusion et d'accessibilité.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "L'obligation d'emploi",
        points: [
          "Les employeurs publics de vingt agents ou plus doivent employer une proportion minimale de travailleurs handicapés.",
          "Le FIPHFP, fonds pour l'insertion des personnes handicapées dans la fonction publique, accompagne financièrement les collectivités.",
          "Les collectivités qui n'atteignent pas ce taux versent une contribution à ce fonds.",
        ],
      },
      {
        titre: "Les voies de recrutement adaptées",
        points: [
          "Recrutement par contrat donnant vocation à titularisation, spécifique aux travailleurs reconnus handicapés.",
          "Aménagements possibles des concours, comme un temps supplémentaire ou du matériel adapté.",
          "Reclassement des agents devenus inaptes à leurs fonctions pour raison de santé.",
        ],
      },
      {
        titre: "Les leviers d'inclusion au quotidien",
        points: [
          "Aménagement des postes de travail et adaptation des horaires selon les besoins de l'agent.",
          "Sensibilisation des équipes et des encadrants aux enjeux du handicap au travail.",
          "Nomination d'un référent handicap chargé d'accompagner les agents concernés dans la collectivité.",
        ],
      },
    ],
    reperes: [
      "Obligation d'emploi fixée à 6 pour cent des effectifs",
      "FIPHFP créé par la loi du 11 février 2005",
      "Référent handicap obligatoire dans les employeurs publics",
    ],
    aRetenir: [
      "L'obligation d'emploi de travailleurs handicapés s'applique à tout employeur public de vingt agents ou plus.",
      "Le FIPHFP finance les actions d'inclusion et perçoit la contribution des employeurs n'atteignant pas le quota.",
      "L'inclusion suppose des aménagements concrets de poste, pas seulement un recrutement statistique.",
    ],
    pieges: [
      "Le seuil de 6 pour cent s'apprécie sur l'ensemble des effectifs de la collectivité, pas poste par poste.",
      "Ne confondez pas FIPHFP, propre au secteur public, et AGEFIPH, qui concerne le secteur privé.",
      "Le reclassement pour inaptitude n'est pas automatique : il suit une procédure encadrée.",
    ],
    phraseJury:
      "L'inclusion des travailleurs handicapés dans la fonction publique territoriale repose à la fois sur une obligation légale d'emploi et sur des actions concrètes d'aménagement des postes. Le référent handicap joue un rôle central dans l'accompagnement individualisé des agents concernés.",
    questionsJury: [
      { question: "Quel est le taux légal d'emploi de travailleurs handicapés ?", reponse: "6 pour cent des effectifs pour les employeurs publics de vingt agents ou plus." },
      { question: "Quel organisme accompagne financièrement les collectivités ?", reponse: "Le FIPHFP, fonds pour l'insertion des personnes handicapées dans la fonction publique." },
      { question: "Comment un agent handicapé peut-il être recruté hors concours ?", reponse: "Par un contrat spécifique donnant vocation à titularisation." },
      { question: "Quel rôle joue le référent handicap ?", reponse: "Il accompagne les agents concernés et coordonne les actions d'aménagement et d'inclusion." },
    ],
    ultraMemo: "Obligation de 6 pour cent, FIPHFP, référent handicap et aménagements de poste.",
  },
  {
    id: "rh-communication-institutionnelle",
    title: "La communication institutionnelle",
    theme: "Méthode et expression",
    resume:
      "La communication institutionnelle des collectivités informe les usagers, valorise l'action publique et contribue au dialogue démocratique local.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les objectifs de la communication publique",
        points: [
          "Informer les usagers sur les services proposés, les démarches à accomplir et les décisions prises par la collectivité.",
          "Valoriser les réalisations et les projets de la collectivité auprès des habitants et des partenaires.",
          "Favoriser la participation citoyenne et le dialogue entre élus, services et administrés.",
        ],
      },
      {
        titre: "Les supports mobilisés",
        points: [
          "Supports traditionnels : magazine municipal, affichage, courrier et réunions publiques.",
          "Supports numériques : site internet, réseaux sociaux, applications mobiles et lettres d'information.",
          "Communication de crise, mobilisée lors d'événements exceptionnels nécessitant une information rapide et fiable.",
        ],
      },
      {
        titre: "Les principes déontologiques",
        points: [
          "Distinction entre communication institutionnelle, neutre, et communication politique, propre aux élus et à leur mandat.",
          "Respect du principe de neutralité, en particulier en période électorale où des règles renforcées s'appliquent.",
          "Exactitude et clarté de l'information, essentielles à la confiance des usagers envers l'administration.",
        ],
      },
    ],
    reperes: [
      "Encadrement renforcé de la communication institutionnelle en période préélectorale",
      "Développement des réseaux sociaux comme canal privilégié de communication territoriale",
      "Jurisprudence électorale sanctionnant l'utilisation de moyens publics à des fins de propagande",
    ],
    aRetenir: [
      "La communication institutionnelle informe et explique, elle ne fait pas la promotion d'un élu ou d'un parti.",
      "Elle combine désormais supports traditionnels et outils numériques.",
      "Des règles renforcées s'appliquent en période électorale pour préserver l'égalité entre candidats.",
    ],
    pieges: [
      "Ne confondez pas communication institutionnelle et communication politique personnelle d'un élu.",
      "En période préélectorale, certaines actions de communication habituelles peuvent devenir illégales.",
      "La communication de crise ne s'improvise pas : elle doit être anticipée dans un plan dédié.",
    ],
    phraseJury:
      "La communication institutionnelle vise à informer les usagers et à renforcer la confiance envers l'action publique locale, dans le strict respect du principe de neutralité. Elle doit se distinguer nettement de toute forme de communication politique personnelle.",
    questionsJury: [
      { question: "Quelle est la différence entre communication institutionnelle et communication politique ?", reponse: "La première informe de manière neutre sur l'action de la collectivité, la seconde valorise un élu ou une formation politique." },
      { question: "Quelles règles s'appliquent en période préélectorale ?", reponse: "Un encadrement renforcé interdisant l'utilisation de moyens publics à des fins de propagande électorale." },
      { question: "Quels supports numériques utilisent aujourd'hui les collectivités ?", reponse: "Site internet, réseaux sociaux, applications mobiles et lettres d'information électroniques." },
      { question: "Qu'est-ce que la communication de crise ?", reponse: "Une communication rapide et fiable déployée lors d'événements exceptionnels affectant la collectivité." },
    ],
    ultraMemo: "Communication institutionnelle = informer et expliquer, jamais promouvoir un élu.",
  },
  {
    id: "rh-formation-professionnelle",
    title: "La formation professionnelle des agents territoriaux",
    theme: "Statut et carrière",
    resume:
      "La formation professionnelle accompagne l'agent tout au long de sa carrière et constitue à la fois un droit et une obligation.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les grandes catégories de formation",
        points: [
          "Formation d'intégration, obligatoire lors de la titularisation, pour découvrir l'environnement territorial.",
          "Formation de professionnalisation, tout au long de la carrière, notamment lors d'une prise de poste à responsabilité.",
          "Formation de perfectionnement, à l'initiative de l'agent ou de l'employeur, pour développer des compétences spécifiques.",
          "Formation personnelle, mobilisée à l'initiative de l'agent via le compte personnel de formation.",
        ],
      },
      {
        titre: "Les acteurs de la formation territoriale",
        points: [
          "Le Centre national de la fonction publique territoriale organise la formation initiale et continue des agents.",
          "La collectivité employeur établit un plan de formation en lien avec les besoins identifiés et la GPEEC.",
          "L'agent peut mobiliser son compte personnel de formation pour un projet de mobilité ou de reconversion.",
        ],
      },
      {
        titre: "Les enjeux actuels",
        points: [
          "Adapter les compétences aux transformations numériques et environnementales des métiers territoriaux.",
          "Développer les formations à distance pour faciliter l'accès de tous les agents, notamment en zone rurale.",
          "Sécuriser les parcours professionnels et favoriser les évolutions de carrière et les reconversions.",
        ],
      },
    ],
    reperes: [
      "CNFPT : Centre national de la fonction publique territoriale",
      "Loi du 19 février 2007 relative à la formation professionnelle tout au long de la vie",
      "Compte personnel de formation crédité en heures, mobilisable sur demande de l'agent",
    ],
    aRetenir: [
      "La formation d'intégration est obligatoire, contrairement à la formation personnelle qui reste à l'initiative de l'agent.",
      "Le CNFPT est l'opérateur central de la formation territoriale.",
      "La formation constitue à la fois un droit de l'agent et un levier de gestion des ressources humaines.",
    ],
    pieges: [
      "Ne confondez pas formation d'intégration, obligatoire, et formation de perfectionnement, facultative.",
      "Le compte personnel de formation n'est pas réservé aux seuls agents contractuels : il concerne tous les agents publics.",
      "Le plan de formation n'est pas figé : il doit évoluer avec les besoins de la collectivité.",
    ],
    phraseJury:
      "La formation professionnelle territoriale accompagne l'agent de son intégration jusqu'à ses projets de reconversion, sous le pilotage du CNFPT et de l'employeur territorial. Elle constitue un investissement stratégique pour adapter les compétences aux mutations des métiers publics.",
    questionsJury: [
      { question: "Quel organisme assure la formation des agents territoriaux ?", reponse: "Le Centre national de la fonction publique territoriale, le CNFPT." },
      { question: "La formation d'intégration est-elle obligatoire ?", reponse: "Oui, elle l'est lors de la titularisation de l'agent." },
      { question: "Qu'est-ce que le compte personnel de formation ?", reponse: "Un dispositif crédité en heures que l'agent peut mobiliser pour un projet de formation ou de reconversion." },
      { question: "Pourquoi la formation est-elle un enjeu stratégique aujourd'hui ?", reponse: "Parce qu'elle permet d'adapter les compétences aux transformations numériques et environnementales des métiers." },
    ],
    ultraMemo: "Formation = intégration obligatoire + professionnalisation + perfectionnement + CPF à l'initiative de l'agent.",
  },
  {
    id: "rh-mobilite",
    title: "La mobilité des agents territoriaux",
    theme: "Statut et carrière",
    resume:
      "La mobilité permet à l'agent de faire évoluer son parcours professionnel, au sein de sa collectivité, entre collectivités ou entre versants de la fonction publique.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les formes de mobilité",
        points: [
          "Mobilité interne, au sein de la même collectivité, par changement de poste ou de service.",
          "Mobilité externe, vers une autre collectivité, par la voie de la mutation.",
          "Détachement, permettant d'exercer temporairement dans un autre corps, cadre d'emplois ou versant de la fonction publique.",
          "Mise à disposition, l'agent restant employé par sa collectivité d'origine tout en travaillant pour une autre structure.",
        ],
      },
      {
        titre: "Les outils juridiques associés",
        points: [
          "La mutation entraîne un changement définitif de collectivité employeur, avec conservation du grade.",
          "Le détachement est prononcé pour une durée déterminée et peut déboucher sur une intégration dans le nouveau cadre d'emplois.",
          "La disponibilité permet de suspendre temporairement la carrière pour convenance personnelle ou raison familiale.",
        ],
      },
      {
        titre: "Les enjeux de la mobilité",
        points: [
          "Favoriser le développement professionnel et la motivation des agents sur le long terme.",
          "Répondre aux besoins de recrutement en facilitant les passerelles entre collectivités et entre versants.",
          "Accompagner les reconversions liées à l'usure professionnelle ou à l'évolution des métiers.",
        ],
      },
    ],
    reperes: [
      "Loi du 26 janvier 1984 relative aux positions statutaires, dont le détachement et la disponibilité",
      "Loi du 6 août 2019 facilitant les mobilités entre versants de la fonction publique",
      "Mutation : conservation du grade, changement de collectivité employeur",
    ],
    aRetenir: [
      "La mutation change l'employeur, le détachement change temporairement le cadre d'emplois ou le versant.",
      "La disponibilité suspend la carrière sans rupture du lien avec la fonction publique.",
      "La mobilité constitue un outil de motivation et d'adaptation des compétences aux besoins des collectivités.",
    ],
    pieges: [
      "Ne confondez pas détachement, qui conserve un lien avec le corps d'origine, et intégration, qui y met fin.",
      "La mise à disposition ne change pas l'employeur juridique de l'agent, contrairement à la mutation.",
      "La disponibilité n'est pas toujours de droit : certains motifs restent soumis à l'appréciation de l'employeur.",
    ],
    phraseJury:
      "La mobilité territoriale s'appuie sur des outils juridiques variés, de la mutation au détachement, permettant d'adapter le parcours de l'agent aux évolutions de sa vie professionnelle. Elle constitue un levier essentiel tant pour la motivation des agents que pour la gestion des besoins des collectivités.",
    questionsJury: [
      { question: "Quelle est la différence entre mutation et détachement ?", reponse: "La mutation change définitivement l'employeur en conservant le grade, le détachement est temporaire et peut concerner un autre cadre d'emplois." },
      { question: "Qu'est-ce que la mise à disposition ?", reponse: "Une situation où l'agent reste employé par sa collectivité d'origine tout en exerçant dans une autre structure." },
      { question: "La disponibilité rompt-elle le lien avec la fonction publique ?", reponse: "Non, elle suspend la carrière sans y mettre fin." },
      { question: "Pourquoi favoriser la mobilité des agents ?", reponse: "Pour développer leurs compétences, prévenir l'usure professionnelle et répondre aux besoins de recrutement." },
    ],
    ultraMemo: "Mutation change l'employeur, détachement change temporairement de corps, disponibilité suspend la carrière.",
  },
  {
    id: "rh-devoir-de-reserve",
    title: "Le devoir de réserve",
    theme: "Statut et carrière",
    resume:
      "Le devoir de réserve impose à l'agent public une retenue dans l'expression de ses opinions, proportionnée à son niveau de responsabilité.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Le fondement du devoir de réserve",
        points: [
          "Notion de construction jurisprudentielle, non inscrite littéralement dans la loi mais dégagée par le juge administratif.",
          "Elle impose à l'agent une modération dans l'expression de ses opinions, en particulier en dehors du service.",
          "L'intensité de l'obligation varie selon le niveau hiérarchique et la nature des fonctions exercées.",
        ],
      },
      {
        titre: "Sa distinction avec les notions voisines",
        points: [
          "Le devoir de réserve concerne l'expression des opinions, alors que la neutralité concerne le comportement dans l'exercice des fonctions.",
          "La discrétion professionnelle protège les informations dont l'agent a connaissance, non ses opinions personnelles.",
          "Le secret professionnel protège des informations à caractère personnel ou confidentiel concernant les usagers.",
        ],
      },
      {
        titre: "Son application concrète",
        points: [
          "Un agent occupant des fonctions d'encadrement ou de représentation est soumis à une réserve plus stricte.",
          "L'expression sur les réseaux sociaux peut engager la responsabilité disciplinaire de l'agent si elle est excessive ou publique.",
          "Le juge apprécie au cas par cas la teneur des propos, leur publicité et le contexte de leur expression.",
        ],
      },
    ],
    reperes: [
      "Notion dégagée par la jurisprudence du Conseil d'État",
      "Intensité variable selon le rang hiérarchique de l'agent",
      "Distincte du devoir de neutralité et de la discrétion professionnelle",
    ],
    aRetenir: [
      "Le devoir de réserve n'est pas inscrit tel quel dans la loi, il est d'origine jurisprudentielle.",
      "Son intensité varie selon la position hiérarchique et la visibilité de l'agent.",
      "Il se distingue de la neutralité, de la discrétion et du secret professionnels.",
    ],
    pieges: [
      "Ne présentez pas le devoir de réserve comme une interdiction totale d'expression.",
      "Ne confondez pas devoir de réserve et obligation de neutralité, souvent employés à tort l'un pour l'autre.",
      "L'intensité de l'obligation n'est pas la même pour un agent d'exécution et un cadre dirigeant.",
    ],
    phraseJury:
      "Le devoir de réserve, construit par la jurisprudence, impose à l'agent public une retenue dans l'expression de ses opinions, d'autant plus stricte que ses fonctions sont élevées. Il se distingue nettement de la neutralité, qui s'attache au comportement dans l'exercice même des fonctions.",
    questionsJury: [
      { question: "Le devoir de réserve figure-t-il dans la loi ?", reponse: "Non, il s'agit d'une construction jurisprudentielle du Conseil d'État." },
      { question: "En quoi le devoir de réserve diffère-t-il de la neutralité ?", reponse: "La réserve encadre l'expression des opinions, la neutralité encadre le comportement dans l'exercice des fonctions." },
      { question: "Le devoir de réserve est-il identique pour tous les agents ?", reponse: "Non, il est plus strict pour les agents occupant des fonctions d'encadrement ou de représentation." },
      { question: "Les réseaux sociaux sont-ils concernés par le devoir de réserve ?", reponse: "Oui, des propos publics tenus en ligne peuvent engager la responsabilité disciplinaire de l'agent." },
    ],
    ultraMemo: "Devoir de réserve = jurisprudentiel, gradué selon le rang, distinct de la neutralité.",
  },
  {
    id: "rh-1607-heures",
    title: "Les 1607 heures",
    theme: "Statut et carrière",
    resume:
      "La durée annuelle légale de travail dans la fonction publique territoriale est fixée à 1607 heures, base du décompte du temps de travail des agents.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "L'origine du chiffre",
        points: [
          "1607 heures correspondent à 35 heures hebdomadaires sur 52 semaines, déduction faite des congés et jours fériés moyens.",
          "Ce chiffre constitue la durée légale de référence applicable à l'ensemble des employeurs publics.",
          "Il a été rappelé avec force par la loi de transformation de la fonction publique de 2019 pour harmoniser les pratiques locales.",
        ],
      },
      {
        titre: "Les enjeux de son application",
        points: [
          "De nombreuses collectivités avaient conservé des régimes dérogatoires antérieurs à la mise en œuvre des 35 heures.",
          "La loi de 2019 a supprimé ces régimes dérogatoires pour aligner l'ensemble des collectivités sur la durée légale.",
          "Les collectivités ont disposé d'un délai pour se mettre en conformité après le renouvellement de leurs assemblées délibérantes.",
        ],
      },
      {
        titre: "Les aménagements possibles",
        points: [
          "Sujétions particulières, comme le travail de nuit ou en horaires décalés, pouvant justifier des aménagements du temps de travail.",
          "Cycles de travail variables selon les besoins du service, dans le respect de la durée annuelle globale.",
          "Compte épargne-temps permettant de reporter des jours de repos non pris d'une année sur l'autre.",
        ],
      },
    ],
    reperes: [
      "Durée légale annuelle : 1607 heures",
      "Décret du 12 juillet 2001 relatif à l'aménagement et à la réduction du temps de travail",
      "Loi du 6 août 2019 supprimant les régimes dérogatoires locaux",
    ],
    aRetenir: [
      "1607 heures est la durée annuelle légale de référence pour tous les employeurs publics.",
      "La loi de 2019 a mis fin aux régimes dérogatoires plus favorables maintenus dans certaines collectivités.",
      "Des aménagements de cycles restent possibles dans le respect de cette durée annuelle globale.",
    ],
    pieges: [
      "Ne confondez pas 1607 heures et 35 heures hebdomadaires : le premier est un volume annuel, le second un rythme hebdomadaire.",
      "Les régimes dérogatoires ne sont plus autorisés depuis la loi de 2019, contrairement à une idée reçue persistante.",
      "Le compte épargne-temps ne permet pas de s'affranchir de la durée annuelle légale, il en aménage seulement l'usage.",
    ],
    phraseJury:
      "La durée légale de 1607 heures constitue la référence annuelle du temps de travail dans la fonction publique territoriale. La loi de 2019 a renforcé son application uniforme en supprimant les régimes dérogatoires hérités du passage aux 35 heures.",
    questionsJury: [
      { question: "D'où vient le chiffre de 1607 heures ?", reponse: "Du calcul de 35 heures hebdomadaires sur l'année, déduction faite des congés et jours fériés moyens." },
      { question: "Que prévoyait la loi de 2019 à ce sujet ?", reponse: "La suppression des régimes dérogatoires locaux plus favorables maintenus dans certaines collectivités." },
      { question: "Les collectivités peuvent-elles adapter les cycles de travail ?", reponse: "Oui, dans le respect de la durée annuelle globale de 1607 heures." },
      { question: "Le compte épargne-temps modifie-t-il la durée légale ?", reponse: "Non, il permet seulement de reporter certains jours de repos non pris." },
    ],
    ultraMemo: "1607 heures = durée légale annuelle, harmonisée pour tous depuis la loi de 2019.",
  },
  {
    id: "rh-protection-fonctionnelle",
    title: "La protection fonctionnelle",
    theme: "Statut et carrière",
    resume:
      "La protection fonctionnelle est une garantie légale accordée à l'agent public victime d'attaques ou poursuivi à raison de ses fonctions.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les situations couvertes",
        points: [
          "Agent victime de menaces, violences, injures ou diffamation en raison de l'exercice de ses fonctions.",
          "Agent poursuivi pénalement pour des faits qui n'ont pas le caractère d'une faute personnelle détachable du service.",
          "Agent mis en cause civilement pour des dommages causés dans l'exercice de ses missions.",
        ],
      },
      {
        titre: "Le contenu de la protection",
        points: [
          "Prise en charge des frais de procédure, notamment les honoraires d'avocat engagés par l'agent.",
          "Réparation du préjudice subi par l'agent lorsque l'auteur des faits ne peut être identifié ou solvable.",
          "Assistance juridique et soutien de la collectivité tout au long de la procédure engagée.",
        ],
      },
      {
        titre: "Les conditions et limites",
        points: [
          "La protection est due dès lors que les faits sont directement liés à l'exercice des fonctions, sans faute personnelle détachable.",
          "Elle peut être refusée ou retirée en cas de faute personnelle de l'agent, comme un comportement manifestement fautif.",
          "La demande de protection est formulée auprès de l'autorité territoriale, qui statue sur son octroi.",
        ],
      },
    ],
    reperes: [
      "Article L134-1 et suivants du code général de la fonction publique",
      "Ancien article 11 de la loi du 13 juillet 1983",
      "Distinction entre faute de service et faute personnelle détachable",
    ],
    aRetenir: [
      "La protection fonctionnelle couvre l'agent attaqué ou poursuivi à raison de ses fonctions, hors faute personnelle détachable.",
      "Elle comprend prise en charge des frais, assistance juridique et réparation du préjudice.",
      "L'autorité territoriale statue sur la demande, qui peut être refusée en cas de faute personnelle.",
    ],
    pieges: [
      "La protection fonctionnelle n'est pas automatique : elle nécessite une demande de l'agent et une décision de l'autorité.",
      "Elle ne couvre pas les fautes personnelles détachables du service.",
      "Ne confondez pas protection fonctionnelle et assurance statutaire, qui couvre d'autres risques comme la maladie.",
    ],
    phraseJury:
      "La protection fonctionnelle garantit à l'agent public un soutien juridique et financier lorsqu'il est attaqué ou poursuivi à raison de l'exercice de ses fonctions. Elle trouve sa limite dans la notion de faute personnelle détachable du service, qui exclut la protection de la collectivité.",
    questionsJury: [
      { question: "Dans quelles situations la protection fonctionnelle s'applique-t-elle ?", reponse: "Lorsque l'agent est victime d'attaques ou poursuivi pénalement ou civilement à raison de ses fonctions." },
      { question: "Que couvre concrètement la protection fonctionnelle ?", reponse: "Les frais de procédure, l'assistance juridique et la réparation du préjudice subi." },
      { question: "Dans quel cas la protection peut-elle être refusée ?", reponse: "En cas de faute personnelle détachable du service commise par l'agent." },
      { question: "Qui décide de l'octroi de la protection fonctionnelle ?", reponse: "L'autorité territoriale, saisie d'une demande de l'agent." },
    ],
    ultraMemo: "Protection fonctionnelle = soutien juridique et financier de l'agent, sauf faute personnelle détachable.",
  },
];
