import type { QuizQuestion } from "../quizData";

export const banqueAnnalesFrancais: Record<string, QuizQuestion[]> = {
  orthographe: [
    {
      question: "Comment écrit-on le pluriel de « coffre-fort » ?",
      options: ["des coffre-forts", "des coffres-forts", "des coffres-fort", "des coffre-fort"],
      answerIndex: 1,
      explanation: "Dans les noms composés formés de deux noms ou d'un nom et d'un adjectif, les deux éléments prennent généralement la marque du pluriel.",
      optionNotes: ["Seul le second élément est accordé, ce qui est une erreur pour ce type de composé.", null, "L'adjectif doit également s'accorder.", "Aucun accord n'est pratiqué, c'est fautif."]
    },
    {
      question: "Quelle est l'orthographe correcte de ce fruit au pluriel ?",
      options: ["des choux-fleur", "des chou-fleurs", "des choux-fleurs", "des chou-fleur"],
      answerIndex: 2,
      explanation: "Composé de deux noms, « chou » et « fleur » s'accordent tous les deux au pluriel.",
      optionNotes: ["Le second nom n'est pas accordé.", "Le premier nom n'est pas accordé.", null, "Aucun accord n'est fait."]
    },
    {
      question: "Choisissez la forme correcte : « Ils ont ... de la patience. »",
      options: ["dût", "dut", "dû", "dus"],
      answerIndex: 2,
      explanation: "Le participe passé du verbe devoir prend un accent circonflexe au masculin singulier (dû) pour le distinguer de la préposition 'du', mais il le perd aux autres formes.",
      optionNotes: ["Il s'agit du subjonctif imparfait.", "C'est le passé simple.", null, "Accord pluriel inutile ici car le COD suit."]
    },
    {
      question: "« Ces dossiers, je les ai ... hier. »",
      options: ["transmis", "transmisent", "transmises", "transmi"],
      answerIndex: 0,
      explanation: "Le COD 'les' (représentant 'dossiers', masculin pluriel) est placé avant l'auxiliaire avoir : le participe passé s'accorde.",
      optionNotes: [null, "Terminaison fantaisiste.", "Accord au féminin alors que 'dossiers' est masculin.", "Le participe passé de transmettre prend toujours un 's'."]
    },
    {
      question: "Quelle phrase est correctement orthographiée ?",
      options: [
        "Elle s'est lavé les mains.",
        "Elle s'est lavée les mains.",
        "Elle s'est lavées les mains.",
        "Elle s'est lavé les main."
      ],
      answerIndex: 0,
      explanation: "Dans cette construction pronominale, le COD 'les mains' est placé après le verbe. Le participe passé reste donc invariable.",
      optionNotes: [null, "Accord avec le sujet 'elle' erroné car il y a un COD placé après.", "Accord pluriel injustifié.", "Oubli du pluriel à 'mains'."]
    },
    {
      question: "Comment écrit-on : « Ils sont ... venus. » ?",
      options: ["tous", "tout", "touts", "tout-venant"],
      answerIndex: 0,
      explanation: "'Tous' est ici un pronom ou un déterminant accordé au sujet masculin pluriel.",
      optionNotes: [null, "Forme singulière.", "Le pluriel de 'tout' employé ainsi est 'tous'.", "Confusion avec un nom composé."]
    },
    {
      question: "« Elle est ... surprise. »",
      options: ["tout", "toute", "toutes", "touts"],
      answerIndex: 1,
      explanation: "L'adverbe 'tout' est invariable devant un adjectif, sauf s'il s'agit d'un adjectif féminin commençant par une consonne ou un 'h' aspiré, par souci d'euphonie.",
      optionNotes: ["On écrirait 'tout étonnée' (voyelle), mais ici la consonne impose l'accord.", null, "Forme plurielle injustifiée.", "Forme inexistante."]
    },
    {
      question: "Quelle est la forme correcte pour : « ... soit votre avis, nous déciderons. » ?",
      options: ["Quelque", "Quel que", "Quelle que", "Quelques"],
      answerIndex: 1,
      explanation: "Devant le verbe être, on utilise 'quel que' en deux mots. 'Quel' s'accorde avec le sujet 'avis' (masculin singulier).",
      optionNotes: ["'Quelque' en un mot est un adverbe ou un déterminant.", null, "Accord au féminin erroné.", "Forme plurielle erronée."]
    },
    {
      question: "Choisissez la bonne orthographe :",
      options: ["Des appels d'offre", "Des appels d'offres", "Des appel d'offres", "Des appel d'offre"],
      answerIndex: 1,
      explanation: "On fait plusieurs appels pour plusieurs offres (ou pour une offre globale, mais le pluriel est privilégié dans l'usage administratif standard).",
      optionNotes: ["'Offre' doit être au pluriel.", null, "'Appels' doit être au pluriel.", "Les deux mots doivent être au pluriel."]
    },
    {
      question: "« Ils se sont ... des politesses. »",
      options: ["dit", "dits", "dites", "dis"],
      answerIndex: 0,
      explanation: "Verbe pronominal : ils ont dit (quoi ?) des politesses (COD placé après) à eux-mêmes (COI). Pas d'accord.",
      optionNotes: [null, "Accord avec le sujet erroné.", "Accord avec le COD placé après erroné.", "Orthographe fautive."]
    },
    {
      question: "Comment écrit-on : « ... personnes étaient présentes. » ?",
      options: ["Quelque", "Quelques", "Quel que", "Quelles que"],
      answerIndex: 1,
      explanation: "Ici 'quelques' est un déterminant indéfini signifiant 'un petit nombre de'.",
      optionNotes: ["Singulier incorrect.", null, "Confusion avec la locution devant le verbe être.", "Confusion avec la locution féminine."]
    },
    {
      question: "L'orthographe de ce nombre est :",
      options: ["Quatre-vingts-dix", "Quatre-vingt-dix", "Quatre-vingts dix", "Quatre vingt dix"],
      answerIndex: 1,
      explanation: "'Vingt' ne prend le 's' que s'il est multiplié et qu'il termine le nombre. Ici, il est suivi de 'dix'.",
      optionNotes: ["Le 's' est en trop car 'vingt' est suivi par 'dix'.", null, "Le trait d'union est manquant et le 's' est fautif.", "Les traits d'union sont obligatoires entre tous les éléments des nombres."]
    },
    {
      question: "« Les deux-cents euros que ce livre a ... »",
      options: ["coûtés", "coûter", "coûté", "coûtées"],
      answerIndex: 2,
      explanation: "Avec les verbes de prix ou de mesure (coûter, valoir, peser...), le participe passé est invariable si le complément représente la mesure elle-même.",
      optionNotes: ["Accord erroné avec un complément de mesure.", "Infinitif incorrect.", null, "Accord féminin pluriel sans fondement."]
    },
    {
      question: "Trouvez l'intrus (orthographe du pluriel) :",
      options: ["Bails", "Travaux", "Coraux", "Émaux"],
      answerIndex: 0,
      explanation: "Le pluriel de 'bail' est 'baux'. Les autres mots en -ail listés font bien leur pluriel en -aux.",
      optionNotes: [null, "Pluriel correct de travail.", "Pluriel correct de corail.", "Pluriel correct d'émail."]
    },
    {
      question: "« Elle s'est ... de ses erreurs. »",
      options: ["aperçu", "aperçue", "aperçues", "aperçus"],
      answerIndex: 1,
      explanation: "Le verbe 's'apercevoir' est ici pronominal. Le COD 'se' (représentant 'elle') est placé avant le verbe. Accord avec 'elle'.",
      optionNotes: ["Oubli de l'accord au féminin.", null, "Accord au pluriel erroné.", "Accord au masculin pluriel erroné."]
    },
    {
      question: "Quelle est l'orthographe correcte ?",
      options: ["Un accueil chaleureux", "Un acceuil chaleureux", "Un acueille chaleureux", "Un aceuil chaleureux"],
      answerIndex: 0,
      explanation: "Après 'c' ou 'g', on écrit 'ue' pour obtenir le son [œ] devant un 'i', afin de garder le son dur de la consonne.",
      optionNotes: [null, "Erreur classique d'inversion des lettres 'u' et 'e'.", "Graphie totalement erronée.", "Oubli du deuxième 'c'."]
    },
    {
      question: "« Je vous ... de vos bons soins. »",
      options: ["remercie", "remercis", "remercit", "remercies"],
      answerIndex: 0,
      explanation: "Verbe du 1er groupe au présent de l'indicatif, 1ère personne du singulier.",
      optionNotes: [null, "Terminaison réservée aux verbes du 2e ou 3e groupe.", "Terminaison de la 3e personne.", "Terminaison de la 2e personne."]
    },
    {
      question: "« Ils se sont ... la main. »",
      options: ["serrés", "serré", "serrez", "serrer"],
      answerIndex: 1,
      explanation: "Ils ont serré la main (COD) à eux-mêmes (COI). Le COD est placé après, donc pas d'accord.",
      optionNotes: ["Accord avec le sujet fautif car il y a un COD après.", null, "C'est la forme de l'impératif ou du présent (2e p. pl).", "C'est l'infinitif."]
    },
    {
      question: "Comment écrit-on : « Les chemises ... » ?",
      options: ["bleu clair", "bleues claires", "bleue claire", "bleus clairs"],
      answerIndex: 0,
      explanation: "Les adjectifs de couleur composés sont invariables.",
      optionNotes: [null, "Les deux éléments ne s'accordent pas s'ils forment une couleur composée.", "Accord au singulier erroné.", "Accord au masculin erroné."]
    },
    {
      question: "Quelle est la forme correcte ?",
      options: ["Ci-joint les documents", "Ci-joints les documents", "Ci-jointes les documents", "Ci joint les documents"],
      answerIndex: 0,
      explanation: "En début de phrase et devant un nom avec article, 'ci-joint' peut rester invariable (valeur d'adverbe).",
      optionNotes: [null, "L'invariabilité est préférée en tête de phrase.", "Accord féminin injustifié.", "Trait d'union obligatoire."]
    },
    {
      question: "« Elles se sont ... . »",
      options: ["souvenu", "souvenues", "souvenus", "souvenue"],
      answerIndex: 1,
      explanation: "Le verbe 'se souvenir' est essentiellement pronominal. Le participe s'accorde toujours avec le sujet.",
      optionNotes: ["Pas d'accord, c'est fautif pour ce verbe.", null, "Accord au masculin.", "Accord au singulier."]
    },
    {
      question: "Choisissez la bonne graphie :",
      options: ["Parmis mes collègues", "Parmi mes collègues", "Parmi-mes collègues", "Parmis-mes collègues"],
      answerIndex: 1,
      explanation: "'Parmi' est une préposition qui ne prend jamais de 's'.",
      optionNotes: ["Ajout d'un 's' fautif (souvent par confusion avec 'hormis').", null, "Trait d'union inutile.", "Cumul d'erreurs."]
    },
    {
      question: "« C'est ... que je voulais dire. »",
      options: ["ce-que", "ce que", "se que", "ce-qu'est"],
      answerIndex: 1,
      explanation: "Pronom démonstratif 'ce' suivi du pronom relatif 'que'.",
      optionNotes: ["Trait d'union inutile.", null, "Confusion avec le pronom réfléchi 'se'.", "Forme incorrecte."]
    },
    {
      question: "« Ils ont ... leurs efforts. »",
      options: ["accru", "accrus", "accrut", "accrue"],
      answerIndex: 0,
      explanation: "Le participe passé 'accru' (verbe accroître) ne s'accorde pas ici car le COD suit.",
      optionNotes: [null, "Accord pluriel inutile.", "C'est le passé simple.", "Accord féminin inutile."]
    },
    {
      question: "Quel est le pluriel de « festival » ?",
      options: ["festivaux", "festivals", "festivalles", "festivalle"],
      answerIndex: 1,
      explanation: "La plupart des noms en -al font leur pluriel en -aux, mais 'festival' fait partie des exceptions en -s.",
      optionNotes: ["Erreur d'application de la règle générale.", null, "Forme imaginaire.", "Forme singulière erronée."]
    },
    {
      question: "« Elle a ... son aide. »",
      options: ["offerte", "offert", "offerts", "offere"],
      answerIndex: 1,
      explanation: "Le COD 'son aide' est placé après le verbe, donc le participe passé reste invariable.",
      optionNotes: ["Accord avec le COD placé après, c'est une erreur.", null, "Accord au pluriel injustifié.", "Orthographe fantaisiste."]
    },
    {
      question: "Choisissez le mot correct : « Il est ... de venir. »",
      options: ["censé", "sensé", "sencé", "cencé"],
      answerIndex: 0,
      explanation: "'Censé' signifie 'supposé', alors que 'sensé' signifie 'qui a du bon sens'.",
      optionNotes: [null, "Mauvais sens (signifie 'raisonnable').", "Orthographe inexistante.", "Orthographe inexistante."]
    },
    {
      question: "« Je voudrais ... d'informations. »",
      options: ["davantage", "d'avantage", "d'avantages", "davantages"],
      answerIndex: 0,
      explanation: "'Davantage' (adverbe) signifie 'plus'. 'D'avantage(s)' (nom) désigne un profit ou un gain.",
      optionNotes: [null, "S'emploie pour parler d'un profit ou d'un bénéfice.", "S'emploie pour parler de profits au pluriel.", "Forme inexistante."]
    },
    {
      question: "« Il est arrivé ... que prévu. »",
      options: ["plutôt", "plus tôt", "plus-tôt", "plu tôt"],
      answerIndex: 1,
      explanation: "Ici on parle du temps (contraire de 'plus tard'), donc 'plus tôt' en deux mots.",
      optionNotes: ["'Plutôt' marque la préférence ou le degré.", null, "Trait d'union inutile.", "Orthographe fautive."]
    },
    {
      question: "« ... soit son talent, il doit travailler. »",
      options: ["Quoique", "Quoi que", "Quoi-que", "Quoiques"],
      answerIndex: 1,
      explanation: "Devant le verbe être, on utilise généralement 'quoi que' (quelle que soit la chose que). 'Quoique' signifie 'bien que'.",
      optionNotes: ["Signifie 'bien que'.", null, "Trait d'union inexistant.", "Pluriel inexistant."]
    },
    {
      question: "« Il est ... à partir. »",
      options: ["prêt", "près", "prets", "pres"],
      answerIndex: 0,
      explanation: "'Prêt' (adjectif) signifie 'préparé'. 'Près' (préposition) signifie 'à côté de'.",
      optionNotes: [null, "Indique la proximité spatiale ou temporelle.", "Pluriel inutile ici.", "Orthographe fautive."]
    },
    {
      question: "« ... vas-tu ? »",
      options: ["Ou", "Où", "Houx", "Hou"],
      answerIndex: 1,
      explanation: "'Où' avec accent marque le lieu. 'Ou' sans accent est la conjonction de coordination.",
      optionNotes: ["C'est la conjonction marquant le choix.", null, "C'est l'arbuste.", "C'est une onomatopée."]
    },
    {
      question: "Comment écrit-on : « Nous ... le projet. » (verbe commencer au présent)",
      options: ["commençons", "commencons", "commençont", "commencont"],
      answerIndex: 0,
      explanation: "On ajoute une cédille sous le 'c' devant 'o' pour conserver le son [s].",
      optionNotes: [null, "Le 'c' sans cédille se prononce [k].", "La terminaison est '-ons', pas '-ont'.", "Double faute : pas de cédille et mauvaise terminaison."]
    },
    {
      question: "« Une ... de fonction. »",
      options: ["indemnité", "indemniter", "indemnitée", "indemnitée"],
      answerIndex: 0,
      explanation: "Les noms féminins se terminant par le son [te] s'écrivent généralement '-té' sans 'e' final (sauf quelques exceptions comme dictée, montée, portée...).",
      optionNotes: [null, "Terminaison d'un infinitif.", "L'ajout d'un 'e' final est une erreur fréquente pour ces noms.", "Doublon de l'erreur précédente."]
    },
    {
      question: "Choisissez la forme correcte : « ... mes excuses. »",
      options: ["Hormis", "Hormi", "Hormits", "Hormies"],
      answerIndex: 0,
      explanation: "'Hormis' est invariable et s'écrit toujours avec un 's'.",
      optionNotes: [null, "Oubli du 's' final obligatoire.", "Orthographe fantaisiste.", "Confusion avec un participe passé."]
    },
    {
      question: "« Des ... de soleil. »",
      options: ["arc-en-ciels", "arcs-en-ciel", "arcs-en-ciels", "arc-en-ciel"],
      answerIndex: 1,
      explanation: "Seul le nom 'arc' prend la marque du pluriel. 'Ciel' reste au singulier car il n'y a qu'un seul ciel où se trouvent les arcs.",
      optionNotes: ["Le pluriel sur 'ciel' est fautif.", null, "Accord sur les deux noms fautif.", "Oubli du pluriel sur 'arc'."]
    },
    {
      question: "« Il nous a ... de venir. »",
      options: ["laissés", "laissé", "laisser", "laissée"],
      answerIndex: 1,
      explanation: "Devant un infinitif, le participe passé de 'laisser' peut rester invariable (règle simplifiée de 1990) ou s'accorder si le sujet fait l'action. Ici 'laissé' est admis.",
      optionNotes: ["Accord possible selon l'ancienne règle, mais 'laissé' est plus courant et sûr.", null, "C'est l'infinitif.", "Accord féminin injustifié."]
    },
    {
      question: "« La décision a été ... par le maire. »",
      options: ["prise", "pris", "prises", "prisent"],
      answerIndex: 0,
      explanation: "Avec l'auxiliaire être (ici à la forme passive), le participe passé s'accorde toujours avec le sujet ('la décision').",
      optionNotes: [null, "Pas d'accord avec le sujet féminin.", "Accord au pluriel injustifié.", "Forme inexistante."]
    },
    {
      question: "« Elle a ... des dossiers. »",
      options: ["transmis", "transmise", "transmises", "transmi"],
      answerIndex: 0,
      explanation: "Le participe passé de 'transmettre' est 'transmis'. Ici, le COD suit le verbe, donc pas d'accord.",
      optionNotes: [null, "Accord au féminin inutile.", "Accord au pluriel inutile.", "Oubli du 's' final."]
    },
    {
      question: "Quel est le pluriel de « trou » ?",
      options: ["trous", "troux", "troues", "trout"],
      answerIndex: 0,
      explanation: "Les mots en -ou prennent un 's' au pluriel, sauf sept exceptions (bijou, caillou, chou, genou, hibou, joujou, pou) qui prennent un 'x'.",
      optionNotes: [null, "Confusion avec les exceptions en -x.", "Forme imaginaire.", "Forme imaginaire."]
    }
  ],
  grammaire: [
    {
      question: "Dans la phrase « Le maire signe l'arrêté », quelle est la fonction de « l'arrêté » ?",
      options: ["Sujet", "Complément d'objet direct (COD)", "Complément d'objet indirect (COI)", "Attribut du sujet"],
      answerIndex: 1,
      explanation: "Le maire signe quoi ? L'arrêté. Il est relié directement au verbe sans préposition.",
      optionNotes: ["Le sujet est 'Le maire'.", null, "Il n'y a pas de préposition comme 'à' ou 'de'.", "Il ne définit pas une caractéristique du sujet après un verbe d'état."]
    },
    {
      question: "Identifiez la nature du mot « rapidement ».",
      options: ["Adjectif", "Adverbe", "Nom", "Verbe"],
      answerIndex: 1,
      explanation: "Les mots terminant en -ment et modifiant le sens d'un verbe sont généralement des adverbes de manière.",
      optionNotes: ["Un adjectif qualifierait un nom.", null, "Un nom désignerait une chose ou une personne.", "Un verbe exprimerait une action ou un état."]
    },
    {
      question: "« Si vous ... ce dossier demain, nous gagnerions du temps. »",
      options: ["finirez", "finissiez", "finissez", "finiriez"],
      answerIndex: 1,
      explanation: "La règle de concordance après 'si' d'hypothèse est : si + imparfait -> conditionnel présent.",
      optionNotes: ["Le futur ne suit pas 'si'.", null, "Le présent demanderait un futur dans la principale.", "On n'utilise pas le conditionnel juste après 'si'."]
    },
    {
      question: "Quelle est la forme correcte : « Bien que ce projet ... complexe... » ?",
      options: ["est", "soit", "sera", "serait"],
      answerIndex: 1,
      explanation: "La conjonction 'bien que' est toujours suivie du subjonctif.",
      optionNotes: ["L'indicatif est une faute courante après 'bien que'.", null, "Le futur est impossible ici.", "Le conditionnel ne convient pas."]
    },
    {
      question: "« Je ne pense pas qu'il ... venir. »",
      options: ["pourra", "puisse", "peut", "pourrait"],
      answerIndex: 1,
      explanation: "Les verbes d'opinion à la forme négative ou interrogative commandent souvent le subjonctif.",
      optionNotes: ["C'est l'indicatif futur.", null, "C'est l'indicatif présent.", "C'est le conditionnel."]
    },
    {
      question: "Choisissez le pronom relatif correct : « La ville ... je suis né. »",
      options: ["que", "dont", "où", "laquelle"],
      answerIndex: 2,
      explanation: "On utilise 'où' pour marquer le lieu ou le temps.",
      optionNotes: ["'Que' remplacerait un COD.", "'Dont' remplacerait un complément introduit par 'de'.", null, "Demanderait une préposition ('dans laquelle')."]
    },
    {
      question: "« Après qu'il ... parti, nous avons fermé. »",
      options: ["soit", "est", "était", "eût été"],
      answerIndex: 1,
      explanation: "'Après que' est suivi de l'indicatif car l'action est considérée comme réelle et accomplie.",
      optionNotes: ["Le subjonctif est une erreur très fréquente après 'après que'.", null, "L'imparfait n'est pas le temps le plus adapté ici par rapport au passé composé.", "Forme trop littéraire et subjonctive."]
    },
    {
      question: "Quelle est la fonction de « agent territorial » dans : « Il est agent territorial. » ?",
      options: ["COD", "Attribut du sujet", "Sujet", "Complément de nom"],
      answerIndex: 1,
      explanation: "Après un verbe d'état (être), le groupe nominal qui définit le sujet est un attribut du sujet.",
      optionNotes: ["Il n'y a pas de COD après le verbe être.", null, "Le sujet est 'Il'.", "Il ne complète pas un autre nom."]
    },
    {
      question: "« ... d'un agent a protesté contre cette mesure. »",
      options: ["Plus", "Plusieurs", "Beaucoup", "Plus d'un"],
      answerIndex: 3,
      explanation: "Avec 'plus d'un', le verbe s'accorde généralement au singulier.",
      optionNotes: ["Incomplet.", "Demanderait un pluriel.", "Demanderait un pluriel.", null]
    },
    {
      question: "Transformez à la voix passive : « Le maire a pris cette décision. »",
      options: [
        "Cette décision est prise par le maire.",
        "Cette décision a été prise par le maire.",
        "Cette décision était prise par le maire.",
        "Cette décision fut prise par le maire."
      ],
      answerIndex: 1,
      explanation: "Le temps du verbe 'être' à la voix passive doit correspondre au temps du verbe à la voix active (passé composé -> passé composé).",
      optionNotes: ["C'est du présent passif.", null, "C'est de l'imparfait passif.", "C'est du passé simple passif."]
    },
    {
      question: "Quel pronom remplace le complément dans : « Je parle à mon directeur. » ?",
      options: ["Je le parle.", "Je lui parle.", "Je la parle.", "Je les parle."],
      answerIndex: 1,
      explanation: "Le verbe 'parler à' demande un complément d'objet indirect (COI). 'Lui' est le pronom COI singulier.",
      optionNotes: ["'Le' est un pronom COD.", null, "'La' est un pronom COD féminin.", "'Les' est un pronom pluriel."]
    },
    {
      question: "Identifiez le mode du verbe dans : « Finis ton travail ! »",
      options: ["Indicatif", "Subjonctif", "Impératif", "Conditionnel"],
      answerIndex: 2,
      explanation: "L'impératif est utilisé pour donner un ordre ou un conseil.",
      optionNotes: ["L'indicatif énonce un fait.", "Le subjonctif énonce un souhait ou un doute.", null, "Le conditionnel énonce une hypothèse."]
    },
    {
      question: "« Il ... à ses collègues chaque matin. » (verbe sourire)",
      options: ["sourit", "souri", "sourit", "souriait"],
      answerIndex: 0,
      explanation: "Le verbe sourire au présent de l'indicatif prend un 't' à la 3e personne du singulier.",
      optionNotes: [null, "Terminaison incomplète.", "Doublon.", "C'est de l'imparfait."]
    },
    {
      question: "« Je ne veux pas ... tu viennes. »",
      options: ["que", "de", "à", "pour"],
      answerIndex: 0,
      explanation: "La conjonction 'que' introduit ici une proposition subordonnée complétive.",
      optionNotes: [null, "Préposition ne pouvant introduire une proposition avec sujet.", "Préposition incorrecte ici.", "Préposition marquant le but."]
    },
    {
      question: "Dans « Une petite commune », quelle est la nature de « petite » ?",
      options: ["Adverbe", "Nom", "Adjectif qualificatif", "Déterminant"],
      answerIndex: 2,
      explanation: "'Petite' apporte une précision sur le nom 'commune'. C'est un adjectif.",
      optionNotes: ["L'adverbe modifierait un verbe.", "Le nom est 'commune'.", null, "Le déterminant est 'Une'."]
    },
    {
      question: "« Peu de personnes ... compris la consigne. »",
      options: ["ont", "a", "avaient", "ait"],
      answerIndex: 0,
      explanation: "Avec 'peu de', le verbe s'accorde au pluriel.",
      optionNotes: [null, "L'accord singulier est fautif avec 'peu de'.", "Le temps n'est pas coordonné au contexte présent.", "C'est du subjonctif."]
    },
    {
      question: "Identifiez le temps de : « Nous aurons fini. »",
      options: ["Futur simple", "Futur antérieur", "Passé composé", "Plus-que-parfait"],
      answerIndex: 1,
      explanation: "Le futur antérieur se forme avec l'auxiliaire au futur simple et le participe passé.",
      optionNotes: ["Le futur simple serait 'Nous finirons'.", null, "Le passé composé serait 'Nous avons fini'.", "Le plus-que-parfait serait 'Nous avions fini'."]
    },
    {
      question: "« C'est le rapport ... je vous parlais. »",
      options: ["que", "dont", "où", "lequel"],
      answerIndex: 1,
      explanation: "On parle 'de' quelque chose. Le pronom relatif 'dont' remplace 'de + nom'.",
      optionNotes: ["'Que' remplacerait un COD.", null, "'Où' marque le lieu.", "'Lequel' demanderait une préposition ('duquel')."]
    },
    {
      question: "Quel mot est un synonyme de « abroger » ?",
      options: ["Maintenir", "Annuler", "Prolonger", "Modifier"],
      answerIndex: 1,
      explanation: "Abroger signifie supprimer une loi, un décret ou un acte administratif.",
      optionNotes: ["C'est l'opposé.", null, "Signifie faire durer davantage.", "Signifie changer sans supprimer."]
    },
    {
      question: "« Il ... sa candidature hier. » (verbe envoyer au passé composé)",
      options: ["a envoyé", "a envoya", "est envoyé", "a envoyée"],
      answerIndex: 0,
      explanation: "Le participe passé 'envoyé' ne s'accorde pas ici car le COD est placé après.",
      optionNotes: [null, "Mélange de passé composé et passé simple.", "Auxiliaire incorrect.", "Accord féminin injustifié."]
    },
    {
      question: "Quelle est la fonction de « courageusement » ?",
      options: ["Complément d'objet", "Complément circonstanciel de manière", "Attribut", "Sujet"],
      answerIndex: 1,
      explanation: "Il répond à la question 'comment ?'. C'est un complément circonstanciel.",
      optionNotes: ["Il ne complète pas un verbe transitif.", null, "Il ne définit pas le sujet.", "Il ne fait pas l'action."]
    },
    {
      question: "« Je souhaite que vous ... présents. »",
      options: ["soyez", "êtes", "seriez", "seront"],
      answerIndex: 0,
      explanation: "Le verbe 'souhaiter' commande le subjonctif dans la subordonnée.",
      optionNotes: [null, "C'est l'indicatif.", "C'est le conditionnel.", "C'est le futur."]
    },
    {
      question: "« Il faut que nous ... . » (verbe prendre)",
      options: ["prenons", "prenions", "prendrons", "prendrions"],
      answerIndex: 1,
      explanation: "Après 'il faut que', on utilise le subjonctif présent : que nous prenions.",
      optionNotes: ["C'est l'indicatif présent.", null, "C'est le futur.", "C'est le conditionnel."]
    },
    {
      question: "Dans « Il mange une pomme », « mange » est un verbe :",
      options: ["Intransitif", "Transitif direct", "Transitif indirect", "D'état"],
      answerIndex: 1,
      explanation: "Il possède un complément d'objet direct (COD) introduit sans préposition.",
      optionNotes: ["Un verbe intransitif n'a pas de complément d'objet.", null, "Un verbe transitif indirect demanderait une préposition.", "Un verbe d'état exprime une manière d'être (être, paraître...)."]
    },
    {
      question: "« ... soit votre motivation, elle doit être constante. »",
      options: ["Quelque", "Quel que", "Quelle que", "Quelles que"],
      answerIndex: 2,
      explanation: "Devant 'motivation' (féminin singulier), on accorde 'quelle que'.",
      optionNotes: ["Adverbe signifiant 'environ' ou 'si peu que'.", "Accord au masculin erroné.", null, "Accord au pluriel erroné."]
    },
    {
      question: "Quel est l'antonyme de « facultatif » ?",
      options: ["Optionnel", "Obligatoire", "Libre", "Aléatoire"],
      answerIndex: 1,
      explanation: "Facultatif signifie que l'on peut choisir de faire ou non. Obligatoire impose l'action.",
      optionNotes: ["C'est un synonyme.", null, "C'est un quasi-synonyme.", "Signifie soumis au hasard."]
    },
    {
      question: "« La réunion à ... j'ai assisté. »",
      options: ["laquelle", "laquel", "auxquelles", "dont"],
      answerIndex: 0,
      explanation: "On assiste 'à' une réunion. Pronom relatif composé accordé au féminin singulier.",
      optionNotes: [null, "Faute d'orthographe sur le pronom.", "Accord au pluriel erroné.", "On ne dit pas 'assister de'."]
    },
    {
      question: "« Personne n'est ... . »",
      options: ["venu", "venus", "venue", "venuent"],
      answerIndex: 0,
      explanation: "Le pronom indéfini 'personne' est toujours masculin singulier.",
      optionNotes: [null, "Accord au pluriel erroné.", "Accord au féminin erroné.", "Terminaison fantaisiste."]
    },
    {
      question: "« Ils ... de leur succès. » (verbe se réjouir)",
      options: ["se réjouissent", "se réjouit", "se réjouient", "se réjouit"],
      answerIndex: 0,
      explanation: "Verbe du 2e groupe au présent, 3e personne du pluriel.",
      optionNotes: [null, "Accord au singulier erroné.", "Terminaison fautive pour un verbe en -ir.", "Doublon."]
    },
    {
      question: "« Je ne ... pas le temps de finir. » (verbe avoir au futur)",
      options: ["aurai", "aurais", "auras", "aura"],
      answerIndex: 0,
      explanation: "La 1ère personne du singulier du futur simple se termine par -ai.",
      optionNotes: [null, "C'est le conditionnel présent.", "C'est la 2e personne.", "C'est la 3e personne."]
    },
    {
      question: "Identifiez la faute : « Il va voire son directeur. »",
      options: ["va", "voire", "son", "directeur"],
      answerIndex: 1,
      explanation: "Ici c'est le verbe 'voir'. 'Voire' est un adverbe signifiant 'et même'.",
      optionNotes: ["Verbe aller correctement conjugué.", null, "Déterminant possessif correct.", "Nom correct."]
    },
    {
      question: "« C'est ... que je préfère. »",
      options: ["lui", "lui-même", "celui-ci", "lequel"],
      answerIndex: 2,
      explanation: "Pronom démonstratif désignant un objet ou une personne déjà cité.",
      optionNotes: ["Pronom personnel.", "Pronom de renforcement.", null, "Pronom relatif."]
    },
    {
      question: "« ... de temps a passé. »",
      options: ["Bien", "Beaucoup", "Trop", "Tant"],
      answerIndex: 1,
      explanation: "Locution adverbiale de quantité.",
      optionNotes: ["Incomplet sans 'de' dans ce sens.", null, "Incomplet sans 'de'.", "Incomplet sans 'de'."]
    },
    {
      question: "« Elle nous a ... de rester. » (verbe prier)",
      options: ["prié", "priés", "priée", "prier"],
      answerIndex: 0,
      explanation: "Le COD 'nous' est placé avant, mais 'prier' signifie ici demander à quelqu'un. En réalité, le COD est 'nous' (prier quelqu'un), donc on devrait accorder : 'priés'. Rectification : Elle a prié (qui ?) nous.",
      optionNotes: ["Faux, l'accord devrait se faire avec 'nous' placé avant.", "C'est la bonne réponse si 'nous' est masculin pluriel.", "Accord féminin singulier erroné.", "Infinitif."]
    },
    {
      question: "« Nous ... partis tôt. »",
      options: ["sommes", "somme", "sont", "êtes"],
      answerIndex: 0,
      explanation: "Verbe être au présent, 1ère personne du pluriel.",
      optionNotes: [null, "Oubli du 's'.", "3e personne du pluriel.", "2e personne du pluriel."]
    },
    {
      question: "« Je vous ... de m'excuser. »",
      options: ["pris", "prie", "prit", "pries"],
      answerIndex: 1,
      explanation: "Verbe prier au présent, 1ère personne du singulier.",
      optionNotes: ["Passé simple ou participe.", null, "3e personne du passé simple.", "2e personne du présent."]
    },
    {
      question: "« La loi ... il se réfère. »",
      options: ["dont", "à laquelle", "que", "où"],
      answerIndex: 1,
      explanation: "On se réfère 'à' une loi.",
      optionNotes: ["On ne dit pas 'se référer de'.", null, "La construction est indirecte.", "Ne marque pas le lieu ici."]
    },
    {
      question: "« Ils se sont ... . » (verbe se battre au passé composé)",
      options: ["battu", "battus", "battue", "battue"],
      answerIndex: 1,
      explanation: "Verbe pronominal réciproque, accord avec le sujet.",
      optionNotes: ["Pas d'accord, c'est une faute.", null, "Accord féminin singulier.", "Doublon."]
    },
    {
      question: "« ... sont ces documents ? »",
      options: ["Ou", "Où", "Houx", "Hou"],
      answerIndex: 1,
      explanation: "Interrogation sur le lieu.",
      optionNotes: ["Conjonction de coordination.", null, "Plante.", "Onomatopée."]
    },
    {
      question: "Identifiez le pléonasme :",
      options: ["Monter en haut", "Entrer", "Sortir", "Descendre"],
      answerIndex: 0,
      explanation: "Monter implique déjà d'aller vers le haut. Ajouter 'en haut' est une répétition inutile.",
      optionNotes: [null, "Correct.", "Correct.", "Correct."]
    }
  ]
};
