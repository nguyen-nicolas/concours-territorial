export interface MethodeEtape {
  titre: string;
  duree: string;
  description: string;
  conseils: string[];
}

export interface MethodePlanPartie {
  titre: string;
  contenu: string;
}

export interface MethodeFiche {
  id: string;
  title: string;
  epreuve: string;
  concours: string;
  duree: string;
  resume: string;
  /** Ce que le jury attend vraiment de l'épreuve. */
  attendu: string[];
  etapes: MethodeEtape[];
  plan: MethodePlanPartie[];
  formulations: { usage: string; exemple: string }[];
  criteres: { critere: string; detail: string }[];
  erreurs: string[];
  extrait: { titre: string; lignes: string[] };
}

export const methodeFiches: MethodeFiche[] = [
  {
    id: "note-administrative",
    title: "La note administrative",
    epreuve: "Épreuve d'admissibilité sur dossier",
    concours: "Rédacteur, adjoint administratif principal, attaché (variante)",
    duree: "3 heures — dossier de 15 à 25 pages",
    resume:
      "Répondre à une commande précise d'un supérieur hiérarchique à partir d'un dossier, dans un document neutre, structuré et immédiatement exploitable.",
    attendu: [
      "Une note utilisable telle quelle par son destinataire, sans qu'il ait à lire le dossier.",
      "Une neutralité stricte : vous exposez le droit et les faits, vous ne donnez pas votre opinion personnelle.",
      "Une exploitation exclusive du dossier : aucune connaissance extérieure, aucune invention.",
      "Une structure apparente : titres, sous-titres, paragraphes courts, transitions.",
    ],
    etapes: [
      {
        titre: "Lire la commande",
        duree: "10 minutes",
        description:
          "La lettre de commande est la seule consigne qui compte. Identifiez qui écrit, à qui, sur quel sujet, et ce qui est demandé exactement : un état des lieux ? des propositions ? les deux ?",
        conseils: [
          "Soulignez le verbe de la commande : « présenter », « analyser », « proposer » n'appellent pas le même plan.",
          "Notez en haut de votre brouillon la phrase : « Le destinataire doit pouvoir, après lecture, … ».",
          "Repérez si des propositions sont demandées : si oui, la seconde partie leur est réservée.",
        ],
      },
      {
        titre: "Survoler le dossier",
        duree: "20 minutes",
        description:
          "Parcourez le sommaire, les titres, les sources et les dates. Classez mentalement les documents en trois familles : textes juridiques, éléments de contexte, cas concrets ou données chiffrées.",
        conseils: [
          "Numérotez les documents et notez en une ligne l'apport de chacun.",
          "Repérez la hiérarchie des normes : loi, décret, circulaire, jurisprudence.",
          "Méfiez-vous des documents « pièges » : anciens, abrogés, ou hors sujet.",
        ],
      },
      {
        titre: "Construire le plan",
        duree: "30 minutes",
        description:
          "Le plan se déduit de la commande, jamais de l'ordre des documents. Deux parties, deux sous-parties chacune : c'est le format attendu et le plus lisible.",
        conseils: [
          "Rédigez les quatre titres en phrases complètes avant d'écrire la note.",
          "Vérifiez que chaque document utile trouve sa place dans une sous-partie.",
          "Équilibrez : deux sous-parties de longueur comparable.",
        ],
      },
      {
        titre: "Rédiger",
        duree: "1 h 45",
        description:
          "Rédaction au fil de l'eau, sans repasser en arrière. Phrases courtes, voix active, présent de l'indicatif, formulations impersonnelles.",
        conseils: [
          "Chaque paragraphe : une idée, une référence au dossier, une conséquence pratique.",
          "Citez la source entre parenthèses : (document 4) ou (article L. 2121-29 du CGCT).",
          "Ne recopiez jamais un document : reformulez systématiquement.",
        ],
      },
      {
        titre: "Relire",
        duree: "15 minutes",
        description:
          "Une relecture dédiée à l'orthographe et aux accords, une autre à la cohérence des titres et à la présence de l'en-tête réglementaire.",
        conseils: [
          "Vérifiez l'en-tête : collectivité, service émetteur, destinataire, date, objet, références.",
          "Traquez les « je pense », « il faudrait » : ils n'ont pas leur place.",
          "Contrôlez les accords de participes passés : c'est le poste de points le plus facile à récupérer.",
        ],
      },
    ],
    plan: [
      {
        titre: "En-tête administratif",
        contenu:
          "Collectivité, direction émettrice, lieu et date, mention « NOTE À L'ATTENTION DE… », objet en une ligne, références des textes. Aucun élément personnel : ni nom, ni signature manuscrite.",
      },
      {
        titre: "Introduction (10 lignes)",
        contenu:
          "Contexte en deux phrases, rappel de la commande, annonce du plan. Pas d'accroche littéraire, pas de citation.",
      },
      {
        titre: "I. Le cadre juridique et l'état des lieux",
        contenu:
          "A. Les règles applicables (hiérarchie des normes, obligations de la collectivité). B. La situation constatée et ses difficultés, appuyée sur les données du dossier.",
      },
      {
        titre: "II. Les conséquences pour la collectivité et les mesures envisageables",
        contenu:
          "A. Les enjeux et les risques (juridiques, financiers, organisationnels). B. Les actions à conduire, hiérarchisées, avec leurs conditions de mise en œuvre — si la commande les demande.",
      },
      {
        titre: "Conclusion (facultative, 3 lignes)",
        contenu:
          "Une conclusion très brève, ou pas de conclusion du tout : la note administrative s'achève souvent sur la dernière mesure proposée.",
      },
    ],
    formulations: [
      {
        usage: "Annoncer le plan",
        exemple:
          "La présente note rappelle le cadre juridique applicable (I) avant d'exposer les mesures envisageables pour la collectivité (II).",
      },
      {
        usage: "Introduire une règle",
        exemple:
          "Aux termes de l'article L. 2121-29 du code général des collectivités territoriales, le conseil municipal règle par ses délibérations les affaires de la commune.",
      },
      {
        usage: "Signaler un risque",
        exemple:
          "À défaut de régularisation, la collectivité s'expose à l'annulation de la délibération par le juge administratif.",
      },
      {
        usage: "Proposer sans s'engager personnellement",
        exemple:
          "Trois options peuvent être envisagées ; la première présente l'avantage de… tandis qu'elle suppose…",
      },
    ],
    criteres: [
      {
        critere: "Respect de la commande",
        detail:
          "La note répond à la question posée, à personne d'autre qu'au destinataire désigné, et couvre tout ce qui était demandé.",
      },
      {
        critere: "Forme administrative",
        detail:
          "En-tête complet, objet, titres apparents, ton neutre et impersonnel, absence de « je ».",
      },
      {
        critere: "Exploitation du dossier",
        detail:
          "Tous les documents utiles sont mobilisés, aucun n'est recopié, les sources sont citées.",
      },
      {
        critere: "Langue",
        detail:
          "Orthographe, syntaxe et ponctuation : souvent 4 à 5 points du barème, entièrement récupérables.",
      },
    ],
    erreurs: [
      "Traiter le sujet « en général » au lieu de répondre à la commande précise.",
      "Ajouter des connaissances personnelles absentes du dossier.",
      "Employer la première personne ou donner un avis (« à mon sens »).",
      "Recopier de longs passages des documents.",
      "Oublier l'en-tête administratif, qui est noté à lui seul.",
    ],
    extrait: {
      titre: "Exemple d'en-tête et d'introduction",
      lignes: [
        "COMMUNE DE …                                    Le 12 mars",
        "Direction des ressources humaines",
        "",
        "NOTE À L'ATTENTION DE MONSIEUR LE DIRECTEUR GÉNÉRAL DES SERVICES",
        "",
        "Objet : conditions de mise en œuvre du télétravail dans les services municipaux",
        "Références : décret n° 2016-151 du 11 février 2016 ; délibération du 4 décembre",
        "",
        "Le déploiement du télétravail, engagé depuis deux ans, appelle une clarification",
        "des règles applicables aux agents et de leurs conditions matérielles d'exercice.",
        "La présente note rappelle le cadre juridique en vigueur (I) puis expose les",
        "mesures d'organisation envisageables pour la collectivité (II).",
      ],
    },
  },
  {
    id: "note-de-synthese",
    title: "La note de synthèse",
    epreuve: "Épreuve d'admissibilité sur dossier",
    concours: "Attaché, ingénieur, rédacteur principal, bibliothécaire",
    duree: "4 heures — dossier de 25 à 40 pages",
    resume:
      "Restituer fidèlement et de façon structurée l'essentiel d'un dossier volumineux, sans rien y ajouter et sans rien en oublier d'important.",
    attendu: [
      "Une objectivité totale : la note reflète le dossier, jamais votre opinion.",
      "L'exhaustivité relative : tous les documents doivent être utilisés, au moins une fois.",
      "Un plan construit sur les idées, jamais document par document.",
      "Une note autonome : lisible par quelqu'un qui n'a pas ouvert le dossier.",
    ],
    etapes: [
      {
        titre: "Lire le sujet et poser la problématique",
        duree: "10 minutes",
        description:
          "Le libellé du sujet fixe l'angle. Formulez en une phrase la question à laquelle le dossier répond : c'est votre problématique, et elle guidera tous vos choix de tri.",
        conseils: [
          "Reformulez le sujet avec vos mots pour vérifier que vous l'avez compris.",
          "Notez les deux ou trois tensions probables : efficacité / coût, sécurité / liberté, urgence / concertation.",
        ],
      },
      {
        titre: "Lire le dossier avec une grille",
        duree: "1 h 15",
        description:
          "Lecture active document par document, avec un tableau : numéro, nature, date, idées principales, chiffres clés. Les idées se répètent d'un document à l'autre : ce sont elles qui deviendront vos sous-parties.",
        conseils: [
          "Une ligne par document, trois idées maximum chacun.",
          "Surlignez les chiffres et les dates : ils font la valeur de la note.",
          "Repérez les documents contradictoires : la contradiction est souvent le cœur du sujet.",
        ],
      },
      {
        titre: "Regrouper les idées et bâtir le plan",
        duree: "40 minutes",
        description:
          "Rassemblez les idées voisines en blocs, puis ordonnez les blocs en deux parties et quatre sous-parties. Vérifiez qu'aucun document ne reste orphelin.",
        conseils: [
          "Plans efficaces : constat / perspectives, enjeux / réponses, atouts / limites.",
          "Évitez le plan chronologique, qui aboutit à un résumé au fil de l'eau.",
          "Chaque sous-partie doit s'appuyer sur au moins deux documents différents.",
        ],
      },
      {
        titre: "Rédiger",
        duree: "1 h 40",
        description:
          "Introduction complète, développement structuré avec titres apparents, transitions courtes. Longueur habituelle : 4 pages, soit environ 1 400 mots.",
        conseils: [
          "Citez systématiquement vos sources : (doc. 7), (doc. 3 et 9).",
          "Une idée par paragraphe, annoncée par sa première phrase.",
          "Gardez le même temps verbal d'un bout à l'autre : le présent.",
        ],
      },
      {
        titre: "Relire",
        duree: "15 minutes",
        description:
          "Vérifiez l'équilibre des parties, la présence de tous les documents, l'absence de jugement personnel et l'orthographe.",
        conseils: [
          "Cochez vos documents sur la grille au fur et à mesure de la relecture.",
          "Supprimez tout adjectif évaluatif : « remarquable », « insuffisant », « scandaleux ».",
        ],
      },
    ],
    plan: [
      {
        titre: "Introduction (15 à 20 lignes)",
        contenu:
          "Accroche factuelle tirée du dossier, définition rapide du sujet, énoncé de la problématique, annonce du plan en deux parties. C'est la partie la plus lue par le correcteur : soignez-la.",
      },
      {
        titre: "I. Un état des lieux : ce que le dossier établit",
        contenu:
          "A. Les données de la situation (chiffres, cadre juridique, acteurs). B. Les difficultés et tensions mises en évidence par les documents.",
      },
      {
        titre: "II. Des perspectives : ce que le dossier propose ou laisse ouvert",
        contenu:
          "A. Les réponses déjà expérimentées et leurs résultats. B. Les pistes discutées, leurs conditions et leurs limites.",
      },
      {
        titre: "Pas de conclusion",
        contenu:
          "La note de synthèse classique ne comporte pas de conclusion personnelle. Si le sujet demande une « note avec propositions », les propositions forment alors une partie distincte, clairement annoncée.",
      },
    ],
    formulations: [
      {
        usage: "Introduire la problématique",
        exemple:
          "Le dossier invite à s'interroger sur les conditions dans lesquelles les collectivités peuvent concilier maîtrise de la dépense et maintien du service rendu aux usagers.",
      },
      {
        usage: "Attribuer une idée",
        exemple:
          "Selon le rapport de la Cour des comptes (doc. 5), cette dépense a progressé de 12 % en trois ans.",
      },
      {
        usage: "Signaler une divergence",
        exemple:
          "Alors que le document 3 insiste sur les gains attendus, le document 8 souligne le coût de la période de transition.",
      },
      {
        usage: "Transition entre deux parties",
        exemple:
          "Ce constat éclaire les réponses apportées ces dernières années, dont la portée reste inégale.",
      },
    ],
    criteres: [
      {
        critere: "Fidélité au dossier",
        detail:
          "Aucun apport extérieur, aucune déformation des sources, aucun document ignoré.",
      },
      {
        critere: "Qualité du plan",
        detail:
          "Un plan par idées, équilibré, avec des titres qui annoncent un contenu et non un thème.",
      },
      {
        critere: "Densité",
        detail:
          "Des chiffres, des dates, des références précises : une note vague est une note moyenne.",
      },
      {
        critere: "Neutralité et langue",
        detail: "Aucun jugement de valeur, orthographe et syntaxe irréprochables.",
      },
    ],
    erreurs: [
      "Traiter les documents l'un après l'autre : c'est un résumé, pas une synthèse.",
      "Ajouter des connaissances personnelles, même exactes.",
      "Oublier deux ou trois documents, sanctionné immédiatement.",
      "Négliger l'introduction, qui donne au correcteur sa première impression.",
      "Dépasser largement la longueur attendue au détriment de la relecture.",
    ],
    extrait: {
      titre: "Exemple d'introduction",
      lignes: [
        "En 2023, les dépenses d'énergie des collectivités ont progressé de 30 % en moyenne",
        "(doc. 2), contraignant de nombreuses communes à réviser leurs priorités budgétaires.",
        "La sobriété énergétique des bâtiments publics est ainsi devenue un enjeu de gestion",
        "autant qu'un objectif environnemental.",
        "Le dossier conduit dès lors à se demander comment les collectivités peuvent réduire",
        "durablement leur consommation sans dégrader le service rendu aux usagers.",
        "Il met d'abord en évidence l'ampleur et les causes de la situation actuelle (I),",
        "avant de présenter les leviers d'action expérimentés et leurs limites (II).",
      ],
    },
  },
  {
    id: "rapport-technique",
    title: "Le rapport technique",
    epreuve: "Épreuve d'admissibilité avec propositions opérationnelles",
    concours: "Technicien territorial, ingénieur, agent de maîtrise (variante)",
    duree: "3 à 4 heures — dossier technique de la spécialité",
    resume:
      "Produire, à partir d'un dossier technique, un rapport assorti de propositions concrètes, chiffrées et hiérarchisées, directement utilisables par la collectivité.",
    attendu: [
      "Une expertise technique restituée en langage clair pour un décideur non spécialiste.",
      "Des propositions opérationnelles : qui fait quoi, dans quel délai, à quel coût, avec quels risques.",
      "La prise en compte des contraintes réelles : réglementation, budget, sécurité, continuité du service.",
      "Une présentation soignée : titres numérotés, tableaux, éventuellement un échéancier.",
    ],
    etapes: [
      {
        titre: "Analyser la commande technique",
        duree: "15 minutes",
        description:
          "Identifiez le maître d'ouvrage, l'ouvrage ou le service concerné, le problème posé et le niveau de décision attendu : diagnostic, scénarios ou plan d'action.",
        conseils: [
          "Notez les contraintes imposées par l'énoncé : enveloppe budgétaire, délai, site occupé.",
          "Repérez la spécialité mobilisée : bâtiment, VRD, espaces verts, informatique, hygiène.",
        ],
      },
      {
        titre: "Exploiter le dossier technique",
        duree: "1 heure",
        description:
          "Relevez les normes applicables, les données de diagnostic (mesures, relevés, états des lieux), les coûts unitaires et les retours d'expérience.",
        conseils: [
          "Constituez un tableau : problème constaté / cause / référence normative / solution possible.",
          "Notez tous les chiffres exploitables : ils alimenteront vos propositions.",
          "Vérifiez les obligations de sécurité et d'accessibilité : elles sont prioritaires sur tout le reste.",
        ],
      },
      {
        titre: "Hiérarchiser les propositions",
        duree: "30 minutes",
        description:
          "Classez vos actions en trois niveaux : urgentes et réglementaires, structurantes à moyen terme, améliorations à programmer. C'est cette hiérarchisation qui distingue un bon rapport.",
        conseils: [
          "Chiffrez, même en ordre de grandeur, et dites-le : « estimation de l'ordre de 40 000 € HT ».",
          "Associez à chaque action un pilote, un délai et un indicateur de suivi.",
          "Évaluez l'impact sur la continuité du service pendant les travaux.",
        ],
      },
      {
        titre: "Rédiger",
        duree: "1 h 30",
        description:
          "Structure numérotée, phrases courtes, vocabulaire technique expliqué. Les tableaux sont non seulement acceptés mais valorisés.",
        conseils: [
          "Développez chaque sigle à sa première apparition (ERP, VRD, PPMS).",
          "Un tableau de synthèse des actions en fin de rapport fait gagner des points.",
          "Restez dans le registre de la proposition : la décision appartient à l'élu.",
        ],
      },
      {
        titre: "Relire",
        duree: "15 minutes",
        description:
          "Contrôlez la cohérence des chiffres entre le texte et les tableaux, les unités, et la présence effective de délais et de coûts pour chaque action.",
        conseils: [
          "Vérifiez la cohérence des totaux : un écart repéré par le correcteur coûte cher.",
          "Assurez-vous qu'aucune obligation réglementaire n'a été omise.",
        ],
      },
    ],
    plan: [
      {
        titre: "En-tête et objet",
        contenu:
          "Collectivité, direction technique, destinataire, date, objet précis : « Rapport technique relatif à la réfection de la toiture du groupe scolaire … ».",
      },
      {
        titre: "Introduction",
        contenu:
          "Contexte de la demande, périmètre de l'étude, méthode retenue, annonce du plan. Cinq à dix lignes.",
      },
      {
        titre: "1. Diagnostic de la situation",
        contenu:
          "1.1 État des lieux, constats et mesures. 1.2 Causes identifiées et cadre réglementaire applicable. Chiffres, normes, références du dossier.",
      },
      {
        titre: "2. Scénarios et propositions",
        contenu:
          "2.1 Actions urgentes ou réglementaires. 2.2 Solutions structurantes, avec comparaison des scénarios (coût, délai, impact sur le service, durabilité).",
      },
      {
        titre: "3. Mise en œuvre",
        contenu:
          "Échéancier, estimation budgétaire, pilotage, indicateurs de suivi et points de vigilance. Un tableau de synthèse est vivement conseillé.",
      },
      {
        titre: "Conclusion",
        contenu:
          "Rappel des deux ou trois actions prioritaires et de la décision attendue du destinataire.",
      },
    ],
    formulations: [
      {
        usage: "Présenter un constat",
        exemple:
          "Les relevés effectués en janvier font apparaître un taux d'humidité de 78 % dans le local technique, supérieur au seuil admissible de 65 %.",
      },
      {
        usage: "Introduire une obligation",
        exemple:
          "L'établissement relevant de la 4ᵉ catégorie des ERP, la mise en conformité du désenfumage constitue une obligation réglementaire préalable à toute réouverture.",
      },
      {
        usage: "Comparer deux scénarios",
        exemple:
          "Le scénario 1 (réfection partielle) présente un coût inférieur d'environ 35 %, mais une durée de vie estimée deux fois plus courte que le scénario 2.",
      },
      {
        usage: "Conclure sur la décision attendue",
        exemple:
          "Il est proposé de retenir le scénario 2 et d'inscrire l'opération au budget d'investissement de l'exercice suivant.",
      },
    ],
    criteres: [
      {
        critere: "Qualité du diagnostic",
        detail:
          "Les constats sont étayés par des données du dossier et rattachés à une cause identifiée.",
      },
      {
        critere: "Caractère opérationnel",
        detail:
          "Chaque proposition comporte un coût, un délai, un pilote et un niveau de priorité.",
      },
      {
        critere: "Maîtrise réglementaire",
        detail:
          "Les normes de sécurité, d'accessibilité et d'environnement applicables sont citées et respectées.",
      },
      {
        critere: "Clarté pour un non-spécialiste",
        detail:
          "Les sigles sont développés, les notions techniques expliquées, la présentation aérée.",
      },
    ],
    erreurs: [
      "Rester au diagnostic sans proposer d'actions : c'est la faute la plus lourdement sanctionnée.",
      "Proposer sans chiffrer ni dater.",
      "Oublier une obligation réglementaire de sécurité ou d'accessibilité.",
      "Empiler du jargon technique sans l'expliquer au destinataire.",
      "Décider à la place de l'élu au lieu de proposer.",
    ],
    extrait: {
      titre: "Exemple de tableau de synthèse des actions",
      lignes: [
        "Action                    | Priorité | Délai    | Coût estimé | Pilote",
        "--------------------------|----------|----------|-------------|---------------",
        "Mise en sécurité du local | 1        | 1 mois   |   8 000 € HT | Régie bâtiment",
        "Réfection de l'étanchéité | 2        | 6 mois   |  42 000 € HT | Marché travaux",
        "Isolation des combles     | 3        | 18 mois  |  25 000 € HT | Maîtrise d'œuvre",
      ],
    },
  },
];

export function getMethode(id: string | undefined): MethodeFiche | undefined {
  return methodeFiches.find((m) => m.id === id);
}
