import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, Clock, Flag, XCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VerrouContenu } from "@/components/acces-limite";
import { useAcces } from "@/hooks/useAcces";
import { useSpecialiteAM } from "@/hooks/useSpecialiteAM";
import { specialitesAM, type SpecialiteId } from "@/lib/specialitesAgentMaitrise";
import {
  appreciation,
  composerExamen,
  MODES_EXAMEN,
  noterExamen,
  type ModeExamen,
  type QuestionExamen,
  type ResultatExamen,
} from "@/lib/examenBlancAgentMaitrise";

const title = "Examen blanc chronométré d'agent de maîtrise territorial | Prépa Territoriale";
const description =
  "Passez un examen blanc d'agent de maîtrise dans les conditions du concours : questions de votre spécialité, minuteur de 2 heures et note sur 20.";

export const Route = createFileRoute("/examen-blanc-agent-maitrise")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ExamenBlancPage,
});

const CLE_HISTORIQUE = "prepa.examens.agent-maitrise";

interface Passage {
  date: string;
  specialite: SpecialiteId;
  mode: ModeExamen;
  note: number;
  bonnes: number;
  total: number;
}

function lireHistorique(): Passage[] {
  try {
    const brut = window.localStorage.getItem(CLE_HISTORIQUE);
    const liste = brut ? (JSON.parse(brut) as Passage[]) : [];
    return Array.isArray(liste) ? liste : [];
  } catch {
    return [];
  }
}

function ecrireHistorique(passage: Passage) {
  try {
    const liste = [passage, ...lireHistorique()].slice(0, 10);
    window.localStorage.setItem(CLE_HISTORIQUE, JSON.stringify(liste));
  } catch {
    /* stockage indisponible */
  }
}

