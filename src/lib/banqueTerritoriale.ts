import type { QuizQuestion } from "./quizData";

/**
 * Questions supplémentaires ajoutées aux thèmes existants pour élargir la banque :
 * chaque session d'entraînement en tire 10 au hasard.
 */
export const banqueTerritoriale: Record<string, QuizQuestion[]> = {
  "culture-generale": [
    {
      question: "Combien de régions métropolitaines compte la France depuis 2016 ?",
      options: ["13", "22", "18", "26"],
      answerIndex: 0,
      explanation:
        "La loi NOTRe et la loi du 16 janvier 2015 ont réduit le nombre de régions métropolitaines de 22 à 13, effectives au 1er janvier 2016.",
      optionNotes: [
        null,
        "C'était le nombre de régions métropolitaines avant la réforme de 2015.",
        "18 correspond au total régions métropolitaines + régions d'outre-mer et collectivités assimilées, pas aux seules régions métropolitaines.",
        "26 correspond à l'ancien total métropole + outre-mer avant la réforme.",
      ],
    },
    {
      question: "Qui élit le président du conseil départemental ?",
      options: [
        "Les conseillers départementaux, en leur sein",
        "Les électeurs du département au suffrage direct",
        "Le préfet, sur proposition du conseil",
        "Les maires du département",
      ],
      answerIndex: 0,
      explanation:
        "Le président est élu par l'assemblée départementale lors de la première réunion suivant le renouvellement, à la majorité absolue aux deux premiers tours.",
      optionNotes: [
        null,
        "Les électeurs élisent les conseillers départementaux (binômes par canton), pas le président.",
        "Le préfet n'intervient pas dans la désignation des exécutifs locaux depuis 1982.",
        "Les maires n'élisent pas le président du département ; ils élisent des délégués pour les sénatoriales.",
      ],
    },
    {
      question: "Que garantit le principe de laïcité dans un service public ?",
      options: [
        "La neutralité de l'agent et la liberté de conscience de l'usager",
        "L'interdiction de toute religion dans l'espace public",
        "L'obligation pour l'usager d'être à visage découvert partout",
        "La neutralité de l'usager face à l'agent",
      ],
      answerIndex: 0,
      explanation:
        "L'agent public est strictement neutre dans l'exercice de ses fonctions ; l'usager, lui, conserve sa liberté de manifester ses convictions, dans la limite de l'ordre public et du bon fonctionnement du service.",
      optionNotes: [
        null,
        "La laïcité n'interdit pas la religion dans l'espace public : elle organise la neutralité de l'État.",
        "L'obligation de visage découvert vise des situations précises (identification, sécurité), pas tous les lieux.",
        "C'est l'inverse : l'obligation de neutralité pèse sur l'agent, pas sur l'usager.",
      ],
    },
    {
      question: "Combien de temps dure le mandat d'un conseiller municipal ?",
      options: ["6 ans", "5 ans", "4 ans", "7 ans"],
      answerIndex: 0,
      explanation:
        "Les conseils municipaux sont renouvelés intégralement tous les six ans, comme les conseils départementaux et régionaux.",
      optionNotes: [
        null,
        "5 ans est la durée du mandat de député et du président de la République.",
        "Aucun mandat local français n'est de 4 ans.",
        "7 ans était l'ancienne durée du mandat présidentiel, jamais celle des mandats locaux.",
      ],
    },
    {
      question: "Quel organe contrôle la constitutionnalité d'une loi avant sa promulgation ?",
      options: [
        "Le Conseil constitutionnel",
        "Le Conseil d'État",
        "La Cour de cassation",
        "La Cour des comptes",
      ],
      answerIndex: 0,
      explanation:
        "Saisi notamment par 60 députés ou 60 sénateurs, le Conseil constitutionnel vérifie la conformité de la loi à la Constitution avant promulgation (contrôle a priori).",
      optionNotes: [
        null,
        "Le Conseil d'État conseille le Gouvernement sur les projets de loi et juge l'administration : il ne censure pas une loi.",
        "La Cour de cassation est la juridiction suprême de l'ordre judiciaire, elle ne contrôle pas la loi.",
        "La Cour des comptes contrôle l'emploi des fonds publics, pas la constitutionnalité.",
      ],
    },
    {
      question: "Que signifie le sigle EPCI ?",
      options: [
        "Établissement public de coopération intercommunale",
        "Établissement public de contrôle interne",
        "Entité publique de coordination intercommunale",
        "Établissement public communal d'investissement",
      ],
      answerIndex: 0,
      explanation:
        "Les EPCI (communautés de communes, d'agglomération, urbaines, métropoles) regroupent des communes pour exercer en commun des compétences.",
      optionNotes: [
        null,
        "Le contrôle interne est une fonction comptable, sans lien avec ce sigle.",
        "Formulation inventée : le terme juridique est « établissement public ».",
        "Il n'existe pas de catégorie juridique de ce nom.",
      ],
    },
    {
      question: "Qui est le chef des services de l'État dans le département ?",
      options: ["Le préfet", "Le président du département", "Le procureur", "Le maire du chef-lieu"],
      answerIndex: 0,
      explanation:
        "Le préfet, nommé par décret du président de la République, représente l'État et dirige les services déconcentrés dans le département.",
      optionNotes: [
        null,
        "Il dirige les services du département, collectivité territoriale, pas ceux de l'État.",
        "Le procureur dirige l'action publique pénale, pas les services de l'État.",
        "Le maire est une autorité communale, agent de l'État seulement pour des missions limitées (état civil, police judiciaire).",
      ],
    },
    {
      question: "Quelle institution européenne adopte les directives avec le Parlement européen ?",
      options: [
        "Le Conseil de l'Union européenne",
        "La Commission européenne",
        "Le Conseil de l'Europe",
        "La Cour de justice de l'Union",
      ],
      answerIndex: 0,
      explanation:
        "Dans la procédure législative ordinaire, le Parlement européen et le Conseil de l'UE (les ministres des États membres) coadoptent les textes proposés par la Commission.",
      optionNotes: [
        null,
        "La Commission propose les textes et veille à leur application : elle ne les adopte pas.",
        "Le Conseil de l'Europe est une organisation distincte de l'UE (47 États, Convention européenne des droits de l'homme).",
        "La Cour de justice interprète le droit de l'Union, elle ne légifère pas.",
      ],
    },
    {
      question: "Le droit d'accès aux documents administratifs est garanti par :",
      options: [
        "La CADA et la loi du 17 juillet 1978",
        "La CNIL et le RGPD",
        "Le Défenseur des droits seul",
        "La Cour des comptes",
      ],
      answerIndex: 0,
      explanation:
        "La loi de 1978 (codifiée au CRPA) ouvre l'accès aux documents administratifs ; la Commission d'accès aux documents administratifs est saisie en cas de refus.",
      optionNotes: [
        null,
        "La CNIL et le RGPD protègent les données personnelles : ce n'est pas le même droit.",
        "Le Défenseur des droits traite les litiges avec les services publics, mais l'accès aux documents relève de la CADA.",
        "La Cour des comptes juge l'usage des fonds publics.",
      ],
    },
    {
      question: "Qu'appelle-t-on « clause de compétence générale » ?",
      options: [
        "La faculté d'agir pour toute affaire d'intérêt local, aujourd'hui réservée à la commune",
        "Le droit pour toute collectivité de créer un impôt",
        "La compétence exclusive du préfet en matière de police",
        "La possibilité pour l'État de reprendre une compétence locale",
      ],
      answerIndex: 0,
      explanation:
        "La loi NOTRe de 2015 a supprimé cette clause pour les départements et les régions, qui n'agissent plus que dans leurs compétences attribuées ; seule la commune la conserve.",
      optionNotes: [
        null,
        "Créer un impôt relève de la loi, jamais d'une délibération locale.",
        "La police administrative générale appartient au maire dans la commune ; le préfet n'intervient qu'en cas de carence ou au niveau départemental.",
        "Il s'agirait d'une recentralisation, notion étrangère à cette clause.",
      ],
    },
    {
      question: "Quel texte proclame que « la France est une République indivisible, laïque, démocratique et sociale » ?",
      options: [
        "L'article 1er de la Constitution de 1958",
        "Le préambule de 1946",
        "La Déclaration de 1789",
        "La loi de 1905",
      ],
      answerIndex: 0,
      explanation:
        "C'est la première phrase de la Constitution du 4 octobre 1958, socle des valeurs invoquées à l'oral comme à l'écrit.",
      optionNotes: [
        null,
        "Le préambule de 1946 énonce les droits économiques et sociaux, pas cette formule.",
        "La Déclaration de 1789 énonce les droits naturels de l'homme, pas la nature de la République.",
        "La loi de 1905 organise la séparation des Églises et de l'État.",
      ],
    },
    {
      question: "Quel principe impose que les usagers placés dans la même situation soient traités de manière identique ?",
      options: [
        "L'égalité devant le service public",
        "La continuité du service public",
        "La mutabilité du service public",
        "La gratuité du service public",
      ],
      answerIndex: 0,
      explanation:
        "C'est l'une des trois lois de Rolland (égalité, continuité, mutabilité). Des différences de traitement ne sont admises que si les situations diffèrent ou pour un motif d'intérêt général.",
      optionNotes: [
        null,
        "La continuité impose un fonctionnement régulier et sans interruption injustifiée.",
        "La mutabilité permet d'adapter le service aux besoins qui évoluent.",
        "La gratuité n'est pas un principe général : beaucoup de services sont payants.",
      ],
    },
  ],

  "droit-public": [
    {
      question: "Quelle juridiction juge en premier ressort la plupart des litiges administratifs ?",
      options: [
        "Le tribunal administratif",
        "La cour administrative d'appel",
        "Le Conseil d'État",
        "Le tribunal judiciaire",
      ],
      answerIndex: 0,
      explanation:
        "Le tribunal administratif est le juge de droit commun en première instance ; l'appel va à la cour administrative d'appel et la cassation au Conseil d'État.",
      optionNotes: [
        null,
        "Elle statue en appel des jugements des tribunaux administratifs.",
        "Le Conseil d'État est juge de cassation, et de premier ressort seulement pour des cas limités (décrets, actes des ministres).",
        "Le tribunal judiciaire juge les litiges entre personnes privées.",
      ],
    },
    {
      question: "Qu'est-ce qu'un recours pour excès de pouvoir ?",
      options: [
        "Un recours tendant à l'annulation d'un acte administratif illégal",
        "Une demande d'indemnisation d'un préjudice",
        "Un recours contre une décision de justice",
        "Une plainte pénale contre un agent",
      ],
      answerIndex: 0,
      explanation:
        "Recours objectif ouvert sans avocat, il conduit le juge à annuler l'acte pour incompétence, vice de forme, détournement de pouvoir ou violation de la loi.",
      optionNotes: [
        null,
        "C'est le recours de plein contentieux (indemnitaire).",
        "Contester une décision de justice relève de l'appel ou de la cassation.",
        "La plainte pénale relève du juge judiciaire.",
      ],
    },
    {
      question: "Quel délai de droit commun pour former un recours contentieux contre une décision administrative ?",
      options: ["Deux mois", "Quinze jours", "Six mois", "Un an"],
      answerIndex: 0,
      explanation:
        "Le délai est de deux mois à compter de la notification ou de la publication, à condition que les voies et délais de recours aient été mentionnés.",
      optionNotes: [
        null,
        "Quinze jours correspond à certains référés ou contentieux spéciaux (électoral, étrangers).",
        "Six mois est le délai « raisonnable » maximal issu de la jurisprudence Czabaj lorsque les voies de recours n'ont pas été indiquées.",
        "Un an n'est pas un délai de recours de droit commun.",
      ],
    },
    {
      question: "Qu'est-ce que le référé-liberté ?",
      options: [
        "Une procédure d'urgence en 48 heures en cas d'atteinte grave à une liberté fondamentale",
        "Un recours au fond contre un règlement",
        "Une procédure pour obtenir des dommages et intérêts",
        "Une saisine du Conseil constitutionnel par un citoyen",
      ],
      answerIndex: 0,
      explanation:
        "Article L. 521-2 du code de justice administrative : le juge statue dans les 48 heures si l'administration porte une atteinte grave et manifestement illégale à une liberté fondamentale.",
      optionNotes: [
        null,
        "Le recours au fond est le recours pour excès de pouvoir, jugé en plusieurs mois.",
        "L'indemnisation relève du plein contentieux, pas du référé-liberté.",
        "La saisine par un citoyen passe par la QPC, devant le juge saisi du litige.",
      ],
    },
    {
      question: "Que signifie QPC ?",
      options: [
        "Question prioritaire de constitutionnalité",
        "Question préalable de conformité",
        "Quotient de participation citoyenne",
        "Qualification préalable du contentieux",
      ],
      answerIndex: 0,
      explanation:
        "Depuis 2010, tout justiciable peut soutenir qu'une disposition législative applicable au litige porte atteinte aux droits et libertés garantis par la Constitution.",
      optionNotes: [
        null,
        "Formulation inexistante en droit français.",
        "Notion inventée, sans portée juridique.",
        "Aucune procédure ne porte ce nom.",
      ],
    },
    {
      question: "Un acte administratif unilatéral entre en vigueur :",
      options: [
        "Après publication ou notification",
        "Dès sa signature",
        "Après validation du préfet dans tous les cas",
        "Après un délai d'un mois systématique",
      ],
      answerIndex: 0,
      explanation:
        "L'opposabilité suppose la publicité : publication pour les actes réglementaires, notification pour les décisions individuelles.",
      optionNotes: [
        null,
        "La signature crée l'acte mais ne le rend pas opposable aux administrés.",
        "Le contrôle de légalité intervient sur certains actes locaux, sans conditionner l'entrée en vigueur au-delà de la transmission.",
        "Aucun délai général d'un mois n'existe.",
      ],
    },
    {
      question: "La hiérarchie des normes place au sommet :",
      options: [
        "Le bloc de constitutionnalité",
        "La loi ordinaire",
        "Les règlements",
        "Les circulaires",
      ],
      answerIndex: 0,
      explanation:
        "Constitution et textes à valeur constitutionnelle priment, puis les traités, la loi, les règlements et enfin les actes infra-réglementaires.",
      optionNotes: [
        null,
        "La loi est subordonnée à la Constitution et aux traités régulièrement ratifiés.",
        "Les règlements doivent respecter la loi.",
        "Les circulaires sont en bas de la hiérarchie et, sauf impératives, non créatrices de droit.",
      ],
    },
    {
      question: "Quelle est la valeur juridique d'une circulaire interprétative ?",
      options: [
        "Elle ne crée pas de droit et n'est pas opposable aux tiers",
        "Elle a la même valeur qu'un décret",
        "Elle prime sur la loi dans le service",
        "Elle est toujours attaquable comme un règlement",
      ],
      answerIndex: 0,
      explanation:
        "Seules les circulaires impératives faisant grief peuvent être attaquées (jurisprudence GISTI 2020) ; une simple interprétation ne modifie pas l'ordonnancement juridique.",
      optionNotes: [
        null,
        "Le décret est un acte réglementaire signé par le Premier ministre ou le Président, d'une tout autre portée.",
        "Aucune circulaire ne prime sur la loi.",
        "Seules celles qui produisent des effets notables sont attaquables.",
      ],
    },
    {
      question: "Le principe de légalité signifie que l'administration :",
      options: [
        "Doit agir conformément aux normes supérieures",
        "Peut agir librement dans l'intérêt général",
        "N'est responsable qu'en cas de faute lourde",
        "Échappe au contrôle du juge",
      ],
      answerIndex: 0,
      explanation:
        "Toute décision doit avoir une base légale et respecter la hiérarchie des normes ; à défaut, elle est annulable.",
      optionNotes: [
        null,
        "L'intérêt général justifie l'action mais ne dispense jamais du respect du droit.",
        "La faute lourde ne concerne que quelques régimes de responsabilité particuliers.",
        "L'administration est au contraire soumise au contrôle du juge administratif.",
      ],
    },
    {
      question: "Qu'est-ce qu'une décision implicite de rejet ?",
      options: [
        "Le silence de l'administration pendant deux mois valant refus dans certains cas",
        "Un refus obligatoirement motivé par écrit",
        "Une décision annulée par le juge",
        "Un avis défavorable d'une commission",
      ],
      answerIndex: 0,
      explanation:
        "Le principe est « silence vaut acceptation » depuis 2014, mais de nombreuses exceptions maintiennent le rejet implicite après deux mois.",
      optionNotes: [
        null,
        "Une décision implicite est précisément sans écrit ; la motivation peut être demandée ensuite.",
        "L'annulation est l'œuvre du juge, pas un silence.",
        "Un avis de commission ne constitue pas une décision.",
      ],
    },
    {
      question: "La responsabilité sans faute de l'administration peut être engagée :",
      options: [
        "Pour risque ou rupture d'égalité devant les charges publiques",
        "Uniquement en cas de faute lourde",
        "Jamais, la faute est toujours exigée",
        "Seulement devant le juge judiciaire",
      ],
      answerIndex: 0,
      explanation:
        "Deux grands fondements : le risque (travaux publics, activités dangereuses) et la rupture d'égalité devant les charges publiques (dommages permanents, lois).",
      optionNotes: [
        null,
        "La faute lourde est un régime de responsabilité pour faute, l'inverse du sujet.",
        "La jurisprudence admet depuis longtemps la responsabilité sans faute.",
        "Le juge administratif est en principe compétent.",
      ],
    },
    {
      question: "Le pouvoir réglementaire général appartient, au niveau national, à :",
      options: [
        "Premier ministre et président de la République",
        "Chaque ministre",
        "Les préfets seuls",
        "Le Parlement",
      ],
      answerIndex: 0,
      explanation:
        "Article 21 de la Constitution : le Premier ministre exerce le pouvoir réglementaire, sous réserve des décrets du président de la République.",
      optionNotes: [
        null,
        "Un ministre n'a pas de pouvoir réglementaire général, seulement l'organisation de son service ou une habilitation.",
        "Le préfet a un pouvoir réglementaire local, pas général.",
        "Le Parlement vote la loi, il ne prend pas de règlements.",
      ],
    },
  ],

  cgct: [
    {
      question: "Qui convoque le conseil municipal ?",
      options: [
        "Le maire",
        "Le préfet",
        "Le doyen d'âge",
        "Le directeur général des services",
      ],
      answerIndex: 0,
      explanation:
        "Le maire convoque le conseil au moins une fois par trimestre, et sur demande du tiers des membres ou du préfet.",
      optionNotes: [
        null,
        "Le préfet peut demander une réunion, mais la convocation reste l'acte du maire.",
        "Le doyen d'âge préside seulement la séance d'élection du maire.",
        "Le DGS prépare les dossiers, il n'a aucun pouvoir de convocation.",
      ],
    },
    {
      question: "Le quorum du conseil municipal est atteint lorsque :",
      options: [
        "La majorité des membres en exercice est présente",
        "Le tiers des membres est présent",
        "Les deux tiers sont présents",
        "Dix membres sont présents",
      ],
      answerIndex: 0,
      explanation:
        "Le conseil ne délibère valablement que si la majorité des membres en exercice assiste à la séance ; à défaut, une seconde convocation permet de délibérer sans quorum.",
      optionNotes: [
        null,
        "Le tiers déclenche la possibilité de demander une réunion, pas le quorum.",
        "Les deux tiers ne sont exigés pour aucun quorum de droit commun.",
        "Le quorum est proportionnel à l'effectif, jamais un nombre fixe.",
      ],
    },
    {
      question: "Les délibérations du conseil municipal sont :",
      options: [
        "Publiques, sauf huis clos décidé par le conseil",
        "Toujours secrètes",
        "Publiques uniquement en période électorale",
        "Réservées aux habitants inscrits",
      ],
      answerIndex: 0,
      explanation:
        "La publicité des séances est la règle ; le huis clos peut être décidé à la demande de trois membres ou du maire, par vote du conseil.",
      optionNotes: [
        null,
        "Le secret est l'exception étroitement encadrée.",
        "Aucune règle ne réserve la publicité à une période.",
        "L'accès est ouvert à toute personne, pas seulement aux habitants.",
      ],
    },
    {
      question: "Quel acte local doit être transmis au représentant de l'État au titre du contrôle de légalité ?",
      options: [
        "Les délibérations les plus importantes et certains actes réglementaires",
        "Tous les actes sans exception",
        "Aucun acte depuis 1982",
        "Uniquement le budget",
      ],
      answerIndex: 0,
      explanation:
        "Depuis les lois de décentralisation, la liste des actes soumis à obligation de transmission a été resserrée : ils deviennent exécutoires après transmission et publication.",
      optionNotes: [
        null,
        "La transmission obligatoire ne concerne plus tous les actes.",
        "Le contrôle de légalité existe toujours, mais a posteriori.",
        "Le budget en fait partie, mais il n'est pas seul concerné.",
      ],
    },
    {
      question: "Le maire agit en tant qu'agent de l'État lorsqu'il :",
      options: [
        "Célèbre un mariage et tient l'état civil",
        "Vote le budget communal",
        "Nomme un adjoint",
        "Signe un marché public communal",
      ],
      answerIndex: 0,
      explanation:
        "État civil, publication des lois, organisation des élections et police judiciaire relèvent des fonctions exercées au nom de l'État, sous l'autorité du procureur ou du préfet.",
      optionNotes: [
        null,
        "Le budget est voté par le conseil municipal, compétence purement locale.",
        "La désignation des adjoints relève du conseil municipal.",
        "La commande publique est une compétence communale.",
      ],
    },
    {
      question: "Qu'est-ce qu'une communauté d'agglomération ?",
      options: [
        "Un EPCI à fiscalité propre d'au moins 50 000 habitants autour d'une ville-centre",
        "Un syndicat de communes sans fiscalité propre",
        "Une commune nouvelle",
        "Un service déconcentré de l'État",
      ],
      answerIndex: 0,
      explanation:
        "Elle exerce des compétences obligatoires (développement économique, aménagement, habitat, politique de la ville) et lève sa propre fiscalité.",
      optionNotes: [
        null,
        "Un syndicat n'a pas de fiscalité propre et a un objet limité.",
        "La commune nouvelle résulte de la fusion de communes, ce n'est pas un EPCI.",
        "Un EPCI est un groupement de collectivités, jamais un service de l'État.",
      ],
    },
    {
      question: "Le pouvoir de police générale du maire vise :",
      options: [
        "Le bon ordre, la sûreté, la sécurité et la salubrité publiques",
        "Le seul stationnement",
        "La répression pénale des infractions",
        "La gestion du personnel communal",
      ],
      answerIndex: 0,
      explanation:
        "Article L. 2212-2 du CGCT : cette énumération fonde les arrêtés du maire, qui doivent rester proportionnés et motivés.",
      optionNotes: [
        null,
        "Le stationnement n'est qu'une application parmi d'autres.",
        "La répression pénale appartient à l'autorité judiciaire.",
        "La gestion du personnel relève du pouvoir hiérarchique, pas de la police.",
      ],
    },
    {
      question: "Une délibération peut être annulée par :",
      options: [
        "Le juge administratif, saisi notamment par le préfet",
        "Le préfet directement",
        "Le maire, par simple retrait",
        "Le comptable public",
      ],
      answerIndex: 0,
      explanation:
        "Le préfet exerce un déféré préfectoral : c'est le juge qui annule, la tutelle a priori ayant disparu en 1982.",
      optionNotes: [
        null,
        "Le préfet ne peut plus annuler lui-même un acte local.",
        "Le retrait est possible dans des délais stricts et pour des actes illégaux créateurs de droits, pas librement.",
        "Le comptable contrôle la régularité du paiement, pas la légalité des délibérations.",
      ],
    },
    {
      question: "Qui élit le président d'un EPCI ?",
      options: [
        "Les conseillers communautaires",
        "Les habitants au suffrage direct",
        "Les maires uniquement",
        "Le préfet",
      ],
      answerIndex: 0,
      explanation:
        "Le conseil communautaire, composé de conseillers issus des communes membres, élit son président et son bureau.",
      optionNotes: [
        null,
        "Les conseillers communautaires sont fléchés lors des municipales dans les communes de 1 000 habitants et plus, mais le président n'est pas élu directement.",
        "Les maires siègent souvent au conseil, mais ne votent pas seuls.",
        "Le préfet n'intervient pas.",
      ],
    },
    {
      question: "Le conseil municipal peut déléguer au maire :",
      options: [
        "Certaines attributions listées par le CGCT, avec compte rendu",
        "Toutes ses attributions sans limite",
        "Le vote du budget",
        "Rien, la délégation est interdite",
      ],
      answerIndex: 0,
      explanation:
        "L'article L. 2122-22 énumère limitativement les délégations possibles (marchés, emprunts, actions en justice…) ; le maire rend compte à chaque réunion.",
      optionNotes: [
        null,
        "La délégation est strictement encadrée par la liste légale.",
        "Le vote du budget et du compte administratif n'est jamais délégable.",
        "Les délégations sont au contraire courantes et utiles.",
      ],
    },
    {
      question: "Que recouvre la notion de « commune nouvelle » ?",
      options: [
        "La fusion de plusieurs communes en une seule collectivité",
        "Une commune créée sur un territoire vierge",
        "Une commune membre d'une métropole",
        "Un quartier doté d'un conseil",
      ],
      answerIndex: 0,
      explanation:
        "Créée par la loi de 2010 et assouplie en 2015, la commune nouvelle remplace les communes fusionnées, qui peuvent devenir communes déléguées.",
      optionNotes: [
        null,
        "Il ne s'agit pas d'une création ex nihilo mais d'un regroupement.",
        "L'appartenance à une métropole ne change pas le statut de la commune.",
        "Un conseil de quartier n'est pas une collectivité.",
      ],
    },
    {
      question: "Les conseillers municipaux ont droit :",
      options: [
        "À une information complète sur les affaires soumises au vote",
        "À consulter les dossiers individuels des agents",
        "À signer seuls des engagements financiers",
        "À représenter la commune en justice",
      ],
      answerIndex: 0,
      explanation:
        "Le droit à l'information (note explicative de synthèse, dossiers consultables) conditionne la validité de la délibération.",
      optionNotes: [
        null,
        "Les dossiers de personnel sont protégés par le secret.",
        "Seul le maire, ou son délégataire, engage la commune.",
        "La représentation en justice appartient au maire, autorisé par le conseil.",
      ],
    },
  ],

  "statut-fpt": [
    {
      question: "Combien de versants compte la fonction publique française ?",
      options: ["Trois", "Deux", "Quatre", "Cinq"],
      answerIndex: 0,
      explanation:
        "Fonction publique de l'État, territoriale et hospitalière : trois versants régis aujourd'hui par le code général de la fonction publique.",
      optionNotes: [
        null,
        "Oublier l'hospitalière est une erreur fréquente à l'oral.",
        "Il n'existe pas de quatrième versant, malgré la diversité des employeurs.",
        "Aucun découpage officiel en cinq versants.",
      ],
    },
    {
      question: "Qu'est-ce qu'un cadre d'emplois ?",
      options: [
        "Un ensemble de grades soumis au même statut particulier",
        "Un poste précis dans un organigramme",
        "Un contrat de travail type",
        "Un service d'une collectivité",
      ],
      answerIndex: 0,
      explanation:
        "Propre à la territoriale, le cadre d'emplois regroupe les grades et fixe les conditions de recrutement et d'avancement ; le poste, lui, est un emploi.",
      optionNotes: [
        null,
        "Le poste est l'emploi occupé, pas la catégorie statutaire.",
        "Le cadre d'emplois concerne les fonctionnaires, pas les contrats.",
        "Un service est une unité d'organisation.",
      ],
    },
    {
      question: "La liste d'aptitude après réussite à un concours territorial est valable :",
      options: [
        "Quatre ans",
        "Un an, non renouvelable",
        "Sans limite de durée",
        "Six mois",
      ],
      answerIndex: 0,
      explanation:
        "Depuis 2021, le lauréat dispose de quatre ans pour être recruté ; il doit se manifester chaque année auprès de l'organisateur.",
      optionNotes: [
        null,
        "La première année est reconductible, la durée totale n'est pas d'un an.",
        "Sans recrutement dans le délai, le bénéfice du concours est perdu.",
        "Aucun délai de six mois n'existe.",
      ],
    },
    {
      question: "La durée normale du stage après nomination est :",
      options: ["Un an", "Trois mois", "Deux ans", "Six mois"],
      answerIndex: 0,
      explanation:
        "Le stage dure en général un an, prolongeable une fois ; il précède la titularisation prononcée par l'autorité territoriale.",
      optionNotes: [
        null,
        "Trois mois correspond plutôt à une période d'essai de contractuel.",
        "Deux ans n'est possible qu'après prolongation exceptionnelle.",
        "Six mois concerne certains cadres d'emplois particuliers, pas la règle générale.",
      ],
    },
    {
      question: "Le devoir de réserve impose à l'agent :",
      options: [
        "Une expression mesurée, surtout en lien avec ses fonctions",
        "Le silence total en toutes circonstances",
        "L'interdiction de voter",
        "L'interdiction d'adhérer à un syndicat",
      ],
      answerIndex: 0,
      explanation:
        "L'agent conserve sa liberté d'opinion et d'expression, mais doit la modérer selon son niveau hiérarchique et la publicité donnée à ses propos.",
      optionNotes: [
        null,
        "Le devoir de réserve n'interdit pas de s'exprimer, il encadre la manière.",
        "Le droit de vote est un droit civique intangible.",
        "La liberté syndicale est garantie aux agents publics.",
      ],
    },
    {
      question: "Quelle instance est consultée sur les questions d'organisation et de conditions de travail ?",
      options: [
        "Le comité social territorial",
        "La commission administrative paritaire",
        "Le conseil municipal",
        "Le centre de gestion seul",
      ],
      answerIndex: 0,
      explanation:
        "Depuis 2022, le comité social territorial (avec sa formation spécialisée santé et sécurité) a remplacé le comité technique et le CHSCT.",
      optionNotes: [
        null,
        "La CAP examine désormais surtout les décisions individuelles défavorables (discipline, refus…).",
        "Le conseil municipal délibère mais n'est pas une instance de dialogue social.",
        "Le centre de gestion accompagne les collectivités, il n'est pas l'instance consultative.",
      ],
    },
    {
      question: "Combien de groupes de sanctions disciplinaires compte la fonction publique territoriale ?",
      options: ["Quatre", "Deux", "Trois", "Cinq"],
      answerIndex: 0,
      explanation:
        "Du premier groupe (avertissement, blâme, exclusion jusqu'à trois jours) au quatrième (mise à la retraite d'office, révocation).",
      optionNotes: [
        null,
        "Deux groupes ne suffiraient pas à couvrir l'échelle des sanctions.",
        "Trois est l'erreur la plus fréquente : il y en a bien quatre.",
        "Il n'existe pas de cinquième groupe.",
      ],
    },
    {
      question: "Le recrutement d'un contractuel sur un emploi permanent est possible :",
      options: [
        "Dans les cas prévus par la loi, notamment l'absence de candidat statutaire",
        "Librement, sans condition",
        "Jamais",
        "Uniquement en catégorie C",
      ],
      answerIndex: 0,
      explanation:
        "La loi de transformation de la fonction publique de 2019 a élargi ces cas, mais le recours reste motivé et la vacance d'emploi doit être publiée.",
      optionNotes: [
        null,
        "La liberté totale de recrutement contractuel n'existe pas dans le statut.",
        "Le recours aux contractuels est au contraire très développé.",
        "Toutes les catégories sont concernées, y compris A et B.",
      ],
    },
    {
      question: "Qu'est-ce que la position de disponibilité ?",
      options: [
        "Une interruption de service sans rémunération, le lien statutaire étant maintenu",
        "Une mise à disposition d'une autre collectivité",
        "Une sanction disciplinaire",
        "Un temps partiel de droit",
      ],
      answerIndex: 0,
      explanation:
        "Le fonctionnaire cesse temporairement d'exercer, n'est pas rémunéré et, sauf cas particuliers, n'acquiert plus de droits à retraite ni à avancement.",
      optionNotes: [
        null,
        "La mise à disposition maintient la rémunération par l'employeur d'origine.",
        "La disponibilité n'est pas une sanction : elle est demandée ou de droit.",
        "Le temps partiel est une modalité d'exercice, non une position.",
      ],
    },
    {
      question: "Le régime indemnitaire de référence dans la territoriale s'appelle :",
      options: ["Le RIFSEEP", "La NBI", "Le SFT", "Le CIA seul"],
      answerIndex: 0,
      explanation:
        "Le RIFSEEP comprend l'IFSE (liée aux fonctions et à l'expérience) et le CIA (complément indemnitaire annuel lié à l'engagement).",
      optionNotes: [
        null,
        "La nouvelle bonification indiciaire s'ajoute au traitement pour certaines fonctions, ce n'est pas le régime indemnitaire.",
        "Le supplément familial de traitement dépend des enfants à charge.",
        "Le CIA n'est que l'une des deux parts du RIFSEEP.",
      ],
    },
    {
      question: "Le droit à la protection fonctionnelle permet à l'agent :",
      options: [
        "D'être protégé et assisté par son employeur en cas d'attaque liée au service",
        "D'obtenir un logement de fonction",
        "De refuser une mutation",
        "De bénéficier d'un avancement automatique",
      ],
      answerIndex: 0,
      explanation:
        "L'employeur doit protéger l'agent victime de violences, menaces ou diffamation, et prendre en charge les frais de procédure.",
      optionNotes: [
        null,
        "Le logement de fonction relève d'une délibération pour nécessité absolue de service.",
        "La mutation dans l'intérêt du service s'impose, sous réserve de recours.",
        "L'avancement dépend des conditions statutaires, jamais automatique dans ce cadre.",
      ],
    },
    {
      question: "Qui prononce la titularisation d'un agent stagiaire ?",
      options: [
        "L'autorité territoriale",
        "Le préfet",
        "Le centre de gestion",
        "Le comité social territorial",
      ],
      answerIndex: 0,
      explanation:
        "Maire ou président de l'exécutif local, l'autorité territoriale nomme, titularise et gère la carrière des agents de sa collectivité.",
      optionNotes: [
        null,
        "Le préfet n'a pas de pouvoir sur les carrières locales.",
        "Le centre de gestion organise les concours et conseille, sans nommer.",
        "Le comité social territorial est consultatif.",
      ],
    },
  ],

  "gestion-comptabilite": [
    {
      question: "Que regroupe la section de fonctionnement d'un budget local ?",
      options: [
        "Les dépenses et recettes courantes et récurrentes",
        "Les acquisitions d'immobilisations",
        "Les seuls remboursements d'emprunt",
        "Les subventions d'équipement reçues",
      ],
      answerIndex: 0,
      explanation:
        "Charges de personnel, achats, subventions versées, intérêts de la dette d'un côté ; impôts, dotations et produits des services de l'autre.",
      optionNotes: [
        null,
        "Les acquisitions durables relèvent de la section d'investissement.",
        "Le remboursement du capital de la dette est une dépense d'investissement.",
        "Les subventions d'équipement sont des recettes d'investissement.",
      ],
    },
    {
      question: "Le principe de séparation de l'ordonnateur et du comptable signifie que :",
      options: [
        "L'un engage la dépense, l'autre la paie",
        "Les deux fonctions sont exercées par le maire",
        "Le comptable décide des dépenses",
        "L'ordonnateur manie les fonds",
      ],
      answerIndex: 0,
      explanation:
        "Cette règle protège les deniers publics : l'ordonnateur engage, liquide et mandate ; le comptable public contrôle et paie.",
      optionNotes: [
        null,
        "Le cumul des deux fonctions est précisément interdit.",
        "Le comptable contrôle la régularité, il ne décide pas de l'opportunité.",
        "Le maniement des fonds appartient au seul comptable.",
      ],
    },
    {
      question: "Qu'est-ce que l'épargne brute d'une collectivité ?",
      options: [
        "Recettes réelles de fonctionnement moins dépenses réelles de fonctionnement",
        "Le solde du compte au 31 décembre",
        "Le montant des emprunts souscrits",
        "Le total des investissements réalisés",
      ],
      answerIndex: 0,
      explanation:
        "Aussi appelée capacité d'autofinancement brute, elle finance le remboursement de la dette puis les investissements.",
      optionNotes: [
        null,
        "La trésorerie est un solde de caisse, pas un indicateur d'épargne.",
        "L'emprunt est une ressource externe, pas de l'autofinancement.",
        "Le volume d'investissement ne dit rien de la capacité à le financer.",
      ],
    },
    {
      question: "Qu'est-ce que la capacité de désendettement ?",
      options: [
        "L'encours de dette rapporté à l'épargne brute, exprimé en années",
        "Le taux moyen des emprunts",
        "La part des dépenses de personnel",
        "Le délai de paiement des fournisseurs",
      ],
      answerIndex: 0,
      explanation:
        "Au-delà de 10 à 12 ans, la situation est jugée tendue ; c'est l'indicateur phare des analyses financières locales.",
      optionNotes: [
        null,
        "Le taux mesure le coût de la dette, pas la capacité à la rembourser.",
        "La part de personnel est un ratio de rigidité des charges.",
        "Le délai global de paiement mesure la qualité de la chaîne comptable.",
      ],
    },
    {
      question: "Le compte administratif est voté :",
      options: [
        "Par l'assemblée délibérante, l'ordonnateur ne présidant pas le vote",
        "Par le comptable public",
        "Par le préfet",
        "Par la chambre régionale des comptes",
      ],
      answerIndex: 0,
      explanation:
        "Il retrace l'exécution du budget ; le maire ou le président se retire au moment du vote, qui est présidé par un autre élu.",
      optionNotes: [
        null,
        "Le comptable établit le compte de gestion, document distinct.",
        "Le préfet contrôle mais ne vote pas.",
        "La chambre régionale intervient en cas d'irrégularité ou de déséquilibre.",
      ],
    },
    {
      question: "Quel est le seuil au-delà duquel une procédure formalisée s'impose en marchés publics de travaux (ordre de grandeur) ?",
      options: [
        "Environ 5,5 millions d'euros HT",
        "40 000 euros HT",
        "221 000 euros HT",
        "1 million d'euros HT",
      ],
      answerIndex: 0,
      explanation:
        "Les seuils européens, révisés tous les deux ans, placent les travaux autour de 5,5 M€ HT ; en deçà, la procédure est adaptée.",
      optionNotes: [
        null,
        "40 000 € HT est le seuil de dispense de publicité et de mise en concurrence.",
        "Ce montant correspond aux fournitures et services des collectivités, pas aux travaux.",
        "Aucun seuil européen ne correspond à ce chiffre rond.",
      ],
    },
    {
      question: "Que sont les autorisations de programme (AP) et crédits de paiement (CP) ?",
      options: [
        "Un outil de gestion pluriannuelle des investissements",
        "Une technique de calcul de l'impôt local",
        "Un mode de recrutement",
        "Un document de contrôle de la CRC",
      ],
      answerIndex: 0,
      explanation:
        "L'AP fixe l'enveloppe maximale d'une opération, les CP les crédits ouverts chaque année pour la payer.",
      optionNotes: [
        null,
        "La fiscalité locale repose sur les bases et les taux votés.",
        "Aucun lien avec les ressources humaines.",
        "La chambre régionale des comptes produit des rapports d'observations.",
      ],
    },
    {
      question: "Le principe d'annualité budgétaire signifie que :",
      options: [
        "Le budget est voté pour un exercice de douze mois",
        "Les crédits sont illimités dans le temps",
        "Les recettes sont affectées à une dépense",
        "Toutes les dépenses sont pluriannuelles",
      ],
      answerIndex: 0,
      explanation:
        "L'exercice coïncide avec l'année civile ; des aménagements existent (journée complémentaire, restes à réaliser, AP/CP).",
      optionNotes: [
        null,
        "Les crédits non consommés tombent en fin d'exercice, sauf report régulier.",
        "L'affectation d'une recette à une dépense est contraire au principe d'universalité.",
        "La pluriannualité est l'exception encadrée, pas la règle.",
      ],
    },
    {
      question: "Le débat d'orientation budgétaire (DOB) intervient :",
      options: [
        "Dans les deux mois précédant le vote du budget, dans les communes de 3 500 habitants et plus",
        "Après le vote du budget",
        "Tous les trois ans",
        "Uniquement dans les régions",
      ],
      answerIndex: 0,
      explanation:
        "Il s'appuie sur un rapport d'orientation budgétaire et porte sur les engagements pluriannuels, la dette et, au-delà de 10 000 habitants, la masse salariale.",
      optionNotes: [
        null,
        "Le DOB précède nécessairement le vote, sous peine d'illégalité du budget.",
        "Il est annuel.",
        "Il s'applique aussi aux communes, départements et EPCI concernés.",
      ],
    },
    {
      question: "Que contrôle le comptable public avant de payer une dépense ?",
      options: [
        "La régularité formelle : crédits disponibles, pièces justificatives, compétence de l'ordonnateur",
        "L'opportunité politique de la dépense",
        "La qualité du service rendu",
        "Le choix du prestataire",
      ],
      answerIndex: 0,
      explanation:
        "Le contrôle du comptable est un contrôle de régularité, jamais d'opportunité : il ne juge pas le bien-fondé de la décision.",
      optionNotes: [
        null,
        "L'opportunité relève des élus, responsables devant les électeurs.",
        "La constatation du service fait est de la responsabilité de l'ordonnateur.",
        "Le choix de l'attributaire appartient au pouvoir adjudicateur.",
      ],
    },
    {
      question: "Quelle recette fiscale a remplacé la taxe d'habitation sur les résidences principales pour les communes ?",
      options: [
        "La part départementale de la taxe foncière sur les propriétés bâties",
        "La CVAE",
        "La taxe de séjour",
        "La dotation globale de fonctionnement",
      ],
      answerIndex: 0,
      explanation:
        "La suppression de la taxe d'habitation a été compensée par le transfert aux communes de la part départementale du foncier bâti, avec coefficient correcteur.",
      optionNotes: [
        null,
        "La CVAE concerne les entreprises et a été transférée puis supprimée progressivement.",
        "La taxe de séjour est une recette marginale liée au tourisme.",
        "La DGF est une dotation de l'État, pas une recette fiscale.",
      ],
    },
    {
      question: "Un budget annexe est créé pour :",
      options: [
        "Isoler l'activité d'un service public industriel et commercial",
        "Payer les agents",
        "Financer la dette",
        "Regrouper toutes les subventions",
      ],
      answerIndex: 0,
      explanation:
        "Eau, assainissement, transports : ces services doivent être équilibrés par leurs propres redevances, d'où un budget distinct du budget principal.",
      optionNotes: [
        null,
        "La masse salariale figure au budget principal, chapitre 012.",
        "La dette est retracée dans le budget concerné, pas dans un budget dédié.",
        "Les subventions s'inscrivent dans le budget de la politique concernée.",
      ],
    },
  ],
};
