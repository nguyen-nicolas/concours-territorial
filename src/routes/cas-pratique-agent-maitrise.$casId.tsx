import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Pause, Play, RotateCcw } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ApercuLimite } from "@/components/acces-limite";
import { getCasPratique } from "@/lib/casPratiquesAgentMaitrise";
import { getSpecialite } from "@/lib/specialitesAgentMaitrise";

export const Route = createFileRoute("/cas-pratique-agent-maitrise/$casId")({
  loader: ({ params }) => {
    const cas = getCasPratique(params.casId);
    if (!cas) throw notFound();
    return { cas };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Cas pratique introuvable | Prépa Territoriale" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.cas.titre} — cas pratique ${loaderData.cas.specialite === "atsem" ? "ATSEM" : "agent de maîtrise"} | Prépa Territoriale`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.cas.resume },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.cas.resume },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-display text-foreground text-3xl">Cas pratique introuvable</h1>
        <Link
          to="/cours-agent-maitrise"
          className="bg-primary text-primary-foreground mt-6 inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
        >
          Retour aux cours
        </Link>
      </main>
    </div>
  ),
  component: CasPratiquePage,
});

const DUREE = 2 * 60 * 60;

function formatChrono(secondes: number): string {
  const h = Math.floor(secondes / 3600);
  const m = Math.floor((secondes % 3600) / 60);
  const s = secondes % 60;
  const deux = (n: number) => String(n).padStart(2, "0");
  return `${h}:${deux(m)}:${deux(s)}`;
}

function Chrono() {
  const [reste, setReste] = useState(DUREE);
  const [actif, setActif] = useState(false);
  const finRef = useRef(0);

  useEffect(() => {
    if (!actif) return;
    const id = window.setInterval(() => {
      const restant = Math.max(0, Math.ceil((finRef.current - Date.now()) / 1000));
      setReste(restant);
      if (restant === 0) setActif(false);
    }, 1000);
    return () => window.clearInterval(id);
  }, [actif]);

  const demarrer = () => {
    finRef.current = Date.now() + reste * 1000;
    setActif(true);
  };

  return (
    <div className="bg-card flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-5">
      <div>
        <p className="text-muted-foreground text-xs font-semibold tracking-[0.15em] uppercase">
          Chronomètre (facultatif)
        </p>
        <p
          role="timer"
          aria-label="Temps restant"
          className={`mt-1 text-3xl font-bold tabular-nums ${reste <= 600 && reste > 0 ? "text-destructive" : "text-foreground"}`}
        >
          {formatChrono(reste)}
        </p>
      </div>
      <div className="flex gap-2">
        {actif ? (
          <button
            type="button"
            onClick={() => setActif(false)}
            className="border-border hover:border-primary inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors"
          >
            <Pause className="size-4" aria-hidden="true" /> Pause
          </button>
        ) : (
          <button
            type="button"
            onClick={demarrer}
            disabled={reste === 0}
            className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:opacity-90 disabled:opacity-50"
          >
            <Play className="size-4" aria-hidden="true" />{" "}
            {reste === DUREE ? "Démarrer les 2 heures" : "Reprendre"}
          </button>
        )}
        <button
          type="button"
          onClick={() => {
            setActif(false);
            setReste(DUREE);
          }}
          className="border-border hover:border-primary inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors"
        >
          <RotateCcw className="size-4" aria-hidden="true" /> Réinitialiser
        </button>
      </div>
    </div>
  );
}

