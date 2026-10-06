import type { QuizQuestion } from "../quizData";

export const banqueAnnalesCulture: QuizQuestion[] = [
  {
    question: "Quel est l'objectif principal de la loi 3DS promulguée en février 2022 ?",
    options: [
      "Recentraliser les compétences de santé",
      "Supprimer les départements ruraux",
      "Renforcer la différenciation, la décentralisation et la simplification",
      "Fusionner toutes les communes de moins de 500 habitants"
    ],
    answerIndex: 2,
    explanation: "La loi 3DS vise à offrir plus de souplesse aux collectivités territoriales en adaptant les politiques publiques aux spécificités locales. Elle renforce également les pouvoirs des maires et simplifie l'action publique.",
    optionNotes: [
      "La loi 3DS va à l'inverse de la recentralisation en promouvant la différenciation locale.",
      "Le texte ne prévoit absolument pas la suppression de collectivité, mais une meilleure articulation.",
      null,
      "La fusion de communes reste basée sur le volontariat (communes nouvelles) et n'est pas imposée par cette loi."
    ]
  },
  {
    question: "Qu'est-ce que l'objectif 'ZAN' introduit par la loi Climat et Résilience de 2021 ?",
    options: [
      "Zone d'Aménagement Nationalisé",
      "Zéro Artificialisation Nette",
      "Zone d'Action Nocturne",
      "Zéro Activité Nucléaire"
    ],
    answerIndex: 1,
    explanation: "Le ZAN impose aux collectivités de réduire de moitié le rythme de consommation d'espaces naturels d'ici 2031. L'objectif final est d'atteindre une absence totale d'artificialisation nette en 2050.",
    optionNotes: [
      "L'aménagement reste une compétence locale partagée et non nationalisée.",
      null,
      "Il s'agit d'un acronyme environnemental lié à l'urbanisme et non à l'éclairage public.",
      "Le sigle concerne la protection des sols et de la biodiversité, pas l'énergie nucléaire."
    ]
  },
  {
    question: "Qui nomme le Défenseur des droits en France ?",
    options: [
      "Le Parlement à la majorité qualifiée",
      "Le Premier ministre après avis du Conseil d'État",
      "Le Président de la République pour un mandat de 6 ans",
      "Le Conseil constitutionnel"
    ],
    answerIndex: 2,
    explanation: "Le Défenseur des droits est une autorité administrative indépendante nommée par le chef de l'État. Son mandat de six ans est non renouvelable et incompatible avec d'autres fonctions.",
    optionNotes: [
      "Le Parlement émet un avis via les commissions compétentes, mais ne procède pas à la nomination.",
      "Le Premier ministre n'a pas ce pouvoir de nomination pour cette autorité indépendante.",
      null,
      "Le Conseil constitutionnel n'intervient pas dans la nomination des autorités de protection des droits."
    ]
  },
  {
    question: "Quelle collectivité est désignée 'chef de file' pour l'action sociale ?",
    options: [
      "La Région",
      "La Commune",
      "Le Département",
      "L'État"
    ],
    answerIndex: 2,
    explanation: "Le Département est l'acteur de référence pour les solidarités humaines, incluant le RSA, l'aide à l'enfance et aux personnes âgées. Cette compétence a été réaffirmée lors des différentes étapes de la décentralisation.",
    optionNotes: [
      "La Région est chef de file pour le développement économique et les transports.",
      "La Commune gère l'action sociale de proximité via le CCAS, mais n'est pas le chef de file légal.",
      null,
      "L'État définit le cadre national mais délègue la mise en œuvre opérationnelle aux départements."
    ]
  },
  {
    question: "Quel organisme est chargé d'assurer la formation des agents territoriaux ?",
    options: [
      "L'ENA (devenue INSP)",
      "Le CNFPT",
      "La DGCL",
      "Le Ministère de l'Éducation nationale"
    ],
    answerIndex: 1,
    explanation: "Le Centre National de la Fonction Publique Territoriale accompagne les agents tout au long de leur carrière. Il est financé par une cotisation versée par les collectivités employeurs.",
    optionNotes: [
      "L'INSP forme les hauts fonctionnaires de l'État, pas l'ensemble des agents territoriaux.",
      null,
      "La Direction Générale des Collectivités Locales est une administration de centrale du ministère de l'Intérieur.",
      "L'Éducation nationale gère l'enseignement scolaire et non la formation professionnelle des fonctionnaires territoriaux."
    ]
  },
  {
    question: "Quelle est la date limite habituelle pour le vote du budget primitif d'une commune ?",
    options: [
      "Le 31 décembre de l'année précédente",
      "Le 1er janvier",
      "Le 15 avril",
      "Le 14 juillet"
    ],
    answerIndex: 2,
    explanation: "En année normale, le budget doit être adopté avant le 15 avril (ou le 30 avril les années d'élections municipales). À défaut, le préfet peut saisir la Chambre Régionale des Comptes.",
    optionNotes: [
      "Le 31 décembre est la fin de l'exercice comptable, mais le vote peut intervenir plus tard grâce à la période complémentaire.",
      "Le 1er janvier marque le début de l'exercice, mais le budget n'est pas forcément encore voté.",
      null,
      "Le 14 juillet est bien trop tardif et entraînerait une mise sous tutelle budgétaire de la collectivité."
    ]
  },
  {
    question: "Que signifie le principe de 'subsidiarité' dans l'action publique ?",
    options: [
      "L'État doit tout financer par des subventions",
      "L'échelon supérieur n'intervient que si l'action ne peut être menée à l'échelon inférieur",
      "Toutes les communes doivent recevoir le même montant d'aides",
      "Les citoyens peuvent remplacer les élus pour voter les lois"
    ],
    answerIndex: 1,
    explanation: "Ce principe privilégie l'échelon le plus proche des citoyens pour l'exercice des compétences. Il vise à garantir l'efficacité et la proximité de l'action publique territoriale.",
    optionNotes: [
      "Il s'agirait ici d'une dépendance financière, pas d'un principe d'organisation des compétences.",
      null,
      "Cette définition correspondrait au principe d'égalité ou de péréquation, pas à la subsidiarité.",
      "Il s'agirait ici de démocratie directe ou participative, sans lien avec la hiérarchie des compétences."
    ]
  },
  {
    question: "Pour quelles communes l'affiliation à un Centre de Gestion (CDG) est-elle obligatoire ?",
    options: [
      "Toutes les communes de France sans exception",
      "Uniquement les communes de plus de 10 000 habitants",
      "Les communes et établissements employant moins de 350 agents",
      "Uniquement les préfectures"
    ],
    answerIndex: 2,
    explanation: "Les CDG gèrent la carrière et les concours pour les petites et moyennes collectivités. Au-delà de 350 agents, l'affiliation devient volontaire car la collectivité dispose souvent de ses propres services RH.",
    optionNotes: [
      "Les grandes collectivités peuvent choisir de gérer elles-mêmes leurs missions RH sans passer par le CDG.",
      "C'est l'inverse : les grandes structures ont moins d'obligations d'affiliation.",
      null,
      "Les préfectures sont des services de l'État et ne sont donc jamais affiliées à un CDG territorial."
    ]
  },
  {
    question: "Quel texte a instauré la journée nationale de la laïcité le 9 décembre ?",
    options: [
      "La Constitution de 1958",
      "La loi de séparation des Églises et de l'État de 1905",
      "Une résolution du Sénat en 2011",
      "La loi confortant le respect des principes de la République de 2021"
    ],
    answerIndex: 1,
    explanation: "La date fait référence au 9 décembre 1905, jour de la promulgation de la loi historique sur la laïcité. C'est un moment fort de pédagogie sur les valeurs républicaines dans les services publics.",
    optionNotes: [
      "La Constitution consacre le principe de laïcité dès son article 1er mais ne fixe pas de journée de commémoration.",
      null,
      "Le Sénat a soutenu cette initiative, mais c'est la date de la loi de 1905 qui fonde officiellement cet anniversaire.",
      "La loi de 2021 a renforcé les obligations de neutralité mais n'est pas à l'origine de cette date historique."
    ]
  },
  {
    question: "Qu'est-ce qu'une 'Maison France Services' ?",
    options: [
      "Un magasin d'ameublement pour les fonctionnaires",
      "Un guichet unique facilitant l'accès aux démarches administratives",
      "Le siège de la gendarmerie nationale",
      "Une maison de retraite publique"
    ],
    answerIndex: 1,
    explanation: "Lancé en 2019, ce réseau permet aux usagers d'être accompagnés pour leurs dossiers (impôts, CAF, retraite) en un seul lieu. Il vise à lutter contre la fracture numérique et l'éloignement des services publics.",
    optionNotes: [
      "Il s'agit d'un service public administratif et non d'une enseigne commerciale.",
      null,
      "La gendarmerie peut être partenaire, mais France Services regroupe de nombreux autres opérateurs publics.",
      "Bien que située en zone rurale, sa vocation est administrative et non médico-sociale."
    ]
  },
  {
    question: "Qui préside le Conseil d'État en pratique (chef effectif de l'institution) ?",
    options: [
      "Le Président de la République",
      "Le Premier ministre",
      "Le Vice-président du Conseil d'État",
      "Le Garde des Sceaux"
    ],
    answerIndex: 2,
    explanation: "Bien que le Premier ministre préside formellement les assemblées générales, le Vice-président assure la direction réelle et quotidienne du Conseil. Il est le premier magistrat de l'ordre administratif.",
    optionNotes: [
      "Le Président ne préside pas le Conseil d'État, il préside le Conseil des ministres.",
      "Le Premier ministre en est le président théorique mais n'exerce pas la fonction de direction effective.",
      null,
      "Le Garde des Sceaux (Ministre de la Justice) gère l'ordre judiciaire, pas le Conseil d'État."
    ]
  },
  {
    question: "Quel est le rôle de la 'péréquation' financière entre collectivités ?",
    options: [
      "Supprimer toutes les taxes locales",
      "Réduire les écarts de richesse entre territoires",
      "Financer uniquement les projets écologiques",
      "Autoriser les maires à fixer librement l'impôt sur le revenu"
    ],
    answerIndex: 1,
    explanation: "La péréquation consiste à prélever une partie des ressources des collectivités riches pour les redistribuer aux plus pauvres. C'est un mécanisme de solidarité territoriale garanti par la Constitution.",
    optionNotes: [
      "La péréquation redistribue les ressources existantes, elle ne supprime pas la fiscalité.",
      null,
      "Elle concerne le fonctionnement global des collectivités et non une thématique spécifique comme l'écologie.",
      "Les maires ne fixent pas l'impôt sur le revenu, qui est une prérogative exclusive de l'État."
    ]
  },
  {
    question: "En politique locale, qu'impose la loi sur la parité pour les élections municipales (> 1000 hab) ?",
    options: [
      "Un nombre égal d'hommes et de femmes dans chaque bureau de vote",
      "Des listes comportant autant d'hommes que de femmes avec alternance stricte",
      "L'obligation d'avoir une femme maire une fois sur deux",
      "L'interdiction pour les hommes de se présenter dans les petites communes"
    ],
    answerIndex: 1,
    explanation: "Le système 'chabada' impose une alternance stricte (homme/femme ou femme/homme) sur les listes de candidats. Le non-respect de cette règle entraîne le rejet de la liste par la préfecture.",
    optionNotes: [
      "La parité concerne les candidats élus, pas les citoyens assurant le dépouillement.",
      null,
      "Il n'y a pas d'alternance obligatoire pour le poste de maire lui-même, seulement pour la liste des conseillers.",
      "Les hommes peuvent se présenter partout, tant que la parité de la liste est respectée."
    ]
  },
  {
    question: "À quelle fréquence le Sénat français est-il renouvelé ?",
    options: [
      "Tous les 5 ans intégralement",
      "Tous les 3 ans par moitié",
      "Tous les 6 ans intégralement",
      "Tous les 9 ans par tiers"
    ],
    answerIndex: 1,
    explanation: "Les sénateurs sont élus pour 6 ans au suffrage universel indirect par les 'grands électeurs'. Pour assurer une continuité, la chambre haute se renouvelle partiellement tous les trois ans.",
    optionNotes: [
      "Le mandat de 5 ans est celui des députés de l'Assemblée nationale.",
      null,
      "Les élections locales (maires, départements) ont lieu tous les 6 ans, mais le Sénat a un cycle décalé.",
      "C'était le système avant la réforme de 2003 ; le mandat est passé de 9 à 6 ans."
    ]
  },
  {
    question: "Qu'est-ce qu'un 'arrêté' est un acte pris par :",
    options: [
      "Le Parlement uniquement",
      "Une autorité administrative (maire, préfet, ministre)",
      "Le juge pour clore un procès",
      "Le Président de la République exclusivement"
    ],
    answerIndex: 1,
    explanation: "L'arrêté est la forme juridique des décisions prises par les exécutifs locaux ou les ministres. Il se situe en dessous du décret et de la loi dans la hiérarchie des normes.",
    optionNotes: [
      "Le Parlement vote des 'lois', pas des arrêtés.",
      null,
      "Le juge rend des 'jugements', des 'arrêts' ou des 'ordonnances', mais pas des arrêtés administratifs.",
      "Le Président signe des 'décrets' ou des 'ordonnances' (art. 38), les arrêtés sont pour les autorités subordonnées."
    ]
  },
  {
    question: "Quel principe interdit à une collectivité d'exercer une tutelle sur une autre ?",
    options: [
      "Le principe de libre administration",
      "Le principe de précaution",
      "Le principe de hiérarchie administrative",
      "Le principe d'exclusivité"
    ],
    answerIndex: 0,
    explanation: "Inscrit à l'article 72 de la Constitution, ce principe garantit qu'aucune collectivité ne peut décider à la place d'une autre. La coopération est possible, mais sans rapport de subordination.",
    optionNotes: [
      null,
      "Le principe de précaution concerne les risques environnementaux et sanitaires.",
      "Au contraire, il n'y a pas de hiérarchie entre collectivités (une région ne commande pas à une commune).",
      "Une collectivité n'a pas l'exclusivité de l'action publique sur son territoire (compétences partagées)."
    ]
  },
  {
    question: "Que signifie le sigle 'PLUi' dans le domaine de l'urbanisme ?",
    options: [
      "Le Programme Local d'Utilité indispensable",
      "Le Projet Législatif d'Union immobilière",
      "Le Plan Local d'Urbanisme intercommunal",
      "Le Pacte Local pour l'Unité de l'Industrie"
    ],
    answerIndex: 2,
    explanation: "Le PLUi transfère la compétence de planification urbaine des communes vers l'intercommunalité. Il permet de penser l'aménagement du territoire à une échelle plus cohérente que celle du seul village.",
    optionNotes: [
      "Le sigle est strictement lié aux règles de construction et d'occupation des sols.",
      "L'urbanisme relève du pouvoir réglementaire local et non d'un projet législatif national.",
      null,
      "Il n'existe aucun pacte industriel portant ce nom dans le droit des collectivités."
    ]
  },
  {
    question: "Quelle est la principale source de financement du budget des régions ?",
    options: [
      "La taxe d'habitation",
      "Les amendes de stationnement",
      "La taxe sur les ordures ménagères",
      "Une fraction de la TVA nationale"
    ],
    answerIndex: 3,
    explanation: "Depuis la suppression de plusieurs taxes locales, les régions reçoivent une part de la TVA transférée par l'État. Cela assure une ressource stable mais réduit leur autonomie fiscale directe.",
    optionNotes: [
      "La taxe d'habitation a été supprimée pour les résidences principales et ne concernait pas les régions.",
      "Les amendes de stationnement reviennent majoritairement aux communes ou aux intercommunalités.",
      "La TEOM est une taxe affectée au service de collecte géré par les communes ou les EPCI.",
      null
    ]
  },
  {
    question: "Qui est le garant du respect des règles de l'Open Data dans les collectivités ?",
    options: [
      "La CADA",
      "La CNIL",
      "L'ANSSI",
      "Le Conseil supérieur de l'audiovisuel"
    ],
    answerIndex: 0,
    explanation: "La Commission d'accès aux documents administratifs veille à ce que les données publiques soient accessibles et réutilisables. L'ouverture des données est obligatoire pour les collectivités de plus de 3500 hab.",
    optionNotes: [
      null,
      "La CNIL protège les données personnelles, ce qui est souvent l'inverse de l'ouverture publique (anonymisation).",
      "L'ANSSI s'occupe de la sécurité informatique (cyberattaques) et non de l'ouverture des données.",
      "Le CSA (devenu Arcom) régule les médias audiovisuels et non les données administratives."
    ]
  },
  {
    question: "Qu'est-ce que le 'droit d'interpellation' citoyenne au niveau local ?",
    options: [
      "Le droit d'arrêter un criminel dans la rue",
      "Le droit de critiquer le maire sur les réseaux sociaux",
      "L'obligation pour les élus de répondre au téléphone 24h/24",
      "La possibilité pour les habitants de demander l'inscription d'un sujet à l'ordre du jour du conseil"
    ],
    answerIndex: 3,
    explanation: "Ce dispositif de démocratie participative permet aux citoyens de saisir les élus sur un dossier précis. Il est souvent encadré par un nombre minimum de signatures de résidents.",
    optionNotes: [
      "L'interpellation ici est démocratique et non policière ou judiciaire.",
      "La liberté d'expression existe, mais le 'droit d'interpellation' est un mécanisme formel de saisine institutionnelle.",
      "Les élus ont un devoir de réponse, mais pas une obligation de disponibilité permanente immédiate.",
      null
    ]
  },
  {
    question: "Quel organisme contrôle les comptes et la gestion des collectivités territoriales ?",
    options: [
      "La Cour de cassation",
      "L'Inspection Générale des Finances",
      "La Chambre Régionale des Comptes (CRC)",
      "Le tribunal administratif"
    ],
    answerIndex: 2,
    explanation: "La CRC examine la régularité des dépenses et la qualité de la gestion (économie, efficacité). Elle publie des rapports d'observations qui sont débattus en conseil municipal ou communautaire.",
    optionNotes: [
      "La Cour de cassation est le sommet de l'ordre judiciaire (civil et pénal), pas financier.",
      "L'IGF peut mener des audits ponctuels pour l'État, mais le contrôle permanent des collectivités revient à la CRC.",
      null,
      "Le tribunal administratif juge la légalité des actes, pas la bonne gestion financière ou l'opportunité des dépenses."
    ]
  },
  {
    question: "La 'protection fonctionnelle' d'un agent territorial signifie que :",
    options: [
      "La collectivité doit l'assister en cas de poursuites judiciaires liées à ses fonctions",
      "Il porte un gilet pare-balles fourni par la mairie",
      "Il ne peut jamais être licencié",
      "Son ordinateur est protégé par un mot de passe robuste"
    ],
    answerIndex: 0,
    explanation: "La collectivité a l'obligation de protéger l'agent contre les violences, menaces ou diffamations subies dans l'exercice du métier. Elle prend en charge les frais d'avocat si l'agent n'a pas commis de faute personnelle.",
    optionNotes: [
      null,
      "Il s'agit d'une protection juridique et non d'un équipement de protection individuelle physique.",
      "La protection fonctionnelle n'empêche pas les sanctions disciplinaires en cas de faute de l'agent.",
      "Il ne s'agit pas d'une mesure de sécurité informatique, mais d'une garantie statutaire."
    ]
  },
  {
    question: "Quel est l'âge minimum pour être candidat aux élections municipales en France ?",
    options: [
      "16 ans",
      "18 ans",
      "21 ans",
      "25 ans"
    ],
    answerIndex: 1,
    explanation: "Il faut avoir la majorité légale pour se présenter à une élection. Depuis 2011, l'âge d'éligibilité a été harmonisé à 18 ans pour tous les mandats (sauf sénateurs à 24 ans).",
    optionNotes: [
      "C'est l'âge de la pré-majorité, insuffisant pour être élu dans une instance délibérante.",
      null,
      "C'était l'ancien âge pour être député avant la réforme de 2011.",
      "Cet âge n'est plus requis pour aucun mandat électoral en France aujourd'hui."
    ]
  },
  {
    question: "Qu'est-ce que le 'Service National Universel' (SNU) ?",
    options: [
      "Un nouveau nom pour le service militaire obligatoire",
      "Un service de livraison de colis public",
      "Un projet visant à renforcer la cohésion nationale chez les jeunes de 15 à 17 ans",
      "Un syndicat regroupant tous les fonctionnaires"
    ],
    answerIndex: 2,
    explanation: "Le SNU comprend un séjour de cohésion et une mission d'intérêt général. Il vise à transmettre les valeurs de la République et à favoriser l'engagement citoyen.",
    optionNotes: [
      "Bien qu'il comporte une dimension d'uniforme, il n'est pas géré par l'armée comme l'ancien service militaire.",
      "Le sigle n'a aucun lien avec la logistique postale.",
      null,
      "Les syndicats sont des organisations privées indépendantes, le SNU est un dispositif d'État."
    ]
  },
  {
    question: "Qu'est-ce que le 'référent déontologue' dans la fonction publique ?",
    options: [
      "Un policier chargé de surveiller les bureaux",
      "Un logiciel de détection de la fraude fiscale",
      "Un élu chargé de rédiger le règlement intérieur",
      "Un agent chargé de conseiller ses collègues sur le respect des principes éthiques"
    ],
    answerIndex: 3,
    explanation: "Obligatoire dans chaque collectivité, il apporte un conseil confidentiel sur les conflits d'intérêts ou le cumul d'activités. Il aide l'agent à respecter ses obligations de probité et d'impartialité.",
    optionNotes: [
      "Il n'a pas de mission répressive ou de surveillance physique des locaux.",
      "Le référent traite des comportements humains et non du contrôle automatisé des finances.",
      "C'est une fonction de conseil technique et éthique, distincte du pouvoir politique délibérant.",
      null
    ]
  },
  {
    question: "Quelle est la fonction du Conseil économique, social et environnemental régional (CESER) ?",
    options: [
      "Donner des avis consultatifs sur les orientations de la région",
      "Voter le budget de la région",
      "Diriger les lycées du territoire",
      "Remplacer le conseil régional en cas de crise"
    ],
    answerIndex: 0,
    explanation: "Le CESER est composé de représentants de la société civile (syndicats, associations, entreprises). Il éclaire les élus régionaux par ses rapports mais ne dispose d'aucun pouvoir de décision.",
    optionNotes: [
      null,
      "Le pouvoir budgétaire appartient exclusivement au Conseil régional élu au suffrage universel.",
      "La gestion matérielle des lycées est une compétence de l'exécutif régional et de ses services.",
      "Le CESER n'a aucun pouvoir de substitution politique, c'est une instance purement consultative."
    ]
  },
  {
    question: "En France, qui détient le pouvoir de police administrative générale dans la commune ?",
    options: [
      "Le commissaire de police",
      "Le maire",
      "Le préfet exclusivement",
      "Le procureur de la République"
    ],
    answerIndex: 1,
    explanation: "Le maire agit au nom de la commune pour assurer le bon ordre, la sûreté, la sécurité et la salubrité publiques. Il exerce ce pouvoir par voie d'arrêtés municipaux.",
    optionNotes: [
      "Le commissaire dirige les forces de police nationale, mais l'autorité de police (le pouvoir de décider) appartient au maire.",
      null,
      "Le préfet possède ce pouvoir au niveau départemental ou en cas de carence du maire, mais le maire est l'autorité de proximité.",
      "Le procureur dirige la police judiciaire (recherche des infractions), pas la police administrative (prévention)."
    ]
  },
  {
    question: "Qu'est-ce qu'une SPL (Société Publique Locale) ?",
    options: [
      "Une entreprise privée qui travaille pour la mairie",
      "Un syndicat de défense des locataires",
      "Une société dont le capital est 100% public, détenu par au moins deux collectivités",
      "Une taxe sur les résidences de luxe"
    ],
    answerIndex: 2,
    explanation: "La SPL permet aux collectivités de gérer des services publics sous forme commerciale sans mise en concurrence (in-house). Elles en gardent le contrôle total car aucun capital privé n'est autorisé.",
    optionNotes: [
      "Contrairement à une entreprise classique, la SPL appartient entièrement au secteur public.",
      "Il s'agit d'un outil de gestion et non d'une organisation de défense des usagers.",
      null,
      "Le sigle désigne une structure juridique d'exploitation et non un prélèvement fiscal."
    ]
  },
  {
    question: "Comment appelle-t-on le transfert de services de l'État du niveau central vers le niveau local ?",
    options: [
      "La décentralisation",
      "La privatisation",
      "La nationalisation",
      "La déconcentration"
    ],
    answerIndex: 3,
    explanation: "La déconcentration consiste à déléguer des pouvoirs à des agents de l'État nommés localement (préfets, directeurs départementaux). 'C'est le même marteau qui frappe, mais on en a raccourci le manche'.",
    optionNotes: [
      "La décentralisation transfère des compétences à des collectivités distinctes de l'État et dotées de la personnalité morale.",
      "La privatisation est le transfert d'une activité publique vers le secteur privé.",
      "La nationalisation est l'inverse : l'État rachète une entreprise privée pour en faire une entité publique.",
      null
    ]
  },
  {
    question: "Quel monument parisien est le siège du Sénat ?",
    options: [
      "Le Palais du Luxembourg",
      "Le Palais Bourbon",
      "L'Hôtel de Matignon",
      "Le Palais de l'Élysée"
    ],
    answerIndex: 0,
    explanation: "Situé dans le 6ème arrondissement, le Palais du Luxembourg accueille les séances et les travaux des sénateurs. Son jardin est l'un des plus célèbres espaces verts de la capitale.",
    optionNotes: [
      null,
      "Le Palais Bourbon est le siège de l'Assemblée nationale.",
      "L'Hôtel de Matignon est la résidence et le lieu de travail du Premier ministre.",
      "Le Palais de l'Élysée est le siège de la Présidence de la République."
    ]
  }
];
