import { getCoursAM, coursDeSpecialite } from "./coursAgentMaitrise";
import { getSpecialite, type SpecialiteId } from "./specialitesAgentMaitrise";
import { getTheme } from "./quizData";
import type { Concours } from "./concours";

/** Destination d'une tâche du plan de révision. */
export type LienPlan =
  | { type: "cours"; id: string }
  | { type: "quiz"; id: string }
  | { type: "epreuves-blanches" }
  | { type: "memo" }
  | { type: "externe"; url: string };

export interface TachePlan {
  libelle: string;
  lien?: LienPlan;
}

/** Une unité d'apprentissage : un cours et son quiz, par exemple. */
export interface ModulePlan {
  phase: string;
  taches: TachePlan[];
}

export interface SemainePlan {
  numero: number;
  phase: string;
  taches: TachePlan[];
}

interface Finales {
  epreuve: TachePlan[];
  derniere: TachePlan[];
}

const MODULES_MAX_PAR_SEMAINE = 3;

function libellePhase(groupe: ModulePlan[]): string {
  const phases = [...new Set(groupe.map((m) => m.phase))];
  return phases.length > 0 ? phases.join(" + ") : "Apprentissage";
}

/**
 * Répartit des modules d'apprentissage sur le nombre de semaines restantes.
 * Les deux dernières semaines sont réservées aux épreuves blanches puis à la dernière ligne
 * droite. Avec moins de trois semaines, le plan se réduit à l'essentiel.
 */
export function construirePlan(
  semaines: number,
  modulesEntree: ModulePlan[],
  entrainements: TachePlan[],
  prioritaires: ModulePlan[],
  finales: Finales,
): SemainePlan[] {
  if (semaines <= 0) return [];
  let modules = modulesEntree;
  const derniere: SemainePlan = {
    numero: semaines,
    phase: "Dernière ligne droite",
    taches: finales.derniere,
  };

  if (semaines === 1) {
    return [
      {
        numero: 1,
        phase: "Plan express",
        taches: [...prioritaires.flatMap((m) => m.taches).slice(0, 4), ...finales.derniere],
      },
    ];
  }
  if (semaines === 2) {
    return [
      {
        numero: 1,
        phase: "L'essentiel",
        taches: prioritaires.flatMap((m) => m.taches).slice(0, 6),
      },
      derniere,
    ];
  }

  const n = semaines - 2;
  const plan: SemainePlan[] = [];

  // Avec peu de semaines, on garde les modules prioritaires puis on complète dans l'ordre.
  const capacite = n * MODULES_MAX_PAR_SEMAINE;
  if (modules.length > capacite) {
    const retenus = new Set<ModulePlan>(prioritaires.slice(0, capacite));
    for (const m of modules) {
      if (retenus.size >= capacite) break;
      retenus.add(m);
    }
    modules = modules.filter((m) => retenus.has(m));
  }

  if (modules.length >= n) {
    const base = Math.floor(modules.length / n);
    const extra = modules.length % n;
    let debut = 0;
    for (let i = 0; i < n; i += 1) {
      const taille = base + (i < extra ? 1 : 0);
      const groupe = modules.slice(debut, debut + taille);
      debut += taille;
      plan.push({
        numero: i + 1,
        phase: libellePhase(groupe),
        taches: groupe.flatMap((m) => m.taches),
      });
    }
  } else {
    for (let i = 0; i < n; i += 1) {
      const module = modules[i];
      if (module) {
        plan.push({ numero: i + 1, phase: module.phase, taches: module.taches });
      } else {
        const k = i - modules.length;
        const pool = entrainements.length > 0 ? entrainements : [];
        const taches = pool.length
          ? [pool[(2 * k) % pool.length]!, pool[(2 * k + 1) % pool.length]!]
          : [];
        plan.push({
          numero: i + 1,
          phase: "Entraînement",
          taches: [
            { libelle: "Reprendre les points faibles repérés dans vos résultats" },
            ...taches,
          ],
        });
      }
    }
  }

  plan.push({ numero: semaines - 1, phase: "Épreuves blanches", taches: finales.epreuve });
  plan.push(derniere);
  return plan;
}

function tachesQuiz(id: string, libelle?: string): TachePlan[] {
  const theme = getTheme(id);
  return theme ? [{ libelle: libelle ?? `Quiz : ${theme.title}`, lien: { type: "quiz", id } }] : [];
}