function CasPratiquePage() {
  const { cas } = Route.useLoaderData();
  const specialite = getSpecialite(cas.specialite);
  const [corrigeVisible, setCorrigeVisible] = useState(false);
  const [acquis, setAcquis] = useState<Record<string, boolean>>({});

  const cle = (numero: number, i: number) => `${numero}-${i}`;
  const total = cas.corrige.reduce(
    (n, k) =>
      n + k.attendus.reduce((m, att, i) => m + (acquis[cle(k.numero, i)] ? att.points : 0), 0),
    0,
  );

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">
        <Link
          to={cas.specialite === "atsem" ? "/atsem" : "/cours-agent-maitrise"}
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition"
        >
          <ArrowLeft className="size-4" />
          {cas.specialite === "atsem" ? "Préparer le concours d'ATSEM" : "Cours et spécialités"}
        </Link>

        <p className="text-primary mt-8 text-sm font-semibold tracking-[0.2em] uppercase">
          {cas.specialite === "atsem"
            ? "Questions sur dossier · ATSEM"
            : `Cas pratique · ${specialite?.titre ?? "Agent de maîtrise"}`}
        </p>
        <h1 className="font-display text-foreground mt-3 text-3xl sm:text-4xl">{cas.titre}</h1>
        <p className="text-muted-foreground mt-3 text-lg">{cas.resume}</p>
        <p className="text-muted-foreground mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs tracking-[0.12em] uppercase">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" /> 2 heures
          </span>
          <span>{cas.epreuve ?? "Coefficient 3 à l'épreuve réelle"}</span>
          <span>Noté sur 20</span>
        </p>
        <p className="bg-secondary/60 text-foreground mt-5 rounded-xl px-4 py-3 text-sm leading-relaxed">
          Ce cas est écrit par Prépa Territoriale dans l'esprit des annales officielles : ce n'est
          pas un sujet de concours. Traitez-le d'abord sans regarder le corrigé, avec une
          calculatrice simple.
        </p>

        <ApercuLimite
          message="le dossier complet, les questions, le corrigé type et le barème"
          hauteur="30rem"
        >
          <div className="mt-8">
            <Chrono />
          </div>

          <section className="mt-10">
            <h2 className="font-display text-foreground text-2xl">Mise en situation</h2>
            <div className="mt-3 space-y-3">
              {cas.contexte.map((p) => (
                <p key={p} className="text-foreground/90 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>

          <section className="mt-10 space-y-6">
            <h2 className="font-display text-foreground text-2xl">Dossier</h2>
            {cas.documents.map((d) => (
              <article key={d.titre} className="border-border bg-card rounded-2xl border p-5">
                <h3 className="font-display text-foreground text-base font-bold">{d.titre}</h3>
                {d.paragraphes?.map((p) => (
                  <p key={p} className="text-foreground/90 mt-3 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
                {d.tableau && (
                  <div className="border-border mt-3 overflow-x-auto rounded-xl border">
                    <table className="w-full min-w-[26rem] text-left text-sm">
                      <thead className="bg-secondary/60">
                        <tr>
                          {d.tableau.entetes.map((e) => (
                            <th key={e} scope="col" className="px-3 py-2 font-semibold">
                              {e}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {d.tableau.lignes.map((l) => (
                          <tr key={l.join("|")} className="border-border border-t align-top">
                            {l.map((c, i) => (
                              <td
                                key={`${l[0]}-${i}`}
                                className={`px-3 py-2 ${i === 0 ? "font-medium" : "text-muted-foreground"}`}
                              >
                                {c}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {d.points && (
                  <ul className="mt-3 space-y-2">
                    {d.points.map((p) => (
                      <li key={p} className="text-foreground/90 flex gap-2 text-sm leading-relaxed">
                        <span
                          aria-hidden="true"
                          className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </section>

          <section className="mt-10">
            <h2 className="font-display text-foreground text-2xl">Questions</h2>
            <ol className="mt-4 space-y-4">
              {cas.questions.map((q) => (
                <li key={q.numero} className="border-border bg-card rounded-2xl border p-5">
                  <p className="text-primary text-xs font-semibold tracking-[0.12em] uppercase">
                    Question {q.numero} · {q.points} points
                  </p>
                  <p className="text-foreground mt-2 text-base leading-relaxed">{q.intitule}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-foreground text-xl">Conseils de méthode</h2>
            <ul className="mt-3 space-y-2">
              {cas.conseils.map((c) => (
                <li key={c} className="text-muted-foreground flex gap-2 text-sm leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border-t pt-10">
            {!corrigeVisible ? (
              <div className="text-center">
                <p className="text-muted-foreground text-sm">
                  Avez-vous traité toutes les questions ?
                </p>
                <button
                  type="button"
                  onClick={() => setCorrigeVisible(true)}
                  className="bg-primary text-primary-foreground mt-3 rounded-xl px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                >
                  Afficher le corrigé type et le barème
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-foreground text-2xl">Corrigé type et barème</h2>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  Cochez chaque élément que vous aviez traité dans votre copie : la note sur 20 se
                  calcule automatiquement. Une démarche juste avec une petite erreur de calcul
                  rapporte l'essentiel des points.
                </p>

                <div className="bg-card sticky top-0 z-10 mt-5 rounded-2xl border p-4 shadow-sm">
                  <p className="text-foreground text-sm font-semibold">
                    Votre auto-évaluation :{" "}
                    <span className="text-primary text-xl font-bold">{total}</span> / 20
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {total < 5
                      ? "Sous 5 sur 20 : à l'épreuve réelle, une telle note serait éliminatoire."
                      : total < 10
                        ? "Des bases à consolider : revoyez les cours de la spécialité."
                        : total < 14
                          ? "Un niveau correct : travaillez les éléments non cochés."
                          : "Un très bon niveau."}
                  </p>
                </div>

                <ol className="mt-6 space-y-8">
                  {cas.corrige.map((k) => {
                    const q = cas.questions.find((x) => x.numero === k.numero);
                    return (
                      <li key={k.numero}>
                        <h3 className="font-display text-foreground text-lg font-bold">
                          Question {k.numero} ({q?.points} points)
                        </h3>
                        {k.calculs && (
                          <div className="bg-secondary/50 mt-3 rounded-xl p-4">
                            <p className="text-primary text-xs font-semibold tracking-[0.12em] uppercase">
                              Calculs détaillés
                            </p>
                            <ul className="mt-2 space-y-1.5">
                              {k.calculs.map((c) => (
                                <li key={c} className="text-foreground/90 text-sm leading-relaxed">
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <ul className="mt-3 space-y-2">
                          {k.attendus.map((att, i) => (
                            <li key={att.texte}>
                              <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed">
                                <input
                                  type="checkbox"
                                  className="mt-1"
                                  checked={Boolean(acquis[cle(k.numero, i)])}
                                  onChange={(e) =>
                                    setAcquis((a) => ({
                                      ...a,
                                      [cle(k.numero, i)]: e.target.checked,
                                    }))
                                  }
                                />
                                <span className="text-foreground/90">
                                  {att.texte}{" "}
                                  <span className="text-muted-foreground">
                                    ({att.points} pt{att.points > 1 ? "s" : ""})
                                  </span>
                                </span>
                              </label>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ol>
              </>
            )}
          </section>
        </ApercuLimite>
      </main>
      <SiteFooter largeur="max-w-3xl" />
    </div>
  );
}
