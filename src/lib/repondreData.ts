export interface RepondreTechnique {
  nom: string;
  principe: string;
  quand: string;
  exemple: string;
}

export interface RepondreSituation {
  situation: string;
  reflexe: string;
  formulation: string;
}

export interface RepondreFiche {
  id: string;
  contexte: "ecrit" | "oral";
  title: string;
  accroche: string;
  resume: string;
  /** Principe directeur de la fiche. */
  principes: string[];
  techniques: RepondreTechnique[];
  situations: RepondreSituation[];
  phrases: { usage: string; exemple: string }[];
  interdits: string[];
  exercices: string[];
}

export const repondreFiches: RepondreFiche[] = [
  {
    id: "ecrit",
    contexte: "ecrit",
    title: "À l'écrit : traiter une question dont vous ignorez la réponse",
    accroche: "Copie blanche = 0. Copie raisonnée = des points.",
    resume:
      "Face à une question que vous ne maîtrisez pas, le correcteur note ce que vous montrez : la compréhension du problème, la méthode, le raisonnement et la langue. Tout cela s'obtient sans connaître la réponse exacte.",
    principes: [
      "Une question laissée vide rapporte zéro point ; une réponse imparfaite mais structurée en rapporte presque toujours.",
      "Le barème récompense la démarche autant que le résultat : posez le problème, annoncez votre méthode, avancez pas à pas.",
      "Ne jamais inventer une référence précise (numéro d'article, date, chiffre) : une erreur affirmée coûte plus cher qu'une formulation prudente.",
      "Repartez toujours des principes généraux que vous connaissez : légalité, continuité du service, égalité des usagers, hiérarchie des normes, proportionnalité.",
    ],
    techniques: [
      {
        nom: "Reformuler la question",
        principe:
          "Réécrire la question avec vos mots fait apparaître le thème réel et déclenche souvent le souvenir de la notion.",
        quand: "Dès la lecture, avant toute rédaction.",
        exemple:
          "« La question porte en réalité sur la répartition des compétences entre la commune et l'intercommunalité en matière de… »",
      },
      {
        nom: "Remonter aux principes",
        principe:
          "À défaut de la règle précise, énoncez le principe général qui la gouverne et déduisez-en une réponse vraisemblable.",
        quand: "Question juridique ou de gestion dont le texte exact vous échappe.",
        exemple:
          "« En application du principe de légalité, une décision individuelle défavorable doit être motivée et précédée d'une procédure contradictoire ; il en résulte que… »",
      },
      {
        nom: "Raisonner par cas",
        principe:
          "Distinguer deux ou trois hypothèses et traiter chacune : vous couvrez la bonne réponse et montrez votre rigueur.",
        quand: "Quand plusieurs régimes ou situations sont possibles.",
        exemple:
          "« Deux situations doivent être distinguées : si l'agent est titulaire… ; s'il est contractuel… »",
      },
      {
        nom: "Partir de l'exemple concret",
        principe:
          "Décrire un cas pratique que vous connaissez et en tirer la règle : la théorie se reconstruit à partir du terrain.",
        quand: "Question de culture professionnelle ou de gestion.",
        exemple:
          "« Dans une commune, la réservation d'une salle municipale suppose une délibération fixant les tarifs : cela illustre le principe selon lequel… »",
      },
      {
        nom: "Encadrer une donnée chiffrée",
        principe:
          "Donner un ordre de grandeur justifié plutôt qu'un chiffre faux, en assumant l'approximation.",
        quand: "Épreuve technique, budgétaire ou mathématique.",
        exemple:
          "« En retenant un coût unitaire de l'ordre de 300 € le m², l'opération représenterait une dépense approximative de 45 000 € HT. »",
      },
      {
        nom: "Traiter ce que vous savez d'abord",
        principe:
          "Répondez complètement aux questions maîtrisées, puis revenez : le temps gagné sert à raisonner sur le reste, et les idées reviennent en écrivant.",
        quand: "Toute épreuve à questions multiples.",
        exemple:
          "Numérotez visiblement les réponses pour que le correcteur retrouve celles traitées dans le désordre.",
      },
    ],
    situations: [
      {
        situation: "Vous ne connaissez pas le texte demandé",
        reflexe:
          "Citez le niveau de norme et le domaine plutôt que la référence exacte, puis raisonnez sur le contenu.",
        formulation:
          "« Le code général des collectivités territoriales encadre cette compétence ; sans en citer ici la disposition précise, il en ressort que… »",
      },
      {
        situation: "Le mot du sujet vous est inconnu",
        reflexe:
          "Décomposez-le, cherchez-le dans le dossier : il y figure presque toujours, défini ou éclairé par le contexte.",
        formulation:
          "« Le document 4 permet d'entendre cette notion comme… »",
      },
      {
        situation: "Vous n'arrivez pas au résultat d'un calcul",
        reflexe:
          "Écrivez la méthode, les formules et les étapes, puis posez le calcul même inachevé : les points de démarche sont acquis.",
        formulation:
          "« Le taux d'évolution s'obtient par (valeur finale − valeur initiale) / valeur initiale ; ici… »",
      },
      {
        situation: "Il vous reste dix minutes et deux questions",
        reflexe:
          "Répondez en trois phrases structurées à chacune plutôt que longuement à une seule.",
        formulation:
          "Une phrase de cadrage, une phrase de règle, une phrase de conséquence pratique.",
      },
    ],
    phrases: [
      {
        usage: "Poser un cadre quand la règle précise manque",
        exemple:
          "Sous réserve des dispositions particulières applicables, le principe demeure que…",
      },
      {
        usage: "Assumer une approximation",
        exemple:
          "À titre indicatif et sous réserve de vérification, l'ordre de grandeur peut être estimé à…",
      },
      {
        usage: "Distinguer des hypothèses",
        exemple: "Deux cas de figure doivent être distingués : d'une part…, d'autre part…",
      },
      {
        usage: "Conclure prudemment",
        exemple:
          "Une consultation du service juridique permettrait de sécuriser cette analyse avant décision.",
      },
    ],
    interdits: [
      "Laisser une question sans la moindre ligne.",
      "Inventer un numéro d'article, une date ou une jurisprudence.",
      "Écrire « je ne sais pas » ou s'excuser auprès du correcteur.",
      "Délayer pour remplir : le hors-sujet est repéré immédiatement.",
      "Recopier un document du dossier en espérant que la réponse s'y trouve.",
    ],
    exercices: [
      "Prenez trois questions d'annales hors de votre spécialité et rédigez pour chacune six lignes en dix minutes.",
      "Entraînez-vous à reformuler dix sujets d'affilée, sans y répondre : seulement la question réelle posée.",
      "Constituez une fiche de dix principes généraux (légalité, continuité, égalité, mutabilité, proportionnalité…) et forcez-vous à rattacher chaque question à l'un d'eux.",
    ],
  },
  {
    id: "oral",
    contexte: "oral",
    title: "À l'oral : réagir devant le jury sans connaître la réponse",
    accroche: "Le jury teste votre sang-froid autant que vos connaissances.",
    resume:
      "Un jury pose volontairement des questions au-delà de votre niveau pour observer votre honnêteté, votre raisonnement à voix haute et votre tenue. Une ignorance bien gérée peut rapporter davantage qu'une réponse bricolée.",
    principes: [
      "Dire honnêtement que l'on ne sait pas, puis proposer une démarche, est valorisé ; bluffer est sanctionné dès la première relance.",
      "Ne restez jamais silencieux plus de trois secondes : respirez, reformulez la question à voix haute, gagnez du temps proprement.",
      "Une réponse courte et nette vaut mieux qu'un développement flou : le jury relance s'il veut plus.",
      "Votre posture parle : regard vers l'ensemble du jury, voix posée, mains calmes, pas d'excuses répétées.",
    ],
    techniques: [
      {
        nom: "Reformuler pour gagner cinq secondes",
        principe:
          "Répéter la question avec vos mots vous donne le temps de réfléchir et vérifie que vous avez bien compris.",
        quand: "Immédiatement après toute question déstabilisante.",
        exemple:
          "« Si je comprends bien votre question, vous souhaitez savoir comment je gérerais un désaccord entre deux agents de mon équipe. »",
      },
      {
        nom: "L'honnêteté active",
        principe:
          "Reconnaître la limite, puis enchaîner sur ce que vous savez ou sur la manière dont vous trouveriez la réponse.",
        quand: "Question technique précise hors de votre champ.",
        exemple:
          "« Je ne connais pas le détail de ce dispositif. En revanche, je sais qu'il relève du champ social de la collectivité, et je me rapprocherais du CCAS pour en obtenir les conditions exactes. »",
      },
      {
        nom: "Raisonner à voix haute",
        principe:
          "Rendez votre raisonnement audible : le jury note la logique, pas seulement le résultat.",
        quand: "Mise en situation professionnelle, cas pratique.",
        exemple:
          "« Ma première préoccupation serait la sécurité des usagers, ensuite la continuité du service, enfin l'information de ma hiérarchie. »",
      },
      {
        nom: "Ramener à votre expérience",
        principe:
          "Rattachez la question à une situation que vous avez vécue : vous parlez alors d'un terrain solide.",
        quand: "Question générale ou de motivation.",
        exemple:
          "« Je n'ai pas rencontré ce cas précis, mais j'ai connu une situation proche lorsque… »",
      },
      {
        nom: "Le pas de côté maîtrisé",
        principe:
          "Traiter un aspect voisin que vous maîtrisez, en annonçant clairement le déplacement — jamais en le dissimulant.",
        quand: "Quand une partie seulement de la question vous échappe.",
        exemple:
          "« Sur le volet juridique je serais imprudent de m'avancer ; sur le volet organisationnel, en revanche… »",
      },
      {
        nom: "Accepter la correction",
        principe:
          "Si le jury vous reprend, remerciez et intégrez l'information sans vous justifier. La capacité à apprendre est notée.",
        quand: "Après une erreur relevée par le jury.",
        exemple:
          "« Je vous remercie de cette précision, je retiens que la compétence relève de l'intercommunalité. »",
      },
    ],
    situations: [
      {
        situation: "Question de pure connaissance que vous n'avez pas",
        reflexe:
          "Annoncez la limite en une phrase, puis dites où et comment vous trouveriez l'information dans votre travail.",
        formulation:
          "« Je ne dispose pas de cette information. Dans mon service, je consulterais la note de la DGS et, au besoin, le centre de gestion. »",
      },
      {
        situation: "Mise en situation managériale inédite",
        reflexe:
          "Déroulez une méthode : écouter, qualifier les faits, rappeler la règle, décider, rendre compte.",
        formulation:
          "« Je commencerais par recevoir séparément les deux agents pour objectiver les faits, avant d'en informer ma hiérarchie. »",
      },
      {
        situation: "Question sur l'actualité que vous n'avez pas suivie",
        reflexe:
          "Ne feignez pas de connaître : reliez au thème général et proposez votre grille de lecture.",
        formulation:
          "« Je n'ai pas suivi cette réforme dans le détail ; sur le principe, elle s'inscrit dans le mouvement de renforcement des compétences intercommunales, que je perçois ainsi… »",
      },
      {
        situation: "Vous avez dit une bêtise et vous vous en apercevez",
        reflexe:
          "Corrigez-vous immédiatement et calmement, sans dramatiser : l'autocorrection est un signe de maîtrise.",
        formulation:
          "« Je me reprends : c'est bien le conseil municipal, et non le maire, qui vote le budget. »",
      },
      {
        situation: "Le jury reste silencieux après votre réponse",
        reflexe:
          "Le silence est une technique d'entretien, pas un jugement. Complétez d'une phrase ou attendez sereinement.",
        formulation: "« Souhaitez-vous que je développe un point en particulier ? »",
      },
    ],
    phrases: [
      {
        usage: "Reconnaître sans se dévaloriser",
        exemple:
          "Ce point ne fait pas partie de ce que je maîtrise aujourd'hui ; voici comment je procéderais pour y répondre.",
      },
      {
        usage: "Demander une précision",
        exemple:
          "Souhaitez-vous que j'aborde la question sous l'angle juridique ou sous l'angle de l'organisation du service ?",
      },
      {
        usage: "Structurer une réponse improvisée",
        exemple: "Je verrais trois enjeux : d'abord…, ensuite…, enfin…",
      },
      {
        usage: "Reprendre la main après un blanc",
        exemple:
          "Permettez-moi de reprendre votre question depuis le début pour y répondre clairement.",
      },
    ],
    interdits: [
      "Bluffer : le jury relance systématiquement et l'édifice s'écroule.",
      "S'excuser en boucle ou se dévaloriser (« je suis nul en droit »).",
      "Rester muet en fixant la table.",
      "Répondre agressivement à une question volontairement déstabilisante.",
      "Monopoliser la parole pour éviter les questions suivantes.",
    ],
    exercices: [
      "Faites-vous poser dix questions au hasard par un proche et répondez en trente secondes chacune, sans préparation.",
      "Enregistrez-vous : comptez les « euh », les silences et les excuses, puis refaites l'exercice.",
      "Préparez trois phrases de secours et répétez-les jusqu'à ce qu'elles viennent naturellement.",
      "Entraînez-vous à la méthode « écouter, qualifier, décider, rendre compte » sur cinq mises en situation différentes.",
    ],
  },
];

export function getRepondreFiche(id: string | undefined): RepondreFiche | undefined {
  return repondreFiches.find((f) => f.id === id);
}
