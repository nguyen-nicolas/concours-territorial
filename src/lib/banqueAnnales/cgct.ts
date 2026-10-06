import type { QuizQuestion } from "../quizData";

export const banqueAnnalesCgct: QuizQuestion[] = [
  {
    question: "Selon le CGCT, quel est le quorum nécessaire pour que le conseil municipal puisse délibérer valablement ?",
    options: [
      "Le tiers des membres en exercice",
      "La majorité absolue des membres en exercice",
      "Les deux tiers des membres en exercice",
      "La présence du maire ou d'un adjoint obligatoirement"
    ],
    answerIndex: 1,
    explanation: "L'article L. 2121-17 du CGCT dispose que le conseil municipal ne peut délibérer que lorsque la majorité de ses membres en exercice est présente. Si ce quorum n'est pas atteint, une nouvelle convocation est envoyée après un délai de trois jours, et le conseil délibère alors sans condition de quorum.",
    optionNotes: [
      "Le tiers est insuffisant pour la première convocation ; ce seuil n'est pas utilisé pour le quorum de droit commun.",
      null,
      "Le seuil des deux tiers n'est requis que pour certaines décisions exceptionnelles très spécifiques, pas pour les séances ordinaires.",
      "La présence du maire est souhaitable mais pas juridiquement une condition de quorum si la majorité des membres est présente."
    ]
  },
  {
    question: "Dans les communes de 3 500 habitants et plus, quel est le délai franc minimal de convocation du conseil municipal ?",
    options: [
      "3 jours francs",
      "5 jours francs",
      "7 jours francs",
      "10 jours francs"
    ],
    answerIndex: 1,
    explanation: "L'article L. 2121-12 du CGCT prévoit un délai de 5 jours francs pour les communes de 3 500 habitants et plus. Pour les communes de moins de 3 500 habitants, le délai est ramené à 3 jours francs selon l'article L. 2121-11.",
    optionNotes: [
      "C'est le délai applicable aux petites communes (moins de 3 500 habitants).",
      null,
      "Aucun article du CGCT ne fixe un délai général de 7 jours francs pour une séance ordinaire.",
      "Le délai de 10 jours n'existe pas pour les séances du conseil municipal, sauf cas très particuliers de procédures d'urgence différées."
    ]
  },
  {
    question: "Qui assure le secrétariat de séance lors d'une réunion du conseil municipal ?",
    options: [
      "Le Directeur Général des Services (DGS)",
      "Un membre du conseil municipal élu au début de chaque séance",
      "L'adjoint aux finances d'office",
      "Le benjamin de l'assemblée obligatoirement"
    ],
    answerIndex: 1,
    explanation: "L'article L. 2121-15 du CGCT précise qu'au début de chaque séance, le conseil municipal nomme un ou plusieurs de ses membres pour remplir les fonctions de secrétaire. Il peut toutefois être assisté par des auxiliaires pris en dehors du conseil (souvent des agents administratifs).",
    optionNotes: [
      "Le DGS assiste à la séance et peut aider le secrétaire, mais il ne peut pas être 'élu' secrétaire de séance car il n'est pas élu municipal.",
      null,
      "L'adjoint aux finances n'a aucune attribution légale automatique pour le secrétariat des séances.",
      "Le benjamin (le plus jeune) est souvent sollicité par tradition, mais ce n'est pas une obligation légale, contrairement à l'ouverture de la première séance du mandat."
    ]
  },
  {
    question: "Quel est le délai imparti au préfet pour déférer une délibération au tribunal administratif dans le cadre du contrôle de légalité ?",
    options: [
      "15 jours à compter de la réception de l'acte",
      "1 mois à compter de la transmission de l'acte",
      "2 mois à compter de la transmission ou de la publication de l'acte",
      "6 mois après le vote de la délibération"
    ],
    answerIndex: 2,
    explanation: "Le préfet dispose d'un délai de 2 mois pour exercer son recours (déféré préfectoral) devant le juge administratif (art. L. 2131-6). Ce délai court à partir du moment où l'acte lui a été transmis, à condition qu'il ait également été rendu public.",
    optionNotes: [
      "15 jours est le délai accordé au préfet pour demander un second examen (recours gracieux), mais pas pour le déféré contentieux.",
      "Un mois est un délai trop court ; le droit commun du contentieux administratif privilégie les 2 mois.",
      null,
      "Un délai de 6 mois rendrait l'action publique trop instable et ne correspond pas aux règles de sécurité juridique du CGCT."
    ]
  },
  {
    question: "Laquelle de ces compétences est une compétence exclusive de la Région depuis la loi NOTRe ?",
    options: [
      "La construction et l'entretien des collèges",
      "Le développement économique",
      "L'action sociale et la solidarité",
      "La gestion des ordures ménagères"
    ],
    answerIndex: 1,
    explanation: "La loi NOTRe de 2015 a renforcé le rôle de la Région en lui confiant la compétence exclusive sur le développement économique (SRDEII). Elle a parallèlement supprimé la clause de compétence générale pour les régions et les départements.",
    optionNotes: [
      "L'entretien des collèges est une compétence obligatoire du Département (art. L. 3211-1).",
      null,
      "Le Département est le chef de file de l'action sociale (RSA, APA, PCH), pas la Région.",
      "La gestion des déchets est une compétence communale, généralement transférée aux EPCI (communautés de communes ou d'agglomération)."
    ]
  },
  {
    question: "Dans quel délai le procès-verbal de la séance du conseil municipal doit-il être arrêté et publié ?",
    options: [
      "Dans les 24 heures suivant la séance",
      "Dans la semaine suivant la séance, par voie d'affichage",
      "Dans la semaine qui suit la séance au cours de laquelle il a été arrêté",
      "Immédiatement après le vote de chaque délibération"
    ],
    answerIndex: 2,
    explanation: "L'article L. 2121-25 prévoit que le procès-verbal est arrêté au début de la séance suivante et publié dans la semaine qui suit. Il doit être mis en ligne sur le site internet de la commune lorsqu'il existe.",
    optionNotes: [
      "Le délai de 24h ne concerne que le compte-rendu sommaire (affichage), pas le procès-verbal complet.",
      "Le PV doit être formellement approuvé (arrêté) par le conseil avant d'être définitif.",
      null,
      "Le PV est un document global sur l'ensemble des débats de la séance, il ne peut être publié délibération par délibération."
    ]
  },
  {
    question: "Une commune peut-elle déléguer sa compétence de police municipale à un EPCI ?",
    options: [
      "Oui, le pouvoir de police peut être totalement transféré à la communauté",
      "Non, le pouvoir de police est une prérogative personnelle du maire et ne peut être transféré",
      "Oui, mais uniquement pour la police de la circulation et du stationnement",
      "Seulement si la commune compte moins de 2 000 habitants"
    ],
    answerIndex: 1,
    explanation: "Le pouvoir de police administrative générale reste une compétence propre du maire (art. L. 2212-1). Si le maire peut déléguer sa signature à un adjoint, il ne peut pas 'transférer' cette compétence à l'établissement de coopération intercommunale, bien que certains pouvoirs de police 'spéciale' puissent être exercés par le président de l'EPCI.",
    optionNotes: [
      "Un transfert total viderait la fonction de maire de sa substance régalienne locale ; c'est juridiquement impossible.",
      null,
      "La police de la circulation peut faire l'objet d'un transfert de police spéciale au président de l'EPCI, mais la question porte sur la police municipale (générale).",
      "Le nombre d'habitants ne change pas le caractère constitutionnel et statutaire du pouvoir de police du maire."
    ]
  },
  {
    question: "Quel est le âge minimal pour être élu maire d'une commune en France ?",
    options: [
      "18 ans",
      "21 ans",
      "25 ans",
      "30 ans"
    ],
    answerIndex: 0,
    explanation: "L'article L. 2122-4 du CGCT renvoie aux conditions d'éligibilité des conseillers municipaux. Depuis la réforme de 2011, l'âge d'éligibilité pour toutes les élections est fixé à 18 ans.",
    optionNotes: [
      null,
      "21 ans était l'âge requis avant la réforme de 2011 ; il est aujourd'hui obsolète.",
      "25 ans était autrefois le seuil pour être sénateur, mais ce n'a jamais été le seuil pour être maire.",
      "30 ans ne correspond à aucun seuil d'éligibilité pour les mandats locaux en France."
    ]
  },
  {
    question: "Dans le cadre du contrôle budgétaire, que se passe-t-il si le budget d'une collectivité n'est pas voté avant le 15 avril ?",
    options: [
      "Le maire est automatiquement révoqué",
      "Le préfet saisit la Chambre Régionale des Comptes (CRC)",
      "La collectivité est mise sous tutelle directe du ministère des Finances",
      "Le conseil municipal est dissout"
    ],
    answerIndex: 1,
    explanation: "En cas d'absence de vote du budget dans les délais légaux (15 avril, ou 30 avril en cas d'élection), le préfet saisit sans délai la Chambre Régionale des Comptes en vertu de l'article L. 1612-2. La CRC dispose alors d'un mois pour formuler des propositions permettant le règlement du budget.",
    optionNotes: [
      "La révocation du maire est une sanction disciplinaire grave liée à des fautes personnelles, pas à un retard budgétaire.",
      null,
      "La notion de 'tutelle' n'existe plus depuis 1982 ; il s'agit d'un contrôle de légalité et budgétaire encadré par des magistrats financiers.",
      "La dissolution est une procédure rarissime décidée en Conseil des ministres en cas de paralysie totale du conseil, pas pour un simple retard technique."
    ]
  },
  {
    question: "Quel organe est chargé d'assurer la coordination entre les différentes collectivités territoriales au niveau régional ?",
    options: [
      "Le Conseil économique, social et environnemental régional (CESER)",
      "La Conférence Territoriale de l'Action Publique (CTAP)",
      "Le Préfet de Région seul",
      "La Commission Départementale de Coopération Intercommunale (CDCI)"
    ],
    answerIndex: 1,
    explanation: "La CTAP, instaurée par la loi MAPTAM de 2014 et codifiée à l'article L. 1111-9-1, est présidée par le président du conseil régional. Elle réunit les chefs de file des différentes collectivités pour favoriser un exercice concerté des compétences.",
    optionNotes: [
      "Le CESER est un organe consultatif composé de représentants de la société civile, pas de coordination des élus.",
      null,
      "Le Préfet représente l'État ; la coordination entre collectivités relève de la libre administration et donc des élus au sein de la CTAP.",
      "La CDCI s'occupe exclusivement de la carte des intercommunalités au niveau départemental, pas de l'action publique régionale."
    ]
  },
  {
    question: "Le règlement intérieur est-il obligatoire pour toutes les communes ?",
    options: [
      "Oui, quelle que soit la taille de la commune",
      "Uniquement pour les communes de plus de 3 500 habitants",
      "Uniquement pour les métropoles et les départements",
      "Non, c'est une faculté laissée à la libre appréciation du maire"
    ],
    answerIndex: 1,
    explanation: "Selon l'article L. 2121-8 du CGCT, l'établissement d'un règlement intérieur est obligatoire dans les communes de 3 500 habitants et plus dans les six mois suivant l'installation du conseil. Il peut être adopté dans les communes plus petites mais reste facultatif.",
    optionNotes: [
      "Pour les communes de moins de 3 500 habitants, les règles générales du CGCT suffisent à organiser les débats.",
      null,
      "Si c'est obligatoire pour ces strates, ce n'est pas 'uniquement' pour elles ; les communes moyennes sont aussi concernées.",
      "Le conseil municipal doit voter le règlement ; le maire ne peut pas décider seul de s'en dispenser si la loi l'impose."
    ]
  },
  {
    question: "À quelle autorité un maire doit-il présenter sa démission ?",
    options: [
      "Au conseil municipal",
      "Au Premier ministre",
      "Au préfet de département",
      "Au juge administratif"
    ],
    answerIndex: 2,
    explanation: "L'article L. 2122-15 du CGCT précise que la démission du maire est adressée au préfet. Elle ne devient définitive qu'à partir de son acceptation par le préfet ou, à défaut, un mois après l'envoi d'une nouvelle lettre recommandée.",
    optionNotes: [
      "Le conseil municipal est informé de la démission, mais il n'a pas le pouvoir juridique de l'accepter.",
      "Le Premier ministre n'intervient que pour la révocation d'un maire, pas pour sa démission volontaire.",
      null,
      "Le juge n'intervient pas dans les formalités de fin de mandat volontaire des élus."
    ]
  },
  {
    question: "Qu'est-ce qu'un 'arrêté municipal' ?",
    options: [
      "Une loi votée par le conseil municipal",
      "Un acte administratif unilatéral pris par le maire",
      "Une recommandation sans valeur juridique",
      "Un contrat signé entre la mairie et un administré"
    ],
    answerIndex: 1,
    explanation: "L'arrêté est l'acte juridique par lequel le maire exerce ses pouvoirs de police ou gère le personnel et les services (art. L. 2122-21). C'est une décision exécutoire qui s'impose aux tiers dès lors qu'elle a été publiée ou notifiée.",
    optionNotes: [
      "Seul le Parlement vote la loi ; le conseil municipal vote des 'délibérations'.",
      null,
      "Un arrêté est une norme juridique contraignante dont le non-respect peut être sanctionné pénalement ou administrativement.",
      "Le contrat suppose un accord de volontés ; l'arrêté est un acte unilatéral imposé par l'autorité publique."
    ]
  },
  {
    question: "Laquelle de ces conditions est nécessaire pour qu'un référendum local soit décisionnel ?",
    options: [
      "La participation d'au moins la moitié des électeurs inscrits",
      "L'unanimité du conseil municipal pour organiser le scrutin",
      "L'accord préalable du Premier ministre",
      "Un résultat favorable à plus de 75 % des voix"
    ],
    answerIndex: 0,
    explanation: "L'article L. 1112-7 du CGCT stipule que le référendum n'est décisionnel que si la participation atteint au moins la moitié des électeurs inscrits. Dans le cas contraire, il n'a qu'une valeur consultative (simple avis).",
    optionNotes: [
      null,
      "Le conseil municipal décide de l'organisation à la majorité absolue, pas à l'unanimité.",
      "Le référendum local relève de la libre administration des collectivités ; l'État n'a pas à donner d'autorisation préalable.",
      "La majorité simple (50 % + 1 voix) des suffrages exprimés suffit, sous réserve de la condition de participation."
    ]
  },
  {
    question: "Quel est le rôle des commissions municipales ?",
    options: [
      "Prendre des décisions exécutoires à la place du conseil",
      "Étudier les dossiers avant leur passage en conseil municipal",
      "Contrôler la comptabilité du maire",
      "Remplacer le maire en cas d'absence"
    ],
    answerIndex: 1,
    explanation: "Les commissions municipales, créées par l'article L. 2121-22, sont des instances d'étude et de préparation des affaires qui doivent être soumises au conseil. Elles n'ont aucun pouvoir de décision propre et leurs avis ne lient pas l'assemblée délibérante.",
    optionNotes: [
      "Le pouvoir de décision appartient exclusivement au conseil municipal dans son ensemble ou au maire par délégation.",
      null,
      "Le contrôle des comptes est assuré par le comptable public et la Chambre Régionale des Comptes.",
      "Le remplacement du maire est assuré par les adjoints dans l'ordre du tableau (premier adjoint, etc.)."
    ]
  },
  {
    question: "Comment appelle-t-on le regroupement de plusieurs communes qui décident de fusionner pour n'en former qu'une seule ?",
    options: [
      "Une communauté d'agglomération",
      "Une commune nouvelle",
      "Un pôle métropolitain",
      "Un district urbain"
    ],
    answerIndex: 1,
    explanation: "La 'commune nouvelle' est un dispositif issu de la loi du 16 décembre 2010 (art. L. 2113-1) destiné à favoriser le regroupement volontaire de communes. Elle remplace les communes fusionnées, qui peuvent subsister sous forme de 'communes déléguées'.",
    optionNotes: [
      "L'agglomération est une structure de coopération (EPCI) où les communes membres conservent leur existence juridique propre.",
      null,
      "Le pôle métropolitain est un syndicat mixte de coopération entre grandes intercommunalités, pas une fusion de communes.",
      "Le district est une ancienne forme d'intercommunalité qui a disparu au profit des communautés de communes."
    ]
  },
  {
    question: "Dans les communes de 1 000 habitants et plus, quelle est l'obligation concernant les conseillers d'opposition ?",
    options: [
      "Ils doivent obligatoirement être nommés adjoints",
      "Ils disposent d'un espace d'expression dans le bulletin municipal d'information générale",
      "Ils ont un droit de veto sur le budget",
      "Ils sont rémunérés le double des conseillers de la majorité"
    ],
    answerIndex: 1,
    explanation: "L'article L. 2121-27-1 du CGCT garantit un droit d'expression aux élus n'appartenant pas à la majorité municipale dans les communes de 1 000 habitants et plus. Ce droit s'exerce dans le magazine d'information de la ville, s'il existe.",
    optionNotes: [
      "Les adjoints sont élus par la majorité du conseil ; il n'y a aucune obligation d'y intégrer l'opposition.",
      null,
      "Le droit de veto n'existe pas en droit des collectivités territoriales ; la loi de la majorité s'applique.",
      "Les indemnités de fonction sont encadrées par la loi et ne dépendent jamais de l'appartenance à la majorité ou à l'opposition."
    ]
  },
  {
    question: "Qu'est-ce qu'une délibération 'exécutoire' ?",
    options: [
      "Une décision qui a été votée mais qui n'est pas encore applicable",
      "Une décision qui produit ses effets juridiques après transmission au préfet et publicité",
      "Une décision qui nécessite l'accord signé du tribunal administratif",
      "Une décision qui a été annulée par le maire"
    ],
    answerIndex: 1,
    explanation: "Pour être exécutoire, une délibération doit remplir deux conditions (art. L. 2131-1) : avoir été portée à la connaissance du public (affichage ou publication) et avoir été transmise au représentant de l'État (préfet ou sous-préfet).",
    optionNotes: [
      "Une décision simplement votée est 'existante' mais n'est pas encore opposable tant que les formalités de publicité ne sont pas faites.",
      null,
      "Le juge administratif n'intervient qu'a posteriori en cas de litige ; il ne valide pas les actes au préalable.",
      "Une décision annulée cesse précisément d'être exécutoire."
    ]
  },
  {
    question: "Quel est le principe de la 'séparation de l'ordonnateur et du comptable' en finances locales ?",
    options: [
      "Le maire décide des dépenses et le trésorier public les paie effectivement",
      "Le maire doit avoir un compte bancaire séparé de celui de la mairie",
      "Le comptable peut refuser une dépense si elle lui semble politiquement inopportune",
      "L'ordonnateur est obligatoirement un élu de l'opposition"
    ],
    answerIndex: 0,
    explanation: "C'est un principe fondamental : l'élu (ordonnateur) décide de la dépense et émet le mandat de paiement, mais c'est un agent de l'État (le comptable public) qui manie les fonds et vérifie la régularité des pièces justificatives.",
    optionNotes: [
      null,
      "Les fonds de la mairie sont déposés au Trésor Public ; le maire ne possède pas les fonds de la collectivité.",
      "Le comptable vérifie la légalité et la disponibilité des crédits, mais il ne porte aucun jugement sur l'opportunité politique de la dépense.",
      "L'ordonnateur est l'exécutif de la collectivité (maire, président), donc issu de la majorité."
    ]
  },
  {
    question: "Qu'est-ce qu'un EPCI à fiscalité propre ?",
    options: [
      "Un syndicat d'eau qui facture les usagers",
      "Un établissement (ex: communauté de communes) qui perçoit directement des impôts locaux",
      "Une banque publique réservée aux maires",
      "Une association de communes sans budget"
    ],
    answerIndex: 1,
    explanation: "Les EPCI à fiscalité propre (communautés de communes, d'agglomération, urbaines et métropoles) disposent de ressources fiscales directes (ex: CFE) contrairement aux syndicats (SIVU, SIVOM) financés par des contributions des communes membres.",
    optionNotes: [
      "Les syndicats perçoivent des redevances pour service rendu, mais ne lèvent pas l'impôt directement.",
      null,
      "Il n'existe pas de banque de ce nom ; les collectivités empruntent sur le marché ou auprès de la Banque des Territoires.",
      "L'EPCI est un établissement public administratif avec un budget propre et des compétences obligatoires."
    ]
  },
  {
    question: "Dans quelle circonstance le préfet peut-il se substituer au maire pour exercer ses pouvoirs de police ?",
    options: [
      "Dès que le maire quitte le territoire de la commune pour ses vacances",
      "En cas de carence du maire après une mise en demeure restée sans résultat",
      "Si le maire appartient à un parti politique d'opposition nationale",
      "Jamais, le pouvoir du maire est absolu sur son territoire"
    ],
    answerIndex: 1,
    explanation: "L'article L. 2215-1 du CGCT autorise le préfet à agir à la place du maire si ce dernier néglige d'exercer ses pouvoirs de police pour assurer le bon ordre, la sûreté ou la salubrité. Cette substitution nécessite une mise en demeure préalable, sauf cas d'urgence.",
    optionNotes: [
      "En vacances, le maire est remplacé par un adjoint ; le préfet n'intervient pas pour cette raison.",
      null,
      "L'appartenance politique est totalement étrangère aux règles de droit administratif.",
      "Le maire est soumis à la loi et au contrôle de l'État ; son pouvoir est encadré par le principe de légalité."
    ]
  },
  {
    question: "Laquelle de ces dépenses est considérée comme 'obligatoire' pour une commune ?",
    options: [
      "Les subventions aux clubs de football professionnels",
      "L'entretien de l'hôtel de ville et des écoles publiques",
      "L'organisation d'un festival de musique annuel",
      "La construction d'un centre commercial"
    ],
    answerIndex: 1,
    explanation: "Les dépenses obligatoires sont énumérées à l'article L. 2321-2. Elles incluent les frais de personnel, l'entretien des bâtiments communaux affectés au service public (mairie, écoles) et le remboursement de la dette.",
    optionNotes: [
      "Les subventions sont des dépenses facultatives soumises au vote discrétionnaire du conseil.",
      null,
      "Les activités culturelles relèvent de l'animation locale et sont purement facultatives.",
      "Le développement commercial n'est pas une compétence obligatoire directe de la commune, surtout si elle appartient à un EPCI."
    ]
  },
  {
    question: "Qu'est-ce que le 'droit à la formation' des élus locaux ?",
    options: [
      "Une obligation de passer un concours tous les 6 ans",
      "Un droit à 18 jours de formation par mandat, financé par la collectivité",
      "Une formation militaire obligatoire en cas de crise",
      "Un droit de s'inscrire gratuitement dans n'importe quelle université"
    ],
    answerIndex: 1,
    explanation: "L'article L. 2123-13 du CGCT garantit aux membres du conseil municipal un droit à la formation adapté à leurs fonctions. La collectivité doit voter un budget spécifique pour financer ces formations, qui ne peut être inférieur à 2 % des indemnités de fonction.",
    optionNotes: [
      "L'élu est un citoyen mandaté, il n'a pas à passer de concours pour exercer son mandat.",
      null,
      "Aucune disposition du CGCT ne prévoit de formation militaire pour les élus municipaux.",
      "Le droit à la formation concerne des organismes agréés par le ministère de l'Intérieur, pas un accès universel gratuit aux universités."
    ]
  },
  {
    question: "Quel document budgétaire doit obligatoirement être voté par le conseil municipal avant le 30 juin pour l'exercice précédent ?",
    options: [
      "Le budget primitif",
      "Le compte administratif",
      "Le budget supplémentaire",
      "Le rapport d'activité de l'EPCI"
    ],
    answerIndex: 1,
    explanation: "Le compte administratif (art. L. 2121-31) retrace l'exécution réelle des recettes et des dépenses de l'année précédente. Il doit être approuvé avant le 30 juin de l'année N+1, le maire devant se retirer au moment du vote.",
    optionNotes: [
      "Le budget primitif prévoit les dépenses futures et se vote en début d'exercice (avant le 15 avril).",
      null,
      "Le budget supplémentaire est un ajustement en cours d'année, il n'est pas un document de clôture.",
      "Le rapport de l'EPCI est présenté pour information, mais son vote n'est pas la formalité comptable de clôture de la commune."
    ]
  },
  {
    question: "Quelle est la durée du mandat des conseillers départementaux ?",
    options: [
      "4 ans",
      "5 ans",
      "6 ans",
      "9 ans"
    ],
    answerIndex: 2,
    explanation: "Conformément au code électoral et aux principes du CGCT, les conseillers départementaux sont élus pour une durée de 6 ans. Ils sont renouvelés intégralement lors des élections départementales.",
    optionNotes: [
      "Il n'existe pas de mandat de 4 ans dans les collectivités territoriales françaises.",
      "5 ans est la durée du mandat des députés et du Président de la République.",
      null,
      "9 ans était l'ancienne durée du mandat des sénateurs (aujourd'hui 6 ans)."
    ]
  },
  {
    question: "La commission consultative des services publics locaux (CCSPL) est obligatoire dans les communes de :",
    options: [
      "Plus de 1 000 habitants",
      "Plus de 3 500 habitants",
      "Plus de 10 000 habitants",
      "Toutes les communes dotées d'un marché couvert"
    ],
    answerIndex: 2,
    explanation: "L'article L. 1413-1 du CGCT impose la création d'une CCSPL dans les communes de plus de 10 000 habitants et les EPCI de plus de 50 000 habitants. Elle permet d'associer des représentants d'associations locales à l'examen de la gestion des services publics.",
    optionNotes: [
      "Ce seuil est trop bas pour cette instance de démocratie participative structurée.",
      "3 500 est le seuil pour le règlement intérieur et le scrutin de liste, pas pour la CCSPL.",
      null,
      "Le critère est uniquement démographique et lié à l'organisation des services en régie ou délégation, pas à la présence d'un marché."
    ]
  },
  {
    question: "Quelle est la principale différence entre une 'délégation de fonction' et une 'délégation de signature' ?",
    options: [
      "La délégation de fonction est réservée aux agents, la signature aux élus",
      "La délégation de fonction porte sur un domaine entier, la signature permet seulement de signer des actes précis",
      "Il n'y a aucune différence, ce sont deux termes synonymes",
      "La délégation de signature est interdite en période électorale"
    ],
    answerIndex: 1,
    explanation: "Le maire délègue une partie de ses fonctions à ses adjoints (art. L. 2122-18), ce qui leur donne une autorité sur un secteur (ex: urbanisme). La délégation de signature, plus technique, permet à un adjoint ou un fonctionnaire de signer au nom du maire sans pour autant disposer du pouvoir de décision.",
    optionNotes: [
      "Les élus reçoivent des délégations de fonction ; les fonctionnaires reçoivent uniquement des délégations de signature.",
      null,
      "La différence est juridique : la délégation de fonction dessaisit partiellement le maire au profit de l'adjoint (sous son contrôle), pas la signature.",
      "Les deux types de délégations subsistent pendant la période électorale pour assurer la continuité du service public."
    ]
  },
  {
    question: "Un maire peut-il recruter librement n'importe quel agent sur n'importe quel poste ?",
    options: [
      "Oui, il est le seul maître du recrutement dans sa commune",
      "Non, il doit respecter le principe du concours et la nomination sur des grades statutaires",
      "Seulement pour les postes de cadres supérieurs (A+)",
      "Uniquement s'il s'agit de membres de sa famille"
    ],
    answerIndex: 1,
    explanation: "Bien que le maire soit l'autorité territoriale investie du pouvoir de nomination, il est lié par le Statut Général de la Fonction Publique. Le recrutement se fait prioritairement par concours et sur liste d'aptitude, le recours aux contractuels étant encadré par la loi.",
    optionNotes: [
      "Le principe de la fonction publique de carrière limite la liberté totale de recrutement discrétionnaire.",
      null,
      "Les postes de direction sont aussi encadrés (emplois fonctionnels) et soumis à des conditions de grade.",
      "Le recrutement de membres de la famille est strictement encadré par les lois sur la transparence de la vie publique pour éviter le népotisme."
    ]
  },
  {
    question: "Qu'est-ce que le 'principe de continuité du service public' ?",
    options: [
      "L'obligation de maintenir les services ouverts 24h/24",
      "L'obligation d'assurer le fonctionnement régulier du service sans interruption injustifiée",
      "L'interdiction pour les agents de prendre des congés payés",
      "L'obligation pour les bus de circuler même en cas de panne"
    ],
    answerIndex: 1,
    explanation: "La continuité est un principe constitutionnel du service public. Il impose que le service réponde aux besoins des usagers de manière constante, ce qui peut justifier des limitations au droit de grève (service minimum) ou des astreintes.",
    optionNotes: [
      "La continuité ne signifie pas l'ouverture permanente, mais le respect des horaires et des engagements pris.",
      null,
      "Les agents disposent de droits sociaux, dont les congés, qui sont organisés pour ne pas paralyser le service.",
      "La force majeure (panne, intempéries extrêmes) peut justifier une interruption temporaire, mais elle doit être résolue rapidement."
    ]
  },
  {
    question: "Quel texte définit les compétences et l'organisation des communes, départements et régions en France ?",
    options: [
      "Le Code Civil",
      "Le Code Général des Collectivités Territoriales (CGCT)",
      "Le Code de la Route",
      "Le Code du Travail"
    ],
    answerIndex: 1,
    explanation: "Le CGCT regroupe l'essentiel des dispositions législatives et réglementaires relatives aux collectivités territoriales. Créé en 1996, il est la 'bible' juridique des élus et des fonctionnaires territoriaux.",
    optionNotes: [
      "Le Code Civil régit les relations entre les personnes privées (mariage, contrats, propriété).",
      null,
      "Le Code de la Route régit la circulation, bien que le maire y puise certains pouvoirs de police spéciale.",
      "Le Code du Travail régit le secteur privé ; les agents territoriaux relèvent du Code général de la fonction publique."
    ]
  }
];
