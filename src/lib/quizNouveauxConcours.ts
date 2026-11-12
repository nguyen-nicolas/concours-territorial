/**
 * Questions de quiz propres aux 9 nouveaux concours.
 * Sources : programmes réglementaires, notes de cadrage et brochures officielles des CDG.
 * Les questions à plusieurs bonnes réponses sont signalées par bonnes.length > 1.
 */

export interface QuestionNouveauConcours {
  id: string;
  concoursId: string;
  question: string;
  options: string[];
  bonnes: number[];
  explication: string;
}

function q(
  concoursId: string,
  question: string,
  options: string[],
  bonnes: string,
  explication: string,
): QuestionNouveauConcours {
  return {
    id: `${concoursId}-${Math.random().toString(36).slice(2, 8)}`,
    concoursId,
    question,
    options,
    bonnes: [...bonnes].map((l) => l.charCodeAt(0) - 65),
    explication,
  };
}

export const quizNouveauxConcours: QuestionNouveauConcours[] = [
  // ── ADJOINT D'ANIMATION ──
  q(
    "adjoint-animation",
    "Quel est le taux d'encadrement réglementaire en séjour avec hébergement pour des enfants de moins de 6 ans ?",
    [
      "1 animateur pour 6 enfants",
      "1 animateur pour 8 enfants",
      "1 animateur pour 10 enfants",
      "1 animateur pour 12 enfants",
    ],
    "B",
    "Pour les moins de 6 ans en séjour avec hébergement, la réglementation impose 1 animateur pour 8 enfants.",
  ),
  q(
    "adjoint-animation",
    "Quel diplôme est requis pour diriger un séjour de vacances de plus de 7 nuits pour plus de 80 enfants ?",
    ["BAFA", "BAFD", "BPJEPS", "Aucun diplôme, l'expérience suffit"],
    "B",
    "Le BAFD (Brevet d'aptitude aux fonctions de directeur) est obligatoire pour diriger un tel accueil. Le BAFA autorise les fonctions d'animateur, non de directeur.",
  ),
  q(
    "adjoint-animation",
    "Parmi les thèmes du programme réglementaire du concours interne d'adjoint d'animation, lesquels figurent ?",
    [
      "L'actualité de l'animation et de l'action sociale",
      "Les notions de base sur les méthodes pédagogiques",
      "La réglementation des marchés publics",
      "La protection et les droits de l'enfant",
      "La comptabilité publique",
    ],
    "ABD",
    "Le programme réglementaire (arrêté du 21 juin 2007) comprend notamment : l'actualité de l'animation, les méthodes pédagogiques, les publics, la psychologie comportementale, les techniques d'accueil, les obligations liées à l'organisation des activités, les règles de sécurité, et les notions de prévention. Les marchés publics et la comptabilité n'en font pas partie.",
  ),
  q(
    "adjoint-animation",
    "Qu'est-ce qu'un PAI dans le cadre d'un accueil de loisirs ?",
    [
      "Un projet d'animation intercommunal",
      "Un projet d'accueil individualisé pour un enfant avec maladie chronique ou allergie",
      "Un planning d'activités intégré",
      "Un protocole d'assistance immédiate",
    ],
    "B",
    "Le PAI (Projet d'Accueil Individualisé) est élaboré pour un enfant atteint d'une maladie chronique ou d'une allergie. Il précise la pathologie, le traitement et la conduite à tenir en urgence.",
  ),
  q(
    "adjoint-animation",
    "Un enfant se blesse lors d'une activité que vous animez. Que faites-vous en premier ?",
    [
      "Continuer l'activité pour ne pas alarmer les autres enfants",
      "Appliquer un traitement sans en référer à personne",
      "Sécuriser l'enfant, évaluer la blessure et alerter votre responsable",
      "Appeler directement le 15 sans en parler à votre directeur",
    ],
    "C",
    "La bonne conduite est de sécuriser l'enfant, évaluer la gravité, puis alerter immédiatement le responsable de la structure qui décidera d'appeler les secours si besoin.",
  ),
  q(
    "adjoint-animation",
    "Quelle instance agrée et contrôle les accueils collectifs de mineurs (ACM) ?",
    ["La CAF", "Le SDJES", "La commune", "Le CNFPT"],
    "B",
    "Le Service départemental à la jeunesse, à l'engagement et aux sports (SDJES, service de l'État) est chargé de l'agrément et du contrôle des ACM.",
  ),
  q(
    "adjoint-animation",
    "Dans le cadre de la médiation sociale, l'adjoint d'animation peut participer aux actions de prévention des conflits…",
    [
      "De manière totalement autonome, sans en référer à personne",
      "Sous la responsabilité d'un animateur territorial ou d'un cadre A, en collaboration avec les autres services",
      "Uniquement si aucun animateur territorial n'est disponible",
      "Uniquement dans les espaces privés",
    ],
    "B",
    "Selon le statut particulier, l'adjoint d'animation peut participer à la médiation sociale sous la responsabilité d'un animateur territorial ou d'un agent de catégorie A, en collaboration avec les autres services, et ce dans les espaces publics ou ouverts au public.",
  ),
  q(
    "adjoint-animation",
    "La méthode pédagogique active se caractérise par :",
    [
      "L'animateur transmet et le public écoute",
      "Le public agit, expérimente et construit ses apprentissages",
      "L'animateur pose des questions et le public répond",
      "La lecture silencieuse de documents",
    ],
    "B",
    "La méthode active place le public en situation d'agir, d'expérimenter et de construire ses apprentissages par l'action.",
  ),

  // ── ADJOINT DU PATRIMOINE ──
  q(
    "adjoint-patrimoine",
    "Quel est le rôle d'un guide-file lors d'une évacuation ?",
    [
      "Fermer la marche pour s'assurer que personne ne reste",
      "Guider le groupe vers la sortie de secours",
      "Appeler les secours",
      "Rester à l'entrée pour compter les personnes sortantes",
    ],
    "B",
    "Le guide-file guide le groupe vers la sortie. Le serre-file ferme la marche pour s'assurer que personne n'est oublié.",
  ),
  q(
    "adjoint-patrimoine",
    "Lors d'une évacuation incendie, faut-il utiliser l'ascenseur pour accélérer l'évacuation ?",
    [
      "Oui, pour les personnes à mobilité réduite",
      "Non, jamais : les ascenseurs sont interdits en cas d'incendie",
      "Oui, s'il est situé loin des flammes",
      "Uniquement si le bâtiment a plus de 5 étages",
    ],
    "B",
    "L'utilisation de l'ascenseur est formellement interdite lors d'une évacuation incendie car une panne peut piéger les occupants.",
  ),
  q(
    "adjoint-patrimoine",
    "Un visiteur fait un malaise dans la salle de musée. Quelle est la bonne conduite à tenir ?",
    [
      "L'asseoir rapidement et lui donner à boire",
      "Évaluer son état de conscience, appeler le 15 et pratiquer les premiers secours si formé",
      "Le déplacer vers l'extérieur immédiatement",
      "Attendre que le malaise passe avant d'agir",
    ],
    "B",
    "Il faut d'abord évaluer l'état de conscience, appeler le 15 (SAMU) et pratiquer les gestes de premiers secours si l'on est formé. Ne pas déplacer un blessé sauf danger immédiat.",
  ),
  q(
    "adjoint-patrimoine",
    "Qu'est-ce qu'un public empêché dans un établissement culturel ?",
    [
      "Un public qui refuse d'entrer",
      "Des personnes qui ne peuvent pas accéder normalement aux services culturels (personnes handicapées, détenus, hospitalisés…)",
      "Un groupe trop nombreux pour être accueilli",
      "Des personnes expulsées de l'établissement",
    ],
    "B",
    "Le public empêché désigne les personnes qui, pour des raisons physiques, sociales ou géographiques, ne peuvent pas accéder normalement à la culture : personnes handicapées, détenus, hospitalisés, personnes âgées en établissement…",
  ),
  q(
    "adjoint-patrimoine",
    "Dans quels établissements un adjoint territorial du patrimoine peut-il être affecté ?",
    [
      "Bibliothèques",
      "Archives",
      "Musées et monuments historiques",
      "Parcs et jardins",
      "Établissements d'enseignement culturel",
      "Crèches",
    ],
    "ABCDE",
    "Les cinq emplois du cadre d'emplois des adjoints du patrimoine correspondent aux bibliothèques, archives, musées et monuments, établissements d'enseignement culturel (conservatoires, écoles d'art) et parcs et jardins. Les crèches relèvent du cadre d'emplois médico-social.",
  ),
  q(
    "adjoint-patrimoine",
    "Un visiteur tente d'endommager une œuvre avec un spray. Que faites-vous ?",
    [
      "Intervenir physiquement pour l'en empêcher",
      "Donner l'alarme, alerter votre responsable, identifier le visiteur sans toucher l'œuvre",
      "Nettoyer immédiatement l'œuvre pour limiter les dégâts",
      "Attendre que le visiteur ait terminé pour ne pas créer de trouble",
    ],
    "B",
    "On donne l'alarme et on alerte le responsable. On note les informations (heure, description de l'incident, identité du visiteur si possible) sans toucher l'œuvre, qui est une pièce à conviction.",
  ),
  q(
    "adjoint-patrimoine",
    "Quelle est la durée et le coefficient de l'épreuve de questionnaire à réponses brèves du concours externe d'adjoint du patrimoine ?",
    [
      "30 minutes, coefficient 1",
      "1 heure, coefficient 2",
      "2 heures, coefficient 3",
      "45 minutes, coefficient 1",
    ],
    "B",
    "L'épreuve de questionnaire à réponses brèves dure 1 heure et est dotée d'un coefficient 2. Elle porte sur l'accueil du public, l'animation et la sécurité des personnes et des bâtiments.",
  ),
  q(
    "adjoint-patrimoine",
    "Que doit contenir un projet d'atelier proposé par un adjoint du patrimoine à sa hiérarchie ?",
    [
      "L'objectif de l'atelier",
      "La description de l'atelier",
      "Les moyens humains",
      "Les moyens techniques",
      "Le budget annuel de l'établissement",
    ],
    "ABCD",
    "Le projet d'atelier comprend : objectif, description, moyens humains et techniques. Le budget annuel de l'établissement n'est pas un élément du projet d'atelier.",
  ),

  // ── AGENT SOCIAL ──
  q(
    "agent-social",
    "Quel est le rôle du CCAS dans une commune ?",
    [
      "Organiser les activités sportives",
      "Coordonner l'action sociale locale : aide alimentaire, maintien à domicile, lien avec les services sociaux",
      "Gérer les budgets des associations",
      "Recruter les fonctionnaires territoriaux",
    ],
    "B",
    "Le Centre Communal d'Action Sociale (CCAS) est un établissement public communal qui anime et coordonne l'action sociale locale.",
  ),
  q(
    "agent-social",
    "Que signifie l'acronyme AGGIR ?",
    [
      "Aide globale aux gens isolés en résidence",
      "Autonomie Gérontologie Groupe Iso-Ressources",
      "Aide générale aux grandes inégalités régionales",
      "Accueil gérontologique global et intégré en résidence",
    ],
    "B",
    "La grille AGGIR (Autonomie Gérontologie Groupe Iso-Ressources) évalue le niveau de dépendance d'une personne âgée. Elle classe les personnes de GIR 1 (très dépendant) à GIR 6 (autonome).",
  ),
  q(
    "agent-social",
    "Vous constatez qu'une personne âgée que vous aidez à domicile présente des marques suspectes. Que faites-vous ?",
    [
      "Vous n'en parlez à personne pour ne pas la blesser",
      "Vous en parlez à votre responsable et aux services compétents (services sociaux, 119)",
      "Vous prenez des photos et les publiez sur les réseaux sociaux",
      "Vous interrogez longuement la personne pour obtenir des aveux",
    ],
    "B",
    "Face à une suspicion de maltraitance, l'agent social doit en informer son responsable et les services compétents. Ne pas agir seul, ne pas enquêter soi-même.",
  ),
  q(
    "agent-social",
    "La discrétion professionnelle de l'agent social signifie :",
    [
      "Parler des usagers uniquement avec leur accord",
      "Ne divulguer les informations sur les usagers qu'aux professionnels qui en ont besoin dans le cadre du suivi",
      "Ne jamais partager d'informations avec d'autres professionnels",
      "Garder le secret même en cas de danger pour l'usager",
    ],
    "B",
    "La discrétion professionnelle n'est pas le secret absolu : dans le cadre du secret partagé, les informations peuvent être échangées entre professionnels qui suivent le même usager, dans son intérêt. Elle ne justifie pas de taire une situation de danger.",
  ),
  q(
    "agent-social",
    "Lequel de ces emplois relève du cadre d'emplois des agents sociaux territoriaux ?",
    [
      "Éducateur de jeunes enfants",
      "Aide-ménagère et auxiliaire de vie",
      "Auxiliaire de puériculture",
      "Infirmier territorial",
    ],
    "B",
    "Le cadre d'emplois des agents sociaux comprend trois emplois : aide-ménagère / auxiliaire de vie, travailleur familial, et agent d'accueil des services sociaux. Les autres relèvent de cadres d'emplois distincts.",
  ),
  q(
    "agent-social",
    "La structure de l'entretien pour l'examen professionnel d'agent social principal 2e classe est :",
    [
      "20 minutes d'exposé, puis 10 minutes de questions",
      "15 minutes au total dont 5 minutes au plus d'exposé",
      "30 minutes sans distinction exposé / questions",
      "10 minutes d'entretien sans exposé",
    ],
    "B",
    "L'entretien dure 15 minutes : l'exposé du candidat sur son expérience peut durer jusqu'à 5 minutes, puis le jury interroge pendant environ 10 minutes. Coefficient 3.",
  ),
  q(
    "agent-social",
    "Quel principe guide le maintien à domicile d'une personne dépendante ?",
    [
      "Faire tout à sa place pour gagner du temps",
      "Faire avec la personne pour préserver son autonomie",
      "Ne pas intervenir pour qu'elle reste autonome",
      "L'hospitaliser dès que possible",
    ],
    "B",
    "Le principe fondamental est de faire avec la personne, et non à sa place, afin de préserver et développer son autonomie.",
  ),

  // ── AUXILIAIRE DE PUÉRICULTURE ──
  q(
    "auxiliaire-puericulture",
    "Quelle position est recommandée pour prévenir la mort subite du nourrisson ?",
    [
      "Sur le ventre",
      "Sur le côté",
      "Sur le dos, sur un matelas ferme, sans couverture épaisse ni oreiller",
      "Sur le dos, avec un oreiller pour soutenir la tête",
    ],
    "C",
    "La recommandation officielle pour prévenir la mort subite du nourrisson est de coucher le bébé sur le dos, sur un matelas ferme, dans une pièce à environ 18-20 °C, sans couverture épaisse ni oreiller.",
  ),
  q(
    "auxiliaire-puericulture",
    "Quelle est la structure du concours d'auxiliaire de puériculture de classe normale ?",
    [
      "Une épreuve écrite d'admissibilité, puis un entretien",
      "Un entretien unique d'admission, sans épreuve écrite préalable",
      "Un QCM suivi d'un entretien",
      "Un dossier de titres, sans épreuve",
    ],
    "B",
    "Le concours d'auxiliaire de puériculture de classe normale comprend une unique épreuve d'admission : un entretien avec le jury. C'est un concours sur titres avec épreuve.",
  ),
  q(
    "auxiliaire-puericulture",
    "À quel âge apparaît généralement le sourire social chez le nourrisson ?",
    ["Dès la naissance", "Vers 2 mois", "Vers 6 mois", "Vers 1 an"],
    "B",
    "Le sourire social (réponse à l'interaction humaine, non réflexe) apparaît généralement vers 2 mois.",
  ),
  q(
    "auxiliaire-puericulture",
    "Que faire avant de donner un médicament à un enfant en crèche ?",
    [
      "Le donner si les parents l'ont demandé verbalement",
      "Vérifier l'existence d'un PAI ou d'une prescription médicale écrite",
      "Consulter votre collègue",
      "Donner uniquement si l'enfant a de la fièvre",
    ],
    "B",
    "Sans PAI ou prescription médicale écrite, aucun médicament ne peut être administré par l'auxiliaire de puériculture.",
  ),
  q(
    "auxiliaire-puericulture",
    "Quel diplôme est requis pour accéder au concours d'auxiliaire de puériculture ?",
    [
      "BAFA",
      "CAP petite enfance (ancienne appellation)",
      "Diplôme professionnel d'auxiliaire de puériculture (DPAP) ou équivalent",
      "Licence de psychologie de l'enfant",
    ],
    "C",
    "Le concours est ouvert aux titulaires du diplôme professionnel d'auxiliaire de puériculture (DPAP), du certificat d'aptitude aux fonctions d'auxiliaire de puériculture, ou du diplôme d'État d'auxiliaire de puériculture.",
  ),

  // ── ÉDUCATEUR DES APS ──
  q(
    "educateur-aps",
    "Quel diplôme est requis pour encadrer contre rémunération des activités physiques et sportives ?",
    [
      "Aucun diplôme particulier",
      "Un diplôme d'État (BPJEPS, DEJEPS, DESJEPS) ou équivalent",
      "Le baccalauréat",
      "Le brevet de secouriste",
    ],
    "B",
    "La loi impose la possession d'un diplôme d'État pour encadrer, enseigner ou animer contre rémunération des APS.",
  ),
  q(
    "educateur-aps",
    "Quelle est la nature de l'épreuve d'admissibilité du concours externe d'éducateur territorial des APS ?",
    [
      "Un QCM de 45 minutes",
      "Une composition sur un sujet d'ordre général relatif à l'animation sportive, durée 3 heures",
      "Un rapport sur dossier de 2 heures",
      "Une mise en situation pratique",
    ],
    "B",
    "L'épreuve d'admissibilité externe est une composition sur un sujet d'ordre général relatif à l'animation sportive et aux politiques sportives locales, d'une durée de 3 heures.",
  ),
  q(
    "educateur-aps",
    "Quel service de l'État est compétent en matière de qualification des encadrants sportifs ?",
    [
      "La CAF",
      "La préfecture",
      "La DRAJES (Direction régionale académique à la jeunesse, à l'engagement et aux sports)",
      "La DGFIP",
    ],
    "C",
    "La DRAJES (ancien DRJSCS) est compétente pour délivrer et contrôler les qualifications des encadrants sportifs et l'agrément des associations sportives.",
  ),
  q(
    "educateur-aps",
    "Parmi les publics que l'éducateur territorial des APS peut accompagner, lesquels figurent dans ses missions ?",
    [
      "Scolaires",
      "Personnes en situation de handicap",
      "Seniors",
      "Associations sportives",
      "Usagers de bibliothèques",
    ],
    "ABCD",
    "L'éducateur des APS intervient auprès de tous les publics : scolaires, associations, seniors, personnes handicapées. Les usagers de bibliothèques relèvent d'un autre cadre d'emplois.",
  ),

  // ── OPÉRATEUR DES APS ──
  q(
    "operateur-aps",
    "L'opérateur territorial des APS peut-il assurer seul la surveillance d'un bassin de natation en l'absence du maître-nageur-sauveteur ?",
    [
      "Oui, s'il a suivi une formation de secourisme",
      "Non, la surveillance du bassin relève du MNS (BEESAN ou BPJEPS AAN)",
      "Oui, s'il est employé par la commune",
      "Oui, pour les bassins de moins de 50 mètres",
    ],
    "B",
    "La surveillance d'un bassin de natation est de la responsabilité du maître-nageur-sauveteur (MNS) titulaire du BEESAN ou du BPJEPS AAN. L'opérateur des APS peut assister mais ne remplace pas le MNS.",
  ),
  q(
    "operateur-aps",
    "Que signifie ERP dans le contexte des équipements sportifs ?",
    [
      "Équipement de randonnée périscolaire",
      "Établissement recevant du public",
      "Équipe de responsabilité périscolaire",
      "Évaluation des risques professionnels",
    ],
    "B",
    "ERP : établissement recevant du public. Les gymnases, piscines et stades sont des ERP soumis à des règles spécifiques de sécurité et à des contrôles obligatoires.",
  ),
  q(
    "operateur-aps",
    "En cas de suspicion de noyade dans une piscine, dans quel ordre agissez-vous ?",
    [
      "Sortir la victime de l'eau, appeler le 15, donner l'alarme",
      "Donner l'alarme, sortir la victime de l'eau, appeler le 15 et pratiquer les gestes de premiers secours si formé",
      "Attendre le MNS avant d'agir",
      "Appeler le 18 uniquement",
    ],
    "B",
    "L'ordre est : donner l'alarme pour prévenir le MNS et l'équipe, sortir la victime de l'eau, appeler le 15 (SAMU), puis pratiquer les gestes de premiers secours (réanimation si formé).",
  ),

  // ── ÉDUCATEUR DE JEUNES ENFANTS ──
  q(
    "educateur-jeunes-enfants",
    "Quelle est l'épreuve d'admissibilité du concours d'éducateur territorial de jeunes enfants ?",
    [
      "Un QCM de 45 minutes",
      "Une étude de situation professionnelle à partir d'un dossier, durée 3 heures, coefficient 2",
      "Un rapport sur dossier de 2 heures",
      "Un entretien sans préparation",
    ],
    "B",
    "L'épreuve d'admissibilité est une étude de situation professionnelle à partir d'un dossier, d'une durée de 3 heures, dotée d'un coefficient 2.",
  ),
  q(
    "educateur-jeunes-enfants",
    "Dans quels lieux un éducateur territorial de jeunes enfants peut-il exercer ?",
    [
      "Crèches et établissements multi-accueil",
      "Jardins d'enfants",
      "Lieux d'accueil enfants-parents (LAEP)",
      "Collèges et lycées",
      "Haltes-garderies",
    ],
    "ABCE",
    "L'EJE exerce dans les EAJE (établissements d'accueil du jeune enfant) : crèches, multi-accueil, haltes-garderies, jardins d'enfants et LAEP. Les collèges et lycées relèvent d'un autre secteur.",
  ),
  q(
    "educateur-jeunes-enfants",
    "Qu'est-ce que le Référentiel national de qualité des EAJE ?",
    [
      "Un diplôme professionnel pour les éducateurs de jeunes enfants",
      "Un document réglementaire fixant les exigences de qualité pour les établissements d'accueil du jeune enfant (projet éducatif, santé, sécurité, accueil inclusif)",
      "Un guide de bonnes pratiques sans valeur réglementaire",
      "Un texte qui fixe les taux d'encadrement uniquement",
    ],
    "B",
    "Le Référentiel national de qualité des EAJE, en vigueur depuis 2021, est un cadre réglementaire fixant les exigences en matière de projet éducatif, de santé, de sécurité et d'accueil inclusif.",
  ),
  q(
    "educateur-jeunes-enfants",
    "L'EJE travaille en équipe pluridisciplinaire. Quels professionnels peut-il côtoyer ?",
    [
      "Puéricultrice",
      "Auxiliaire de puériculture",
      "Médecin",
      "Psychologue",
      "Éducateur territorial des APS",
    ],
    "ABCD",
    "L'EJE travaille en équipe pluridisciplinaire avec les puéricultrices, les auxiliaires de puériculture, les médecins, les psychologues et les thérapeutes. L'éducateur des APS relève d'un autre secteur.",
  ),

  // ── CHEF DE SERVICE DE POLICE MUNICIPALE ──
  q(
    "chef-service-pm",
    "Les agents de police municipale sont des :",
    [
      "Officiers de police judiciaire (OPJ)",
      "Agents de police judiciaire (APJ)",
      "Agents de police judiciaire adjoints (APJA)",
      "Agents sans pouvoir judiciaire",
    ],
    "C",
    "Les agents de police municipale ont la qualité d'agents de police judiciaire adjoints (APJA). Ils peuvent constater certaines infractions et verbaliser, mais ont des pouvoirs plus limités que les APJ et les OPJ.",
  ),
  q(
    "chef-service-pm",
    "Quelle instance supervise les missions judiciaires de la police municipale ?",
    ["Le maire", "Le préfet", "Le procureur de la République", "Le directeur général des services"],
    "C",
    "Les missions de police judiciaire relèvent de l'autorité du procureur de la République. Le maire exerce l'autorité administrative sur la police municipale.",
  ),
  q(
    "chef-service-pm",
    "Quelle est l'épreuve d'admissibilité du concours interne de chef de service de police municipale ?",
    [
      "Un QCM de 45 minutes",
      "Une composition sur la sécurité locale de 3 heures",
      "Un rapport avec propositions sur la base d'un dossier de 3 heures",
      "Un entretien de mise en situation",
    ],
    "C",
    "Pour le concours interne (et le 3e concours), l'épreuve d'admissibilité est un rapport avec propositions sur la base d'un dossier documentaire, d'une durée de 3 heures.",
  ),
  q(
    "chef-service-pm",
    "Une convention de coordination est obligatoire :",
    [
      "Uniquement si la police municipale compte plus de 5 agents",
      "Pour toute commune dotée d'une police municipale, entre la PM, la police nationale et/ou la gendarmerie",
      "Uniquement pour les communes de plus de 10 000 habitants",
      "Uniquement en zone rurale",
    ],
    "B",
    "La convention de coordination entre la police municipale et la police nationale ou la gendarmerie est obligatoire pour toute commune dotée d'une police municipale.",
  ),

  // ── GARDE CHAMPÊTRE ──
  q(
    "garde-champetre",
    "Par qui le garde champêtre est-il assermenté ?",
    [
      "Le maire",
      "Le préfet",
      "Le procureur de la République",
      "Le président du tribunal administratif",
    ],
    "C",
    "Le garde champêtre est assermenté par le procureur de la République, ce qui lui confère ses pouvoirs de police judiciaire pour constater les infractions rurales et dresser des procès-verbaux.",
  ),
  q(
    "garde-champetre",
    "Quelle qualité judiciaire possède le garde champêtre ?",
    [
      "Officier de police judiciaire (OPJ)",
      "Agent de police judiciaire (APJ)",
      "Agent de police judiciaire adjoint (APJA)",
      "Aucune qualité judiciaire",
    ],
    "C",
    "Le garde champêtre est un agent de police judiciaire adjoint (APJA). Il peut constater certaines infractions aux lois rurales et dresser des PV, mais ses pouvoirs sont plus limités que ceux d'un APJ.",
  ),
  q(
    "garde-champetre",
    "Quel organisme public est un partenaire privilégié du garde champêtre pour la protection de l'environnement ?",
    ["L'ANAH", "L'Office français de la biodiversité (OFB)", "La CAF", "La DREAL"],
    "B",
    "L'Office français de la biodiversité (OFB) est l'établissement public chargé de la protection de la biodiversité et de l'environnement. Il coordonne son action avec les gardes champêtres sur les infractions environnementales.",
  ),
];

export function getQuizParConcours(concoursId: string): QuestionNouveauConcours[] {
  return quizNouveauxConcours.filter((q) => q.concoursId === concoursId);
}
