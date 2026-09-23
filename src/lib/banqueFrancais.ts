import type { QuizQuestion } from "./quizData";

/** Questions supplémentaires pour les entraînements de français. */
export const banqueFrancais: Record<string, QuizQuestion[]> = {
  orthographe: [
    {
      question: "Quelle phrase est correcte ?",
      options: [
        "Je vous prie d'agréer l'expression de mes salutations distinguées.",
        "Je vous prie d'agréer l'expression de mes salutations distingués.",
        "Je vous pris d'agréer mes salutations distinguées.",
        "Je vous prie d'agréer l'expression de mes salutation distinguées.",
      ],
      answerIndex: 0,
      explanation:
        "Formule de politesse administrative classique : « salutations » est féminin pluriel, l'adjectif s'accorde en « distinguées ».",
      optionNotes: [
        null,
        "L'adjectif doit s'accorder au féminin pluriel : « distinguées ».",
        "« pris » est le participe passé ; il faut le présent « prie ».",
        "« salutations » prend un s, comme l'adjectif qui le suit.",
      ],
    },
    {
      question: "« Les mesures qu'il a ... » :",
      options: ["prises", "pris", "prise", "prisent"],
      answerIndex: 0,
      explanation:
        "Le COD « les mesures » est placé avant l'auxiliaire avoir : le participe s'accorde, « prises ».",
      optionNotes: [
        null,
        "Sans accord, la règle du COD antéposé n'est pas appliquée.",
        "Le COD est au pluriel, donc « prises ».",
        "« prisent » n'existe pas comme participe passé.",
      ],
    },
    {
      question: "Quelle orthographe est correcte ?",
      options: [
        "Cette décision est conforme aux dispositions susmentionnées.",
        "Cette décision est conforme aux dispositions sus-mentionnées.",
        "Cette décision est conforme aux dispositions sus mentionnées.",
        "Cette décision est conforme aux dispositions susmentionnés.",
      ],
      answerIndex: 0,
      explanation:
        "« Susmentionné » s'écrit en un seul mot et s'accorde avec le nom qu'il qualifie.",
      optionNotes: [
        null,
        "Le trait d'union n'est pas d'usage dans ce composé.",
        "L'écriture en deux mots est fautive.",
        "L'accord doit se faire au féminin pluriel.",
      ],
    },
    {
      question: "« Il s'est rendu compte ... l'erreur. » :",
      options: ["de", "à", "sur", "pour"],
      answerIndex: 0,
      explanation:
        "« Se rendre compte de quelque chose » : la préposition est « de », et le participe « rendu » reste invariable.",
      optionNotes: [
        null,
        "« se rendre à » signifie aller quelque part ou céder.",
        "La construction avec « sur » n'existe pas.",
        "« pour » introduirait un but, pas l'objet du constat.",
      ],
    },
    {
      question: "Quelle phrase est correcte ?",
      options: [
        "Quelles que soient les difficultés, le service restera ouvert.",
        "Quelque soient les difficultés, le service restera ouvert.",
        "Quelles que soit les difficultés, le service restera ouvert.",
        "Quel que soient les difficultés, le service restera ouvert.",
      ],
      answerIndex: 0,
      explanation:
        "Devant le verbe être au subjonctif, « quel » s'accorde avec le sujet : « quelles que soient les difficultés ».",
      optionNotes: [
        null,
        "« quelque » en un mot ne s'emploie pas devant le verbe être.",
        "Le verbe doit être au pluriel : « soient ».",
        "« quel » doit s'accorder en genre et en nombre avec « difficultés ».",
      ],
    },
    {
      question: "« Les agents se sont ... des consignes. » :",
      options: ["transmis", "transmises", "transmise", "transmi"],
      answerIndex: 0,
      explanation:
        "« se » est complément d'objet second (transmettre à soi) : le participe ne s'accorde pas avec lui, et le COD « consignes » est placé après.",
      optionNotes: [
        null,
        "L'accord supposerait un COD antéposé, or « des consignes » suit le verbe.",
        "Le singulier ne correspond à rien ici.",
        "Le participe s'écrit « transmis ».",
      ],
    },
    {
      question: "Quelle graphie est correcte ?",
      options: [
        "un délai de rigueur",
        "un délais de rigueur",
        "un délai de rigeur",
        "un délait de rigueur",
      ],
      answerIndex: 0,
      explanation:
        "« Délai » ne prend le s qu'au pluriel ; « rigueur » garde le u après le g.",
      optionNotes: [
        null,
        "Le s est la marque du pluriel : « des délais ».",
        "« rigeur » se prononcerait avec un g dur : il faut « rigueur ».",
        "« délait » n'existe pas.",
      ],
    },
    {
      question: "« Ils ont convenu ... se revoir. » :",
      options: ["de", "à", "pour", "que"],
      answerIndex: 0,
      explanation:
        "« Convenir de » au sens de se mettre d'accord ; l'auxiliaire avoir est aujourd'hui admis.",
      optionNotes: [
        null,
        "« convenir à » signifie être adapté à quelqu'un.",
        "« pour » exprimerait un but, pas l'accord.",
        "« que » appellerait une proposition conjuguée, pas un infinitif.",
      ],
    },
    {
      question: "Quelle phrase est correcte ?",
      options: [
        "Il a fini par se rappeler la date de la séance.",
        "Il a fini par se rappeler de la date de la séance.",
        "Il a fini par se rappeller la date de la séance.",
        "Il a finit par se rappeler la date de la séance.",
      ],
      answerIndex: 0,
      explanation:
        "On se rappelle quelque chose (construction directe) mais on se souvient de quelque chose.",
      optionNotes: [
        null,
        "« se rappeler de » est un tour critiqué, à éviter à l'écrit d'un concours.",
        "« rappeler » ne prend qu'un l à l'infinitif.",
        "Après l'auxiliaire avoir, le participe s'écrit « fini ».",
      ],
    },
    {
      question: "« Veuillez trouver ... la copie du dossier. » :",
      options: ["ci-joint", "ci-jointe", "cijoint", "ci joint"],
      answerIndex: 0,
      explanation:
        "Placé avant le nom et sans déterminant précis en tête de phrase, « ci-joint » reste invariable.",
      optionNotes: [
        null,
        "L'accord ne s'impose que si « ci-joint » suit le nom ou s'il est précédé d'un déterminant.",
        "Le trait d'union est obligatoire.",
        "Écrit en deux mots séparés, c'est une faute.",
      ],
    },
  ],

  grammaire: [
    {
      question: "Quelle phrase est correcte ?",
      options: [
        "Bien qu'il soit absent, le dossier avance.",
        "Bien qu'il est absent, le dossier avance.",
        "Bien qu'il sera absent, le dossier avance.",
        "Bien qu'il serait absent, le dossier avance.",
      ],
      answerIndex: 0,
      explanation:
        "« Bien que » est suivi du subjonctif.",
      optionNotes: [
        null,
        "L'indicatif présent ne convient pas après cette conjonction.",
        "Le futur est impossible après « bien que ».",
        "Le conditionnel ne s'emploie pas non plus.",
      ],
    },
    {
      question: "« Après que le conseil ... délibéré, le budget est exécutoire. » :",
      options: ["a", "ait", "aurait", "eût"],
      answerIndex: 0,
      explanation:
        "« Après que » introduit un fait réalisé : il se construit à l'indicatif, contrairement à « avant que ».",
      optionNotes: [
        null,
        "Le subjonctif après « après que » est une faute courante, très repérée par les correcteurs.",
        "Le conditionnel change le sens et ne convient pas.",
        "Le subjonctif plus-que-parfait relève d'un autre registre et reste fautif ici.",
      ],
    },
    {
      question: "Quelle phrase ne comporte pas de faute de construction ?",
      options: [
        "En arrivant à la mairie, j'ai constaté que la porte était fermée.",
        "En arrivant à la mairie, la porte était fermée.",
        "En arrivant à la mairie, il y avait la porte fermée par moi.",
        "Arrivant à la mairie, la porte se fermait par elle.",
      ],
      answerIndex: 0,
      explanation:
        "Le sujet du participe doit être celui de la principale : c'est bien « je » qui arrive.",
      optionNotes: [
        null,
        "Anacoluthe : la porte ne peut pas arriver à la mairie.",
        "Construction confuse et agrammaticale.",
        "Même défaut de sujet, aggravé par un passif maladroit.",
      ],
    },
    {
      question: "« C'est l'une des collectivités qui ... le plus investi. » :",
      options: ["ont", "a", "auraient", "aura"],
      answerIndex: 0,
      explanation:
        "L'antécédent de « qui » est « les collectivités » : le verbe se met au pluriel.",
      optionNotes: [
        null,
        "Le singulier s'emploierait avec « la seule qui », où l'antécédent est singulier.",
        "Le conditionnel introduit un doute non justifié.",
        "Le futur ne correspond pas au sens.",
      ],
    },
    {
      question: "Quel emploi du pronom est correct ?",
      options: [
        "Le rapport auquel je fais référence est joint.",
        "Le rapport lequel je fais référence est joint.",
        "Le rapport dont je fais référence est joint.",
        "Le rapport que je fais référence est joint.",
      ],
      answerIndex: 0,
      explanation:
        "On fait référence « à » quelque chose : le relatif composé est « auquel ».",
      optionNotes: [
        null,
        "« lequel » seul ne peut pas remplacer « à + lequel ».",
        "« dont » remplace « de », or la construction exige « à ».",
        "« que » suppose un COD direct.",
      ],
    },
    {
      question: "« Il faut que vous ... la note avant midi. » :",
      options: ["rédigiez", "rédigez", "rédigerez", "rédigeriez"],
      answerIndex: 0,
      explanation:
        "« Il faut que » commande le subjonctif présent.",
      optionNotes: [
        null,
        "C'est l'indicatif présent, employé sans « il faut que ».",
        "Le futur ne s'emploie pas après cette locution.",
        "Le conditionnel exprimerait une hypothèse.",
      ],
    },
    {
      question: "Quelle phrase est correcte ?",
      options: [
        "La majorité des agents est favorable au projet.",
        "La majorité des agents sont favorable au projet.",
        "La majorité des agents est favorables au projet.",
        "La majorité des agents étaient favorable au projet.",
      ],
      answerIndex: 0,
      explanation:
        "Avec un collectif suivi d'un complément, l'accord avec le collectif est toujours correct ; l'adjectif suit alors le singulier.",
      optionNotes: [
        null,
        "L'accord avec le complément est toléré, mais l'adjectif devrait alors être au pluriel : « sont favorables ».",
        "Le sujet est singulier, l'attribut doit l'être aussi.",
        "Mélange incohérent de pluriel et de singulier.",
      ],
    },
    {
      question: "« Si le maire ... , la séance serait levée. » :",
      options: ["le demandait", "le demanderait", "l'aurait demandé", "le demandera"],
      answerIndex: 0,
      explanation:
        "Dans une hypothèse, « si » est suivi de l'imparfait et la principale du conditionnel présent.",
      optionNotes: [
        null,
        "Le conditionnel après « si » est une faute classique et éliminatoire.",
        "Le conditionnel passé après « si » est également fautif.",
        "Le futur après « si » ne s'emploie pas dans une hypothèse.",
      ],
    },
    {
      question: "Quelle formule est correcte dans une lettre administrative ?",
      options: [
        "Je vous saurais gré de bien vouloir me transmettre ce document.",
        "Je vous serais gré de bien vouloir me transmettre ce document.",
        "Je vous saurai gréé de me transmettre ce document.",
        "Je vous serai gré de me transmettre ce document.",
      ],
      answerIndex: 0,
      explanation:
        "L'expression est « savoir gré » : conditionnel de savoir, « je vous saurais gré ».",
      optionNotes: [
        null,
        "Confusion très fréquente avec le verbe être.",
        "« gré » ne prend pas d'accent ni de e final.",
        "Même confusion avec être, au futur cette fois.",
      ],
    },
    {
      question: "« Les deux services se sont ... pour préparer la réunion. » :",
      options: ["concertés", "concerté", "concertées", "concerter"],
      answerIndex: 0,
      explanation:
        "Verbe essentiellement pronominal réciproque : le participe s'accorde avec le sujet masculin pluriel.",
      optionNotes: [
        null,
        "L'absence d'accord est fautive avec un sujet pluriel.",
        "« services » est masculin.",
        "Après l'auxiliaire être, il faut le participe, pas l'infinitif.",
      ],
    },
  ],
};
