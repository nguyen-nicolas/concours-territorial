import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Clock, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VideoYoutube } from "@/components/video-youtube";
import {
  coursDeSpecialite,
  coursCommunsDeLaPartie,
  coursAgentMaitrise,
  partiesCoursAM,
} from "@/lib/coursAgentMaitrise";
import { specialitesAM, type SpecialiteId } from "@/lib/specialitesAgentMaitrise";
import { getTheme } from "@/lib/quizData";
import { useSpecialiteAM } from "@/hooks/useSpecialiteAM";
import { depuisIso, useDateConcours } from "@/hooks/useDateConcours";

const title = "Cours du concours d'agent de maîtrise territorial | Prépa Territoriale";
const description =
  "Cours pour préparer le concours interne d'agent de maîtrise territorial : méthode de l'écrit, spécialités BTP / VRD, Restauration, Espaces verts, Environnement-hygiène, Logistique, et tronc commun (sécurité, encadrement, oral).";

export const Route = createFileRoute("/cours-agent-maitrise/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CoursAgentMaitrisePage,
});

function CoursAgentMaitrisePage() {
  const { specialite: memorisee, choisir } = useSpecialiteAM();
  const [param, setParam] = useState<SpecialiteId | null>(null);
  useEffect(() => {
    const valeur = new URLSearchParams(window.location.search).get("spec");
    if (valeur && specialitesAM.some((s) => s.id === valeur)) setParam(valeur as SpecialiteId);
  }, []);
  const { donnees: dateConcours } = useDateConcours("agent-maitrise");
  const [joursRestants, setJoursRestants] = useState<number | null>(null);
  useEffect(() => {
    const cible = dateConcours ? depuisIso(dateConcours.date) : null;
    if (!cible) {
      setJoursRestants(null);
      return;
    }
    const aujourdhui = new Date();
    aujourdhui.setHours(0, 0, 0, 0);
    setJoursRestants(Math.round((cible.getTime() - aujourdhui.getTime()) / 86400000));
  }, [dateConcours]);
  const specId = param ?? memorisee ?? "btp-vrd";
  const spec = specialitesAM.find((s) => s.id === specId) ?? specialitesAM[0]!;
  const themesSpec = spec.quizThemeIds.map((id) => getTheme(id)).filter((t) => t !== undefined);
  const coursSpec = coursDeSpecialite(spec.id);

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
          Agent de maîtrise territorial
        </p>
        <h1 className="font-display text-foreground mt-3 text-4xl sm:text-5xl">
          Les cours du concours
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
          Choisissez votre spécialité pour afficher les cours qui lui sont propres, puis les cours
          communs à toutes les spécialités.
        </p>

        {joursRestants !== null && joursRestants > 0 && (
          <Link
            to="/concours/$concoursId"
            params={{ concoursId: "agent-maitrise" }}
            className="bg-primary/5 border-primary/30 hover:border-primary mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border px-4 py-3 text-sm transition-colors"
          >
            <span className="text-primary font-display text-lg font-bold">J-{joursRestants}</span>
            <span className="text-foreground">avant votre épreuve · voir mon plan de révision</span>
          </Link>
        )}

        {/* Sélecteur de spécialité */}
        <div className="mt-8 flex flex-wrap gap-3">
          {specialitesAM.map((s) => (
            <button
              key={s.id}
              type="button"
              aria-pressed={s.id === spec.id}
              onClick={() => {
                choisir(s.id);
                setParam(s.id);
                window.history.replaceState(null, "", `?spec=${s.id}`);
              }}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                s.id === spec.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground hover:border-primary"
              }`}
            >
              {s.titre}
            </button>
          ))}
        </div>

        {spec.id === "btp-vrd" && (
          <div className="mt-12 max-w-3xl">
            <VideoYoutube
              id="XzYGr6grF_U"
              titre="40 questions pour préparer un concours Agent de maîtrise"
              details="40 questions corrigées avec temps de réflexion, pour s'entraîner avant de passer aux cours."
            />
          </div>
        )}

        {/* Cours de la spécialité */}
        <section className="mt-12">
          <h2 className="font-display text-foreground text-2xl">Spécialité · {spec.titre}</h2>
          <p className="text-muted-foreground mt-2 max-w-3xl text-sm">{spec.description}</p>
          {coursSpec.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {coursSpec.map((c) => (
                <CoursCarte key={c.id} cours={c} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground mt-6 italic text-sm">
              Les cours de cette spécialité seront disponibles prochainement.
            </p>
          )}
        </section>

        {themesSpec.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-foreground text-2xl">Quiz de la spécialité</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {themesSpec.map((t) => (
                <Link
                  key={t.id}
                  to="/quiz/$themeId"
                  params={{ themeId: t.id }}
                  search={{ concours: "agent-maitrise" }}
                  className="group border-border bg-card hover:border-primary flex flex-col rounded-2xl border p-5 transition hover:shadow-md"
                >
                  <h3 className="font-display text-foreground group-hover:text-primary text-base font-bold">
                    {t.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 flex-1 text-sm">{t.description}</p>
                  <span className="text-primary mt-3 text-sm font-semibold">
                    {t.questions.length} questions
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Tronc commun */}
        <section className="mt-14 space-y-14">
          <h2 className="font-display text-foreground text-2xl">Tronc commun</h2>
          <p className="text-muted-foreground -mt-10 max-w-3xl text-sm">
            Ces cours s'appliquent à toutes les spécialités : méthode de l'écrit, sécurité,
            encadrement et oral.
          </p>
          {partiesCoursAM
            .filter((p) => p.id !== "specialite")
            .map((partie) => {
              const cours = coursCommunsDeLaPartie(partie.id);
              if (cours.length === 0) return null;
              return (
                <div key={partie.id}>
                  <h3 className="font-display text-foreground text-xl">{partie.titre}</h3>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    {cours.map((c) => (
                      <CoursCarte key={c.id} cours={c} />
                    ))}
                  </div>
                </div>
              );
            })}
        </section>

        <p className="text-muted-foreground border-border mt-16 rounded-2xl border p-6 text-sm leading-relaxed">
          Les valeurs réglementaires citées sont des repères de préparation. Vérifiez toujours les
          épreuves, durées et coefficients dans l'arrêté d'ouverture et la note de cadrage du centre
          de gestion organisateur.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}

function CoursCarte({ cours: c }: { cours: (typeof coursAgentMaitrise)[0] }) {
  const quiz = c.quizThemeId ? getTheme(c.quizThemeId) : undefined;
  return (
    <Link
      to="/cours-agent-maitrise/$coursId"
      params={{ coursId: c.id }}
      className="group border-border bg-card hover:border-primary flex flex-col rounded-2xl border p-6 transition hover:shadow-lg"
    >
      <h3 className="font-display text-foreground group-hover:text-primary text-xl">{c.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm">{c.resume}</p>
      <p className="text-muted-foreground mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs tracking-[0.1em] uppercase">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" /> {c.duree}
        </span>
        {quiz ? (
          <span className="inline-flex items-center gap-1.5">
            <Target className="size-3.5" /> {quiz.questions.length} questions
          </span>
        ) : null}
      </p>
    </Link>
  );
}
