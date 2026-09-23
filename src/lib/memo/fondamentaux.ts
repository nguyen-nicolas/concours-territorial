import type { FicheMemo } from "../memoTypes";
import { TOUS_CONCOURS, CONCOURS_AB } from "../memoTypes";

export const fichesFondamentaux: FicheMemo[] = [
  {
    id: "fond-lois-de-rolland",
    title: "Les lois de Rolland",
    theme: "Action publique et services",
    resume:
      "Trois principes dégagés par Louis Rolland qui encadrent le fonctionnement de tout service public : continuité, égalité, mutabilité.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Origine et portée",
        points: [
          "Ces principes ont été formulés par le juriste Louis Rolland dans les années 1930 pour caractériser le régime juridique du service public.",
          "Ils ont depuis été consacrés par la jurisprudence du Conseil d'État et par le Conseil constitutionnel pour certains d'entre eux.",
          "Ils s'appliquent à tout service public, qu'il soit géré directement par une personne publique ou confié à un opérateur privé.",
        ],
      },
      {
        titre: "Continuité",
        points: [
          "Le service public doit fonctionner sans interruption, sauf hypothèses prévues par les textes.",
          "Ce principe justifie l'encadrement du droit de grève des agents publics par un service minimum dans certains secteurs.",
          "Sa valeur constitutionnelle a été reconnue par le Conseil constitutionnel en 1979.",
        ],
      },
      {
        titre: "Égalité",
        points: [
          "Les usagers placés dans une situation identique doivent être traités de la même manière face au service public.",
          "Ce principe n'interdit pas des différences de traitement objectives, par exemple selon des critères de ressources pour une tarification sociale.",
          "Il se décline aussi en égal accès aux emplois publics et en neutralité du service.",
        ],
      },
      {
        titre: "Mutabilité",
        points: [
          "Le service public doit pouvoir s'adapter à l'évolution des besoins collectifs et des circonstances.",
          "Ce principe autorise l'administration à modifier unilatéralement les modalités d'organisation du service, y compris dans un contrat de concession.",
          "Il est parfois désigné comme le principe d'adaptation constante.",
        ],
      },
    ],
    reperes: [
      "Théorisation par Louis Rolland dans les années 1930",
      "Décision du Conseil constitutionnel du 25 juillet 1979 sur la continuité",
      "Trois principes : continuité, égalité, mutabilité",
    ],
    aRetenir: [
      "Les lois de Rolland encadrent tout service public, quel que soit son mode de gestion.",
      "La continuité a une valeur constitutionnelle reconnue par le juge.",
      "La mutabilité justifie le pouvoir de modification unilatérale des contrats administratifs.",
    ],
    pieges: [
      "Ne pas confondre égalité et identité de traitement : des différences objectives sont admises.",
      "La continuité n'interdit pas le droit de grève, elle l'encadre par un service minimum.",
      "Ces principes ne sont pas des lois au sens formel du terme, mais des principes jurisprudentiels.",
    ],
    phraseJury:
      "Les lois de Rolland, dégagées par la doctrine dans les années 1930, structurent le régime de tout service public autour de la continuité, de l'égalité et de la mutabilité. Elles ont été reprises par la jurisprudence et irriguent encore aujourd'hui l'organisation des services publics locaux.",
    questionsJury: [
      { question: "Qui a formulé les lois de Rolland ?", reponse: "Le juriste Louis Rolland, dans les années 1930." },
      { question: "Quel principe justifie le service minimum ?", reponse: "Le principe de continuité du service public." },
      { question: "La mutabilité a-t-elle des conséquences contractuelles ?", reponse: "Oui, elle fonde le pouvoir de modification unilatérale des contrats administratifs." },
      { question: "L'égalité interdit-elle toute différence de traitement ?", reponse: "Non, seulement les différences non justifiées par une situation objective différente." },
    ],
    ultraMemo: "CEM : continuité, égalité, mutabilité.",
  },
  {
    id: "fond-laicite",
    title: "La laïcité",
    theme: "Action publique et services",
    resume:
      "Principe constitutionnel de neutralité de l'État à l'égard des cultes, avec des conséquences directes sur les agents publics et les usagers du service public.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Fondements juridiques",
        points: [
          "La laïcité est un principe constitutionnel affirmé dès l'article 1er de la Constitution de 1958.",
          "La loi du 9 décembre 1905 organise la séparation des Églises et de l'État.",
          "Elle garantit la liberté de conscience et le libre exercice des cultes dans le respect de l'ordre public.",
        ],
      },
      {
        titre: "Obligations des agents publics",
        points: [
          "Les agents publics doivent respecter une stricte neutralité dans l'exercice de leurs fonctions, sans manifester leurs convictions religieuses.",
          "Cette obligation vaut quel que soit le niveau hiérarchique ou le grade de l'agent.",
          "Elle s'applique aussi aux agents contractuels et aux collaborateurs occasionnels du service public.",
        ],
      },
      {
        titre: "Situation des usagers",
        points: [
          "Les usagers du service public conservent en principe leur liberté de conscience et peuvent exprimer leurs convictions religieuses.",
          "Des restrictions existent toutefois pour certains usagers, notamment les élèves des écoles, collèges et lycées publics.",
          "Le service public doit rester impartial et ne favoriser aucun culte.",
        ],
      },
    ],
    reperes: [
      "Article 1er de la Constitution du 4 octobre 1958",
      "Loi du 9 décembre 1905 sur la séparation des Églises et de l'État",
      "Loi du 15 mars 2004 sur les signes religieux à l'école",
    ],
    aRetenir: [
      "La laïcité impose une neutralité stricte aux agents publics, pas aux usagers en général.",
      "Elle garantit à la fois la liberté de culte et la neutralité de l'État.",
      "Elle figure parmi les principes fondamentaux évoqués lors des entretiens de jury.",
    ],
    pieges: [
      "Ne pas confondre l'obligation de neutralité des agents avec celle, plus limitée, des usagers.",
      "La laïcité n'est pas une hostilité aux religions, mais une séparation des sphères publique et religieuse.",
      "Un agent contractuel est soumis à la même obligation de neutralité qu'un titulaire.",
    ],
    phraseJury:
      "La laïcité, principe constitutionnel depuis 1958 et organisée par la loi de 1905, impose aux agents publics une stricte neutralité tout en garantissant aux usagers la liberté de conscience. En tant qu'agent public, je m'engage à ne manifester aucune conviction religieuse dans l'exercice de mes fonctions.",
    questionsJury: [
      { question: "Quel texte fondateur organise la laïcité en France ?", reponse: "La loi du 9 décembre 1905 sur la séparation des Églises et de l'État." },
      { question: "Un agent public peut-il porter un signe religieux au travail ?", reponse: "Non, l'obligation de neutralité l'interdit dans l'exercice des fonctions." },
      { question: "Les usagers sont-ils soumis à la même obligation ?", reponse: "Non, sauf exceptions comme les élèves du primaire et du secondaire public." },
      { question: "La laïcité est-elle un principe constitutionnel ?", reponse: "Oui, elle figure à l'article 1er de la Constitution." },
    ],
    ultraMemo: "Neutralité de l'agent, liberté de l'usager.",
  },
  {
    id: "fond-hierarchie-des-normes",
    title: "La hiérarchie des normes",
    theme: "Institutions et organisation territoriale",
    resume:
      "L'ordonnancement des textes juridiques, de la Constitution aux actes administratifs, et le contrôle de leur conformité.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "La pyramide des normes",
        points: [
          "La Constitution occupe le sommet, avec le bloc de constitutionnalité qui comprend son préambule et les textes qu'il vise.",
          "Viennent ensuite les traités internationaux et le droit de l'Union européenne, puis la loi votée par le Parlement.",
          "Les règlements, décrets et arrêtés, sont subordonnés à la loi et doivent la respecter.",
          "Les actes administratifs individuels ferment la pyramide et doivent respecter l'ensemble des normes supérieures.",
        ],
      },
      {
        titre: "Les contrôles associés",
        points: [
          "Le contrôle de constitutionnalité est exercé par le Conseil constitutionnel, a priori ou par question prioritaire de constitutionnalité.",
          "Le contrôle de conventionnalité vérifie la compatibilité de la loi avec les traités internationaux.",
          "Le contrôle de légalité vérifie la conformité des actes administratifs aux normes supérieures, notamment devant le juge administratif.",
        ],
      },
      {
        titre: "Conséquences pour l'administration locale",
        points: [
          "Une délibération ou un arrêté municipal ne peut légalement contredire une loi ou un décret.",
          "Le préfet exerce un contrôle de légalité a posteriori sur les actes des collectivités territoriales.",
          "Un acte illégal peut être annulé par le juge administratif ou retiré par l'autorité qui l'a pris.",
        ],
      },
    ],
    reperes: [
      "Théorie de la hiérarchie des normes formulée par Hans Kelsen",
      "Question prioritaire de constitutionnalité instaurée en 2008, en vigueur depuis 2010",
      "Bloc de constitutionnalité : Constitution de 1958, préambule de 1946, Déclaration de 1789, Charte de l'environnement de 2004",
    ],
    aRetenir: [
      "Chaque norme doit respecter celles qui lui sont supérieures dans la pyramide.",
      "Le contrôle de légalité des actes locaux est assuré par le préfet et le juge administratif.",
      "La question prioritaire de constitutionnalité permet de contester une loi déjà en vigueur.",
    ],
    pieges: [
      "Ne pas confondre contrôle de constitutionnalité et contrôle de conventionnalité, qui relèvent de logiques différentes.",
      "Un décret ne peut jamais contredire une loi, même s'il en précise les modalités d'application.",
      "Le contrôle de légalité du préfet n'est pas un contrôle d'opportunité.",
    ],
    phraseJury:
      "La hiérarchie des normes organise l'ordre juridique de la Constitution jusqu'aux actes administratifs individuels, chaque norme devant respecter celles qui lui sont supérieures. Dans mes fonctions, je veillerai à ce que tout acte préparé respecte cette hiérarchie, notamment la loi et le règlement applicables.",
    questionsJury: [
      { question: "Quelle norme est au sommet de la hiérarchie ?", reponse: "La Constitution et le bloc de constitutionnalité." },
      { question: "Qui contrôle la légalité des actes des collectivités ?", reponse: "Le préfet, a posteriori, et le juge administratif en cas de recours." },
      { question: "Qu'est-ce que la question prioritaire de constitutionnalité ?", reponse: "Un mécanisme permettant de contester la conformité d'une loi en vigueur à la Constitution." },
      { question: "Un règlement peut-il déroger à une loi ?", reponse: "Non, il lui est subordonné et doit la respecter." },
    ],
    ultraMemo: "Constitution, traités, loi, règlement, acte individuel.",
  },
  {
    id: "fond-principe-de-continuite",
    title: "Le principe de continuité",
    theme: "Action publique et services",
    resume:
      "Obligation pour le service public de fonctionner sans interruption et ses conséquences sur le droit de grève des agents publics.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Contenu du principe",
        points: [
          "Le service public doit assurer ses missions de façon régulière et continue, sans interruption injustifiée.",
          "Il fait partie des trois lois de Rolland aux côtés de l'égalité et de la mutabilité.",
          "Il a été reconnu comme un principe de valeur constitutionnelle.",
        ],
      },
      {
        titre: "Encadrement du droit de grève",
        points: [
          "Le droit de grève est un droit constitutionnel, mais il doit se concilier avec la continuité du service public.",
          "Certains services, comme le contrôle aérien, les hôpitaux ou les transports, sont soumis à un service minimum.",
          "Un préavis de grève est obligatoire dans la fonction publique, en principe cinq jours francs avant le début du mouvement.",
        ],
      },
      {
        titre: "Application aux collectivités locales",
        points: [
          "Les communes doivent organiser un service minimum d'accueil dans les écoles en cas de grève des enseignants.",
          "Un agent territorial gréviste subit une retenue sur traitement proportionnelle à la durée de l'absence.",
          "La continuité justifie aussi des mesures de réquisition dans des circonstances exceptionnelles.",
        ],
      },
    ],
    reperes: [
      "Décision du Conseil constitutionnel du 25 juillet 1979",
      "Préavis de grève : cinq jours francs minimum dans la fonction publique",
      "Loi sur le service minimum d'accueil dans les écoles : 20 août 2008",
    ],
    aRetenir: [
      "La continuité concilie le fonctionnement du service public avec le droit de grève.",
      "Le service minimum s'impose dans certains secteurs sensibles.",
      "La grève dans la fonction publique doit être précédée d'un préavis.",
    ],
    pieges: [
      "Le droit de grève n'est pas supprimé par la continuité, il est seulement encadré.",
      "Toutes les grèves ne nécessitent pas un service minimum, seulement certains secteurs définis par la loi.",
      "La retenue pour absence de service fait est proportionnelle et ne constitue pas une sanction disciplinaire.",
    ],
    phraseJury:
      "Le principe de continuité impose au service public de fonctionner sans interruption, ce qui explique l'encadrement légal du droit de grève dans la fonction publique par un préavis et parfois un service minimum. C'est un des principes fondamentaux que j'aurai à respecter dans l'exercice de mes missions.",
    questionsJury: [
      { question: "Le droit de grève est-il incompatible avec la continuité ?", reponse: "Non, les deux se concilient par un encadrement légal comme le préavis." },
      { question: "Quelle est la durée du préavis de grève dans la fonction publique ?", reponse: "Cinq jours francs avant le début du mouvement." },
      { question: "Quelles conséquences pour un agent gréviste sur son traitement ?", reponse: "Une retenue proportionnelle à la durée de l'absence de service fait." },
      { question: "Le service minimum d'accueil concerne-t-il les communes ?", reponse: "Oui, il est organisé par les communes dans les écoles en cas de grève des enseignants." },
    ],
    ultraMemo: "Le service continue, la grève s'encadre.",
  },
  {
    id: "fond-impartialite",
    title: "L'impartialité",
    theme: "Statut et carrière",
    resume:
      "Obligation déontologique pour l'agent public de traiter les situations sans parti pris ni conflit d'intérêts, distincte de la neutralité.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Définition et cadre légal",
        points: [
          "L'impartialité impose à l'agent public de traiter chaque situation en écartant tout parti pris personnel.",
          "Elle est consacrée à l'article L. 121-2 du code général de la fonction publique.",
          "Elle est liée mais distincte de la neutralité et de la probité, qui sont deux autres obligations déontologiques.",
        ],
      },
      {
        titre: "Prévention des conflits d'intérêts",
        points: [
          "Un conflit d'intérêts naît lorsqu'un intérêt public interfère avec un intérêt public ou privé de l'agent.",
          "L'agent doit se déporter, c'est-à-dire s'abstenir de traiter un dossier, lorsqu'il est concerné personnellement.",
          "Les déclarations d'intérêts et de patrimoine concernent certains emplois exposés, notamment de direction.",
        ],
      },
      {
        titre: "Sanctions en cas de manquement",
        points: [
          "Le manquement à l'impartialité peut engager la responsabilité disciplinaire de l'agent.",
          "Il peut aussi caractériser une prise illégale d'intérêts, infraction pénale prévue par le code pénal.",
          "Le juge administratif contrôle l'impartialité des décisions administratives, notamment en matière de commissions.",
        ],
      },
    ],
    reperes: [
      "Article L. 121-2 du code général de la fonction publique",
      "Article 432-12 du code pénal sur la prise illégale d'intérêts",
      "Loi du 20 avril 2016 relative à la déontologie des fonctionnaires",
    ],
    aRetenir: [
      "L'impartialité impose l'absence de parti pris dans le traitement des dossiers.",
      "Le déport est l'outil concret pour prévenir un conflit d'intérêts.",
      "La prise illégale d'intérêts est une infraction pénale distincte de la faute disciplinaire.",
    ],
    pieges: [
      "Ne pas confondre impartialité et neutralité : la première vise l'absence de parti pris, la seconde l'absence d'opinion affichée.",
      "Un conflit d'intérêts n'est pas nécessairement un acte illégal, mais il doit être prévenu.",
      "Toutes les fonctions n'exigent pas une déclaration d'intérêts, seuls certains emplois exposés.",
    ],
    phraseJury:
      "L'impartialité est l'obligation pour l'agent public de traiter les situations sans favoritisme ni parti pris, en se déportant lorsqu'un intérêt personnel entre en jeu. Cette exigence me paraît essentielle pour garantir la confiance des usagers dans l'action publique.",
    questionsJury: [
      { question: "Que signifie se déporter ?", reponse: "S'abstenir de traiter un dossier dans lequel on a un intérêt personnel." },
      { question: "Quelle différence entre impartialité et neutralité ?", reponse: "L'impartialité vise l'absence de parti pris, la neutralité l'absence d'opinion manifestée dans le service." },
      { question: "Quelle infraction pénale sanctionne un manquement grave à l'impartialité ?", reponse: "La prise illégale d'intérêts, prévue à l'article 432-12 du code pénal." },
      { question: "Qui doit établir une déclaration d'intérêts ?", reponse: "Les agents occupant certains emplois exposés, notamment de direction." },
    ],
    ultraMemo: "Pas de parti pris, pas de conflit d'intérêts.",
  },
  {
    id: "fond-cumul-des-mandats",
    title: "Le cumul des mandats",
    theme: "Institutions et organisation territoriale",
    resume:
      "Règles limitant le cumul de plusieurs mandats électoraux et l'exercice simultané d'un mandat parlementaire avec des fonctions exécutives locales.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Principe général",
        points: [
          "Un élu ne peut, en principe, détenir plus d'un mandat parmi une liste limitative fixée par la loi.",
          "L'objectif est de favoriser le renouvellement des élus et l'exercice effectif des fonctions.",
          "Les règles diffèrent selon qu'il s'agit d'un mandat parlementaire ou d'un mandat local.",
        ],
      },
      {
        titre: "Interdiction pour les parlementaires",
        points: [
          "Depuis les lois organiques de 2014, un député ou un sénateur ne peut plus exercer de fonction exécutive locale, comme maire, président de conseil départemental ou de conseil régional.",
          "Cette interdiction est entrée en vigueur à compter des élections de 2017.",
          "Un parlementaire peut toutefois conserver un mandat de conseiller municipal, départemental ou régional simple.",
        ],
      },
      {
        titre: "Cumul entre mandats locaux",
        points: [
          "Un élu local ne peut cumuler qu'un nombre limité de mandats, selon des règles fixées par le code électoral.",
          "Le cumul de fonctions exécutives locales, comme maire et président d'intercommunalité, reste possible.",
          "Le non-respect des règles de cumul entraîne la démission d'office du mandat acquis en dernier.",
        ],
      },
    ],
    reperes: [
      "Lois organique et ordinaire du 14 février 2014 sur le non-cumul des mandats",
      "Entrée en vigueur pour les parlementaires : élections de 2017",
      "Code électoral : dispositions relatives au cumul des mandats",
    ],
    aRetenir: [
      "Les parlementaires ne peuvent plus exercer de fonction exécutive locale depuis 2017.",
      "Le cumul entre plusieurs mandats locaux reste possible dans certaines limites.",
      "L'objectif du non-cumul est de favoriser le renouvellement démocratique.",
    ],
    pieges: [
      "Un parlementaire peut rester simple conseiller municipal, ce n'est pas une interdiction totale de mandat local.",
      "Le cumul entre maire et président d'intercommunalité n'est pas interdit.",
      "Ne pas confondre limitation du cumul des mandats et limitation du cumul dans le temps, comme les deux mandats consécutifs pour certains exécutifs.",
    ],
    phraseJury:
      "Depuis les lois de 2014 entrées en vigueur en 2017, un député ou un sénateur ne peut plus exercer une fonction exécutive locale comme maire ou président de département. Cette réforme vise à limiter la concentration des pouvoirs et à favoriser le renouvellement des responsables politiques.",
    questionsJury: [
      { question: "Depuis quand un parlementaire ne peut-il plus être maire ?", reponse: "Depuis les élections de 2017, en application des lois de 2014." },
      { question: "Un parlementaire peut-il rester conseiller municipal ?", reponse: "Oui, seule la fonction exécutive locale est interdite, pas le mandat simple." },
      { question: "Un maire peut-il aussi être président d'intercommunalité ?", reponse: "Oui, le cumul de fonctions exécutives locales n'est pas interdit." },
      { question: "Que se passe-t-il en cas de cumul irrégulier ?", reponse: "L'élu démissionne d'office du mandat acquis le plus récemment." },
    ],
    ultraMemo: "Un parlementaire, plus de mairie depuis 2017.",
  },
  {
    id: "fond-modes-de-gestion-du-service-public",
    title: "Les modes de gestion du service public",
    theme: "Action publique et services",
    resume:
      "Panorama des modes d'exploitation d'un service public local : régie, délégation de service public, société publique locale, marché public.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "La gestion directe : la régie",
        points: [
          "La régie permet à la collectivité de gérer elle-même le service avec ses propres moyens humains et matériels.",
          "La régie simple ne dispose pas de personnalité juridique ni d'autonomie financière propre.",
          "La régie dotée de l'autonomie financière ou de la personnalité morale gère un budget distinct, par exemple pour l'eau ou les transports.",
        ],
      },
      {
        titre: "La délégation de service public",
        points: [
          "La délégation confie l'exploitation du service à un opérateur, public ou privé, qui se rémunère substantiellement sur les résultats de l'exploitation.",
          "Elle prend la forme d'une concession, d'un affermage ou d'une régie intéressée.",
          "Elle est soumise à une procédure de publicité et de mise en concurrence encadrée par le code de la commande publique.",
        ],
      },
      {
        titre: "La société publique locale",
        points: [
          "La SPL est détenue à cent pour cent par des collectivités actionnaires, qui exercent sur elle un contrôle analogue à celui exercé sur leurs propres services.",
          "Elle permet de confier des missions sans mise en concurrence, dans le cadre du contrat in house.",
          "Elle intervient exclusivement pour le compte de ses collectivités actionnaires, sur leur territoire.",
        ],
      },
      {
        titre: "Le marché public",
        points: [
          "Le marché public rémunère un prestataire pour une prestation déterminée, sans transfert du risque d'exploitation.",
          "Il se distingue de la délégation de service public par le mode de rémunération et le partage du risque.",
          "Il est soumis aux règles de mise en concurrence du code de la commande publique.",
        ],
      },
    ],
    reperes: [
      "Loi Sapin du 29 janvier 1993 sur les délégations de service public",
      "Loi du 28 mai 2010 créant les sociétés publiques locales",
      "Code de la commande publique entré en vigueur le 1er avril 2019",
    ],
    aRetenir: [
      "La régie est une gestion directe, la délégation une gestion confiée à un tiers rémunéré sur les résultats.",
      "La SPL permet une gestion in house sans mise en concurrence, réservée aux seuls actionnaires publics.",
      "Le marché public se distingue de la délégation par l'absence de transfert du risque d'exploitation.",
    ],
    pieges: [
      "Ne pas confondre affermage, où l'infrastructure est déjà construite, et concession, où le délégataire finance souvent les investissements.",
      "La SPL ne peut travailler que pour ses actionnaires publics, jamais pour des tiers.",
      "Un marché public n'implique pas de rémunération liée aux résultats d'exploitation, contrairement à la délégation.",
    ],
    phraseJury:
      "Une collectivité peut gérer un service public en régie, le déléguer par concession ou affermage, le confier à une société publique locale en interne, ou recourir à un marché public pour une prestation ponctuelle. Le choix dépend du niveau de risque que la collectivité souhaite transférer et de sa maîtrise directe du service.",
    questionsJury: [
      { question: "Quelle est la différence entre concession et affermage ?", reponse: "Dans la concession le délégataire finance souvent les infrastructures, dans l'affermage il exploite des infrastructures déjà existantes." },
      { question: "Une société publique locale peut-elle travailler pour des communes non actionnaires ?", reponse: "Non, elle n'intervient que pour le compte de ses collectivités actionnaires." },
      { question: "Qu'est-ce qui distingue un marché public d'une délégation de service public ?", reponse: "L'absence de transfert du risque d'exploitation et le mode de rémunération par un prix." },
      { question: "La régie a-t-elle toujours une personnalité juridique propre ?", reponse: "Non, seule la régie dotée de l'autonomie financière ou de la personnalité morale en dispose." },
    ],
    ultraMemo: "Régie : je fais. DSP : je délègue. SPL : je fais faire par ma filiale. Marché : j'achète.",
  },
  {
    id: "fond-retrait-et-abrogation-dun-acte-administratif",
    title: "Retrait et abrogation d'un acte administratif",
    theme: "Institutions et organisation territoriale",
    resume:
      "Distinction entre la disparition rétroactive et la disparition pour l'avenir d'un acte administratif, selon qu'il crée ou non des droits.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Définitions",
        points: [
          "Le retrait fait disparaître l'acte de manière rétroactive, comme s'il n'avait jamais existé.",
          "L'abrogation fait disparaître l'acte seulement pour l'avenir, sans remettre en cause ses effets passés.",
          "Ces deux opérations peuvent émaner de l'administration elle-même ou résulter d'une décision du juge.",
        ],
      },
      {
        titre: "Les actes non créateurs de droits",
        points: [
          "Un acte non créateur de droits, comme un règlement ou une mesure d'organisation interne, peut être retiré ou abrogé à tout moment.",
          "L'administration doit toutefois abroger un acte réglementaire devenu illégal, même en l'absence de demande.",
          "Cette obligation d'abroger résulte de la jurisprudence Alitalia du Conseil d'État.",
        ],
      },
      {
        titre: "Les actes créateurs de droits",
        points: [
          "Un acte créateur de droits, comme une autorisation individuelle, ne peut être retiré que s'il est illégal et dans un délai de quatre mois suivant son édiction.",
          "Ce délai résulte de la loi du 12 avril 2000 et est repris par le code des relations entre le public et l'administration.",
          "L'abrogation d'un acte créateur de droits légal n'est possible que dans les cas prévus par les textes ou à la demande du bénéficiaire.",
        ],
      },
    ],
    reperes: [
      "Délai de retrait des actes créateurs de droits illégaux : quatre mois",
      "Jurisprudence Ternon du Conseil d'État, 26 octobre 2001",
      "Jurisprudence Alitalia sur l'obligation d'abroger un règlement illégal, 3 février 1989",
      "Code des relations entre le public et l'administration, articles L. 240-1 et suivants",
    ],
    aRetenir: [
      "Le retrait est rétroactif, l'abrogation ne vaut que pour l'avenir.",
      "Un acte créateur de droits ne peut être retiré que s'il est illégal et dans le délai de quatre mois.",
      "L'administration doit obligatoirement abroger un règlement devenu illégal.",
    ],
    pieges: [
      "Ne pas confondre le délai de retrait de quatre mois avec le délai de recours contentieux de deux mois.",
      "Un acte créateur de droits légal ne peut jamais être retiré, seulement éventuellement abrogé dans des cas limités.",
      "L'abrogation d'un acte non créateur de droits n'est soumise à aucun délai particulier.",
    ],
    phraseJury:
      "Le retrait supprime un acte de manière rétroactive alors que l'abrogation ne joue que pour l'avenir, et le régime applicable diffère selon que l'acte a créé des droits ou non. Un acte créateur de droits illégal ne peut être retiré que dans le délai de quatre mois suivant son édiction, conformément à la jurisprudence Ternon.",
    questionsJury: [
      { question: "Quelle est la différence entre retrait et abrogation ?", reponse: "Le retrait est rétroactif, l'abrogation ne produit d'effet que pour l'avenir." },
      { question: "Dans quel délai peut-on retirer un acte créateur de droits illégal ?", reponse: "Dans un délai de quatre mois suivant son édiction." },
      { question: "L'administration doit-elle abroger un règlement devenu illégal ?", reponse: "Oui, en vertu de la jurisprudence Alitalia, même sans demande." },
      { question: "Peut-on retirer un acte créateur de droits légal ?", reponse: "Non, sauf disposition contraire ou demande du bénéficiaire." },
    ],
    ultraMemo: "Retrait = passé effacé. Abrogation = futur seulement.",
  },
  {
    id: "fond-responsabilite-administrative",
    title: "La responsabilité administrative",
    theme: "Institutions et organisation territoriale",
    resume:
      "Conditions dans lesquelles une personne publique doit réparer les dommages causés par son action, entre faute et absence de faute.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Principe général",
        points: [
          "La responsabilité administrative permet d'indemniser une victime d'un dommage causé par une personne publique ou un service public.",
          "Elle relève de la compétence du juge administratif depuis l'arrêt Blanco de 1873.",
          "Elle suppose la réunion d'un fait générateur, d'un préjudice et d'un lien de causalité entre les deux.",
        ],
      },
      {
        titre: "La responsabilité pour faute",
        points: [
          "La faute simple suffit pour engager la responsabilité dans la plupart des activités administratives courantes.",
          "La faute lourde reste exigée dans certains domaines sensibles, comme certaines activités de contrôle ou de secours.",
          "La faute peut être celle du service, dite faute de service, ou celle personnelle à l'agent, dite faute personnelle.",
        ],
      },
      {
        titre: "La responsabilité sans faute",
        points: [
          "Elle s'applique notamment en cas de dommages causés par des travaux publics à des tiers.",
          "Elle repose aussi sur la rupture d'égalité devant les charges publiques, pour des dommages exceptionnels.",
          "Elle protège également les collaborateurs occasionnels du service public victimes d'un accident.",
        ],
      },
    ],
    reperes: [
      "Arrêt Blanco, tribunal des conflits, 8 février 1873",
      "Faute personnelle et faute de service : distinction issue de la jurisprudence Pelletier de 1873",
      "Responsabilité sans faute pour les dommages de travaux publics aux tiers",
    ],
    aRetenir: [
      "La responsabilité administrative suppose un fait générateur, un préjudice et un lien de causalité.",
      "La faute simple est la règle, la faute lourde reste l'exception dans certains domaines.",
      "La responsabilité sans faute protège notamment les tiers victimes de travaux publics.",
    ],
    pieges: [
      "Ne pas confondre faute de service, qui engage l'administration, et faute personnelle, qui engage l'agent lui-même.",
      "La faute lourde n'est plus exigée dans la majorité des contentieux administratifs, contrairement à une idée reçue.",
      "La responsabilité sans faute n'est pas systématique, elle est réservée à des hypothèses précises.",
    ],
    phraseJury:
      "Depuis l'arrêt Blanco de 1873, le juge administratif indemnise les dommages causés par l'action publique, en principe pour faute simple, mais parfois sans faute comme pour les travaux publics. Cette distinction entre faute de service et faute personnelle permet aussi de déterminer qui, de l'administration ou de l'agent, doit répondre du dommage.",
    questionsJury: [
      { question: "Quel arrêt fonde la responsabilité administrative ?", reponse: "L'arrêt Blanco du tribunal des conflits, en 1873." },
      { question: "Quelle est la différence entre faute simple et faute lourde ?", reponse: "La faute lourde exige une gravité particulière, exigée seulement dans certains domaines sensibles." },
      { question: "Qu'est-ce que la responsabilité sans faute ?", reponse: "Une responsabilité engagée sans qu'une faute soit démontrée, par exemple pour les travaux publics." },
      { question: "Quelle différence entre faute de service et faute personnelle ?", reponse: "La faute de service engage l'administration, la faute personnelle engage l'agent à titre individuel." },
    ],
    ultraMemo: "Faute simple, sauf exception ; parfois même sans faute.",
  },
  {
    id: "fond-domaine-public-et-domaine-prive",
    title: "Domaine public et domaine privé",
    theme: "Institutions et organisation territoriale",
    resume:
      "Distinction des deux catégories de biens des personnes publiques et des régimes juridiques très différents qui s'y appliquent.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Le domaine public",
        points: [
          "Un bien appartient au domaine public s'il est la propriété d'une personne publique et affecté à l'usage direct du public ou à un service public avec aménagement indispensable.",
          "Le domaine public est inaliénable, ce qui interdit sa cession sans déclassement préalable.",
          "Il est aussi imprescriptible : nul ne peut en devenir propriétaire par la prescription acquisitive.",
        ],
      },
      {
        titre: "Le domaine privé",
        points: [
          "Le domaine privé regroupe les biens des personnes publiques non affectés à l'usage direct du public ni à un service public aménagé.",
          "Il est géré selon des règles proches du droit privé, notamment pour les baux et les cessions.",
          "Les logements de fonction ou les réserves foncières relèvent généralement du domaine privé.",
        ],
      },
      {
        titre: "Passage d'un domaine à l'autre",
        points: [
          "Le déclassement fait sortir un bien du domaine public pour le faire entrer dans le domaine privé.",
          "Le classement, à l'inverse, fait entrer un bien dans le domaine public.",
          "Le code général de la propriété des personnes publiques encadre ces opérations.",
        ],
      },
    ],
    reperes: [
      "Code général de la propriété des personnes publiques, entré en vigueur en 2006",
      "Critères du domaine public : propriété publique, affectation à l'usage du public ou au service public avec aménagement indispensable",
      "Principes d'inaliénabilité et d'imprescriptibilité du domaine public",
    ],
    aRetenir: [
      "Le domaine public est inaliénable et imprescriptible, contrairement au domaine privé.",
      "L'affectation à l'usage du public ou à un service public aménagé caractérise le domaine public.",
      "Le déclassement est nécessaire avant toute cession d'un bien du domaine public.",
    ],
    pieges: [
      "Un simple terrain non aménagé appartenant à une commune ne relève pas automatiquement du domaine public.",
      "L'inaliénabilité n'interdit pas toute utilisation privative, qui reste possible par autorisation d'occupation temporaire.",
      "Ne pas confondre déclassement, qui fait sortir du domaine public, et désaffectation, qui est souvent son préalable matériel.",
    ],
    phraseJury:
      "Un bien relève du domaine public s'il appartient à une personne publique et sert à l'usage direct du public ou à un service public aménagé, ce qui le rend inaliénable et imprescriptible. Le domaine privé, à l'inverse, obéit à des règles proches du droit privé et peut être cédé plus librement.",
    questionsJury: [
      { question: "Quels sont les critères du domaine public ?", reponse: "Propriété publique et affectation à l'usage du public ou à un service public aménagé." },
      { question: "Peut-on vendre un bien du domaine public ?", reponse: "Non, sauf déclassement préalable qui le fait entrer dans le domaine privé." },
      { question: "Qu'est-ce que l'imprescriptibilité ?", reponse: "L'impossibilité d'acquérir un bien du domaine public par la prescription acquisitive." },
      { question: "Un logement de fonction relève-t-il du domaine public ?", reponse: "Non, il relève en général du domaine privé de la collectivité." },
    ],
    ultraMemo: "Domaine public : inaliénable, imprescriptible.",
  },
  {
    id: "fond-le-conseil-detat",
    title: "Le Conseil d'État",
    theme: "Institutions et organisation territoriale",
    resume:
      "Institution au double rôle de conseiller du Gouvernement et de juge suprême de l'ordre administratif.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Une double fonction",
        points: [
          "Le Conseil d'État est à la fois conseiller juridique du Gouvernement et juge administratif suprême.",
          "En tant que conseiller, il rend des avis obligatoires sur les projets de loi et certains décrets avant leur adoption.",
          "En tant que juge, il est la plus haute juridiction de l'ordre administratif, distinct de l'ordre judiciaire.",
        ],
      },
      {
        titre: "Sa fonction juridictionnelle",
        points: [
          "Il statue en premier et dernier ressort sur certains recours, notamment contre les décrets.",
          "Il est juge de cassation des arrêts rendus par les cours administratives d'appel.",
          "Il peut être saisi en référé pour des mesures d'urgence, comme le référé-liberté.",
        ],
      },
      {
        titre: "Organisation",
        points: [
          "Le Conseil d'État est présidé par le vice-président, le Premier ministre en étant le président de droit.",
          "Il comprend des sections administratives consultatives et une section du contentieux.",
          "Ses membres sont pour partie recrutés par la voie de l'École nationale d'administration devenue l'Institut national du service public, et pour partie au tour extérieur.",
        ],
      },
    ],
    reperes: [
      "Créé en 1799 sous le Consulat",
      "Compétent en premier et dernier ressort pour certains recours contre les décrets",
      "Juge de cassation des cours administratives d'appel",
    ],
    aRetenir: [
      "Le Conseil d'État a une double casquette de conseiller et de juge.",
      "Il est le sommet de l'ordre juridictionnel administratif.",
      "Son avis est obligatoire sur les projets de loi avant leur passage en conseil des ministres.",
    ],
    pieges: [
      "Ne pas confondre le Conseil d'État avec le Conseil constitutionnel, qui a des fonctions différentes.",
      "L'avis du Conseil d'État sur un projet de loi n'est pas contraignant sur le fond pour le Gouvernement.",
      "Le Conseil d'État ne juge pas les litiges entre particuliers, qui relèvent de l'ordre judiciaire.",
    ],
    phraseJury:
      "Le Conseil d'État exerce une double fonction : il conseille le Gouvernement sur les projets de texte et il est le juge suprême de l'ordre administratif, statuant notamment en cassation. Créé en 1799, il occupe une place centrale dans le contrôle de l'action administrative.",
    questionsJury: [
      { question: "Quelles sont les deux grandes fonctions du Conseil d'État ?", reponse: "Conseiller juridique du Gouvernement et juge suprême de l'ordre administratif." },
      { question: "Le Conseil d'État juge-t-il en premier ressort ?", reponse: "Oui, pour certains recours comme ceux contre les décrets." },
      { question: "Quelle est sa fonction de cassation ?", reponse: "Il statue sur les pourvois contre les arrêts des cours administratives d'appel." },
      { question: "L'avis du Conseil d'État sur un projet de loi lie-t-il le Gouvernement ?", reponse: "Non, cet avis est obligatoire mais non contraignant sur le fond." },
    ],
    ultraMemo: "Conseiller du Gouvernement, juge suprême de l'administratif.",
  },
  {
    id: "fond-deliberation-arrete-decision",
    title: "Délibération, arrêté, décision",
    theme: "Institutions et organisation territoriale",
    resume:
      "Distinction des principaux actes juridiques pris par les autorités locales, selon leur auteur et leur portée.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "La délibération",
        points: [
          "La délibération est l'acte pris par un organe collégial, comme le conseil municipal, départemental ou régional.",
          "Elle résulte d'un vote et exprime la décision de l'assemblée délibérante.",
          "Elle peut être réglementaire, si elle fixe des règles générales, ou individuelle, si elle vise une personne déterminée.",
        ],
      },
      {
        titre: "L'arrêté",
        points: [
          "L'arrêté est l'acte pris par une autorité exécutive individuelle, comme le maire, le président d'un exécutif local, ou le préfet.",
          "Il peut être réglementaire, comme un arrêté de circulation, ou individuel, comme un arrêté de nomination.",
          "Il doit être pris dans le respect des délibérations de l'assemblée qui l'habilite parfois à agir.",
        ],
      },
      {
        titre: "La décision",
        points: [
          "La décision est un terme plus général désignant tout acte administratif produisant des effets de droit.",
          "Elle peut prendre la forme d'une délibération, d'un arrêté, ou d'un acte plus informel comme une décision du maire dans le cadre de délégations reçues du conseil municipal.",
          "Toute décision doit être motivée lorsque la loi l'exige, notamment pour les décisions défavorables à un administré.",
        ],
      },
    ],
    reperes: [
      "Code général des collectivités territoriales, articles relatifs aux délibérations et arrêtés",
      "Loi du 11 juillet 1979 sur la motivation des actes administratifs",
      "Délégations du conseil municipal au maire prévues par l'article L. 2122-22 du CGCT",
    ],
    aRetenir: [
      "La délibération émane d'un organe collégial, l'arrêté d'une autorité individuelle.",
      "La décision est le terme générique englobant délibérations, arrêtés et autres actes administratifs.",
      "Le maire peut prendre des décisions dans le cadre de délégations reçues du conseil municipal.",
    ],
    pieges: [
      "Un maire ne prend pas de délibération, mais un arrêté ou une décision.",
      "Toutes les délibérations ne sont pas réglementaires, certaines sont individuelles.",
      "Une décision prise par délégation doit être rendue compte au conseil municipal lors de sa plus proche réunion.",
    ],
    phraseJury:
      "La délibération émane d'un organe collégial comme le conseil municipal, alors que l'arrêté est pris par une autorité individuelle comme le maire, la décision étant le terme générique regroupant ces différents actes. Cette distinction est essentielle pour identifier qui est compétent pour agir dans une collectivité.",
    questionsJury: [
      { question: "Qui prend une délibération ?", reponse: "Un organe collégial, comme le conseil municipal, départemental ou régional." },
      { question: "Qui prend un arrêté ?", reponse: "Une autorité exécutive individuelle, comme le maire ou le préfet." },
      { question: "Le maire peut-il prendre des décisions seul ?", reponse: "Oui, dans le cadre de délégations reçues du conseil municipal." },
      { question: "Une délibération peut-elle être individuelle ?", reponse: "Oui, par exemple pour l'attribution d'une subvention à une association nommée." },
    ],
    ultraMemo: "Collégial : délibération. Individuel : arrêté.",
  },
  {
    id: "fond-la-loi-alur",
    title: "La loi ALUR",
    theme: "Action publique et services",
    resume:
      "Loi du 24 mars 2014 pour l'accès au logement et un urbanisme rénové, qui réforme les rapports locatifs et les documents d'urbanisme.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Objectifs de la loi",
        points: [
          "La loi ALUR vise à faciliter l'accès au logement et à réguler les rapports entre bailleurs et locataires.",
          "Elle entend aussi moderniser les règles d'urbanisme pour lutter contre l'étalement urbain.",
          "Elle a été portée par la ministre du logement Cécile Duflot.",
        ],
      },
      {
        titre: "Mesures relatives au logement",
        points: [
          "Elle encadre les loyers dans les zones tendues et impose un contrat de location type.",
          "Elle crée la garantie universelle des loyers, dispositif finalement abandonné dans sa version initiale.",
          "Elle renforce la lutte contre l'habitat indigne et les copropriétés dégradées.",
        ],
      },
      {
        titre: "Mesures relatives à l'urbanisme",
        points: [
          "Elle transfère la compétence en matière de plan local d'urbanisme aux intercommunalités, sauf opposition d'une minorité de blocage des communes.",
          "Elle supprime progressivement le coefficient d'occupation des sols et la taille minimale des terrains constructibles.",
          "Elle renforce les outils de lutte contre la consommation excessive d'espaces naturels et agricoles.",
        ],
      },
    ],
    reperes: [
      "Loi du 24 mars 2014 pour l'accès au logement et un urbanisme rénové",
      "Transfert du plan local d'urbanisme à l'échelle intercommunale, sauf minorité de blocage",
      "Portée par la ministre Cécile Duflot",
    ],
    aRetenir: [
      "La loi ALUR touche à la fois le droit du logement et le droit de l'urbanisme.",
      "Elle favorise le PLU intercommunal, appelé PLUI, sauf opposition qualifiée des communes.",
      "Elle a renforcé l'encadrement des loyers dans les zones tendues.",
    ],
    pieges: [
      "La garantie universelle des loyers prévue par la loi n'a jamais été pleinement mise en œuvre.",
      "Le transfert du PLU à l'intercommunalité n'est pas automatique s'il existe une minorité de blocage suffisante de communes.",
      "Ne pas confondre la loi ALUR avec la loi SRU, qui est antérieure et porte sur la mixité sociale du logement.",
    ],
    phraseJury:
      "La loi ALUR du 24 mars 2014 a réformé à la fois les rapports locatifs, avec l'encadrement des loyers, et l'urbanisme, en favorisant le transfert du plan local d'urbanisme à l'intercommunalité. C'est un texte de référence pour comprendre l'évolution des politiques locales de l'habitat.",
    questionsJury: [
      { question: "Que signifie ALUR ?", reponse: "Accès au logement et urbanisme rénové." },
      { question: "Quelle compétence d'urbanisme la loi ALUR transfère-t-elle ?", reponse: "Le plan local d'urbanisme, transféré en principe à l'intercommunalité." },
      { question: "Qu'est-ce que la minorité de blocage prévue par la loi ?", reponse: "Un nombre suffisant de communes s'opposant au transfert du PLU à l'intercommunalité." },
      { question: "La garantie universelle des loyers a-t-elle été appliquée ?", reponse: "Non, elle a été abandonnée dans sa version initiale." },
    ],
    ultraMemo: "ALUR : logement encadré, urbanisme intercommunal.",
  },
  {
    id: "fond-le-referendum-dinitiative-partagee",
    title: "Le référendum d'initiative partagée",
    theme: "Institutions et organisation territoriale",
    resume:
      "Procédure permettant à des parlementaires et des citoyens de déclencher conjointement un référendum, encadrée par l'article 11 de la Constitution.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Origine et fondement",
        points: [
          "Le référendum d'initiative partagée a été introduit par la révision constitutionnelle du 23 juillet 2008.",
          "Il figure à l'article 11 de la Constitution, comme une modalité particulière du référendum législatif.",
          "Sa mise en œuvre pratique a nécessité une loi organique adoptée en 2013.",
        ],
      },
      {
        titre: "Conditions de déclenchement",
        points: [
          "L'initiative doit être soutenue par un cinquième des membres du Parlement, soit environ 185 parlementaires.",
          "Cette proposition doit ensuite être soutenue par un dixième des électeurs inscrits sur les listes électorales.",
          "Le Conseil constitutionnel contrôle la conformité de la proposition à la Constitution avant l'ouverture de la période de recueil des soutiens.",
        ],
      },
      {
        titre: "Suite de la procédure",
        points: [
          "Si le seuil de soutiens citoyens est atteint, le Parlement doit examiner la proposition de loi.",
          "Si le Parlement ne l'examine pas dans un délai fixé par la loi organique, le Président de la République doit organiser un référendum.",
          "À ce jour, aucun référendum d'initiative partagée n'a encore abouti à une consultation populaire effective en France.",
        ],
      },
    ],
    reperes: [
      "Article 11 de la Constitution, révisé le 23 juillet 2008",
      "Loi organique du 6 décembre 2013 précisant la procédure",
      "Seuils : un cinquième des parlementaires, un dixième des électeurs",
    ],
    aRetenir: [
      "Le référendum d'initiative partagée associe parlementaires et citoyens.",
      "Il nécessite le soutien d'un cinquième des parlementaires puis d'un dixième des électeurs.",
      "Aucun référendum n'a encore été organisé par cette voie à ce jour.",
    ],
    pieges: [
      "Ne pas confondre cette procédure avec le référendum d'initiative citoyenne, qui n'existe pas en droit positif français.",
      "L'initiative parlementaire seule ne suffit pas, le soutien populaire est également nécessaire.",
      "Le Conseil constitutionnel intervient avant le recueil des soutiens, pas seulement après.",
    ],
    phraseJury:
      "Introduit en 2008 à l'article 11 de la Constitution, le référendum d'initiative partagée exige le soutien d'un cinquième des parlementaires puis d'un dixième du corps électoral. À ce jour, aucune initiative n'a permis d'organiser un tel référendum, faute d'atteindre le seuil de soutiens citoyens requis.",
    questionsJury: [
      { question: "Quel article de la Constitution encadre le référendum d'initiative partagée ?", reponse: "L'article 11 de la Constitution." },
      { question: "Combien de parlementaires doivent soutenir l'initiative ?", reponse: "Un cinquième des membres du Parlement, soit environ 185." },
      { question: "Quel pourcentage d'électeurs doit ensuite soutenir la proposition ?", reponse: "Un dixième des électeurs inscrits sur les listes électorales." },
      { question: "Ce référendum a-t-il déjà été organisé en France ?", reponse: "Non, aucune initiative n'a encore atteint les seuils requis." },
    ],
    ultraMemo: "Un cinquième des élus, un dixième des électeurs.",
  },
  {
    id: "fond-le-conseil-constitutionnel",
    title: "Le Conseil constitutionnel",
    theme: "Institutions et organisation territoriale",
    resume:
      "Institution chargée de veiller au respect de la Constitution, notamment par le contrôle de constitutionnalité des lois.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Composition",
        points: [
          "Le Conseil constitutionnel est composé de neuf membres nommés pour neuf ans, non renouvelables, renouvelés par tiers tous les trois ans.",
          "Trois membres sont nommés par le Président de la République, trois par le président de l'Assemblée nationale, trois par le président du Sénat.",
          "Les anciens Présidents de la République sont membres de droit à vie, sauf renonciation.",
        ],
      },
      {
        titre: "Ses missions",
        points: [
          "Il exerce un contrôle de constitutionnalité des lois, a priori avant leur promulgation, et a posteriori par la question prioritaire de constitutionnalité.",
          "Il veille à la régularité de l'élection présidentielle et des référendums, et en proclame les résultats.",
          "Il statue sur les contestations relatives à l'élection des parlementaires.",
        ],
      },
      {
        titre: "La question prioritaire de constitutionnalité",
        points: [
          "Elle permet à tout justiciable de contester la conformité d'une loi déjà en vigueur aux droits et libertés garantis par la Constitution.",
          "Elle est instaurée par la révision constitutionnelle du 23 juillet 2008, en vigueur depuis le 1er mars 2010.",
          "Elle transite par le Conseil d'État ou la Cour de cassation avant d'être éventuellement transmise au Conseil constitutionnel.",
        ],
      },
    ],
    reperes: [
      "Institué par la Constitution du 4 octobre 1958",
      "Neuf membres, mandat de neuf ans non renouvelable",
      "Question prioritaire de constitutionnalité en vigueur depuis le 1er mars 2010",
    ],
    aRetenir: [
      "Le Conseil constitutionnel contrôle la conformité des lois à la Constitution, avant et après leur entrée en vigueur.",
      "Ses neuf membres sont nommés à parts égales par les trois plus hautes autorités de l'État.",
      "La question prioritaire de constitutionnalité permet un contrôle a posteriori depuis 2010.",
    ],
    pieges: [
      "Ne pas confondre le Conseil constitutionnel avec le Conseil d'État, qui est juge administratif.",
      "Les anciens Présidents de la République ne sont pas nommés, ils sont membres de droit.",
      "La question prioritaire de constitutionnalité ne peut être posée directement devant le Conseil constitutionnel, elle transite par une juridiction suprême.",
    ],
    phraseJury:
      "Le Conseil constitutionnel, composé de neuf membres nommés pour neuf ans, veille au respect de la Constitution en contrôlant les lois avant leur promulgation et, depuis 2010, en examinant les questions prioritaires de constitutionnalité. Il exerce également des attributions électorales, notamment pour l'élection présidentielle.",
    questionsJury: [
      { question: "Combien de membres compte le Conseil constitutionnel ?", reponse: "Neuf membres, plus les anciens Présidents de la République membres de droit." },
      { question: "Qu'est-ce que la question prioritaire de constitutionnalité ?", reponse: "Un mécanisme permettant de contester la constitutionnalité d'une loi déjà en vigueur." },
      { question: "Depuis quand la QPC existe-t-elle ?", reponse: "Depuis le 1er mars 2010." },
      { question: "Le Conseil constitutionnel intervient-il dans l'élection présidentielle ?", reponse: "Oui, il en contrôle la régularité et en proclame les résultats." },
    ],
    ultraMemo: "Neuf sages, gardiens de la Constitution.",
  },
  {
    id: "fond-la-loi-asv",
    title: "La loi ASV",
    theme: "Action publique et services",
    resume:
      "Loi du 28 décembre 2015 relative à l'adaptation de la société au vieillissement, qui réorganise les aides à l'autonomie des personnes âgées.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Objectifs de la loi",
        points: [
          "La loi ASV entend anticiper le vieillissement de la population en agissant sur la prévention, l'adaptation de la société et l'accompagnement de la perte d'autonomie.",
          "Elle s'articule autour de trois axes : anticipation, adaptation et accompagnement.",
          "Elle a été promulguée le 28 décembre 2015.",
        ],
      },
      {
        titre: "Réforme de l'allocation personnalisée d'autonomie",
        points: [
          "Elle revalorise l'allocation personnalisée d'autonomie à domicile et améliore les plans d'aide.",
          "Elle allège le reste à charge pour les bénéficiaires les plus modestes.",
          "Elle crée un droit au répit pour les proches aidants qui accompagnent une personne âgée dépendante.",
        ],
      },
      {
        titre: "Autres apports",
        points: [
          "Elle encourage le développement de la résidence autonomie, nouvelle appellation des anciens foyers-logements.",
          "Elle renforce les droits et la protection des personnes âgées, notamment contre la maltraitance.",
          "Elle confie au département un rôle central dans la mise en œuvre de la politique de l'autonomie, notamment via la conférence des financeurs.",
        ],
      },
    ],
    reperes: [
      "Loi du 28 décembre 2015 relative à l'adaptation de la société au vieillissement",
      "Trois axes : anticipation, adaptation, accompagnement",
      "Création du droit au répit pour les proches aidants",
    ],
    aRetenir: [
      "La loi ASV structure la politique du vieillissement autour de trois axes complémentaires.",
      "Elle revalorise l'allocation personnalisée d'autonomie à domicile.",
      "Le département reste le pilote de la politique locale de l'autonomie, via la conférence des financeurs.",
    ],
    pieges: [
      "Ne pas confondre la loi ASV avec la loi relative à la dépendance, qui n'a jamais été adoptée sous ce nom.",
      "La revalorisation de l'APA concerne principalement le volet à domicile, pas seulement l'établissement.",
      "La résidence autonomie n'est pas un établissement médicalisé de type EHPAD.",
    ],
    phraseJury:
      "La loi ASV du 28 décembre 2015 organise la politique du vieillissement autour de l'anticipation, l'adaptation et l'accompagnement, en revalorisant notamment l'allocation personnalisée d'autonomie à domicile. Elle confirme le rôle central du département, en lien avec la conférence des financeurs, pour piloter cette politique au niveau local.",
    questionsJury: [
      { question: "Que signifie ASV ?", reponse: "Adaptation de la société au vieillissement." },
      { question: "Quels sont les trois axes de la loi ASV ?", reponse: "Anticipation, adaptation et accompagnement." },
      { question: "Quelle allocation la loi ASV revalorise-t-elle ?", reponse: "L'allocation personnalisée d'autonomie à domicile." },
      { question: "Quel dispositif la loi crée-t-elle pour les proches aidants ?", reponse: "Le droit au répit." },
    ],
    ultraMemo: "ASV : anticiper, adapter, accompagner.",
  },
  {
    id: "fond-la-motion-de-censure",
    title: "La motion de censure",
    theme: "Institutions et organisation territoriale",
    resume:
      "Procédure parlementaire permettant à l'Assemblée nationale de mettre en cause la responsabilité du Gouvernement.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Fondement constitutionnel",
        points: [
          "La motion de censure est prévue par l'article 49 de la Constitution du 4 octobre 1958.",
          "Elle constitue l'un des principaux instruments de la responsabilité politique du Gouvernement devant le Parlement.",
          "Seule l'Assemblée nationale peut voter une motion de censure, pas le Sénat.",
        ],
      },
      {
        titre: "La motion de censure spontanée",
        points: [
          "Elle est déposée à l'initiative d'un dixième au moins des députés, en vertu de l'article 49 alinéa 2.",
          "Un délai minimal de quarante-huit heures doit s'écouler entre le dépôt et le vote.",
          "Elle n'est adoptée qu'à la majorité des membres composant l'Assemblée nationale, les abstentions étant assimilées à des votes contre le renversement.",
        ],
      },
      {
        titre: "L'article 49 alinéa 3",
        points: [
          "Le Premier ministre peut engager la responsabilité du Gouvernement sur le vote d'un texte, en vertu de l'article 49 alinéa 3.",
          "Le texte est alors considéré comme adopté sauf si une motion de censure est déposée et votée dans les vingt-quatre heures.",
          "Cette procédure permet de faire adopter un texte sans vote direct, sauf renversement du Gouvernement.",
        ],
      },
    ],
    reperes: [
      "Article 49 de la Constitution du 4 octobre 1958",
      "Motion spontanée : article 49 alinéa 2, signée par un dixième des députés",
      "Engagement de responsabilité sur un texte : article 49 alinéa 3",
    ],
    aRetenir: [
      "Seule l'Assemblée nationale peut adopter une motion de censure.",
      "La motion doit être votée à la majorité absolue des membres de l'Assemblée.",
      "L'article 49 alinéa 3 permet d'adopter un texte sans vote sauf motion de censure réussie.",
    ],
    pieges: [
      "Les abstentions ne comptent pas pour le renversement du Gouvernement, seuls les votes favorables à la motion comptent.",
      "Le Sénat ne peut jamais voter de motion de censure contre le Gouvernement.",
      "L'usage de l'article 49 alinéa 3 n'oblige pas à un vote positif du texte, il crée seulement un risque de censure.",
    ],
    phraseJury:
      "La motion de censure, prévue à l'article 49 de la Constitution, permet à l'Assemblée nationale de renverser le Gouvernement, soit spontanément avec le soutien d'un dixième des députés, soit en réaction à l'engagement de responsabilité sur un texte prévu par l'alinéa 3. Elle doit être adoptée à la majorité absolue des membres de l'Assemblée pour aboutir.",
    questionsJury: [
      { question: "Quel article de la Constitution encadre la motion de censure ?", reponse: "L'article 49." },
      { question: "Combien de députés doivent signer une motion de censure spontanée ?", reponse: "Un dixième des membres de l'Assemblée nationale." },
      { question: "Le Sénat peut-il voter une motion de censure ?", reponse: "Non, seule l'Assemblée nationale le peut." },
      { question: "Que se passe-t-il si aucune motion de censure n'est votée après un 49.3 ?", reponse: "Le texte est considéré comme adopté sans vote direct." },
    ],
    ultraMemo: "49.2 : motion spontanée. 49.3 : texte sans vote sauf censure.",
  },
  {
    id: "fond-la-hatvp",
    title: "La HATVP",
    theme: "Statut et carrière",
    resume:
      "Haute autorité pour la transparence de la vie publique, chargée de contrôler les déclarations de patrimoine et d'intérêts des responsables publics.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Création et missions",
        points: [
          "La HATVP a été créée par les lois du 11 octobre 2013 relatives à la transparence de la vie publique.",
          "Elle contrôle les déclarations de situation patrimoniale et d'intérêts de nombreux responsables publics.",
          "Elle peut publier certaines déclarations et saisir la justice en cas de doute sur leur exactitude.",
        ],
      },
      {
        titre: "Personnes concernées",
        points: [
          "Sont concernés les membres du Gouvernement, les parlementaires, certains élus locaux et certains hauts fonctionnaires.",
          "Les élus locaux concernés sont notamment les exécutifs des collectivités les plus peuplées et des grands établissements publics de coopération intercommunale.",
          "Certains dirigeants d'organismes publics ou de sociétés publiques locales peuvent également être soumis à cette obligation.",
        ],
      },
      {
        titre: "Autres attributions",
        points: [
          "Elle contrôle le respect des règles relatives au pantouflage, c'est-à-dire au départ de responsables publics vers le secteur privé.",
          "Elle émet des recommandations générales pour la déontologie de la vie publique.",
          "Elle dispose depuis 2019 des compétences autrefois exercées par la commission de déontologie de la fonction publique pour certains agents.",
        ],
      },
    ],
    reperes: [
      "Lois du 11 octobre 2013 relatives à la transparence de la vie publique",
      "Contrôle des déclarations de patrimoine et d'intérêts",
      "Fusion avec certaines compétences de la commission de déontologie en 2019",
    ],
    aRetenir: [
      "La HATVP a été créée en 2013 pour renforcer la transparence de la vie publique.",
      "Elle contrôle les déclarations de patrimoine et d'intérêts de nombreux responsables publics et élus locaux.",
      "Elle surveille aussi les mobilités entre secteur public et secteur privé.",
    ],
    pieges: [
      "Tous les élus locaux ne sont pas soumis à déclaration, seuls ceux occupant certaines fonctions exécutives dans les collectivités les plus peuplées.",
      "La HATVP n'est pas une juridiction, elle peut saisir la justice mais ne prononce pas elle-même de sanctions pénales.",
      "Ne pas confondre la HATVP avec le Défenseur des droits, dont les missions sont différentes.",
    ],
    phraseJury:
      "Créée en 2013, la Haute autorité pour la transparence de la vie publique contrôle les déclarations de patrimoine et d'intérêts des responsables publics et de certains élus locaux, afin de prévenir les conflits d'intérêts. Elle joue aussi un rôle de vigilance sur les allers-retours entre les fonctions publiques et le secteur privé.",
    questionsJury: [
      { question: "Que signifie HATVP ?", reponse: "Haute autorité pour la transparence de la vie publique." },
      { question: "En quelle année a-t-elle été créée ?", reponse: "En 2013." },
      { question: "Que contrôle la HATVP ?", reponse: "Les déclarations de patrimoine et d'intérêts de responsables publics." },
      { question: "Quel phénomène surveille-t-elle en matière de mobilité professionnelle ?", reponse: "Le pantouflage, c'est-à-dire le départ vers le secteur privé." },
    ],
    ultraMemo: "HATVP : contrôle du patrimoine et des intérêts.",
  },
  {
    id: "fond-le-referendum-dinitiative-citoyenne",
    title: "Le référendum d'initiative citoyenne",
    theme: "Institutions et organisation territoriale",
    resume:
      "Proposition de démocratie directe, distincte du référendum d'initiative partagée, qui n'existe pas en tant que telle en droit positif français.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Une proposition, pas un dispositif en vigueur",
        points: [
          "Le référendum d'initiative citoyenne, souvent désigné par le sigle RIC, est une proposition portée notamment lors du mouvement des gilets jaunes à partir de 2018.",
          "Il ne figure pas dans la Constitution française actuelle et ne doit pas être confondu avec un dispositif existant.",
          "Il vise à permettre aux citoyens de proposer eux-mêmes une loi, une révision constitutionnelle, une abrogation ou une révocation d'élu, sans passer par les parlementaires.",
        ],
      },
      {
        titre: "Différence avec le dispositif existant",
        points: [
          "Le droit positif connaît le référendum d'initiative partagée de l'article 11, qui exige le soutien conjoint de parlementaires et de citoyens.",
          "Le RIC, dans les versions proposées par ses partisans, ne nécessiterait pas de soutien parlementaire préalable.",
          "Certaines propositions de RIC évoquent aussi un référendum révocatoire, permettant de démettre un élu en cours de mandat, inexistant en droit français.",
        ],
      },
      {
        titre: "Débats et perspectives",
        points: [
          "L'instauration d'un véritable RIC nécessiterait une révision de la Constitution.",
          "Les débats portent notamment sur les risques de instrumentalisation, les seuils de signatures exigés et l'articulation avec la démocratie représentative.",
          "Aucune réforme constitutionnelle n'a à ce jour introduit ce dispositif dans le droit français.",
        ],
      },
    ],
    reperes: [
      "Proposition médiatisée à partir du mouvement des gilets jaunes en 2018",
      "Distinct du référendum d'initiative partagée prévu par l'article 11 de la Constitution",
      "Nécessiterait une révision constitutionnelle pour être instauré",
    ],
    aRetenir: [
      "Le référendum d'initiative citoyenne n'existe pas en droit positif français.",
      "Il se distingue du référendum d'initiative partagée, qui lui existe depuis 2008.",
      "Son instauration supposerait une révision de la Constitution.",
    ],
    pieges: [
      "Ne confondez jamais RIC et référendum d'initiative partagée dans une réponse orale : le second existe en droit, pas le premier.",
      "Le RIC révocatoire n'a pas d'équivalent dans les mandats électifs français actuels.",
      "Cette notion relève du débat politique et non d'un texte juridique en vigueur : il faut le présenter avec prudence.",
    ],
    phraseJury:
      "Le référendum d'initiative citoyenne est une proposition de réforme, popularisée notamment par le mouvement des gilets jaunes, mais il n'existe pas en droit positif français, contrairement au référendum d'initiative partagée prévu par l'article 11 de la Constitution. Son instauration éventuelle nécessiterait une révision constitutionnelle.",
    questionsJury: [
      { question: "Le référendum d'initiative citoyenne existe-t-il en droit français ?", reponse: "Non, il s'agit d'une proposition qui n'a jamais été inscrite dans la Constitution." },
      { question: "Quel mouvement a popularisé cette proposition ?", reponse: "Le mouvement des gilets jaunes à partir de 2018." },
      { question: "Quelle est la différence avec le référendum d'initiative partagée ?", reponse: "Ce dernier existe en droit et exige un soutien conjoint de parlementaires et de citoyens." },
      { question: "Que faudrait-il pour instaurer un RIC ?", reponse: "Une révision de la Constitution." },
    ],
    ultraMemo: "RIC : proposition, pas encore de droit positif.",
  },
];
