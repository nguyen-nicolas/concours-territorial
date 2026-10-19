import type { QuizTheme } from "./quizData";

/**
 * Banque de questions dédiée au concours d'agent de maîtrise territorial :
 * hygiène et sécurité, encadrement d'équipe, techniques BTP / VRD.
 * Contenus indicatifs : vérifier les textes en vigueur avant chaque session.
 */
export const themesAgentMaitrise: QuizTheme[] = [
  {
    id: "am-hygiene-securite",
    title: "Hygiène et sécurité au travail",
    description:
      "Prévention des risques, acteurs de la sécurité, chantiers, accidents de service : le socle attendu d'un agent de maîtrise.",
    level: "Approfondissement",
    questions: [
      {
        question: "Quel document recense et évalue les risques professionnels de chaque unité de travail ?",
        options: [
          "Le document unique d'évaluation des risques professionnels (DUERP)",
          "Le registre de santé et sécurité au travail",
          "Le règlement intérieur",
          "La fiche de données de sécurité",
        ],
        answerIndex: 0,
        explanation:
          "Le DUERP est obligatoire pour tout employeur public : il inventorie les risques par unité de travail et sert de base au programme d'actions de prévention.",
        optionNotes: [
          null,
          "Le registre SST recueille les observations des agents ; il n'évalue pas les risques.",
          "Le règlement intérieur fixe des règles de vie et de discipline, pas l'évaluation des risques.",
          "La FDS décrit les dangers d'un produit chimique précis, pas les risques d'une unité de travail.",
        ],
      },
      {
        question: "Dans une collectivité d'au moins 11 agents, à quelle fréquence minimale le DUERP doit-il être mis à jour ?",
        options: ["Tous les 5 ans", "Au moins une fois par an", "Uniquement après un accident", "Tous les 3 ans"],
        answerIndex: 1,
        explanation:
          "La mise à jour est au moins annuelle, et aussi lors de tout aménagement important des conditions de travail ou quand une information nouvelle sur un risque est connue.",
        optionNotes: [
          "Ce délai est beaucoup trop long : les risques évoluent avec les chantiers et les équipements.",
          null,
          "Un accident impose une mise à jour, mais il ne faut pas l'attendre pour actualiser le document.",
          "Aucun texte ne prévoit un rythme de trois ans pour le DUERP.",
        ],
      },
      {
        question: "Qui est responsable de la sécurité et de la protection de la santé des agents d'une collectivité ?",
        options: [
          "L'assistant de prévention",
          "Le médecin du travail",
          "L'autorité territoriale (maire, président)",
          "Chaque agent pour lui-même",
        ],
        answerIndex: 2,
        explanation:
          "L'autorité territoriale est chargée de veiller à la sécurité et à la protection de la santé des agents placés sous son autorité. Les encadrants agissent par délégation et doivent faire appliquer les consignes.",
        optionNotes: [
          "L'assistant de prévention conseille et assiste ; il n'endosse pas la responsabilité de l'employeur.",
          "Le médecin assure la surveillance médicale et conseille, sans être responsable de la sécurité.",
          null,
          "Chaque agent doit prendre soin de sa sécurité, mais la responsabilité première reste celle de l'employeur.",
        ],
      },
      {
        question: "Quel est le rôle de l'assistant de prévention ?",
        options: [
          "Contrôler l'application des règles et proposer des mesures en cas d'urgence",
          "Assister et conseiller l'autorité territoriale dans la mise en œuvre de la prévention",
          "Sanctionner les agents qui ne portent pas leurs EPI",
          "Délivrer les habilitations électriques",
        ],
        answerIndex: 1,
        explanation:
          "Nommé par l'autorité territoriale, l'assistant de prévention (ancien ACMO) assiste et conseille sur la démarche de prévention au plus près des services.",
        optionNotes: [
          "C'est la mission de l'agent chargé de la fonction d'inspection (ACFI).",
          null,
          "Il n'a aucun pouvoir disciplinaire : seule l'autorité territoriale peut sanctionner.",
          "L'habilitation électrique est délivrée par l'employeur après formation.",
        ],
      },
      {
        question: "Que signifie le sigle ACFI ?",
        options: [
          "Agent chargé de la fonction d'inspection",
          "Agent de contrôle des formations internes",
          "Assistant chargé des fiches d'intervention",
          "Agent certifié en feux et incendie",
        ],
        answerIndex: 0,
        explanation:
          "L'ACFI contrôle les conditions d'application des règles d'hygiène et de sécurité et propose à l'autorité territoriale les mesures pour améliorer la prévention.",
        optionNotes: [
          null,
          "Ce sigle n'existe pas dans la réglementation santé-sécurité.",
          "Ce sigle n'existe pas ; les fiches d'intervention relèvent de l'organisation du service.",
          "La sécurité incendie relève d'autres qualifications (SSIAP, par exemple).",
        ],
      },
      {
        question: "Depuis le renouvellement des instances de 2022, quelle instance traite des questions de santé et de sécurité ?",
        options: [
          "Le CHSCT",
          "La commission administrative paritaire",
          "La formation spécialisée en santé, sécurité et conditions de travail (F3SCT) du comité social territorial",
          "Le conseil de discipline",
        ],
        answerIndex: 2,
        explanation:
          "La loi de transformation de la fonction publique du 6 août 2019 a fusionné comité technique et CHSCT dans le comité social territorial (CST), au sein duquel une formation spécialisée traite la santé et la sécurité.",
        optionNotes: [
          "Le CHSCT a disparu avec la mise en place des comités sociaux territoriaux.",
          "La CAP examine des questions individuelles de carrière, pas la santé au travail.",
          null,
          "Le conseil de discipline intervient pour les sanctions des 2e, 3e et 4e groupes.",
        ],
      },
      {
        question: "Dans quel cas un agent peut-il exercer son droit de retrait ?",
        options: [
          "Quand il estime sa charge de travail trop lourde",
          "Quand il a un motif raisonnable de penser qu'une situation présente un danger grave et imminent pour sa vie ou sa santé",
          "Quand la météo est mauvaise",
          "Quand il est en désaccord avec un ordre de son supérieur",
        ],
        answerIndex: 1,
        explanation:
          "Le droit de retrait suppose un danger grave et imminent, ou une défectuosité des protections. L'agent alerte immédiatement sa hiérarchie et ne doit pas créer de nouveau danger pour autrui.",
        optionNotes: [
          "Une surcharge de travail se traite par le dialogue hiérarchique, pas par le droit de retrait.",
          null,
          "La météo seule ne suffit pas ; seule une situation de danger grave et imminent le justifie.",
          "Un désaccord relève du devoir d'obéissance et de ses limites, pas du droit de retrait.",
        ],
      },
      {
        question: "Un agent exerce légitimement son droit de retrait. Quelle conséquence peut-il subir ?",
        options: [
          "Une retenue sur salaire",
          "Un avertissement",
          "Aucune sanction ni retenue sur salaire",
          "Une mutation d'office",
        ],
        answerIndex: 2,
        explanation:
          "Aucune sanction ni retenue de traitement ne peut être prise contre un agent qui s'est retiré d'une situation de travail dont il avait un motif raisonnable de penser qu'elle présentait un danger grave et imminent.",
        optionNotes: [
          "La retenue est interdite quand le retrait est légitime.",
          "L'avertissement est une sanction : elle est exclue dans ce cas.",
          null,
          "Une mutation d'office en représailles serait une sanction déguisée, donc illégale.",
        ],
      },
      {
        question: "À quoi sert le registre de santé et de sécurité au travail ?",
        options: [
          "À consigner les observations et suggestions des agents sur la prévention des risques",
          "À enregistrer les arrêts maladie",
          "À noter les horaires des agents",
          "À recenser les sanctions disciplinaires",
        ],
        answerIndex: 0,
        explanation:
          "Mis à disposition des agents (et des usagers) dans chaque service, il permet de signaler un risque ou de proposer une amélioration. L'autorité doit en prendre connaissance et y donner suite.",
        optionNotes: [
          null,
          "Les arrêts maladie relèvent de la gestion du personnel et du secret médical.",
          "Les horaires se gèrent par planning ou badgeuse.",
          "Les sanctions figurent au dossier individuel de l'agent.",
        ],
      },
      {
        question: "Où signale-t-on un danger grave et imminent ?",
        options: [
          "Dans le registre spécial de signalement d'un danger grave et imminent",
          "Dans le cahier de liaison de l'équipe",
          "Sur le planning hebdomadaire",
          "Uniquement par oral, sans trace écrite",
        ],
        answerIndex: 0,
        explanation:
          "Ce registre spécial, tenu sous la responsabilité de l'autorité territoriale, trace chaque signalement (date, poste, nature du danger) et déclenche une enquête immédiate.",
        optionNotes: [
          null,
          "Un cahier de liaison n'a aucune valeur réglementaire pour ce type de signalement.",
          "Le planning n'est pas un document de prévention.",
          "L'alerte orale est nécessaire, mais le signalement doit aussi être écrit dans le registre spécial.",
        ],
      },
      {
        question: "Quel est le premier des principes généraux de prévention ?",
        options: ["Fournir des EPI", "Éviter les risques", "Former les agents", "Afficher les consignes"],
        answerIndex: 1,
        explanation:
          "Les neuf principes s'appliquent dans l'ordre : éviter les risques, évaluer ceux qu'on ne peut éviter, les combattre à la source, adapter le travail à l'homme, tenir compte de la technique, remplacer le dangereux, planifier, privilégier la protection collective, donner des instructions.",
        optionNotes: [
          "Les EPI n'arrivent qu'en dernier recours, après la protection collective.",
          null,
          "La formation fait partie des instructions, qui viennent en fin de liste.",
          "Les consignes sont des instructions : dernier principe de la liste.",
        ],
      },
      {
        question: "Entre un garde-corps et un harnais antichute, que faut-il privilégier ?",
        options: [
          "Le harnais, plus rapide à mettre en place",
          "Le garde-corps, protection collective prioritaire",
          "Les deux sont équivalents",
          "Ni l'un ni l'autre si l'agent est expérimenté",
        ],
        answerIndex: 1,
        explanation:
          "La protection collective protège tout le monde sans dépendre du comportement de chacun : elle passe avant l'équipement de protection individuelle.",
        optionNotes: [
          "Le harnais est un EPI : il ne vient qu'en complément ou quand la protection collective est impossible.",
          null,
          "La réglementation fixe une priorité claire en faveur de la protection collective.",
          "L'expérience ne dispense jamais de protection contre les chutes de hauteur.",
        ],
      },
      {
        question: "Qui paie les équipements de protection individuelle (EPI) ?",
        options: [
          "L'agent, sur son salaire",
          "L'employeur, gratuitement pour l'agent",
          "Moitié agent, moitié employeur",
          "Le fournisseur",
        ],
        answerIndex: 1,
        explanation:
          "Les EPI sont fournis gratuitement par l'employeur, qui en assure l'entretien et le remplacement. L'encadrant veille à leur port effectif.",
        optionNotes: [
          "Faire payer les EPI à l'agent est interdit.",
          null,
          "Aucun partage des frais n'est prévu.",
          "Le fournisseur vend les EPI : c'est l'employeur qui les achète.",
        ],
      },
      {
        question: "Que garantit le marquage S3 sur une chaussure de sécurité ?",
        options: [
          "Une simple semelle antidérapante",
          "Un embout de protection, l'absorption d'énergie au talon, une semelle anti-perforation et une tige hydrofuge",
          "Uniquement l'isolation électrique",
          "Une protection contre la chaleur jusqu'à 300 °C",
        ],
        answerIndex: 1,
        explanation:
          "S3 reprend les exigences S1 (embout, antistatique, talon absorbant) et ajoute la semelle anti-perforation et la résistance à l'eau : c'est la référence sur les chantiers.",
        optionNotes: [
          "L'antidérapant est une exigence de base, insuffisante pour un chantier.",
          null,
          "L'isolation électrique relève de chaussures spécifiques, marquées différemment.",
          "La résistance à la chaleur de contact fait l'objet d'un marquage complémentaire (HRO).",
        ],
      },
      {
        question: "À partir de quel niveau d'exposition quotidienne au bruit le port des protections auditives devient-il obligatoire ?",
        options: ["70 dB(A)", "80 dB(A)", "85 dB(A)", "100 dB(A)"],
        answerIndex: 2,
        explanation:
          "À 80 dB(A), l'employeur met des protecteurs à disposition ; à 85 dB(A), leur port est obligatoire. La valeur limite, à ne jamais dépasser, est de 87 dB(A) en tenant compte des protecteurs.",
        optionNotes: [
          "À 70 dB(A), aucune mesure réglementaire n'est déclenchée.",
          "À 80 dB(A), les protecteurs sont mis à disposition, mais leur port n'est pas encore obligatoire.",
          null,
          "Attendre 100 dB(A) exposerait les agents à des lésions auditives irréversibles.",
        ],
      },
      {
        question: "Quelle hauteur doit avoir un garde-corps de protection ?",
        options: ["Entre 0,50 et 0,70 m", "Entre 0,80 et 0,90 m", "Entre 1 m et 1,10 m", "Au moins 1,50 m"],
        answerIndex: 2,
        explanation:
          "Les garde-corps rigides doivent être placés à une hauteur comprise entre 1 m et 1,10 m, avec une lisse intermédiaire et une plinthe de butée.",
        optionNotes: [
          "Une telle hauteur ne retiendrait pas une personne debout.",
          "Insuffisant : le centre de gravité d'un adulte passerait au-dessus.",
          null,
          "Cette hauteur n'est pas exigée et gênerait le travail.",
        ],
      },
      {
        question: "Une échelle peut-elle être utilisée comme poste de travail ?",
        options: [
          "Oui, sans restriction",
          "Non, sauf impossibilité technique d'utiliser un équipement plus sûr, ou risque faible et travaux de courte durée non répétitifs",
          "Oui, si l'agent a plus de 5 ans d'ancienneté",
          "Jamais, même pour accéder à un toit",
        ],
        answerIndex: 1,
        explanation:
          "L'échelle est d'abord un moyen d'accès. Comme poste de travail, elle n'est tolérée que dans ces cas limités ; on lui préfère une plateforme individuelle roulante ou un échafaudage.",
        optionNotes: [
          "Les chutes d'échelle sont une cause majeure d'accidents graves : l'usage est encadré.",
          null,
          "L'ancienneté ne change rien à la règle.",
          "L'échelle reste autorisée comme moyen d'accès.",
        ],
      },
      {
        question: "Que faut-il, au minimum, pour qu'un agent conduise une mini-pelle sur un chantier ?",
        options: [
          "Le permis B",
          "Une autorisation de conduite délivrée par l'employeur",
          "L'accord oral du chef d'équipe",
          "Aucune formalité sur la voie publique",
        ],
        answerIndex: 1,
        explanation:
          "L'autorisation de conduite est délivrée par l'employeur après examen d'aptitude médicale, contrôle des connaissances (souvent par le CACES) et connaissance des lieux.",
        optionNotes: [
          "Le permis B ne vaut pas aptitude à conduire un engin de chantier.",
          null,
          "Un accord oral n'a aucune valeur : l'autorisation doit être écrite.",
          "La conduite d'engins est encadrée partout, voie publique comprise.",
        ],
      },
      {
        question: "Quel symbole d'habilitation électrique correspond à un agent non électricien qui travaille à proximité d'installations électriques ?",
        options: ["BR", "B2V", "B0 / H0", "BC"],
        answerIndex: 2,
        explanation:
          "Le chiffre 0 désigne un exécutant de travaux d'ordre non électrique (peinture, maçonnerie, nettoyage) dans un environnement électrique.",
        optionNotes: [
          "BR concerne les interventions électriques de dépannage en basse tension.",
          "B2V concerne le chargé de travaux électriques au voisinage de pièces nues sous tension.",
          null,
          "BC concerne le chargé de consignation.",
        ],
      },
      {
        question: "Avant des travaux dans un bâtiment, quand un repérage amiante est-il obligatoire ?",
        options: [
          "Pour les bâtiments dont le permis de construire a été délivré avant le 1er juillet 1997",
          "Uniquement pour les bâtiments construits avant 1950",
          "Uniquement pour les écoles",
          "Jamais pour de petits travaux",
        ],
        answerIndex: 0,
        explanation:
          "L'amiante est interdite en France depuis le 1er janvier 1997. Pour les immeubles dont le permis de construire est antérieur au 1er juillet 1997, un repérage avant travaux est obligatoire.",
        optionNotes: [
          null,
          "1949 est la date de référence pour le plomb (CREP), pas pour l'amiante.",
          "L'obligation concerne tous les immeubles bâtis concernés, pas seulement les écoles.",
          "Même de petits travaux (percement, ponçage) peuvent libérer des fibres.",
        ],
      },
      {
        question: "Combien de rubriques comporte une fiche de données de sécurité (FDS) ?",
        options: ["4", "9", "16", "25"],
        answerIndex: 2,
        explanation:
          "La FDS, remise par le fournisseur, compte 16 rubriques : identification des dangers, premiers secours, manipulation et stockage, protections individuelles, etc.",
        optionNotes: [
          "4 rubriques ne suffiraient pas à décrire les dangers et les précautions.",
          "9 correspond au nombre de pictogrammes de danger, pas aux rubriques de la FDS.",
          null,
          "Ce nombre ne correspond à aucun format réglementaire.",
        ],
      },
      {
        question: "À quoi reconnaît-on un pictogramme de danger du règlement CLP ?",
        options: [
          "Un carré orange avec un symbole noir",
          "Un losange à bordure rouge, fond blanc et symbole noir",
          "Un cercle bleu",
          "Un triangle jaune",
        ],
        answerIndex: 1,
        explanation:
          "Depuis le règlement CLP, les pictogrammes de danger sont des losanges à bordure rouge. Les anciens carrés orange ne sont plus réglementaires.",
        optionNotes: [
          "C'est l'ancien étiquetage, remplacé par le CLP.",
          null,
          "Le cercle bleu signale une obligation (port d'EPI, par exemple).",
          "Le triangle jaune est un panneau d'avertissement de la signalisation de sécurité, pas un pictogramme CLP.",
        ],
      },
      {
        question: "Un agent chute en se rendant au travail par son trajet habituel. De quoi s'agit-il ?",
        options: ["D'un accident de trajet", "D'un accident de la vie privée", "D'une maladie professionnelle", "D'un congé ordinaire"],
        answerIndex: 0,
        explanation:
          "L'accident survenu sur le trajet habituel entre le domicile et le lieu de travail, sans détour personnel, peut être reconnu imputable au service comme accident de trajet.",
        optionNotes: [
          null,
          "Le trajet domicile-travail est protégé : ce n'est pas un accident de la vie privée.",
          "Une maladie professionnelle résulte d'une exposition prolongée, pas d'un événement soudain.",
          "Le congé ordinaire n'est pas une qualification d'accident.",
        ],
      },
      {
        question: "Dans quel délai un fonctionnaire doit-il déclarer un accident de service ?",
        options: ["48 heures", "15 jours à compter de la date de l'accident", "2 mois", "1 an"],
        answerIndex: 1,
        explanation:
          "Le fonctionnaire dispose de 15 jours pour déclarer l'accident à son employeur (2 ans pour une maladie professionnelle, à compter de la première constatation médicale ou du lien établi avec le travail).",
        optionNotes: [
          "48 heures est le délai d'envoi du certificat d'arrêt de travail, pas celui de la déclaration d'accident.",
          null,
          "Trop long pour un accident : les faits doivent être établis rapidement.",
          "Ce délai ne correspond pas à la déclaration d'un accident.",
        ],
      },
      {
        question: "Que signifie CITIS ?",
        options: [
          "Congé pour invalidité temporaire imputable au service",
          "Contrat individuel de travail en insertion sociale",
          "Commission d'inspection technique des installations sportives",
          "Certificat d'intervention en travaux d'intérêt sanitaire",
        ],
        answerIndex: 0,
        explanation:
          "Le CITIS est le congé accordé au fonctionnaire victime d'un accident de service, d'un accident de trajet ou d'une maladie professionnelle : il conserve son plein traitement.",
        optionNotes: [
          null,
          "Ce sigle n'existe pas.",
          "Ce sigle n'existe pas.",
          "Ce sigle n'existe pas.",
        ],
      },
      {
        question: "Face à un accident sur un chantier, quelle est la première action ?",
        options: ["Alerter les secours", "Protéger pour éviter un sur-accident", "Déplacer immédiatement la victime", "Prévenir la hiérarchie"],
        answerIndex: 1,
        explanation:
          "La démarche est : protéger, alerter, secourir. On supprime d'abord le danger (couper une machine, baliser) pour éviter de nouvelles victimes.",
        optionNotes: [
          "L'alerte vient juste après la protection.",
          null,
          "On ne déplace une victime qu'en cas de danger vital immédiat.",
          "La hiérarchie est prévenue ensuite ; l'urgence est de protéger et d'alerter.",
        ],
      },
      {
        question: "Quel est le numéro d'appel d'urgence européen ?",
        options: ["15", "17", "18", "112"],
        answerIndex: 3,
        explanation:
          "Le 112 est joignable gratuitement dans toute l'Union européenne, y compris depuis un portable. En France, le 15 (SAMU), le 17 (police) et le 18 (pompiers) restent valables.",
        optionNotes: [
          "Le 15 est le SAMU, numéro national.",
          "Le 17 est police secours, numéro national.",
          "Le 18 est les sapeurs-pompiers, numéro national.",
          null,
        ],
      },
      {
        question: "Quel vêtement porte un agent qui travaille sur la chaussée ouverte à la circulation ?",
        options: [
          "Un vêtement de couleur sombre",
          "Un vêtement haute visibilité (classe 2 ou 3)",
          "Une simple casquette réfléchissante",
          "Aucun vêtement particulier de jour",
        ],
        answerIndex: 1,
        explanation:
          "Le vêtement haute visibilité, conforme à la norme EN ISO 20471, rend l'agent visible de jour comme de nuit. La classe 3 offre la meilleure visibilité.",
        optionNotes: [
          "Une couleur sombre rend l'agent quasiment invisible pour les conducteurs.",
          null,
          "Une casquette seule ne suffit pas.",
          "Le risque d'être heurté existe aussi de jour.",
        ],
      },
      {
        question: "Quand un plan de prévention écrit est-il obligatoire avec une entreprise extérieure ?",
        options: [
          "Toujours, même pour 1 heure d'intervention",
          "Quand l'intervention atteint au moins 400 heures sur 12 mois, ou pour des travaux dangereux",
          "Uniquement si l'entreprise le demande",
          "Jamais dans une collectivité",
        ],
        answerIndex: 1,
        explanation:
          "Une inspection commune préalable est toujours obligatoire. Le plan est écrit dès 400 heures de travaux sur 12 mois, ou quel que soit le volume pour les travaux dangereux listés par arrêté.",
        optionNotes: [
          "Le plan peut être oral pour les interventions courtes et non dangereuses.",
          null,
          "C'est une obligation réglementaire, pas une option.",
          "Les collectivités qui accueillent des entreprises extérieures y sont soumises.",
        ],
      },
      {
        question: "Sur un chantier de bâtiment où interviennent plusieurs entreprises, qui désigne le coordonnateur SPS ?",
        options: ["L'entreprise principale", "Le maître d'ouvrage", "L'inspection du travail", "Le chef de chantier"],
        answerIndex: 1,
        explanation:
          "Le maître d'ouvrage (souvent la collectivité) désigne le coordonnateur en matière de sécurité et de protection de la santé dès la conception, quand plusieurs entreprises interviennent.",
        optionNotes: [
          "L'entreprise rédige son propre plan de sécurité, mais ne désigne pas le coordonnateur.",
          null,
          "L'inspection du travail contrôle, elle ne désigne pas.",
          "Le chef de chantier organise son équipe, sans désigner le coordonnateur.",
        ],
      },
      {
        question: "Que signifie PPSPS ?",
        options: [
          "Plan particulier de sécurité et de protection de la santé",
          "Programme pluriannuel de surveillance des petits sites",
          "Procès-verbal de passation de service",
          "Plan de prévention des sinistres par secteur",
        ],
        answerIndex: 0,
        explanation:
          "Chaque entreprise intervenant sur un chantier soumis à coordination rédige son PPSPS : elle y décrit ses modes opératoires et les mesures de prévention correspondantes.",
        optionNotes: [null, "Ce sigle n'existe pas.", "Ce sigle n'existe pas.", "Ce sigle n'existe pas."],
      },
      {
        question: "À partir de quelle profondeur une tranchée étroite doit-elle être blindée ?",
        options: ["0,50 m", "1 m", "Plus de 1,30 m", "2,50 m"],
        answerIndex: 2,
        explanation:
          "Une fouille en tranchée de plus de 1,30 m de profondeur, dont la largeur est inférieure ou égale aux deux tiers de la profondeur, doit être blindée ou talutée pour éviter l'ensevelissement.",
        optionNotes: [
          "Ce n'est pas le seuil réglementaire, même si la prudence reste de mise.",
          "Ce n'est pas le seuil réglementaire.",
          null,
          "Bien trop tard : l'ensevelissement peut tuer bien avant cette profondeur.",
        ],
      },
      {
        question: "Quelle charge maximale un homme peut-il porter de façon habituelle sans aptitude médicale particulière ?",
        options: ["25 kg", "40 kg", "55 kg", "105 kg"],
        answerIndex: 2,
        explanation:
          "Le code du travail fixe 55 kg (105 kg seulement si l'agent est reconnu apte par le médecin) et limite les femmes à 25 kg. Il faut avant tout réduire le port manuel par des aides mécaniques.",
        optionNotes: [
          "25 kg est la limite fixée pour les femmes.",
          "Ce n'est pas un seuil réglementaire.",
          null,
          "105 kg nécessite une aptitude reconnue par le médecin.",
        ],
      },
      {
        question: "À quelle fréquence minimale un agent territorial bénéficie-t-il d'une visite d'information et de prévention ?",
        options: ["Tous les 6 mois", "Au minimum tous les 2 ans", "Tous les 5 ans", "Uniquement à l'embauche"],
        answerIndex: 1,
        explanation:
          "Le suivi médical des agents territoriaux prévoit une visite au minimum tous les deux ans, avec une surveillance renforcée pour certains postes (agents exposés, handicap, etc.).",
        optionNotes: [
          "Cette fréquence peut concerner une surveillance renforcée, pas la règle générale.",
          null,
          "Trop espacé par rapport à la règle des deux ans.",
          "Le suivi continue tout au long de la carrière.",
        ],
      },
    ],
  },
  {
    id: "am-encadrement",
    title: "Encadrement d'équipe",
    description:
      "Management, organisation du travail, temps de travail, discipline et accompagnement des agents : ce que le jury attend d'un futur encadrant.",
    level: "Approfondissement",
    questions: [
      {
        question: "Quel est le rôle principal d'un agent de maîtrise territorial ?",
        options: [
          "Diriger les services techniques de la collectivité",
          "Encadrer des agents d'exécution et contrôler les travaux confiés",
          "Voter le budget des travaux",
          "Rédiger les marchés publics",
        ],
        answerIndex: 1,
        explanation:
          "Cadre d'emplois de catégorie C, l'agent de maîtrise organise et contrôle les travaux, encadre une équipe d'agents d'exécution et peut participer lui-même aux travaux.",
        optionNotes: [
          "La direction des services techniques relève de la catégorie A (ingénieurs).",
          null,
          "Le budget est voté par l'assemblée délibérante.",
          "La rédaction des marchés relève des services commande publique et des techniciens ou ingénieurs.",
        ],
      },
      {
        question: "Selon le management situationnel, quel style adopter avec un agent débutant, motivé mais peu compétent sur la tâche ?",
        options: ["Délégatif", "Participatif", "Directif", "Laisser-faire"],
        answerIndex: 2,
        explanation:
          "L'agent qui découvre une tâche a besoin de consignes précises, de démonstrations et d'un contrôle rapproché : c'est le style directif.",
        optionNotes: [
          "Déléguer à un débutant l'expose à l'échec.",
          "Le style participatif convient à un agent compétent mais hésitant.",
          null,
          "Le laisser-faire n'est pas un style de management situationnel : c'est une absence de management.",
        ],
      },
      {
        question: "Avec un agent expérimenté, compétent et motivé, quel style de management est le plus adapté ?",
        options: ["Directif", "Persuasif", "Délégatif", "Autoritaire"],
        answerIndex: 2,
        explanation:
          "Un agent autonome peut se voir confier une mission avec des objectifs clairs ; l'encadrant reste disponible et contrôle les résultats.",
        optionNotes: [
          "Le style directif démotiverait un agent autonome.",
          "Le style persuasif convient à un agent qui progresse mais manque encore d'assurance.",
          null,
          "L'autoritarisme n'est pas un style situationnel et nuit à la motivation.",
        ],
      },
      {
        question: "Qui conduit l'entretien professionnel annuel d'un agent ?",
        options: ["Le maire", "Le directeur des ressources humaines", "Le supérieur hiérarchique direct", "Un représentant du personnel"],
        answerIndex: 2,
        explanation:
          "L'entretien professionnel, qui a remplacé la notation, est conduit par le N+1. Il porte sur les résultats, les objectifs, la manière de servir, les besoins de formation et les perspectives.",
        optionNotes: [
          "Le maire est l'autorité territoriale, mais il ne mène pas tous les entretiens.",
          "La DRH organise la campagne d'entretiens sans les conduire.",
          null,
          "Les représentants du personnel n'interviennent pas dans l'entretien.",
        ],
      },
      {
        question: "Un agent conteste le compte rendu de son entretien professionnel. Dans quel délai peut-il en demander la révision à l'autorité territoriale ?",
        options: ["48 heures", "15 jours francs après sa notification", "6 mois", "Il ne peut pas le contester"],
        answerIndex: 1,
        explanation:
          "La demande de révision est adressée à l'autorité territoriale dans les 15 jours francs suivant la notification. En cas de refus, l'agent peut saisir la CAP.",
        optionNotes: [
          "Ce délai ne correspond à aucune procédure de révision.",
          null,
          "Trop long : le délai réglementaire est bien plus court.",
          "Le droit de contestation existe et passe d'abord par l'autorité territoriale.",
        ],
      },
      {
        question: "Un agent de maîtrise peut-il infliger un avertissement à un agent de son équipe ?",
        options: [
          "Oui, c'est une sanction mineure",
          "Non, le pouvoir disciplinaire appartient à l'autorité territoriale",
          "Oui, avec l'accord de l'agent",
          "Oui, après avis du médecin",
        ],
        answerIndex: 1,
        explanation:
          "L'encadrant constate les faits, en rend compte par écrit à sa hiérarchie et peut faire un rappel à l'ordre oral ; seule l'autorité territoriale prononce une sanction.",
        optionNotes: [
          "Même mineur, l'avertissement est une sanction disciplinaire.",
          null,
          "L'accord de l'agent ne crée aucun pouvoir de sanction.",
          "Le médecin n'a aucun rôle disciplinaire.",
        ],
      },
      {
        question: "Quelles sanctions composent le premier groupe pour un fonctionnaire territorial ?",
        options: [
          "Avertissement, blâme, exclusion temporaire de 1 à 3 jours",
          "Révocation et mise à la retraite d'office",
          "Rétrogradation et abaissement d'échelon",
          "Exclusion de 16 jours à 2 ans",
        ],
        answerIndex: 0,
        explanation:
          "Les sanctions du premier groupe peuvent être prononcées sans consultation du conseil de discipline. L'agent a toujours accès à son dossier et peut présenter sa défense.",
        optionNotes: [
          null,
          "Ce sont les sanctions les plus lourdes, du quatrième groupe.",
          "Ces sanctions relèvent des deuxième et troisième groupes.",
          "C'est le troisième groupe.",
        ],
      },
      {
        question: "Un agent doit-il obéir à tout ordre de son supérieur ?",
        options: [
          "Oui, sans exception",
          "Oui, sauf si l'ordre est manifestement illégal et de nature à compromettre gravement un intérêt public",
          "Non, seulement s'il est d'accord",
          "Non, seulement si l'ordre est écrit",
        ],
        answerIndex: 1,
        explanation:
          "Le devoir d'obéissance hiérarchique est une obligation du fonctionnaire, avec cette seule limite fixée par le code général de la fonction publique.",
        optionNotes: [
          "Une exception existe pour l'ordre manifestement illégal et gravement préjudiciable.",
          null,
          "Le désaccord personnel ne dispense pas d'obéir.",
          "Un ordre oral est valable ; l'écrit n'est pas une condition.",
        ],
      },
      {
        question: "Un agent raconte à des voisins les difficultés internes d'un chantier de la commune. Quelle obligation ne respecte-t-il pas ?",
        options: ["Le devoir de réserve uniquement", "La discrétion professionnelle", "Le droit de grève", "L'obligation de formation"],
        answerIndex: 1,
        explanation:
          "La discrétion professionnelle interdit de divulguer les faits, informations ou documents connus dans l'exercice des fonctions.",
        optionNotes: [
          "Le devoir de réserve vise la manière d'exprimer ses opinions ; ici, c'est la divulgation d'informations qui pose problème.",
          null,
          "Le droit de grève n'a aucun rapport avec cette situation.",
          "La formation n'est pas en cause.",
        ],
      },
      {
        question: "Que signifie l'acronyme SMART pour fixer un objectif ?",
        options: [
          "Simple, Moderne, Adapté, Rapide, Technique",
          "Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini",
          "Sécurisé, Maîtrisé, Accepté, Rédigé, Transmis",
          "Stratégique, Motivant, Ambitieux, Rentable, Total",
        ],
        answerIndex: 1,
        explanation:
          "Un objectif SMART est précis, vérifiable et daté : « refaire 200 m² de trottoir rue des Lilas avant le 30 juin » plutôt que « avancer sur les trottoirs ».",
        optionNotes: [
          "Ce n'est pas la signification de l'acronyme.",
          null,
          "Ce n'est pas la signification de l'acronyme.",
          "Ce n'est pas la signification de l'acronyme.",
        ],
      },
      {
        question: "Quels besoins se trouvent à la base de la pyramide de Maslow ?",
        options: ["Les besoins d'estime", "Les besoins physiologiques", "Les besoins d'accomplissement", "Les besoins d'appartenance"],
        answerIndex: 1,
        explanation:
          "De bas en haut : besoins physiologiques, sécurité, appartenance, estime, accomplissement. Un besoin de base insatisfait empêche de s'intéresser aux suivants.",
        optionNotes: [
          "L'estime se situe au quatrième niveau.",
          null,
          "L'accomplissement est au sommet.",
          "L'appartenance est au troisième niveau.",
        ],
      },
      {
        question: "Selon Herzberg, de bonnes conditions de travail et un salaire correct :",
        options: [
          "Suffisent à motiver durablement les agents",
          "Évitent l'insatisfaction, sans créer à elles seules la motivation",
          "N'ont aucun effet sur les agents",
          "Démotivent les agents",
        ],
        answerIndex: 1,
        explanation:
          "Herzberg distingue les facteurs d'hygiène (salaire, conditions, relations), dont l'absence crée l'insatisfaction, et les facteurs moteurs (reconnaissance, responsabilité, intérêt du travail), qui motivent.",
        optionNotes: [
          "La motivation vient des facteurs moteurs, comme la reconnaissance.",
          null,
          "Leur absence génère de l'insatisfaction : ils ont donc un effet.",
          "Ils ne démotivent pas ; c'est leur absence qui pose problème.",
        ],
      },
      {
        question: "Lorsqu'un encadrant délègue une tâche, que conserve-t-il ?",
        options: [
          "Rien, l'agent devient seul responsable",
          "La responsabilité finale du résultat",
          "Uniquement l'exécution matérielle",
          "Le droit de ne pas contrôler",
        ],
        answerIndex: 1,
        explanation:
          "Déléguer, c'est confier une mission avec les moyens et l'autorité nécessaires, mais l'encadrant reste responsable devant sa hiérarchie et doit prévoir des points de contrôle.",
        optionNotes: [
          "La responsabilité ne se délègue pas entièrement.",
          null,
          "C'est justement l'exécution qui est confiée à l'agent.",
          "Le contrôle fait partie de toute délégation réussie.",
        ],
      },
      {
        question: "La méthode DESC sert à :",
        options: [
          "Calculer un volume de déblai",
          "Formuler une critique ou une demande de façon constructive",
          "Rédiger un bon de commande",
          "Organiser un planning",
        ],
        answerIndex: 1,
        explanation:
          "Décrire les faits, Exprimer son ressenti, Spécifier ce qu'on attend, présenter les Conséquences positives : on recadre sans attaquer la personne.",
        optionNotes: [
          "Aucun rapport avec les calculs de terrassement.",
          null,
          "Ce n'est pas une méthode administrative.",
          "Les plannings s'organisent avec d'autres outils (Gantt, par exemple).",
        ],
      },
      {
        question: "En écoute active, que fait l'encadrant pour vérifier qu'il a bien compris son interlocuteur ?",
        options: ["Il l'interrompt", "Il reformule ses propos", "Il donne immédiatement la solution", "Il change de sujet"],
        answerIndex: 1,
        explanation:
          "La reformulation (« si je comprends bien, tu dis que… ») montre l'écoute, évite les malentendus et aide l'agent à préciser sa pensée.",
        optionNotes: [
          "Interrompre bloque l'échange.",
          null,
          "Donner la solution trop vite empêche de comprendre le vrai problème.",
          "Changer de sujet montre qu'on n'écoute pas.",
        ],
      },
      {
        question: "Deux agents de votre équipe sont en conflit ouvert. Que faire en premier ?",
        options: [
          "Ignorer le conflit en espérant qu'il se règle seul",
          "Recevoir chaque agent séparément pour comprendre les faits",
          "Sanctionner les deux agents",
          "Prendre parti pour l'agent le plus ancien",
        ],
        answerIndex: 1,
        explanation:
          "L'encadrant écoute chacun séparément, établit les faits, puis organise si besoin un échange commun pour trouver une solution. Il informe sa hiérarchie si la situation l'exige.",
        optionNotes: [
          "Un conflit ignoré s'aggrave et dégrade toute l'équipe.",
          null,
          "L'encadrant ne peut pas sanctionner, et il faut d'abord comprendre.",
          "L'ancienneté n'est pas un critère d'équité.",
        ],
      },
      {
        question: "Quel outil représente les tâches d'un chantier sous forme de barres sur un calendrier ?",
        options: ["Le diagramme de Gantt", "La pyramide de Maslow", "Le DUERP", "L'organigramme"],
        answerIndex: 0,
        explanation:
          "Le diagramme de Gantt visualise la durée, l'enchaînement et le chevauchement des tâches : idéal pour planifier et suivre l'avancement.",
        optionNotes: [
          null,
          "Maslow concerne la motivation.",
          "Le DUERP évalue les risques professionnels.",
          "L'organigramme représente la hiérarchie, pas le temps.",
        ],
      },
      {
        question: "Dans un planning, qu'est-ce que le chemin critique ?",
        options: [
          "Le trajet le plus dangereux sur le chantier",
          "La suite de tâches dont tout retard retarde la fin du projet",
          "Le chemin d'accès des engins",
          "La liste des tâches facultatives",
        ],
        answerIndex: 1,
        explanation:
          "Mis en évidence par la méthode PERT, le chemin critique regroupe les tâches sans marge : ce sont elles que l'encadrant surveille en priorité.",
        optionNotes: [
          "Ce n'est pas une notion de sécurité.",
          null,
          "Ce n'est pas une notion de circulation sur chantier.",
          "C'est l'inverse : ces tâches sont indispensables et sans marge.",
        ],
      },
      {
        question: "Qu'est-ce qui caractérise le harcèlement moral ?",
        options: [
          "Un unique désaccord professionnel",
          "Des agissements répétés qui dégradent les conditions de travail",
          "Une remarque sur la qualité d'un travail",
          "Un changement d'horaires justifié par le service",
        ],
        answerIndex: 1,
        explanation:
          "Le harcèlement moral suppose des agissements répétés ayant pour objet ou pour effet une dégradation des conditions de travail, susceptible de porter atteinte aux droits, à la dignité ou à la santé de l'agent.",
        optionNotes: [
          "Un désaccord isolé n'est pas du harcèlement.",
          null,
          "Une remarque professionnelle fondée relève du pouvoir d'encadrement.",
          "Une décision justifiée par l'intérêt du service n'est pas du harcèlement.",
        ],
      },
      {
        question: "Un agent est agressé par un usager pendant son service. Que peut-il demander à sa collectivité ?",
        options: ["La protection fonctionnelle", "Une prime exceptionnelle", "Une mutation automatique", "Rien, c'est une affaire privée"],
        answerIndex: 0,
        explanation:
          "La collectivité doit protéger l'agent victime d'attaques liées à ses fonctions : assistance juridique, prise en charge des frais d'avocat, réparation du préjudice.",
        optionNotes: [
          null,
          "Aucune prime n'est prévue pour ce motif.",
          "La mutation n'est pas automatique ; elle peut être une mesure parmi d'autres.",
          "L'agression est liée aux fonctions : la collectivité doit agir.",
        ],
      },
      {
        question: "Un agent arrive sur le chantier manifestement alcoolisé. Quelle est la première décision de l'encadrant ?",
        options: [
          "Le laisser travailler sous surveillance",
          "Le retirer de son poste pour le mettre en sécurité, puis en rendre compte",
          "Lui confier la conduite d'un véhicule pour rentrer",
          "Ne rien dire pour préserver l'ambiance",
        ],
        answerIndex: 1,
        explanation:
          "L'encadrant doit faire cesser le danger pour l'agent et pour les autres : retrait du poste, mise en sécurité, appel des secours si besoin, rapport écrit à la hiérarchie.",
        optionNotes: [
          "Un agent alcoolisé met en danger lui-même et ses collègues.",
          null,
          "Le laisser conduire serait une faute grave.",
          "Le silence engage la responsabilité de l'encadrant.",
        ],
      },
      {
        question: "Que décrit une fiche de poste ?",
        options: [
          "Les missions, activités et compétences attendues sur un poste",
          "Le salaire de l'agent",
          "Les sanctions disciplinaires",
          "Les congés posés dans l'année",
        ],
        answerIndex: 0,
        explanation:
          "La fiche de poste sert au recrutement, à l'entretien professionnel et à l'organisation du service. Elle évolue avec les missions.",
        optionNotes: [
          null,
          "La rémunération dépend du grade, de l'échelon et du régime indemnitaire.",
          "Les sanctions figurent au dossier individuel.",
          "Les congés se gèrent dans un planning.",
        ],
      },
      {
        question: "Pour accueillir un nouvel agent dans l'équipe, quelle pratique est la plus efficace ?",
        options: [
          "Le laisser observer seul pendant un mois",
          "Lui désigner un tuteur et lui présenter l'équipe, les consignes de sécurité et le matériel",
          "Lui confier immédiatement les tâches les plus difficiles",
          "Attendre qu'il pose des questions",
        ],
        answerIndex: 1,
        explanation:
          "Un accueil organisé (présentation, livret d'accueil, consignes de sécurité, tuteur) réduit les accidents des nouveaux arrivants et accélère leur intégration.",
        optionNotes: [
          "L'isolement décourage et retarde l'apprentissage.",
          null,
          "C'est risquer l'échec et l'accident.",
          "Un nouvel arrivant n'ose pas toujours demander.",
        ],
      },
      {
        question: "Quelle est la durée de la formation d'intégration pour un fonctionnaire stagiaire de catégorie C ?",
        options: ["1 jour", "5 jours", "10 jours", "1 mois"],
        answerIndex: 1,
        explanation:
          "Les agents de catégorie C suivent 5 jours de formation d'intégration, organisés par le CNFPT, pendant leur stage. Elle conditionne la titularisation.",
        optionNotes: [
          "Insuffisant au regard de la réglementation.",
          null,
          "C'est la durée prévue pour les catégories A et B.",
          "Ce n'est pas la durée réglementaire.",
        ],
      },
      {
        question: "Combien d'heures par an le compte personnel de formation (CPF) d'un agent public est-il crédité, dans le cas général ?",
        options: ["10 heures", "25 heures, dans la limite de 150 heures", "50 heures, sans plafond", "100 heures"],
        answerIndex: 1,
        explanation:
          "Le CPF des agents publics est alimenté de 25 heures par an jusqu'à 150 heures. Un agent de catégorie C sans diplôme de niveau CAP-BEP bénéficie de 50 heures par an, jusqu'à 400 heures.",
        optionNotes: [
          "Ce n'est pas le crédit réglementaire.",
          null,
          "C'est le régime majoré, réservé aux agents de catégorie C peu diplômés, et il est plafonné à 400 heures.",
          "Ce n'est pas le crédit réglementaire.",
        ],
      },
      {
        question: "Quelle est la durée annuelle de travail effectif d'un agent à temps complet ?",
        options: ["1 470 heures", "1 607 heures", "1 820 heures", "2 000 heures"],
        answerIndex: 1,
        explanation:
          "La durée de référence est de 1 607 heures par an (35 heures par semaine, journée de solidarité comprise). Depuis 2019, les régimes dérogatoires plus favorables ont dû être supprimés.",
        optionNotes: [
          "Ce volume est inférieur à la durée légale.",
          null,
          "Ce volume dépasse la durée légale.",
          "Ce volume dépasse largement la durée légale.",
        ],
      },
      {
        question: "Quelle durée minimale de repos quotidien doit séparer deux journées de travail ?",
        options: ["8 heures", "9 heures", "11 heures", "13 heures"],
        answerIndex: 2,
        explanation:
          "Les garanties minimales imposent 11 heures de repos quotidien, une amplitude de journée de 12 heures au plus et 35 heures de repos hebdomadaire consécutif.",
        optionNotes: [
          "Insuffisant : la règle est de 11 heures.",
          "Insuffisant : la règle est de 11 heures.",
          null,
          "Ce n'est pas le seuil réglementaire.",
        ],
      },
      {
        question: "Au bout de combien de temps de travail continu un agent a-t-il droit à une pause d'au moins 20 minutes ?",
        options: ["4 heures", "6 heures", "8 heures", "10 heures"],
        answerIndex: 1,
        explanation:
          "Aucun temps de travail quotidien ne peut atteindre 6 heures sans une pause d'une durée minimale de 20 minutes.",
        optionNotes: [
          "Ce n'est pas le seuil réglementaire.",
          null,
          "Trop tard : la pause est due avant 6 heures de travail continu.",
          "Trop tard : la pause est due avant 6 heures de travail continu.",
        ],
      },
      {
        question: "Quelles sont les durées maximales de travail effectif fixées par les garanties minimales ?",
        options: [
          "8 h par jour et 40 h par semaine",
          "10 h par jour et 48 h par semaine",
          "12 h par jour et 60 h par semaine",
          "Aucune limite si l'agent est volontaire",
        ],
        answerIndex: 1,
        explanation:
          "La durée quotidienne ne peut dépasser 10 heures ; la durée hebdomadaire, heures supplémentaires comprises, ne peut dépasser 48 heures sur une semaine ni 44 heures en moyenne sur 12 semaines consécutives.",
        optionNotes: [
          "Ce sont des repères courants, pas les maximums réglementaires.",
          null,
          "Ces durées dépassent les garanties minimales.",
          "Le volontariat ne permet pas de dépasser ces garanties, qui protègent la santé.",
        ],
      },
      {
        question: "Combien d'heures supplémentaires un agent peut-il effectuer au maximum par mois, en principe ?",
        options: ["10 heures", "25 heures", "50 heures", "Aucune limite"],
        answerIndex: 1,
        explanation:
          "Les indemnités horaires pour travaux supplémentaires (IHTS) sont limitées à 25 heures par mois, sauf circonstances exceptionnelles et dérogations encadrées.",
        optionNotes: [
          "Ce n'est pas le plafond réglementaire.",
          null,
          "Ce volume dépasse le plafond réglementaire.",
          "Un plafond existe pour protéger la santé des agents.",
        ],
      },
      {
        question: "Qu'est-ce qu'une période d'astreinte ?",
        options: [
          "Une période de travail de nuit sur le chantier",
          "Une période où l'agent, sans être sur son lieu de travail, doit pouvoir intervenir à tout moment",
          "Une période de congé imposée",
          "Une formation obligatoire",
        ],
        answerIndex: 1,
        explanation:
          "Pendant l'astreinte, l'agent reste joignable et prêt à intervenir (fuite, chute d'arbre, déneigement). Seule la durée d'intervention compte comme travail effectif.",
        optionNotes: [
          "Un travail de nuit sur place est du travail effectif, pas une astreinte.",
          null,
          "L'astreinte n'est pas un congé.",
          "Aucun rapport avec la formation.",
        ],
      },
      {
        question: "Quel document utiliser pour transmettre une consigne écrite et durable à toute l'équipe ?",
        options: ["Un SMS individuel", "Une note de service", "Une conversation à la pause", "Un post-it sur un véhicule"],
        answerIndex: 1,
        explanation:
          "La note de service est datée, signée et diffusée à tous : elle laisse une trace et s'applique à chacun de la même façon.",
        optionNotes: [
          "Un SMS individuel ne garantit pas une information égale pour tous.",
          null,
          "Une information orale informelle ne laisse pas de trace.",
          "Un support précaire peut se perdre.",
        ],
      },
      {
        question: "Après une réunion d'équipe, quel document garde la trace des décisions prises ?",
        options: ["L'ordre du jour", "Le compte rendu", "La convocation", "La feuille d'émargement"],
        answerIndex: 1,
        explanation:
          "Le compte rendu, diffusé aux participants, récapitule les décisions, les responsables et les échéances : il sert de référence pour le suivi.",
        optionNotes: [
          "L'ordre du jour annonce les sujets avant la réunion.",
          null,
          "La convocation invite à la réunion.",
          "La feuille d'émargement prouve la présence, pas les décisions.",
        ],
      },
    ],
  },
  {
    id: "am-btp-vrd",
    title: "Techniques BTP et VRD",
    description:
      "Voirie, réseaux, matériaux, signalisation de chantier, accessibilité et calculs pratiques pour la spécialité bâtiment, travaux publics, voirie et réseaux divers.",
    level: "Approfondissement",
    questions: [
      {
        question: "Avant de creuser près de réseaux enterrés, quelle déclaration l'entreprise qui exécute les travaux doit-elle faire ?",
        options: [
          "Une déclaration préalable de travaux en mairie",
          "Une déclaration d'intention de commencement de travaux (DICT)",
          "Un permis de construire",
          "Une simple information orale aux riverains",
        ],
        answerIndex: 1,
        explanation:
          "Le maître d'ouvrage adresse une déclaration de projet de travaux (DT) au stade du projet ; l'exécutant adresse une DICT avant de commencer. Les exploitants de réseaux répondent avec la localisation de leurs ouvrages.",
        optionNotes: [
          "La déclaration préalable relève de l'urbanisme, pas de la protection des réseaux.",
          null,
          "Le permis de construire concerne les constructions, pas la protection des réseaux.",
          "L'information des riverains ne remplace pas la DICT.",
        ],
      },
      {
        question: "Par quel service identifie-t-on les exploitants de réseaux à consulter avant des travaux ?",
        options: [
          "Le cadastre",
          "Le guichet unique des réseaux, géré par l'INERIS",
          "La préfecture",
          "Le centre de gestion",
        ],
        answerIndex: 1,
        explanation:
          "Le téléservice « reseaux-et-canalisations » recense les exploitants concernés par l'emprise des travaux et permet d'envoyer les DT et DICT.",
        optionNotes: [
          "Le cadastre décrit les parcelles, pas les réseaux enterrés.",
          null,
          "La préfecture ne centralise pas ces déclarations.",
          "Le centre de gestion s'occupe des carrières des agents territoriaux.",
        ],
      },
      {
        question: "Vous découvrez un grillage avertisseur rouge dans une fouille. Quel réseau signale-t-il ?",
        options: ["Le gaz", "L'électricité", "L'eau potable", "Les télécommunications"],
        answerIndex: 1,
        explanation:
          "Le rouge signale l'électricité (basse ou haute tension, éclairage public). On arrête de creuser mécaniquement et on dégage à la main.",
        optionNotes: [
          "Le gaz est signalé en jaune.",
          null,
          "L'eau potable est signalée en bleu.",
          "Les télécommunications sont signalées en vert.",
        ],
      },
      {
        question: "Quelle couleur de grillage avertisseur signale une canalisation de gaz ?",
        options: ["Bleu", "Jaune", "Marron", "Vert"],
        answerIndex: 1,
        explanation:
          "Le jaune signale le gaz et les hydrocarbures. Un arrachement de conduite de gaz peut provoquer une explosion : on n'utilise jamais d'engin à proximité immédiate.",
        optionNotes: [
          "Le bleu correspond à l'eau potable.",
          null,
          "Le marron correspond à l'assainissement.",
          "Le vert correspond aux télécommunications.",
        ],
      },
      {
        question: "Quelle couleur signale une conduite d'eau potable ?",
        options: ["Rouge", "Bleu", "Jaune", "Marron"],
        answerIndex: 1,
        explanation:
          "Le bleu est réservé à l'eau potable, aussi bien pour le grillage avertisseur que pour le marquage au sol.",
        optionNotes: [
          "Le rouge correspond à l'électricité.",
          null,
          "Le jaune correspond au gaz.",
          "Le marron correspond à l'assainissement.",
        ],
      },
      {
        question: "Quelle couleur de grillage avertisseur signale un réseau d'assainissement ?",
        options: ["Vert", "Marron", "Bleu", "Rouge"],
        answerIndex: 1,
        explanation:
          "Le marron signale l'assainissement (eaux usées et eaux pluviales).",
        optionNotes: [
          "Le vert correspond aux télécommunications.",
          null,
          "Le bleu correspond à l'eau potable.",
          "Le rouge correspond à l'électricité.",
        ],
      },
      {
        question: "De quoi se compose un béton ?",
        options: [
          "Ciment, sable et eau uniquement",
          "Ciment, granulats (sable et gravillons), eau et éventuellement adjuvants",
          "Chaux et plâtre",
          "Bitume et granulats",
        ],
        answerIndex: 1,
        explanation:
          "Ce sont les gravillons qui distinguent le béton du mortier. Les adjuvants modifient ses propriétés (prise accélérée, plasticité, résistance au gel).",
        optionNotes: [
          "Sans gravillons, on obtient un mortier.",
          null,
          "Chaux et plâtre servent aux enduits, pas au béton.",
          "Bitume et granulats forment un enrobé bitumineux.",
        ],
      },
      {
        question: "Quelle est la différence entre un mortier et un béton ?",
        options: [
          "Le mortier ne contient pas de gravillons",
          "Le mortier ne contient pas de ciment",
          "Le mortier contient toujours de l'acier",
          "Il n'y a aucune différence",
        ],
        answerIndex: 0,
        explanation:
          "Le mortier (liant, sable et eau) sert à assembler et à jointoyer ; le béton, plus résistant grâce aux gravillons, sert aux ouvrages structurels.",
        optionNotes: [
          null,
          "Le mortier contient bien un liant, souvent du ciment.",
          "Avec des armatures, on parle de béton armé.",
          "La présence de gravillons fait toute la différence.",
        ],
      },
      {
        question: "À combien de jours mesure-t-on la résistance de référence d'un béton ?",
        options: ["1 jour", "7 jours", "28 jours", "1 an"],
        answerIndex: 2,
        explanation:
          "La classe de résistance (C25/30, par exemple) correspond à la résistance en compression à 28 jours. Le béton continue de durcir ensuite, mais plus lentement.",
        optionNotes: [
          "À un jour, le béton a à peine commencé à durcir.",
          "À 7 jours, on obtient une indication intermédiaire, pas la valeur de référence.",
          null,
          "La norme ne retient pas cette échéance.",
        ],
      },
      {
        question: "Dans une chaussée, quelle couche est en contact direct avec les véhicules ?",
        options: ["La couche de forme", "La couche de fondation", "La couche de base", "La couche de roulement"],
        answerIndex: 3,
        explanation:
          "De bas en haut : plateforme (sol support), couche de forme, couche de fondation, couche de base, puis couche de roulement, qui assure l'adhérence et l'étanchéité.",
        optionNotes: [
          "La couche de forme est juste au-dessus du sol support.",
          "La couche de fondation fait partie du corps de chaussée, sous la couche de base.",
          "La couche de base est située sous la couche de roulement.",
          null,
        ],
      },
      {
        question: "Comment met-on en œuvre un enrobé bitumineux classique ?",
        options: [
          "À froid, à la pelle, sans compactage",
          "À chaud (autour de 150 °C), répandu au finisseur puis compacté",
          "Mélangé à de l'eau dans une bétonnière",
          "Coulé comme un béton dans un coffrage",
        ],
        answerIndex: 1,
        explanation:
          "L'enrobé (granulats et bitume) est fabriqué en centrale, transporté chaud, répandu au finisseur puis compacté avant refroidissement. Les enrobés à froid servent surtout aux réparations ponctuelles.",
        optionNotes: [
          "L'enrobé à froid existe pour les rebouchages, mais il n'est pas la technique courante.",
          null,
          "On ne fabrique pas d'enrobé en bétonnière.",
          "L'enrobé n'est pas coffré comme du béton.",
        ],
      },
      {
        question: "Avant de poser un enrobé sur une ancienne chaussée, à quoi sert la couche d'accrochage ?",
        options: [
          "À décorer la chaussée",
          "À coller la nouvelle couche au support (émulsion de bitume)",
          "À remplacer le compactage",
          "À marquer les places de stationnement",
        ],
        answerIndex: 1,
        explanation:
          "L'émulsion de bitume répandue avant l'enrobé assure le collage entre les couches. Sans elle, la couche neuve peut glisser ou se décoller.",
        optionNotes: [
          "Elle n'a aucun rôle esthétique.",
          null,
          "Le compactage reste indispensable.",
          "Le marquage se fait avec de la peinture routière, après les travaux.",
        ],
      },
      {
        question: "Que mesure l'essai à la plaque sur une plateforme de terrassement ?",
        options: ["La couleur du sol", "La portance du sol", "La teneur en amiante", "La température"],
        answerIndex: 1,
        explanation:
          "L'essai à la plaque mesure la déformation du sol sous charge (module EV2) pour vérifier qu'il peut supporter la chaussée prévue.",
        optionNotes: [
          "La couleur n'indique pas la résistance.",
          null,
          "L'amiante se recherche par prélèvement et analyse en laboratoire.",
          "Ce n'est pas un essai thermique.",
        ],
      },
      {
        question: "Quelle largeur minimale doit avoir un cheminement piéton accessible, libre de tout obstacle ?",
        options: ["0,90 m", "1,20 m dans tous les cas", "1,40 m (réductible à 1,20 m en l'absence de mur ou d'obstacle de part et d'autre)", "2 m"],
        answerIndex: 2,
        explanation:
          "Les règles d'accessibilité de la voirie imposent 1,40 m libre de mobilier, ce qui permet le passage d'un fauteuil roulant et le croisement avec un piéton.",
        optionNotes: [
          "Trop étroit pour le passage d'un fauteuil roulant.",
          "1,20 m n'est admis qu'en l'absence de mur ou d'obstacle de part et d'autre.",
          null,
          "Souhaitable, mais ce n'est pas le minimum réglementaire.",
        ],
      },
      {
        question: "Quelle pente longitudinale maximale est admise, dans le cas général, sur un cheminement accessible ?",
        options: ["2 %", "5 %", "10 %", "15 %"],
        answerIndex: 1,
        explanation:
          "La pente doit être inférieure ou égale à 5 %. Au-delà, des tolérances limitées existent (8 % sur 2 m au plus, 12 % sur 0,50 m au plus) quand on ne peut pas faire autrement.",
        optionNotes: [
          "2 % correspond au dévers maximal (pente transversale).",
          null,
          "Trop raide pour une personne en fauteuil, sauf tolérance très courte.",
          "Bien au-delà des tolérances admises.",
        ],
      },
      {
        question: "Qu'est-ce qu'une bande d'éveil de vigilance (BEV) ?",
        options: [
          "Un marquage peint pour les cyclistes",
          "Un revêtement podotactile qui signale aux personnes malvoyantes l'approche d'un passage piéton",
          "Un ralentisseur pour voitures",
          "Une bande de stationnement",
        ],
        answerIndex: 1,
        explanation:
          "Composée de plots en relief, posée en retrait de la bordure au droit des traversées, la BEV est détectable au pied et à la canne.",
        optionNotes: [
          "Les marquages cyclables sont des signalisations peintes, sans relief.",
          null,
          "Un ralentisseur vise les véhicules, pas les piétons.",
          "Aucun rapport avec le stationnement.",
        ],
      },
      {
        question: "Au droit d'un passage piéton, quelle hauteur maximale de ressaut est admise entre le trottoir et la chaussée ?",
        options: ["2 cm (4 cm avec un chanfrein à 1 pour 3)", "5 cm", "10 cm", "15 cm"],
        answerIndex: 0,
        explanation:
          "Un abaissé de trottoir avec un ressaut de 2 cm au plus permet le passage d'un fauteuil roulant tout en restant détectable par une personne aveugle.",
        optionNotes: [
          null,
          "Trop haut : un fauteuil ne pourrait pas franchir le ressaut.",
          "C'est presque la hauteur d'une bordure non abaissée.",
          "C'est la hauteur d'une bordure classique, infranchissable en fauteuil.",
        ],
      },
      {
        question: "Quelle est la différence entre un réseau d'assainissement unitaire et un réseau séparatif ?",
        options: [
          "Il n'y en a pas",
          "L'unitaire collecte eaux usées et eaux pluviales dans la même canalisation ; le séparatif les collecte dans deux réseaux distincts",
          "L'unitaire ne collecte que l'eau potable",
          "Le séparatif ne concerne que les industries",
        ],
        answerIndex: 1,
        explanation:
          "Le séparatif évite de surcharger la station d'épuration par temps de pluie : c'est la solution privilégiée pour les réseaux neufs.",
        optionNotes: [
          "Les deux systèmes fonctionnent très différemment.",
          null,
          "L'eau potable relève d'un réseau de distribution, pas de l'assainissement.",
          "Le séparatif équipe aussi les quartiers d'habitation.",
        ],
      },
      {
        question: "Comment appelle-t-on l'ouvrage qui recueille les eaux de ruissellement de la chaussée vers le réseau ?",
        options: ["Un regard de visite", "Un avaloir (bouche d'égout)", "Un poteau incendie", "Un séparateur à hydrocarbures"],
        answerIndex: 1,
        explanation:
          "L'avaloir, placé au fil d'eau du caniveau, capte les eaux pluviales. Son curage régulier évite les inondations de chaussée.",
        optionNotes: [
          "Le regard sert à accéder au réseau pour l'inspecter et l'entretenir.",
          null,
          "Le poteau incendie appartient au réseau d'eau potable.",
          "Le séparateur traite les eaux polluées, il ne les collecte pas sur la chaussée.",
        ],
      },
      {
        question: "Dans la désignation des bordures de voirie, à quoi correspondent les bordures de type A ?",
        options: [
          "À des bordures franchissables, au profil arrondi",
          "À des bordures de trottoir hautes infranchissables",
          "À des bordures de jardin",
          "À des caniveaux",
        ],
        answerIndex: 0,
        explanation:
          "Les bordures A sont franchissables (entrées charretières, îlots). Les bordures T sont des bordures de trottoir et les CS des caniveaux.",
        optionNotes: [
          null,
          "Ce sont les bordures de type T.",
          "Les bordures de jardin sont de type P.",
          "Les caniveaux sont désignés CS.",
        ],
      },
      {
        question: "Sur un plan au 1/200, à combien de mètres sur le terrain correspond 1 cm ?",
        options: ["0,20 m", "2 m", "20 m", "200 m"],
        answerIndex: 1,
        explanation:
          "1 cm sur le plan représente 200 cm sur le terrain, soit 2 m.",
        optionNotes: [
          "Erreur de conversion : 200 cm font 2 m, pas 0,20 m.",
          null,
          "Ce serait une échelle au 1/2 000.",
          "Ce serait une échelle au 1/20 000.",
        ],
      },
      {
        question: "Sur un plan au 1/500, une conduite mesure 4 cm. Quelle est sa longueur réelle ?",
        options: ["2 m", "5 m", "20 m", "200 m"],
        answerIndex: 2,
        explanation:
          "4 cm × 500 = 2 000 cm, soit 20 m.",
        optionNotes: [
          "Erreur de calcul ou de conversion d'unité.",
          "C'est la valeur de 1 cm au 1/500, multipliée à tort par 1 au lieu de 4.",
          null,
          "Erreur de conversion : 2 000 cm font 20 m.",
        ],
      },
      {
        question: "Un trottoir à refaire mesure 120 m de long sur 1,50 m de large. Quelle surface d'enrobé faut-il prévoir ?",
        options: ["121,5 m²", "160 m²", "180 m²", "243 m²"],
        answerIndex: 2,
        explanation:
          "Surface = longueur × largeur = 120 × 1,50 = 180 m². On ajoute ensuite une marge pour les raccords et les pertes.",
        optionNotes: [
          "C'est la somme 120 + 1,50, pas le produit.",
          "Erreur de calcul.",
          null,
          "C'est le double du périmètre, pas une surface.",
        ],
      },
      {
        question: "Une tranchée mesure 50 m de long, 0,60 m de large et 1,20 m de profondeur. Quel est le volume de déblai en place ?",
        options: ["30 m³", "36 m³", "60 m³", "72 m³"],
        answerIndex: 1,
        explanation:
          "Volume = 50 × 0,60 × 1,20 = 36 m³ en place. Une fois extraite, la terre occupera un volume plus important à cause du foisonnement.",
        optionNotes: [
          "C'est 50 × 0,60, sans la profondeur.",
          null,
          "C'est 50 × 1,20, sans la largeur.",
          "C'est le double du bon résultat.",
        ],
      },
      {
        question: "Qu'appelle-t-on le foisonnement des terres ?",
        options: [
          "L'augmentation de volume d'un sol une fois extrait",
          "La pousse de végétation sur un talus",
          "Le compactage d'un remblai",
          "L'érosion d'un fossé",
        ],
        answerIndex: 0,
        explanation:
          "Une terre extraite contient davantage de vides : 10 m³ en place peuvent occuper 12 à 13 m³ dans le camion. On en tient compte pour commander les bennes.",
        optionNotes: [
          null,
          "Aucun rapport avec la végétation.",
          "C'est l'inverse : le compactage réduit le volume.",
          "L'érosion est un enlèvement de matériaux par l'eau ou le vent.",
        ],
      },
      {
        question: "À quoi correspondent les altitudes NGF indiquées sur un plan topographique ?",
        options: [
          "Au nivellement général de la France",
          "À la norme des granulats ferroviaires",
          "Au niveau de garantie fonctionnelle",
          "À la numérotation des regards",
        ],
        answerIndex: 0,
        explanation:
          "Le NGF est le système de référence des altitudes en France, rattaché au niveau moyen de la mer à Marseille.",
        optionNotes: [
          null,
          "Ce sigle n'a pas ce sens.",
          "Ce sigle n'a pas ce sens.",
          "Les regards ont leur propre numérotation, sans rapport avec le NGF.",
        ],
      },
      {
        question: "Une pente de 2 % est prévue sur un trottoir de 5 m de large. Quelle dénivellation cela représente-t-il ?",
        options: ["1 cm", "2 cm", "10 cm", "25 cm"],
        answerIndex: 2,
        explanation:
          "2 % signifie 2 cm par mètre : 5 m × 2 cm = 10 cm de dénivellation.",
        optionNotes: [
          "Erreur de calcul.",
          "C'est la dénivellation sur 1 m seulement.",
          null,
          "Cela correspondrait à une pente de 5 %.",
        ],
      },
      {
        question: "Quel panneau temporaire signale des travaux sur la route ?",
        options: ["AK5", "B1", "C12", "AB4"],
        answerIndex: 0,
        explanation:
          "Le panneau AK5, triangulaire à fond jaune avec un ouvrier stylisé, annonce des travaux. Le fond jaune caractérise la signalisation temporaire.",
        optionNotes: [
          null,
          "B1 est un panneau d'interdiction (sens interdit), permanent.",
          "C12 est un panneau d'indication permanent, pas un panneau de travaux.",
          "AB4 est le panneau « stop ».",
        ],
      },
      {
        question: "Comment désigne-t-on le cône de chantier, bicolore rouge et blanc ?",
        options: ["K5a", "K2", "AK14", "KC1"],
        answerIndex: 0,
        explanation:
          "Le cône K5a sert au balisage et à la délimitation temporaire de la zone de travaux.",
        optionNotes: [
          null,
          "K2 désigne un autre équipement de signalisation temporaire, pas le cône.",
          "AK14 est un panneau d'autres dangers en signalisation temporaire.",
          "KC1 désigne un panneau temporaire, pas un équipement de balisage au sol.",
        ],
      },
      {
        question: "Une entreprise veut installer un échafaudage ancré dans le trottoir. De quelle autorisation a-t-elle besoin ?",
        options: [
          "Un permis de stationnement",
          "Une permission de voirie",
          "Un permis d'aménager",
          "Aucune autorisation",
        ],
        answerIndex: 1,
        explanation:
          "La permission de voirie concerne une occupation avec emprise qui modifie le sol (ancrage, fouille). Le permis de stationnement concerne une occupation sans emprise, simplement posée.",
        optionNotes: [
          "Le permis de stationnement suffit pour un échafaudage simplement posé, sans ancrage.",
          null,
          "Le permis d'aménager relève de l'urbanisme (lotissements, par exemple).",
          "Toute occupation privative du domaine public doit être autorisée.",
        ],
      },
      {
        question: "Qui prend l'arrêté réglementant la circulation pendant des travaux sur une voie communale en agglomération ?",
        options: ["Le préfet", "Le maire", "L'entreprise de travaux", "Le chef d'équipe"],
        answerIndex: 1,
        explanation:
          "Le maire détient le pouvoir de police de la circulation en agglomération : il prend un arrêté temporaire (alternat, déviation, interdiction de stationner).",
        optionNotes: [
          "Le préfet intervient sur certaines routes classées, pas sur une voie communale en agglomération.",
          null,
          "L'entreprise demande l'arrêté, mais ne peut pas le prendre.",
          "Le chef d'équipe applique l'arrêté sur le terrain.",
        ],
      },
      {
        question: "Après la réception d'un ouvrage, combien de temps dure la garantie de parfait achèvement ?",
        options: ["1 an", "2 ans", "5 ans", "10 ans"],
        answerIndex: 0,
        explanation:
          "Pendant 1 an, l'entreprise doit réparer tous les désordres signalés. Viennent ensuite la garantie de bon fonctionnement (2 ans, équipements) et la garantie décennale (10 ans, solidité de l'ouvrage).",
        optionNotes: [
          null,
          "2 ans correspond à la garantie de bon fonctionnement des équipements.",
          "Aucune garantie légale de 5 ans dans ce cadre.",
          "10 ans correspond à la garantie décennale.",
        ],
      },
      {
        question: "Sur une opération de travaux, qui est le maître d'ouvrage ?",
        options: [
          "L'entreprise qui réalise les travaux",
          "La personne pour qui l'ouvrage est construit, souvent la collectivité",
          "Le chef de chantier",
          "Le fournisseur de matériaux",
        ],
        answerIndex: 1,
        explanation:
          "Le maître d'ouvrage définit le besoin, finance et réceptionne l'ouvrage. Le maître d'œuvre conçoit le projet et dirige l'exécution des travaux pour son compte.",
        optionNotes: [
          "L'entreprise est le titulaire du marché de travaux.",
          null,
          "Le chef de chantier encadre l'exécution pour l'entreprise.",
          "Le fournisseur n'a aucun rôle de pilotage.",
        ],
      },
    ],
  },
];
