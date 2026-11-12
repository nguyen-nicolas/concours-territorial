/**
 * Cours pour les 9 nouveaux concours de la FPT ajoutés à Prépa Territoriale.
 * Rédigés d'après les brochures, notes de cadrage et programmes réglementaires
 * publiés par les centres de gestion. Ces repères de préparation ne constituent
 * pas des textes réglementaires.
 */

export interface CoursNouveauConcours {
  id: string;
  concoursId: string;
  title: string;
  resume: string;
  duree: string;
  sections: {
    titre: string;
    paragraphes?: string[];
    points?: string[];
    tableau?: { entetes: string[]; lignes: string[][] };
    reperes?: string[];
  }[];
  aRetenir: string[];
  pieges: string[];
  exemples?: { enonce: string; etapes: string[]; resultat: string }[];
}

const SRC_ANIM =
  "Programme réglementaire du concours interne d'adjoint d'animation (arrêté du 21 juin 2007) et note de cadrage CDG 59, 2024.";
const SRC_PAT =
  "Note de cadrage de l'épreuve de questionnaire, adjoint du patrimoine, cellule pédagogique nationale, novembre 2024.";
const SRC_SOC =
  "Note de cadrage de l'entretien, agent social principal 2e classe, cellule pédagogique nationale, octobre 2024.";
const SRC_APS =
  "Programme réglementaire de l'éducateur territorial des APS et note de cadrage des CDG.";

