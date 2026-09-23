import type { QuizTheme } from "./quizData";

export const mathsThemes: QuizTheme[] = [
  {
    id: "maths-fondamentaux",
    title: "Maths — Fondamentaux",
    description:
      "Priorités de calcul, fractions, pourcentages, proportionnalité, unités et surfaces : le niveau attendu en catégorie C.",
    level: "Découverte",
    questions: [
      {
        question: "Combien vaut 2 + 3 × 4 − 6 ÷ 2 ?",
        options: ["11", "17", "7", "10"],
        answerIndex: 0,
        explanation:
          "On effectue d'abord la multiplication et la division : 3 × 4 = 12 et 6 ÷ 2 = 3. Il reste 2 + 12 − 3 = 11.",
        optionNotes: [
          null,
          "C'est le résultat obtenu en calculant strictement de gauche à droite (2 + 3 = 5, × 4 = 20, − 6 = 14, ÷ 2 = 7… puis erreur d'enchaînement) : l'ordre des opérations n'est pas respecté.",
          "C'est ce que donne un calcul entièrement de gauche à droite sans priorités : (2 + 3) × 4 = 20, 20 − 6 = 14, 14 ÷ 2 = 7.",
          "Ce résultat suppose d'avoir oublié la division et calculé 2 + 12 − 4.",
        ],
      },
      {
        question: "Un article à 240 € subit une hausse de 10 % puis une baisse de 10 %. Quel est son prix final ?",
        options: ["240 €", "237,60 €", "242,40 €", "216 €"],
        answerIndex: 1,
        explanation:
          "Les évolutions successives se multiplient : 240 × 1,10 × 0,90 = 240 × 0,99 = 237,60 €. Une hausse puis une baisse du même taux laisse toujours un prix inférieur au départ.",
        optionNotes: [
          "C'est l'erreur classique : on croit que +10 % et −10 % s'annulent. La baisse porte sur un montant plus élevé (264 €), elle retire donc davantage.",
          null,
          "Ce serait le cas si la baisse portait sur le prix initial et non sur le prix augmenté.",
          "C'est le prix après une simple baisse de 10 % (240 × 0,90) : la hausse a été oubliée.",
        ],
      },
      {
        question: "Combien de litres contient une cuve de 2,5 m³ ?",
        options: ["250 L", "2 500 L", "25 000 L", "25 L"],
        answerIndex: 1,
        explanation:
          "1 m³ = 1 000 litres. Donc 2,5 m³ = 2 500 litres, soit aussi 2,5 tonnes d'eau.",
        optionNotes: [
          "C'est une conversion avec un facteur 100, valable pour les surfaces, pas pour les volumes.",
          null,
          "C'est un facteur 10 000, qui ne correspond à aucune conversion de volume.",
          "C'est la conversion en dm³ divisée par cent : le facteur entre m³ et litre est 1 000.",
        ],
      },
      {
        question: "Une équipe de 5 agents tond 3 000 m² en 4 heures. Quelle surface tondront 3 agents en 6 heures, au même rythme ?",
        options: ["2 700 m²", "3 000 m²", "1 800 m²", "3 600 m²"],
        answerIndex: 0,
        explanation:
          "Rendement par agent et par heure : 3 000 / (5 × 4) = 150 m². Avec 3 agents pendant 6 heures : 150 × 3 × 6 = 2 700 m².",
        optionNotes: [
          null,
          "Ce serait le cas si la baisse d'effectif était exactement compensée par la durée : 3 × 6 = 18 heures-agent contre 20 au départ, donc moins de surface.",
          "C'est le résultat pour 3 agents pendant 4 heures (150 × 3 × 4).",
          "C'est le résultat pour 4 agents pendant 6 heures : l'effectif retenu n'est pas le bon.",
        ],
      },
      {
        question: "Quelle fraction est égale à 0,375 ?",
        options: ["3/8", "3/7", "1/4", "5/8"],
        answerIndex: 0,
        explanation:
          "3 ÷ 8 = 0,375. Cette fraction vaut aussi 37,5 %. Les fractions en huitièmes valent 0,125 par huitième.",
        optionNotes: [
          null,
          "3/7 ≈ 0,4286 : le dénominateur 7 ne donne jamais d'écriture décimale exacte.",
          "1/4 = 0,25, soit 25 %.",
          "5/8 = 0,625 : c'est le complément de 3/8 par rapport à 1.",
        ],
      },
    ],
  },
  {
    id: "maths-consolidation",
    title: "Maths — Consolidation",
    description:
      "Équations, systèmes, statistiques descriptives et lecture de données chiffrées : le niveau attendu en catégorie B.",
    level: "Approfondissement",
    questions: [
      {
        question: "Quelle est la solution de 5x − 12 = 3x + 8 ?",
        options: ["x = 10", "x = 2", "x = −10", "x = 5"],
        answerIndex: 0,
        explanation:
          "On regroupe : 5x − 3x = 8 + 12, soit 2x = 20 et x = 10. Vérification : 5 × 10 − 12 = 38 = 3 × 10 + 8.",
        optionNotes: [
          null,
          "C'est le résultat si l'on soustrait au lieu d'additionner les constantes : 8 − 12 = −4, puis −4/2 = −2.",
          "Une erreur de signe lors du passage d'un membre à l'autre.",
          "Ce serait la solution de 2x = 10 : la constante 12 n'a pas été reportée correctement.",
        ],
      },
      {
        question: "Pour x² − 6x + 5 = 0, combien y a-t-il de solutions réelles ?",
        options: ["Deux (1 et 5)", "Une seule (3)", "Aucune", "Deux (−1 et −5)"],
        answerIndex: 0,
        explanation:
          "Δ = 36 − 20 = 16 > 0, donc deux racines : (6 ± 4)/2, soit 1 et 5. Contrôle : leur somme vaut 6 = −b/a et leur produit 5 = c/a.",
        optionNotes: [
          null,
          "3 est l'abscisse du sommet de la parabole (−b/2a), pas une racine : la racine double n'existe que si Δ = 0.",
          "Δ est strictement positif : il y a bien deux solutions réelles.",
          "Le produit des racines vaut c/a = +5 et leur somme +6 : les deux racines sont positives.",
        ],
      },
      {
        question:
          "Série des durées de traitement : 3, 4, 4, 5, 9, 12, 40 jours. Quelle affirmation est exacte ?",
        options: [
          "La médiane est 5 et la moyenne 11",
          "La médiane et la moyenne valent toutes deux 5",
          "La médiane est 9 et la moyenne 5",
          "La médiane est 11 et la moyenne 5",
        ],
        answerIndex: 0,
        explanation:
          "La série est ordonnée : la 4ᵉ valeur sur 7 est 5, c'est la médiane. La moyenne vaut 77/7 = 11, tirée vers le haut par la valeur atypique 40.",
        optionNotes: [
          null,
          "La valeur extrême 40 empêche moyenne et médiane de coïncider : la moyenne est très supérieure.",
          "9 est la 5ᵉ valeur, pas la valeur centrale d'une série de 7 termes.",
          "Les deux indicateurs sont inversés : 11 est la moyenne, 5 la médiane.",
        ],
      },
      {
        question:
          "Un taux passe de 12 % à 15 %. Comment le décrire correctement ?",
        options: [
          "Une hausse de 3 points, soit +25 %",
          "Une hausse de 3 %",
          "Une hausse de 25 points",
          "Une hausse de 3 points, soit +3 %",
        ],
        answerIndex: 0,
        explanation:
          "L'écart entre deux pourcentages se dit en points : +3 points. L'évolution relative est 3/12 = 0,25, soit +25 %.",
        optionNotes: [
          null,
          "« Hausse de 3 % » signifierait 12 × 1,03 = 12,36 %, ce qui n'est pas le cas : la confusion point/pourcentage est très sanctionnée.",
          "Les points mesurent l'écart absolu (3), jamais l'évolution relative.",
          "L'écart en points est juste, mais l'évolution relative est de 25 %, pas de 3 %.",
        ],
      },
      {
        question:
          "Deux services ont une moyenne de 60 % et 80 % de satisfaction, sur 100 et 400 usagers. Quelle est la moyenne d'ensemble ?",
        options: ["76 %", "70 %", "72 %", "80 %"],
        answerIndex: 0,
        explanation:
          "Il faut pondérer par les effectifs : (100 × 60 + 400 × 80) / 500 = (6 000 + 32 000)/500 = 76 %.",
        optionNotes: [
          null,
          "70 % est la moyenne arithmétique simple des deux taux : elle ignore que le second service pèse quatre fois plus.",
          "Ce résultat correspondrait à une pondération incorrecte des effectifs.",
          "80 % est le taux du seul second service.",
        ],
      },
    ],
  },
  {
    id: "maths-analyse",
    title: "Maths — Analyse et probabilités",
    description:
      "Dérivées, variations, suites, probabilités conditionnelles et lois usuelles : le niveau des épreuves scientifiques de catégorie A.",
    level: "Perfectionnement",
    questions: [
      {
        question: "Quelle est la dérivée de f(x) = x·ln(x) sur ]0 ; +∞[ ?",
        options: ["ln(x) + 1", "1/x", "ln(x)", "x/ln(x)"],
        answerIndex: 0,
        explanation:
          "C'est un produit : (uv)' = u'v + uv' avec u = x et v = ln x, soit 1 × ln x + x × (1/x) = ln x + 1.",
        optionNotes: [
          null,
          "C'est la dérivée de ln(x) seule : le facteur x n'a pas été dérivé comme un produit.",
          "C'est le résultat si l'on dérive uniquement le facteur x, en oubliant le second terme.",
          "Cette expression est la dérivée d'aucune des fonctions proposées ; elle confond produit et quotient.",
        ],
      },
      {
        question:
          "C(q) = q² − 18q + 120. Pour quelle valeur de q le coût est-il minimal ?",
        options: ["q = 9", "q = 18", "q = 0", "q = 120"],
        answerIndex: 0,
        explanation:
          "C'(q) = 2q − 18 s'annule en q = 9, en passant du négatif au positif : c'est bien un minimum, de valeur C(9) = 39.",
        optionNotes: [
          "",
          "18 est le coefficient b, pas le point d'annulation : celui-ci est −b/2a = 9.",
          "En 0 la dérivée vaut −18, la fonction décroît encore : ce n'est pas un minimum.",
          "120 est l'ordonnée à l'origine (coût fixe), pas un volume optimal.",
        ],
      },
      {
        question: "Une dotation de 100 000 € progresse de 2 % par an. Que vaut-elle au bout de 10 ans ?",
        options: [
          "Environ 121 900 €",
          "120 000 €",
          "Environ 102 000 €",
          "Environ 110 000 €",
        ],
        answerIndex: 0,
        explanation:
          "Suite géométrique : 100 000 × 1,02¹⁰. Comme 1,02¹⁰ ≈ 1,219, la dotation atteint environ 121 900 €. Les intérêts composés dépassent la simple addition des taux.",
        optionNotes: [
          null,
          "C'est le calcul en intérêts simples (10 × 2 % = 20 %) : il ignore la capitalisation.",
          "C'est la valeur après un seul an.",
          "C'est le résultat d'une hausse de 10 %, sans lien avec l'énoncé.",
        ],
      },
      {
        question:
          "On tire au hasard un dossier parmi 200, dont 80 sont urgents et 50 sont à la fois urgents et incomplets. Quelle est la probabilité qu'un dossier soit incomplet sachant qu'il est urgent ?",
        options: ["0,625", "0,25", "0,4", "0,16"],
        answerIndex: 0,
        explanation:
          "P(I|U) = P(I ∩ U)/P(U) = (50/200)/(80/200) = 50/80 = 0,625.",
        optionNotes: [
          null,
          "0,25 = 50/200 : c'est P(I ∩ U), la probabilité conjointe, pas la conditionnelle.",
          "0,4 = 80/200 : c'est P(U), la probabilité d'être urgent.",
          "0,16 est le produit 0,25 × 0,64, qui ne correspond à aucune des quantités demandées.",
        ],
      },
      {
        question:
          "X suit la loi binomiale B(50 ; 0,2). Quelle est son espérance ?",
        options: ["10", "8", "0,2", "50"],
        answerIndex: 0,
        explanation:
          "Pour une binomiale, E(X) = n·p = 50 × 0,2 = 10. Sa variance vaut n·p·(1 − p) = 8.",
        optionNotes: [
          null,
          "8 est la variance n·p·(1 − p), pas l'espérance.",
          "0,2 est la probabilité de succès d'une seule épreuve.",
          "50 est le nombre d'épreuves.",
        ],
      },
    ],
  },
  {
    id: "maths-ingenieur",
    title: "Maths — Ingénieur territorial",
    description:
      "Matrices, déterminants, intégrales et équations différentielles appliquées aux réseaux, à la thermique et aux structures.",
    level: "Perfectionnement",
    questions: [
      {
        question: "Que signifie det(A) = 0 pour un système A·X = B ?",
        options: [
          "Le système n'a pas de solution unique",
          "Le système a toujours une solution unique",
          "La matrice A est inversible",
          "Le système n'a jamais de solution",
        ],
        answerIndex: 0,
        explanation:
          "Un déterminant nul signifie que les colonnes sont liées : A n'est pas inversible. Le système est alors soit impossible, soit indéterminé (une infinité de solutions), mais jamais de solution unique.",
        optionNotes: [
          null,
          "C'est exactement le cas contraire : la solution unique exige det(A) ≠ 0.",
          "Une matrice est inversible si et seulement si son déterminant est non nul.",
          "Il peut exister une infinité de solutions : l'absence de solution n'est que l'un des deux cas possibles.",
        ],
      },
      {
        question: "Quelle est une primitive de f(x) = e^(3x) ?",
        options: ["e^(3x)/3", "3·e^(3x)", "e^(3x)", "e^(3x)/x"],
        answerIndex: 0,
        explanation:
          "∫ e^(ax) dx = e^(ax)/a + C. Ici a = 3, la primitive est e^(3x)/3. On le vérifie en dérivant : (e^(3x)/3)' = 3·e^(3x)/3 = e^(3x).",
        optionNotes: [
          null,
          "C'est la dérivée de e^(3x), pas sa primitive : on a multiplié au lieu de diviser.",
          "e^(3x) est sa propre dérivée à un facteur 3 près ; la primitive exige de diviser par 3.",
          "Diviser par x n'a aucun fondement : x n'est pas une constante.",
        ],
      },
      {
        question:
          "Un bâtiment se refroidit selon y' + y/τ = 0 avec τ = 10 h. Au bout de combien de temps 95 % de l'évolution est-elle réalisée ?",
        options: ["Environ 30 h", "10 h", "95 h", "Environ 5 h"],
        answerIndex: 0,
        explanation:
          "Après 3τ, il reste e⁻³ ≈ 5 % de l'écart initial : 95 % de l'évolution est faite, soit 30 heures ici. À 5τ, le régime est considéré comme stabilisé.",
        optionNotes: [
          null,
          "Après une constante de temps, seuls 63 % de l'évolution sont réalisés (1 − e⁻¹).",
          "95 est un pourcentage, pas une durée : la constante de temps est le seul repère temporel.",
          "5 h correspond à τ/2, soit environ 39 % de l'évolution.",
        ],
      },
      {
        question:
          "Que représente une valeur propre λ d'une matrice A ?",
        options: [
          "Un facteur d'étirement le long d'une direction propre : A·v = λ·v",
          "Le déterminant de A",
          "La somme des coefficients de A",
          "Un coefficient quelconque de la diagonale",
        ],
        answerIndex: 0,
        explanation:
          "Un vecteur propre v est une direction que A ne fait que dilater ou contracter : A·v = λ·v. Les λ se trouvent en résolvant det(A − λI) = 0. Applications : modes propres d'un ouvrage, régimes stationnaires d'un réseau.",
        optionNotes: [
          null,
          "Le déterminant est le produit des valeurs propres, pas l'une d'elles.",
          "La somme des coefficients n'a pas de signification spectrale ; c'est la somme des valeurs propres qui vaut la trace (somme des termes diagonaux).",
          "Les coefficients diagonaux ne sont les valeurs propres que si la matrice est triangulaire ou diagonale.",
        ],
      },
      {
        question:
          "Pour a·y'' + b·y' + c·y = 0, quel régime correspond à un discriminant négatif de l'équation caractéristique ?",
        options: [
          "Un régime oscillatoire amorti",
          "Un régime apériodique",
          "Un régime critique",
          "Aucune solution",
        ],
        answerIndex: 0,
        explanation:
          "Des racines complexes conjuguées donnent des solutions en e^(αt)·(A·cos ωt + B·sin ωt) : le système oscille en s'amortissant. Δ > 0 donne l'apériodique, Δ = 0 le régime critique, le plus rapide sans dépassement.",
        optionNotes: [
          null,
          "Le régime apériodique correspond à deux racines réelles distinctes, donc Δ > 0.",
          "Le régime critique correspond à la racine double, donc Δ = 0.",
          "Une équation différentielle linéaire homogène admet toujours des solutions, y compris avec Δ < 0.",
        ],
      },
    ],
  },
  {
    id: "maths-expert",
    title: "Maths — Ingénieur en chef",
    description:
      "Optimisation sous contrainte, analyse numérique, statistique inférentielle et graphes : les outils d'aide à la décision.",
    level: "Perfectionnement",
    questions: [
      {
        question: "Où se situe l'optimum d'un programme linéaire ?",
        options: [
          "Sur un sommet du domaine des solutions admissibles",
          "Toujours au centre du domaine",
          "En dehors du domaine admissible",
          "Toujours à l'origine",
        ],
        answerIndex: 0,
        explanation:
          "La fonction objectif étant linéaire, son optimum sur un polyèdre convexe est atteint en un sommet (ou sur toute une arête si la courbe de niveau lui est parallèle). C'est le principe de l'algorithme du simplexe.",
        optionNotes: [
          null,
          "Le centre du domaine n'a aucune propriété d'optimalité pour une fonction linéaire.",
          "Une solution hors du domaine viole une contrainte : elle est inadmissible par définition.",
          "L'origine n'est optimale que dans le cas dégénéré où aucune activité n'est rentable.",
        ],
      },
      {
        question:
          "Que mesure le multiplicateur de Lagrange λ associé à une contrainte ?",
        options: [
          "La sensibilité de l'optimum à un relâchement d'une unité de la contrainte",
          "La valeur de la contrainte à l'optimum",
          "L'erreur de la méthode numérique",
          "Le nombre d'itérations nécessaires",
        ],
        answerIndex: 0,
        explanation:
          "λ est le prix marginal (« prix fictif ») de la contrainte : il indique de combien l'objectif s'améliorerait si l'on disposait d'une unité de ressource supplémentaire. C'est l'argument d'arbitrage budgétaire attendu par un jury.",
        optionNotes: [
          null,
          "À l'optimum sous contrainte d'égalité, la contrainte est saturée : sa valeur est zéro, ce qui n'apporte aucune information de décision.",
          "λ est un objet du modèle, sans rapport avec l'erreur numérique.",
          "Le nombre d'itérations dépend de l'algorithme choisi, pas du lagrangien.",
        ],
      },
      {
        question:
          "Un sondage sur 400 personnes donne 60 % de satisfaits. Quelle est la marge d'erreur approximative à 95 % ?",
        options: ["±4,8 points", "±0,6 point", "±10 points", "±1,96 point"],
        answerIndex: 0,
        explanation:
          "1,96 × √(0,6 × 0,4 / 400) = 1,96 × 0,0245 ≈ 0,048, soit ±4,8 points. La précision évolue en 1/√n : quadrupler l'échantillon divise la marge par deux.",
        optionNotes: [
          null,
          "Cette valeur oublie la racine carrée : elle divise par n au lieu de √n.",
          "±10 points correspondrait à un échantillon d'environ 100 personnes.",
          "1,96 est le coefficient de la loi normale à 95 %, pas la marge elle-même.",
        ],
      },
      {
        question:
          "Une p-valeur de 0,30 dans un test signifie :",
        options: [
          "Les données sont compatibles avec l'hypothèse nulle : on ne peut pas la rejeter",
          "L'hypothèse nulle est vraie à 70 %",
          "Il y a 30 % de chances que l'effet étudié existe",
          "L'absence d'effet est démontrée",
        ],
        answerIndex: 0,
        explanation:
          "La p-valeur est la probabilité d'observer des données au moins aussi extrêmes si H₀ était vraie. Au-dessus du seuil, on conserve H₀ faute de preuve : une absence de preuve n'est pas une preuve d'absence.",
        optionNotes: [
          null,
          "La p-valeur ne donne pas la probabilité que H₀ soit vraie : c'est l'inversion la plus courante et la plus sanctionnée.",
          "Elle ne mesure pas non plus la probabilité d'existence de l'effet.",
          "Conserver H₀ signifie seulement que les données ne suffisent pas à la rejeter, peut-être faute d'échantillon.",
        ],
      },
      {
        question:
          "Quel algorithme donne le réseau de desserte de coût total minimal reliant tous les points d'un graphe pondéré ?",
        options: [
          "Kruskal (arbre couvrant minimal)",
          "Dijkstra",
          "Newton",
          "Le simplexe",
        ],
        answerIndex: 0,
        explanation:
          "Kruskal (ou Prim) construit l'arbre couvrant de poids minimal : tous les sommets reliés, coût total le plus faible. C'est le modèle du tracé d'un réseau d'eau ou de fibre.",
        optionNotes: [
          null,
          "Dijkstra donne le plus court chemin entre deux sommets, pas le réseau complet le moins coûteux.",
          "Newton est une méthode de résolution d'équations numériques, sans rapport avec les graphes.",
          "Le simplexe résout les programmes linéaires ; il peut modéliser le problème, mais ce n'est pas l'algorithme dédié.",
        ],
      },
    ],
  },
];
