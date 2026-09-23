export type MathNiveauId =
  | "fondamentaux"
  | "consolidation"
  | "analyse"
  | "ingenieur"
  | "expert";

export interface MathNiveau {
  id: MathNiveauId;
  title: string;
  public: string;
  intro: string;
  /** Identifiant du thème de quiz associé (voir mathsQuiz.ts). */
  quizThemeId: string;
}

export interface MathSection {
  titre: string;
  paragraphes: string[];
  /** Formules ou règles clés, affichées en évidence. */
  formules?: string[];
}

export interface MathExemple {
  enonce: string;
  etapes: string[];
  resultat: string;
}

export interface MathCours {
  id: string;
  niveau: MathNiveauId;
  title: string;
  resume: string;
  duree: string;
  objectifs: string[];
  sections: MathSection[];
  exemples: MathExemple[];
  aRetenir: string[];
  pieges: string[];
}

export const mathNiveaux: MathNiveau[] = [
  {
    id: "fondamentaux",
    title: "Niveau 1 — Fondamentaux",
    public: "Concours de catégorie C et remise à niveau",
    intro:
      "Le calcul de tous les jours : opérations, fractions, pourcentages, proportionnalité, unités et surfaces. C'est ce qui est réellement évalué aux épreuves de « mathématiques appliquées » des concours d'adjoint technique, d'adjoint administratif ou d'agent de maîtrise.",
    quizThemeId: "maths-fondamentaux",
  },
  {
    id: "consolidation",
    title: "Niveau 2 — Consolidation",
    public: "Concours de catégorie B (rédacteur, technicien)",
    intro:
      "Équations, systèmes, lecture de tableaux et de graphiques, statistiques descriptives : les outils indispensables pour traiter un dossier chiffré et commenter des données budgétaires.",
    quizThemeId: "maths-consolidation",
  },
  {
    id: "analyse",
    title: "Niveau 3 — Analyse et probabilités",
    public: "Catégorie A, épreuves scientifiques",
    intro:
      "Fonctions, limites, dérivées, suites et probabilités. On passe du calcul à la modélisation : décrire un phénomène par une fonction et en tirer des conclusions.",
    quizThemeId: "maths-analyse",
  },
  {
    id: "ingenieur",
    title: "Niveau 4 — Ingénieur territorial",
    public: "Concours d'ingénieur, épreuves techniques",
    intro:
      "Intégration, équations différentielles, algèbre linéaire et calcul matriciel : les mathématiques utilisées en hydraulique, thermique, structures et traitement de données.",
    quizThemeId: "maths-ingenieur",
  },
  {
    id: "expert",
    title: "Niveau 5 — Ingénieur en chef / général",
    public: "Concours d'ingénieur en chef, épreuves de haut niveau",
    intro:
      "Analyse numérique, optimisation sous contrainte, statistique inférentielle et théorie des graphes : les méthodes de décision et de dimensionnement à l'échelle d'une direction technique.",
    quizThemeId: "maths-expert",
  },
];