export const coursNouveauxConcours: CoursNouveauConcours[] = [
  // ───────── ADJOINT D'ANIMATION ─────────
  {
    id: "anim-metier",
    concoursId: "adjoint-animation",
    title: "Le métier d'adjoint territorial d'animation",
    resume:
      "Cadre d'emplois, missions, grades, lien avec les autres acteurs de l'animation et obligations de l'agent public.",
    duree: "40 minutes",
    sections: [
      {
        titre: "Le cadre d'emplois",
        tableau: {
          entetes: ["Grade", "Échelle", "Missions"],
          lignes: [
            [
              "Adjoint territorial d'animation",
              "C1",
              "Mise en œuvre des activités sous la responsabilité d'un supérieur",
            ],
            [
              "Adjoint principal 2e classe",
              "C2",
              "Activités nécessitant une compétence reconnue, éventuellement sous la responsabilité d'un animateur",
            ],
            ["Adjoint principal 1re classe", "C3", "Mêmes missions, grade d'avancement"],
          ],
        },
      },
      {
        titre: "Les missions",
        points: [
          "Animation dans le secteur périscolaire, les quartiers, la médiation sociale, le développement rural, les loisirs.",
          "Intervention au sein de structures d'accueil ou d'hébergement.",
          "Médiation sociale : prévention des conflits et rétablissement du dialogue dans les espaces publics, sous la responsabilité d'un animateur territorial ou d'un cadre A.",
          "Participation à la mise en œuvre des activités d'animation.",
        ],
      },
      {
        titre: "Les obligations de l'agent public",
        points: [
          "Neutralité et laïcité : ne pas manifester ses convictions personnelles dans l'exercice des fonctions.",
          "Discrétion professionnelle : ne pas divulguer les informations sur les usagers.",
          "Obéissance hiérarchique : suivre les instructions de son supérieur sauf si elles sont contraires à la loi ou à la déontologie.",
          "Protection des mineurs : signaler toute situation mettant en danger un enfant.",
        ],
      },
      {
        titre: "Les acteurs de l'animation territoriale",
        tableau: {
          entetes: ["Acteur", "Rôle"],
          lignes: [
            ["Commune", "Employeur, organise les services d'animation, gère les équipements"],
            [
              "SDJES",
              "Service départemental à la jeunesse, à l'engagement et aux sports : agrément et contrôle des ACM",
            ],
            ["CAF", "Co-finance les structures d'accueil de loisirs"],
            ["Associations", "Partenaires de l'animation locale"],
            ["Éducation nationale", "Partenaire pour le temps périscolaire"],
          ],
        },
      },
    ],
    aRetenir: [
      "L'adjoint d'animation intervient dans le périscolaire, les loisirs, la médiation et le développement social.",
      "Il agit sous la responsabilité d'un animateur territorial ou d'un cadre A.",
      "Le SDJES agrée et contrôle les ACM (accueils collectifs de mineurs).",
      "Neutralité, discrétion, obéissance hiérarchique, protection des mineurs.",
    ],
    pieges: [
      "Croire que l'adjoint d'animation peut décider seul des activités sans en référer à sa hiérarchie.",
      "Confondre SDJES (État) et commune (employeur).",
    ],
  },
  {
    id: "anim-publics-accueil",
    concoursId: "adjoint-animation",
    title: "Les publics, l'accueil et la protection des mineurs",
    resume:
      "Connaissance des publics, techniques d'accueil, droits de l'enfant, protection des mineurs, réglementation des ACM.",
    duree: "50 minutes",
    sections: [
      {
        titre: "Connaître les publics",
        points: [
          "Enfants et adolescents : stades de développement (moteur, cognitif, social, affectif) selon les tranches d'âge.",
          "Seniors, personnes en situation de handicap, publics en difficulté sociale : adapter les activités.",
          "Psychologie comportementale de base : besoins fondamentaux (sécurité, appartenance, estime, réalisation), gestion des conflits, posture bienveillante.",
          "Comprendre les comportements : ne pas réagir par l'autorité seule, chercher la cause du comportement.",
        ],
      },
      {
        titre: "Les techniques d'accueil",
        points: [
          "Accueil physique : sourire, contact visuel, se rendre disponible, adapter le registre de langage au public.",
          "Accueil téléphonique : décrocher rapidement, identifier le service, écouter, reformuler, orienter.",
          "Accueil de loisirs : rituel d'accueil des enfants, temps de séparation avec les parents, liste de présence, PAI.",
          "Les situations difficiles : conflit, incompréhension, langue étrangère, personne agressive — désamorcer, rester calme, interpeller un supérieur si nécessaire.",
        ],
      },
      {
        titre: "Protection des mineurs et droits de l'enfant",
        tableau: {
          entetes: ["Principe", "Application concrète"],
          lignes: [
            [
              "Convention internationale des droits de l'enfant (CIDE, 1989)",
              "Droit à la protection, à la participation, à l'éducation, à ne pas être maltraité",
            ],
            [
              "Signalement obligatoire",
              "Tout professionnel doit signaler une situation de danger d'un mineur à l'autorité compétente (directeur, 119, procureur)",
            ],
            [
              "Secret professionnel partagé",
              "Le professionnel peut partager des informations avec d'autres membres de l'équipe pluridisciplinaire pour protéger l'enfant",
            ],
            [
              "Droit à l'image des mineurs",
              "Autorisation écrite des titulaires de l'autorité parentale pour toute diffusion",
            ],
          ],
        },
      },
      {
        titre: "Réglementation des accueils collectifs de mineurs (ACM)",
        points: [
          "Déclaration obligatoire auprès du SDJES avant tout ACM.",
          "Taux d'encadrement : pour les moins de 6 ans, 1 animateur pour 8 enfants ; de 6 à 17 ans, 1 pour 12 (séjour avec hébergement), 1 pour 14 (séjour sans hébergement).",
          "Le directeur d'ACM doit posséder le BAFD (ou diplôme équivalent) pour les séjours de plus de 7 nuits ou les accueils de plus de 80 enfants.",
          "Projet pédagogique : document écrit précisant les objectifs, l'organisation et les modalités d'évaluation.",
          "Registre de présence, registre de sécurité.",
        ],
        reperes: [
          "1 animateur pour 8 enfants de moins de 6 ans ; 1 pour 12 au-delà en séjour avec hébergement",
        ],
      },
      {
        titre: "Hygiène, santé et sécurité dans les activités",
        points: [
          "PAI (projet d'accueil individualisé) : pour les enfants avec maladie chronique, allergie ou traitement. Contient la conduite à tenir en urgence.",
          "Trousse de premiers secours obligatoire, liste des médicaments autorisés par le directeur d'ACM.",
          "Locaux et équipements : vérification régulière, registre de sécurité, plans d'évacuation.",
          "Responsabilité civile et pénale de l'animateur : signaler tout incident, ne jamais laisser un enfant seul dans une situation de danger.",
        ],
      },
    ],
    aRetenir: [
      "1 animateur pour 8 enfants de moins de 6 ans, 1 pour 12 au-delà (séjour avec hébergement).",
      "BAFD obligatoire pour diriger un séjour de plus de 7 nuits ou un accueil de plus de 80 enfants.",
      "Le signalement de danger d'un mineur est obligatoire.",
      "PAI : pathologie, traitement, conduite à tenir en urgence.",
    ],
    pieges: [
      "Confondre les taux d'encadrement selon l'âge et le type d'accueil.",
      "Croire qu'un animateur peut administrer des médicaments sans autorisation.",
      "Oublier que le droit à l'image des mineurs exige une autorisation écrite des parents.",
    ],
  },
  {
    id: "anim-pedagogie",
    concoursId: "adjoint-animation",
    title: "Méthodes pédagogiques et animation d'activités",
    resume:
      "Concevoir, préparer et animer des activités ; méthodes et moyens pédagogiques ; évaluation et bilan.",
    duree: "40 minutes",
    sections: [
      {
        titre: "Le cycle d'une activité",
        points: [
          "Diagnostic : identifier les besoins et les envies du public.",
          "Conception : définir les objectifs (cognitifs, sociaux, moteurs), les moyens, le matériel, le temps, les règles de sécurité.",
          "Préparation : préparer l'espace, le matériel, prévenir les risques.",
          "Animation : lancer l'activité, gérer le groupe, adapter le rythme, réguler les conflits.",
          "Bilan : évaluer avec les participants, noter les points à améliorer.",
        ],
      },
      {
        titre: "Les méthodes pédagogiques",
        tableau: {
          entetes: ["Méthode", "Principe", "Exemple"],
          lignes: [
            [
              "Expositive",
              "L'animateur transmet, le public écoute",
              "Présentation d'un artiste avant un atelier",
            ],
            [
              "Interrogative",
              "L'animateur pose des questions pour construire avec le groupe",
              "Quiz sur un thème avant une sortie",
            ],
            [
              "Active",
              "Le public agit, expérimente, construit ses apprentissages",
              "Atelier de création, jeu coopératif",
            ],
            [
              "Découverte",
              "Partir d'une situation problème pour faire émerger les solutions",
              "Explorer un parc naturel et identifier des espèces",
            ],
          ],
        },
      },
      {
        titre: "Travailler en équipe",
        points: [
          "Rendre compte à son directeur des problèmes rencontrés, sans attendre.",
          "Participer aux réunions d'équipe et aux temps de préparation collective.",
          "Respecter le secret professionnel sur la situation des enfants et des familles.",
          "Gérer son positionnement : ne pas contredire un collègue devant les enfants, régler les désaccords en privé.",
        ],
      },
    ],
    aRetenir: [
      "Une activité suit un cycle : diagnostic, conception, préparation, animation, bilan.",
      "La méthode active fait agir le public ; la méthode expositive transmet.",
      "Rendre compte à son directeur est une obligation, pas une option.",
    ],
    pieges: [
      "Préparer une activité sans réfléchir aux risques et à la sécurité.",
      "Régler un désaccord avec un collègue devant les enfants.",
    ],
  },
  // ───────── ADJOINT DU PATRIMOINE ─────────
  {
    id: "pat-metier",
    concoursId: "adjoint-patrimoine",
    title: "Le métier d'adjoint territorial du patrimoine",
    resume:
      "Missions dans les bibliothèques, archives, musées, parcs et établissements d'enseignement artistique ; accueil, surveillance, conservation.",
    duree: "40 minutes",
    sections: [
      {
        titre: "Les cinq emplois du cadre d'emplois",
        tableau: {
          entetes: ["Emploi", "Structure d'affectation", "Missions principales"],
          lignes: [
            [
              "Magasinier de bibliothèque",
              "Bibliothèque",
              "Classement des collections, équipement, entretien des rayonnages, manutention, sécurité des personnes",
            ],
            [
              "Magasinier d'archives",
              "Archives",
              "Accueil du public, entretien des locaux, collecte, rangement, communication et réintégration des documents",
            ],
            [
              "Surveillant de musées et monuments historiques",
              "Musées, monuments",
              "Accueil du public, entretien, visites commentées, animation",
            ],
            [
              "Surveillant d'établissements d'enseignement culturel",
              "Conservatoires, écoles d'art",
              "Surveillance des ateliers et salles, assiduité des élèves, préparation du matériel, organisation des concours et expositions",
            ],
            [
              "Surveillant de parcs et jardins",
              "Parcs municipaux",
              "Accueil du public, respect du règlement, conservation du patrimoine botanique, visites commentées",
            ],
          ],
        },
      },
      {
        titre: "Le principal de 2e classe : rôle d'encadrant",
        points: [
          "Le principal de 2e classe assure le contrôle hiérarchique et technique des adjoints territoriaux du patrimoine.",
          "Des missions particulières, y compris d'une haute technicité, peuvent lui être confiées.",
          "En bibliothèque, il peut être chargé de fonctions d'aide à l'animation, d'accueil du public (notamment des enfants) et de promotion de la lecture publique.",
        ],
      },
    ],
    aRetenir: [
      "Cinq emplois : bibliothèque, archives, musées et monuments, établissements culturels, parcs et jardins.",
      "Le principal de 2e classe encadre les adjoints et peut exercer des missions de haute technicité.",
      "Toutes les affectations impliquent surveillance, accueil du public et entretien des locaux.",
    ],
    pieges: [
      "Croire que les missions se limitent à la surveillance : l'animation, la médiation et l'accueil en font partie.",
      "Confondre magasinier d'archives (accueil, communication de documents) et surveillant de musée (accueil et visites).",
    ],
  },
  {
    id: "pat-accueil-securite",
    concoursId: "adjoint-patrimoine",
    title: "Accueil du public, animation et sécurité dans les établissements culturels",
    resume:
      "Techniques d'accueil, médiation culturelle, publics empêchés, sécurité incendie, procédures d'urgence.",
    duree: "50 minutes",
    sections: [
      {
        titre: "L'accueil du public",
        points: [
          "Accueillir chaleureusement : identifier les besoins, orienter, expliquer les modalités d'inscription (bibliothèque, archives).",
          "Public empêché : personnes en situation de handicap, personnes âgées, détenus, hospitalisés — leur permettre d'accéder aux services culturels par des adaptations (accueil à domicile, prêt de livres numériques, partenariats).",
          "Gestion d'un conflit avec un usager : rester calme, écouter, appliquer le règlement intérieur, interpeller un supérieur si nécessaire.",
        ],
      },
      {
        titre: "Animation et médiation culturelle",
        tableau: {
          entetes: ["Type de médiation", "Support", "Public type", "Atout", "Contrainte"],
          lignes: [
            [
              "Visite guidée",
              "Oral",
              "Averti (sauf visite spéciale enfants)",
              "Contact direct, questions-réponses",
              "Niveau d'expertise de l'animateur",
            ],
            [
              "Panneaux explicatifs",
              "Écrit",
              "Tout public",
              "Disponible en permanence, sans animateur",
              "Obsolescence, maintenance à assurer",
            ],
            [
              "Activité numérique",
              "Smartphone, tablette",
              "Enfants, familles",
              "Interactif, ludique",
              "Coût du matériel, compétences numériques",
            ],
          ],
        },
      },
      {
        titre: "Sécurité des personnes et des bâtiments",
        points: [
          "Rôle du guide-file et du serre-file lors d'une évacuation : le guide-file guide le groupe vers la sortie, le serre-file ferme la marche et s'assure que personne ne reste.",
          "Pictogrammes de sécurité : sortie de secours (homme courant), extincteur (flamme), point de rassemblement, interdit d'accès.",
          "Conduite à tenir en cas d'incendie : donner l'alarme, évacuer, appeler les secours (18), ne pas utiliser les ascenseurs, se diriger vers le point de rassemblement.",
          "Conduite à tenir face à un malaise d'un usager : évaluer l'état de conscience, appeler le 15 (SAMU), appliquer les gestes de premiers secours si formé, ne pas déplacer un blessé.",
          "Protection d'une œuvre d'art menacée : alerter le responsable immédiatement, ne pas toucher soi-même l'objet, enregistrer les informations (heure, description de l'incident).",
        ],
        reperes: [
          "Guide-file : devant ; serre-file : derrière — ensemble ils assurent que personne n'est oublié",
        ],
      },
      {
        titre: "Préparation et animation d'un atelier",
        points: [
          "Définir les objectifs de l'atelier, le public cible, les moyens humains et techniques, la durée.",
          "Exemple d'atelier en bibliothèque : « Repérer les fake news » pour des adolescents — objectif : esprit critique, description : analyse d'articles en ligne, moyens : tablettes et connexion internet, animateur formé.",
          "Évaluation : recueillir les avis des participants, noter les difficultés rencontrées, prévoir des ajustements.",
        ],
      },
    ],
    aRetenir: [
      "Public empêché : adapter les services pour permettre l'accès à tous.",
      "Évacuation : guide-file devant, serre-file derrière.",
      "Malaise d'un usager : évaluer, appeler le 15, premiers secours si formé, ne pas déplacer.",
      "Une œuvre vandalisée : alerter, ne pas toucher, noter les informations.",
    ],
    pieges: [
      "Toucher ou tenter de nettoyer une œuvre d'art endommagée.",
      "Oublier le serre-file lors d'une évacuation.",
      "Utiliser l'ascenseur pour évacuer en cas d'incendie.",
    ],
  },
  // ───────── AGENT SOCIAL ─────────
  {
    id: "soc-metier",
    concoursId: "agent-social",
    title: "Le métier d'agent social territorial",
    resume:
      "Missions d'aide à domicile et de maintien à domicile, publics accompagnés, partenaires, rôle préventif et éducatif.",
    duree: "45 minutes",
    sections: [
      {
        titre: "Les trois emplois du cadre d'emplois",
        tableau: {
          entetes: ["Emploi", "Public", "Missions principales"],
          lignes: [
            [
              "Aide-ménagère / auxiliaire de vie",
              "Personnes âgées, handicapées",
              "Aide aux actes de la vie quotidienne (ménage, courses, repas, toilette), maintien à domicile",
            ],
            [
              "Travailleur familial",
              "Familles en difficulté, personnes âgées, infirmes",
              "Aide ménagère, surveillance des enfants, action sociale, préventive et éducative",
            ],
            [
              "Agent d'accueil des services sociaux",
              "Usagers des services sociaux",
              "Accueil, renseignement, orientation, accompagnement dans les démarches administratives initiales",
            ],
          ],
        },
      },
      {
        titre: "Maintien à domicile et besoins des personnes",
        points: [
          "Le maintien à domicile : permettre à une personne âgée, handicapée ou en difficulté de rester chez elle dans les meilleures conditions possibles.",
          "Évaluation des besoins : activités de la vie quotidienne (AVQ), état de santé, isolement social, environnement du domicile.",
          "Adaptation de l'aide : respecter le rythme et les choix de la personne, préserver son autonomie (faire avec, pas à la place).",
          "Signalement : si la situation se dégrade (état de santé, maltraitance, risque), rendre compte au responsable et aux services compétents.",
        ],
      },
      {
        titre: "Vieillissement, handicap et dépendance",
        points: [
          "Approche du vieillissement : modifications physiques (motricité, vue, ouïe), cognitives (mémoire) et sociales (isolement, deuil).",
          "Perception du handicap : handicap moteur, sensoriel, psychique, cognitif — adapter la communication et l'aide selon le type de handicap.",
          "Dépendance : perte partielle ou totale d'autonomie ; évaluée par la grille AGGIR (Autonomie Gérontologie Groupe Iso-Ressources).",
          "Le rôle préventif : repérer les signes de déclin, prévenir les chutes, alerter les professionnels de santé.",
        ],
      },
      {
        titre: "Le rôle éducatif auprès des familles",
        points: [
          "Auprès des familles en difficulté : aide aux tâches ménagères, surveillance des enfants, maintien ou rétablissement de l'équilibre familial.",
          "Rôle éducatif : éveiller aux bonnes pratiques d'hygiène et d'alimentation, aider les parents dans leur rôle (sans se substituer à eux).",
          "Travailler avec d'autres professionnels : assistants sociaux, médecins, infirmières, éducateurs de jeunes enfants — partage d'informations dans le cadre du secret partagé.",
        ],
      },
      {
        titre: "Le CCAS et l'environnement territorial",
        points: [
          "Le Centre Communal d'Action Sociale (CCAS) est un établissement public communal qui coordonne l'action sociale locale.",
          "Il anime une action générale de prévention et de développement social : aide alimentaire, aide aux vacances, maintien à domicile, lien avec les services sociaux.",
          "L'agent social travaille souvent sous la tutelle du CCAS ou d'un service municipal dédié.",
        ],
      },
    ],
    aRetenir: [
      "Trois emplois : aide-ménagère / auxiliaire de vie, travailleur familial, agent d'accueil des services sociaux.",
      "Maintien à domicile : faire avec la personne, préserver son autonomie, ne pas faire à sa place.",
      "CCAS : établissement public communal, chef de file de l'action sociale locale.",
      "Dépendance évaluée par la grille AGGIR.",
    ],
    pieges: [
      "Se substituer à la personne au lieu de l'aider à faire elle-même.",
      "Garder pour soi une information sur une situation de danger ou de maltraitance.",
      "Confondre maintien à domicile et hospitalisation.",
    ],
  },
  {
    id: "soc-entretien",
    concoursId: "agent-social",
    title: "Se préparer à l'entretien du jury",
    resume:
      "Structure de l'entretien, exposé de l'expérience, questions types, posture professionnelle.",
    duree: "35 minutes",
    sections: [
      {
        titre: "Structure de l'entretien (15 minutes dont 5 d'exposé)",
        tableau: {
          entetes: ["Partie", "Durée", "Contenu"],
          lignes: [
            [
              "Exposé du candidat",
              "5 min au plus",
              "Présenter son parcours, ses missions, les compétences acquises et leur lien avec le métier d'agent social",
            ],
            [
              "Questions du jury",
              "10 min environ",
              "Questions sur le métier, mises en situation, questions sur l'environnement territorial",
            ],
          ],
        },
        points: [
          "Coefficient 3 : c'est l'épreuve la plus importante de l'examen professionnel.",
          "Toute note inférieure à 5 sur 20 est éliminatoire.",
          "Le candidat ne peut pas utiliser de support pendant l'épreuve.",
          "Un exposé interrompu à 5 minutes (hors temps) ou très court est pénalisé.",
        ],
      },
      {
        titre: "Construire son exposé",
        points: [
          "Introduire en nommant son parcours en deux phrases.",
          "Décrire ses principales expériences auprès des personnes accompagnées : les publics, les missions, les difficultés rencontrées et les solutions apportées.",
          "Valoriser les compétences acquises : sens de l'écoute, discrétion, travail en équipe, capacité à adapter l'aide, connaissance des partenaires.",
          "Conclure sur sa motivation à progresser vers le grade de principal de 2e classe.",
          "Durée : environ 4 à 5 minutes. Se chronomètrer lors des entraînements.",
        ],
      },
      {
        titre: "Questions types et éléments de réponse",
        tableau: {
          entetes: ["Question", "Points clés à aborder"],
          lignes: [
            [
              "Décrivez une situation difficile et comment vous l'avez gérée.",
              "Identifier le problème, les actions prises, le résultat, ce que vous en avez appris",
            ],
            [
              "Comment travaillez-vous avec les autres professionnels ?",
              "Secret partagé, réunion de coordination, traçabilité des informations, rôle de chacun",
            ],
            [
              "Qu'est-ce que la discrétion professionnelle pour vous ?",
              "Ne pas divulguer les informations sur les usagers en dehors du cercle professionnel concerné",
            ],
            [
              "Comment réagissez-vous face à une situation de maltraitance ?",
              "Signaler au responsable, ne pas agir seul, contacter les services compétents (119, services sociaux)",
            ],
            [
              "Qu'est-ce que le CCAS ?",
              "Établissement public communal, coordination de l'action sociale locale",
            ],
          ],
        },
      },
      {
        titre: "Posture professionnelle",
        points: [
          "Gérer son temps : être précis et ne pas déborder les 5 minutes d'exposé.",
          "Être cohérent : ne pas se contredire, défendre ses positions calmement.",
          "Communiquer clairement : voix audible, ni trop vite ni trop lentement, s'adresser à tout le jury.",
          "Respecter sa place de candidat : ne pas être péremptoire, argumenter en cas de désaccord.",
        ],
      },
    ],
    aRetenir: [
      "Entretien de 15 minutes : 5 minutes d'exposé, 10 minutes de questions. Coefficient 3.",
      "L'exposé valorise des compétences, pas une liste de dates.",
      "La discrétion professionnelle interdit de parler des usagers en dehors du service.",
      "Face à une maltraitance : signaler au responsable, ne pas agir seul.",
    ],
    pieges: [
      "Dépasser les 5 minutes d'exposé.",
      "Répondre aux questions avec des généralités sans exemples concrets.",
      "Oublier de mentionner le CCAS dans les questions sur l'environnement territorial.",
    ],
  },
  // ───────── AUXILIAIRE DE PUÉRICULTURE ─────────
  {
    id: "puer-metier",
    concoursId: "auxiliaire-puericulture",
    title: "Le métier d'auxiliaire de puériculture territorial",
    resume:
      "Missions, lieux d'exercice, développement de l'enfant, hygiène et soins, partenaires et entretien avec le jury.",
    duree: "50 minutes",
    sections: [
      {
        titre: "Missions et lieux d'exercice",
        points: [
          "L'auxiliaire de puériculture est un professionnel de santé qui collabore aux soins infirmiers.",
          "Il assure l'accueil, le confort, les soins d'hygiène et l'alimentation des enfants de 0 à 6 ans.",
          "Il participe aux activités d'éveil et de jeu adaptées à l'âge des enfants.",
          "Lieux d'exercice : crèches collectives et familiales, haltes-garderies, établissements multi-accueil, maisons de l'enfance, services de pédiatrie, PMI (Protection maternelle et infantile).",
        ],
      },
      {
        titre: "Développement de l'enfant de 0 à 6 ans",
        tableau: {
          entetes: [
            "Tranche d'âge",
            "Développement moteur",
            "Développement du langage",
            "Développement social",
          ],
          lignes: [
            [
              "0-3 mois",
              "Réflexes, contrôle de la tête",
              "Pleurs, gazouillis",
              "Sourire social dès 2 mois",
            ],
            [
              "3-12 mois",
              "Tient assis, puis se met debout",
              "Babillage, premiers mots (~12 mois)",
              "Attachement, peur de l'étranger (~8 mois)",
            ],
            [
              "1-2 ans",
              "Marche, court, monte les escaliers",
              "Mots-phrases, vocabulaire de 50 mots",
              "Jeu parallèle",
            ],
            [
              "2-3 ans",
              "Lance, attrape, s'habille partiellement",
              "Phrases courtes, environ 300 mots",
              "Crises de colère, autonomisation",
            ],
            [
              "3-6 ans",
              "Dessine, écrit, s'habille seul",
              "Syntaxe complexe, 1 000 à 2 000 mots",
              "Jeu symbolique, coopération",
            ],
          ],
        },
      },
      {
        titre: "Hygiène, soins et alimentation",
        points: [
          "Change et toilette : respecter l'intimité de l'enfant, utiliser les EPI, désinfecter le plan de change entre chaque enfant.",
          "Alimentation : respecter les régimes (PAI, allergie, lait maternel), température du biberon (37 °C), textures adaptées à l'âge.",
          "Sommeil : laisser le bébé dormir sur le dos, sans couverture épaisse ni oreiller (prévention de la mort subite du nourrisson).",
          "Médicaments : ne jamais donner un médicament sans prescription médicale ou PAI.",
        ],
        reperes: [
          "Prévention mort subite du nourrisson : sur le dos, sur un matelas ferme, sans couverture ni oreiller, dans une pièce à 18-20 °C",
        ],
      },
      {
        titre: "L'entretien avec le jury",
        points: [
          "Le concours comprend une unique épreuve d'admission : un entretien évaluant les connaissances professionnelles, la motivation et l'aptitude.",
          "Le jury peut interroger sur : les soins aux nourrissons, la prévention, l'accueil des familles, les protocoles d'hygiène, les situations d'urgence, la collaboration avec l'équipe pluridisciplinaire.",
          "Préparer des exemples concrets de sa formation ou de ses stages.",
          "Toute note inférieure à 5 sur 20 est éliminatoire ; aucun candidat n'est admis sous 10 sur 20.",
        ],
      },
    ],
    aRetenir: [
      "L'auxiliaire de puériculture collabore aux soins, assure l'accueil, les soins d'hygiène et les activités d'éveil de 0 à 6 ans.",
      "Prévention de la mort subite : sur le dos, matelas ferme, sans couverture épaisse, chambre à 18-20 °C.",
      "Ne jamais donner un médicament sans prescription.",
      "Le concours se compose d'un unique entretien avec le jury.",
    ],
    pieges: [
      "Coucher un bébé sur le ventre ou avec un oreiller.",
      "Administrer un médicament sans PAI ni prescription.",
      "Oublier de désinfecter le plan de change entre deux enfants.",
    ],
  },
  // ───────── ÉDUCATEUR DES APS ─────────
  {
    id: "aps-metier",
    concoursId: "educateur-aps",
    title: "Le métier d'éducateur territorial des APS",
    resume:
      "Missions, encadrement des pratiques sportives, réglementation, politiques sportives locales et préparation à l'épreuve d'admissibilité.",
    duree: "45 minutes",
    sections: [
      {
        titre: "Missions du cadre d'emplois",
        points: [
          "Concevoir, coordonner et encadrer des activités physiques et sportives (APS) dans les équipements municipaux.",
          "Élaborer et mettre en œuvre des projets sportifs et pédagogiques.",
          "Travailler en lien avec les associations sportives, les établissements scolaires, les clubs et les fédérations.",
          "Participer à la définition des politiques sportives de la collectivité.",
          "Encadrer et animer des séances auprès de tous les publics (scolaires, associations, seniors, personnes handicapées).",
        ],
      },
      {
        titre: "Le sport comme politique publique locale",
        points: [
          "Le service des sports de la commune gère les équipements, les associations, les subventions et les événements sportifs.",
          "Le Plan National Sport Santé Bien-Être et les politiques de sport santé : lien entre pratique sportive et santé publique.",
          "Le sport inclusif : adapter les pratiques aux personnes en situation de handicap (handisport, sport adapté).",
          "Les associations sportives : partenaires essentiels, soutenues par des subventions et mises à disposition d'équipements ; contrôle de leur gestion par la commune.",
        ],
      },
      {
        titre: "Réglementation des APS",
        points: [
          "Obligation de qualification pour encadrer contre rémunération : diplômes d'État (BPJEPS, DEJEPS, DESJEPS) ou équivalents.",
          "Respect des règles de sécurité dans les piscines : surveillance du bassin, ratio surnageants/nageurs, procédure de noyade.",
          "Responsabilité de l'encadrant : obligation de moyens, surveillance constante, signalement des incidents.",
          "Équipements sportifs : registre de sécurité, contrôles réglementaires, plan d'évacuation.",
        ],
      },
      {
        titre: "L'épreuve d'admissibilité (externe : composition 3 h)",
        points: [
          "Le sujet porte sur un thème d'ordre général relatif à l'animation sportive et aux politiques sportives locales.",
          "Structure attendue : introduction (définition du sujet, annonce du plan), développement en deux ou trois parties argumentées avec exemples concrets, conclusion.",
          "Ne pas réciter un cours : analyser le sujet, prendre position, illustrer avec des exemples de terrain.",
          "Soigner la présentation : écriture lisible, encre noire ou bleue, pas de signe distinctif.",
        ],
      },
    ],
    aRetenir: [
      "L'éducateur des APS conçoit et encadre les activités sportives, et participe aux politiques sportives locales.",
      "Obligation de qualification pour encadrer contre rémunération : diplômes d'État.",
      "Sport inclusif : adapter les pratiques aux personnes handicapées.",
      "Composition 3 h : analyser, argumenter, illustrer, ne pas réciter un cours.",
    ],
    pieges: [
      "Croire que n'importe qui peut encadrer une activité sportive contre rémunération.",
      "Faire une liste de connaissances sans répondre à la problématique du sujet.",
    ],
  },
  // ───────── OPÉRATEUR DES APS ─────────
  {
    id: "oaps-metier",
    concoursId: "operateur-aps",
    title: "Le métier d'opérateur territorial des APS",
    resume:
      "Accueil et surveillance des équipements sportifs, sécurité des pratiquants, hygiène et entretien, travail sous la direction d'un éducateur des APS.",
    duree: "35 minutes",
    sections: [
      {
        titre: "Missions du cadre d'emplois",
        points: [
          "Assurer l'accueil et la surveillance des équipements sportifs (piscines, gymnases, stades, salles polyvalentes).",
          "Participer à des animations sportives sous la direction d'un éducateur des APS.",
          "Entretenir les équipements et veiller à la propreté des locaux.",
          "Vérifier la conformité des équipements de sécurité.",
          "L'opérateur est placé sous la responsabilité d'un éducateur des APS ou d'un cadre de la collectivité.",
        ],
      },
      {
        titre: "Surveillance d'une piscine",
        points: [
          "Le maître-nageur-sauveteur (MNS) est responsable de la sécurité dans les bassins ; il doit posséder le BEESAN (Brevet d'État d'Éducateur des Activités de la Natation) ou le BPJEPS AAN.",
          "L'opérateur des APS peut assister à la surveillance mais ne remplace pas le MNS pour la responsabilité de sécurité.",
          "Procédure en cas de noyade : donner l'alarme, sortir la victime de l'eau, pratiquer les gestes de premiers secours, appeler le 15.",
          "Règles d'hygiène en piscine : douche obligatoire avant d'entrer, bonnet de bain, interdiction de courir, contrôle de la qualité de l'eau.",
        ],
      },
      {
        titre: "Sécurité et hygiène dans les équipements sportifs",
        points: [
          "Registre de sécurité : contrôles périodiques des équipements (filets, poteaux, cage de buts, vestiaires).",
          "ERP (établissement recevant du public) : catégorie selon l'effectif, contrôles obligatoires, système de sécurité incendie.",
          "Nettoyage et désinfection : protocoles adaptés aux vestiaires et aux bassins (risque de mycoses, légionellose).",
          "Produits d'entretien : lire la fiche de données de sécurité, ne pas mélanger des produits, porter les EPI.",
        ],
      },
    ],
    aRetenir: [
      "L'opérateur accueille, surveille et entretient les équipements sportifs sous la direction d'un éducateur.",
      "Il ne remplace pas le maître-nageur-sauveteur pour la responsabilité de sécurité en piscine.",
      "ERP : catégorie selon l'effectif accueilli, contrôles réglementaires obligatoires.",
      "Noyade : alarme, sortir de l'eau, gestes de premiers secours, appeler le 15.",
    ],
    pieges: [
      "Croire que l'opérateur des APS peut assurer seul la surveillance d'un bassin.",
      "Mélanger des produits d'entretien différents.",
    ],
  },
  // ───────── ÉDUCATEUR DE JEUNES ENFANTS ─────────
  {
    id: "eje-metier",
    concoursId: "educateur-jeunes-enfants",
    title: "Le métier d'éducateur territorial de jeunes enfants",
    resume:
      "Missions, conception de projets éducatifs, développement de l'enfant, travail en équipe pluridisciplinaire, partenaires.",
    duree: "50 minutes",
    sections: [
      {
        titre: "Missions du cadre d'emplois",
        points: [
          "Concevoir et mettre en œuvre des projets éducatifs et pédagogiques dans les établissements d'accueil du jeune enfant (EAJE).",
          "Assurer les conditions de bien-être, de sécurité et de développement des enfants de 0 à 6 ans.",
          "Travailler en équipe pluridisciplinaire (puéricultrice, auxiliaire de puériculture, médecin, psychologue).",
          "Établir une relation de confiance avec les familles, les soutenir dans leur rôle parental.",
          "Lieux d'exercice : crèches, haltes-garderies, établissements multi-accueil, jardins d'enfants, lieux d'accueil enfants-parents (LAEP).",
        ],
      },
      {
        titre: "Le projet d'établissement et le projet pédagogique",
        points: [
          "Le projet d'établissement définit les valeurs, les orientations et les modalités de fonctionnement de la structure.",
          "Le projet pédagogique décline le projet d'établissement en actions concrètes : objectifs éducatifs, activités proposées, organisation de la journée, relations avec les familles.",
          "L'EJE est souvent référent du projet pédagogique : il l'élabore avec l'équipe, le fait vivre et l'évalue.",
          "Le Référentiel national de qualité des EAJE (en vigueur depuis 2021) fixe des exigences en matière de projet éducatif, de santé, de sécurité et d'accueil inclusif.",
        ],
      },
      {
        titre: "Accueil inclusif et enfants à besoins éducatifs particuliers",
        points: [
          "Accueil d'enfants en situation de handicap : adapter le projet d'accueil, travailler avec des professionnels spécialisés (ergothérapeute, orthophoniste).",
          "Protocole d'accueil individualisé (PAI) : indispensable pour les enfants avec maladie chronique ou allergie.",
          "Favoriser la mixité sociale et culturelle dans les activités.",
        ],
      },
      {
        titre: "L'épreuve d'admissibilité (étude de situation 3 h)",
        points: [
          "Le sujet présente un dossier décrivant une situation professionnelle rencontrée par un EJE.",
          "Le candidat doit analyser la situation, identifier les enjeux, proposer des réponses argumentées.",
          "Ne pas décrire le document : l'analyser, prendre position, s'appuyer sur ses connaissances professionnelles.",
          "Penser à la pluridisciplinarité, au partenariat et aux références réglementaires.",
        ],
      },
    ],
    aRetenir: [
      "L'EJE conçoit et met en œuvre les projets éducatifs, en équipe pluridisciplinaire.",
      "Lieux d'exercice : crèches, multi-accueil, jardins d'enfants, LAEP.",
      "Le projet pédagogique décline les valeurs de l'établissement en actions concrètes.",
      "Accueil inclusif : adapter la structure à chaque enfant, PAI si nécessaire.",
    ],
    pieges: [
      "Croire que l'EJE travaille seul : la pluridisciplinarité est au cœur du métier.",
      "Dans l'épreuve, décrire le dossier plutôt que l'analyser.",
    ],
  },
  // ───────── CHEF DE SERVICE DE POLICE MUNICIPALE ─────────
  {
    id: "pm-chef-service",
    concoursId: "chef-service-pm",
    title: "Le chef de service de police municipale : missions, management et droit",
    resume:
      "Rôle de commandement, missions de la police municipale, cadre pénal et procédure, organisation et management d'équipe.",
    duree: "50 minutes",
    sections: [
      {
        titre: "Le cadre juridique de la police municipale",
        points: [
          "Le chef de service de police municipale (CSPM) dirige, anime et contrôle les gardiens-brigadiers et agents de police sous l'autorité du maire.",
          "La police municipale est compétente en matière de police administrative (prévention des troubles à l'ordre public) et de police judiciaire (constatation des infractions).",
          "Les agents de police municipale sont des agents de police judiciaire adjoints (APJA) : ils constatent certaines contraventions, interpellent, procèdent aux vérifications d'identité.",
          "Le procureur de la République supervise les missions judiciaires de la police municipale.",
        ],
      },
      {
        titre: "Les missions opérationnelles",
        points: [
          "Surveillance et présence sur la voie publique : prévention des incivilités et des troubles à l'ordre public.",
          "Police de la circulation et du stationnement.",
          "Exécution des arrêtés du maire : fermetures d'établissements, arrêtés de police, réglementation des marchés.",
          "Coordination avec la police nationale et la gendarmerie : convention de coordination obligatoire pour les communes dotées d'une police municipale.",
        ],
      },
      {
        titre: "Management et encadrement",
        points: [
          "Organiser les plannings et les patrouilles en fonction des priorités définies par le maire.",
          "Conduire les entretiens professionnels annuels des agents.",
          "Gérer les situations conflictuelles : médiation entre agents, recadrage, si besoin signalement à la hiérarchie et à l'autorité territoriale.",
          "Faire respecter les règles déontologiques : impartialité, neutralité, discrétion, intégrité.",
          "Rédiger des rapports d'activité et des notes à l'attention du maire ou du directeur général des services.",
        ],
      },
      {
        titre: "L'épreuve d'admissibilité (composition ou rapport 3 h)",
        points: [
          "Voie externe : composition sur un sujet d'ordre général relatif à la sécurité locale.",
          "Voie interne et 3e concours : rapport avec propositions sur la base d'un dossier documentaire.",
          "Le rapport comprend : un rappel du contexte, une analyse du problème, des propositions concrètes et motivées.",
          "Ne pas oublier les tests psychotechniques et l'épreuve sportive lors de l'admission.",
        ],
      },
    ],
    aRetenir: [
      "La police municipale relève de l'autorité du maire ; la police judiciaire relève du procureur.",
      "Les agents de PM sont des APJA : compétence limitée, convention de coordination obligatoire avec PN/gendarmerie.",
      "Le chef de service organise, encadre, fait respecter la déontologie et rend compte.",
      "Rapport interne : contexte, analyse, propositions motivées.",
    ],
    pieges: [
      "Croire que la police municipale est autonome de la police nationale.",
      "Oublier que les tests psychotechniques font partie de l'admission.",
    ],
  },
  // ───────── GARDE CHAMPÊTRE ─────────
  {
    id: "garde-champetre-metier",
    concoursId: "garde-champetre",
    title: "Le métier de garde champêtre",
    resume:
      "Missions de police rurale et environnementale, pouvoirs, relations avec le maire et les autres forces de l'ordre.",
    duree: "35 minutes",
    sections: [
      {
        titre: "Missions et pouvoirs",
        points: [
          "Constater les infractions aux lois rurales (chasse, pêche, forêts, agriculture) et aux règlements municipaux.",
          "Surveiller et protéger les espaces naturels (forêts communales, champs, chemins ruraux).",
          "Assurer la police de la chasse et de la pêche : vérifier les permis, constater les infractions, dresser des procès-verbaux.",
          "Prévenir les atteintes à l'environnement : dépôts sauvages, pollutions, braconnage.",
          "Agent de police judiciaire adjoint (APJA) : compétence pour dresser des PV pour certaines infractions.",
        ],
      },
      {
        titre: "Le cadre institutionnel",
        points: [
          "Le garde champêtre est placé sous l'autorité du maire et assermenté par le procureur de la République.",
          "Il peut exercer ses fonctions sur plusieurs communes dans le cadre d'un service intercommunal.",
          "Coordination avec l'Office français de la biodiversité (OFB), la gendarmerie, l'inspection des installations classées.",
          "Accès aux terrains privés dans certaines conditions (exercice des missions légales).",
        ],
      },
    ],
    aRetenir: [
      "Le garde champêtre est assermenté, placé sous l'autorité du maire et du procureur.",
      "APJA : il peut dresser des PV pour les infractions rurales et environnementales.",
      "Coordination avec l'OFB, la gendarmerie et les services de l'État.",
    ],
    pieges: [
      "Croire que le garde champêtre peut intervenir partout sans assermentation.",
      "Confondre garde champêtre (police rurale) et gardien-brigadier de PM (police urbaine).",
    ],
  },
];

export function getCoursParConcours(concoursId: string): CoursNouveauConcours[] {
  return coursNouveauxConcours.filter((c) => c.concoursId === concoursId);
}
