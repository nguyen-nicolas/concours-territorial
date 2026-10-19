import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, CheckCircle2, Eye, Pause, Play, RotateCcw, XCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ApercuLimite } from "@/components/acces-limite";
import { comparerDictee, getDictee, type MotCompare } from "@/lib/dicteeData";

export const Route = createFileRoute("/francais/dictee/$dicteeId")({
  head: ({ params }) => {
    const dictee = getDictee(params.dicteeId);
    const title = dictee
      ? `Dictée « ${dictee.title} » | Prépa Territoriale`
      : "Dictée | Prépa Territoriale";
    const description = dictee
      ? `${dictee.intro} Dictée lue à voix haute et corrigée mot à mot pour préparer les concours territoriaux.`
      : "Dictée d'entraînement aux concours de la fonction publique territoriale.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: DicteePage,
});

function DicteePage() {
  const { dicteeId } = Route.useParams();
  const dictee = getDictee(dicteeId);

  const [index, setIndex] = useState(0);
  const [saisies, setSaisies] = useState<string[]>([]);
  const [vitesse, setVitesse] = useState(0.85);
  const [enLecture, setEnLecture] = useState(false);
  const [corrige, setCorrige] = useState(false);
  const [voixDispo, setVoixDispo] = useState(true);
  const zone = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setVoixDispo(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window)
        window.speechSynthesis.cancel();
    };
  }, []);

  if (!dictee) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h1 className="font-display text-3xl text-foreground">Dictée introuvable</h1>
          <p className="mt-3 font-sans text-muted-foreground">
            Cette dictée n'existe pas ou n'est plus disponible.
          </p>
          <Link
            to="/francais"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground"
          >
            <ArrowLeft className="size-4" /> Retour aux épreuves de français
          </Link>
        </main>
      </div>
    );
  }

  const phrase = dictee.phrases[index]!;
  const saisie = saisies[index] ?? "";

  function lire(texte: string) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(texte);
    u.lang = "fr-FR";
    u.rate = vitesse;
    u.onend = () => setEnLecture(false);
    setEnLecture(true);
    window.speechSynthesis.speak(u);
  }

  function stopper() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setEnLecture(false);
  }

  function majSaisie(valeur: string) {
    setSaisies((prev) => {
      const copie = [...prev];
      copie[index] = valeur;
      return copie;
    });
  }

  function suivante() {
    stopper();
    setCorrige(false);
    setIndex((i) => Math.min(i + 1, dictee!.phrases.length - 1));
    zone.current?.focus();
  }

  function precedente() {
    stopper();
    setCorrige(false);
    setIndex((i) => Math.max(i - 1, 0));
  }

  function recommencer() {
    stopper();
    setSaisies([]);
    setIndex(0);
    setCorrige(false);
  }

  const comparaison: MotCompare[] = corrige ? comparerDictee(phrase, saisie) : [];
  const justes = comparaison.filter((m) => m.correct).length;
  const derniere = index === dictee.phrases.length - 1;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/francais"
          className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="size-4" /> Épreuves de français
        </Link>

        <h1 className="mt-6 font-display text-3xl text-foreground sm:text-4xl">{dictee.title}</h1>
        <p className="mt-2 font-sans text-sm text-muted-foreground">
          {dictee.level} · {dictee.phrases.length} phrases · {dictee.duree}
        </p>

        <ApercuLimite message="toutes les dictées audio avec leur correction" hauteur="18rem">
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm font-semibold text-muted-foreground">
                Phrase {index + 1} / {dictee.phrases.length}
              </span>
              <label className="flex items-center gap-2 font-sans text-xs text-muted-foreground">
                Vitesse
                <input
                  type="range"
                  min={0.5}
                  max={1.1}
                  step={0.05}
                  value={vitesse}
                  onChange={(e) => setVitesse(Number(e.target.value))}
                  aria-label="Vitesse de lecture"
                />
              </label>
            </div>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${((index + 1) / dictee.phrases.length) * 100}%` }}
              />
            </div>

            {voixDispo ? (
              <button
                type="button"
                onClick={() => (enLecture ? stopper() : lire(phrase))}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                {enLecture ? <Pause className="size-4" /> : <Play className="size-4" />}
                {enLecture ? "Arrêter la lecture" : "Écouter la phrase"}
              </button>
            ) : (
              <p className="mt-6 rounded-xl bg-secondary/60 p-4 font-sans text-sm text-muted-foreground">
                Votre navigateur ne lit pas les textes à voix haute. Faites-vous dicter la phrase
                par une autre personne, ou affichez-la puis masquez-la avant d'écrire :{" "}
                <span className="font-semibold text-foreground">{phrase}</span>
              </p>
            )}

            <label
              htmlFor="copie"
              className="mt-6 block font-sans text-sm font-semibold text-foreground"
            >
              Votre copie
            </label>
            <textarea
              id="copie"
              ref={zone}
              value={saisie}
              onChange={(e) => majSaisie(e.target.value)}
              rows={3}
              placeholder="Écrivez ici la phrase que vous entendez…"
              className="mt-2 w-full rounded-xl border border-border bg-background p-4 font-sans text-base text-foreground outline-none transition focus:border-primary"
            />

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setCorrige(true)}
                disabled={!saisie.trim()}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-sans text-sm font-semibold text-background transition hover:opacity-90 disabled:opacity-40"
              >
                <Eye className="size-4" /> Corriger cette phrase
              </button>
              {index > 0 && (
                <button
                  type="button"
                  onClick={precedente}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-sans text-sm font-semibold text-foreground transition hover:border-primary"
                >
                  Phrase précédente
                </button>
              )}
              {!derniere && (
                <button
                  type="button"
                  onClick={suivante}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-sans text-sm font-semibold text-foreground transition hover:border-primary"
                >
                  Phrase suivante
                </button>
              )}
            </div>
          </div>

          {corrige && (
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 font-sans text-sm font-semibold text-foreground">
                {justes === comparaison.length ? (
                  <>
                    <CheckCircle2 className="size-5 text-[var(--color-success)]" />
                    Phrase parfaitement écrite : {justes} mots sur {comparaison.length}.
                  </>
                ) : (
                  <>
                    <XCircle className="size-5 text-destructive" />
                    {justes} mots justes sur {comparaison.length} : les mots en rouge sont à revoir.
                  </>
                )}
              </p>

              <p className="mt-4 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                Votre copie, mot à mot
              </p>
              <p className="mt-2 font-sans text-base leading-8">
                {comparaison.map((mot, i) => (
                  <span
                    key={i}
                    className={
                      mot.correct
                        ? "text-foreground"
                        : "rounded bg-destructive/10 px-1 text-destructive line-through decoration-destructive/60"
                    }
                  >
                    {mot.saisi ?? "…"}{" "}
                  </span>
                ))}
              </p>

              <p className="mt-5 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                Le texte attendu
              </p>
              <p className="mt-2 rounded-xl bg-secondary/60 p-4 font-sans text-base text-foreground">
                {phrase}
              </p>

              {derniere && (
                <div className="mt-6 rounded-xl border border-border p-5">
                  <p className="font-sans text-sm font-semibold text-foreground">
                    Les pièges de cette dictée
                  </p>
                  <ul className="mt-3 space-y-2 font-sans text-sm text-muted-foreground">
                    {dictee.pieges.map((piege) => (
                      <li key={piege}>• {piege}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {!derniere ? (
                  <button
                    type="button"
                    onClick={suivante}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Phrase suivante
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={recommencer}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    <RotateCcw className="size-4" /> Refaire cette dictée
                  </button>
                )}
                <Link
                  to="/francais"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 font-sans text-sm font-semibold text-foreground transition hover:border-primary"
                >
                  Autres entraînements
                </Link>
              </div>
            </div>
          )}
        </ApercuLimite>
      </main>
    </div>
  );
}