export const mathCours: MathCours[] = [
  {
    id: "operations-fractions",
    niveau: "fondamentaux",
    title: "Opérations, fractions et priorités de calcul",
    resume:
      "Reprendre les quatre opérations, l'ordre des calculs et la manipulation des fractions sans calculatrice.",
    duree: "30 minutes",
    objectifs: [
      "Appliquer les priorités opératoires sans hésiter",
      "Additionner, multiplier et simplifier des fractions",
      "Convertir une fraction en nombre décimal et en pourcentage",
    ],
    sections: [
      {
        titre: "L'ordre des opérations",
        paragraphes: [
          "Un calcul se lit dans un ordre imposé : d'abord ce qui est entre parenthèses, puis les puissances, puis les multiplications et divisions (de gauche à droite), et enfin les additions et soustractions.",
          "C'est la source d'erreur numéro un aux concours : 2 + 3 × 4 vaut 14 et non 20, parce que la multiplication passe avant l'addition.",
        ],
        formules: ["Parenthèses → puissances → × et ÷ → + et −"],
      },
      {
        titre: "Les fractions",
        paragraphes: [
          "Une fraction a/b est un quotient : a parts sur b parts égales. On peut multiplier ou diviser le numérateur et le dénominateur par un même nombre non nul sans changer sa valeur : c'est la simplification.",
          "Pour additionner deux fractions, il faut le même dénominateur. Pour multiplier, on multiplie les numérateurs entre eux et les dénominateurs entre eux. Pour diviser, on multiplie par l'inverse.",
        ],
        formules: [
          "a/b + c/d = (a×d + c×b) / (b×d)",
          "a/b × c/d = (a×c) / (b×d)",
          "a/b ÷ c/d = a/b × d/c",
        ],
      },
      {
        titre: "Passer d'une écriture à l'autre",
        paragraphes: [
          "Une fraction devient un décimal en divisant le numérateur par le dénominateur, et un pourcentage en multipliant ce décimal par 100. Trois quarts s'écrivent 3/4 = 0,75 = 75 %.",
          "Savoir passer instantanément de 1/2, 1/4, 1/5, 1/10 à leur pourcentage fait gagner un temps considérable en épreuve.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Un service a consommé 3/8 de son enveloppe de fournitures, puis 1/4 de plus. Quelle part de l'enveloppe reste-t-il ?",
        etapes: [
          "Mettre au même dénominateur : 1/4 = 2/8.",
          "Additionner les consommations : 3/8 + 2/8 = 5/8.",
          "Retrancher du total : 8/8 − 5/8 = 3/8.",
        ],
        resultat: "Il reste 3/8 de l'enveloppe, soit 0,375 ou 37,5 %.",
      },
    ],
    aRetenir: [
      "La multiplication et la division passent toujours avant l'addition et la soustraction.",
      "On n'additionne des fractions qu'après les avoir mises au même dénominateur.",
      "Diviser par une fraction revient à multiplier par son inverse.",
    ],
    pieges: [
      "Additionner les dénominateurs entre eux (3/8 + 1/4 ne fait pas 4/12).",
      "Oublier qu'une soustraction se lit de gauche à droite : 10 − 3 − 2 = 5, pas 9.",
    ],
  },
  {
    id: "pourcentages-proportions",
    niveau: "fondamentaux",
    title: "Pourcentages, proportionnalité et règle de trois",
    resume:
      "Calculer une remise, une hausse, un taux d'évolution et compléter un tableau de proportionnalité.",
    duree: "35 minutes",
    objectifs: [
      "Appliquer et retrouver un pourcentage",
      "Calculer un taux d'évolution et un coefficient multiplicateur",
      "Utiliser la règle de trois dans un problème concret",
    ],
    sections: [
      {
        titre: "Prendre un pourcentage",
        paragraphes: [
          "Prendre p % d'une quantité, c'est la multiplier par p/100. 20 % de 850 € = 850 × 0,20 = 170 €.",
          "Augmenter de p % revient à multiplier par (1 + p/100) ; diminuer de p % revient à multiplier par (1 − p/100). Ce nombre s'appelle le coefficient multiplicateur.",
        ],
        formules: [
          "Valeur finale = valeur initiale × (1 + t/100)",
          "Taux d'évolution t = (arrivée − départ) / départ × 100",
        ],
      },
      {
        titre: "Enchaîner deux évolutions",
        paragraphes: [
          "Deux évolutions successives ne s'additionnent pas : elles se multiplient. Une hausse de 10 % suivie d'une baisse de 10 % donne 1,10 × 0,90 = 0,99, soit une baisse finale de 1 %.",
          "Pour revenir au point de départ après une hausse de 25 %, il faut baisser de 20 % (1 / 1,25 = 0,80).",
        ],
      },
      {
        titre: "La proportionnalité",
        paragraphes: [
          "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant par un nombre fixe, le coefficient de proportionnalité. Un tableau de proportionnalité se complète par produits en croix : si a/b = c/d alors a × d = b × c.",
          "La règle de trois en découle : pour trouver la quatrième valeur, on multiplie les deux valeurs connues « en diagonale » et on divise par la troisième.",
        ],
        formules: ["x = (valeur connue × valeur cible) / valeur de référence"],
      },
    ],
    exemples: [
      {
        enonce:
          "Le budget de fonctionnement d'un service passe de 240 000 € à 262 800 €. Quel est le taux d'évolution ?",
        etapes: [
          "Calculer la variation : 262 800 − 240 000 = 22 800 €.",
          "Rapporter à la valeur de départ : 22 800 / 240 000 = 0,095.",
          "Convertir en pourcentage : 0,095 × 100 = 9,5 %.",
        ],
        resultat: "Le budget augmente de 9,5 %.",
      },
      {
        enonce:
          "4 agents nettoient 600 m² en 3 heures. Combien de m² nettoieront 6 agents en 2 heures, au même rythme ?",
        etapes: [
          "Rendement par agent et par heure : 600 / (4 × 3) = 50 m².",
          "Multiplier par le nouvel effectif et la nouvelle durée : 50 × 6 × 2 = 600.",
        ],
        resultat: "600 m², soit la même surface.",
      },
    ],
    aRetenir: [
      "Le coefficient multiplicateur est l'outil le plus rapide : 1 + t/100 pour une hausse, 1 − t/100 pour une baisse.",
      "Des évolutions successives se multiplient, jamais ne s'additionnent.",
      "Un taux d'évolution se calcule toujours par rapport à la valeur de départ.",
    ],
    pieges: [
      "Confondre « augmenter de 20 % » et « augmenter à 20 % ».",
      "Croire qu'une baisse de 30 % s'annule avec une hausse de 30 %.",
    ],
  },
  {
    id: "unites-surfaces-volumes",
    niveau: "fondamentaux",
    title: "Unités, surfaces, volumes et échelles",
    resume:
      "Convertir sans erreur, calculer une surface à revêtir, un volume de terrassement et lire une échelle de plan.",
    duree: "35 minutes",
    objectifs: [
      "Maîtriser les conversions de longueur, surface, volume et masse",
      "Calculer les aires et volumes usuels",
      "Exploiter une échelle de plan",
    ],
    sections: [
      {
        titre: "Les conversions",
        paragraphes: [
          "Pour les longueurs, chaque changement d'unité vaut un facteur 10. Pour les surfaces, c'est un facteur 100 (1 m² = 10 000 cm²). Pour les volumes, un facteur 1 000 (1 m³ = 1 000 dm³ = 1 000 litres).",
          "Le repère le plus utile en collectivité : 1 m³ d'eau = 1 000 litres = 1 tonne.",
        ],
        formules: ["1 m² = 10 000 cm²", "1 m³ = 1 000 L", "1 ha = 10 000 m²"],
      },
      {
        titre: "Aires et volumes usuels",
        paragraphes: [
          "Rectangle : longueur × largeur. Triangle : base × hauteur / 2. Disque : π × r². Un terrain complexe se découpe en rectangles et triangles, puis on additionne.",
          "Pavé droit : longueur × largeur × hauteur. Cylindre : π × r² × hauteur. Une tranchée est un pavé : sa longueur × sa largeur × sa profondeur donne le volume à évacuer.",
        ],
        formules: [
          "Aire du disque = π × r²",
          "Volume du cylindre = π × r² × h",
          "Périmètre du cercle = 2 × π × r",
        ],
      },
      {
        titre: "Les échelles",
        paragraphes: [
          "Une échelle 1/200 signifie que 1 cm sur le plan représente 200 cm, soit 2 m sur le terrain. Distance réelle = distance mesurée × dénominateur de l'échelle.",
          "Attention : une échelle s'applique aux longueurs. Sur les surfaces, elle est élevée au carré — au 1/200, 1 cm² représente 4 m².",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Une tranchée mesure 45 m de long, 0,60 m de large et 0,80 m de profondeur. Combien de camions de 6 m³ faut-il pour évacuer les déblais ?",
        etapes: [
          "Volume : 45 × 0,60 × 0,80 = 21,6 m³.",
          "Nombre de camions : 21,6 / 6 = 3,6.",
          "On arrondit toujours à l'entier supérieur pour un transport.",
        ],
        resultat: "4 camions.",
      },
    ],
    aRetenir: [
      "Surfaces : facteur 100 entre deux unités voisines. Volumes : facteur 1 000.",
      "1 m³ d'eau = 1 000 litres = 1 tonne.",
      "Un résultat de transport ou de matériaux s'arrondit à l'entier supérieur.",
    ],
    pieges: [
      "Convertir une surface comme une longueur (1 m² ≠ 100 cm²).",
      "Oublier d'homogénéiser les unités avant de multiplier (des cm avec des m).",
    ],
  },
  {
    id: "equations-systemes",
    niveau: "consolidation",
    title: "Équations, inéquations et systèmes",
    resume:
      "Mettre un problème en équation, résoudre le premier degré, le second degré et un système à deux inconnues.",
    duree: "45 minutes",
    objectifs: [
      "Traduire un énoncé en équation",
      "Résoudre une équation du premier et du second degré",
      "Résoudre un système par substitution et par combinaison",
    ],
    sections: [
      {
        titre: "Le premier degré",
        paragraphes: [
          "Résoudre ax + b = 0, c'est isoler l'inconnue : on retire b des deux côtés, puis on divise par a. La solution est x = −b/a, valable si a ≠ 0.",
          "Une inéquation se traite de la même façon, avec une règle supplémentaire : multiplier ou diviser les deux membres par un nombre négatif inverse le sens de l'inégalité.",
        ],
        formules: ["ax + b = 0 ⟹ x = −b/a"],
      },
      {
        titre: "Le second degré",
        paragraphes: [
          "Pour ax² + bx + c = 0, on calcule le discriminant Δ = b² − 4ac. Si Δ > 0, deux solutions ; si Δ = 0, une solution double ; si Δ < 0, aucune solution réelle.",
          "La somme des racines vaut −b/a et leur produit c/a : un contrôle rapide de vos résultats.",
        ],
        formules: ["Δ = b² − 4ac", "x = (−b ± √Δ) / (2a)"],
      },
      {
        titre: "Les systèmes à deux inconnues",
        paragraphes: [
          "La substitution consiste à exprimer une inconnue en fonction de l'autre à partir d'une équation, puis à l'injecter dans la seconde.",
          "La combinaison linéaire consiste à multiplier les équations pour faire disparaître une inconnue par addition. C'est souvent plus rapide quand les coefficients sont simples.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Une commune achète 12 tables et 40 chaises pour 3 160 €. Une table coûte trois fois le prix d'une chaise. Quels sont les prix unitaires ?",
        etapes: [
          "Poser c le prix d'une chaise : la table vaut 3c.",
          "Équation : 12 × 3c + 40c = 3 160, soit 36c + 40c = 3 160.",
          "76c = 3 160, donc c = 41,58… € — l'énoncé impose d'arrondir : c ≈ 41,58 €.",
          "Table : 3 × 41,58 ≈ 124,74 €.",
        ],
        resultat: "Chaise ≈ 41,58 € et table ≈ 124,74 €.",
      },
    ],
    aRetenir: [
      "Poser clairement l'inconnue en une phrase avant d'écrire l'équation : le jury valorise cette étape.",
      "Le signe d'une inéquation s'inverse quand on multiplie par un négatif.",
      "Δ = b² − 4ac décide du nombre de solutions du second degré.",
    ],
    pieges: [
      "Oublier de vérifier la solution dans l'énoncé de départ.",
      "Diviser par a sans s'assurer que a n'est pas nul.",
    ],
  },
  {
    id: "statistiques-descriptives",
    niveau: "consolidation",
    title: "Statistiques descriptives et lecture de données",
    resume:
      "Moyenne, médiane, quartiles, écart-type et commentaire d'un tableau ou d'un graphique budgétaire.",
    duree: "45 minutes",
    objectifs: [
      "Calculer les indicateurs de position et de dispersion",
      "Choisir l'indicateur pertinent selon la série",
      "Commenter un tableau de données sans le paraphraser",
    ],
    sections: [
      {
        titre: "Position : moyenne et médiane",
        paragraphes: [
          "La moyenne est la somme des valeurs divisée par leur nombre ; pondérée, chaque valeur est multipliée par son effectif. La médiane partage la série ordonnée en deux moitiés de même effectif.",
          "La médiane résiste aux valeurs extrêmes, pas la moyenne. Sur des salaires ou des surfaces de logement, la médiane décrit mieux la réalité.",
        ],
        formules: [
          "Moyenne pondérée = Σ(nᵢ × xᵢ) / Σnᵢ",
        ],
      },
      {
        titre: "Dispersion : étendue, quartiles, écart-type",
        paragraphes: [
          "L'étendue est la différence entre la plus grande et la plus petite valeur. Les quartiles Q1, Q2 (médiane) et Q3 découpent la série en quatre parts égales ; l'écart interquartile Q3 − Q1 contient la moitié centrale des observations.",
          "L'écart-type mesure l'écart moyen à la moyenne : plus il est grand, plus la série est hétérogène. C'est la racine carrée de la variance.",
        ],
        formules: ["Variance = Σ(xᵢ − moyenne)² / n", "Écart-type = √Variance"],
      },
      {
        titre: "Commenter des données",
        paragraphes: [
          "Un bon commentaire suit trois temps : la tendance générale, les ruptures ou écarts marquants, puis l'interprétation prudente (corrélation n'est pas causalité).",
          "Citez toujours les ordres de grandeur et les unités, et méfiez-vous des graphiques dont l'axe ne part pas de zéro : ils amplifient visuellement les écarts.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Durées de traitement de 7 dossiers, en jours : 3, 4, 4, 5, 9, 12, 40. Moyenne ou médiane ?",
        etapes: [
          "Moyenne : (3+4+4+5+9+12+40)/7 = 77/7 = 11 jours.",
          "Médiane : la série est ordonnée, la 4ᵉ valeur est 5 jours.",
          "La valeur 40 tire la moyenne vers le haut : 5 dossiers sur 7 sont traités en moins de 11 jours.",
        ],
        resultat:
          "La médiane (5 jours) décrit mieux le service ; la moyenne (11 jours) signale l'existence d'un dossier atypique.",
      },
    ],
    aRetenir: [
      "Moyenne sensible aux extrêmes, médiane robuste.",
      "L'écart-type se lit toujours avec la moyenne : 500 € ± 20 € n'est pas 500 € ± 300 €.",
      "Un pourcentage sans effectif de référence n'a aucune valeur démonstrative.",
    ],
    pieges: [
      "Faire la moyenne de pourcentages sans les pondérer par les effectifs.",
      "Confondre variation en points et variation en pourcentage.",
    ],
  },
  {
    id: "fonctions-derivees",
    niveau: "analyse",
    title: "Fonctions, limites et dérivées",
    resume:
      "Étudier une fonction, calculer une dérivée, dresser un tableau de variations et trouver un optimum.",
    duree: "1 heure",
    objectifs: [
      "Calculer les dérivées usuelles et composées",
      "Dresser un tableau de variations",
      "Déterminer un maximum ou un minimum sur un problème appliqué",
    ],
    sections: [
      {
        titre: "Dérivées usuelles",
        paragraphes: [
          "La dérivée mesure la vitesse de variation d'une fonction. Elle donne le coefficient directeur de la tangente en chaque point.",
          "Il faut connaître par cœur les dérivées de base et les trois règles d'opération : produit, quotient et composée.",
        ],
        formules: [
          "(xⁿ)' = n·xⁿ⁻¹",
          "(eˣ)' = eˣ, (ln x)' = 1/x",
          "(uv)' = u'v + uv'",
          "(u/v)' = (u'v − uv') / v²",
          "(u∘v)' = v' × u'(v)",
        ],
      },
      {
        titre: "Variations et extremums",
        paragraphes: [
          "Le signe de la dérivée donne le sens de variation : f' > 0 la fonction croît, f' < 0 elle décroît. Un extremum local se trouve là où f' s'annule en changeant de signe.",
          "En problème appliqué (coût minimal, surface maximale), la démarche est toujours la même : exprimer la grandeur à optimiser en fonction d'une seule variable, dériver, annuler, conclure par un tableau de signes.",
        ],
      },
      {
        titre: "Limites et comportement asymptotique",
        paragraphes: [
          "Les limites décrivent le comportement aux bornes du domaine. En cas de forme indéterminée, on factorise par le terme dominant, ou on utilise les croissances comparées : l'exponentielle l'emporte sur toute puissance, qui l'emporte sur le logarithme.",
        ],
        formules: ["eˣ/xⁿ → +∞ et (ln x)/x → 0 quand x → +∞"],
      },
    ],
    exemples: [
      {
        enonce:
          "Le coût total d'un service, en milliers d'euros, s'écrit C(q) = q² − 18q + 120 pour q prestations. Pour quel volume le coût est-il minimal ?",
        etapes: [
          "Dériver : C'(q) = 2q − 18.",
          "Annuler : 2q − 18 = 0 donne q = 9.",
          "C' est négative avant 9 et positive après : c'est bien un minimum.",
          "Valeur : C(9) = 81 − 162 + 120 = 39.",
        ],
        resultat: "Coût minimal de 39 000 € pour 9 prestations.",
      },
    ],
    aRetenir: [
      "Le signe de f' donne les variations de f, pas sa valeur.",
      "Optimiser = exprimer, dériver, annuler, justifier par le signe.",
      "Croissances comparées : exponentielle > puissances > logarithme.",
    ],
    pieges: [
      "Conclure à un extremum dès que f' s'annule, sans étudier le changement de signe.",
      "Oublier le domaine de définition (ln défini seulement pour x > 0).",
    ],
  },
  {
    id: "probabilites-suites",
    niveau: "analyse",
    title: "Suites et probabilités",
    resume:
      "Suites arithmétiques et géométriques, probabilités conditionnelles, loi binomiale et loi normale.",
    duree: "1 heure",
    objectifs: [
      "Reconnaître et exploiter une suite arithmétique ou géométrique",
      "Appliquer les probabilités conditionnelles et l'indépendance",
      "Utiliser la loi binomiale et la loi normale",
    ],
    sections: [
      {
        titre: "Suites",
        paragraphes: [
          "Une suite est arithmétique quand on ajoute toujours la même raison r ; géométrique quand on multiplie toujours par la même raison q. Une évolution annuelle de +2 % engendre une suite géométrique de raison 1,02.",
        ],
        formules: [
          "Arithmétique : uₙ = u₀ + n·r",
          "Géométrique : uₙ = u₀ × qⁿ",
          "Somme géométrique : u₀ × (1 − qⁿ⁺¹)/(1 − q)",
        ],
      },
      {
        titre: "Probabilités",
        paragraphes: [
          "P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Deux événements sont indépendants lorsque P(A ∩ B) = P(A) × P(B).",
          "La probabilité conditionnelle P(A|B) = P(A ∩ B)/P(B) se lit « probabilité de A sachant B ». La formule des probabilités totales permet de recomposer P(A) à partir d'une partition.",
        ],
        formules: [
          "P(A|B) = P(A ∩ B) / P(B)",
          "P(A) = Σ P(A|Bᵢ) × P(Bᵢ)",
        ],
      },
      {
        titre: "Lois usuelles",
        paragraphes: [
          "La loi binomiale B(n, p) compte le nombre de succès sur n épreuves indépendantes de probabilité p. Son espérance vaut n·p et sa variance n·p·(1 − p).",
          "La loi normale décrit les phénomènes continus regroupés autour d'une moyenne : environ 68 % des valeurs sont à moins d'un écart-type, 95 % à moins de deux.",
        ],
        formules: ["P(X = k) = C(n,k) × pᵏ × (1 − p)ⁿ⁻ᵏ", "E(X) = n·p"],
      },
    ],
    exemples: [
      {
        enonce:
          "Une dotation de 500 000 € progresse de 1,5 % par an. Quelle est sa valeur au bout de 8 ans ?",
        etapes: [
          "Suite géométrique de raison q = 1,015.",
          "u₈ = 500 000 × 1,015⁸.",
          "1,015⁸ ≈ 1,1265.",
        ],
        resultat: "Environ 563 000 €.",
      },
    ],
    aRetenir: [
      "Une évolution en pourcentage constant est une suite géométrique.",
      "Indépendance ≠ incompatibilité : deux événements incompatibles ne sont jamais indépendants (hors cas nul).",
      "Binomiale : n épreuves identiques, indépendantes, à deux issues.",
    ],
    pieges: [
      "Additionner des taux annuels au lieu de multiplier les coefficients.",
      "Confondre P(A|B) et P(B|A) : ce sont deux quantités différentes.",
    ],
  },
  {
    id: "algebre-lineaire",
    niveau: "ingenieur",
    title: "Algèbre linéaire et calcul matriciel",
    resume:
      "Matrices, déterminants, résolution de grands systèmes et valeurs propres appliqués aux réseaux et aux structures.",
    duree: "1 h 15",
    objectifs: [
      "Manipuler produits matriciels et inverses",
      "Résoudre un système par pivot de Gauss",
      "Interpréter valeurs et vecteurs propres",
    ],
    sections: [
      {
        titre: "Matrices et systèmes",
        paragraphes: [
          "Tout système linéaire s'écrit A·X = B. Le produit matriciel n'est pas commutatif : A·B ≠ B·A en général.",
          "Le pivot de Gauss transforme A en matrice triangulaire par opérations élémentaires sur les lignes, puis la remontée donne les inconnues. C'est la méthode de référence dès trois inconnues.",
        ],
        formules: ["A·X = B ⟹ X = A⁻¹·B si det(A) ≠ 0"],
      },
      {
        titre: "Déterminant et inversibilité",
        paragraphes: [
          "Le déterminant indique si le système admet une solution unique : det(A) ≠ 0 équivaut à A inversible et à des colonnes linéairement indépendantes.",
          "En 2×2, det = ad − bc. Un déterminant proche de zéro annonce un système mal conditionné : de petites erreurs de données provoquent de grandes erreurs sur le résultat.",
        ],
      },
      {
        titre: "Valeurs et vecteurs propres",
        paragraphes: [
          "Un vecteur propre est une direction que la matrice ne fait qu'étirer : A·v = λ·v. Les λ, valeurs propres, se trouvent en résolvant det(A − λI) = 0.",
          "Applications territoriales : modes propres d'une structure (vibration d'un ouvrage), régimes stationnaires d'un réseau, analyse en composantes principales sur des données.",
        ],
        formules: ["det(A − λI) = 0"],
      },
    ],
    exemples: [
      {
        enonce: "Résoudre 2x + y = 7 et x − 3y = −7.",
        etapes: [
          "Matrice A = [[2, 1], [1, −3]], det(A) = 2×(−3) − 1×1 = −7 ≠ 0 : solution unique.",
          "Combinaison : L1 × 3 + L2 donne 7x = 21 − 7 + … soit x = 2 après réduction.",
          "Report : 2×2 + y = 7, donc y = 3.",
        ],
        resultat: "x = 2 et y = 3.",
      },
    ],
    aRetenir: [
      "det(A) ≠ 0 ⟺ solution unique.",
      "Le produit matriciel n'est pas commutatif.",
      "Un déterminant très petit signale un système numériquement instable.",
    ],
    pieges: [
      "Inverser une matrice à la main quand le pivot de Gauss serait plus rapide et plus sûr.",
      "Oublier que les dimensions doivent être compatibles pour multiplier.",
    ],
  },
  {
    id: "integrales-equations-differentielles",
    niveau: "ingenieur",
    title: "Intégration et équations différentielles",
    resume:
      "Primitives, intégrales, équations du premier et second ordre pour la thermique, l'hydraulique et l'électrotechnique.",
    duree: "1 h 15",
    objectifs: [
      "Calculer une intégrale par primitive, parties ou changement de variable",
      "Résoudre y' + a·y = b et interpréter la constante de temps",
      "Relier une équation différentielle à un phénomène physique",
    ],
    sections: [
      {
        titre: "Intégrales",
        paragraphes: [
          "L'intégrale d'une fonction positive entre a et b est l'aire sous la courbe. Elle se calcule par primitive : ∫ₐᵇ f = F(b) − F(a).",
          "Deux techniques à maîtriser : l'intégration par parties (∫u'v = [uv] − ∫uv') et le changement de variable, indispensable quand la fonction est composée.",
        ],
        formules: ["∫ xⁿ dx = xⁿ⁺¹/(n+1) + C", "∫ dx/x = ln|x| + C", "∫ eᵃˣ dx = eᵃˣ/a + C"],
      },
      {
        titre: "Équations du premier ordre",
        paragraphes: [
          "y' + a·y = b a pour solution y(t) = b/a + K·e⁻ᵃᵗ. Le terme b/a est le régime permanent, le terme exponentiel le régime transitoire.",
          "τ = 1/a est la constante de temps : au bout de 3τ le système a parcouru 95 % de son évolution, au bout de 5τ il est considéré comme stabilisé. C'est le modèle du refroidissement d'un bâtiment comme du remplissage d'un réservoir.",
        ],
        formules: ["y(t) = b/a + K·e^(−t/τ) avec τ = 1/a"],
      },
      {
        titre: "Second ordre",
        paragraphes: [
          "Pour a·y'' + b·y' + c·y = 0, l'équation caractéristique a·r² + b·r + c = 0 détermine le régime : deux racines réelles (apériodique), racine double (critique), racines complexes (oscillations amorties).",
          "Le régime critique est celui qui atteint l'équilibre le plus vite sans dépassement : c'est le réglage recherché pour un amortisseur ou un asservissement.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Un local à 20 °C est coupé du chauffage ; l'extérieur est à 5 °C et la constante de temps du bâtiment est de 12 h. Température après 24 h ?",
        etapes: [
          "Modèle : T(t) = 5 + (20 − 5)·e^(−t/12).",
          "t = 24 h : e^(−2) ≈ 0,135.",
          "T = 5 + 15 × 0,135 ≈ 7,0.",
        ],
        resultat: "Environ 7 °C.",
      },
    ],
    aRetenir: [
      "Solution générale = régime permanent + régime transitoire.",
      "3τ pour 95 % de l'évolution, 5τ pour la stabilisation pratique.",
      "Le signe du discriminant de l'équation caractéristique fixe le type de régime.",
    ],
    pieges: [
      "Oublier la constante d'intégration et donc la condition initiale.",
      "Confondre constante de temps et durée totale du phénomène.",
    ],
  },
  {
    id: "optimisation-analyse-numerique",
    niveau: "expert",
    title: "Optimisation sous contrainte et analyse numérique",
    resume:
      "Programmation linéaire, multiplicateurs de Lagrange, méthodes itératives et conditionnement : décider avec des ressources limitées.",
    duree: "1 h 30",
    objectifs: [
      "Formuler un problème d'allocation en programmation linéaire",
      "Utiliser les multiplicateurs de Lagrange et lire un coût marginal",
      "Choisir une méthode numérique et évaluer son erreur",
    ],
    sections: [
      {
        titre: "Programmation linéaire",
        paragraphes: [
          "Un problème d'allocation s'écrit : maximiser c·x sous A·x ≤ b, x ≥ 0. L'optimum d'un programme linéaire se trouve toujours sur un sommet du polyèdre des solutions admissibles — c'est le principe de l'algorithme du simplexe.",
          "Le problème dual donne les prix fictifs (valeurs marginales) des contraintes : combien gagnerait-on en desserrant d'une unité une contrainte de budget, de personnel ou de capacité ? C'est l'information décisive pour un arbitrage de direction.",
        ],
        formules: ["max cᵀx sous Ax ≤ b, x ≥ 0"],
      },
      {
        titre: "Optimisation sous contrainte d'égalité",
        paragraphes: [
          "Pour optimiser f sous la contrainte g = 0, on annule le gradient du lagrangien L = f − λ·g. Le multiplicateur λ s'interprète comme la sensibilité de l'optimum au relâchement de la contrainte.",
          "En dimension supérieure, les conditions de Karush-Kuhn-Tucker étendent ce résultat aux contraintes d'inégalité.",
        ],
        formules: ["∇f = λ·∇g"],
      },
      {
        titre: "Méthodes numériques",
        paragraphes: [
          "Résolution d'équations : la méthode de Newton converge quadratiquement mais exige une bonne initialisation ; la dichotomie converge lentement mais sûrement.",
          "Intégration approchée : la méthode des trapèzes a une erreur en h², Simpson en h⁴. Le conditionnement du problème borne la précision atteignable, quelle que soit la méthode.",
        ],
        formules: ["Newton : xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ)"],
      },
    ],
    exemples: [
      {
        enonce:
          "Une direction dispose de 600 heures d'agents et de 40 000 € pour deux types d'interventions A (5 h, 400 €, gain 700) et B (3 h, 500 €, gain 600). Comment formuler l'arbitrage ?",
        etapes: [
          "Variables : x interventions A, y interventions B.",
          "Contraintes : 5x + 3y ≤ 600 et 400x + 500y ≤ 40 000, x ≥ 0, y ≥ 0.",
          "Objectif : maximiser 700x + 600y.",
          "L'optimum se cherche aux sommets du domaine, intersections des droites de contrainte.",
        ],
        resultat:
          "Le couple optimal se lit sur un sommet ; le dual indique laquelle des deux ressources est réellement limitante.",
      },
    ],
    aRetenir: [
      "L'optimum d'un programme linéaire est sur un sommet du domaine admissible.",
      "Le multiplicateur λ est le prix marginal de la contrainte : un argument d'arbitrage budgétaire.",
      "Toute méthode numérique doit être accompagnée d'une estimation d'erreur.",
    ],
    pieges: [
      "Oublier les contraintes de positivité, qui font partie du modèle.",
      "Appliquer Newton sans vérifier que la dérivée ne s'annule pas près de la solution.",
    ],
  },
  {
    id: "statistique-inferentielle",
    niveau: "expert",
    title: "Statistique inférentielle et aide à la décision",
    resume:
      "Échantillonnage, intervalles de confiance, tests d'hypothèses, régression et théorie des graphes appliquée aux réseaux.",
    duree: "1 h 30",
    objectifs: [
      "Construire et interpréter un intervalle de confiance",
      "Conduire un test d'hypothèse et en lire les risques",
      "Modéliser un réseau par un graphe et calculer un plus court chemin",
    ],
    sections: [
      {
        titre: "Estimation et intervalles de confiance",
        paragraphes: [
          "Un sondage sur n personnes donne une proportion observée p̂. L'intervalle de confiance à 95 % est approximativement p̂ ± 1,96·√(p̂(1−p̂)/n), ce qui se simplifie souvent en p̂ ± 1/√n.",
          "La précision varie en 1/√n : pour diviser la marge d'erreur par deux, il faut quadrupler l'échantillon. C'est l'argument à opposer à toute demande de « sondage plus précis à coût constant ».",
        ],
        formules: ["IC₉₅ % ≈ p̂ ± 1,96·√(p̂(1−p̂)/n)"],
      },
      {
        titre: "Tests d'hypothèses",
        paragraphes: [
          "On pose une hypothèse nulle H₀ (pas d'effet) et on calcule la probabilité d'observer des données au moins aussi extrêmes si H₀ était vraie : c'est la p-valeur. Sous le seuil retenu (souvent 5 %), on rejette H₀.",
          "Le risque de première espèce α est de rejeter H₀ à tort, le risque de seconde espèce β de la conserver à tort. Une p-valeur élevée ne prouve jamais l'absence d'effet : elle signale une absence de preuve.",
        ],
      },
      {
        titre: "Régression et graphes",
        paragraphes: [
          "La régression linéaire ajuste y = a·x + b par moindres carrés ; le coefficient de détermination R² indique la part de variance expliquée. Une forte corrélation n'établit jamais une causalité.",
          "Un réseau (voirie, eau, collecte) se modélise par un graphe pondéré. L'algorithme de Dijkstra donne le plus court chemin, celui de Kruskal l'arbre couvrant de coût minimal — le tracé de desserte le moins coûteux.",
        ],
        formules: ["R² ∈ [0 ; 1]"],
      },
    ],
    exemples: [
      {
        enonce:
          "Sur 400 usagers interrogés, 240 se déclarent satisfaits. Quelle est la marge d'erreur à 95 % ?",
        etapes: [
          "p̂ = 240/400 = 0,60.",
          "√(0,6 × 0,4 / 400) = √0,0006 = 0,0245.",
          "Marge : 1,96 × 0,0245 ≈ 0,048.",
        ],
        resultat: "Satisfaction estimée à 60 % ± 4,8 points, soit entre 55,2 % et 64,8 %.",
      },
    ],
    aRetenir: [
      "La précision d'un sondage évolue en 1/√n, pas en 1/n.",
      "Une p-valeur mesure la compatibilité des données avec H₀, pas la probabilité que H₀ soit vraie.",
      "Corrélation n'est pas causalité : c'est la phrase attendue par tous les jurys.",
    ],
    pieges: [
      "Interpréter un R² élevé comme une preuve de relation de cause à effet.",
      "Comparer deux pourcentages issus d'échantillons trop petits pour être distinguables.",
    ],
  },
];

export function getMathCours(id: string | undefined): MathCours | undefined {
  return mathCours.find((c) => c.id === id);
}

export function coursDuNiveau(niveau: MathNiveauId): MathCours[] {
  return mathCours.filter((c) => c.niveau === niveau);
}
