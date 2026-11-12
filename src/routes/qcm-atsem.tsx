import { useCallback, useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CheckCircle2, Clock, Flag, XCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VerrouContenu } from "@/components/acces-limite";
import { useAcces } from "@/hooks/useAcces";
import { THEMES_QCM, type ThemeQcmId } from "@/lib/qcmAtsem";
import {
  appreciationQcm,
  composerSerie,
  EPREUVE,
  noterQuestion,
  TAILLE_ENTRAINEMENT,
  totalPoints,
  type ModeQcm,
  type QuestionSession,
} from "@/lib/qcmAtsemSession";

const title = "QCM d'entraînement au concours d'ATSEM | Prépa Territoriale";
const description =
  "Entraînez-vous au QCM du concours d'ATSEM : questions à plusieurs bonnes réponses, barème officiel, épreuve blanche de 45 minutes et entraînement par thème.";

export const Route = createFileRoute("/qcm-atsem")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: QcmAtsemPage,
});

const CLE_HISTORIQUE = "prepa.qcm-atsem";

interface Passage {
  date: string;
  mode: ModeQcm;
  points: number;
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

function ecrireHistorique(p: Passage) {
  try {
    window.localStorage.setItem(
      CLE_HISTORIQUE,
      JSON.stringify([p, ...lireHistorique()].slice(0, 10)),
    );
  } catch {
    /* stockage indisponible */
  }
}

function chrono(secondes: number): string {
  const m = Math.floor(secondes / 60);
  const s = secondes % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

type Phase = "accueil" | "en-cours" | "resultats";

function QcmAtsemPage() {
  const acces = useAcces();
  const [mode, setMode] = useState<ModeQcm>("epreuve");
  const [theme, setTheme] = useState<ThemeQcmId | "tous">("tous");
  const [phase, setPhase] = useState<Phase>("accueil");
  const [serie, setSerie] = useState<QuestionSession[]>([]);
  const [reponses, setReponses] = useState<number[][]>([]);
  const [valides, setValides] = useState<boolean[]>([]);
  const [aRevoir, setARevoir] = useState<boolean[]>([]);
  const [courant, setCourant] = useState(0);
  const [reste, setReste] = useState(0);
  const [duree, setDuree] = useState(0);
  const [erreursSeules, setErreursSeules] = useState(false);
  const [historique, setHistorique] = useState<Passage[]>([]);
  const finRef = useRef(0);
  const debutRef = useRef(0);

  useEffect(() => setHistorique(lireHistorique()), []);

  const terminer = useCallback(() => {
    const points = totalPoints(serie, reponses);
    setDuree(Math.round((Date.now() - debutRef.current) / 1000));
    setPhase("resultats");
    ecrireHistorique({ date: new Date().toISOString(), mode, points, total: serie.length });
    setHistorique(lireHistorique());
    window.scrollTo({ top: 0 });
  }, [serie, reponses, mode]);

  useEffect(() => {
    if (phase !== "en-cours" || mode !== "epreuve") return;
    const id = window.setInterval(() => {
      const restant = Math.max(0, Math.ceil((finRef.current - Date.now()) / 1000));
      setReste(restant);
      if (restant === 0) terminer();
    }, 1000);
    return () => window.clearInterval(id);
  }, [phase, mode, terminer]);

  useEffect(() => {
    if (phase !== "en-cours") return;
    const avertir = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", avertir);
    return () => window.removeEventListener("beforeunload", avertir);
  }, [phase]);

  const commencer = () => {
    const s = composerSerie(mode, theme);
    setSerie(s);
    setReponses(s.map(() => []));
    setValides(s.map(() => false));
    setARevoir(s.map(() => false));
    setCourant(0);
    setErreursSeules(false);
    debutRef.current = Date.now();
    finRef.current = Date.now() + EPREUVE.minutes * 60 * 1000;
    setReste(EPREUVE.minutes * 60);
    setPhase("en-cours");
    window.scrollTo({ top: 0 });
  };

  const basculer = (i: number) =>
    setReponses((r) =>
      r.map((v, k) => (k === courant ? (v.includes(i) ? v.filter((x) => x !== i) : [...v, i]) : v)),
    );

  const confirmerFin = () => {
    const vides = reponses.filter((r) => r.length === 0).length;
    const message =
      vides > 0
        ? `${vides} question(s) sans réponse. Terminer l'épreuve maintenant ?`
        : "Terminer l'épreuve et voir votre note ?";
    if (window.confirm(message)) terminer();
  };

  const q = serie[courant];
  const points = phase === "resultats" ? totalPoints(serie, reponses) : 0;
  const immediat = mode === "entrainement";
  const corrige = immediat && valides[courant];

  const carte = (
    <div className="bg-card mt-8 rounded-2xl border p-6 shadow-sm">
      <h2 className="font-display text-xl font-bold">1. Le mode</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {(["epreuve", "entrainement"] as ModeQcm[]).map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={m === mode}
            onClick={() => setMode(m)}
            className={`rounded-2xl border p-4 text-left transition-colors ${m === mode ? "border-primary bg-primary/5" : "border-border hover:border-primary"}`}
          >
            <span className="font-display block text-base font-bold">
              {m === "epreuve" ? "Épreuve blanche" : "Entraînement par thème"}
            </span>
            <span className="text-muted-foreground mt-1 block text-sm">
              {m === "epreuve"
                ? `${EPREUVE.questions} questions en ${EPREUVE.minutes} minutes, correction à la fin, comme le vrai QCM.`
                : `${TAILLE_ENTRAINEMENT} questions sans limite de temps, correction après chaque question.`}
            </span>
          </button>
        ))}
      </div>
      {mode === "entrainement" && (
        <>
          <h2 className="font-display mt-8 text-xl font-bold">2. Le thème</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[{ id: "tous" as const, titre: "Tous les thèmes" }, ...THEMES_QCM].map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={t.id === theme}
                onClick={() => setTheme(t.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${t.id === theme ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary"}`}
              >
                {t.titre}
              </button>
            ))}
          </div>
        </>
      )}
      {acces === "valide" ? (
        <button
          type="button"
          onClick={commencer}
          className="bg-primary text-primary-foreground mt-8 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition hover:opacity-90"
        >
          {mode === "epreuve" && <Clock className="size-4" aria-hidden="true" />}
          {mode === "epreuve" ? "Commencer l'épreuve blanche" : "Commencer l'entraînement"}
        </button>
      ) : (
        <VerrouContenu statut={acces} message="le QCM d'entraînement à l'ATSEM" />
      )}
    </div>
  );

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-12 sm:px-6">
        {phase === "accueil" && (
          <>
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Concours d'ATSEM
            </p>
            <h1 className="font-display mt-3 text-3xl font-bold sm:text-4xl">QCM d'entraînement</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed">
              Au concours externe, l'épreuve d'admissibilité est un QCM de 20 questions de mise en
              situation, avec <strong>une ou plusieurs bonnes réponses</strong>, en 45 minutes.
              Cochez toutes les bonnes réponses.
            </p>
            <div className="bg-secondary/60 mt-5 max-w-2xl rounded-xl px-4 py-3 text-sm leading-relaxed">
              <p className="font-semibold">Barème de la session 2026, appliqué ici :</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>toutes les bonnes réponses et aucune fausse : 1 point ;</li>
                <li>au moins la moitié des bonnes réponses et aucune fausse : 0,5 point ;</li>
                <li>moins de la moitié, ou une réponse fausse au moins, ou aucune réponse : 0.</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Le jury peut modifier ce barème : lisez toujours celui de votre sujet.
              </p>
            </div>
            {carte}
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
                        · {p.mode === "epreuve" ? "Épreuve blanche" : "Entraînement"}
                      </span>
                      <span className="font-semibold">
                        {p.points} / {p.total}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-2 text-xs">
                  Résultats mémorisés sur cet appareil uniquement.
                </p>
              </section>
            )}
          </>
        )}

        {phase === "en-cours" && q && (
          <>
            <div className="bg-background/95 sticky top-0 z-10 -mx-4 border-b px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold">
                  Question {courant + 1} / {serie.length}
                </p>
                {mode === "epreuve" && (
                  <p
                    className={`inline-flex items-center gap-2 text-lg font-bold tabular-nums ${reste <= 300 ? "text-destructive" : ""}`}
                    role="timer"
                    aria-label="Temps restant"
                  >
                    <Clock className="size-5" aria-hidden="true" />
                    {chrono(reste)}
                  </p>
                )}
                <button
                  type="button"
                  onClick={confirmerFin}
                  className="border-border hover:border-primary rounded-xl border px-4 py-2 text-sm font-semibold transition-colors"
                >
                  {immediat ? "Arrêter" : "Terminer l'épreuve"}
                </button>
              </div>
              {mode === "epreuve" && reste <= 300 && (
                <p className="text-destructive mt-2 flex items-center gap-2 text-xs font-medium">
                  <AlertTriangle className="size-3.5" aria-hidden="true" />
                  Il reste moins de 5 minutes.
                </p>
              )}
            </div>

            <h2 className="font-display mt-8 text-xl leading-snug font-bold sm:text-2xl">
              {q.question}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Cochez toutes les bonnes réponses : une ou plusieurs.
            </p>
            <div className="mt-5 space-y-3" role="group" aria-label="Propositions de réponse">
              {q.options.map((option, i) => {
                const coche = reponses[courant]?.includes(i) ?? false;
                const bonne = q.bonnes.includes(i);
                const etat = corrige
                  ? bonne
                    ? "bonne"
                    : coche
                      ? "fausse"
                      : "neutre"
                  : coche
                    ? "coche"
                    : "neutre";
                return (
                  <label
                    key={`${courant}-${i}`}
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 text-base transition-colors ${
                      etat === "bonne"
                        ? "border-success bg-success/10"
                        : etat === "fausse"
                          ? "border-destructive bg-destructive/5"
                          : etat === "coche"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary"
                    } ${corrige ? "cursor-default" : ""}`}
                  >
                    <input
                      type="checkbox"
                      className="mt-1.5 size-4"
                      checked={coche}
                      disabled={corrige}
                      onChange={() => basculer(i)}
                    />
                    <span>
                      <span className="text-primary mr-2 font-semibold">
                        {String.fromCharCode(65 + i)}
                      </span>
                      {option}
                    </span>
                  </label>
                );
              })}
            </div>

            {corrige && (
              <div className="bg-card mt-6 rounded-2xl border p-5">
                <p className="text-sm font-semibold">
                  {noterQuestion(q.bonnes, reponses[courant] ?? []) === 1
                    ? "Question réussie : 1 point"
                    : noterQuestion(q.bonnes, reponses[courant] ?? []) === 0.5
                      ? "Réponse partielle : 0,5 point"
                      : "0 point"}
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  Bonne(s) réponse(s) :{" "}
                  {q.bonnes.map((b) => String.fromCharCode(65 + b)).join(", ")}
                </p>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {q.explication}
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-3">
                {!immediat && (
                  <button
                    type="button"
                    disabled={courant === 0}
                    onClick={() => setCourant((c) => Math.max(0, c - 1))}
                    className="border-border hover:border-primary rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-40"
                  >
                    Précédente
                  </button>
                )}
                {immediat && !corrige ? (
                  <button
                    type="button"
                    onClick={() => setValides((v) => v.map((x, k) => (k === courant ? true : x)))}
                    className="bg-primary text-primary-foreground rounded-xl px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
                  >
                    Valider ma réponse
                  </button>
                ) : courant === serie.length - 1 ? (
                  immediat ? (
                    <button
                      type="button"
                      onClick={terminer}
                      className="bg-primary text-primary-foreground rounded-xl px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
                    >
                      Voir mon résultat
                    </button>
                  ) : null
                ) : (
                  <button
                    type="button"
                    onClick={() => setCourant((c) => Math.min(serie.length - 1, c + 1))}
                    className="bg-primary text-primary-foreground rounded-xl px-5 py-2.5 text-sm font-semibold transition hover:opacity-90"
                  >
                    Suivante
                  </button>
                )}
              </div>
              {!immediat && (
                <button
                  type="button"
                  aria-pressed={aRevoir[courant]}
                  onClick={() => setARevoir((v) => v.map((x, k) => (k === courant ? !x : x)))}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${aRevoir[courant] ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary"}`}
                >
                  <Flag className="size-4" aria-hidden="true" />
                  {aRevoir[courant] ? "À revoir (marquée)" : "Marquer à revoir"}
                </button>
              )}
            </div>

            {!immediat && (
              <nav aria-label="Navigation entre les questions" className="mt-10">
                <div className="flex flex-wrap gap-2">
                  {serie.map((_, i) => {
                    const repondue = (reponses[i]?.length ?? 0) > 0;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setCourant(i)}
                        aria-label={`Question ${i + 1}${repondue ? ", répondue" : ""}${aRevoir[i] ? ", à revoir" : ""}`}
                        aria-current={i === courant}
                        className={`relative size-9 rounded-lg border text-sm font-semibold transition-colors ${i === courant ? "border-primary bg-primary text-primary-foreground" : repondue ? "border-primary/40 bg-primary/10 text-primary" : "border-border hover:border-primary"}`}
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
            )}
          </>
        )}

        {phase === "resultats" && (
          <>
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Résultat
            </p>
            <div className="mt-4 flex flex-wrap items-end gap-x-8 gap-y-3">
              <p className="font-display text-primary text-6xl leading-none font-bold">
                {points}
                <span className="text-muted-foreground text-3xl"> / {serie.length}</span>
              </p>
              <p className="text-muted-foreground text-sm">durée : {chrono(duree)}</p>
            </div>
            {mode === "epreuve" && (
              <p className="bg-secondary/60 mt-5 rounded-xl px-4 py-3 text-sm leading-relaxed">
                {appreciationQcm(points)}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setPhase("accueil")}
                className="bg-primary text-primary-foreground rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90"
              >
                Recommencer
              </button>
              <Link
                to="/atsem"
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
                  Uniquement les questions non réussies
                </label>
              </div>
              <ol className="mt-6 space-y-6">
                {serie
                  .map((qs, i) => ({ qs, i, p: noterQuestion(qs.bonnes, reponses[i] ?? []) }))
                  .filter(({ p }) => !erreursSeules || p < 1)
                  .map(({ qs, i, p }) => (
                    <li key={i} className="bg-card rounded-2xl border p-5">
                      <p className="flex items-start gap-2 text-sm font-semibold">
                        {p === 1 ? (
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
                          {i + 1}. {qs.question}{" "}
                          <span className="text-muted-foreground font-normal">
                            ({p} pt{p > 1 ? "s" : ""})
                          </span>
                        </span>
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {qs.options.map((o, k) => {
                          const bonne = qs.bonnes.includes(k);
                          const coche = reponses[i]?.includes(k) ?? false;
                          return (
                            <li
                              key={k}
                              className={`text-sm ${bonne ? "text-success font-semibold" : coche ? "text-destructive" : "text-muted-foreground"}`}
                            >
                              {bonne ? "✓" : coche ? "✗" : "·"} {String.fromCharCode(65 + k)}. {o}
                              {coche ? " (votre réponse)" : ""}
                            </li>
                          );
                        })}
                      </ul>
                      <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                        {qs.explication}
                      </p>
                    </li>
                  ))}
              </ol>
            </section>
          </>
        )}
      </main>
      <SiteFooter largeur="max-w-4xl" />
    </div>
  );
}
