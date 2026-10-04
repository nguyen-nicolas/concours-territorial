import type { QuizQuestion } from "../quizData";

/**
 * Banque de questions complémentaire : statut général et gestion publique locale.
 * Nouvelles questions, distinctes de quizData.ts et banqueTerritoriale.ts.
 */
export const banqueAnnalesGestion: Record<string, QuizQuestion[]> = {
  "statut-fpt": [
    {
      question: "Depuis le 1er mars 2022, les droits et obligations des fonctionnaires sont rassemblés dans :",
      options: [
        "Le code général de la fonction publique (CGFP)",
        "Le code du travail",
        "Le code des collectivités territoriales",
        "Le code de la santé publique",
      ],
      answerIndex: 0,
      explanation:
        "L'ordonnance du 24 novembre 2021 a créé le code général de la fonction publique, qui codifie et remplace les quatre lois statutaires de 1983 à 1994.",
      optionNotes: [
        null,
        "Le code du travail régit les salariés de droit privé, pas les fonctionnaires.",
        "Il n'existe pas de « code des collectivités territoriales » sous ce nom ; c'est le CGCT.",
        "Le code de la santé publique concerne un tout autre domaine.",
      ],
    },
    {
      question: "Quelle obligation déontologique impose à l'agent de servir l'intérêt général et non ses intérêts personnels ?",
      options: [
        "Le devoir de probité et de désintéressement",
        "Le droit syndical",
        "La liberté d'opinion",
        "Le droit à la formation",
      ],
      answerIndex: 0,
      explanation:
        "Le code général de la fonction publique impose à l'agent public d'exercer ses fonctions avec dignité, probité et intégrité, en s'abstenant de tout avantage personnel tiré de ses fonctions.",
      optionNotes: [
        null,
        "Le droit syndical est une liberté collective reconnue à l'agent, sans lien avec le désintéressement.",
        "La liberté d'opinion protège les convictions personnelles de l'agent.",
        "Le droit à la formation est un droit individuel de développement professionnel.",
      ],
    },
    {
      question: "Qu'est-ce que le référent déontologue institué dans chaque collectivité ou organisme employeur ?",
      options: [
        "Une personne chargée de conseiller les agents sur les règles déontologiques",
        "Le président de la commission administrative paritaire",
        "Le supérieur hiérarchique direct de l'agent",
        "Un magistrat de la chambre régionale des comptes",
      ],
      answerIndex: 0,
      explanation:
        "Institué par la loi de 2016 relative à la déontologie, le référent déontologue peut être consulté par tout agent public pour obtenir des conseils sur l'application des obligations déontologiques.",
      optionNotes: [
        null,
        "La CAP est un organe paritaire consultatif sur les carrières, distinct du référent déontologue.",
        "Le supérieur hiérarchique exerce l'autorité fonctionnelle, mais n'est pas nécessairement le référent déontologue.",
        "Les magistrats de la CRC contrôlent les comptes publics, sans lien avec la déontologie des agents.",
      ],
    },
    {
      question: "Un agent qui souhaite créer une entreprise tout en occupant un emploi à temps complet doit :",
      options: [
        "Demander une autorisation préalable à son autorité hiérarchique",
        "Démissionner obligatoirement avant toute démarche",
        "Agir librement sans aucune formalité",
        "Attendre dix ans d'ancienneté",
      ],
      answerIndex: 0,
      explanation:
        "Les règles de cumul d'activités imposent une déclaration préalable, voire une autorisation, avant la création ou la reprise d'une entreprise, afin de vérifier la compatibilité avec le service public.",
      optionNotes: [
        null,
        "La démission n'est pas requise : un régime de cumul temporaire encadré existe précisément pour ce cas.",
        "Le cumul d'activités est strictement encadré, il n'est jamais totalement libre.",
        "Aucune condition d'ancienneté n'est prévue pour ce type de démarche.",
      ],
    },
    {
      question: "Le droit de grève des agents territoriaux peut être limité notamment par :",
      options: [
        "L'obligation de service minimum dans certains services essentiels",
        "Une interdiction générale et absolue",
        "L'accord préalable du préfet pour chaque agent",
        "Le paiement d'une amende avant de faire grève",
      ],
      answerIndex: 0,
      explanation:
        "Le droit de grève est reconnu aux agents publics mais peut être restreint, par exemple par un service minimum dans des services comme la collecte des déchets ou les transports, afin de concilier continuité du service public et liberté syndicale.",
      optionNotes: [
        null,
        "Le droit de grève est un droit constitutionnel ; il ne peut être interdit de façon générale pour les agents territoriaux.",
        "Aucune autorisation préfectorale individuelle n'est exigée pour faire grève.",
        "Faire grève n'est pas soumis au paiement préalable d'une amende : seule une retenue sur traitement s'applique.",
      ],
    },
    {
      question: "L'avancement d'échelon d'un fonctionnaire territorial s'effectue désormais :",
      options: [
        "De façon continue, à l'ancienneté, sans appréciation de la valeur professionnelle",
        "Uniquement sur décision du préfet",
        "Par tirage au sort entre les agents éligibles",
        "Jamais avant quinze ans de service",
      ],
      answerIndex: 0,
      explanation:
        "Depuis les réformes de 2014-2016 ayant généralisé l'avancement à la durée unique, l'avancement d'échelon se fait automatiquement à l'ancienneté, l'avancement de grade restant lui soumis à des critères de valeur professionnelle.",
      optionNotes: [
        null,
        "Le préfet n'intervient pas dans la gestion individuelle des carrières territoriales.",
        "Aucune procédure de tirage au sort n'existe dans la gestion statutaire.",
        "L'avancement d'échelon peut intervenir dès les premières années de carrière, selon la grille indiciaire du cadre d'emplois.",
      ],
    },
    {
      question: "L'avancement de grade d'un fonctionnaire territorial suppose notamment :",
      options: [
        "Une proposition de l'autorité territoriale après inscription sur un tableau d'avancement",
        "Un nouveau concours obligatoire",
        "Une décision automatique dès l'ancienneté maximale atteinte dans l'échelon",
        "Un vote du conseil municipal agent par agent",
      ],
      answerIndex: 0,
      explanation:
        "L'avancement de grade se fait par voie de tableau annuel d'avancement établi par l'autorité territoriale après avis de la CAP, selon des conditions d'ancienneté et de valeur professionnelle, dans la limite des ratios « promus-promouvables » fixés par l'assemblée délibérante.",
      optionNotes: [
        null,
        "L'avancement de grade ne nécessite pas de nouveau concours ; il relève de la promotion interne par liste d'aptitude ou du tableau d'avancement.",
        "L'avancement de grade n'est jamais automatique : il dépend d'un choix de l'employeur dans la limite d'un contingent.",
        "Le conseil municipal fixe le taux de promotion (ratio), il ne vote pas nominativement chaque avancement.",
      ],
    },
    {
      question: "La notation des fonctionnaires territoriaux a été remplacée depuis 2015 par :",
      options: [
        "L'entretien professionnel annuel",
        "Un examen médical annuel",
        "Un contrôle fiscal systématique",
        "Une évaluation par les usagers",
      ],
      answerIndex: 0,
      explanation:
        "L'entretien professionnel, conduit par le supérieur hiérarchique direct, évalue la valeur professionnelle de l'agent et sert de base à l'avancement, remplaçant l'ancien système de notation chiffrée.",
      optionNotes: [
        null,
        "La visite médicale périodique relève de la médecine préventive, distincte de l'évaluation professionnelle.",
        "Le contrôle fiscal n'a aucun lien avec la gestion des carrières publiques.",
        "L'évaluation par les usagers n'est pas le dispositif retenu par le statut pour apprécier la carrière d'un agent.",
      ],
    },
    {
      question: "Parmi les positions statutaires du fonctionnaire territorial, la mise à disposition se caractérise par :",
      options: [
        "Le maintien de la rémunération par la collectivité d'origine pour un service accompli ailleurs",
        "Une rupture définitive du lien avec l'employeur d'origine",
        "Une sanction disciplinaire du premier groupe",
        "Une interruption totale d'activité sans rémunération",
      ],
      answerIndex: 0,
      explanation:
        "L'agent mis à disposition reste fonctionnaire de sa collectivité d'origine, qui continue à le rémunérer, mais exerce ses fonctions auprès d'un autre organisme, avec son accord et selon une convention.",
      optionNotes: [
        null,
        "Le lien statutaire avec la collectivité d'origine est précisément maintenu, contrairement au détachement qui peut y mettre davantage de distance.",
        "La mise à disposition n'est pas une sanction mais une modalité d'organisation de carrière choisie par l'agent.",
        "C'est la disponibilité, non la mise à disposition, qui suspend la rémunération.",
      ],
    },
    {
      question: "Le détachement d'un fonctionnaire territorial se définit comme :",
      options: [
        "Une position où l'agent est placé hors de son cadre d'emplois d'origine tout en continuant à y progresser",
        "Une révocation temporaire",
        "Un simple changement de poste au sein du même service",
        "Un départ définitif de la fonction publique",
      ],
      answerIndex: 0,
      explanation:
        "Le détachement permet à l'agent d'exercer dans un autre corps, cadre d'emplois ou administration (voire hors fonction publique), tout en conservant ses droits à l'avancement et à la retraite dans son cadre d'emplois d'origine.",
      optionNotes: [
        null,
        "Le détachement n'est pas une sanction, c'est une modalité de mobilité choisie par l'agent et acceptée par l'administration.",
        "Un simple changement de poste interne ne constitue pas une « position statutaire » au sens du droit de la fonction publique.",
        "Le détachement est réversible : l'agent peut être réintégré dans son cadre d'emplois d'origine.",
      ],
    },
    {
      question: "La rupture conventionnelle, ouverte aux fonctionnaires depuis 2020, permet :",
      options: [
        "Une cessation définitive des fonctions d'un commun accord, avec indemnité",
        "Un licenciement disciplinaire simplifié",
        "Une mise à la retraite anticipée automatique",
        "Un simple changement d'affectation",
      ],
      answerIndex: 0,
      explanation:
        "Inspirée du droit du travail, la rupture conventionnelle permet à l'agent et à l'employeur public de convenir d'un commun accord de la cessation définitive des fonctions, moyennant le versement d'une indemnité spécifique.",
      optionNotes: [
        null,
        "La rupture conventionnelle n'est pas une procédure disciplinaire : elle suppose l'accord des deux parties, sans faute reprochée.",
        "La mise à la retraite dépend de conditions d'âge et de durée d'assurance, indépendamment de cette procédure.",
        "Un changement d'affectation ne met pas fin au contrat ou à la carrière de l'agent.",
      ],
    },
    {
      question: "La durée légale annuelle de travail effectif dans la fonction publique territoriale, sauf sujétions particulières, est de :",
      options: [
        "1 607 heures",
        "1 500 heures",
        "1 820 heures",
        "1 200 heures",
      ],
      answerIndex: 0,
      explanation:
        "La durée annuelle de référence, issue du décret de 2001 et confirmée par la loi de transformation de la fonction publique de 2019, est fixée à 1 607 heures, soit 35 heures hebdomadaires en moyenne sur l'année.",
      optionNotes: [
        null,
        "1 500 heures ne correspond à aucune base réglementaire de référence.",
        "1 820 heures dépasserait largement la durée légale applicable aux collectivités.",
        "1 200 heures correspondrait à un temps partiel très réduit, pas à la durée de référence à temps complet.",
      ],
    },
    {
      question: "Les jours de réduction du temps de travail (RTT) résultent :",
      options: [
        "D'un cycle de travail dont la durée hebdomadaire dépasse 35 heures en moyenne",
        "D'une prime versée en fin d'année",
        "D'un jour de congé offert à chaque naissance d'un enfant",
        "D'une sanction disciplinaire convertie en repos",
      ],
      answerIndex: 0,
      explanation:
        "Lorsque l'organisation du cycle de travail dépasse 35 heures hebdomadaires en moyenne sans compensation en heures supplémentaires, des jours de RTT compensent cette durée supérieure, dans le respect du plafond annuel de 1 607 heures.",
      optionNotes: [
        null,
        "Les RTT sont des jours de repos, non une prime financière.",
        "Les congés liés à la naissance relèvent d'un autre dispositif (congé de naissance, congé de paternité).",
        "Les RTT n'ont aucun lien avec la discipline des agents.",
      ],
    },
    {
      question: "Le compte épargne-temps (CET) dans la fonction publique territoriale permet :",
      options: [
        "D'accumuler des jours de congé ou de RTT non pris pour les utiliser ultérieurement",
        "D'obtenir un prêt bancaire sans intérêt",
        "D'échanger des jours de congé contre des points de retraite automatiquement",
        "De convertir systématiquement les jours épargnés en jours de formation obligatoire",
      ],
      answerIndex: 0,
      explanation:
        "Le CET permet à l'agent de capitaliser certains jours de congés annuels et de RTT non utilisés, pour les prendre plus tard, les faire indemniser ou, sous conditions, les affecter à un plan d'épargne retraite.",
      optionNotes: [
        null,
        "Le CET n'a aucun lien avec un dispositif de prêt bancaire.",
        "La conversion en points de retraite n'est qu'une option possible, non automatique et encadrée.",
        "Le CET ne finance pas une obligation de formation : la formation obéit à ses propres droits (CPF, plan de formation).",
      ],
    },
    {
      question: "Un agent territorial à temps partiel doit en principe obtenir :",
      options: [
        "Une autorisation de l'autorité territoriale, de droit dans certains cas (enfant, aidant familial)",
        "L'accord unanime du conseil municipal",
        "L'avis conforme du préfet",
        "Un accord de l'ensemble des usagers du service",
      ],
      answerIndex: 0,
      explanation:
        "Le temps partiel est accordé sur autorisation sauf lorsqu'il est de droit, notamment pour élever un enfant de moins de trois ans ou accompagner un proche, situations où l'employeur ne peut le refuser.",
      optionNotes: [
        null,
        "Le conseil municipal ne se prononce pas individuellement sur chaque demande de temps partiel.",
        "Le préfet n'intervient pas dans l'organisation individuelle du temps de travail des agents.",
        "Les usagers du service n'ont aucun rôle dans l'octroi d'un temps partiel.",
      ],
    },
    {
      question: "Les astreintes dans la fonction publique territoriale correspondent à :",
      options: [
        "Une période pendant laquelle l'agent, sans être sur son lieu de travail, doit rester en mesure d'intervenir",
        "Une sanction disciplinaire du deuxième groupe",
        "Un jour de congé supplémentaire accordé à tout agent",
        "Une formation obligatoire en dehors des heures de service",
      ],
      answerIndex: 0,
      explanation:
        "L'astreinte impose à l'agent de demeurer disponible, à son domicile ou à proximité, pour intervenir en cas de besoin, et donne lieu à une indemnisation ou une compensation en temps selon les textes applicables.",
      optionNotes: [
        null,
        "L'astreinte n'est aucunement une sanction : elle constitue une sujétion de service compensée financièrement ou en repos.",
        "L'astreinte n'est pas un congé, c'est une contrainte imposée à l'agent.",
        "L'astreinte concerne la disponibilité pour intervention, non une obligation de formation.",
      ],
    },
    {
      question: "Un fonctionnaire territorial peut être placé en congé de longue maladie pendant :",
      options: [
        "Trois ans maximum, dont un an à plein traitement",
        "Six mois au maximum",
        "Dix ans sans limite de rémunération",
        "Aucune durée maximale n'est fixée",
      ],
      answerIndex: 0,
      explanation:
        "Le congé de longue maladie peut être accordé pour une durée maximale de trois ans, avec traitement plein la première année puis traitement réduit de moitié les deux années suivantes.",
      optionNotes: [
        null,
        "Six mois correspond davantage à la durée maximale du congé de maladie ordinaire à plein traitement.",
        "Dix ans dépasse largement la durée maximale réglementaire du congé de longue maladie.",
        "La durée est au contraire strictement encadrée par les textes statutaires.",
      ],
    },
    {
      question: "La procédure disciplinaire applicable à un fonctionnaire territorial impose notamment :",
      options: [
        "La communication de son dossier individuel avant toute sanction",
        "Une convocation uniquement orale, sans écrit",
        "L'intervention obligatoire d'un avocat commis par l'employeur",
        "Une décision rendue sous 48 heures dans tous les cas",
      ],
      answerIndex: 0,
      explanation:
        "Le respect des droits de la défense impose la communication intégrale du dossier individuel de l'agent et de ses droits, afin qu'il puisse préparer sa défense avant toute sanction disciplinaire, sous peine d'irrégularité de la procédure.",
      optionNotes: [
        null,
        "La procédure disciplinaire est formalisée par écrit, y compris la notification des griefs.",
        "L'agent choisit librement son défenseur, qui n'est pas désigné par l'employeur.",
        "Aucun délai de 48 heures n'est imposé ; les délais varient selon la gravité de la sanction envisagée.",
      ],
    },
    {
      question: "Le conseil de discipline, saisi en cas de sanction du deuxième groupe ou plus, est :",
      options: [
        "Une émanation de la commission administrative paritaire siégeant en formation disciplinaire",
        "Un tribunal judiciaire spécialisé",
        "Une commission interne composée uniquement de l'employeur",
        "Le CNFPT statuant seul",
      ],
      answerIndex: 0,
      explanation:
        "Le conseil de discipline est formé à partir de représentants siégeant à la commission administrative paritaire compétente, dans une formation paritaire dédiée à l'examen des sanctions les plus sévères.",
      optionNotes: [
        null,
        "La procédure disciplinaire reste administrative, elle ne relève pas d'une juridiction judiciaire.",
        "Le conseil de discipline est paritaire, il ne comprend pas uniquement des représentants de l'employeur.",
        "Le CNFPT n'intervient pas dans la procédure disciplinaire individuelle, il gère la formation.",
      ],
    },
    {
      question: "Qu'est-ce que la position hors cadres ?",
      options: [
        "Une position exceptionnelle permettant à un fonctionnaire de servir dans un organisme ne relevant pas du statut, sans rémunération de sa collectivité",
        "Une sanction disciplinaire de quatrième groupe",
        "Un emploi fonctionnel de direction",
        "Un contrat à durée déterminée renouvelable",
      ],
      answerIndex: 0,
      explanation:
        "La position hors cadres, plus rare que le détachement, permet à un fonctionnaire ayant accompli une certaine durée de services d'exercer dans un organisme international ou non statutaire, sans que sa collectivité d'origine continue à le rémunérer.",
      optionNotes: [
        null,
        "Il ne s'agit pas d'une sanction, mais d'une position de carrière volontaire.",
        "Un emploi fonctionnel est un emploi de direction pourvu par détachement, pas une position statutaire à part entière appelée « hors cadres ».",
        "La position hors cadres concerne des fonctionnaires, et non des agents contractuels.",
      ],
    },
    {
      question: "Le contrôle médical préalable à la titularisation d'un agent territorial vise à :",
      options: [
        "Vérifier l'aptitude physique à l'exercice des fonctions postulées",
        "Établir un casier judiciaire",
        "Contrôler la situation fiscale du candidat",
        "Vérifier le niveau scolaire du candidat",
      ],
      answerIndex: 0,
      explanation:
        "Avant la nomination, un examen médical réalisé par un médecin agréé permet de vérifier que le candidat remplit les conditions d'aptitude physique requises pour l'exercice de l'emploi.",
      optionNotes: [
        null,
        "Le bulletin n°2 du casier judiciaire est vérifié séparément lors du recrutement, mais ce n'est pas l'objet du contrôle médical.",
        "La situation fiscale n'entre pas dans les conditions de recrutement d'un agent public.",
        "Le niveau scolaire est vérifié par les conditions de diplôme du concours, non par un examen médical.",
      ],
    },
    {
      question: "Le droit syndical dans la fonction publique territoriale garantit notamment :",
      options: [
        "La possibilité de créer des sections syndicales et de bénéficier d'autorisations spéciales d'absence",
        "L'obligation d'adhérer à un syndicat pour être titularisé",
        "L'interdiction de se présenter aux élections professionnelles avant dix ans de service",
        "Le droit exclusif de négocier le budget communal",
      ],
      answerIndex: 0,
      explanation:
        "La liberté syndicale permet aux agents de créer des syndicats, d'y adhérer librement et de bénéficier de décharges d'activité ou d'autorisations spéciales d'absence pour l'exercice du mandat syndical.",
      optionNotes: [
        null,
        "L'adhésion syndicale est libre, jamais une condition de titularisation.",
        "Aucune condition d'ancienneté minimale de dix ans n'est exigée pour se présenter aux élections professionnelles.",
        "Les organisations syndicales participent au dialogue social, mais ne votent pas le budget communal, qui relève de l'assemblée délibérante.",
      ],
    },
    {
      question: "La formation initiale d'intégration dispensée par le CNFPT aux fonctionnaires territoriaux est :",
      options: [
        "Obligatoire pour les agents de catégorie A, B et C nouvellement titularisés",
        "Facultative et payante pour l'agent",
        "Réservée aux seuls cadres supérieurs",
        "Supprimée depuis 2010",
      ],
      answerIndex: 0,
      explanation:
        "La formation d'intégration, d'une durée variable selon la catégorie, est obligatoire après la nomination afin de faciliter la prise de poste et de transmettre les valeurs du service public ; elle est financée par la cotisation obligatoire versée au CNFPT.",
      optionNotes: [
        null,
        "La formation d'intégration est gratuite pour l'agent, financée par la cotisation de la collectivité employeur.",
        "Elle concerne toutes les catégories hiérarchiques, pas seulement l'encadrement supérieur.",
        "Le dispositif existe toujours et reste un passage obligé après la titularisation.",
      ],
    },
    {
      question: "Le médiateur dans la fonction publique territoriale (ou le centre de gestion en matière de médiation préalable obligatoire) intervient pour :",
      options: [
        "Tenter de résoudre un litige entre l'agent et l'employeur avant tout recours contentieux",
        "Prononcer directement une sanction disciplinaire",
        "Remplacer le juge administratif en toutes circonstances",
        "Fixer unilatéralement le montant d'une indemnité de licenciement",
      ],
      answerIndex: 0,
      explanation:
        "La médiation préalable obligatoire, expérimentée puis généralisée dans certains contentieux de la fonction publique, vise à régler amiablement un différend avant la saisine du tribunal administratif.",
      optionNotes: [
        null,
        "Le médiateur ne dispose d'aucun pouvoir de sanction, il facilite seulement le dialogue entre les parties.",
        "La médiation est un préalable, elle ne remplace pas le juge en cas d'échec de l'accord amiable.",
        "Les règles indemnitaires résultent des textes applicables, non d'une décision arbitraire du médiateur.",
      ],
    },
    {
      question: "En matière de laïcité et de neutralité, un agent territorial en contact avec le public doit :",
      options: [
        "S'abstenir de manifester ses convictions religieuses ou politiques dans l'exercice de ses fonctions",
        "Afficher librement ses opinions religieuses dans son bureau",
        "Refuser de servir un usager selon ses propres convictions",
        "Porter un signe religieux visible, à condition d'en informer son supérieur",
      ],
      answerIndex: 0,
      explanation:
        "Le principe de neutralité du service public impose à tout agent public de s'abstenir d'exprimer ses opinions religieuses, politiques ou philosophiques dans l'exercice de ses fonctions, contrairement à l'usager qui conserve cette liberté.",
      optionNotes: [
        null,
        "L'obligation de neutralité interdit précisément un tel affichage dans l'exercice des fonctions.",
        "Le principe d'égalité de traitement des usagers interdit toute discrimination fondée sur les convictions personnelles de l'agent.",
        "Le port de signes religieux visibles reste interdit à l'agent en service, quelle que soit l'information donnée à la hiérarchie.",
      ],
    },
    {
      question: "La protection sociale complémentaire (santé) dans la fonction publique territoriale implique désormais :",
      options: [
        "Une participation obligatoire de l'employeur au financement de la complémentaire santé des agents",
        "La gratuité totale de toute mutuelle pour l'agent",
        "L'interdiction pour l'agent de choisir sa propre complémentaire",
        "Une cotisation facultative exclusivement à la charge de l'État",
      ],
      answerIndex: 0,
      explanation:
        "La loi de transformation de la fonction publique et ses décrets d'application imposent progressivement aux employeurs territoriaux une participation financière minimale à la protection sociale complémentaire santé de leurs agents.",
      optionNotes: [
        null,
        "La participation de l'employeur réduit le coût pour l'agent, mais n'est pas synonyme de gratuité totale.",
        "L'agent conserve en principe un choix encadré de contrat, selon les modalités (labellisation ou convention de participation).",
        "L'État n'est pas l'employeur des agents territoriaux et ne finance pas cette cotisation à leur place.",
      ],
    },
    {
      question: "Le lanceur d'alerte dans la fonction publique bénéficie, en cas de signalement d'un fait grave, :",
      options: [
        "D'une protection contre toute mesure de représailles de son employeur",
        "D'une prime financière automatique",
        "D'une promotion de grade automatique",
        "D'une immunité pénale totale quels que soient ses actes",
      ],
      answerIndex: 0,
      explanation:
        "La législation relative à la protection des lanceurs d'alerte protège l'agent qui signale de bonne foi un crime, un délit ou une menace grave pour l'intérêt général contre les sanctions, discriminations ou mesures défavorables liées à ce signalement.",
      optionNotes: [
        null,
        "Aucune prime automatique n'est prévue par les textes sur l'alerte éthique.",
        "Le signalement ne donne pas droit à une promotion automatique de grade.",
        "La protection ne couvre pas d'éventuels agissements fautifs de l'agent lui-même, en dehors du signalement effectué de bonne foi.",
      ],
    },
    {
      question: "L'obligation d'obéissance hiérarchique connaît une limite importante en cas :",
      options: [
        "D'ordre manifestement illégal et de nature à compromettre gravement un intérêt public",
        "De simple désaccord d'opinion avec le supérieur",
        "De fatigue de l'agent",
        "De grève d'un autre service",
      ],
      answerIndex: 0,
      explanation:
        "Le code général de la fonction publique prévoit que l'agent doit se conformer aux instructions de son supérieur hiérarchique, sauf dans le cas où l'ordre donné est manifestement illégal et de nature à compromettre gravement un intérêt public, ce qui autorise le refus d'exécution.",
      optionNotes: [
        null,
        "Un simple désaccord d'opinion ne suffit pas à justifier la désobéissance à un ordre légal.",
        "La fatigue de l'agent ne constitue pas un motif juridique de refus d'obéissance hiérarchique.",
        "Le mouvement de grève d'un autre service n'a aucun lien avec le caractère légal ou illégal d'un ordre donné à l'agent.",
      ],
    },
    {
      question: "L'obligation de secret professionnel pèse sur l'agent territorial notamment en matière :",
      options: [
        "D'informations personnelles concernant les usagers du service",
        "De son propre numéro de téléphone professionnel",
        "Des horaires d'ouverture de la mairie",
        "Des dates de réunion du conseil municipal, publiques par nature",
      ],
      answerIndex: 0,
      explanation:
        "Le secret professionnel protège notamment les données personnelles et confidentielles relatives aux usagers (état civil, situation sociale, dossier médical), dont la divulgation est pénalement sanctionnée.",
      optionNotes: [
        null,
        "Les coordonnées professionnelles de l'agent ne relèvent pas du secret protégé par cette obligation.",
        "Les horaires d'ouverture d'un service public sont des informations publiques, non couvertes par le secret professionnel.",
        "Les séances du conseil municipal sont en principe publiques et leurs dates sont communicables, sans rapport avec le secret professionnel.",
      ],
    },
    {
      question: "Qu'est-ce que la promotion interne dans la fonction publique territoriale ?",
      options: [
        "Un mode d'accès à un cadre d'emplois supérieur sans concours, par inscription sur liste d'aptitude",
        "Une augmentation de salaire sans changement de grade",
        "Le passage automatique d'un temps partiel à un temps complet",
        "Un concours réservé aux seuls contractuels",
      ],
      answerIndex: 0,
      explanation:
        "La promotion interne permet, sous conditions d'ancienneté et selon un quota fixé en lien avec les recrutements externes, à des fonctionnaires d'accéder à un cadre d'emplois supérieur après inscription sur une liste d'aptitude, sans passer de nouveau concours.",
      optionNotes: [
        null,
        "Une simple revalorisation salariale sans changement de cadre d'emplois ne constitue pas une promotion interne au sens statutaire.",
        "Le passage à temps complet relève d'une demande individuelle sur un poste vacant, sans lien avec la promotion interne.",
        "La promotion interne concerne les fonctionnaires déjà titulaires, pas spécifiquement les agents contractuels.",
      ],
    },
    {
      question: "Le centre de gestion de la fonction publique territoriale assure obligatoirement, pour les collectivités affiliées :",
      options: [
        "L'organisation des concours et la gestion de certaines instances paritaires",
        "Le vote du budget des communes adhérentes",
        "La direction générale des services de chaque commune",
        "Le recrutement direct de tous les agents à la place du maire",
      ],
      answerIndex: 0,
      explanation:
        "Les centres de gestion organisent les concours et examens professionnels, gèrent la publicité des créations et vacances d'emplois, et assurent le fonctionnement des commissions administratives paritaires pour les collectivités affiliées.",
      optionNotes: [
        null,
        "Le centre de gestion n'intervient jamais dans le vote du budget, qui reste une compétence propre de chaque assemblée délibérante.",
        "La direction générale des services relève de l'organisation interne de chaque collectivité, non du centre de gestion.",
        "Le pouvoir de nomination reste celui de l'autorité territoriale (maire ou président), le centre de gestion n'embauchant pas à sa place.",
      ],
    },
    {
      question: "Un agent contractuel territorial en CDD peut voir son contrat transformé en CDI :",
      options: [
        "Après six ans de services effectifs dans certaines conditions de renouvellement sur le même emploi",
        "Automatiquement après six mois",
        "Jamais, le CDI étant réservé aux seuls fonctionnaires",
        "Dès la réussite d'un examen professionnel interne",
      ],
      answerIndex: 0,
      explanation:
        "Sous certaines conditions de durée cumulée de services sur un même emploi ou des emplois similaires (en principe six ans), le contrat à durée déterminée d'un agent contractuel territorial peut être transformé en contrat à durée indéterminée.",
      optionNotes: [
        null,
        "Six mois est une durée bien trop courte pour ouvrir droit à une transformation en CDI.",
        "Le CDI existe bien pour certains agents contractuels territoriaux, en complément du statut de fonctionnaire.",
        "La transformation en CDI dépend de la durée de services, non de la réussite d'un examen professionnel.",
      ],
    },
    {
      question: "Le jury de concours territorial doit respecter notamment le principe de :",
      options: [
        "Parité et d'impartialité dans la composition et le déroulement des épreuves",
        "Nomination directe par le maire de la commune organisatrice uniquement",
        "Composition exclusivement interne au centre de gestion",
        "Secret absolu des résultats, jamais communiqués aux candidats",
      ],
      answerIndex: 0,
      explanation:
        "Les jurys de concours doivent respecter des règles de parité et d'impartialité, garantissant l'égal accès aux emplois publics et évitant tout conflit d'intérêts entre un membre du jury et un candidat.",
      optionNotes: [
        null,
        "La composition du jury suit des règles légales et n'est pas une simple nomination discrétionnaire du maire organisateur.",
        "Le jury comprend souvent des personnalités extérieures au centre de gestion (élus, praticiens, enseignants), pas uniquement des agents du centre.",
        "Les résultats et les appréciations des épreuves sont communicables au candidat qui en fait la demande, dans les conditions prévues par les textes.",
      ],
    },
    {
      question: "L'entretien professionnel annuel donne lieu obligatoirement à :",
      options: [
        "Un compte rendu écrit signé par l'agent et son évaluateur",
        "Une convocation devant le conseil municipal",
        "Un vote de l'ensemble du personnel sur la performance de l'agent",
        "Une décision immédiate d'avancement de grade",
      ],
      answerIndex: 0,
      explanation:
        "L'entretien donne lieu à un compte rendu écrit, porté à la connaissance de l'agent, qui peut le compléter de ses observations ; ce document sert ensuite de référence pour les décisions relatives à la carrière.",
      optionNotes: [
        null,
        "L'entretien professionnel reste une procédure interne au service, sans convocation devant l'assemblée délibérante.",
        "L'évaluation est individuelle, conduite par le supérieur hiérarchique direct, pas un vote collectif du personnel.",
        "Le compte rendu alimente la décision d'avancement, mais n'emporte pas par lui-même une décision immédiate.",
      ],
    },
    {
      question: "Le congé de proche aidant permet à un agent territorial de :",
      options: [
        "Suspendre temporairement son activité pour s'occuper d'un proche en perte d'autonomie",
        "Partir en formation professionnelle rémunérée",
        "Bénéficier d'une augmentation de traitement",
        "Obtenir automatiquement un logement de fonction",
      ],
      answerIndex: 0,
      explanation:
        "Le congé de proche aidant permet à l'agent de cesser ou de réduire temporairement son activité pour accompagner un proche présentant un handicap ou une perte d'autonomie particulièrement grave, sans rémunération en principe, mais avec maintien de certains droits.",
      optionNotes: [
        null,
        "Il ne s'agit pas d'un congé de formation, qui répond à des règles et un objet différents.",
        "Ce congé n'implique aucune revalorisation salariale, il correspond au contraire à une suspension d'activité.",
        "L'attribution d'un logement de fonction répond à des conditions propres de nécessité ou d'utilité de service, étrangères à ce congé.",
      ],
    },
    {
      question: "Un fonctionnaire territorial frappé d'une sanction du premier groupe peut faire l'objet de :",
      options: [
        "Un avertissement, un blâme ou une exclusion temporaire de fonctions de trois jours maximum",
        "Une rétrogradation de grade",
        "Une révocation immédiate",
        "Une mise à la retraite d'office",
      ],
      answerIndex: 0,
      explanation:
        "Le premier groupe de sanctions, le moins sévère, comprend l'avertissement, le blâme et l'exclusion temporaire de fonctions pour une durée maximale de trois jours, sans consultation obligatoire du conseil de discipline pour les deux premières.",
      optionNotes: [
        null,
        "La rétrogradation appartient au troisième groupe de sanctions, plus sévère.",
        "La révocation est la sanction la plus sévère du quatrième groupe.",
        "La mise à la retraite d'office relève également du quatrième groupe de sanctions.",
      ],
    },
    {
      question: "L'autorité territoriale peut prononcer une suspension immédiate d'un agent en cas de faute grave :",
      options: [
        "À titre provisoire, dans l'attente de la décision disciplinaire définitive",
        "Comme sanction disciplinaire définitive du premier groupe",
        "Uniquement après autorisation du préfet",
        "Jamais, seul le juge pénal peut suspendre un agent",
      ],
      answerIndex: 0,
      explanation:
        "La suspension est une mesure conservatoire et provisoire, prise en cas de faute grave (notamment pénale), dans l'attente de la décision disciplinaire ou judiciaire définitive ; elle n'est pas elle-même une sanction.",
      optionNotes: [
        null,
        "La suspension n'appartient à aucun des quatre groupes de sanctions disciplinaires : c'est une mesure distincte, provisoire par nature.",
        "L'autorité territoriale décide seule de la suspension, sans validation préfectorale préalable.",
        "L'autorité territoriale dispose de ce pouvoir propre, indépendamment de toute décision judiciaire.",
      ],
    },
  ],

  "gestion-comptabilite": [
    {
      question: "Depuis 2024, quelle nomenclature budgétaire et comptable est généralisée à l'ensemble des collectivités locales ?",
      options: [
        "La nomenclature M57",
        "La nomenclature M14",
        "La nomenclature M52",
        "La nomenclature M4",
      ],
      answerIndex: 0,
      explanation:
        "La nomenclature M57, auparavant réservée à certaines grandes collectivités, est devenue le référentiel budgétaire et comptable commun à toutes les communes, départements et régions au 1er janvier 2024, remplaçant notamment la M14.",
      optionNotes: [
        null,
        "La M14 était la nomenclature historique des communes, aujourd'hui remplacée par la M57.",
        "La M52 concernait les départements avant la généralisation de la M57.",
        "La M4 régit les services publics locaux à caractère industriel et commercial, pas le budget général des collectivités.",
      ],
    },
    {
      question: "L'un des apports majeurs de la nomenclature M57 par rapport aux anciennes nomenclatures est :",
      options: [
        "Une présentation budgétaire plus fine, avec des chapitres et comptes communs à toutes les catégories de collectivités",
        "La suppression totale du compte administratif",
        "La fin de l'obligation de voter un budget annuel",
        "Le remplacement du comptable public par l'ordonnateur",
      ],
      answerIndex: 0,
      explanation:
        "La M57 harmonise les règles budgétaires et comptables entre communes, départements, régions et leurs groupements, et offre une plus grande souplesse de gestion (notamment en matière de fongibilité des crédits).",
      optionNotes: [
        null,
        "Le compte administratif demeure un document obligatoire retraçant l'exécution du budget, quelle que soit la nomenclature.",
        "Le principe d'annualité budgétaire reste pleinement applicable sous la M57.",
        "La séparation ordonnateur-comptable demeure un principe fondamental, non remis en cause par le changement de nomenclature.",
      ],
    },
    {
      question: "Le principe d'équilibre réel du budget local impose notamment que :",
      options: [
        "Les recettes et les dépenses de chaque section soient votées en équilibre, et que le remboursement du capital de la dette soit couvert par des ressources propres",
        "Le budget affiche nécessairement un excédent",
        "Aucune dépense d'investissement ne soit financée par l'emprunt",
        "Les deux sections du budget soient fusionnées en une seule enveloppe globale",
      ],
      answerIndex: 0,
      explanation:
        "L'article L. 1612-4 du CGCT exige un équilibre réel, section par section, évalué de façon sincère, avec une couverture du remboursement en capital de la dette par des recettes définitives, et non par un nouvel emprunt.",
      optionNotes: [
        null,
        "L'équilibre réel n'impose pas un excédent : les recettes doivent seulement couvrir les dépenses, sans déficit.",
        "L'emprunt reste une ressource normale de financement des investissements, à condition que l'équilibre global soit respecté.",
        "Les sections de fonctionnement et d'investissement restent distinctes et doivent chacune être équilibrées séparément.",
      ],
    },
    {
      question: "Qu'est-ce qu'une décision modificative (DM) en matière budgétaire ?",
      options: [
        "Un acte permettant d'ajuster en cours d'année les crédits votés au budget primitif",
        "Le document annuel qui remplace le budget primitif",
        "Un contrôle exercé par la chambre régionale des comptes",
        "La décision du préfet de régler d'office le budget",
      ],
      answerIndex: 0,
      explanation:
        "La décision modificative est votée par l'assemblée délibérante en cours d'exercice pour ajuster les crédits (ouverture, virement, suppression) à la suite d'événements imprévus lors du vote du budget primitif.",
      optionNotes: [
        null,
        "La DM complète le budget primitif, elle ne s'y substitue jamais.",
        "La chambre régionale des comptes exerce un contrôle juridictionnel ou financier, distinct de l'adoption d'une DM.",
        "Le règlement d'office par le préfet n'intervient qu'en cas de non-respect grave des obligations budgétaires, pas pour un simple ajustement de crédits.",
      ],
    },
    {
      question: "Le virement de crédits entre chapitres budgétaires, en cours d'exercice, relève en principe :",
      options: [
        "D'une délibération de l'assemblée, sauf délégation donnée à l'exécutif dans certaines limites",
        "D'une décision du comptable public seul",
        "D'une décision exclusive du préfet",
        "D'aucune formalité particulière",
      ],
      answerIndex: 0,
      explanation:
        "Modifier la répartition des crédits entre chapitres relève en principe de l'assemblée délibérante, qui peut toutefois déléguer à l'exécutif local certains virements de crédits dans des limites fixées par la délibération de délégation.",
      optionNotes: [
        null,
        "Le comptable public exécute le budget mais ne décide pas de sa répartition entre chapitres.",
        "Le préfet n'a pas vocation à décider de la répartition interne des crédits d'une collectivité.",
        "Tout virement de crédits doit être formalisé, soit par l'assemblée, soit par l'exécutif en vertu d'une délégation expresse.",
      ],
    },
    {
      question: "Le résultat de clôture d'un exercice budgétaire correspond :",
      options: [
        "Au solde entre les recettes et les dépenses réalisées, reporté sur l'exercice suivant",
        "Au montant total des investissements de l'année",
        "À la seule épargne nette hors remboursement de dette",
        "Au montant des subventions reçues de l'État",
      ],
      answerIndex: 0,
      explanation:
        "Le résultat de clôture, excédent ou déficit, est constaté à la fin de l'exercice et doit être affecté ou reporté au budget suivant, notamment pour couvrir un éventuel besoin de financement de la section d'investissement.",
      optionNotes: [
        null,
        "Le volume d'investissement de l'année est une donnée distincte, qui ne mesure pas directement le solde budgétaire global.",
        "L'épargne nette est un indicateur de capacité d'autofinancement, différent du résultat global de clôture d'exercice.",
        "Les subventions reçues ne constituent qu'une composante des recettes, pas la définition du résultat de clôture.",
      ],
    },
    {
      question: "Le fonds de compensation pour la TVA (FCTVA) a pour objet de :",
      options: [
        "Rembourser partiellement aux collectivités la TVA acquittée sur certaines dépenses d'investissement",
        "Financer intégralement le budget de fonctionnement",
        "Remplacer la dotation globale de fonctionnement",
        "Compenser la suppression de la taxe professionnelle",
      ],
      answerIndex: 0,
      explanation:
        "Le FCTVA constitue une dotation versée par l'État pour compenser, selon un taux forfaitaire, la charge de TVA supportée par les collectivités sur leurs dépenses réelles d'investissement, car elles ne peuvent pas récupérer cette TVA comme une entreprise.",
      optionNotes: [
        null,
        "Le FCTVA concerne exclusivement les dépenses d'investissement, pas le fonctionnement courant.",
        "La DGF est une dotation distincte, destinée globalement au fonctionnement, non remplacée par le FCTVA.",
        "La compensation de la suppression de la taxe professionnelle a fait l'objet de mécanismes spécifiques (CET, dotations de compensation), distincts du FCTVA.",
      ],
    },
    {
      question: "L'amortissement des immobilisations dans la comptabilité locale a pour fonction de :",
      options: [
        "Constater la dépréciation d'un bien et dégager une épargne pour son renouvellement futur",
        "Augmenter artificiellement les recettes de fonctionnement",
        "Éviter d'inscrire les biens dans l'inventaire",
        "Dispenser la collectivité de toute dépense d'entretien",
      ],
      answerIndex: 0,
      explanation:
        "L'amortissement traduit comptablement la perte de valeur d'un bien dans le temps ; la dotation aux amortissements, dépense de fonctionnement obligatoire pour certaines collectivités, participe au financement du renouvellement des immobilisations.",
      optionNotes: [
        null,
        "L'amortissement constitue une dépense (dotation), non une recette supplémentaire pour la collectivité.",
        "L'amortissement s'appuie au contraire sur l'inventaire des biens, qu'il contribue à tenir à jour.",
        "L'amortissement ne supprime aucune obligation d'entretien physique des équipements.",
      ],
    },
    {
      question: "Le contrôle de légalité exercé par le représentant de l'État sur les actes budgétaires permet notamment :",
      options: [
        "De déférer au tribunal administratif un budget jugé irrégulier",
        "D'annuler lui-même directement le budget",
        "De modifier le montant des taux d'imposition votés",
        "De remplacer l'ordonnateur dans la gestion quotidienne",
      ],
      answerIndex: 0,
      explanation:
        "Depuis la décentralisation, le préfet ne peut plus annuler lui-même un acte local : il saisit le tribunal administratif en déféré préfectoral s'il estime l'acte illégal, le juge décidant seul de son annulation.",
      optionNotes: [
        null,
        "Le préfet ne dispose plus du pouvoir d'annulation directe depuis la suppression de la tutelle en 1982.",
        "Le préfet ne modifie jamais lui-même le contenu d'un acte local, y compris les taux de fiscalité votés par l'assemblée.",
        "La gestion quotidienne de la collectivité reste de la responsabilité de l'exécutif local, pas du préfet.",
      ],
    },
    {
      question: "La chambre régionale des comptes (CRC) peut être saisie en cas de budget non voté dans les délais afin de :",
      options: [
        "Proposer au préfet les mesures nécessaires au règlement du budget",
        "Prononcer directement une sanction pénale contre le maire",
        "Dissoudre le conseil municipal",
        "Fixer elle-même les taux d'imposition de l'année suivante sans lien avec le budget",
      ],
      answerIndex: 0,
      explanation:
        "Lorsque le budget n'est pas adopté dans les délais légaux, le préfet saisit la chambre régionale des comptes, qui formule des propositions dans le délai d'un mois ; le préfet règle ensuite le budget et le rend exécutoire.",
      optionNotes: [
        null,
        "La CRC n'a pas de pouvoir de sanction pénale : son rôle est financier et consultatif dans cette procédure.",
        "La dissolution d'un conseil municipal relève d'une procédure distincte et exceptionnelle, non de la seule absence de vote du budget.",
        "Les taux de fiscalité restent de la compétence de l'assemblée délibérante, même en cas de règlement du budget par le préfet.",
      ],
    },
    {
      question: "La chambre régionale des comptes exerce également un contrôle juridictionnel qui consiste à :",
      options: [
        "Juger les comptes des comptables publics pour vérifier la régularité des opérations financières",
        "Évaluer la popularité des élus locaux",
        "Voter le budget en lieu et place du conseil",
        "Nommer les fonctionnaires territoriaux",
      ],
      answerIndex: 0,
      explanation:
        "La fonction juridictionnelle de la CRC consiste à juger les comptes produits par les comptables publics locaux, afin de vérifier la régularité des recettes et des dépenses, indépendamment de l'appréciation de la gestion de l'ordonnateur.",
      optionNotes: [
        null,
        "Le jugement des comptes est une procédure technique et financière, sans rapport avec la popularité politique des élus.",
        "La CRC ne se substitue jamais à l'assemblée délibérante pour voter un budget.",
        "La chambre régionale des comptes ne dispose d'aucune compétence en matière de nomination des agents territoriaux.",
      ],
    },
    {
      question: "Un accord-cadre, en matière de commande publique, se définit comme :",
      options: [
        "Un contrat établissant les règles régissant les futurs marchés subséquents sur une période donnée",
        "Un contrat définitif et ferme pour la totalité d'une prestation",
        "Un simple devis non contractuel",
        "Une convention réservée aux seuls marchés de travaux",
      ],
      answerIndex: 0,
      explanation:
        "L'accord-cadre fixe les conditions (prix, quantités, modalités) applicables aux marchés qui seront passés pendant sa durée, sans engager immédiatement l'acheteur sur la totalité des prestations, à la différence d'un marché ferme.",
      optionNotes: [
        null,
        "C'est l'inverse : l'accord-cadre n'engage pas fermement sur l'intégralité des prestations, contrairement à un marché classique.",
        "Un devis est un document commercial non contractuel, distinct d'un accord-cadre formalisé.",
        "L'accord-cadre peut concerner tous les types d'achats publics (travaux, fournitures, services), pas uniquement les travaux.",
      ],
    },
    {
      question: "La procédure adaptée (MAPA) en marchés publics permet à l'acheteur public de :",
      options: [
        "Fixer librement les modalités de publicité et de mise en concurrence en dessous des seuils européens",
        "S'affranchir totalement de toute obligation de mise en concurrence",
        "Attribuer systématiquement le marché à l'entreprise la moins chère sans analyse des offres",
        "Réserver le marché à une seule entreprise locale sans publicité",
      ],
      answerIndex: 0,
      explanation:
        "En dessous des seuils de procédure formalisée, l'acheteur public détermine librement les modalités de publicité et de mise en concurrence adaptées à l'objet du marché, tout en respectant les principes fondamentaux de la commande publique.",
      optionNotes: [
        null,
        "Les principes de liberté d'accès, d'égalité de traitement et de transparence s'imposent même en procédure adaptée.",
        "L'attribution tient compte de critères pondérés (prix, qualité, délai…) et non du seul critère du prix le plus bas.",
        "Réserver un marché sans publicité à une entreprise choisie arbitrairement contredit les principes de la commande publique.",
      ],
    },
    {
      question: "Le CCAG (cahier des clauses administratives générales) applicable à un marché public a pour fonction de :",
      options: [
        "Fixer des clauses types applicables au marché, sauf dérogation expresse dans les documents particuliers",
        "Remplacer totalement le cahier des clauses techniques particulières",
        "Déterminer unilatéralement le prix du marché",
        "Supprimer l'obligation de signer un contrat écrit",
      ],
      answerIndex: 0,
      explanation:
        "Le CCAG regroupe des clauses administratives standard (délais, pénalités, résiliation…), applicables par référence dans les pièces du marché, sauf si le cahier des clauses administratives particulières y déroge expressément.",
      optionNotes: [
        null,
        "Le CCAG est de nature administrative et ne se substitue pas au cahier des clauses techniques particulières (CCTP), qui définit les spécifications techniques.",
        "Le prix résulte de l'offre du titulaire retenu et des documents particuliers du marché, non du seul CCAG.",
        "Un marché public formalisé reste un contrat écrit ; le CCAG n'a pas vocation à dispenser d'un écrit contractuel.",
      ],
    },
    {
      question: "La délégation de service public (DSP) se distingue du marché public classique en ce que :",
      options: [
        "La rémunération du délégataire est substantiellement liée aux résultats de l'exploitation du service",
        "Elle ne peut jamais dépasser un an",
        "Elle est toujours gratuite pour le délégataire",
        "Elle dispense totalement de toute mise en concurrence",
      ],
      answerIndex: 0,
      explanation:
        "Dans une DSP, le délégataire assume un risque d'exploitation et sa rémunération dépend substantiellement des résultats de l'exploitation (redevances des usagers notamment), contrairement au marché public où le prix est en principe fixé indépendamment du résultat d'exploitation.",
      optionNotes: [
        null,
        "La durée d'une DSP est en général plus longue qu'un an, adaptée à l'amortissement des investissements du délégataire.",
        "Le délégataire perçoit une rémunération, le plus souvent via les usagers du service délégué.",
        "La DSP est soumise à des règles de publicité et de mise en concurrence spécifiques, non à une dispense générale.",
      ],
    },
    {
      question: "Le seuil de dispense de procédure (absence de publicité et de mise en concurrence formalisées) pour les achats publics est fixé, en règle générale, à :",
      options: [
        "40 000 euros HT",
        "221 000 euros HT",
        "5 382 000 euros HT",
        "100 000 euros HT",
      ],
      answerIndex: 0,
      explanation:
        "En dessous de 40 000 euros HT, l'acheteur public peut passer un marché sans publicité ni mise en concurrence préalables, tout en respectant un principe de bonne utilisation des deniers publics et en veillant à ne pas contracter systématiquement avec le même opérateur.",
      optionNotes: [
        null,
        "221 000 € HT correspond davantage au seuil de procédure formalisée pour certains marchés de fournitures et services des collectivités.",
        "Ce montant est proche du seuil européen applicable aux marchés de travaux, beaucoup plus élevé que le seuil de dispense.",
        "100 000 euros ne correspond à aucun seuil réglementaire en vigueur pour les marchés publics.",
      ],
    },
    {
      question: "Une régie dotée de la seule autonomie financière, sans personnalité morale, se caractérise par :",
      options: [
        "Un budget annexe propre, mais une gestion restant juridiquement rattachée à la collectivité",
        "Une personnalité juridique totalement distincte de la collectivité",
        "L'absence de tout budget propre",
        "Un statut de société commerciale privée",
      ],
      answerIndex: 0,
      explanation:
        "La régie à seule autonomie financière dispose d'un budget annexe individualisé retraçant les opérations du service (souvent industriel et commercial), mais reste rattachée juridiquement à la collectivité, sans personnalité morale distincte.",
      optionNotes: [
        null,
        "C'est la régie personnalisée (dotée de la personnalité morale) qui dispose d'une existence juridique distincte, pas la régie à seule autonomie financière.",
        "La régie à autonomie financière dispose précisément d'un budget annexe propre, distinct du budget principal.",
        "Une régie communale n'est jamais une société commerciale de droit privé.",
      ],
    },
    {
      question: "Le principe comptable d'universalité budgétaire impose notamment que :",
      options: [
        "L'ensemble des recettes et des dépenses figure au budget sans compensation entre elles",
        "Toutes les recettes soient affectées à des dépenses précises",
        "Le budget soit voté à l'unanimité des membres présents",
        "Les recettes fiscales soient seules inscrites au budget",
      ],
      answerIndex: 0,
      explanation:
        "Le principe d'universalité impose que la totalité des recettes et des dépenses figure au budget, sans contraction entre elles (non-compensation) et sans affectation d'une recette à une dépense particulière, sauf exception prévue par les textes.",
      optionNotes: [
        null,
        "C'est au contraire le principe d'universalité qui s'oppose, en règle générale, à l'affectation d'une recette précise à une dépense précise.",
        "Aucune règle d'unanimité n'est imposée pour l'adoption du budget : la majorité des suffrages exprimés suffit.",
        "Toutes les recettes, fiscales ou non (dotations, produits des services, emprunts…), doivent figurer au budget.",
      ],
    },
    {
      question: "La sincérité budgétaire impose à l'assemblée délibérante de :",
      options: [
        "Évaluer les recettes et les dépenses de façon réaliste, sans sous-estimation ni surestimation délibérée",
        "Présenter systématiquement un budget excédentaire",
        "Dissimuler certaines charges pour alléger la présentation",
        "Faire approuver le budget par un commissaire aux comptes privé",
      ],
      answerIndex: 0,
      explanation:
        "Le principe de sincérité, rattaché au contrôle de l'équilibre réel, impose que les prévisions budgétaires correspondent à une évaluation sérieuse et de bonne foi des recettes et des charges prévisibles.",
      optionNotes: [
        null,
        "La sincérité n'impose pas un excédent systématique, mais une évaluation réaliste, qu'il y ait équilibre strict ou excédent raisonnable.",
        "Dissimuler des charges contreviendrait justement au principe de sincérité budgétaire.",
        "Le contrôle des comptes publics locaux relève du comptable public et, le cas échéant, de la chambre régionale des comptes, non d'un commissaire aux comptes privé.",
      ],
    },
    {
      question: "Les restes à réaliser, en comptabilité budgétaire locale, correspondent :",
      options: [
        "Aux dépenses et recettes engagées mais non mandatées ou non encaissées à la clôture de l'exercice",
        "Au solde de trésorerie disponible en fin d'année",
        "Aux seules dépenses de personnel non payées",
        "À l'excédent de fonctionnement capitalisé",
      ],
      answerIndex: 0,
      explanation:
        "Les restes à réaliser, en particulier en section d'investissement, correspondent aux dépenses engagées juridiquement mais non mandatées, et aux recettes certaines non encore encaissées à la fin de l'exercice ; ils sont repris au budget suivant.",
      optionNotes: [
        null,
        "La trésorerie disponible est une donnée de caisse, distincte de la notion de restes à réaliser.",
        "Les restes à réaliser concernent l'ensemble des opérations engagées non soldées, pas seulement les dépenses de personnel.",
        "L'excédent de fonctionnement capitalisé est une opération d'affectation du résultat, différente des restes à réaliser.",
      ],
    },
    {
      question: "Le compte de gestion, établi par le comptable public, doit être en concordance avec :",
      options: [
        "Le compte administratif établi par l'ordonnateur",
        "Le rapport annuel du préfet",
        "Le plan local d'urbanisme",
        "Le projet de loi de finances de l'État",
      ],
      answerIndex: 0,
      explanation:
        "Le compte de gestion et le compte administratif doivent présenter des résultats identiques, chacun étant établi respectivement par le comptable et par l'ordonnateur, garantissant ainsi la fiabilité de l'exécution budgétaire.",
      optionNotes: [
        null,
        "Le préfet ne produit pas de document comptable retraçant l'exécution budgétaire d'une collectivité donnée.",
        "Le PLU est un document d'urbanisme, sans lien avec la reddition des comptes budgétaires.",
        "Le projet de loi de finances concerne le budget de l'État, distinct des documents comptables locaux.",
      ],
    },
    {
      question: "Les dotations de l'État aux collectivités territoriales, comme la dotation globale de fonctionnement (DGF), sont :",
      options: [
        "Des concours financiers libres d'emploi, sans affectation à une dépense précise",
        "Exclusivement réservées au financement des investissements",
        "Attribuées uniquement aux régions",
        "Soumises à remboursement intégral chaque année",
      ],
      answerIndex: 0,
      explanation:
        "La DGF constitue la principale dotation de fonctionnement versée par l'État aux collectivités ; elle n'est pas affectée à une dépense particulière et peut être utilisée librement par la collectivité bénéficiaire.",
      optionNotes: [
        null,
        "La DGF finance avant tout le fonctionnement, même si une part peut contribuer indirectement au financement global de la collectivité.",
        "Toutes les catégories de collectivités (communes, départements, certains groupements) perçoivent une dotation globale de fonctionnement, pas seulement les régions.",
        "La DGF est une dotation définitive, non un prêt ou une avance à rembourser.",
      ],
    },
    {
      question: "La taxe foncière sur les propriétés bâties est établie notamment à partir de :",
      options: [
        "La valeur locative cadastrale du bien et du taux voté par la collectivité",
        "Le revenu du propriétaire déclaré aux impôts",
        "Le nombre d'occupants du logement",
        "Le prix de vente initial du bien, non révisé",
      ],
      answerIndex: 0,
      explanation:
        "L'impôt foncier est calculé en appliquant le taux voté par la collectivité bénéficiaire à la valeur locative cadastrale du bien, déterminée par l'administration fiscale selon des règles d'évaluation spécifiques.",
      optionNotes: [
        null,
        "Le revenu du propriétaire n'entre pas directement dans le calcul de la taxe foncière, à la différence de certains impôts sur le revenu.",
        "Le nombre d'occupants n'est pas un critère de calcul de la taxe foncière, contrairement à d'anciens critères de la taxe d'habitation.",
        "La valeur locative cadastrale fait l'objet de règles de revalorisation périodique, elle n'est pas figée au prix d'achat initial.",
      ],
    },
    {
      question: "Un emprunt souscrit par une collectivité territoriale doit obligatoirement :",
      options: [
        "Être affecté exclusivement au financement d'opérations d'investissement",
        "Financer indifféremment des dépenses de fonctionnement ou d'investissement",
        "Être contracté uniquement auprès de l'État",
        "Être remboursé en une seule échéance la première année",
      ],
      answerIndex: 0,
      explanation:
        "Les collectivités locales ne peuvent recourir à l'emprunt que pour financer des dépenses d'investissement, et non des dépenses de fonctionnement, conformément au principe d'équilibre réel du budget.",
      optionNotes: [
        null,
        "Le financement du fonctionnement par l'emprunt est précisément prohibé pour les collectivités territoriales.",
        "Les collectivités peuvent emprunter auprès de différents établissements bancaires, pas seulement auprès de l'État.",
        "Le remboursement d'un emprunt s'étale en principe sur plusieurs années, selon un échéancier défini dans le contrat de prêt.",
      ],
    },
    {
      question: "Le principe d'unité budgétaire implique que :",
      options: [
        "L'ensemble des recettes et des dépenses d'une collectivité figure, en principe, dans un document budgétaire unique",
        "Chaque service d'une collectivité dispose nécessairement de son propre budget",
        "Une seule personne vote le budget",
        "Les collectivités ne peuvent avoir qu'un seul compte bancaire",
      ],
      answerIndex: 0,
      explanation:
        "Le principe d'unité impose que toutes les opérations budgétaires d'une collectivité soient rassemblées dans un document unique (le budget), les budgets annexes constituant des aménagements encadrés et exceptionnels à ce principe.",
      optionNotes: [
        null,
        "C'est au contraire l'exception (budgets annexes) qui se justifie par la nature particulière de certains services, et non la règle générale.",
        "Le budget est voté collectivement par l'assemblée délibérante, pas par une seule personne.",
        "L'unité budgétaire est un principe comptable et non une règle relative au nombre de comptes bancaires détenus.",
      ],
    },
    {
      question: "Le rapport d'orientation budgétaire (ROB), support du débat d'orientation budgétaire, doit notamment présenter :",
      options: [
        "Les orientations budgétaires, les engagements pluriannuels envisagés et des informations sur la dette",
        "Le détail nominatif des rémunérations de chaque agent",
        "La liste des électeurs de la commune",
        "Le programme électoral du maire pour le mandat suivant",
      ],
      answerIndex: 0,
      explanation:
        "Le ROB expose les grandes orientations budgétaires envisagées, les engagements pluriannuels, ainsi que des indications sur la structure et la gestion de la dette, pour permettre un débat éclairé avant le vote du budget.",
      optionNotes: [
        null,
        "La rémunération nominative de chaque agent n'a pas vocation à être détaillée dans ce rapport, sauf masse salariale globale pour certaines collectivités.",
        "La liste électorale est un document distinct, sans lien avec les orientations budgétaires.",
        "Le ROB est un document financier et prospectif, non un programme politique de campagne.",
      ],
    },
    {
      question: "Le contrôle de gestion dans une collectivité territoriale a pour objectif principal de :",
      options: [
        "Mesurer l'efficacité et l'efficience de l'utilisation des moyens publics au regard des objectifs fixés",
        "Remplacer le contrôle de légalité du préfet",
        "Sanctionner disciplinairement les agents peu performants",
        "Fixer unilatéralement le montant des impôts locaux",
      ],
      answerIndex: 0,
      explanation:
        "Le contrôle de gestion est un outil de pilotage interne permettant d'analyser les coûts, les résultats et la performance des services, afin d'éclairer la décision des élus et des directions, sans se substituer aux contrôles externes de légalité ou financiers.",
      optionNotes: [
        null,
        "Le contrôle de légalité reste une prérogative du représentant de l'État, distincte du contrôle de gestion interne.",
        "Le contrôle de gestion n'est pas un outil disciplinaire individuel, mais un outil de pilotage global des politiques publiques.",
        "La fixation des taux d'imposition relève du pouvoir délibérant de l'assemblée, non du contrôle de gestion.",
      ],
    },
    {
      question: "Le budget supplémentaire (ou budget de reprise des résultats) permet notamment de :",
      options: [
        "Reprendre les résultats de l'exercice précédent après le vote du compte administratif",
        "Remplacer définitivement le budget primitif",
        "Supprimer l'obligation de voter un compte administratif",
        "Transférer l'ensemble des compétences à un autre échelon territorial",
      ],
      answerIndex: 0,
      explanation:
        "Le budget supplémentaire, voté généralement après l'adoption du compte administratif, permet d'ajuster les crédits et de reprendre les résultats (excédents ou déficits) constatés sur l'exercice précédent.",
      optionNotes: [
        null,
        "Le budget supplémentaire complète le budget primitif en cours d'année, il ne s'y substitue pas.",
        "Le vote du compte administratif reste une obligation annuelle distincte, nécessaire à l'élaboration du budget supplémentaire.",
        "Le transfert de compétences relève d'une problématique institutionnelle distincte des documents budgétaires annuels.",
      ],
    },
    {
      question: "Le pouvoir adjudicateur qui souhaite recourir à un marché public négocié sans publicité ni mise en concurrence préalables, hors seuil de dispense, doit justifier notamment :",
      options: [
        "D'une situation d'urgence impérieuse imprévisible ou d'une absence de concurrence",
        "D'une simple préférence pour un fournisseur habituel",
        "D'un prix proposé inférieur à celui du marché précédent",
        "D'un accord informel du conseil municipal",
      ],
      answerIndex: 0,
      explanation:
        "Le recours à la procédure négociée sans publicité ni mise en concurrence, en dehors des cas de dispense liés au montant, suppose des circonstances exceptionnelles limitativement énumérées par le code de la commande publique, comme l'urgence impérieuse ou l'absence de concurrence effective.",
      optionNotes: [
        null,
        "La préférence pour un prestataire habituel ne constitue pas un motif légal justifiant l'absence de mise en concurrence.",
        "Le prix proposé, aussi avantageux soit-il, ne dispense pas en lui-même de respecter les règles de publicité et de mise en concurrence.",
        "L'accord du conseil municipal porte en principe sur l'autorisation de signer, pas sur la dispense des règles de publicité et de mise en concurrence prévues par le droit de la commande publique.",
      ],
    },
    {
      question: "Les pénalités de retard prévues dans un marché public ont pour fonction de :",
      options: [
        "Sanctionner contractuellement le titulaire en cas de non-respect des délais d'exécution convenus",
        "Remplacer la réception du marché",
        "Permettre la résiliation automatique du contrat dès le premier jour de retard",
        "Servir uniquement à financer la formation des agents de la collectivité",
      ],
      answerIndex: 0,
      explanation:
        "Les pénalités de retard, prévues dans les documents contractuels, visent à réparer forfaitairement le préjudice subi par l'acheteur public du fait du dépassement des délais contractuels d'exécution par le titulaire du marché.",
      optionNotes: [
        null,
        "Les pénalités de retard sont une sanction financière, distincte de la procédure de réception technique de l'ouvrage ou de la prestation.",
        "Le retard peut être sanctionné par des pénalités sans entraîner automatiquement une résiliation, laquelle suppose une procédure propre.",
        "Les sommes perçues au titre des pénalités constituent une recette budgétaire générale, sans affectation obligatoire à la formation du personnel.",
      ],
    },
  ],
};
