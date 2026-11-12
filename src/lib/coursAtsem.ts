import type { CoursAM } from "./coursAgentMaitrise";

/**
 * Cours du concours d'agent territorial spécialisé principal de 2e classe des écoles
 * maternelles (ATSEM). Rédigés à partir des notes de cadrage et des annales publiques des
 * centres de gestion. Les règles citées sont des repères de préparation.
 */

const SPEC = "atsem" as const;

export const coursAtsem: CoursAM[] = [
  {
    id: "atsem-concours",
    partie: "ecrit",
    specialite: SPEC,
    title: "Le concours d'ATSEM : voies, épreuves et méthode du QCM",
    resume:
      "Les trois voies d'accès, les épreuves de chaque voie, le barème du QCM, le calendrier et la méthode pour répondre à des questions à plusieurs bonnes réponses.",
    duree: "35 minutes",
    objectifs: [
      "Savoir quelle voie et quelles épreuves vous concernent",
      "Connaître le barème du QCM et sa stratégie",
      "Situer le calendrier des sessions",
    ],
    sections: [
      {
        titre: "Le grade et les trois voies d'accès",
        paragraphes: [
          "Le concours recrute au grade d'ATSEM principal de 2e classe, catégorie C, filière médico-sociale. Ce sont des centres de gestion qui l'organisent, et le concours n'est pas national.",
        ],
        tableau: {
          entetes: ["Voie", "Conditions"],
          lignes: [
            [
              "Externe",
              "Concours sur titres : CAP Accompagnant éducatif petite enfance (ancien CAP Petite enfance) ou qualification reconnue équivalente",
            ],
            [
              "Interne",
              "Agents publics justifiant, au 1er janvier de l'année du concours, d'au moins deux ans de services publics effectifs auprès de jeunes enfants en milieu scolaire et maternel, et en activité à la clôture des inscriptions",
            ],
            [
              "Troisième concours",
              "Quatre ans d'activités professionnelles, de mandats locaux ou de responsabilités associatives, hors qualité d'agent public",
            ],
          ],
        },
      },
      {
        titre: "Les épreuves de chaque voie",
        tableau: {
          entetes: ["Voie", "Admissibilité", "Admission"],
          lignes: [
            [
              "Externe",
              "20 questions à choix multiple (QCM) : 45 minutes, coefficient 1",
              "Entretien de 15 minutes, coefficient 2",
            ],
            [
              "Interne et troisième concours",
              "Série de 3 à 5 questions à réponses courtes à partir d'un dossier succinct : 2 heures, coefficient 1",
              "Entretien de 20 minutes dont 5 minutes au plus d'exposé, coefficient 2",
            ],
          ],
        },
        paragraphes: [
          "Toute note inférieure à 5 sur 20 à une épreuve obligatoire élimine le candidat. Seuls les admissibles passent l'entretien. Les notes de cadrage ne sont pas des textes réglementaires : seul l'arrêté d'ouverture de votre centre de gestion fait foi.",
        ],
      },
      {
        titre: "Le QCM : plusieurs bonnes réponses",
        points: [
          "Chaque question comporte une ou plusieurs bonnes réponses, sans que le nombre soit indiqué, et de 3 à 6 propositions environ.",
          "Les questions sont des mises en situation concrètes : « Que faites-vous ? », « Quelle(s) attitude(s) adopter ? ».",
          "Barème de la session 2026 : toutes les bonnes réponses sans erreur = 1 point ; au moins la moitié des bonnes réponses sans aucune réponse fausse = 0,5 point ; une seule réponse fausse ou moins de la moitié des bonnes réponses = 0 ; aucune réponse = 0. Le jury peut modifier le barème : lisez toujours celui du sujet.",
          "Conséquence : cochez ce dont vous êtes sûr. Une proposition douteuse peut vous faire perdre la question entière.",
          "Remplissez la grille avec une seule couleur non effaçable (encre noire ou bleue). Une case mal remplie est corrigée contre le candidat. La calculatrice n'était pas autorisée en 2026.",
        ],
        reperes: ["Une réponse fausse = 0 à la question ; mieux vaut ne cocher que le certain"],
      },
      {
        titre: "Le calendrier",
        paragraphes: [
          "En Auvergne-Rhône-Alpes, depuis la session 2026, le concours a lieu tous les deux ans : les épreuves de 2026 ont eu lieu le 14 octobre et la prochaine session est prévue en 2028. D'autres centres de gestion organisent une session en 2027 : renseignez-vous auprès de celui de votre département ou sur le portail commun aux centres de gestion.",
        ],
      },
    ],
    aRetenir: [
      "Externe : QCM de 20 questions, 45 minutes. Interne et 3e concours : 3 à 5 questions courtes, 2 heures.",
      "Entretien : 15 minutes (externe) ou 20 minutes dont 5 d'exposé (interne et 3e concours), coefficient 2.",
      "Note inférieure à 5 sur 20 : éliminatoire.",
      "QCM : une réponse fausse annule la question.",
    ],
    pieges: [
      "Cocher une proposition « au cas où » : elle peut annuler la question.",
      "Ne pas lire le barème du sujet, qui peut différer.",
      "Confondre les épreuves de l'externe et celles de l'interne.",
    ],
  },
  {
    id: "atsem-metier",
    partie: "securite-encadrement",
    specialite: SPEC,
    title: "Le métier et l'environnement professionnel de l'ATSEM",
    resume:
      "Missions du statut, communauté éducative, acteurs de l'école, cadre hiérarchique et fonctionnel, obligations de l'agent public, projet d'école et PEDT.",
    duree: "50 minutes",
    objectifs: [
      "Citer les missions d'un ATSEM et leurs limites",
      "Situer les acteurs de l'école et le rôle de chacun",
      "Appliquer les obligations d'un agent public",
    ],
    sections: [
      {
        titre: "Les missions d'après le statut",
        paragraphes: [
          "Le statut particulier du cadre d'emplois (décret du 28 août 1992 modifié) fixe les missions. Ce champ délimite les questions possibles au concours.",
        ],
        points: [
          "Assister le personnel enseignant pour l'accueil et l'hygiène des enfants des classes maternelles ou enfantines.",
          "Préparer et mettre en état de propreté les locaux et le matériel servant directement aux enfants.",
          "Appartenir à la communauté éducative : participer à la mise en œuvre des activités pédagogiques prévues par les enseignants, sous leur responsabilité, et assister l'enseignant auprès d'enfants à besoins éducatifs particuliers.",
          "Être chargé, si besoin, de la surveillance des enfants dans les lieux de restauration scolaire.",
          "Être chargé, en journée, de l'animation du temps périscolaire ou d'accueils de loisirs.",
        ],
        reperes: [
          "L'ATSEM assiste l'enseignant : il ne le remplace pas et ne définit pas les objectifs pédagogiques",
        ],
      },
      {
        titre: "Les acteurs de l'école",
        tableau: {
          entetes: ["Acteur", "Rôle"],
          lignes: [
            [
              "Enseignant",
              "Agent de l'Éducation nationale (État) : responsable de la classe et des apprentissages",
            ],
            [
              "Directeur d'école",
              "Enseignant chargé de la direction de l'école, qui préside le conseil d'école",
            ],
            [
              "DASEN",
              "Directeur académique des services de l'Éducation nationale : décide notamment de l'ouverture ou de la fermeture de classes (carte scolaire)",
            ],
            [
              "Commune (maire)",
              "Propriétaire et gestionnaire des locaux ; employeur de l'ATSEM, des agents de restauration et des animateurs périscolaires",
            ],
            [
              "Conseil d'école",
              "Instance qui réunit enseignants, parents et représentants de la commune ; elle vote notamment le règlement intérieur de l'école",
            ],
            [
              "DDEN",
              "Délégué départemental de l'Éducation nationale, visiteur bénévole des écoles",
            ],
          ],
        },
        paragraphes: [
          "Sont agents de la fonction publique territoriale : les ATSEM, les agents de restauration et les animateurs périscolaires employés par la commune. Les enseignants et les directeurs d'école sont des agents de l'État.",
        ],
      },
      {
        titre: "Cadre hiérarchique et cadre fonctionnel",
        points: [
          "Hiérarchie : l'ATSEM est employé par la commune. Son autorité hiérarchique est le maire (autorité territoriale) et sa chaîne de responsables dans la collectivité.",
          "Fonctionnel : pendant le temps scolaire, il travaille en lien étroit avec l'enseignant et le directeur d'école, qui organisent la vie de la classe et de l'école.",
          "Il travaille en équipe : enseignant, autres ATSEM, agents de restauration, animateurs.",
          "Le projet d'école est élaboré par l'équipe pédagogique et adopté en conseil d'école. Le projet éducatif territorial (PEDT) organise la cohérence entre temps scolaires, périscolaires et extrascolaires.",
        ],
      },
      {
        titre: "Les obligations de l'agent public",
        points: [
          "Neutralité et laïcité : ne pas manifester ses convictions personnelles ni les imposer aux enfants ; traiter tous les enfants et toutes les familles de façon égale.",
          "Discrétion professionnelle : ne pas divulguer à d'autres personnes les informations sur la vie d'un enfant ou d'une famille ; en parler seulement à l'enseignant, au directeur ou à sa hiérarchie.",
          "Respect et impartialité : attitude respectueuse envers les familles et les collègues.",
          "Droit à l'image : photographier ou filmer des enfants pour un support (blog, journal) exige l'autorisation écrite des familles ; sans autorisation, l'enfant ne doit pas apparaître.",
          "Signalement : face à un enfant qui semble en difficulté ou en danger, l'ATSEM transmet ses observations factuelles à l'enseignant ou au directeur, sans mener d'enquête lui-même.",
        ],
      },
    ],
    aRetenir: [
      "L'ATSEM assiste l'enseignant, prépare et nettoie les locaux, surveille la restauration et peut animer le périscolaire.",
      "Il appartient à la communauté éducative et à la fonction publique territoriale.",
      "Le DASEN décide de la carte scolaire ; la commune est l'employeur de l'ATSEM.",
      "Neutralité, discrétion, impartialité, droit à l'image.",
    ],
    pieges: [
      "Croire que l'ATSEM peut remplacer l'enseignant ou décider des apprentissages.",
      "Parler à des parents de la situation d'un autre enfant.",
      "Publier des photos sans autorisation des familles.",
    ],
  },
  {
    id: "atsem-enfant",
    partie: "securite-encadrement",
    specialite: SPEC,
    title: "Accompagner l'enfant : autonomie, activités, conflits et aménagement",
    resume:
      "Les domaines d'apprentissage, la posture d'accompagnement, l'autonomie, la résolution de conflits entre enfants et l'aménagement de la classe.",
    duree: "50 minutes",
    objectifs: [
      "Adopter la bonne posture : observer, guider, ne pas faire à la place",
      "Accompagner un conflit en cinq étapes",
      "Comprendre l'organisation de l'espace de la classe",
    ],
    sections: [
      {
        titre: "Les cinq domaines d'apprentissage de l'école maternelle",
        points: [
          "Mobiliser le langage dans toutes ses dimensions.",
          "Agir, s'exprimer, comprendre à travers l'activité physique.",
          "Agir, s'exprimer, comprendre à travers les activités artistiques.",
          "Acquérir les premiers outils mathématiques.",
          "Explorer le monde.",
        ],
      },
      {
        titre: "La posture d'accompagnement",
        points: [
          "Observer d'abord : repérer ce que l'enfant sait faire et ce qui le met en difficulté.",
          "Reformuler la consigne donnée par l'enseignant avec des mots simples, la montrer, la décomposer en étapes.",
          "Laisser le temps d'essayer, valoriser les efforts même si le résultat n'est pas parfait.",
          "Aider sans faire à la place : montrer le geste, proposer un outil adapté, féliciter.",
          "Rendre compte à l'enseignant des difficultés rencontrées : c'est lui qui adapte l'activité ou la consigne.",
          "Ne jamais dévaloriser l'enseignant ou un enfant devant les autres.",
        ],
        reperes: ["Faire avec, pas à la place : l'autonomie se construit par l'essai"],
      },
      {
        titre: "Accompagner un conflit entre enfants",
        paragraphes: [
          "Avant 3 ans, les enfants résolvent rarement seuls leurs conflits, et s'il y a violence l'adulte intervient toujours. Cinq étapes guident l'adulte :",
        ],
        points: [
          "1. Désamorcer et permettre un retour au calme : « Je vois que vous êtes très en colère. Nous allons d'abord nous calmer. »",
          "2. Laisser chacun s'expliquer et nommer ses émotions, sans juger.",
          "3. Chercher une solution ensemble, en aidant les enfants à se mettre à la place de l'autre.",
          "4. Appliquer la solution et laisser l'enfant « réparer ».",
          "5. Prévenir le prochain conflit : règles claires, matériel en nombre suffisant.",
          "Posture de l'adulte : calme, impartial, bienveillant. On accepte les émotions, pas tous les comportements.",
          "Les règles de vie : les rappeler régulièrement et avec constance, les formuler de manière positive et claire, montrer l'exemple.",
        ],
      },
      {
        titre: "L'aménagement de la classe",
        tableau: {
          entetes: ["Objectif de l'aménagement", "Exemples"],
          lignes: [
            ["Assurer la sécurité", "Circulation, évacuation, mobilier en bon état"],
            [
              "Permettre une pédagogie spécifique",
              "Espaces lisibles, coins jeux, ateliers, espace de regroupement, rangements accessibles aux enfants",
            ],
            [
              "Respecter les conditions d'hygiène",
              "Sols faciles à nettoyer, point d'eau, encombrement limité",
            ],
          ],
        },
        points: [
          "Coins jeux : fréquentation libre (l'enfant décide, l'adulte observe) ou guidée (situation d'apprentissage avec la présence de l'adulte).",
          "Espaces d'activités : fréquentation imposée par l'enseignant, qui organise les groupes et leur rotation.",
          "Espaces typiques : regroupement, lecture, jeu symbolique, manipulation et découverte, graphisme, artistique, moteur.",
          "Pistes d'amélioration d'une classe encombrée : mieux délimiter les espaces, ranger le matériel à hauteur d'enfants avec des étiquettes ou des photos, libérer les passages.",
        ],
      },
    ],
    aRetenir: [
      "Observer, reformuler, montrer, laisser faire, valoriser.",
      "Conflit : calme, expression, solution collective, application, prévention.",
      "Aménagement : sécurité, pédagogie, hygiène.",
    ],
    pieges: [
      "Faire à la place de l'enfant pour gagner du temps.",
      "Confisquer ou sermonner sans écouter.",
      "Décider seul d'adapter l'activité sans en parler à l'enseignant.",
    ],
  },
  {
    id: "atsem-hygiene-sante",
    partie: "securite-encadrement",
    specialite: SPEC,
    title: "Hygiène, soins, santé et PAI",
    resume:
      "Lavage des mains, toilettes et accidents, enfant malade, premiers secours, trousse à pharmacie, canicule, allergies et projet d'accueil individualisé.",
    duree: "55 minutes",
    objectifs: [
      "Appliquer les gestes d'hygiène auprès des enfants",
      "Réagir face à un enfant malade ou blessé, sans sortir de son rôle",
      "Mettre en œuvre un PAI et gérer une canicule",
    ],
    sections: [
      {
        titre: "Les gestes d'hygiène",
        points: [
          "Lavage des mains des enfants : avant le repas, après les toilettes, après s'être mouché, après les activités salissantes ou le retour de récréation ; savon, rinçage, séchage avec un essuie-mains à usage unique.",
          "Toilettes et petits accidents : rassurer l'enfant, le changer discrètement avec des vêtements de rechange, respecter son intimité, ne jamais le gronder ni le moquer, informer l'enseignant et, selon l'organisation, la famille.",
          "Gants à usage unique pour les changes et les soins ; lavage des mains de l'adulte ensuite.",
          "Sieste : chaque enfant a son drap et sa couverture, lavés régulièrement ; les enfants restent sous la surveillance d'un adulte ; on respecte le rythme de chacun et on propose un temps calme à celui qui ne dort pas.",
          "Gastro-entérite ou maladie contagieuse dans la classe : renforcer le nettoyage des toilettes et des surfaces, insister sur le lavage des mains, informer l'enseignant.",
          "Poux : informer l'enseignant ou le directeur, avec discrétion, sans stigmatiser l'enfant ni l'annoncer devant les autres.",
        ],
      },
      {
        titre: "Un enfant malade ou blessé",
        paragraphes: [
          "Le rôle de l'ATSEM est d'observer, de rassurer, de ne pas laisser l'enfant seul et d'informer sans attendre l'enseignant ou le directeur. La décision d'appeler les parents ou de renvoyer l'enfant relève de la direction, pas de l'ATSEM.",
        ],
        points: [
          "L'ATSEM ne donne pas de médicament de sa propre initiative (pas de paracétamol pour une fièvre) : seuls un PAI ou une prescription le permettent.",
          "Premiers secours : protéger, alerter (15, 18 ou 112), secourir. Un ATSEM formé au sauvetage secourisme du travail (SST) applique les gestes appris.",
          "Piqûre d'insecte : rassurer, surveiller l'évolution (rougeur, gonflement), vérifier si l'enfant a un PAI (allergie), appeler le 15 en cas de signes graves (difficulté à respirer, gonflement du visage).",
          "Fausse route lors d'un repas : alerter les secours et pratiquer les gestes adaptés si l'on est formé.",
          "Trousse à pharmacie de l'école : compresses, gants à usage unique, pansements, couverture de survie, par exemple ; pas de médicaments.",
        ],
      },
      {
        titre: "Le PAI et les allergies",
        points: [
          "Le projet d'accueil individualisé concerne un enfant atteint d'une maladie chronique, d'une allergie ou d'une intolérance alimentaire. Il précise la pathologie, le traitement, la conduite à tenir en urgence et les personnes à prévenir.",
          "Il est établi pour l'année scolaire et reconduit si nécessaire.",
          "Allergie alimentaire : le repas doit être conforme au PAI. Si un enfant reçoit un repas différent, on ne le lui donne pas, même s'il a faim ou assure l'avoir déjà mangé : on vérifie, on informe le responsable et on obtient un repas conforme.",
          "Un parent qui signale une nouvelle allergie : transmettre à l'enseignant ou au directeur pour qu'un PAI soit établi, et appliquer d'ici là les précautions.",
        ],
      },
      {
        titre: "Canicule",
        points: [
          "Avant l'arrivée des enfants : repérer les salles les moins exposées, fermer stores et volets côté soleil, vérifier la disponibilité de l'eau.",
          "Pendant : faire boire régulièrement, mouiller la peau, réduire les activités physiques, supprimer les sorties aux heures chaudes, veiller à la conservation des aliments, proposer des activités calmes et rafraîchissantes.",
          "Signes d'alerte : grande fatigue ou faiblesse, vertiges, troubles de la conscience, nausées ou vomissements, crampes, température élevée, soif, maux de tête.",
          "Coup de chaleur (propos incohérents, perte d'équilibre ou de connaissance) : appeler le 15, mettre l'enfant à l'ombre ou au frais, l'asperger d'eau fraîche, ventiler, lui donner de l'eau fraîche en petites quantités s'il est conscient.",
        ],
      },
    ],
    aRetenir: [
      "Observer, rassurer, ne pas laisser seul, informer l'enseignant.",
      "Pas de médicament sans PAI ni prescription.",
      "PAI : repas conforme, jamais d'exception même si l'enfant insiste.",
      "Coup de chaleur : appeler le 15, frais, eau, ventilation.",
    ],
    pieges: [
      "Donner du paracétamol à un enfant fiévreux.",
      "Appeler les parents ou renvoyer un enfant de sa propre initiative.",
      "Céder à un enfant allergique qui réclame un plat non prévu.",
    ],
  },
  {
    id: "atsem-securite-entretien",
    partie: "securite-encadrement",
    specialite: SPEC,
    title: "Sécurité, produits d'entretien et gestes au travail",
    resume:
      "Règles d'encadrement, mise en sûreté, rangement et dosage des produits, nettoyage des locaux et du matériel, port de charges, chutes et troubles musculo-squelettiques.",
    duree: "50 minutes",
    objectifs: [
      "Respecter les règles d'encadrement et de mise en sûreté",
      "Utiliser, ranger et doser les produits en sécurité",
      "Prévenir chutes et troubles musculo-squelettiques",
    ],
    sections: [
      {
        titre: "Encadrement et mise en sûreté",
        points: [
          "Sortie scolaire occasionnelle en maternelle : au minimum deux adultes, dont l'enseignant, jusqu'à 16 élèves ; au-delà, un adulte supplémentaire par tranche de 8 élèves. Pour 30 élèves : 4 adultes. Un stagiaire d'observation ne compte pas dans l'encadrement.",
          "Plan particulier de mise en sûreté (PPMS) : il décrit la conduite à tenir en cas de risque majeur ou d'intrusion. En cas d'intrusion : suivre les consignes du plan, verrouiller la porte, éteindre la lumière, se tenir à l'écart des portes et fenêtres, maintenir les enfants au calme et silencieux ; ne pas aller regarder dans le couloir.",
          "Un jeu qui semble dangereux sur le temps périscolaire : le signaler calmement à l'animateur et chercher une solution avec lui ; si le désaccord persiste, prévenir le responsable hiérarchique. Le droit de retrait ne sert pas à échapper à une responsabilité.",
        ],
      },
      {
        titre: "Les produits d'entretien",
        points: [
          "Les conserver hors de portée des enfants, dans un local ventilé et fermé à clé, rangés par familles, les produits lourds en bas.",
          "Ne jamais transvaser un produit dans un contenant alimentaire (bouteille d'eau, par exemple). Un produit dilué se met dans un flacon dédié, étiqueté.",
          "Respecter le dosage du fabricant : ne jamais augmenter la concentration, ne jamais mélanger des produits.",
          "Odeur irritante près d'un seau de nettoyage : éloigner les enfants, aérer sans s'exposer, informer le responsable. On n'ajoute pas d'eau pour « neutraliser » et on ne s'approche pas pour identifier le mélange.",
          "Lire la fiche de données de sécurité et l'étiquette (pictogrammes) ; porter les gants adaptés.",
        ],
        reperes: ["Dosage : quantité de produit = volume de solution × pourcentage"],
      },
      {
        titre: "Nettoyer les locaux et le matériel",
        points: [
          "Nettoyer du plus propre au plus sale et du haut vers le bas ; changer de lavette entre les zones ; désinfecter sanitaires et surfaces de contact.",
          "Nettoyer et désinfecter régulièrement les jouets et le matériel manipulés par les enfants, davantage en cas de maladie contagieuse.",
          "Un détergent nettoie ; un désinfectant détruit les micro-organismes sur une surface propre.",
        ],
      },
      {
        titre: "Sécurité au travail",
        points: [
          "Port de charges : évaluer la charge, demander de l'aide si nécessaire, adopter une posture stable (jambes fléchies, dos droit), éviter la torsion, ne pas porter plusieurs objets pour gagner du temps ; adapter l'activité pour éviter de déplacer du mobilier.",
          "Troubles musculo-squelettiques (TMS) : atteintes des muscles, tendons et articulations dues aux gestes répétitifs, postures contraignantes et efforts.",
          "Risque de chute : signaler un sol mouillé, nettoyer vite, porter des chaussures antidérapantes, ne pas encombrer les passages ni les escaliers.",
          "Après un accident du travail : prévenir son responsable, faire constater les blessures par un médecin ; l'accident est déclaré à l'employeur.",
        ],
      },
    ],
    exemples: [
      {
        enonce:
          "Un produit s'utilise à 4 % dans l'eau. Quelle quantité de produit pour 10 litres de solution ?",
        etapes: ["4 % de 10 litres = 10 × 0,04 = 0,4 litre.", "0,4 litre = 400 mL."],
        resultat: "Il faut 400 mL de produit et 9,6 litres d'eau.",
      },
      {
        enonce:
          "28 enfants sont répartis en 4 groupes de même effectif. Chaque enfant dispose d'un kit de peinture et de 2 feuilles. Que préparer par groupe ?",
        etapes: ["Effectif d'un groupe : 28 ÷ 4 = 7 enfants.", "Kits : 7. Feuilles : 7 × 2 = 14."],
        resultat: "Par groupe : 7 kits et 14 feuilles.",
      },
    ],
    aRetenir: [
      "Sortie à 30 élèves en maternelle : 4 adultes.",
      "Intrusion : PPMS, porte verrouillée, lumière éteinte, silence.",
      "Produits : hors de portée, étiquetés, jamais mélangés, dosés.",
      "Port de charge : évaluer, demander de l'aide, dos droit.",
    ],
    pieges: [
      "Transvaser un produit dans une bouteille d'eau.",
      "Ranger les produits lourds en hauteur.",
      "Ajouter de l'eau à un mélange qui dégage une odeur irritante.",
    ],
  },
  {
    id: "atsem-repas-periscolaire",
    partie: "securite-encadrement",
    specialite: SPEC,
    title: "Repas, éducation au goût et temps périscolaire",
    resume:
      "Installer les enfants à table, aide à l'autonomie, refus d'un aliment, fausse route, animation du périscolaire, préparation d'une activité.",
    duree: "40 minutes",
    objectifs: [
      "Accompagner un repas dans le respect de l'enfant",
      "Réagir à des situations de cantine",
      "Préparer et animer une activité périscolaire",
    ],
    sections: [
      {
        titre: "Installer les enfants à table",
        points: [
          "Faire laver les mains, installer les enfants, disposer couverts, verres et serviettes.",
          "Vérifier les régimes et les PAI avant de servir.",
          "Aider à l'autonomie sans faire à la place : proposer des couverts adaptés, montrer le geste, encourager l'enfant à se servir et à couper ce qu'il peut.",
          "Encourager à goûter sans forcer : présenter l'aliment, expliquer sa nature ou son goût, proposer une petite quantité. On n'oblige pas à finir son assiette, on ne retire pas l'assiette en punition et on ne ressert pas le même aliment pour « habituer ».",
        ],
      },
      {
        titre: "Situations de cantine",
        tableau: {
          entetes: ["Situation", "Réaction professionnelle"],
          lignes: [
            [
              "Un enfant a du mal avec ses couverts",
              "Montrer le geste, proposer un couvert adapté, valoriser ses essais",
            ],
            [
              "Un enfant renverse sa sauce",
              "Dédramatiser, essuyer, le rassurer, le laisser participer au nettoyage sans le gronder",
            ],
            [
              "Une carafe d'eau renversée au sol",
              "Éloigner les enfants de la zone glissante, sécuriser et nettoyer pour éviter une chute",
            ],
            [
              "Une fausse route",
              "Alerter les secours (15, 18 ou 112) et pratiquer les gestes adaptés si l'on est formé ; ne pas donner à boire ni laisser l'enfant seul",
            ],
            [
              "Un agent de restauration se moque d'un enfant",
              "Intervenir calmement, rappeler le respect dû aux enfants, en informer sa hiérarchie",
            ],
            [
              "Un enfant avec PAI reçoit un plat non prévu",
              "Ne pas le lui donner, vérifier, informer le responsable et obtenir un repas conforme",
            ],
          ],
        },
      },
      {
        titre: "Animer le temps périscolaire",
        points: [
          "Les temps périscolaires encadrent la classe : accueil du matin, pause méridienne, accueil du soir. Les vacances relèvent de l'extrascolaire.",
          "Pour préparer une activité : tenir compte de l'âge et des capacités des enfants, du nombre d'enfants et des conditions d'encadrement, de la sécurité du matériel, et du projet éducatif territorial (PEDT).",
          "Une activité en périscolaire repose sur l'envie : on propose, on n'impose pas à tous la participation.",
          "Photographier les enfants pour un support de communication suppose une autorisation écrite des familles.",
        ],
      },
    ],
    aRetenir: [
      "Encourager sans forcer, aider sans faire à la place.",
      "Fausse route : alerter, gestes adaptés si formé.",
      "Périscolaire : âge, nombre, sécurité du matériel, PEDT.",
    ],
    pieges: [
      "Obliger un enfant à finir son assiette.",
      "Ressortir le même aliment au repas suivant pour « habituer ».",
      "Servir un enfant avec PAI sans vérifier.",
    ],
  },
  {
    id: "atsem-entretien-jury",
    partie: "oral",
    specialite: SPEC,
    title: "L'entretien avec le jury",
    resume:
      "Durée et déroulement selon la voie, l'exposé de l'interne et du 3e concours, les qualités évaluées, des questions types et des réponses en situation.",
    duree: "45 minutes",
    objectifs: [
      "Connaître le déroulement de l'entretien de votre voie",
      "Construire un exposé de 5 minutes (interne et 3e concours)",
      "Répondre à des questions en situation avec une posture professionnelle",
    ],
    sections: [
      {
        titre: "Le déroulement",
        tableau: {
          entetes: ["Voie", "Durée et coefficient", "Contenu"],
          lignes: [
            [
              "Externe",
              "15 minutes, coefficient 2",
              "Aptitude et connaissances professionnelles, connaissance de l'environnement professionnel, motivation. Le jury peut vous inviter à présenter votre parcours (formation, stages)",
            ],
            [
              "Interne et 3e concours",
              "20 minutes dont 5 minutes au plus d'exposé, coefficient 2",
              "Exposé sur votre expérience et les compétences acquises, puis conversation avec mises en situation sur les problèmes courants d'un ATSEM",
            ],
          ],
        },
        points: [
          "Pas de sujet tiré au sort ni de temps de préparation : les réponses sont données en temps réel. Vous ne pouvez consulter aucun document, pas même le document de parcours remis au jury à l'inscription.",
          "Le jury est composé d'élus locaux, de fonctionnaires territoriaux et de personnalités qualifiées. Il se place souvent en position d'employeur.",
          "Le temps réglementaire est à votre disposition : l'entretien ne peut être interrompu qu'à votre demande expresse.",
        ],
      },
      {
        titre: "L'exposé de l'interne et du 3e concours",
        points: [
          "Il dure 5 minutes au plus : un exposé interrompu à 5 minutes ou beaucoup trop court est pénalisé. Chronométrez-vous.",
          "Allez au-delà du CV : expliquez les compétences acquises et en quoi elles vous mettent en situation d'exercer le métier d'ATSEM.",
          "Interne : valorisez la nature et la durée de votre expérience auprès de jeunes enfants. 3e concours : valorisez ce qui, dans vos activités professionnelles, mandats ou responsabilités associatives, sert aux missions d'un ATSEM.",
          "Plan possible : présentation (20 secondes), parcours et missions (2 minutes), situations vécues et compétences (2 minutes), projet et motivation (30 secondes).",
        ],
      },
      {
        titre: "Ce que le jury évalue",
        points: [
          "La cohérence : ne pas se contredire, défendre ses idées, savoir convenir d'une erreur.",
          "La gestion du stress : répondre sans précipitation, garder confiance après une question difficile.",
          "La communication : s'exprimer clairement, à voix haute, ni trop vite ni trop lentement, s'adresser à tout le jury.",
          "Le respect de la place de candidat : ni familiarité, ni agressivité, ni attitude péremptoire ; argumenter calmement en cas de désaccord.",
          "La curiosité et l'esprit critique : intérêt pour l'actualité de l'école et des collectivités.",
        ],
      },
      {
        titre: "Questions types et réponses en situation",
        tableau: {
          entetes: ["Question", "Éléments de réponse"],
          lignes: [
            [
              "Pourquoi voulez-vous être ATSEM ?",
              "Une motivation concrète liée à votre expérience ou à votre formation, l'intérêt pour l'accompagnement des jeunes enfants, le service public",
            ],
            [
              "Quelles sont vos missions ?",
              "Assister l'enseignant pour l'accueil et l'hygiène, préparer et nettoyer les locaux et le matériel, participer aux activités, surveiller la cantine, animer le périscolaire",
            ],
            [
              "Un enfant pleure à la séparation",
              "Rassurer, accueillir avec un rituel, proposer l'objet familier, informer l'enseignant, rassurer le parent sans prolonger le départ",
            ],
            [
              "Un parent vous demande des nouvelles d'un autre enfant",
              "Ne rien divulguer (discrétion professionnelle), l'orienter vers l'enseignant",
            ],
            [
              "Vous pensez qu'un enfant est en danger",
              "Observer, noter les faits, en parler sans délai à l'enseignant ou au directeur, ne pas enquêter soi-même",
            ],
            [
              "Vous n'êtes pas d'accord avec l'enseignant",
              "Exprimer calmement votre point de vue en privé, appliquer les consignes, informer votre hiérarchie si besoin",
            ],
          ],
        },
      },
    ],
    aRetenir: [
      "Externe : 15 minutes. Interne et 3e concours : 20 minutes dont 5 d'exposé. Coefficient 2.",
      "Pas de préparation ni de documents : cohérence, calme, clarté.",
      "L'exposé valorise des compétences, pas une simple liste de dates.",
    ],
    pieges: [
      "Un exposé coupé à 5 minutes ou très court.",
      "Contester le jury ou se montrer péremptoire.",
      "Répondre hors du rôle de l'ATSEM (décider à la place de l'enseignant ou de la direction).",
    ],
  },
];
