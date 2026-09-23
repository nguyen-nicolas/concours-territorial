import type { FicheMemo } from "../memoTypes";
import { TOUS_CONCOURS, CONCOURS_AB } from "../memoTypes";

export const fichesOrganisation: FicheMemo[] = [
  {
    id: "orga-attractivite-territoriale",
    title: "L'attractivité territoriale",
    theme: "Institutions et organisation territoriale",
    resume:
      "La capacité d'un territoire à retenir et attirer habitants, entreprises et investissements, et les leviers d'action des collectivités.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Une notion transversale",
        points: [
          "L'attractivité territoriale désigne l'aptitude d'un territoire à capter des populations, des entreprises, des touristes et des financements publics ou privés.",
          "Elle repose sur des facteurs matériels (infrastructures, foncier, réseaux numériques) et immatériels (image, qualité de vie, dynamisme culturel).",
          "Elle se distingue de la compétitivité, qui mesure la performance économique d'un territoire face à la concurrence d'autres territoires.",
        ],
      },
      {
        titre: "Les leviers des collectivités",
        points: [
          "La région pilote le développement économique et anime les schémas régionaux de développement économique, d'innovation et d'internationalisation.",
          "Le bloc communal agit sur l'aménagement, l'habitat, les équipements publics et l'accueil des entreprises via les zones d'activité.",
          "Les outils de marketing territorial : marques de territoire, salons, actions de prospection et d'accompagnement des porteurs de projets.",
          "La coopération intercommunale mutualise les moyens pour proposer une offre de services et de foncier plus cohérente à l'échelle du bassin de vie.",
        ],
      },
      {
        titre: "Les enjeux actuels",
        points: [
          "La revitalisation des centres-villes et des centres-bourgs, notamment via les dispositifs Action cœur de ville et Petites villes de demain.",
          "La couverture numérique du territoire, condition désormais essentielle à l'implantation d'entreprises et au télétravail.",
          "L'équilibre entre attractivité et préservation des ressources, dans une logique de développement durable des territoires.",
        ],
      },
    ],
    reperes: [
      "Programme Action cœur de ville lancé en 2018",
      "Programme Petites villes de demain lancé en 2020",
      "SRDEII : schéma régional de développement économique, d'innovation et d'internationalisation",
    ],
    aRetenir: [
      "L'attractivité combine facteurs économiques, sociaux et d'image du territoire.",
      "La région est chef de file du développement économique depuis la loi NOTRe.",
      "L'intercommunalité est l'échelle pertinente pour mutualiser les actions d'attractivité.",
    ],
    pieges: [
      "Ne confondez pas attractivité et compétitivité, qui ne mesurent pas la même chose.",
      "N'attribuez pas le développement économique à la seule commune : la région en est chef de file.",
      "Ne réduisez pas l'attractivité aux seuls aspects économiques : la qualité de vie compte tout autant.",
    ],
    phraseJury:
      "L'attractivité territoriale résulte de la combinaison de facteurs économiques, humains et d'image, que les collectivités cherchent à renforcer par des politiques coordonnées d'aménagement et de développement.",
    questionsJury: [
      {
        question: "Quelle collectivité pilote le développement économique ?",
        reponse: "La région, chef de file depuis la loi NOTRe de 2015, via le SRDEII.",
      },
      {
        question: "Citez un dispositif de revitalisation des centres-villes.",
        reponse: "Action cœur de ville, lancé en 2018.",
      },
      {
        question: "Quelle différence entre attractivité et compétitivité ?",
        reponse: "L'attractivité capte des ressources externes, la compétitivité mesure la performance face à la concurrence.",
      },
      {
        question: "Pourquoi l'intercommunalité est-elle pertinente pour l'attractivité ?",
        reponse: "Elle mutualise les moyens à l'échelle du bassin de vie, plus cohérente que la seule commune.",
      },
    ],
    ultraMemo: "Attractivité = capter population, entreprises, investissements ; région pilote, bloc communal agit.",
  },
  {
    id: "orga-competences-commune",
    title: "Les compétences de la commune",
    theme: "Institutions et organisation territoriale",
    resume:
      "La commune, seule collectivité à disposer de la clause générale de compétence, et ses domaines d'intervention de proximité.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Le principe de la clause générale",
        points: [
          "La commune peut intervenir dans toute affaire présentant un intérêt public local, dès lors qu'elle ne relève pas d'une compétence exclusive d'une autre autorité.",
          "Cette clause générale de compétence a été supprimée pour le département et la région par la loi NOTRe, mais maintenue pour la commune.",
          "Elle s'exerce sous le contrôle du juge administratif, qui vérifie l'existence d'un intérêt public local réel.",
        ],
      },
      {
        titre: "Les compétences obligatoires",
        points: [
          "État civil et élections : tenue des registres, organisation matérielle des scrutins.",
          "Urbanisme : élaboration du plan local d'urbanisme, délivrance des autorisations d'urbanisme.",
          "Écoles : construction et entretien des écoles maternelles et élémentaires.",
          "Voirie communale, cimetières, service de l'eau et de l'assainissement dans de nombreux cas.",
        ],
      },
      {
        titre: "Les compétences facultatives",
        points: [
          "Action sociale complémentaire, culture, sport, animation locale, développement économique de proximité.",
          "Ces compétences facultatives sont de plus en plus souvent transférées à l'intercommunalité pour des raisons de moyens.",
          "La commune conserve la police administrative générale, exercée par le maire au nom de l'ordre public.",
        ],
      },
    ],
    reperes: [
      "Loi NOTRe : 7 août 2015",
      "Article L. 2121-29 du code général des collectivités territoriales",
      "Environ 34 900 communes en France",
    ],
    aRetenir: [
      "La commune est la seule collectivité à conserver la clause générale de compétence.",
      "Ses compétences obligatoires couvrent l'état civil, l'urbanisme, les écoles et la voirie communale.",
      "De nombreuses compétences facultatives sont transférées aux intercommunalités.",
    ],
    pieges: [
      "Ne dites pas que le département a gardé la clause générale de compétence : c'est faux depuis 2015.",
      "Ne confondez pas compétence obligatoire et compétence facultative.",
      "La police administrative reste communale, ne l'attribuez pas à l'intercommunalité.",
    ],
    phraseJury:
      "La commune reste la seule collectivité à disposer de la clause générale de compétence, ce qui lui permet d'intervenir dans toute affaire d'intérêt public local en complément de ses compétences obligatoires.",
    questionsJury: [
      {
        question: "Qu'est-ce que la clause générale de compétence ?",
        reponse: "La capacité d'intervenir dans toute affaire d'intérêt public local, réservée à la commune depuis 2015.",
      },
      {
        question: "Citez trois compétences obligatoires de la commune.",
        reponse: "État civil, urbanisme, écoles maternelles et élémentaires.",
      },
      {
        question: "Le maire détient-il la police administrative générale ?",
        reponse: "Oui, il l'exerce au nom de la commune pour assurer l'ordre public.",
      },
      {
        question: "Que reste-t-il de la clause générale pour le département et la région ?",
        reponse: "Rien : elle a été supprimée par la loi NOTRe, ils n'ont que des compétences d'attribution.",
      },
    ],
    ultraMemo: "Commune = clause générale + état civil, urbanisme, écoles, voirie, police locale.",
  },
  {
    id: "orga-cour-des-comptes-crc",
    title: "La Cour des comptes et les chambres régionales des comptes",
    theme: "Institutions et organisation territoriale",
    resume:
      "Les juridictions financières qui contrôlent les comptes et la gestion des collectivités territoriales.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Une organisation à deux niveaux",
        points: [
          "La Cour des comptes contrôle l'État, les établissements publics nationaux et certifie les comptes de l'État et de la sécurité sociale.",
          "Les chambres régionales des comptes (CRC) contrôlent les collectivités territoriales et leurs établissements publics à l'échelle régionale.",
          "Les magistrats des CRC sont indépendants et inamovibles, comme ceux de la Cour des comptes.",
        ],
      },
      {
        titre: "Les missions des chambres régionales des comptes",
        points: [
          "Le jugement des comptes des comptables publics, pour vérifier leur régularité.",
          "Le contrôle de la gestion, qui apprécie l'efficacité, l'efficience et la régularité de l'action de la collectivité.",
          "Le contrôle budgétaire, exercé en lien avec le préfet, en cas de budget non voté, non équilibré ou de déficit excessif.",
          "L'examen de la gestion peut porter sur toute structure recevant des concours financiers d'une collectivité.",
        ],
      },
      {
        titre: "La procédure et les suites",
        points: [
          "Le contrôle est contradictoire : la collectivité peut répondre aux observations avant publication.",
          "Le rapport d'observations définitives est communicable et présenté à l'assemblée délibérante.",
          "La CRC ne peut pas annuler un acte ni sanctionner directement un élu ; elle formule des recommandations et alerte le préfet en cas de saisine budgétaire.",
        ],
      },
    ],
    reperes: [
      "Une chambre régionale des comptes par région, depuis la loi du 2 mars 1982",
      "Article 47-2 de la Constitution : la Cour des comptes assiste le Parlement",
      "Rapport public annuel de la Cour des comptes",
    ],
    aRetenir: [
      "La Cour des comptes agit au niveau national, les chambres régionales au niveau local.",
      "Les CRC exercent un contrôle juridictionnel des comptes et un contrôle de la gestion.",
      "Le contrôle budgétaire des CRC intervient en cas de difficulté financière de la collectivité, en lien avec le préfet.",
    ],
    pieges: [
      "La CRC ne peut pas annuler une délibération : seul le juge administratif le peut.",
      "Ne confondez pas contrôle de légalité du préfet et contrôle de gestion de la CRC, qui sont deux procédures distinctes.",
      "Le contrôle de la CRC n'est pas un contrôle d'opportunité politique.",
    ],
    phraseJury:
      "Les chambres régionales des comptes exercent, au niveau local, un contrôle juridictionnel des comptes et un contrôle de la gestion des collectivités, sans pouvoir se substituer au juge administratif.",
    questionsJury: [
      {
        question: "Quelle différence entre la Cour des comptes et une CRC ?",
        reponse: "La Cour agit au niveau national, la CRC contrôle les collectivités de sa région.",
      },
      {
        question: "Une CRC peut-elle annuler une délibération ?",
        reponse: "Non, seul le juge administratif peut annuler un acte.",
      },
      {
        question: "Dans quel cas la CRC intervient-elle en contrôle budgétaire ?",
        reponse: "Budget non voté, non équilibré, ou déficit excessif, en lien avec le préfet.",
      },
      {
        question: "Qu'est-ce que le contrôle de la gestion ?",
        reponse: "L'appréciation de la régularité, de l'efficacité et de l'efficience de l'action de la collectivité.",
      },
    ],
    ultraMemo: "CRC = juge des comptes + contrôle de gestion + contrôle budgétaire régional, sans pouvoir d'annulation.",
  },
  {
    id: "orga-competences-region",
    title: "Les compétences de la région",
    theme: "Institutions et organisation territoriale",
    resume:
      "La région, collectivité stratège du développement économique, de l'aménagement et de la formation professionnelle.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Une compétence d'attribution",
        points: [
          "Depuis la loi NOTRe, la région ne dispose plus de la clause générale de compétence et n'agit que dans les domaines que la loi lui attribue.",
          "Elle est chef de file du développement économique, de l'aménagement du territoire, de la biodiversité et des transports.",
          "Le conseil régional est élu à la proportionnelle de liste pour six ans, avec une prime majoritaire.",
        ],
      },
      {
        titre: "Développement économique et aménagement",
        points: [
          "Élaboration du schéma régional de développement économique, d'innovation et d'internationalisation, qui s'impose aux autres collectivités.",
          "Élaboration du schéma régional d'aménagement, de développement durable et d'égalité des territoires.",
          "Gestion des fonds européens structurels, dont la région est l'autorité de gestion pour une large part.",
        ],
      },
      {
        titre: "Éducation, transports et formation",
        points: [
          "Construction et entretien des lycées, gestion des personnels techniques.",
          "Organisation des transports régionaux, notamment les trains express régionaux, et depuis 2017 les transports interurbains routiers.",
          "Formation professionnelle continue et apprentissage, en lien avec les branches professionnelles.",
        ],
      },
    ],
    reperes: [
      "Loi NOTRe : 7 août 2015",
      "18 régions dont 5 d'outre-mer",
      "SRADDET : schéma régional d'aménagement, de développement durable et d'égalité des territoires",
    ],
    aRetenir: [
      "La région n'a plus de clause générale de compétence depuis 2015.",
      "Elle est chef de file du développement économique et de l'aménagement du territoire.",
      "Elle gère les lycées, les transports régionaux et une part importante des fonds européens.",
    ],
    pieges: [
      "Ne dites pas que la région gère les collèges : ce sont les lycées, les collèges relèvent du département.",
      "N'attribuez pas la clause générale de compétence à la région, supprimée en 2015.",
      "Le SRADDET s'impose aux documents d'urbanisme inférieurs, ne le présentez pas comme un simple document indicatif.",
    ],
    phraseJury:
      "La région exerce des compétences d'attribution centrées sur le développement économique, l'aménagement du territoire, les lycées et les transports, sans disposer de la clause générale de compétence.",
    questionsJury: [
      {
        question: "La région dispose-t-elle de la clause générale de compétence ?",
        reponse: "Non, elle a été supprimée par la loi NOTRe en 2015.",
      },
      {
        question: "Quel document régional encadre le développement économique ?",
        reponse: "Le SRDEII, schéma régional de développement économique, d'innovation et d'internationalisation.",
      },
      {
        question: "Quels établissements scolaires relèvent de la région ?",
        reponse: "Les lycées, tandis que les collèges relèvent du département.",
      },
      {
        question: "La région gère-t-elle des fonds européens ?",
        reponse: "Oui, elle est autorité de gestion d'une large part des fonds structurels européens.",
      },
    ],
    ultraMemo: "Région = développement économique + aménagement + lycées + transports, sans clause générale.",
  },
  {
    id: "orga-deconcentration-decentralisation",
    title: "Déconcentration et décentralisation",
    theme: "Institutions et organisation territoriale",
    resume:
      "Deux logiques distinctes d'organisation de l'action publique sur le territoire, à ne jamais confondre.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "La décentralisation",
        points: [
          "La décentralisation transfère des compétences et des moyens de l'État vers des collectivités territoriales dotées de la personnalité morale et administrées par des élus.",
          "Elle s'appuie sur le principe constitutionnel de libre administration des collectivités territoriales par des conseils élus, posé à l'article 72.",
          "Elle s'est déployée en plusieurs vagues, depuis les lois de 1982-1983 jusqu'à la loi NOTRe de 2015.",
        ],
      },
      {
        titre: "La déconcentration",
        points: [
          "La déconcentration consiste à transférer des pouvoirs de décision du niveau central de l'État vers ses représentants locaux, sans changer de personne morale.",
          "Le préfet est l'incarnation de la déconcentration : il représente l'État dans le département ou la région, mais reste soumis à l'autorité hiérarchique du gouvernement.",
          "Elle vise à rapprocher la décision du terrain tout en gardant l'unité de l'État.",
        ],
      },
      {
        titre: "Les liens entre les deux logiques",
        points: [
          "Décentralisation et déconcentration sont souvent présentées comme complémentaires : « qui décentralise doit déconcentrer ».",
          "Le préfet, agent déconcentré, exerce le contrôle de légalité sur les actes des collectivités décentralisées.",
          "Cette dualité explique la coexistence, sur un même territoire, de services de l'État et de services des collectivités.",
        ],
      },
    ],
    reperes: [
      "Loi du 2 mars 1982 : première grande loi de décentralisation",
      "Article 72 de la Constitution : libre administration des collectivités",
      "Décret du 29 avril 2004 relatif aux pouvoirs des préfets, à l'organisation et à l'action des services de l'État",
    ],
    aRetenir: [
      "La décentralisation transfère des compétences à des personnes morales distinctes de l'État, élues.",
      "La déconcentration délègue des pouvoirs à des agents de l'État sur le territoire, sans autonomie juridique.",
      "Le préfet est la figure centrale de la déconcentration et le garant du contrôle de légalité.",
    ],
    pieges: [
      "Ne confondez jamais décentralisation et déconcentration dans une même phrase sans les distinguer.",
      "Le préfet n'est pas élu, il est nommé par décret du président de la République.",
      "La décentralisation ne signifie pas l'indépendance des collectivités vis-à-vis de la loi.",
    ],
    phraseJury:
      "La décentralisation transfère des compétences à des collectivités élues et autonomes, alors que la déconcentration délègue des pouvoirs à des représentants de l'État qui restent sous son autorité hiérarchique.",
    questionsJury: [
      {
        question: "Quelle est la différence essentielle entre décentralisation et déconcentration ?",
        reponse: "La décentralisation crée des personnes morales autonomes, la déconcentration délègue au sein de l'État.",
      },
      {
        question: "Qui incarne la déconcentration au niveau local ?",
        reponse: "Le préfet, représentant de l'État dans le département ou la région.",
      },
      {
        question: "Quel article constitutionnel fonde la décentralisation ?",
        reponse: "L'article 72, qui pose la libre administration des collectivités par des conseils élus.",
      },
      {
        question: "Quel rôle le préfet joue-t-il vis-à-vis des collectivités décentralisées ?",
        reponse: "Il exerce le contrôle de légalité sur leurs actes.",
      },
    ],
    ultraMemo: "Décentralisation = transfert à des élus autonomes ; déconcentration = délégation dans l'État.",
  },
  {
    id: "orga-repartition-competences-collectivites",
    title: "Les compétences des collectivités (répartition)",
    theme: "Institutions et organisation territoriale",
    resume:
      "La répartition des compétences entre commune, département et région, issue des lois de décentralisation successives.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Le principe général",
        points: [
          "Depuis la loi NOTRe, les compétences sont réparties par blocs, chaque collectivité recevant des compétences d'attribution, sauf la commune qui garde la clause générale.",
          "Le principe de subsidiarité inspire cette répartition : la compétence est confiée à l'échelon le plus pertinent.",
          "La loi peut organiser des compétences partagées, notamment en matière de culture, de sport et de tourisme, exercées conjointement par plusieurs niveaux.",
        ],
      },
      {
        titre: "Répartition par grands domaines",
        points: [
          "Commune : urbanisme, écoles maternelles et élémentaires, état civil, voirie communale.",
          "Département : action sociale, collèges, routes départementales, solidarités territoriales envers les communes rurales.",
          "Région : développement économique, lycées, transports régionaux, formation professionnelle, aménagement du territoire.",
        ],
      },
      {
        titre: "Les mécanismes de coordination",
        points: [
          "La notion de chef de file permet à une collectivité d'organiser l'action commune de plusieurs niveaux sur une compétence partagée, sans lui donner de pouvoir hiérarchique.",
          "La conférence territoriale de l'action publique réunit les exécutifs locaux d'une région pour favoriser la concertation.",
          "Les délégations de compétences permettent à une collectivité de confier l'exercice d'une compétence à une autre par convention.",
        ],
      },
    ],
    reperes: [
      "Lois de décentralisation : 1982-1983",
      "Loi MAPTAM : 27 janvier 2014",
      "Loi NOTRe : 7 août 2015",
    ],
    aRetenir: [
      "Seule la commune garde la clause générale de compétence.",
      "Département et région exercent des compétences d'attribution, définies par la loi.",
      "Le chef de file coordonne sans hiérarchie sur les compétences partagées.",
    ],
    pieges: [
      "Ne confondez pas compétence exclusive et compétence partagée.",
      "Le chef de file n'a pas de pouvoir de décision sur les autres collectivités.",
      "Ne mélangez pas collèges (département) et lycées (région).",
    ],
    phraseJury:
      "La répartition des compétences obéit à une logique de blocs depuis la loi NOTRe, tempérée par des compétences partagées et un mécanisme de chef de file pour assurer la coordination entre collectivités.",
    questionsJury: [
      {
        question: "Qu'est-ce qu'une compétence partagée ?",
        reponse: "Une compétence exercée conjointement par plusieurs niveaux de collectivités, comme la culture ou le sport.",
      },
      {
        question: "Qu'est-ce que le chef de file ?",
        reponse: "Une collectivité désignée pour organiser l'action commune sur une compétence partagée, sans hiérarchie.",
      },
      {
        question: "Quelle collectivité gère les collèges ?",
        reponse: "Le département, tandis que la région gère les lycées.",
      },
      {
        question: "Qu'est-ce que la conférence territoriale de l'action publique ?",
        reponse: "Une instance régionale de concertation entre exécutifs locaux, créée par la loi MAPTAM de 2014.",
      },
    ],
    ultraMemo: "Répartition par blocs + compétences partagées + chef de file, sans hiérarchie entre collectivités.",
  },
  {
    id: "orga-clause-generale-competence",
    title: "La clause générale de compétence",
    theme: "Institutions et organisation territoriale",
    resume:
      "Le pouvoir d'agir dans toute affaire d'intérêt public local, aujourd'hui réservé à la commune.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Définition et fondement",
        points: [
          "La clause générale de compétence permet à une collectivité d'intervenir dans toute affaire présentant un intérêt public local, même en l'absence de texte l'y autorisant expressément.",
          "Elle trouve son origine dans les lois du 5 avril 1884 pour la commune et a longtemps existé aussi pour le département et la région.",
          "Elle se distingue des compétences d'attribution, qui exigent un texte précis pour agir.",
        ],
      },
      {
        titre: "Sa suppression pour département et région",
        points: [
          "La loi du 16 décembre 2010 avait déjà tenté de la restreindre, avant un rétablissement partiel par la loi MAPTAM en 2014.",
          "La loi NOTRe du 7 août 2015 supprime définitivement la clause générale de compétence pour le département et la région.",
          "Depuis lors, ces deux collectivités n'agissent que dans les domaines expressément prévus par la loi, sauf compétences partagées.",
        ],
      },
      {
        titre: "Le maintien pour la commune",
        points: [
          "La commune conserve la clause générale de compétence, ce qui lui permet une grande souplesse d'action locale.",
          "Le juge administratif contrôle l'existence réelle d'un intérêt public local, notamment en matière économique.",
          "Cette clause justifie par exemple des interventions communales en matière culturelle, sociale ou associative non prévues explicitement par un texte.",
        ],
      },
    ],
    reperes: [
      "Lois municipales du 5 avril 1884",
      "Loi du 16 décembre 2010 de réforme des collectivités territoriales",
      "Loi NOTRe : 7 août 2015",
    ],
    aRetenir: [
      "Seule la commune conserve la clause générale de compétence.",
      "Département et région n'ont que des compétences d'attribution depuis 2015.",
      "Le juge contrôle l'existence d'un intérêt public local réel avant de valider une intervention communale.",
    ],
    pieges: [
      "Ne dites jamais que le département garde la clause générale : elle a disparu en 2015.",
      "N'oubliez pas de citer le contrôle du juge administratif sur l'intérêt public local.",
      "Ne confondez pas clause générale de compétence et compétence partagée.",
    ],
    phraseJury:
      "La clause générale de compétence, qui permet d'agir dans toute affaire d'intérêt public local, n'a été maintenue que pour la commune, le département et la région étant depuis 2015 limités à des compétences d'attribution.",
    questionsJury: [
      {
        question: "Quelle collectivité conserve la clause générale de compétence ?",
        reponse: "La commune, seule depuis la loi NOTRe de 2015.",
      },
      {
        question: "Depuis quand le département a-t-il perdu cette clause ?",
        reponse: "Depuis la loi NOTRe du 7 août 2015.",
      },
      {
        question: "Qui contrôle l'usage de la clause générale par la commune ?",
        reponse: "Le juge administratif, qui vérifie l'existence d'un intérêt public local.",
      },
      {
        question: "D'où vient historiquement la clause générale de compétence ?",
        reponse: "Des lois municipales du 5 avril 1884.",
      },
    ],
    ultraMemo: "Clause générale = agir sans texte précis, réservée à la commune depuis 2015.",
  },
  {
    id: "orga-controle-legalite",
    title: "Le contrôle de légalité",
    theme: "Institutions et organisation territoriale",
    resume:
      "Le contrôle exercé par le préfet sur les actes des collectivités territoriales, pierre angulaire de la décentralisation encadrée.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Un contrôle a posteriori",
        points: [
          "Le contrôle de légalité est exercé par le préfet sur les actes des collectivités territoriales après leur transmission, et non avant leur entrée en vigueur.",
          "Il porte uniquement sur la légalité de l'acte, jamais sur son opportunité : le préfet ne peut pas juger si une décision est une bonne politique.",
          "Il concerne les délibérations, les décisions du maire ou du président de l'exécutif, et certains contrats comme les marchés publics au-delà d'un seuil.",
        ],
      },
      {
        titre: "La procédure",
        points: [
          "Les actes soumis à obligation de transmission ne deviennent exécutoires qu'après leur transmission au préfet et leur publication ou notification.",
          "Si le préfet estime un acte illégal, il peut saisir le tribunal administratif dans un délai de deux mois par un déféré préfectoral.",
          "Il peut aussi demander un retrait amiable de l'acte à la collectivité avant tout recours contentieux.",
          "Le préfet peut assortir son déféré d'une demande de sursis à exécution.",
        ],
      },
      {
        titre: "Les évolutions récentes",
        points: [
          "Le nombre d'actes soumis à obligation de transmission a été réduit au fil des réformes pour cibler les actes les plus sensibles.",
          "La télétransmission des actes via des plateformes dédiées facilite et accélère le contrôle.",
          "Le contrôle de légalité coexiste avec le contrôle budgétaire, confié à la chambre régionale des comptes en cas de difficulté financière.",
        ],
      },
    ],
    reperes: [
      "Loi du 2 mars 1982 : instauration du contrôle de légalité a posteriori",
      "Délai de recours du préfet : deux mois",
      "Article 72 alinéa 6 de la Constitution : le préfet veille au respect des lois",
    ],
    aRetenir: [
      "Le contrôle de légalité est a posteriori et ne porte que sur la légalité, jamais sur l'opportunité.",
      "Le préfet saisit le tribunal administratif par la voie du déféré préfectoral.",
      "Certains actes doivent être transmis pour devenir exécutoires.",
    ],
    pieges: [
      "Ne dites pas que le préfet peut annuler lui-même un acte : seul le juge administratif le peut.",
      "Le contrôle de légalité n'est pas un contrôle d'opportunité.",
      "Ne confondez pas déféré préfectoral et recours pour excès de pouvoir d'un tiers.",
    ],
    phraseJury:
      "Le contrôle de légalité, exercé a posteriori par le préfet, ne porte que sur la conformité au droit des actes des collectivités, le préfet devant saisir le tribunal administratif s'il estime un acte illégal.",
    questionsJury: [
      {
        question: "Le préfet peut-il annuler un acte illégal ?",
        reponse: "Non, il saisit le tribunal administratif par un déféré préfectoral.",
      },
      {
        question: "Quel est le délai du déféré préfectoral ?",
        reponse: "Deux mois à compter de la transmission de l'acte.",
      },
      {
        question: "Le contrôle de légalité porte-t-il sur l'opportunité des décisions ?",
        reponse: "Non, uniquement sur leur légalité.",
      },
      {
        question: "Quand un acte devient-il exécutoire ?",
        reponse: "Après sa transmission au préfet et sa publication ou notification.",
      },
    ],
    ultraMemo: "Contrôle de légalité = a posteriori, légalité seulement, déféré préfectoral au tribunal administratif.",
  },
  {
    id: "orga-elections-municipales",
    title: "Les élections municipales",
    theme: "Institutions et organisation territoriale",
    resume:
      "Le mode de scrutin des conseils municipaux, variable selon la taille de la commune, et l'élection du maire.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Deux régimes selon la population",
        points: [
          "Dans les communes de moins de 1 000 habitants, le scrutin est majoritaire plurinominal avec panachage, sans obligation de liste complète ni de parité stricte.",
          "Dans les communes de 1 000 habitants et plus, le scrutin est de liste, à deux tours, avec représentation proportionnelle et prime majoritaire pour la liste arrivée en tête.",
          "Les listes doivent respecter la parité stricte homme-femme dans les communes de 1 000 habitants et plus.",
        ],
      },
      {
        titre: "Le fléchage vers l'intercommunalité",
        points: [
          "Depuis la loi du 17 mai 2013, les conseillers communautaires des communes de 1 000 habitants et plus sont élus au suffrage universel direct par fléchage sur les listes municipales.",
          "Dans les communes de moins de 1 000 habitants, les conseillers communautaires sont désignés dans l'ordre du tableau du conseil municipal.",
          "Ce mécanisme renforce la légitimité démocratique des intercommunalités sans créer d'élection séparée.",
        ],
      },
      {
        titre: "L'élection du maire et des adjoints",
        points: [
          "Le maire est élu par le conseil municipal, au scrutin secret et à la majorité absolue aux deux premiers tours, puis relative au troisième.",
          "Les adjoints sont élus dans les mêmes conditions, leur nombre étant limité à 30 pour cent de l'effectif du conseil municipal.",
          "Le mandat municipal est de six ans, renouvelable sans limitation de nombre.",
        ],
      },
    ],
    reperes: [
      "Seuil de 1 000 habitants pour le scrutin de liste",
      "Loi du 17 mai 2013 : fléchage des conseillers communautaires",
      "Durée du mandat municipal : 6 ans",
    ],
    aRetenir: [
      "Le seuil de 1 000 habitants détermine le mode de scrutin municipal.",
      "Le fléchage assure l'élection directe des conseillers communautaires depuis 2013.",
      "Le maire est élu par le conseil municipal, non par les électeurs directement.",
    ],
    pieges: [
      "Le maire n'est pas élu au suffrage universel direct par les habitants.",
      "N'oubliez pas la prime majoritaire dans le scrutin de liste des communes de 1 000 habitants et plus.",
      "Ne confondez pas panachage (petites communes) et liste bloquée avec parité (grandes communes).",
    ],
    phraseJury:
      "Le mode de scrutin municipal varie selon que la commune compte plus ou moins de 1 000 habitants, le maire étant dans tous les cas élu par le conseil municipal et non directement par les électeurs.",
    questionsJury: [
      {
        question: "Quel est le seuil qui détermine le mode de scrutin municipal ?",
        reponse: "1 000 habitants.",
      },
      {
        question: "Comment sont élus les conseillers communautaires dans les grandes communes ?",
        reponse: "Par fléchage sur les listes municipales, depuis la loi du 17 mai 2013.",
      },
      {
        question: "Comment le maire est-il élu ?",
        reponse: "Par le conseil municipal, à la majorité absolue aux deux premiers tours, relative au troisième.",
      },
      {
        question: "Quelle est la durée du mandat municipal ?",
        reponse: "Six ans.",
      },
    ],
    ultraMemo: "Municipales : seuil 1 000 habitants, fléchage intercommunal, maire élu par le conseil.",
  },
  {
    id: "orga-role-du-maire",
    title: "Le rôle du maire",
    theme: "Institutions et organisation territoriale",
    resume:
      "Le maire, autorité exécutive de la commune, cumule des fonctions d'agent communal et d'agent de l'État.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Le maire, exécutif de la commune",
        points: [
          "Le maire prépare et exécute les délibérations du conseil municipal, qu'il ne peut pas contredire.",
          "Il est l'ordonnateur des dépenses et des recettes de la commune et dirige l'administration communale.",
          "Il représente la commune en justice et signe les contrats et marchés publics au nom de la commune.",
        ],
      },
      {
        titre: "Le maire, agent de l'État",
        points: [
          "Il exerce des fonctions d'officier d'état civil : mariages, actes de naissance et de décès.",
          "Il agit comme officier de police judiciaire, sous l'autorité du procureur de la République.",
          "Il assure la publication et l'exécution des lois et règlements et organise les élections dans sa commune.",
        ],
      },
      {
        titre: "Le pouvoir de police administrative",
        points: [
          "Le maire détient le pouvoir de police administrative générale, garant de la sécurité, de la salubrité et de la tranquillité publiques.",
          "Il peut prendre des arrêtés de police pour réglementer la circulation, les débits de boissons ou les troubles de voisinage.",
          "Ce pouvoir peut être transféré au président de l'intercommunalité pour certaines polices spéciales, sauf opposition expresse du maire.",
        ],
      },
    ],
    reperes: [
      "Article L. 2122-18 du code général des collectivités territoriales",
      "Article L. 2212-2 : pouvoir de police administrative générale",
      "Mandat de six ans",
    ],
    aRetenir: [
      "Le maire cumule fonctions communales et fonctions d'agent de l'État.",
      "Il ne peut pas s'opposer aux délibérations du conseil municipal qu'il exécute.",
      "Il détient le pouvoir de police administrative générale sur le territoire communal.",
    ],
    pieges: [
      "Le maire n'est pas un agent public de l'État au sens statutaire, il exerce certaines fonctions pour le compte de l'État.",
      "Ne confondez pas police administrative (préventive) et police judiciaire (répressive), même si le maire touche aux deux.",
      "Le maire ne peut pas s'opposer à une délibération régulièrement adoptée par le conseil municipal.",
    ],
    phraseJury:
      "Le maire cumule la qualité d'exécutif de la commune, chargé de préparer et d'exécuter les délibérations, et celle d'agent de l'État pour l'état civil, les élections et la police judiciaire.",
    questionsJury: [
      {
        question: "Le maire peut-il refuser d'exécuter une délibération du conseil municipal ?",
        reponse: "Non, il est tenu de l'exécuter dès lors qu'elle est régulière.",
      },
      {
        question: "Quel pouvoir de police détient le maire ?",
        reponse: "Le pouvoir de police administrative générale, pour la sécurité, la salubrité et la tranquillité publiques.",
      },
      {
        question: "En tant qu'agent de l'État, quelles fonctions le maire exerce-t-il ?",
        reponse: "Officier d'état civil, officier de police judiciaire, organisation des élections.",
      },
      {
        question: "Qui peut recevoir certaines polices spéciales du maire ?",
        reponse: "Le président de l'intercommunalité, sauf opposition expresse du maire.",
      },
    ],
    ultraMemo: "Maire = exécutif communal + agent de l'État + police administrative générale.",
  },
  {
    id: "orga-commune-nouvelle",
    title: "La commune nouvelle",
    theme: "Institutions et organisation territoriale",
    resume:
      "Un dispositif de fusion volontaire de communes pour renforcer les moyens et la cohérence de l'action locale.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Un dispositif issu de la loi de 2015",
        points: [
          "La commune nouvelle est créée par la loi du 16 mars 2015, en remplacement du dispositif peu utilisé des communes associées de la loi Marcellin de 1971.",
          "Elle résulte de la fusion de plusieurs communes contiguës, sur délibérations concordantes des conseils municipaux ou après consultation des électeurs.",
          "Les anciennes communes peuvent devenir des communes déléguées, dotées d'un maire délégué et d'une mairie annexe.",
        ],
      },
      {
        titre: "Les incitations financières",
        points: [
          "Des incitations financières ont été prévues, notamment le maintien temporaire des dotations globales de fonctionnement cumulées des anciennes communes.",
          "La commune nouvelle bénéficie d'une seule fiscalité et d'un seul budget, ce qui simplifie la gestion administrative.",
          "Elle facilite l'accès à des seuils réglementaires plus favorables, par exemple pour certains financements.",
        ],
      },
      {
        titre: "Les effets sur la gouvernance",
        points: [
          "Un conseil municipal unique remplace les anciens conseils, avec un maire unique pour l'ensemble de la commune nouvelle.",
          "Les communes déléguées peuvent conserver une identité et des compétences de proximité déléguées par le conseil municipal.",
          "La création d'une commune nouvelle peut modifier le périmètre et les relations avec l'intercommunalité d'origine.",
        ],
      },
    ],
    reperes: [
      "Loi du 16 mars 2015 relative à l'amélioration du régime de la commune nouvelle",
      "Loi Marcellin : 16 juillet 1971, dispositif antérieur peu utilisé",
      "Plusieurs centaines de communes nouvelles créées depuis 2015",
    ],
    aRetenir: [
      "La commune nouvelle naît de la fusion volontaire de communes contiguës.",
      "Les anciennes communes peuvent devenir communes déléguées avec un maire délégué.",
      "Le dispositif s'accompagne d'incitations financières temporaires.",
    ],
    pieges: [
      "Ne confondez pas commune nouvelle et fusion imposée : la démarche est volontaire.",
      "Le maire délégué n'a pas les mêmes prérogatives que le maire de la commune nouvelle.",
      "Ne confondez pas commune nouvelle et commune associée de la loi Marcellin, dispositif antérieur différent.",
    ],
    phraseJury:
      "La commune nouvelle, issue de la loi du 16 mars 2015, permet la fusion volontaire de communes contiguës en une collectivité unique, tout en préservant une identité de proximité par le biais des communes déléguées.",
    questionsJury: [
      {
        question: "Sur quelle base juridique repose la commune nouvelle ?",
        reponse: "La loi du 16 mars 2015 relative à l'amélioration du régime de la commune nouvelle.",
      },
      {
        question: "Que deviennent les anciennes communes après la fusion ?",
        reponse: "Elles peuvent devenir des communes déléguées, avec un maire délégué.",
      },
      {
        question: "La fusion en commune nouvelle est-elle obligatoire ?",
        reponse: "Non, elle résulte d'une démarche volontaire des communes concernées.",
      },
      {
        question: "Quel intérêt financier présente la commune nouvelle ?",
        reponse: "Le maintien temporaire cumulé des dotations globales de fonctionnement des anciennes communes.",
      },
    ],
    ultraMemo: "Commune nouvelle = fusion volontaire de 2015, communes déléguées, incitations financières.",
  },
  {
    id: "orga-contrat-plan-etat-region",
    title: "Le contrat de plan État-région",
    theme: "Institutions et organisation territoriale",
    resume:
      "Un outil contractuel pluriannuel qui engage l'État et la région sur des investissements structurants communs.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Nature et objet",
        points: [
          "Le contrat de plan État-région, ou CPER, est un document par lequel l'État et une région s'engagent conjointement à financer des projets d'investissement sur plusieurs années.",
          "Il porte notamment sur les infrastructures de transport, l'enseignement supérieur et la recherche, la transition écologique et l'aménagement numérique.",
          "Il traduit une logique de contractualisation entre l'État et les collectivités, complémentaire de la répartition légale des compétences.",
        ],
      },
      {
        titre: "L'élaboration et le suivi",
        points: [
          "Le CPER est négocié entre le préfet de région, représentant l'État, et le président du conseil régional, après concertation avec les autres collectivités concernées.",
          "Il est établi pour une durée pluriannuelle, généralement calée sur les cycles de programmation des fonds européens.",
          "Sa mise en œuvre fait l'objet d'un suivi annuel et peut donner lieu à des avenants en cours d'exécution.",
        ],
      },
      {
        titre: "Les enjeux",
        points: [
          "Le CPER permet de mutualiser les financements sur des projets d'envergure que ni l'État ni la région ne pourraient porter seuls.",
          "Il peut être décliné à une échelle infrarégionale par des contrats de territoire complémentaires.",
          "Il s'articule avec les fonds européens structurels et d'investissement gérés par la région.",
        ],
      },
    ],
    reperes: [
      "Premiers contrats de plan État-région : 1984",
      "Loi du 29 juillet 1982 portant réforme de la planification, à l'origine du dispositif",
      "Durée pluriannuelle, généralement sept ans",
    ],
    aRetenir: [
      "Le CPER est un engagement financier conjoint et pluriannuel entre l'État et la région.",
      "Il porte sur des investissements structurants comme les transports et l'enseignement supérieur.",
      "Il est négocié entre le préfet de région et le président du conseil régional.",
    ],
    pieges: [
      "Ne confondez pas CPER et SRADDET, qui est un document de planification régional et non un contrat financier avec l'État.",
      "Le CPER n'est pas un transfert de compétence, mais un engagement financier contractuel.",
      "N'attribuez pas sa négociation au seul préfet ou au seul président de région : elle est conjointe.",
    ],
    phraseJury:
      "Le contrat de plan État-région engage conjointement l'État et la région à financer, sur plusieurs années, des projets structurants comme les infrastructures de transport ou la recherche, dans une logique de contractualisation.",
    questionsJury: [
      {
        question: "Qui signe le contrat de plan État-région ?",
        reponse: "Le préfet de région pour l'État et le président du conseil régional.",
      },
      {
        question: "Sur quels domaines porte principalement le CPER ?",
        reponse: "Les transports, l'enseignement supérieur et la recherche, la transition écologique, le numérique.",
      },
      {
        question: "Depuis quand existe ce dispositif ?",
        reponse: "Depuis 1984, dans le prolongement de la loi de 1982 sur la réforme de la planification.",
      },
      {
        question: "Le CPER transfère-t-il des compétences ?",
        reponse: "Non, il organise un engagement financier conjoint, pas un transfert de compétence.",
      },
    ],
    ultraMemo: "CPER = engagement financier conjoint État-région, pluriannuel, sur projets structurants.",
  },
  {
    id: "orga-ingenierie-territoriale",
    title: "L'ingénierie territoriale",
    theme: "Institutions et organisation territoriale",
    resume:
      "L'accompagnement technique et financier apporté aux collectivités, en particulier les plus petites, pour monter leurs projets.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Un besoin lié aux inégalités de moyens",
        points: [
          "L'ingénierie territoriale désigne l'ensemble des compétences techniques, juridiques et financières mobilisées pour aider les collectivités à concevoir et réaliser leurs projets.",
          "Les petites communes rurales manquent souvent de services techniques internes, contrairement aux grandes villes et métropoles.",
          "Ce besoin a justifié la création de structures de mutualisation et d'appui à l'échelle départementale ou intercommunale.",
        ],
      },
      {
        titre: "Les acteurs de l'ingénierie",
        points: [
          "Les agences techniques départementales et les conseils d'architecture, d'urbanisme et de l'environnement apportent un conseil de proximité.",
          "L'Agence nationale de la cohésion des territoriale, créée en 2019, coordonne l'appui de l'État aux projets locaux, en particulier dans les territoires ruraux et fragiles.",
          "Les centres de gestion et les intercommunalités peuvent aussi mutualiser des services d'ingénierie pour les communes membres.",
        ],
      },
      {
        titre: "Les domaines concernés",
        points: [
          "Montage de dossiers de subvention, ingénierie financière et recherche de cofinancements européens, nationaux ou régionaux.",
          "Assistance à maîtrise d'ouvrage pour les projets d'aménagement, de voirie ou de bâtiments publics.",
          "Appui juridique à la passation de marchés publics et à la sécurisation des actes administratifs.",
        ],
      },
    ],
    reperes: [
      "Création de l'Agence nationale de la cohésion des territoires : loi du 22 juillet 2019",
      "Agences techniques départementales fondées sur l'article L. 5511-1 du CGCT",
      "Programme Petites villes de demain, appuyé par l'ingénierie territoriale",
    ],
    aRetenir: [
      "L'ingénierie territoriale compense le manque de moyens techniques des petites collectivités.",
      "L'Agence nationale de la cohésion des territoires coordonne l'appui de l'État depuis 2019.",
      "Elle couvre le montage financier, l'assistance technique et l'appui juridique.",
    ],
    pieges: [
      "Ne confondez pas l'Agence nationale de la cohésion des territoires avec une agence régionale.",
      "L'ingénierie territoriale n'est pas réservée aux communes rurales, même si elle leur profite prioritairement.",
      "Ne réduisez pas l'ingénierie territoriale au seul financement : elle couvre aussi l'appui technique et juridique.",
    ],
    phraseJury:
      "L'ingénierie territoriale regroupe l'ensemble des appuis techniques, financiers et juridiques mobilisés pour aider les collectivités, notamment rurales, à concevoir et réaliser leurs projets, avec un rôle central de l'Agence nationale de la cohésion des territoires.",
    questionsJury: [
      {
        question: "Pourquoi l'ingénierie territoriale est-elle particulièrement utile aux petites communes ?",
        reponse: "Parce qu'elles manquent souvent de services techniques internes pour monter leurs projets.",
      },
      {
        question: "Quelle agence nationale coordonne l'appui de l'État aux territoires ?",
        reponse: "L'Agence nationale de la cohésion des territoires, créée en 2019.",
      },
      {
        question: "Citez un acteur départemental d'appui aux communes.",
        reponse: "L'agence technique départementale.",
      },
      {
        question: "Quels types d'appui recouvre l'ingénierie territoriale ?",
        reponse: "Le montage financier, l'assistance à maîtrise d'ouvrage et l'appui juridique.",
      },
    ],
    ultraMemo: "Ingénierie territoriale = appui technique, financier, juridique, piloté notamment par l'ANCT depuis 2019.",
  },
  {
    id: "orga-communalite",
    title: "La communalité",
    theme: "Institutions et organisation territoriale",
    resume:
      "L'organisation historique du territoire français en un très grand nombre de communes, et ses conséquences.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Une singularité française",
        points: [
          "La France compte environ 34 900 communes, soit à elle seule près de 40 pour cent des communes de l'Union européenne.",
          "Cet émiettement communal trouve son origine dans les paroisses de l'Ancien Régime, transformées en communes par la Révolution française.",
          "Cette organisation contraste avec d'autres pays européens qui ont procédé à des fusions massives de communes au XXe siècle.",
        ],
      },
      {
        titre: "Les tentatives de rationalisation",
        points: [
          "La loi Marcellin de 1971 a tenté d'encourager les fusions de communes, avec un succès limité.",
          "Le développement de l'intercommunalité, depuis la loi Chevènement de 1999, a constitué la réponse principale à l'émiettement communal, sans supprimer les communes.",
          "La loi de 2015 relative aux communes nouvelles a redonné un nouvel élan aux fusions volontaires.",
        ],
      },
      {
        titre: "Les enjeux de la communalité",
        points: [
          "L'émiettement communal favorise la proximité démocratique mais complique la mutualisation des moyens et des services.",
          "Il pose la question de l'échelle pertinente pour l'exercice de certaines compétences, entre commune et intercommunalité.",
          "Le maintien du grand nombre de communes reste un choix politique fort, attaché à l'attachement des citoyens à l'échelon communal.",
        ],
      },
    ],
    reperes: [
      "Environ 34 900 communes en France",
      "Loi Marcellin : 16 juillet 1971",
      "Loi Chevènement : 12 juillet 1999",
    ],
    aRetenir: [
      "La France se caractérise par un très grand nombre de communes, hérité de l'Ancien Régime.",
      "L'intercommunalité et les communes nouvelles sont les deux réponses principales à cet émiettement.",
      "Ce choix reflète l'attachement des citoyens à la proximité de l'échelon communal.",
    ],
    pieges: [
      "Ne confondez pas communalité (le nombre élevé de communes) et intercommunalité (la coopération entre communes).",
      "La loi Marcellin de 1971 n'a pas eu le succès escompté, ne la présentez pas comme une réussite massive.",
      "Ne dites pas que l'intercommunalité a supprimé les communes : elles subsistent, avec des compétences transférées.",
    ],
    phraseJury:
      "La communalité désigne le très grand nombre de communes françaises, hérité de l'Ancien Régime, auquel l'intercommunalité et, plus récemment, les communes nouvelles apportent des réponses sans remettre en cause l'existence de la commune.",
    questionsJury: [
      {
        question: "Combien la France compte-t-elle de communes environ ?",
        reponse: "Environ 34 900 communes.",
      },
      {
        question: "D'où vient historiquement le découpage communal français ?",
        reponse: "Des paroisses de l'Ancien Régime, transformées en communes par la Révolution.",
      },
      {
        question: "Quelle loi a tenté sans grand succès de fusionner les communes en 1971 ?",
        reponse: "La loi Marcellin du 16 juillet 1971.",
      },
      {
        question: "Quelles sont les deux réponses actuelles à l'émiettement communal ?",
        reponse: "L'intercommunalité et les communes nouvelles.",
      },
    ],
    ultraMemo: "Communalité = 34 900 communes héritées de l'Ancien Régime ; réponses : intercommunalité, communes nouvelles.",
  },
  {
    id: "orga-plan-local-urbanisme",
    title: "Le plan local d'urbanisme",
    theme: "Action publique et services",
    resume:
      "Le principal document de planification urbaine à l'échelle communale ou intercommunale, qui fixe les règles de construction et d'usage des sols.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Nature et portée",
        points: [
          "Le plan local d'urbanisme, ou PLU, définit les règles générales d'utilisation du sol sur le territoire d'une commune ou d'un établissement public de coopération intercommunale.",
          "Il traduit un projet d'aménagement et de développement durables et fixe le zonage du territoire en zones urbaines, à urbaniser, agricoles et naturelles.",
          "Il remplace depuis 2000 l'ancien plan d'occupation des sols, avec une approche plus large intégrant les enjeux environnementaux et de mixité sociale.",
        ],
      },
      {
        titre: "Le contenu du document",
        points: [
          "Un rapport de présentation, qui expose le diagnostic du territoire et justifie les choix retenus.",
          "Le projet d'aménagement et de développement durables, qui fixe les orientations générales de la commune.",
          "Le règlement et les documents graphiques, qui précisent les règles applicables à chaque zone.",
          "Des orientations d'aménagement et de programmation, qui détaillent certains secteurs à enjeux.",
        ],
      },
      {
        titre: "L'élaboration et l'évolution",
        points: [
          "Le PLU est élaboré à l'initiative de la commune ou de l'intercommunalité compétente, en concertation avec la population et les personnes publiques associées.",
          "Il doit être compatible avec les documents supérieurs tels que le schéma de cohérence territoriale.",
          "La loi ALUR de 2014 a favorisé le transfert de la compétence PLU aux intercommunalités, sous forme de PLU intercommunal, ou PLUi.",
          "Le PLU peut être modifié ou révisé selon des procédures allégées ou complètes suivant l'ampleur du changement.",
        ],
      },
    ],
    reperes: [
      "Loi SRU du 13 décembre 2000 : création du PLU",
      "Loi ALUR du 24 mars 2014 : transfert de compétence vers l'intercommunalité",
      "Article L. 151-1 et suivants du code de l'urbanisme",
    ],
    aRetenir: [
      "Le PLU remplace le plan d'occupation des sols depuis 2000 et intègre les enjeux de développement durable.",
      "Il doit être compatible avec le schéma de cohérence territoriale.",
      "La compétence PLU peut être exercée à l'échelle intercommunale depuis la loi ALUR.",
    ],
    pieges: [
      "Ne confondez pas PLU et carte communale, document plus simple pour les petites communes.",
      "Ne dites pas que le PLU doit être identique au SCoT : il doit être compatible, pas conforme au mot près.",
      "Le transfert du PLU à l'intercommunalité n'est pas systématique, il dépend des choix locaux et de délais spécifiques.",
    ],
    phraseJury:
      "Le plan local d'urbanisme fixe, à l'échelle communale ou intercommunale, les règles d'utilisation des sols en traduisant un projet d'aménagement et de développement durables, dans le respect de compatibilité avec les documents supérieurs.",
    questionsJury: [
      {
        question: "Quel document le PLU a-t-il remplacé ?",
        reponse: "Le plan d'occupation des sols, depuis la loi SRU de 2000.",
      },
      {
        question: "Quelles sont les grandes zones prévues par le PLU ?",
        reponse: "Zones urbaines, à urbaniser, agricoles et naturelles.",
      },
      {
        question: "Quel document supérieur encadre le PLU ?",
        reponse: "Le schéma de cohérence territoriale, avec lequel il doit être compatible.",
      },
      {
        question: "Qu'a changé la loi ALUR de 2014 pour le PLU ?",
        reponse: "Elle a favorisé le transfert de la compétence PLU aux intercommunalités, sous forme de PLUi.",
      },
    ],
    ultraMemo: "PLU = zonage + règlement + PADD, compatible avec le SCoT, transférable à l'intercommunalité.",
  },
  {
    id: "orga-droit-preemption-urbain",
    title: "Le droit de préemption urbain",
    theme: "Action publique et services",
    resume:
      "Un outil foncier qui permet à une collectivité d'acquérir en priorité un bien mis en vente pour réaliser un projet d'intérêt général.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Principe et fondement",
        points: [
          "Le droit de préemption urbain, ou DPU, permet à une commune ou un EPCI compétent d'acquérir en priorité un bien immobilier mis en vente sur son territoire.",
          "Il doit être institué par une délibération du conseil municipal ou communautaire, qui délimite les zones où il s'applique.",
          "Il ne peut être exercé qu'en vue de réaliser une action ou une opération d'aménagement d'intérêt général, comme le logement social ou un équipement public.",
        ],
      },
      {
        titre: "La procédure",
        points: [
          "Le vendeur doit déposer une déclaration d'intention d'aliéner auprès de la collectivité titulaire du droit avant toute vente.",
          "La collectivité dispose d'un délai de deux mois pour se prononcer, faute de quoi elle est réputée avoir renoncé à préempter.",
          "En cas de désaccord sur le prix, la collectivité peut saisir le juge de l'expropriation pour fixer un prix, ou renoncer à préempter.",
        ],
      },
      {
        titre: "Les limites du droit de préemption",
        points: [
          "Le refus de préempter comme la décision de préempter doivent être motivés et fondés sur un projet réel, sous peine d'illégalité.",
          "Certaines ventes échappent au champ du DPU, comme les donations entre proches ou certains partages successoraux.",
          "Le droit de préemption ne doit pas être utilisé dans un but étranger à l'aménagement, sous peine de détournement de pouvoir sanctionné par le juge.",
        ],
      },
    ],
    reperes: [
      "Loi du 18 juillet 1985 relative à la définition et à la mise en œuvre de principes d'aménagement",
      "Délai de réponse de la collectivité : deux mois",
      "Articles L. 211-1 et suivants du code de l'urbanisme",
    ],
    aRetenir: [
      "Le DPU exige une délibération préalable et un projet d'intérêt général réel.",
      "Le vendeur doit déposer une déclaration d'intention d'aliéner avant la vente.",
      "La décision de préempter doit être motivée, sous peine d'illégalité pour détournement de pouvoir.",
    ],
    pieges: [
      "Ne confondez pas droit de préemption et expropriation, qui est une procédure contraignante distincte.",
      "L'absence de réponse dans le délai de deux mois vaut renonciation, pas accord tacite à préempter.",
      "Une préemption sans projet réel d'aménagement est illégale.",
    ],
    phraseJury:
      "Le droit de préemption urbain permet à une collectivité d'acquérir en priorité un bien mis en vente pour réaliser un projet d'aménagement d'intérêt général, à condition que sa décision soit motivée par un projet réel.",
    questionsJury: [
      {
        question: "Que doit faire le vendeur avant de vendre un bien soumis au DPU ?",
        reponse: "Déposer une déclaration d'intention d'aliéner auprès de la collectivité titulaire du droit.",
      },
      {
        question: "Quel est le délai de réponse de la collectivité ?",
        reponse: "Deux mois, au-delà desquels elle est réputée avoir renoncé.",
      },
      {
        question: "La collectivité peut-elle préempter sans projet précis ?",
        reponse: "Non, la décision doit être motivée par un projet réel d'intérêt général, sous peine d'illégalité.",
      },
      {
        question: "Que se passe-t-il en cas de désaccord sur le prix ?",
        reponse: "La collectivité peut saisir le juge de l'expropriation pour fixer le prix, ou renoncer.",
      },
    ],
    ultraMemo: "DPU = déclaration d'intention d'aliéner, délai de deux mois, projet réel d'intérêt général obligatoire.",
  },
  {
    id: "orga-expropriation",
    title: "L'expropriation",
    theme: "Action publique et services",
    resume:
      "La procédure exceptionnelle qui permet à une personne publique de contraindre un propriétaire à céder son bien pour cause d'utilité publique, contre indemnisation.",
    duree: "7 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Un fondement constitutionnel",
        points: [
          "L'expropriation trouve son fondement dans l'article 17 de la Déclaration des droits de l'homme et du citoyen de 1789, qui pose le principe de propriété comme inviolable et sacré, sauf nécessité publique légalement constatée.",
          "Elle exige une cause d'utilité publique, une juste et préalable indemnité, et le respect d'une procédure strictement encadrée.",
          "Elle se distingue de la préemption car elle est imposée au propriétaire, sans possibilité de refus de vendre.",
        ],
      },
      {
        titre: "La phase administrative",
        points: [
          "Une enquête publique préalable permet d'informer et de recueillir l'avis de la population sur le projet.",
          "Le préfet déclare l'utilité publique du projet par un arrêté de déclaration d'utilité publique, ou DUP.",
          "Un arrêté de cessibilité désigne précisément les parcelles concernées par l'expropriation.",
        ],
      },
      {
        titre: "La phase judiciaire",
        points: [
          "Le juge de l'expropriation, magistrat judiciaire, prononce le transfert de propriété par une ordonnance d'expropriation.",
          "Il fixe également le montant de l'indemnisation, à défaut d'accord amiable, sur la base d'une évaluation par France Domaine.",
          "L'exproprié dispose de voies de recours pour contester le montant de l'indemnité devant la juridiction de l'expropriation.",
        ],
      },
    ],
    reperes: [
      "Article 17 de la Déclaration des droits de l'homme et du citoyen de 1789",
      "Code de l'expropriation pour cause d'utilité publique",
      "Juge judiciaire compétent pour le transfert de propriété et l'indemnisation",
    ],
    aRetenir: [
      "L'expropriation exige une utilité publique déclarée et une juste indemnité préalable.",
      "La procédure comporte une phase administrative et une phase judiciaire distinctes.",
      "Le juge judiciaire, et non administratif, prononce le transfert de propriété.",
    ],
    pieges: [
      "Ne confondez pas expropriation et préemption : l'expropriation est imposée, la préemption suppose une vente initiée par le propriétaire.",
      "Ne dites pas que le juge administratif fixe l'indemnité : c'est le juge judiciaire, gardien de la propriété privée.",
      "L'expropriation exige une déclaration d'utilité publique, elle ne peut pas être décidée directement par simple délibération.",
    ],
    phraseJury:
      "L'expropriation permet à une personne publique d'acquérir de force un bien pour une cause d'utilité publique déclarée, moyennant une juste et préalable indemnité fixée, en cas de désaccord, par le juge judiciaire.",
    questionsJury: [
      {
        question: "Quel texte fonde le droit de propriété face à l'expropriation ?",
        reponse: "L'article 17 de la Déclaration des droits de l'homme et du citoyen de 1789.",
      },
      {
        question: "Qui déclare l'utilité publique d'un projet ?",
        reponse: "Le préfet, par un arrêté de déclaration d'utilité publique.",
      },
      {
        question: "Quel juge prononce le transfert de propriété ?",
        reponse: "Le juge judiciaire de l'expropriation.",
      },
      {
        question: "Quelle différence avec le droit de préemption ?",
        reponse: "L'expropriation est imposée au propriétaire, la préemption suppose une vente déjà engagée par lui.",
      },
    ],
    ultraMemo: "Expropriation = DUP du préfet + juste indemnité + transfert par le juge judiciaire.",
  },
  {
    id: "orga-autorisation-occupation-temporaire",
    title: "L'autorisation d'occupation temporaire",
    theme: "Action publique et services",
    resume:
      "Le titre qui permet d'occuper le domaine public de manière précaire, révocable et souvent payante.",
    duree: "6 min",
    categories: ["A", "B"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Le principe du domaine public",
        points: [
          "Le domaine public est par nature inaliénable et imprescriptible, ce qui interdit toute occupation privative sans titre.",
          "L'autorisation d'occupation temporaire, ou AOT, permet à une personne privée ou publique d'occuper une dépendance du domaine public pour une activité déterminée.",
          "Elle est délivrée par l'autorité gestionnaire du domaine, la commune pour son domaine public, l'État ou un autre gestionnaire selon les cas.",
        ],
      },
      {
        titre: "Les caractéristiques de l'autorisation",
        points: [
          "Elle est précaire et révocable : l'administration peut y mettre fin à tout moment pour un motif d'intérêt général, sans indemnité en principe.",
          "Elle est personnelle et incessible, sauf autorisation expresse de la collectivité.",
          "Elle donne lieu au paiement d'une redevance d'occupation, calculée notamment en fonction des avantages retirés par l'occupant.",
          "Elle doit respecter les principes de transparence et, selon les cas, de mise en concurrence préalable depuis les évolutions du droit de la domanialité publique.",
        ],
      },
      {
        titre: "Les usages courants",
        points: [
          "Installation de terrasses de café, de kiosques, de marchés ou d'équipements techniques sur la voirie.",
          "Occupation par des réseaux de communication électronique ou des ouvrages énergétiques.",
          "Certaines AOT constitutives de droits réels permettent à l'occupant de construire un ouvrage et de l'amortir sur une durée limitée.",
        ],
      },
    ],
    reperes: [
      "Code général de la propriété des personnes publiques",
      "Ordonnance du 19 avril 2017 relative aux règles de domanialité publique",
      "Principe de précarité et de révocabilité de l'AOT",
    ],
    aRetenir: [
      "L'AOT est précaire, révocable et donne lieu au paiement d'une redevance.",
      "Elle est délivrée par le gestionnaire du domaine public concerné.",
      "Certaines AOT peuvent constituer des droits réels pour permettre la réalisation d'ouvrages.",
    ],
    pieges: [
      "Ne confondez pas AOT et bail commercial : le domaine public exclut l'application du statut des baux commerciaux, sauf exceptions légales.",
      "La révocation de l'AOT pour motif d'intérêt général n'ouvre en principe pas droit à indemnisation.",
      "Ne dites pas que l'AOT est cessible librement : elle est en principe personnelle.",
    ],
    phraseJury:
      "L'autorisation d'occupation temporaire permet d'occuper précairement le domaine public contre le paiement d'une redevance, la précarité de ce titre justifiant sa révocation à tout moment pour un motif d'intérêt général.",
    questionsJury: [
      {
        question: "Pourquoi l'AOT est-elle qualifiée de précaire ?",
        reponse: "Parce que l'administration peut la révoquer à tout moment pour un motif d'intérêt général.",
      },
      {
        question: "L'AOT donne-t-elle lieu à indemnisation en cas de révocation ?",
        reponse: "En principe non, sauf clauses ou textes contraires.",
      },
      {
        question: "L'occupant peut-il céder son AOT librement ?",
        reponse: "Non, elle est personnelle, sauf autorisation expresse de la collectivité.",
      },
      {
        question: "Qu'est-ce qu'une AOT constitutive de droits réels ?",
        reponse: "Une autorisation qui permet à l'occupant de réaliser un ouvrage et de l'amortir sur une durée déterminée.",
      },
    ],
    ultraMemo: "AOT = titre précaire et révocable, avec redevance, sur le domaine public inaliénable.",
  },
  {
    id: "orga-plan-communal-sauvegarde",
    title: "Le plan communal de sauvegarde",
    theme: "Action publique et services",
    resume:
      "L'outil opérationnel qui organise la réponse communale aux crises et catastrophes, sous la responsabilité du maire.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Cadre et obligation",
        points: [
          "Le plan communal de sauvegarde, ou PCS, organise au niveau communal les actions de préparation et de gestion des crises et catastrophes.",
          "Il est obligatoire pour les communes dotées d'un plan de prévention des risques naturels approuvé ou exposées à un risque majeur identifié.",
          "Il s'inscrit dans le prolongement du pouvoir de police générale du maire en matière de sécurité publique.",
        ],
      },
      {
        titre: "Le contenu du plan",
        points: [
          "Le document d'information communal sur les risques majeurs, qui informe la population sur les risques et les consignes de sécurité.",
          "L'organisation du poste de commandement communal, mobilisable en cas d'événement pour coordonner la réponse locale.",
          "Les modalités d'alerte, d'information et de mise en sécurité de la population, y compris les personnes vulnérables recensées.",
          "L'annuaire des moyens communaux et des partenaires mobilisables, comme les associations agréées de sécurité civile.",
        ],
      },
      {
        titre: "L'articulation avec les autres plans",
        points: [
          "Le PCS s'articule avec le plan ORSEC, dispositif départemental et zonal de gestion des crises piloté par le préfet.",
          "Le maire reste le premier échelon de gestion de crise, avant l'intervention éventuelle du préfet en cas de dépassement des moyens communaux.",
          "Le PCS doit être régulièrement mis à jour et faire l'objet d'exercices pour en tester l'efficacité opérationnelle.",
        ],
      },
    ],
    reperes: [
      "Loi du 13 août 2004 de modernisation de la sécurité civile",
      "Article L. 731-3 du code de la sécurité intérieure",
      "Plan ORSEC : dispositif départemental piloté par le préfet",
    ],
    aRetenir: [
      "Le PCS est obligatoire dans les communes exposées à un risque majeur ou dotées d'un plan de prévention des risques approuvé.",
      "Il organise concrètement l'alerte, l'information et la mise en sécurité de la population.",
      "Le maire est le premier échelon de gestion de crise, avant le relais préfectoral via le plan ORSEC.",
    ],
    pieges: [
      "Ne confondez pas plan communal de sauvegarde et plan de prévention des risques naturels, qui est un document distinct de zonage du risque.",
      "Le PCS n'est pas facultatif dans toutes les communes : il est obligatoire sous certaines conditions.",
      "Le préfet n'intervient pas systématiquement : il prend le relais seulement en cas de dépassement des moyens communaux.",
    ],
    phraseJury:
      "Le plan communal de sauvegarde organise, sous l'autorité du maire, la préparation et la gestion opérationnelle des crises au niveau communal, en s'articulant avec le plan ORSEC piloté par le préfet en cas de dépassement des moyens locaux.",
    questionsJury: [
      {
        question: "Dans quelles communes le PCS est-il obligatoire ?",
        reponse: "Celles dotées d'un plan de prévention des risques naturels approuvé ou exposées à un risque majeur.",
      },
      {
        question: "Qui est responsable de la mise en œuvre du PCS ?",
        reponse: "Le maire, au titre de son pouvoir de police générale.",
      },
      {
        question: "Quel dispositif départemental prend le relais en cas de crise majeure ?",
        reponse: "Le plan ORSEC, piloté par le préfet.",
      },
      {
        question: "Que contient le document d'information communal sur les risques majeurs ?",
        reponse: "L'information de la population sur les risques et les consignes de sécurité à suivre.",
      },
    ],
    ultraMemo: "PCS = organisation communale de crise, obligatoire si risque majeur, sous l'autorité du maire.",
  },
  {
    id: "orga-intercommunalite",
    title: "L'intercommunalité",
    theme: "Institutions et organisation territoriale",
    resume:
      "La coopération entre communes au sein d'établissements publics, devenue le cadre structurant de l'action locale.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Les établissements publics de coopération intercommunale",
        points: [
          "Les EPCI sont des établissements publics regroupant des communes pour exercer en commun certaines compétences.",
          "On distingue les EPCI à fiscalité propre (communautés de communes, d'agglomération, urbaines, métropoles) et les syndicats sans fiscalité propre.",
          "Depuis la loi NOTRe, toutes les communes françaises appartiennent obligatoirement à un EPCI à fiscalité propre, sauf exceptions marginales pour Paris.",
        ],
      },
      {
        titre: "Le fonctionnement institutionnel",
        points: [
          "Le conseil communautaire ou métropolitain est l'organe délibérant, composé de délégués des communes membres selon une répartition démographique.",
          "Le président est élu par le conseil communautaire, avec un bureau et des vice-présidents pour l'assister.",
          "Les compétences transférées à l'EPCI sont exercées de façon exclusive : la commune ne peut plus intervenir dans ce champ, sauf délégation inverse.",
        ],
      },
      {
        titre: "Les enjeux financiers et politiques",
        points: [
          "Le régime fiscal principal est la fiscalité professionnelle unique, qui centralise la fiscalité économique au niveau intercommunal.",
          "Les EPCI perçoivent une dotation d'intercommunalité et peuvent redistribuer une attribution de compensation aux communes membres.",
          "L'intercommunalité pose la question de l'équilibre entre mutualisation des moyens et maintien de l'autonomie communale.",
        ],
      },
    ],
    reperes: [
      "Loi Chevènement : 12 juillet 1999",
      "Loi NOTRe : 7 août 2015, généralisation de l'appartenance à un EPCI à fiscalité propre",
      "Environ 1 250 EPCI à fiscalité propre en France",
    ],
    aRetenir: [
      "Toutes les communes appartiennent à un EPCI à fiscalité propre depuis la loi NOTRe.",
      "Les compétences transférées sont exercées de façon exclusive par l'EPCI.",
      "La fiscalité professionnelle unique est le régime fiscal de référence des EPCI.",
    ],
    pieges: [
      "Ne dites pas que l'intercommunalité est facultative pour les communes : l'appartenance à un EPCI à fiscalité propre est obligatoire.",
      "Le président de l'EPCI n'est pas élu au suffrage universel direct, mais par le conseil communautaire.",
      "Ne confondez pas EPCI à fiscalité propre et syndicat mixte, qui n'a pas de fiscalité propre.",
    ],
    phraseJury:
      "L'intercommunalité, obligatoire depuis la loi NOTRe pour toutes les communes, organise l'exercice en commun de compétences transférées de façon exclusive à des établissements publics dotés, pour la plupart, d'une fiscalité propre.",
    questionsJury: [
      {
        question: "L'appartenance à un EPCI à fiscalité propre est-elle obligatoire ?",
        reponse: "Oui, depuis la loi NOTRe de 2015, pour toutes les communes.",
      },
      {
        question: "Comment est élu le président de l'EPCI ?",
        reponse: "Par le conseil communautaire, non au suffrage universel direct.",
      },
      {
        question: "Que devient une compétence transférée à l'EPCI pour la commune ?",
        reponse: "La commune ne peut plus l'exercer, en vertu du principe d'exclusivité.",
      },
      {
        question: "Quel est le régime fiscal principal des EPCI ?",
        reponse: "La fiscalité professionnelle unique.",
      },
    ],
    ultraMemo: "Intercommunalité = EPCI obligatoire, compétences exclusives, fiscalité professionnelle unique.",
  },
];
