import type { FicheMemo } from "../memoTypes";
import { TOUS_CONCOURS, CONCOURS_AB } from "../memoTypes";

export const fichesEnjeux: FicheMemo[] = [
  {
    id: "enjeux-la-cnil",
    title: "La CNIL",
    theme: "Institutions et organisation territoriale",
    resume:
      "La Commission nationale de l'informatique et des libertés est l'autorité administrative indépendante chargée de veiller au respect de la vie privée face aux traitements de données personnelles.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Statut et missions",
        points: [
          "Autorité administrative indépendante créée par la loi Informatique et libertés du 6 janvier 1978.",
          "Elle informe les particuliers et les professionnels sur leurs droits et obligations en matière de données personnelles.",
          "Elle contrôle la mise en œuvre des traitements de données, sur place ou sur pièces, et peut sanctionner les manquements.",
          "Elle instruit les plaintes des citoyens et accompagne les collectivités dans leur mise en conformité.",
        ],
      },
      {
        titre: "Pouvoirs de sanction",
        points: [
          "Mise en demeure de se conformer au règlement dans un délai fixé.",
          "Sanctions pécuniaires pouvant atteindre plusieurs millions d'euros pour les manquements graves au RGPD.",
          "Publicité des sanctions à des fins pédagogiques et dissuasives.",
        ],
      },
      {
        titre: "Rôle pour les collectivités territoriales",
        points: [
          "Les collectivités traitent de nombreuses données sensibles : état civil, action sociale, fichiers scolaires, vidéoprotection.",
          "Chaque collectivité doit désigner un délégué à la protection des données pour piloter la conformité.",
          "La CNIL publie des référentiels et guides pratiques adaptés au secteur public local.",
        ],
      },
    ],
    reperes: [
      "Loi Informatique et libertés : 6 janvier 1978",
      "Entrée en application du RGPD : 25 mai 2018",
      "18 membres composent le collège de la CNIL",
    ],
    aRetenir: [
      "La CNIL est une autorité administrative indépendante, non un tribunal.",
      "Elle veille à l'équilibre entre innovation numérique et protection des libertés individuelles.",
      "Toute collectivité doit désigner un délégué à la protection des données.",
    ],
    pieges: [
      "Ne confondez pas la CNIL, autorité française, avec le Comité européen de la protection des données, organe européen.",
      "La CNIL ne délivre pas d'autorisation préalable systématique depuis le RGPD : la logique est désormais celle de la responsabilisation des acteurs.",
      "Une sanction de la CNIL n'exclut pas une action judiciaire parallèle de la personne concernée.",
    ],
    phraseJury:
      "La CNIL est l'autorité indépendante qui veille au respect du RGPD et accompagne les collectivités dans la protection des données de leurs usagers. Elle peut contrôler, mettre en demeure et sanctionner en cas de manquement.",
    questionsJury: [
      { question: "Qu'est-ce que la CNIL ?", reponse: "Une autorité administrative indépendante chargée de la protection des données personnelles depuis 1978." },
      { question: "Quel est le rôle du délégué à la protection des données ?", reponse: "Il pilote la conformité au RGPD au sein de sa structure et fait le lien avec la CNIL." },
      { question: "La CNIL peut-elle sanctionner une collectivité ?", reponse: "Oui, elle peut prononcer mise en demeure et sanction pécuniaire en cas de manquement grave." },
      { question: "Pourquoi les collectivités sont-elles concernées ?", reponse: "Elles gèrent des données sensibles comme l'état civil, l'action sociale ou la vidéoprotection." },
    ],
    ultraMemo: "CNIL = autorité indépendante, contrôle et sanctionne le respect des données personnelles depuis 1978.",
  },
  {
    id: "enjeux-la-loi-climat-et-resilience",
    title: "La loi Climat et résilience",
    theme: "Action publique et services",
    resume:
      "Loi du 22 août 2021 qui décline les propositions de la Convention citoyenne pour le climat et engage les collectivités dans la lutte contre le changement climatique.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Origine et objectif",
        points: [
          "Issue des travaux de la Convention citoyenne pour le climat réunie en 2019 et 2020.",
          "Objectif de traduire dans la loi une partie des propositions citoyennes pour réduire les émissions de gaz à effet de serre.",
          "Elle touche de nombreux domaines : logement, urbanisme, transport, alimentation, consommation.",
        ],
      },
      {
        titre: "Mesures phares pour l'urbanisme",
        points: [
          "Objectif de zéro artificialisation nette des sols à l'horizon 2050.",
          "Réduction de moitié du rythme d'artificialisation sur la décennie suivant la loi.",
          "Création des zones à faibles émissions renforcées dans les grandes agglomérations.",
          "Interdiction progressive de la location des logements les plus énergivores.",
        ],
      },
      {
        titre: "Conséquences pour les collectivités",
        points: [
          "Les documents d'urbanisme comme le SCoT et le PLU doivent intégrer les objectifs de sobriété foncière.",
          "Les communes doivent adapter leurs politiques de mobilité et de rénovation énergétique.",
          "Renforcement de l'éducation à l'environnement et de la commande publique durable.",
        ],
      },
    ],
    reperes: [
      "Loi du 22 août 2021 dite Climat et résilience",
      "Objectif zéro artificialisation nette : 2050",
      "Convention citoyenne pour le climat : 150 citoyens tirés au sort",
    ],
    aRetenir: [
      "La loi traduit les propositions de la Convention citoyenne pour le climat.",
      "L'objectif central en urbanisme est le zéro artificialisation nette d'ici 2050.",
      "Les collectivités doivent adapter leurs documents d'urbanisme et leurs politiques publiques.",
    ],
    pieges: [
      "Zéro artificialisation nette ne signifie pas arrêt immédiat de toute construction, mais compensation des sols artificialisés.",
      "Ne confondez pas cette loi avec la loi relative à l'énergie et au climat de 2019, antérieure.",
      "Les ZFE existaient avant la loi ; celle-ci les renforce et en généralise le principe.",
    ],
    phraseJury:
      "La loi Climat et résilience de 2021 traduit dans la norme les propositions de la Convention citoyenne pour le climat, avec un objectif phare de zéro artificialisation nette des sols en 2050. Elle impose aux collectivités d'adapter leur urbanisme et leurs politiques de mobilité.",
    questionsJury: [
      { question: "D'où vient la loi Climat et résilience ?", reponse: "Des propositions de la Convention citoyenne pour le climat de 2019-2020." },
      { question: "Quel est l'objectif en matière d'artificialisation des sols ?", reponse: "Le zéro artificialisation nette à l'horizon 2050." },
      { question: "Quels documents d'urbanisme sont concernés ?", reponse: "Le SCoT et le PLU, qui doivent intégrer la sobriété foncière." },
      { question: "Quel lien avec les ZFE ?", reponse: "La loi renforce et généralise les zones à faibles émissions dans les grandes agglomérations." },
    ],
    ultraMemo: "Loi Climat et résilience 2021 = Convention citoyenne + zéro artificialisation nette 2050.",
  },
  {
    id: "enjeux-leconomie-circulaire",
    title: "L'économie circulaire",
    theme: "Action publique et services",
    resume:
      "Modèle économique visant à limiter le gaspillage des ressources en favorisant le réemploi, la réparation et le recyclage, avec un cadre renforcé par la loi anti-gaspillage de 2020.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Principe général",
        points: [
          "L'économie circulaire s'oppose au modèle linéaire produire, consommer, jeter.",
          "Elle repose sur l'éco-conception, l'allongement de la durée de vie des produits et la valorisation des déchets.",
          "Elle concerne à la fois les entreprises, les collectivités et les particuliers.",
        ],
      },
      {
        titre: "Le cadre légal",
        points: [
          "Loi anti-gaspillage pour une économie circulaire du 10 février 2020, dite loi AGEC.",
          "Interdiction progressive du plastique à usage unique.",
          "Généralisation de l'indice de réparabilité sur certains produits électroniques.",
          "Extension du principe pollueur-payeur à de nouvelles filières de responsabilité élargie du producteur.",
        ],
      },
      {
        titre: "Rôle des collectivités",
        points: [
          "Compétence en matière de collecte et de traitement des déchets ménagers, souvent exercée en intercommunalité.",
          "Développement des recycleries, ressourceries et déchèteries facilitant le réemploi.",
          "Intégration de clauses d'économie circulaire dans la commande publique.",
        ],
      },
    ],
    reperes: [
      "Loi AGEC : 10 février 2020",
      "Objectif national de réduction de moitié des déchets mis en décharge d'ici 2025",
      "Indice de réparabilité obligatoire depuis 2021",
    ],
    aRetenir: [
      "L'économie circulaire remplace la logique linéaire par une logique de boucle : réduire, réemployer, recycler.",
      "La loi AGEC de 2020 est le texte de référence en France.",
      "Les collectivités agissent surtout via la gestion des déchets et la commande publique responsable.",
    ],
    pieges: [
      "Économie circulaire n'est pas synonyme de recyclage seul ; le recyclage n'est qu'une des étapes, la dernière avant élimination.",
      "Ne confondez pas la loi AGEC avec la loi Climat et résilience, postérieure et distincte.",
      "La responsabilité élargie du producteur ne dispense pas les collectivités de leur rôle de collecte.",
    ],
    phraseJury:
      "L'économie circulaire vise à limiter le gaspillage des ressources en favorisant réemploi et recyclage, dans un cadre fixé par la loi anti-gaspillage de 2020. Les collectivités y contribuent via la gestion des déchets et une commande publique plus responsable.",
    questionsJury: [
      { question: "Qu'est-ce que l'économie circulaire ?", reponse: "Un modèle qui limite le gaspillage en favorisant réemploi, réparation et recyclage plutôt que le tout-jetable." },
      { question: "Quelle loi encadre l'économie circulaire en France ?", reponse: "La loi anti-gaspillage pour une économie circulaire du 10 février 2020." },
      { question: "Comment les collectivités agissent-elles ?", reponse: "Par la collecte et le traitement des déchets et par des clauses de commande publique responsable." },
      { question: "Qu'est-ce que la responsabilité élargie du producteur ?", reponse: "Le principe qui fait financer la gestion de fin de vie d'un produit par celui qui l'a mis sur le marché." },
    ],
    ultraMemo: "Économie circulaire = réduire, réemployer, recycler ; loi AGEC 2020.",
  },
  {
    id: "enjeux-la-transition-ecologique",
    title: "La transition écologique",
    theme: "Action publique et services",
    resume:
      "Ensemble des évolutions vers un modèle de développement plus sobre en ressources et en carbone, dans lequel les collectivités jouent un rôle de premier plan.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Définition et enjeux",
        points: [
          "Transformation progressive des modes de production, de consommation et d'aménagement pour réduire l'empreinte environnementale.",
          "Elle englobe la lutte contre le changement climatique, la préservation de la biodiversité et la sobriété dans l'usage des ressources.",
          "Elle implique une action coordonnée de l'État, des collectivités, des entreprises et des citoyens.",
        ],
      },
      {
        titre: "Outils de planification territoriale",
        points: [
          "Le plan climat-air-énergie territorial structure l'action des intercommunalités de plus de 20 000 habitants.",
          "Le schéma régional d'aménagement, de développement durable et d'égalité des territoires fixe les orientations régionales.",
          "Les plans locaux d'urbanisme intègrent désormais des objectifs environnementaux renforcés.",
        ],
      },
      {
        titre: "Leviers d'action locale",
        points: [
          "Rénovation énergétique du patrimoine bâti communal.",
          "Développement des mobilités douces et des transports en commun.",
          "Soutien aux énergies renouvelables et à l'agriculture locale.",
          "Sensibilisation des agents et des habitants aux écogestes.",
        ],
      },
    ],
    reperes: [
      "Accord de Paris sur le climat : 2015",
      "Loi relative à la transition énergétique pour la croissance verte : 17 août 2015",
      "Objectif de neutralité carbone en France : 2050",
    ],
    aRetenir: [
      "La transition écologique est un mouvement global qui dépasse la seule question énergétique.",
      "Les collectivités disposent d'outils de planification comme le PCAET et le PLU.",
      "L'objectif national de neutralité carbone est fixé à 2050.",
    ],
    pieges: [
      "Ne réduisez pas la transition écologique à la seule transition énergétique, qui n'en est qu'une composante.",
      "Le PCAET est obligatoire à partir d'un seuil de population, non pour toutes les intercommunalités.",
      "Neutralité carbone ne signifie pas zéro émission mais équilibre entre émissions et absorption.",
    ],
    phraseJury:
      "La transition écologique regroupe les évolutions vers un modèle plus sobre en ressources et en carbone, planifiées localement par des outils comme le PCAET. Les collectivités agissent concrètement par la rénovation énergétique, les mobilités douces et le soutien aux énergies renouvelables.",
    questionsJury: [
      { question: "Que recouvre la transition écologique ?", reponse: "La transformation des modes de production et de consommation pour réduire l'empreinte environnementale." },
      { question: "Quel est l'outil de planification climatique local ?", reponse: "Le plan climat-air-énergie territorial, obligatoire pour les intercommunalités de plus de 20 000 habitants." },
      { question: "Quel est l'objectif national à 2050 ?", reponse: "La neutralité carbone." },
      { question: "Citez un levier d'action communal.", reponse: "La rénovation énergétique du patrimoine bâti." },
    ],
    ultraMemo: "Transition écologique = sobriété + PCAET + neutralité carbone 2050.",
  },
  {
    id: "enjeux-la-cybersecurite",
    title: "La cybersécurité",
    theme: "Action publique et services",
    resume:
      "Protection des systèmes d'information des collectivités contre les attaques informatiques, enjeu croissant pour la continuité des services publics.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Un risque croissant pour les collectivités",
        points: [
          "Les collectivités sont des cibles fréquentes de rançongiciels visant à bloquer leurs systèmes contre rançon.",
          "Les attaques peuvent paralyser l'état civil, la paie des agents ou les services aux usagers.",
          "La multiplication du télétravail et des services en ligne accroît la surface d'exposition aux risques.",
        ],
      },
      {
        titre: "Acteurs et dispositifs de prévention",
        points: [
          "L'Agence nationale de la sécurité des systèmes d'information accompagne les administrations et diffuse des recommandations.",
          "Les collectivités peuvent bénéficier du dispositif Cybermalveillance.gouv.fr pour l'assistance aux victimes.",
          "La mise en place d'une politique de sécurité des systèmes d'information est recommandée dans chaque structure.",
        ],
      },
      {
        titre: "Bonnes pratiques agent",
        points: [
          "Vigilance face aux courriels de hameçonnage et aux pièces jointes suspectes.",
          "Usage de mots de passe robustes et de l'authentification à plusieurs facteurs.",
          "Sauvegarde régulière des données et mise à jour des logiciels.",
          "Signalement immédiat de tout incident suspect au service informatique.",
        ],
      },
    ],
    reperes: [
      "ANSSI : Agence nationale de la sécurité des systèmes d'information, créée en 2009",
      "Cybermalveillance.gouv.fr : dispositif national d'assistance",
      "Augmentation continue des attaques par rançongiciel contre les collectivités depuis 2020",
    ],
    aRetenir: [
      "Les collectivités sont des cibles privilégiées des cyberattaques du fait de la sensibilité des données qu'elles détiennent.",
      "L'ANSSI est l'autorité nationale de référence en cybersécurité.",
      "La vigilance de chaque agent est un maillon essentiel de la sécurité collective.",
    ],
    pieges: [
      "Ne confondez pas l'ANSSI, autorité nationale, avec la CNIL, chargée de la protection des données personnelles.",
      "La cybersécurité n'est pas qu'une affaire de service informatique : chaque agent est concerné.",
      "Un rançongiciel bloque l'accès aux données, il ne les vole pas nécessairement, même si le vol est parfois associé.",
    ],
    phraseJury:
      "La cybersécurité est devenue un enjeu majeur pour les collectivités, régulièrement ciblées par des rançongiciels qui menacent la continuité des services publics. L'ANSSI accompagne les administrations et chaque agent doit adopter des réflexes de vigilance au quotidien.",
    questionsJury: [
      { question: "Pourquoi les collectivités sont-elles ciblées ?", reponse: "Parce qu'elles détiennent des données sensibles et des services essentiels pouvant être paralysés." },
      { question: "Quel est le rôle de l'ANSSI ?", reponse: "Accompagner les administrations et diffuser des recommandations de sécurité informatique." },
      { question: "Que faire face à un courriel suspect ?", reponse: "Ne pas cliquer sur les liens ou pièces jointes et signaler l'incident au service informatique." },
      { question: "Qu'est-ce qu'un rançongiciel ?", reponse: "Un logiciel malveillant qui bloque l'accès aux données contre le paiement d'une rançon." },
    ],
    ultraMemo: "Cybersécurité = collectivités ciblées, ANSSI pilote, vigilance de chaque agent.",
  },
  {
    id: "enjeux-lintelligence-artificielle-dans-les-services-publics",
    title: "L'intelligence artificielle dans les services publics",
    theme: "Action publique et services",
    resume:
      "Usage croissant des outils d'intelligence artificielle par les administrations pour améliorer l'efficacité du service public, sous réserve de garanties éthiques et de transparence.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Domaines d'application",
        points: [
          "Amélioration de la relation à l'usager par des chatbots et l'automatisation de réponses simples.",
          "Aide à la décision dans l'instruction de dossiers administratifs répétitifs.",
          "Optimisation de la gestion des ressources, comme la maintenance prédictive des équipements.",
        ],
      },
      {
        titre: "Cadre juridique et éthique",
        points: [
          "Obligation d'information de l'usager lorsqu'une décision individuelle repose sur un traitement algorithmique.",
          "Interdiction de fonder une décision administrative uniquement sur un algorithme sans intervention humaine possible.",
          "Le règlement européen sur l'intelligence artificielle encadre les usages selon leur niveau de risque.",
        ],
      },
      {
        titre: "Limites et vigilance",
        points: [
          "Risque de biais algorithmique reproduisant des discriminations existantes dans les données d'entraînement.",
          "Nécessité de conserver un contrôle humain sur les décisions sensibles.",
          "Enjeu de formation des agents pour un usage éclairé de ces outils.",
        ],
      },
    ],
    reperes: [
      "Loi pour une République numérique : 7 octobre 2016, base de la transparence algorithmique",
      "Règlement européen sur l'intelligence artificielle adopté en 2024",
      "Principe : toute décision individuelle automatisée doit rester contestable",
    ],
    aRetenir: [
      "L'intelligence artificielle peut améliorer l'efficacité administrative mais ne remplace pas la décision humaine sur les actes individuels sensibles.",
      "La transparence envers l'usager est une obligation légale en cas de traitement algorithmique.",
      "Le règlement européen encadre les usages selon leur niveau de risque.",
    ],
    pieges: [
      "Une décision administrative individuelle ne peut jamais reposer exclusivement sur un algorithme sans intervention humaine possible.",
      "L'intelligence artificielle n'est pas neutre : elle peut reproduire des biais présents dans les données.",
      "Ne confondez pas automatisation simple et intelligence artificielle au sens strict.",
    ],
    phraseJury:
      "L'intelligence artificielle offre de nouveaux outils aux services publics pour améliorer l'efficacité et la relation à l'usager, mais son usage reste encadré pour garantir transparence et contrôle humain. La vigilance porte notamment sur les biais algorithmiques et la formation des agents.",
    questionsJury: [
      { question: "Citez un usage de l'IA dans les services publics.", reponse: "Un chatbot pour répondre aux demandes simples des usagers." },
      { question: "Une décision peut-elle reposer uniquement sur un algorithme ?", reponse: "Non, un contrôle humain doit toujours rester possible pour les décisions individuelles." },
      { question: "Quel est le risque principal de l'IA ?", reponse: "Le biais algorithmique, qui peut reproduire des discriminations présentes dans les données." },
      { question: "Quel texte européen encadre l'IA ?", reponse: "Le règlement européen sur l'intelligence artificielle adopté en 2024." },
    ],
    ultraMemo: "IA dans le public = efficacité + transparence obligatoire + contrôle humain maintenu.",
  },
  {
    id: "enjeux-le-teletravail",
    title: "Le télétravail",
    theme: "Statut et carrière",
    resume:
      "Organisation du travail permettant à l'agent d'exercer ses fonctions hors des locaux habituels, encadrée par des textes spécifiques à la fonction publique territoriale.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Cadre juridique",
        points: [
          "Le télétravail est ouvert aux agents publics par la loi du 12 mars 2012 puis précisé par décret.",
          "Il est accordé sur demande de l'agent, après avis du responsable hiérarchique, pour une quotité qui ne peut excéder trois jours par semaine sauf exceptions.",
          "L'autorisation est formalisée par un acte individuel, révisable et d'une durée limitée.",
        ],
      },
      {
        titre: "Conditions de mise en œuvre",
        points: [
          "Nécessite un poste compatible avec l'exercice à distance, ce qui exclut les fonctions d'accueil physique permanent.",
          "L'employeur prend en charge tout ou partie des coûts liés aux outils numériques et à la connexion.",
          "Un accord collectif ou une délibération encadre les modalités locales du télétravail.",
        ],
      },
      {
        titre: "Enjeux managériaux",
        points: [
          "Maintien du lien collectif et prévention de l'isolement de l'agent.",
          "Adaptation du management par objectifs plutôt que par présence physique.",
          "Vigilance sur le droit à la déconnexion et l'équilibre vie professionnelle et vie personnelle.",
        ],
      },
    ],
    reperes: [
      "Loi du 12 mars 2012 : ouverture du télétravail dans la fonction publique",
      "Décret du 11 février 2016 relatif au télétravail dans la fonction publique",
      "Quotité maximale usuelle : trois jours par semaine",
    ],
    aRetenir: [
      "Le télétravail est un droit encadré, non un droit automatique : il nécessite une autorisation formelle.",
      "Il exige un poste compatible et une organisation adaptée du management.",
      "L'employeur participe aux frais liés à l'équipement du télétravailleur.",
    ],
    pieges: [
      "Le télétravail n'est pas un droit opposable : l'employeur peut refuser une demande pour motif de service.",
      "Ne confondez pas télétravail et travail à temps partiel, qui sont deux dispositifs distincts.",
      "L'autorisation de télétravail est révisable et n'est jamais permanente sans réexamen.",
    ],
    phraseJury:
      "Le télétravail permet à l'agent public d'exercer ses fonctions hors des locaux habituels dans un cadre encadré depuis 2012, avec une autorisation individuelle limitée dans le temps. Il suppose un poste compatible et une vigilance managériale sur le lien collectif et le droit à la déconnexion.",
    questionsJury: [
      { question: "Le télétravail est-il un droit automatique ?", reponse: "Non, il nécessite une autorisation après demande de l'agent et avis hiérarchique." },
      { question: "Quelle est la quotité maximale usuelle ?", reponse: "Trois jours par semaine, sauf situations particulières." },
      { question: "Qui prend en charge le matériel ?", reponse: "L'employeur, qui participe aux coûts des outils numériques et de connexion." },
      { question: "Quel risque managérial le télétravail comporte-t-il ?", reponse: "L'isolement de l'agent et la difficulté à maintenir le lien collectif." },
    ],
    ultraMemo: "Télétravail = autorisation individuelle, poste compatible, 3 jours max en général.",
  },
  {
    id: "enjeux-la-democratie-participative",
    title: "La démocratie participative",
    theme: "Méthode et expression",
    resume:
      "Ensemble des dispositifs associant les citoyens à l'élaboration ou au suivi des décisions publiques locales, en complément de la démocratie représentative.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Principe et finalité",
        points: [
          "Elle complète la démocratie représentative en associant directement les habitants aux décisions qui les concernent.",
          "Elle vise à renforcer la légitimité des projets locaux et à réduire la défiance envers les institutions.",
          "Elle s'appuie sur l'information préalable des citoyens, condition de leur participation éclairée.",
        ],
      },
      {
        titre: "Les principaux outils",
        points: [
          "Conseils de quartier, obligatoires dans les communes de plus de 80 000 habitants.",
          "Budgets participatifs permettant aux habitants de proposer et voter des projets financés par la collectivité.",
          "Conseils citoyens dans les quartiers prioritaires de la politique de la ville.",
          "Consultations locales et concertations préalables aux projets d'aménagement.",
        ],
      },
      {
        titre: "Limites et vigilance",
        points: [
          "Risque de participation limitée à des publics déjà mobilisés, creusant les inégalités de représentation.",
          "La consultation citoyenne n'a le plus souvent qu'une valeur consultative, la décision restant à l'organe élu.",
          "Nécessité d'un retour d'information clair aux participants sur l'usage fait de leur contribution.",
        ],
      },
    ],
    reperes: [
      "Loi relative à la démocratie de proximité : 27 février 2002, création des conseils de quartier",
      "Loi engagement et proximité : 27 décembre 2019, renforcement de la participation citoyenne",
      "Seuil d'obligation des conseils de quartier : communes de plus de 80 000 habitants",
    ],
    aRetenir: [
      "La démocratie participative complète, sans la remplacer, la démocratie représentative.",
      "Les conseils de quartier et les budgets participatifs sont les outils les plus connus.",
      "La portée de ces dispositifs reste le plus souvent consultative.",
    ],
    pieges: [
      "La démocratie participative ne remplace jamais la légitimité des élus, seuls détenteurs du pouvoir de décision.",
      "Les conseils de quartier ne sont obligatoires qu'au-delà d'un certain seuil de population.",
      "Un budget participatif n'exonère pas la collectivité du respect des règles de la commande publique.",
    ],
    phraseJury:
      "La démocratie participative associe les citoyens à l'élaboration des décisions locales à travers des outils comme les conseils de quartier ou les budgets participatifs, en complément de la démocratie représentative. Sa portée reste généralement consultative, la décision finale appartenant aux élus.",
    questionsJury: [
      { question: "Qu'est-ce que la démocratie participative ?", reponse: "Un ensemble de dispositifs associant les citoyens aux décisions publiques locales, en complément des élus." },
      { question: "Citez un outil de démocratie participative.", reponse: "Le budget participatif, qui permet aux habitants de proposer et voter des projets." },
      { question: "Les conseils de quartier sont-ils obligatoires partout ?", reponse: "Non, seulement dans les communes de plus de 80 000 habitants." },
      { question: "Quelle est la principale limite de ces dispositifs ?", reponse: "Leur portée le plus souvent consultative et le risque de mobiliser toujours les mêmes publics." },
    ],
    ultraMemo: "Démocratie participative = citoyens associés, décision restant aux élus.",
  },
  {
    id: "enjeux-lopen-data",
    title: "L'open data",
    theme: "Action publique et services",
    resume:
      "Politique d'ouverture et de mise à disposition gratuite des données publiques, obligatoire pour de nombreuses collectivités et vecteur de transparence démocratique.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Principe et fondement",
        points: [
          "L'open data consiste à publier des données publiques dans un format réutilisable, gratuitement et sans restriction inutile.",
          "Elle s'inscrit dans le principe de transparence de l'action administrative.",
          "Elle favorise l'innovation en permettant aux entreprises et associations de développer de nouveaux services.",
        ],
      },
      {
        titre: "Cadre légal",
        points: [
          "La loi pour une République numérique du 7 octobre 2016 généralise l'obligation d'ouverture des données publiques.",
          "Les collectivités de plus de 3 500 habitants employant au moins dix agents ont une obligation de publication en ligne.",
          "Le Code des relations entre le public et l'administration précise les modalités du droit d'accès et de réutilisation.",
        ],
      },
      {
        titre: "Exemples et limites",
        points: [
          "Publication des délibérations, des marchés publics, des données de transport ou de consommation d'énergie.",
          "Exclusion des données couvertes par un secret protégé, comme le secret médical ou la sécurité publique.",
          "Nécessité d'anonymiser les données personnelles avant publication.",
        ],
      },
    ],
    reperes: [
      "Loi pour une République numérique : 7 octobre 2016",
      "Seuil d'obligation : communes de plus de 3 500 habitants et dix agents",
      "Plateforme nationale de référence : data.gouv.fr",
    ],
    aRetenir: [
      "L'open data rend les données publiques librement réutilisables, dans le respect des secrets protégés.",
      "La loi de 2016 pour une République numérique en fixe le cadre principal.",
      "Un seuil de population et d'effectif déclenche l'obligation de publication pour les collectivités.",
    ],
    pieges: [
      "L'open data ne dispense pas d'anonymiser les données à caractère personnel avant diffusion.",
      "Toutes les collectivités n'ont pas d'obligation légale : un seuil de population et d'effectif s'applique.",
      "Ouvrir une donnée ne signifie pas en perdre la responsabilité en cas de mauvais usage manifeste.",
    ],
    phraseJury:
      "L'open data consiste à rendre les données publiques librement accessibles et réutilisables, dans un objectif de transparence et d'innovation. La loi pour une République numérique de 2016 impose cette ouverture aux collectivités dépassant un certain seuil de population et d'effectif.",
    questionsJury: [
      { question: "Qu'est-ce que l'open data ?", reponse: "La mise à disposition gratuite et réutilisable des données publiques." },
      { question: "Quelle loi impose l'open data aux collectivités ?", reponse: "La loi pour une République numérique du 7 octobre 2016." },
      { question: "Quel seuil déclenche l'obligation ?", reponse: "Plus de 3 500 habitants et au moins dix agents." },
      { question: "Toutes les données peuvent-elles être publiées ?", reponse: "Non, celles couvertes par un secret protégé ou les données personnelles doivent être exclues ou anonymisées." },
    ],
    ultraMemo: "Open data = données publiques réutilisables, obligation dès 3 500 habitants et 10 agents.",
  },
  {
    id: "enjeux-le-rgpd",
    title: "Le RGPD",
    theme: "Action publique et services",
    resume:
      "Règlement général sur la protection des données, texte européen entré en application en 2018, qui encadre tout traitement de données à caractère personnel par les collectivités.",
    duree: "7 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Nature et portée du texte",
        points: [
          "Règlement européen directement applicable dans tous les États membres, sans transposition nécessaire.",
          "Il s'applique à tout organisme, public ou privé, traitant des données de personnes situées dans l'Union européenne.",
          "Il remplace la logique de déclaration préalable par une logique de responsabilisation des acteurs.",
        ],
      },
      {
        titre: "Principes fondamentaux",
        points: [
          "Licéité, loyauté et transparence du traitement des données.",
          "Limitation des finalités : les données ne peuvent être utilisées que pour l'objectif annoncé.",
          "Minimisation des données collectées et limitation de leur durée de conservation.",
          "Sécurité et confidentialité des données par des mesures techniques et organisationnelles adaptées.",
        ],
      },
      {
        titre: "Droits des personnes et obligations",
        points: [
          "Droit d'accès, de rectification, d'effacement et d'opposition pour les personnes concernées.",
          "Obligation de tenir un registre des traitements pour chaque organisme.",
          "Obligation de désigner un délégué à la protection des données, en particulier pour les organismes publics.",
          "Obligation de notifier une violation de données à la CNIL dans un délai de soixante-douze heures.",
        ],
      },
    ],
    reperes: [
      "Règlement européen 2016/679 du 27 avril 2016",
      "Entrée en application : 25 mai 2018",
      "Délai de notification d'une violation de données : 72 heures",
    ],
    aRetenir: [
      "Le RGPD est un règlement européen directement applicable, non une simple directive à transposer.",
      "Il repose sur la responsabilisation des acteurs plutôt que sur l'autorisation préalable.",
      "Toute collectivité doit désigner un délégué à la protection des données et tenir un registre des traitements.",
    ],
    pieges: [
      "Ne confondez pas RGPD, texte européen, et loi Informatique et libertés, texte français adapté au RGPD.",
      "Le délégué à la protection des données n'est pas nécessairement un agent dédié à temps plein, il peut être mutualisé.",
      "La désignation du délégué est une obligation légale pour les organismes publics, pas une simple recommandation.",
    ],
    phraseJury:
      "Le RGPD est un règlement européen entré en application en 2018 qui encadre tout traitement de données personnelles selon une logique de responsabilisation des acteurs. Il impose aux collectivités de désigner un délégué à la protection des données et de garantir les droits des personnes concernées.",
    questionsJury: [
      { question: "Qu'est-ce que le RGPD ?", reponse: "Un règlement européen encadrant la protection des données personnelles, en application depuis mai 2018." },
      { question: "Quels sont les principes clés du RGPD ?", reponse: "Licéité, minimisation des données, limitation des finalités et sécurité du traitement." },
      { question: "Que doit faire une collectivité en cas de violation de données ?", reponse: "La notifier à la CNIL dans un délai de soixante-douze heures." },
      { question: "Qui doit désigner un délégué à la protection des données ?", reponse: "Tout organisme public, y compris les collectivités territoriales." },
    ],
    ultraMemo: "RGPD = règlement européen 2018, responsabilisation, DPO obligatoire, notification 72h.",
  },
  {
    id: "enjeux-les-quartiers-prioritaires-de-la-politique-de-la-ville",
    title: "Les quartiers prioritaires de la politique de la ville",
    theme: "Action publique et services",
    resume:
      "Territoires urbains ciblés par une politique de solidarité nationale visant à réduire les écarts de développement avec le reste de l'agglomération.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Définition et critère de délimitation",
        points: [
          "Les quartiers prioritaires sont définis par un critère unique de revenu médian des habitants inférieur à un seuil fixé nationalement.",
          "Ils ont été délimités par la loi de programmation pour la ville et la cohésion urbaine de 2014.",
          "Environ 1 500 quartiers sont concernés sur l'ensemble du territoire national.",
        ],
      },
      {
        titre: "Outils de la politique de la ville",
        points: [
          "Le contrat de ville, signé entre l'État, les collectivités et leurs partenaires, fixe les priorités d'action.",
          "Le renouvellement urbain, piloté notamment par l'Agence nationale pour la rénovation urbaine, transforme le cadre de vie.",
          "Les conseils citoyens associent les habitants à la définition et au suivi des actions menées.",
        ],
      },
      {
        titre: "Domaines d'intervention",
        points: [
          "Éducation, avec le dispositif des cités éducatives dans certains quartiers.",
          "Emploi et développement économique, notamment via les zones franches urbaines.",
          "Sécurité et tranquillité publique, habitat et cadre de vie.",
        ],
      },
    ],
    reperes: [
      "Loi de programmation pour la ville et la cohésion urbaine : 21 février 2014",
      "Environ 1 500 quartiers prioritaires en France",
      "Critère unique de définition : le revenu médian des habitants",
    ],
    aRetenir: [
      "Les quartiers prioritaires sont définis par un critère unique de revenu, fixé par la loi de 2014.",
      "Le contrat de ville est l'instrument contractuel central de la politique de la ville.",
      "Les conseils citoyens associent les habitants à la gouvernance de ces politiques.",
    ],
    pieges: [
      "Le critère de délimitation est unique, le revenu, contrairement aux zonages antérieurs qui en cumulaient plusieurs.",
      "Ne confondez pas quartier prioritaire et zone de revitalisation rurale, qui concerne les territoires ruraux.",
      "Le contrat de ville n'est pas signé par la seule commune, mais avec l'État et plusieurs partenaires.",
    ],
    phraseJury:
      "Les quartiers prioritaires de la politique de la ville sont des territoires urbains définis depuis 2014 selon un critère unique de revenu médian, bénéficiant d'une solidarité renforcée. Le contrat de ville et les conseils citoyens en sont les principaux outils de gouvernance.",
    questionsJury: [
      { question: "Comment sont définis les quartiers prioritaires ?", reponse: "Par un critère unique, le revenu médian des habitants, fixé par la loi de 2014." },
      { question: "Qu'est-ce que le contrat de ville ?", reponse: "Le document contractuel signé entre l'État, les collectivités et leurs partenaires pour fixer les priorités d'action." },
      { question: "Qui pilote le renouvellement urbain ?", reponse: "L'Agence nationale pour la rénovation urbaine." },
      { question: "Quel est le rôle des conseils citoyens ?", reponse: "Associer les habitants à la définition et au suivi des actions de la politique de la ville." },
    ],
    ultraMemo: "QPV = critère unique du revenu, loi 2014, contrat de ville + conseils citoyens.",
  },
  {
    id: "enjeux-les-aides-economiques-des-collectivites",
    title: "Les aides économiques des collectivités",
    theme: "Finances et commande publique",
    resume:
      "Soutien financier ou en nature apporté par les collectivités aux entreprises, encadré par le Code général des collectivités territoriales et le droit européen de la concurrence.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Répartition des compétences",
        points: [
          "La région est la collectivité chef de file en matière d'aides directes aux entreprises depuis la loi NOTRe.",
          "Les communes et intercommunalités peuvent intervenir en matière d'immobilier d'entreprise, comme la mise à disposition de locaux.",
          "Le département peut soutenir l'agriculture et certaines activités spécifiques prévues par la loi.",
        ],
      },
      {
        titre: "Formes des aides",
        points: [
          "Aides directes : subventions, prêts, avances remboursables, garanties d'emprunt.",
          "Aides indirectes : mise à disposition de locaux, exonérations fiscales locales, accompagnement en ingénierie.",
          "Les aides peuvent viser la création, l'extension ou le maintien d'activités économiques sur le territoire.",
        ],
      },
      {
        titre: "Encadrement juridique",
        points: [
          "Respect du droit européen de la concurrence, qui prohibe les aides d'État faussant la concurrence, sauf exemptions.",
          "Nécessité d'une convention entre la collectivité et l'entreprise bénéficiaire au-delà d'un certain montant.",
          "Contrôle de légalité du préfet sur les délibérations d'octroi.",
        ],
      },
    ],
    reperes: [
      "Loi NOTRe : 7 août 2015, région chef de file du développement économique",
      "Schéma régional de développement économique, d'innovation et d'internationalisation obligatoire",
      "Règlement européen de minimis limitant certaines aides",
    ],
    aRetenir: [
      "La région est chef de file des aides économiques directes depuis 2015.",
      "Les communes conservent un rôle en matière d'immobilier d'entreprise.",
      "Toute aide économique doit respecter le droit européen de la concurrence.",
    ],
    pieges: [
      "Une commune ne peut pas attribuer seule une aide directe à une entreprise sans lien avec la région, sauf convention prévue par la loi.",
      "Le terme d'aide d'État ne vise pas que l'État central, il inclut toute aide publique, y compris locale, au sens du droit européen.",
      "Chef de file ne signifie pas exclusivité totale : d'autres collectivités peuvent intervenir dans le respect du cadre régional.",
    ],
    phraseJury:
      "Les aides économiques des collectivités sont pilotées par la région, chef de file depuis la loi NOTRe, tandis que communes et intercommunalités interviennent surtout sur l'immobilier d'entreprise. Ces aides doivent respecter le droit européen de la concurrence.",
    questionsJury: [
      { question: "Quelle collectivité est chef de file des aides économiques ?", reponse: "La région, depuis la loi NOTRe de 2015." },
      { question: "Quel rôle jouent les communes en matière économique ?", reponse: "Elles peuvent proposer des aides indirectes comme l'immobilier d'entreprise." },
      { question: "Quelle limite européenne encadre ces aides ?", reponse: "Le droit de la concurrence, qui prohibe les aides d'État faussant le marché, sauf exemptions." },
      { question: "Citez une forme d'aide directe.", reponse: "Une subvention, un prêt ou une garantie d'emprunt." },
    ],
    ultraMemo: "Aides éco = région chef de file, communes sur l'immobilier, respect du droit européen.",
  },
  {
    id: "enjeux-france-services",
    title: "France Services",
    theme: "Action publique et services",
    resume:
      "Réseau de guichets uniques de proximité permettant aux usagers d'accéder à plusieurs services publics en un même lieu, avec accompagnement humain aux démarches administratives.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Objectif et genèse",
        points: [
          "Créées pour lutter contre la fracture territoriale et numérique en garantissant un accès de proximité aux services publics.",
          "Elles remplacent et renforcent le réseau antérieur des maisons de services au public.",
          "Chaque France Services regroupe les principaux opérateurs de service public en un même lieu.",
        ],
      },
      {
        titre: "Fonctionnement",
        points: [
          "Des agents polyvalents accompagnent les usagers dans leurs démarches liées à l'emploi, la retraite, la santé, la famille ou les impôts.",
          "Les partenaires principaux sont notamment la Caisse d'allocations familiales, Pôle emploi devenu France Travail, l'Assurance maladie et les impôts.",
          "Un label garantit un niveau de service homogène sur tout le territoire, en zone rurale comme urbaine.",
        ],
      },
      {
        titre: "Portage local",
        points: [
          "Les structures peuvent être portées par une commune, une intercommunalité, une association ou La Poste.",
          "Elles bénéficient d'un cofinancement de l'État pour leur fonctionnement.",
          "Elles participent à la lutte contre l'illectronisme par un accompagnement humain aux démarches en ligne.",
        ],
      },
    ],
    reperes: [
      "Création du label France Services : 2019",
      "Objectif national : au moins une structure par canton",
      "Plus de 2 700 structures labellisées sur le territoire",
    ],
    aRetenir: [
      "France Services remplace les maisons de services au public pour garantir un accès de proximité unifié.",
      "Un agent polyvalent accompagne l'usager sur plusieurs démarches en un seul lieu.",
      "Le dispositif peut être porté par une commune, une intercommunalité, une association ou La Poste.",
    ],
    pieges: [
      "France Services ne se substitue pas aux administrations elles-mêmes, elle facilite l'accès et l'accompagnement.",
      "L'objectif d'une structure par canton n'implique pas la fermeture des guichets existants des opérateurs partenaires.",
      "Ne confondez pas France Services avec France Travail, qui est un opérateur partenaire parmi d'autres.",
    ],
    phraseJury:
      "France Services est un réseau de guichets de proximité qui regroupe plusieurs opérateurs publics en un même lieu, avec un agent polyvalent pour accompagner les démarches des usagers. L'objectif est de garantir un accès équitable au service public sur tout le territoire, y compris en zone rurale.",
    questionsJury: [
      { question: "Qu'est-ce que France Services ?", reponse: "Un réseau de guichets uniques de proximité regroupant plusieurs opérateurs publics." },
      { question: "Qui peut porter une structure France Services ?", reponse: "Une commune, une intercommunalité, une association ou La Poste." },
      { question: "Quel est l'objectif de couverture territoriale ?", reponse: "Au moins une structure par canton." },
      { question: "Quel dispositif France Services remplace-t-il ?", reponse: "Les maisons de services au public." },
    ],
    ultraMemo: "France Services = guichet unique de proximité, agent polyvalent, une structure par canton.",
  },
  {
    id: "enjeux-linclusion-numerique",
    title: "L'inclusion numérique",
    theme: "Action publique et services",
    resume:
      "Politiques publiques visant à réduire la fracture numérique et à permettre à tous les citoyens d'accéder aux services en ligne et de développer leurs compétences numériques.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Constat de la fracture numérique",
        points: [
          "Une partie de la population reste éloignée du numérique, faute d'équipement, de connexion ou de compétences.",
          "La dématérialisation croissante des services publics accentue le risque d'exclusion pour les publics les plus fragiles.",
          "Le terme d'illectronisme désigne la difficulté à utiliser les outils numériques du quotidien.",
        ],
      },
      {
        titre: "Dispositifs de médiation numérique",
        points: [
          "Les conseillers numériques accompagnent les usagers dans les lieux de proximité, dont France Services.",
          "Les espaces publics numériques et les ateliers en médiathèque proposent des formations gratuites.",
          "Le Pass numérique permet de financer des heures d'accompagnement pour les publics éloignés du numérique.",
        ],
      },
      {
        titre: "Rôle des collectivités",
        points: [
          "Développement de bornes et d'espaces d'accès public à internet.",
          "Maintien d'un accueil physique et téléphonique en parallèle de la dématérialisation.",
          "Formation des agents à l'accompagnement numérique des usagers les plus fragiles.",
        ],
      },
    ],
    reperes: [
      "Stratégie nationale pour un numérique inclusif : 2018",
      "Dispositif conseiller numérique France Services : lancé en 2021",
      "Une part significative de la population française touchée par l'illectronisme",
    ],
    aRetenir: [
      "L'inclusion numérique vise à réduire la fracture d'accès et de compétences face au numérique.",
      "Le conseiller numérique et le Pass numérique sont les principaux outils déployés depuis 2021.",
      "Les collectivités doivent conserver des alternatives d'accueil non dématérialisées.",
    ],
    pieges: [
      "Illectronisme et fracture numérique ne sont pas identiques : l'illectronisme désigne le manque de compétences, la fracture recouvre aussi le manque d'équipement et de réseau.",
      "La dématérialisation des services publics ne dispense pas de maintenir un accueil humain alternatif.",
      "Le Pass numérique finance des heures de formation, il ne fournit pas directement du matériel informatique.",
    ],
    phraseJury:
      "L'inclusion numérique vise à réduire la fracture d'accès et de compétences face aux outils numériques, alors que la dématérialisation des services publics s'accélère. Les collectivités s'appuient sur les conseillers numériques et le maintien d'un accueil humain alternatif.",
    questionsJury: [
      { question: "Qu'est-ce que l'illectronisme ?", reponse: "La difficulté à utiliser les outils numériques du quotidien." },
      { question: "Qu'est-ce qu'un conseiller numérique ?", reponse: "Un professionnel qui accompagne les usagers dans leurs démarches et compétences numériques." },
      { question: "Qu'est-ce que le Pass numérique ?", reponse: "Un dispositif finançant des heures de formation ou d'accompagnement pour les publics éloignés du numérique." },
      { question: "Pourquoi les collectivités doivent-elles maintenir un accueil humain ?", reponse: "Pour ne pas exclure les usagers en difficulté avec la dématérialisation des services." },
    ],
    ultraMemo: "Inclusion numérique = réduire la fracture, conseiller numérique, garder un accueil humain.",
  },
  {
    id: "enjeux-le-numerique-responsable",
    title: "Le numérique responsable",
    theme: "Action publique et services",
    resume:
      "Démarche visant à réduire l'empreinte environnementale et sociale du numérique, en intégrant sobriété et durabilité dans les usages informatiques des administrations.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Constat environnemental",
        points: [
          "Le numérique représente une part significative et croissante de l'empreinte carbone mondiale.",
          "La fabrication des équipements est plus impactante sur l'environnement que leur seule utilisation.",
          "Le renouvellement rapide des appareils et le stockage massif de données accentuent cet impact.",
        ],
      },
      {
        titre: "Leviers d'action pour les administrations",
        points: [
          "Allongement de la durée de vie des équipements informatiques et recours au matériel reconditionné.",
          "Écoconception des sites internet et services numériques publics.",
          "Sobriété dans le stockage des données, avec suppression régulière des fichiers inutiles.",
          "Sensibilisation des agents aux écogestes numériques, comme la limitation des pièces jointes lourdes.",
        ],
      },
      {
        titre: "Cadre incitatif",
        points: [
          "La loi relative à la réduction de l'empreinte environnementale du numérique impose des obligations aux grandes collectivités.",
          "Certaines collectivités adoptent une charte ou un schéma directeur du numérique responsable.",
          "Le sujet croise les objectifs de la commande publique durable pour l'achat d'équipements informatiques.",
        ],
      },
    ],
    reperes: [
      "Loi relative à la réduction de l'empreinte environnementale du numérique : 15 novembre 2021",
      "Le numérique représenterait plusieurs pour cent des émissions de gaz à effet de serre mondiales",
      "Obligation de stratégie numérique responsable pour les collectivités de plus de 50 000 habitants",
    ],
    aRetenir: [
      "L'impact environnemental du numérique provient surtout de la fabrication des équipements.",
      "La loi de 2021 impose une stratégie numérique responsable aux grandes collectivités.",
      "Le réemploi et l'écoconception sont des leviers concrets d'action.",
    ],
    pieges: [
      "L'impact du numérique n'est pas principalement lié à l'usage quotidien mais à la fabrication du matériel.",
      "Le numérique responsable ne se limite pas aux économies d'électricité, il inclut aussi la sobriété d'achat et de conception.",
      "L'obligation légale de stratégie numérique responsable ne concerne que les collectivités dépassant un seuil de population.",
    ],
    phraseJury:
      "Le numérique responsable vise à réduire l'empreinte environnementale du numérique, dont l'impact principal provient de la fabrication des équipements. La loi de 2021 impose aux grandes collectivités une stratégie dédiée, appuyée sur le réemploi et l'écoconception.",
    questionsJury: [
      { question: "D'où vient principalement l'impact environnemental du numérique ?", reponse: "De la fabrication des équipements plus que de leur usage quotidien." },
      { question: "Que dit la loi de 2021 sur le numérique responsable ?", reponse: "Elle impose une stratégie numérique responsable aux collectivités de plus de 50 000 habitants." },
      { question: "Citez un levier d'action concret.", reponse: "Le recours au matériel informatique reconditionné." },
      { question: "Qu'est-ce que l'écoconception numérique ?", reponse: "La conception de services numériques limitant leur consommation de ressources." },
    ],
    ultraMemo: "Numérique responsable = fabrication = impact principal, loi 2021, réemploi et écoconception.",
  },
  {
    id: "enjeux-la-sobriete-energetique",
    title: "La sobriété énergétique",
    theme: "Action publique et services",
    resume:
      "Démarche de réduction volontaire de la consommation d'énergie par des changements de comportement et d'organisation, renforcée dans les collectivités depuis la crise énergétique de 2022.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Définition et distinction",
        points: [
          "La sobriété énergétique consiste à réduire les besoins en énergie par des changements de comportement et d'usage.",
          "Elle se distingue de l'efficacité énergétique, qui vise à consommer moins pour un même service grâce à la technologie.",
          "Elle s'est imposée comme priorité nationale lors de la crise énergétique de 2022 liée au contexte géopolitique.",
        ],
      },
      {
        titre: "Mesures dans les collectivités",
        points: [
          "Réduction du chauffage des bâtiments publics à une température plafond.",
          "Extinction de l'éclairage public sur certaines plages horaires nocturnes.",
          "Limitation de l'affichage publicitaire lumineux et des vitrines éclairées la nuit.",
          "Sensibilisation des agents aux écogestes au sein des bâtiments administratifs.",
        ],
      },
      {
        titre: "Cadre et suivi",
        points: [
          "Plans de sobriété énergétique demandés aux collectivités par l'État à partir de 2022.",
          "Articulation avec le plan climat-air-énergie territorial pour une stratégie de long terme.",
          "Suivi des consommations par des outils de pilotage énergétique du patrimoine communal.",
        ],
      },
    ],
    reperes: [
      "Plan de sobriété énergétique national : automne 2022",
      "Température de chauffage recommandée dans les bâtiments publics : 19 degrés",
      "Objectif national de réduction de la consommation d'énergie : moins dix pour cent en deux ans",
    ],
    aRetenir: [
      "La sobriété énergétique agit sur les comportements, l'efficacité énergétique agit sur la technologie.",
      "Les plans de sobriété se sont généralisés dans les collectivités depuis 2022.",
      "L'extinction de l'éclairage public est une mesure emblématique mais encadrée par des enjeux de sécurité.",
    ],
    pieges: [
      "Ne confondez pas sobriété énergétique, comportementale, et efficacité énergétique, technologique.",
      "L'extinction de l'éclairage public doit tenir compte des enjeux de sécurité et ne peut être généralisée sans étude préalable.",
      "La sobriété énergétique n'est pas propre à 2022, mais la crise énergétique en a accéléré la mise en œuvre.",
    ],
    phraseJury:
      "La sobriété énergétique consiste à réduire les besoins en énergie par des changements de comportement, distincte de l'efficacité énergétique qui repose sur la technologie. Les collectivités ont généralisé des plans de sobriété depuis la crise énergétique de 2022, avec des mesures comme l'extinction nocturne de l'éclairage public.",
    questionsJury: [
      { question: "Quelle différence entre sobriété et efficacité énergétique ?", reponse: "La sobriété change les comportements, l'efficacité améliore la technologie pour un même service." },
      { question: "Depuis quand les plans de sobriété se sont-ils généralisés ?", reponse: "Depuis l'automne 2022, dans le contexte de crise énergétique." },
      { question: "Citez une mesure de sobriété dans une commune.", reponse: "L'extinction de l'éclairage public sur certaines plages horaires nocturnes." },
      { question: "Quel document articule la sobriété énergétique à long terme ?", reponse: "Le plan climat-air-énergie territorial." },
    ],
    ultraMemo: "Sobriété énergétique = comportement, pas technologie ; plans généralisés depuis 2022.",
  },
  {
    id: "enjeux-le-pcaet",
    title: "Le PCAET",
    theme: "Action publique et services",
    resume:
      "Le plan climat-air-énergie territorial est le document de planification qui structure la stratégie climatique locale des intercommunalités les plus peuplées.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Nature et portée du document",
        points: [
          "Le PCAET est un document de planification stratégique et opérationnelle en matière de climat, d'air et d'énergie.",
          "Il est obligatoire pour les établissements publics de coopération intercommunale à fiscalité propre de plus de 20 000 habitants.",
          "Il doit être compatible avec le schéma régional d'aménagement, de développement durable et d'égalité des territoires.",
        ],
      },
      {
        titre: "Contenu du plan",
        points: [
          "Un diagnostic territorial des émissions de gaz à effet de serre et de la qualité de l'air.",
          "Une stratégie territoriale fixant des objectifs chiffrés à moyen et long terme.",
          "Un programme d'actions opérationnelles sur l'énergie, les transports, l'habitat et l'agriculture.",
          "Un dispositif de suivi et d'évaluation périodique des résultats obtenus.",
        ],
      },
      {
        titre: "Élaboration et révision",
        points: [
          "Élaboré par l'intercommunalité en concertation avec les communes, les habitants et les acteurs économiques.",
          "Révisé au moins tous les six ans pour intégrer les évolutions réglementaires et les nouveaux objectifs nationaux.",
          "Son volet air est obligatoire dans les zones couvertes par un plan de protection de l'atmosphère.",
        ],
      },
    ],
    reperes: [
      "Obligation légale issue de la loi relative à la transition énergétique : 17 août 2015",
      "Seuil d'obligation : intercommunalités de plus de 20 000 habitants",
      "Révision du plan : tous les six ans au minimum",
    ],
    aRetenir: [
      "Le PCAET est obligatoire pour les intercommunalités de plus de 20 000 habitants.",
      "Il comprend un diagnostic, une stratégie et un programme d'actions.",
      "Il doit être compatible avec le schéma régional d'aménagement et de développement durable.",
    ],
    pieges: [
      "Le PCAET est porté par l'intercommunalité, pas par chaque commune individuellement.",
      "Ne confondez pas PCAET, document de planification énergétique et climatique, avec le PLU, document d'urbanisme.",
      "L'obligation ne dépend que du seuil de population, pas de la nature rurale ou urbaine du territoire.",
    ],
    phraseJury:
      "Le PCAET est le document de planification climat-air-énergie obligatoire pour les intercommunalités de plus de 20 000 habitants, comportant diagnostic, stratégie et plan d'actions. Il doit s'articuler avec le schéma régional d'aménagement et être révisé tous les six ans.",
    questionsJury: [
      { question: "Que signifie PCAET ?", reponse: "Plan climat-air-énergie territorial." },
      { question: "Qui doit élaborer un PCAET ?", reponse: "Les intercommunalités à fiscalité propre de plus de 20 000 habitants." },
      { question: "Que contient un PCAET ?", reponse: "Un diagnostic, une stratégie territoriale et un programme d'actions opérationnelles." },
      { question: "À quelle fréquence est-il révisé ?", reponse: "Au moins tous les six ans." },
    ],
    ultraMemo: "PCAET = plan climat-air-énergie, intercommunalités +20 000 hab, révision tous les 6 ans.",
  },
  {
    id: "enjeux-les-projets-alimentaires-territoriaux",
    title: "Les projets alimentaires territoriaux",
    theme: "Action publique et services",
    resume:
      "Démarches de coopération locale visant à rapprocher production, transformation et consommation alimentaires sur un territoire, dans un objectif de durabilité et de résilience.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: CONCOURS_AB,
    sections: [
      {
        titre: "Définition et objectifs",
        points: [
          "Un projet alimentaire territorial mobilise les acteurs d'un territoire autour de l'agriculture et de l'alimentation locales.",
          "Il vise à structurer les filières courtes entre producteurs et consommateurs.",
          "Il contribue aux objectifs de justice sociale, de santé publique et de préservation de l'environnement.",
        ],
      },
      {
        titre: "Cadre légal",
        points: [
          "Créés par la loi d'avenir pour l'agriculture, l'alimentation et la forêt du 13 octobre 2014.",
          "Peuvent être portés par une collectivité, un groupement de collectivités ou un collectif d'acteurs locaux.",
          "Peuvent obtenir une reconnaissance officielle du ministère chargé de l'agriculture.",
        ],
      },
      {
        titre: "Déclinaisons concrètes",
        points: [
          "Approvisionnement de la restauration collective en produits locaux et de qualité.",
          "Soutien à l'installation de nouveaux agriculteurs et préservation du foncier agricole.",
          "Actions de lutte contre le gaspillage alimentaire et d'éducation à l'alimentation durable.",
        ],
      },
    ],
    reperes: [
      "Loi d'avenir pour l'agriculture, l'alimentation et la forêt : 13 octobre 2014",
      "Loi EGalim fixant des objectifs pour la restauration collective : 30 octobre 2018",
      "Objectif national de généralisation des projets alimentaires territoriaux",
    ],
    aRetenir: [
      "Les projets alimentaires territoriaux rapprochent producteurs et consommateurs à l'échelle locale.",
      "Ils sont issus de la loi d'avenir agricole de 2014 et peuvent être reconnus par l'État.",
      "Ils touchent la restauration collective, le foncier agricole et la lutte contre le gaspillage.",
    ],
    pieges: [
      "Un projet alimentaire territorial n'est pas un simple marché de plein air, c'est une démarche de gouvernance et de planification.",
      "Ne confondez pas la loi d'avenir agricole de 2014, qui crée le dispositif, avec la loi EGalim de 2018, qui fixe des objectifs pour la restauration collective.",
      "La reconnaissance officielle n'est pas obligatoire pour mettre en œuvre un projet alimentaire territorial.",
    ],
    phraseJury:
      "Les projets alimentaires territoriaux, créés par la loi d'avenir agricole de 2014, rapprochent producteurs et consommateurs à l'échelle locale autour d'objectifs de durabilité et de justice sociale. Ils se déclinent notamment dans l'approvisionnement local de la restauration collective.",
    questionsJury: [
      { question: "Qu'est-ce qu'un projet alimentaire territorial ?", reponse: "Une démarche locale rapprochant production, transformation et consommation alimentaires sur un territoire." },
      { question: "Quelle loi les a créés ?", reponse: "La loi d'avenir pour l'agriculture, l'alimentation et la forêt du 13 octobre 2014." },
      { question: "Quel lien avec la loi EGalim ?", reponse: "EGalim fixe des objectifs d'approvisionnement local pour la restauration collective, en cohérence avec ces projets." },
      { question: "Citez une action concrète.", reponse: "L'approvisionnement des cantines scolaires en produits locaux et de qualité." },
    ],
    ultraMemo: "PAT = producteurs et consommateurs locaux, loi 2014, lien avec EGalim.",
  },
  {
    id: "enjeux-le-service-civique",
    title: "Le service civique",
    theme: "Statut et carrière",
    resume:
      "Engagement volontaire de plusieurs mois ouvert aux jeunes pour accomplir une mission d'intérêt général, notamment au sein des collectivités territoriales.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Principe et public concerné",
        points: [
          "Le service civique est un engagement volontaire ouvert aux jeunes de seize à vingt-cinq ans, étendu à trente ans pour les personnes en situation de handicap.",
          "Il se distingue d'un emploi salarié : le volontaire n'est ni agent public ni salarié de droit privé.",
          "Il vise à renforcer la cohésion nationale et la mixité sociale par un engagement citoyen.",
        ],
      },
      {
        titre: "Modalités",
        points: [
          "Mission d'une durée de six à douze mois, à raison d'au moins vingt-quatre heures par semaine.",
          "Le volontaire perçoit une indemnité versée par l'État, complétée le cas échéant par la structure d'accueil.",
          "Les missions couvrent des domaines variés comme la solidarité, l'éducation, l'environnement ou la culture.",
        ],
      },
      {
        titre: "Rôle des collectivités",
        points: [
          "Les collectivités peuvent être agréées pour accueillir des volontaires en service civique.",
          "Chaque volontaire bénéficie d'un tuteur désigné au sein de la structure d'accueil.",
          "Le service civique ne peut se substituer à un emploi et ne doit pas remplacer un poste existant.",
        ],
      },
    ],
    reperes: [
      "Loi du 10 mars 2010 relative au service civique",
      "Public concerné : 16 à 25 ans, 30 ans pour les personnes en situation de handicap",
      "Durée de la mission : six à douze mois",
    ],
    aRetenir: [
      "Le service civique n'est ni un emploi ni un stage : c'est un engagement volontaire indemnisé.",
      "Il est ouvert aux jeunes de seize à vingt-cinq ans, avec une extension pour le handicap.",
      "Une collectivité doit être agréée pour accueillir des volontaires.",
    ],
    pieges: [
      "Le service civique ne peut jamais remplacer un poste de fonctionnaire ou de contractuel existant.",
      "Le volontaire n'est pas un agent public, il ne relève pas du statut de la fonction publique.",
      "L'indemnité de service civique n'est pas un salaire au sens du droit du travail.",
    ],
    phraseJury:
      "Le service civique est un engagement volontaire indemnisé, ouvert aux jeunes de seize à vingt-cinq ans, pour accomplir une mission d'intérêt général de six à douze mois. Les collectivités agréées peuvent accueillir des volontaires, sans que cet engagement puisse se substituer à un emploi existant.",
    questionsJury: [
      { question: "Qu'est-ce que le service civique ?", reponse: "Un engagement volontaire indemnisé pour une mission d'intérêt général, ouvert aux jeunes." },
      { question: "Quelle est la durée d'une mission ?", reponse: "De six à douze mois, à raison d'au moins vingt-quatre heures par semaine." },
      { question: "Le volontaire est-il un agent public ?", reponse: "Non, il ne relève ni du statut de la fonction publique ni du droit du travail classique." },
      { question: "Un service civique peut-il remplacer un poste vacant ?", reponse: "Non, il ne doit jamais se substituer à un emploi existant." },
    ],
    ultraMemo: "Service civique = 16-25 ans, mission 6-12 mois, ni emploi ni stage.",
  },
  {
    id: "enjeux-les-zones-a-faibles-emissions",
    title: "Les zones à faibles émissions",
    theme: "Action publique et services",
    resume:
      "Périmètres urbains où la circulation des véhicules les plus polluants est restreinte pour améliorer la qualité de l'air, généralisés par la loi Climat et résilience.",
    duree: "6 min",
    categories: ["A", "B", "C"],
    concoursIds: TOUS_CONCOURS,
    sections: [
      {
        titre: "Principe et objectif",
        points: [
          "Une zone à faibles émissions restreint ou interdit la circulation des véhicules les plus polluants dans un périmètre urbain défini.",
          "L'objectif principal est la réduction de la pollution de l'air et de ses effets sur la santé publique.",
          "Le dispositif s'appuie sur les vignettes Crit'Air classant les véhicules selon leur niveau d'émissions.",
        ],
      },
      {
        titre: "Cadre légal et obligations",
        points: [
          "La loi d'orientation des mobilités de 2019 a posé les bases du dispositif, renforcé par la loi Climat et résilience de 2021.",
          "Les zones à faibles émissions sont obligatoires dans les agglomérations dépassant régulièrement les seuils de qualité de l'air.",
          "L'autorité compétente, souvent l'intercommunalité, définit le périmètre et le calendrier de restriction.",
        ],
      },
      {
        titre: "Mise en œuvre et accompagnement",
        points: [
          "Instauration progressive par étapes selon la vignette Crit'Air des véhicules concernés.",
          "Dispositifs d'aide au remplacement des véhicules polluants pour les ménages modestes.",
          "Nécessité d'une politique alternative de mobilité, transports en commun et pistes cyclables, pour accompagner la restriction.",
        ],
      },
    ],
    reperes: [
      "Loi d'orientation des mobilités : 24 décembre 2019",
      "Loi Climat et résilience : 22 août 2021, renforcement et généralisation",
      "Vignette Crit'Air : dispositif de classification des véhicules selon leur niveau de pollution",
    ],
    aRetenir: [
      "Les zones à faibles émissions restreignent la circulation des véhicules les plus polluants pour protéger la qualité de l'air.",
      "Elles sont devenues obligatoires dans les agglomérations les plus polluées depuis la loi Climat et résilience.",
      "Leur mise en œuvre doit s'accompagner d'aides sociales et d'alternatives de mobilité.",
    ],
    pieges: [
      "Une ZFE n'interdit pas toute circulation automobile, seulement celle des véhicules les plus polluants selon leur vignette Crit'Air.",
      "Ne confondez pas la vignette Crit'Air, française, avec d'autres dispositifs de péage urbain étrangers.",
      "L'obligation de ZFE ne concerne pas toutes les communes mais les agglomérations dépassant certains seuils de pollution.",
    ],
    phraseJury:
      "Les zones à faibles émissions restreignent la circulation des véhicules les plus polluants dans les agglomérations les plus touchées par la pollution de l'air, sur la base de la vignette Crit'Air. La loi Climat et résilience de 2021 en a généralisé le principe, en exigeant un accompagnement social et des alternatives de mobilité.",
    questionsJury: [
      { question: "Qu'est-ce qu'une zone à faibles émissions ?", reponse: "Un périmètre urbain où la circulation des véhicules les plus polluants est restreinte." },
      { question: "Sur quel dispositif s'appuie une ZFE ?", reponse: "La vignette Crit'Air, qui classe les véhicules selon leur niveau d'émissions." },
      { question: "Quelle loi a généralisé les ZFE ?", reponse: "La loi Climat et résilience du 22 août 2021." },
      { question: "Quel accompagnement doit être prévu ?", reponse: "Des aides au remplacement de véhicule et le développement d'alternatives de mobilité." },
    ],
    ultraMemo: "ZFE = restriction véhicules polluants, vignette Crit'Air, généralisée par loi Climat 2021.",
  },
];