function formatChrono(secondes: number): string {
  const h = Math.floor(secondes / 3600);
  const m = Math.floor((secondes % 3600) / 60);
  const s = secondes % 60;
  const deux = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${deux(m)}:${deux(s)}` : `${deux(m)}:${deux(s)}`;
}

type Phase = "accueil" | "examen" | "resultats";

function ExamenBlancPage() {
  const acces = useAcces();
  const { specialite: memorisee, choisir } = useSpecialiteAM();
  const [specialiteId, setSpecialiteId] = useState<SpecialiteId>("btp-vrd");
  const [mode, setMode] = useState<ModeExamen>("complet");
  const [phase, setPhase] = useState<Phase>("accueil");
  const [questions, setQuestions] = useState<QuestionExamen[]>([]);
  const [reponses, setReponses] = useState<(number | null)[]>([]);
  const [aRevoir, setARevoir] = useState<boolean[]>([]);
  const [courant, setCourant] = useState(0);
  const [reste, setReste] = useState(0);
  const [resultat, setResultat] = useState<ResultatExamen | null>(null);
  const [dureeUtilisee, setDureeUtilisee] = useState(0);
  const [erreursSeules, setErreursSeules] = useState(false);
  const [historique, setHistorique] = useState<Passage[]>([]);
  const finRef = useRef(0);
  const debutRef = useRef(0);

  useEffect(() => {
    setHistorique(lireHistorique());
  }, []);
  useEffect(() => {
    if (memorisee) setSpecialiteId(memorisee);
  }, [memorisee]);

  const terminer = useCallback(() => {
    const note = noterExamen(questions, reponses);
    const duree = Math.round((Date.now() - debutRef.current) / 1000);
    setResultat(note);
    setDureeUtilisee(duree);
    setPhase("resultats");
    ecrireHistorique({
      date: new Date().toISOString(),
      specialite: specialiteId,
      mode,
      note: note.note,
      bonnes: note.bonnes,
      total: note.total,
    });
    setHistorique(lireHistorique());
    window.scrollTo({ top: 0 });
  }, [questions, reponses, specialiteId, mode]);

  // Minuteur : calculé à partir de l'heure de fin pour ne pas dériver.
  useEffect(() => {
    if (phase !== "examen") return;
    const id = window.setInterval(() => {
      const restant = Math.max(0, Math.ceil((finRef.current - Date.now()) / 1000));
      setReste(restant);
      if (restant === 0) terminer();
    }, 1000);
    return () => window.clearInterval(id);
  }, [phase, terminer]);

  // Avertit avant de quitter la page en cours d'examen.
  useEffect(() => {
    if (phase !== "examen") return;
    const avertir = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", avertir);
    return () => window.removeEventListener("beforeunload", avertir);
  }, [phase]);

  const commencer = () => {
    const serie = composerExamen(specialiteId, mode);
    const minutes = MODES_EXAMEN[mode].minutes;
    setQuestions(serie);
    setReponses(serie.map(() => null));
    setARevoir(serie.map(() => false));
    setCourant(0);
    debutRef.current = Date.now();
    finRef.current = Date.now() + minutes * 60 * 1000;
    setReste(minutes * 60);
    setErreursSeules(false);
    setPhase("examen");
    window.scrollTo({ top: 0 });
  };

  const confirmerFin = () => {
    const sansReponse = reponses.filter((r) => r === null).length;
    const message =
      sansReponse > 0
        ? `Il reste ${sansReponse} question(s) sans réponse. Terminer l'examen maintenant ?`
        : "Terminer l'examen et voir votre note ?";
    if (window.confirm(message)) terminer();
  };

  const specialite = specialitesAM.find((s) => s.id === specialiteId);
  const modeInfos = MODES_EXAMEN[mode];
  const dernierePeriode = reste <= 600;

  const corrections = useMemo(
    () => questions.map((q, i) => ({ q, reponse: reponses[i] ?? null, i })),
    [questions, reponses],
  );

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6">
        {phase === "accueil" && (
          <>
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Agent de maîtrise territorial
            </p>
            <h1 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
              Examen blanc chronométré
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed">
              Un questionnaire dans les conditions du concours : un minuteur, aucune aide, et une
              note sur 20 à la fin. Les questions proviennent de votre spécialité (70 %) et du tronc
              commun (30 %).
            </p>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">
              Cet examen est un QCM d'entraînement : le vrai questionnaire du concours demande des
              réponses rédigées et notées par un jury. Utilisez-le pour repérer vos points faibles.
            </p>

            <section className="bg-card mt-8 rounded-2xl border p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold">1. Votre spécialité</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {specialitesAM.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-pressed={s.id === specialiteId}
                    onClick={() => {
                      setSpecialiteId(s.id);
                      choisir(s.id);
                    }}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      s.id === specialiteId
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {s.titre}
                  </button>
                ))}
              </div>

              <h2 className="font-display mt-8 text-xl font-bold">2. La durée</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(Object.keys(MODES_EXAMEN) as ModeExamen[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={m === mode}
                    onClick={() => setMode(m)}
                    className={`rounded-2xl border p-4 text-left transition-colors ${
                      m === mode
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <span className="font-display block text-base font-bold">
                      {MODES_EXAMEN[m].libelle}
                    </span>
                    <span className="text-muted-foreground mt-1 block text-sm">
                      {MODES_EXAMEN[m].description}
                    </span>
                  </button>
                ))}
              </div>

              {acces === "valide" ? (
                <button
                  type="button"
                  onClick={commencer}
                  className="bg-primary text-primary-foreground mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                >
                  <Clock className="size-4" aria-hidden="true" />
                  Commencer l'examen : {specialite?.titre}
                </button>
              ) : (
                <VerrouContenu statut={acces} message="l'examen blanc chronométré" />
              )}
            </section>

            {historique.length > 0 && (
              <section className="mt-10">
                <h2 className="font-display text-xl font-bold">Vos derniers passages</h2>
                <ul className="mt-4 divide-y rounded-2xl border">
                  {historique.slice(0, 5).map((p) => (
                    <li
                      key={p.date}
                      className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm"
                    >
                      <span className="text-muted-foreground">
                        {new Date(p.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                        })}{" "}
                        · {specialitesAM.find((s) => s.id === p.specialite)?.titre} ·{" "}
                        {MODES_EXAMEN[p.mode].libelle}
                      </span>
                      <span className="text-foreground font-semibold">
                        {p.note} / 20 ({p.bonnes} / {p.total})
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-2 text-xs">
                  Ces résultats sont mémorisés sur cet appareil uniquement.
                </p>
              </section>
            )}
          </>
        )}

        {phase === "examen" && questions[courant] && (
          <>
            <div className="bg-background/95 sticky top-0 z-10 -mx-4 border-b px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold">
                  Question {courant + 1} / {questions.length}
                </p>
                <p
                  className={`inline-flex items-center gap-2 text-lg font-bold tabular-nums ${
                    dernierePeriode ? "text-destructive" : "text-foreground"
                  }`}
                  role="timer"
                  aria-label="Temps restant"
                >
                  <Clock className="size-5" aria-hidden="true" />
                  {formatChrono(reste)}
                </p>
                <button
                  type="button"
                  onClick={confirmerFin}
                  className="border-border hover:border-primary rounded-xl border px-4 py-2 text-sm font-semibold transition-colors"
                >
                  Terminer l'examen
                </button>
              </div>
              {dernierePeriode && (
                <p className="text-destructive mt-2 flex items-center gap-2 text-xs font-medium">
                  <AlertTriangle className="size-3.5" aria-hidden="true" />
                  Il reste moins de 10 minutes.
                </p>
              )}
            </div>

            <h2 className="font-display mt-8 text-xl leading-snug font-bold sm:text-2xl">
              {questions[courant].question}
            </h2>
            <div className="mt-6 space-y-3" role="radiogroup" aria-label="Propositions de réponse">
              {questions[courant].options.map((option, i) => {
                const choisie = reponses[courant] === i;
                return (
                  <button
                    key={`${courant}-${i}`}
                    type="button"
                    role="radio"
                    aria-checked={choisie}
                    onClick={() =>
                      setReponses((r) =>
                        r.map((v, k) => (k === courant ? (choisie ? null : i) : v)),
                      )
                    }
                    className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left text-base transition-colors ${
                      choisie ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                        choisie ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-3">
                <button
                  type="button"
                  disabled={courant === 0}
                  onClick={() => setCourant((c) => Math.max(0, c - 1))}
                  className="border-border hover:border-primary rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-40"
                >
                  Précédente
                </button>
                <button
                  type="button"
                  disabled={courant === questions.length - 1}
                  onClick={() => setCourant((c) => Math.min(questions.length - 1, c + 1))}
                  className="bg-primary text-primary-foreground rounded-xl px-5 py-2.5 text-sm font-semibold transition hover:opacity-90 disabled:opacity-40"
                >
                  Suivante
                </button>
              </div>
              <button
                type="button"
                aria-pressed={aRevoir[courant]}
                onClick={() => setARevoir((v) => v.map((x, k) => (k === courant ? !x : x)))}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                  aRevoir[courant]
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary"
                }`}
              >
                <Flag className="size-4" aria-hidden="true" />
                {aRevoir[courant] ? "À revoir (marquée)" : "Marquer à revoir"}
              </button>
            </div>

            <nav aria-label="Navigation entre les questions" className="mt-10">
              <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-[0.15em] uppercase">
                {reponses.filter((r) => r !== null).length} / {questions.length} questions répondues
              </p>
              <div className="flex flex-wrap gap-2">
                {questions.map((_, i) => {
                  const repondue = reponses[i] !== null;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCourant(i)}
                      aria-label={`Question ${i + 1}${repondue ? ", répondue" : ""}${aRevoir[i] ? ", à revoir" : ""}`}
                      aria-current={i === courant}
                      className={`relative size-9 rounded-lg border text-sm font-semibold transition-colors ${
                        i === courant
                          ? "border-primary bg-primary text-primary-foreground"
                          : repondue
                            ? "border-primary/40 bg-primary/10 text-primary"
                            : "border-border hover:border-primary"
                      }`}
                    >
                      {i + 1}
                      {aRevoir[i] && (
                        <span
                          aria-hidden="true"
                          className="bg-destructive absolute -top-1 -right-1 size-2.5 rounded-full"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>
          </>
        )}

        {phase === "resultats" && resultat && (
          <>
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Résultat de l'examen blanc
            </p>
            <div className="mt-4 flex flex-wrap items-end gap-x-8 gap-y-3">
              <p className="font-display text-primary text-6xl leading-none font-bold">
                {resultat.note}
                <span className="text-muted-foreground text-3xl"> / 20</span>
              </p>
              <p className="text-muted-foreground text-sm">
                {resultat.bonnes} bonnes réponses sur {resultat.total}
                {resultat.sansReponse > 0 ? ` · ${resultat.sansReponse} sans réponse` : ""} · durée
                : {formatChrono(dureeUtilisee)}
              </p>
            </div>
            <p className="bg-secondary/60 mt-5 rounded-xl px-4 py-3 text-sm leading-relaxed">
              {appreciation(resultat.note)}
            </p>

            <section className="mt-10">
              <h2 className="font-display text-xl font-bold">Résultats par thème</h2>
              <ul className="mt-4 space-y-3">
                {resultat.parTheme.map((t) => {
                  const pct = Math.round((t.bonnes / t.total) * 100);
                  return (
                    <li key={t.titre}>
                      <div className="flex justify-between gap-3 text-sm">
                        <span className="text-foreground">{t.titre}</span>
                        <span className="text-muted-foreground shrink-0">
                          {t.bonnes} / {t.total}
                        </span>
                      </div>
                      <div
                        className="bg-secondary mt-1 h-2 overflow-hidden rounded-full"
                        role="img"
                        aria-label={`${pct} % de bonnes réponses`}
                      >
                        <div
                          className="bg-primary h-full rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setPhase("accueil")}
                className="bg-primary text-primary-foreground rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90"
              >
                Recommencer un examen
              </button>
              <Link
                to="/cours-agent-maitrise"
                className="border-border hover:border-primary rounded-xl border px-5 py-3 text-sm font-semibold transition-colors"
              >
                Revoir les cours
              </Link>
            </div>

            <section className="mt-12">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-xl font-bold">Correction détaillée</h2>
                <label className="text-muted-foreground flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={erreursSeules}
                    onChange={(e) => setErreursSeules(e.target.checked)}
                  />
                  Voir uniquement mes erreurs et mes oublis
                </label>
              </div>
              <ol className="mt-6 space-y-6">
                {corrections
                  .filter(({ q, reponse }) => !erreursSeules || reponse !== q.answerIndex)
                  .map(({ q, reponse, i }) => {
                    const juste = reponse === q.answerIndex;
                    return (
                      <li key={i} className="bg-card rounded-2xl border p-5">
                        <p className="flex items-start gap-2 text-sm font-semibold">
                          {juste ? (
                            <CheckCircle2
                              className="text-success mt-0.5 size-4 shrink-0"
                              aria-hidden="true"
                            />
                          ) : (
                            <XCircle
                              className="text-destructive mt-0.5 size-4 shrink-0"
                              aria-hidden="true"
                            />
                          )}
                          <span>
                            {i + 1}. {q.question}
                          </span>
                        </p>
                        <p className="text-muted-foreground mt-3 text-sm">
                          Bonne réponse :{" "}
                          <span className="text-foreground font-semibold">
                            {q.options[q.answerIndex]}
                          </span>
                        </p>
                        {!juste && (
                          <p className="text-muted-foreground mt-1 text-sm">
                            Votre réponse :{" "}
                            <span className="text-foreground">
                              {reponse === null ? "aucune" : q.options[reponse]}
                            </span>
                            {reponse !== null && q.optionNotes[reponse]
                              ? ` — ${q.optionNotes[reponse]}`
                              : ""}
                          </p>
                        )}
                        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                          {q.explanation}
                        </p>
                      </li>
                    );
                  })}
              </ol>
            </section>
          </>
        )}
      </main>
      <SiteFooter largeur="max-w-4xl" />
    </div>
  );
}
