import type { QuizTheme } from "./quizData";

export const francaisThemes: QuizTheme[] = [
  {
    id: "orthographe",
    title: "Orthographe",
    description:
      "Accords, homophones, pluriels et pièges classiques : l'orthographe est notée sur toutes les épreuves écrites.",
    level: "Découverte",
    questions: [
      {
        question:
          "Quelle phrase est correctement orthographiée ?",
        options: [
          "Les dossiers que j'ai reçus sont complets.",
          "Les dossiers que j'ai reçu sont complets.",
          "Les dossiers que j'ai reçues sont complets.",
          "Les dossiers que j'ai reçu(s) sont complets.",
        ],
        answerIndex: 0,
        explanation:
          "Avec l'auxiliaire « avoir », le participe passé s'accorde avec le complément d'objet direct lorsque celui-ci est placé avant le verbe. Ici, « que » remplace « les dossiers » (masculin pluriel), placé avant : on écrit « reçus ».",
        optionNotes: [
          null,
          "C'est l'oubli d'accord le plus sanctionné : le complément d'objet direct « que » (= les dossiers) précède le verbe, l'accord est donc obligatoire.",
          "L'accord est fait, mais au féminin : « dossier » est masculin, le « e » est de trop.",
          "La forme entre parenthèses n'existe pas en rédaction administrative : il faut trancher, et ici c'est « reçus ».",
        ],
      },
      {
        question:
          "« La collectivité met tout en œuvre pour que les agents ___ formés. » Quelle forme convient ?",
        options: ["soit", "soient", "sois", "soi"],
        answerIndex: 1,
        explanation:
          "« Pour que » impose le subjonctif, et le sujet « les agents » est au pluriel : « qu'ils soient formés ».",
        optionNotes: [
          "C'est le subjonctif singulier : il conviendrait à « pour que l'agent soit formé », pas à un sujet pluriel.",
          null,
          "« Sois » est la 2ᵉ personne du singulier (« que tu sois »), impossible avec « les agents ».",
          "« Soi » est un pronom (« chacun pour soi ») : ce n'est pas une forme du verbe être conjugué.",
        ],
      },
      {
        question: "Comment écrit-on correctement ce constat ?",
        options: [
          "Quelque soit la solution retenue, elle sera présentée au conseil.",
          "Quelle que soit la solution retenue, elle sera présentée au conseil.",
          "Quel que soit la solution retenue, elle sera présentée au conseil.",
          "Quelques soient la solution retenue, elle sera présentée au conseil.",
        ],
        answerIndex: 1,
        explanation:
          "Devant le verbe être, on écrit « quel que » en deux mots, et « quel » s'accorde avec le sujet qui suit : « la solution » étant féminin singulier, on écrit « quelle que soit ».",
        optionNotes: [
          "« Quelque » en un seul mot est un déterminant (« quelque temps ») : il ne s'emploie pas devant le verbe être.",
          null,
          "La règle « quel que » en deux mots est respectée, mais l'accord manque : le sujet « la solution » est féminin, donc « quelle que ».",
          "Double erreur : « quelques » au pluriel et « soient » au pluriel, alors que le sujet est « la solution », singulier.",
        ],
      },
      {
        question:
          "« Le maire a signé l'arrêté ___ la circulation est interdite. » Quel mot convient ?",
        options: ["par lequel", "par laquelle", "par lesquels", "par qui"],
        answerIndex: 0,
        explanation:
          "Le pronom relatif composé s'accorde avec son antécédent : « l'arrêté », masculin singulier, donne « par lequel ».",
        optionNotes: [
          null,
          "Forme féminine : elle conviendrait à « la délibération par laquelle… ».",
          "Forme masculine pluriel : elle conviendrait à « les arrêtés par lesquels… ».",
          "« Par qui » s'emploie pour des personnes (« l'agent par qui le dossier a été transmis »), non pour un acte administratif.",
        ],
      },
      {
        question: "Quelle orthographe est correcte ?",
        options: [
          "Les documents ci-joints, veuillez les transmettre aux services concernés.",
          "Les documents ci-joint, veuillez les transmettre aux services concernés.",
          "Les documents ci-jointes, veuillez les transmettre aux services concernés.",
          "Les documents ci joints, veuillez les transmettre aux services concernés.",
        ],
        answerIndex: 0,
        explanation:
          "Placé après le nom, « ci-joint » est adjectif et s'accorde : « les documents ci-joints ». Il reste invariable seulement en tête de phrase ou devant un nom sans déterminant (« ci-joint copie de l'arrêté »).",
        optionNotes: [
          null,
          "L'invariabilité ne vaut que lorsque « ci-joint » précède le nom ; placé après « les documents », il doit s'accorder.",
          "Accord au féminin alors que « documents » est masculin.",
          "« Ci-joint » s'écrit toujours avec un trait d'union.",
        ],
      },
      {
        question:
          "« Les agents se sont ___ leurs objectifs annuels. » Quelle forme est correcte ?",
        options: ["fixé", "fixés", "fixées", "fixé(e)s"],
        answerIndex: 0,
        explanation:
          "Avec un verbe pronominal, le participe s'accorde avec le complément d'objet direct seulement s'il est placé avant. Ici le COD « leurs objectifs » est placé après le verbe : pas d'accord, on écrit « se sont fixé ».",
        optionNotes: [
          null,
          "L'accord avec le sujet est l'erreur réflexe : « se » est ici complément d'objet second (ils ont fixé des objectifs à eux-mêmes), l'accord ne se fait pas.",
          "Accord au féminin pluriel, doublement faux : ni le genre du sujet ni la règle de l'accord ne le justifient.",
          "Cette écriture hésitante n'est pas acceptée à l'écrit : la forme correcte est « fixé ».",
        ],
      },
    ],
  },
  {
    id: "grammaire",
    title: "Grammaire et conjugaison",
    description:
      "Concordance des temps, syntaxe, pronoms et constructions : de quoi rédiger des phrases justes et claires.",
    level: "Approfondissement",
    questions: [
      {
        question:
          "« Si le conseil municipal ___ cette délibération, les travaux commenceraient en mai. » Quelle forme est correcte ?",
        options: ["adopterait", "adoptait", "adopte", "adoptera"],
        answerIndex: 1,
        explanation:
          "Dans une hypothèse, « si » est suivi de l'imparfait quand la principale est au conditionnel présent : « si… adoptait, … commenceraient ». Jamais de conditionnel après « si ».",
        optionNotes: [
          "C'est la faute la plus sanctionnée en concours : on n'emploie jamais le conditionnel directement après « si » d'hypothèse.",
          null,
          "Le présent après « si » appelle un futur dans la principale (« si le conseil adopte…, les travaux commenceront »), pas un conditionnel.",
          "Le futur n'apparaît pas dans la proposition introduite par « si » d'hypothèse.",
        ],
      },
      {
        question: "Quelle phrase est grammaticalement correcte ?",
        options: [
          "C'est de ce dossier dont je vous parle.",
          "C'est ce dossier dont je vous parle.",
          "C'est de ce dossier que je vous parle.",
          "C'est de ce dossier lequel je vous parle.",
        ],
        answerIndex: 2,
        explanation:
          "« Dont » contient déjà le « de ». On écrit donc soit « c'est le dossier dont je vous parle », soit « c'est de ce dossier que je vous parle », mais jamais les deux ensemble.",
        optionNotes: [
          "Pléonasme classique : « de » est répété deux fois, une fois seul et une fois inclus dans « dont ».",
          "La construction est bancale : sans « de », il faut « c'est le dossier dont je vous parle ».",
          null,
          "« Lequel » ne s'emploie pas seul ici ; il faudrait une préposition et un contexte différent (« le dossier auquel je pense »).",
        ],
      },
      {
        question:
          "« La majorité des agents ___ favorable à cette organisation. » Quelle forme est attendue ?",
        options: [
          "est (accord avec le collectif)",
          "sont, obligatoirement",
          "serait, par prudence",
          "êtes",
        ],
        answerIndex: 0,
        explanation:
          "Avec un nom collectif suivi d'un complément, l'accord se fait avec le mot sur lequel porte l'idée : ici l'accent est mis sur « la majorité », donc « est favorable ». L'accord au pluriel reste toléré quand on insiste sur les agents eux-mêmes.",
        optionNotes: [
          null,
          "Le pluriel est toléré selon le sens, mais il n'est pas obligatoire : le présenter comme la seule forme correcte est une erreur.",
          "Le conditionnel change le sens (fait supposé) : ce n'est pas une question d'accord.",
          "« Êtes » est la 2ᵉ personne du pluriel : le sujet « la majorité » est à la 3ᵉ personne.",
        ],
      },
      {
        question:
          "« Je vous saurais gré de bien vouloir… » : pourquoi cette formule est-elle correcte ?",
        options: [
          "Parce que « gré » est un nom : on « sait gré » à quelqu'un, on ne « serait gré » à personne.",
          "Parce que « saurais » remplace « serais » par élégance.",
          "Parce que le conditionnel est interdit dans un courrier.",
          "Parce que « gré » est un participe passé accordé.",
        ],
        answerIndex: 0,
        explanation:
          "La formule vient du verbe « savoir gré à quelqu'un » (lui être reconnaissant). « Je vous serais gré » est un contresens grammatical fréquent dans les copies.",
        optionNotes: [
          null,
          "Ce n'est pas une question de style : « serais » vient du verbe être, qui ne se construit pas avec « gré ».",
          "Le conditionnel est au contraire la marque de politesse attendue dans un courrier administratif.",
          "« Gré » est un nom commun signifiant « volonté, reconnaissance », pas un participe passé.",
        ],
      },
      {
        question:
          "Quelle phrase évite l'erreur de construction (anacoluthe) ?",
        options: [
          "En arrivant au service, le dossier était déjà traité.",
          "En arrivant au service, j'ai constaté que le dossier était déjà traité.",
          "En arrivant au service, le traitement du dossier avait eu lieu.",
          "En arrivant au service, il était le dossier déjà traité.",
        ],
        answerIndex: 1,
        explanation:
          "Le sujet du participe présent doit être celui de la principale. Ce n'est pas le dossier qui arrive au service, mais « je » : la seule phrase cohérente est « en arrivant…, j'ai constaté… ».",
        optionNotes: [
          "Le sujet de « en arrivant » serait « le dossier » : c'est une anacoluthe, faute de logique très repérée par les correcteurs.",
          null,
          "Même défaut : c'est « le traitement » qui arriverait au service.",
          "La phrase est en plus agrammaticale : l'ordre des mots ne tient pas.",
        ],
      },
      {
        question:
          "« Les mesures qu'il a ___ prendre ont été présentées. » Quelle forme convient ?",
        options: ["dû", "dus", "dues", "due"],
        answerIndex: 0,
        explanation:
          "Le participe « dû » suivi d'un infinitif reste invariable : le complément d'objet direct « qu' » se rapporte à « prendre », non à « a dû ». On écrit « les mesures qu'il a dû prendre ».",
        optionNotes: [
          null,
          "L'accord au masculin pluriel suppose à tort que « que » est le COD de « a dû ».",
          "Accord féminin pluriel : même erreur de raisonnement, le COD dépend de l'infinitif « prendre ».",
          "Accord féminin singulier, incohérent avec « les mesures » et inutile puisque le participe reste invariable.",
        ],
      },
    ],
  },
];