/** Module « cours + quiz associé », en évitant de répéter un même quiz. */
function moduleCours(
  id: string,
  phase: string,
  quizVus: Set<string>,
  avecQuiz = true,
): ModulePlan | null {
  const cours = getCoursAM(id);
  if (!cours) return null;
  const taches: TachePlan[] = [{ libelle: `Cours : ${cours.title}`, lien: { type: "cours", id } }];
  if (avecQuiz && cours.quizThemeId && !quizVus.has(cours.quizThemeId)) {
    quizVus.add(cours.quizThemeId);
    taches.push(
      ...tachesQuiz(
        cours.quizThemeId,
        `S'entraîner : ${getTheme(cours.quizThemeId)?.title ?? "quiz"}`,
      ),
    );
  }
  return { phase, taches };
}

/** Plan de révision du concours d'agent de maîtrise, selon la spécialité choisie. */
export function planAgentMaitrise(
  semaines: number,
  specialiteId: SpecialiteId | null,
): SemainePlan[] {
  const specialite = getSpecialite(specialiteId ?? "btp-vrd")!;
  const vus = new Set<string>();
  const enModules = (liste: (ModulePlan | null)[]) =>
    liste.filter((m): m is ModulePlan => m !== null);

  const methode = moduleCours("methode-ecrit", "Fondations", vus, specialite.id === "btp-vrd");
  const modulesSpecialite = enModules(
    coursDeSpecialite(specialite.id).map((c) => moduleCours(c.id, "Votre spécialité", vus)),
  );
  const securite = moduleCours("securite", "Sécurité", vus);
  const encadrement = moduleCours("encadrement", "Encadrement", vus);
  const territorial = moduleCours("environnement-territorial", "Environnement territorial", vus);
  const oralExpose = moduleCours("oral-expose", "Oral", vus);
  const oralSituations = moduleCours("oral-situations", "Oral", vus);

  const modules = enModules([
    methode,
    ...modulesSpecialite,
    securite,
    encadrement,
    territorial,
    oralExpose,
    oralSituations,
  ]);
  const prioritaires = enModules([securite, modulesSpecialite[0] ?? null, methode, oralExpose]);

  const entrainements: TachePlan[] = [
    ...specialite.quizThemeIds.flatMap((id) => tachesQuiz(id)),
    ...["am-hygiene-securite", "am-encadrement", "am-environnement"].flatMap((id) =>
      tachesQuiz(id),
    ),
  ];

  const sujet = specialite.ressources[0];
  const premierQuiz = specialite.quizThemeIds[0];
  const finales: Finales = {
    epreuve: [
      ...(sujet
        ? [
            {
              libelle:
                "Chronométrer un sujet d'annales de votre spécialité en conditions réelles (questionnaire : 2 heures)",
              lien: { type: "externe", url: sujet.url } as LienPlan,
            },
          ]
        : []),
      ...(premierQuiz
        ? tachesQuiz(
            premierQuiz,
            "Refaire le quiz principal de votre spécialité, sans aide ni notes",
          )
        : []),
      { libelle: "Passer une épreuve blanche du site", lien: { type: "epreuves-blanches" } },
      {
        libelle: "Répéter l'exposé de l'oral à voix haute, chronométré (5 minutes au plus)",
        lien: { type: "cours", id: "oral-expose" },
      },
    ],
    derniere: [
      {
        libelle:
          "Relire les rubriques « À retenir » et « Pièges fréquents » des cours de votre spécialité",
      },
      { libelle: "Refaire les questions que vous avez ratées" },
      {
        libelle:
          "Préparer le jour J : convocation, pièce d'identité, calculatrice simple, stylo à encre noire ou bleue",
      },
      { libelle: "Ne pas apprendre de nouvelle notion la veille et dormir suffisamment" },
    ],
  };

  return construirePlan(semaines, modules, entrainements, prioritaires, finales);
}

/** Plan de révision générique pour les autres concours : fiches mémo puis quiz par thème. */
export function planGenerique(semaines: number, concours: Concours): SemainePlan[] {
  const quiz = concours.themeIds.flatMap((id) => tachesQuiz(id));
  const modules: ModulePlan[] = [
    {
      phase: "Fondations",
      taches: [{ libelle: "Lire les fiches mémo de votre concours", lien: { type: "memo" } }],
    },
    ...quiz.map((t): ModulePlan => ({ phase: "Entraînement", taches: [t] })),
  ];
  const finales: Finales = {
    epreuve: [
      { libelle: "Passer une épreuve blanche du site", lien: { type: "epreuves-blanches" } },
      ...quiz.slice(0, 2),
    ],
    derniere: [
      { libelle: "Relire les fiches mémo" },
      { libelle: "Refaire les questions que vous avez ratées" },
      { libelle: "Préparer le jour J : convocation, pièce d'identité, matériel autorisé" },
      { libelle: "Ne pas apprendre de nouvelle notion la veille et dormir suffisamment" },
    ],
  };
  return construirePlan(semaines, modules, quiz, modules.slice(0, 3), finales);
}
