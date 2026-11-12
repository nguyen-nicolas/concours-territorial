import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Download,
  Lock,
  Clock,
  ListChecks,
  Loader2,
  Target,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getConcours, type Concours } from "@/lib/concours";
import { quizThemes } from "@/lib/quizData";
import { fichesMemo } from "@/lib/memoData";
import { useConcoursChoisi } from "@/hooks/useConcoursChoisi";
import { useAcces } from "@/hooks/useAcces";
import { VideoYoutube } from "@/components/video-youtube";
import { CompteARebours } from "@/components/compte-a-rebours";
import { useSpecialiteAM } from "@/hooks/useSpecialiteAM";
import { getSpecialite, specialitesAM } from "@/lib/specialitesAgentMaitrise";

export const Route = createFileRoute("/concours/$concoursId")({
  head: ({ params }) => {
    const concours = getConcours(params.concoursId);
    const title = concours
      ? `${concours.title} — préparation | Prépa Territoriale`
      : "Concours introuvable — Prépa Territoriale";
    const description = concours
      ? `Épreuves, thèmes à réviser et quiz d'entraînement pour le concours de ${concours.title.toLowerCase()}.`
      : "Ce concours n'est pas disponible.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ConcoursDetail,
});

function ConcoursDetail() {
  const { concoursId } = Route.useParams();
  const concours = getConcours(concoursId);

  if (!concours) {
    return (
      <div className="bg-background min-h-screen">
        <SiteHeader />
        <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
          <h1 className="font-display text-3xl font-bold">Concours introuvable</h1>
          <p className="text-muted-foreground mt-3">
            Ce concours n'existe pas encore dans le catalogue.
          </p>
          <Link
            to="/concours"
            className="bg-primary text-primary-foreground mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Voir tous les concours
          </Link>
        </div>
      </div>
    );
  }

  const themes = concours.themeIds
    .map((id) => quizThemes.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const fiches = fichesMemo.filter((f) => f.concoursIds.includes(concours.id));

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <Link
            to="/concours"
            className="inline-flex items-center gap-2 text-sm opacity-80 transition-opacity hover:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Tous les concours
          </Link>
          <p className="mt-6 text-xs font-semibold tracking-wide uppercase opacity-80">
            Catégorie {concours.categorie} · Filière {concours.filiere}
          </p>
          <h1 className="font-display mt-3 text-3xl font-bold text-balance sm:text-4xl">
            {concours.title}
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed opacity-90">{concours.description}</p>
          <ChoixConcours concours={concours} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {concours.id === "agent-maitrise" && <ChoixSpecialite />}
            <CompteARebours concours={concours} />
            {concours.video && (
              <div className="mb-12">
                <VideoYoutube
                  id={concours.video.id}
                  titre={concours.video.titre}
                  details={concours.video.details}
                />
              </div>
            )}
            <h2 className="font-display flex items-center gap-2 text-2xl font-bold">
              <ListChecks className="text-primary h-5 w-5" />
              Vos entraînements
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Les thèmes les plus utiles pour ce concours, corrigés question par question.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {themes.map((theme) => (
                <Link
                  key={theme.id}
                  to="/quiz/$themeId"
                  params={{ themeId: theme.id }}
                  search={{ concours: concours.id }}
                  className="group bg-card hover:border-primary/40 flex flex-col rounded-2xl border p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="font-display text-base leading-snug font-bold">{theme.title}</h3>
                  <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                    {theme.description}
                  </p>
                  <span className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-semibold">
                    {theme.questions.length} questions en banque
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>

            {concours.aVenir.length > 0 && (
              <div className="border-border mt-8 rounded-2xl border border-dashed p-5">
                <h3 className="font-display flex items-center gap-2 text-base font-bold">
                  <Clock className="text-muted-foreground h-4 w-4" />
                  Bientôt disponible pour ce concours
                </h3>
                <ul className="text-muted-foreground mt-3 flex flex-wrap gap-2 text-sm">
                  {concours.aVenir.map((item) => (
                    <li
                      key={item}
                      className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside>
            <div className="bg-card rounded-2xl border p-6 shadow-sm">
              <h2 className="font-display flex items-center gap-2 text-lg font-bold">
                <Target className="text-primary h-5 w-5" />
                Les épreuves
              </h2>
              <ol className="mt-4 space-y-4">
                {concours.epreuves.map((epreuve, i) => (
                  <li key={epreuve} className="flex gap-3">
                    <span className="bg-secondary text-secondary-foreground mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{epreuve}</span>
                  </li>
                ))}
              </ol>
              <p className="text-muted-foreground mt-6 text-xs leading-relaxed">
                Informations indicatives : vérifiez toujours l'arrêté d'ouverture du centre de
                gestion organisateur.
              </p>
            </div>

            <div className="bg-card mt-6 rounded-2xl border p-6 shadow-sm">
              <h2 className="font-display flex items-center gap-2 text-lg font-bold">
                <BookOpen className="text-primary h-5 w-5" />
                Pour réviser
              </h2>
              {concours.coursEnLigne && (
                <Link
                  to="/cours-agent-maitrise"
                  className="border-primary/30 bg-primary/5 hover:border-primary mt-3 block rounded-xl border p-3 transition-colors"
                >
                  <span className="text-foreground flex items-center justify-between gap-2 text-sm font-semibold">
                    {concours.coursEnLigne.titre}
                    <ArrowRight className="text-primary h-4 w-4 shrink-0" aria-hidden="true" />
                  </span>
                  <span className="text-muted-foreground mt-0.5 block text-xs">
                    {concours.coursEnLigne.details}
                  </span>
                </Link>
              )}
              {concours.telechargements && concours.telechargements.length > 0 && (
                <Telechargements documents={concours.telechargements} />
              )}
              {fiches.length > 0 && (
                <>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {fiches.length} fiche{fiches.length > 1 ? "s" : ""} mémo pour ce concours :
                  </p>
                  <ul className="mt-3 space-y-1">
                    {fiches.slice(0, 5).map((fiche) => (
                      <li key={fiche.id}>
                        <Link
                          to="/memo/$ficheId"
                          params={{ ficheId: fiche.id }}
                          className="text-foreground hover:text-primary text-sm underline-offset-4 hover:underline"
                        >
                          {fiche.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {fiches.length > 5 && (
                    <Link
                      to="/memo"
                      search={{ concours: concours.id }}
                      className="text-primary mt-3 inline-flex items-center gap-1 text-sm font-semibold"
                    >
                      Voir les {fiches.length} fiches
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </>
              )}
              <div className="border-border mt-4 flex flex-col gap-2 border-t pt-4 text-sm">
                <Link
                  to="/epreuves-blanches"
                  className="text-primary inline-flex items-center gap-1 font-semibold"
                >
                  Passer une épreuve blanche
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/methode"
                  className="text-primary inline-flex items-center gap-1 font-semibold"
                >
                  Méthodes des épreuves écrites
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter largeur="max-w-5xl" />
    </div>
  );
}

/** Permet à l'utilisateur connecté d'enregistrer ce concours comme celui qu'il prépare. */
function ChoixConcours({ concours }: { concours: Concours }) {
  const { connecte, chargement, concoursId, choisir } = useConcoursChoisi();
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState(false);

  if (chargement) return null;

  if (!connecte) {
    return (
      <Link
        to="/auth"
        search={{ mode: "inscription" }}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 opacity-90 hover:opacity-100"
      >
        Créez un compte pour suivre ce concours et vos progrès
      </Link>
    );
  }

  if (concoursId === concours.id) {
    return (
      <p className="bg-primary-foreground/15 mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
        <Check className="h-4 w-4" />
        C'est le concours que vous préparez
      </p>
    );
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        disabled={enCours}
        onClick={async () => {
          setEnCours(true);
          setErreur(false);
          const ok = await choisir(concours.id);
          setErreur(!ok);
          setEnCours(false);
        }}
        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-70"
      >
        {enCours ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
        {concoursId ? "Préparer ce concours à la place" : "Je prépare ce concours"}
      </button>
      {erreur && (
        <p role="alert" className="mt-2 text-sm opacity-90">
          L'enregistrement n'a pas abouti. Réessayez dans un instant.
        </p>
      )}
    </div>
  );
}

/** Documents téléchargeables : le lien n'apparaît que pour un compte validé. */
function Telechargements({ documents }: { documents: NonNullable<Concours["telechargements"]> }) {
  const acces = useAcces();
  return (
    <ul className="mt-3 space-y-3">
      {documents.map((doc) => (
        <li key={doc.fichier} className="bg-secondary/40 rounded-xl p-3">
          <p className="text-foreground text-sm font-semibold">{doc.titre}</p>
          <p className="text-muted-foreground mt-0.5 text-xs">{doc.details}</p>
          {acces === "valide" ? (
            <a
              href={doc.fichier}
              download
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger
            </a>
          ) : acces === "chargement" ? null : (
            <p className="text-muted-foreground mt-3 flex items-start gap-2 text-xs leading-relaxed">
              <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {acces === "en-attente" ? (
                "Disponible dès la validation de votre compte."
              ) : (
                <span>
                  Réservé aux inscrits.{" "}
                  <Link
                    to="/auth"
                    search={{ mode: "inscription" }}
                    className="text-primary font-semibold underline-offset-4 hover:underline"
                  >
                    Créer un compte gratuit
                  </Link>
                </span>
              )}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

/** Choix de la spécialité d'agent de maîtrise, mémorisé sur l'appareil. */
function ChoixSpecialite() {
  const { specialite, choisir } = useSpecialiteAM();
  const choisie = getSpecialite(specialite ?? undefined);
  return (
    <section className="bg-card mb-12 rounded-2xl border p-6 shadow-sm">
      <h2 className="font-display text-xl font-bold">Ma spécialité</h2>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        Le concours d'agent de maîtrise s'organise par spécialité. Choisissez la vôtre pour accéder
        directement à ses cours et à ses quiz.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {specialitesAM.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => choisir(s.id)}
            aria-pressed={s.id === specialite}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              s.id === specialite
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-foreground hover:border-primary"
            }`}
          >
            {s.titre}
          </button>
        ))}
      </div>
      {choisie && (
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">
            {choisie.voies}. Votre choix est mémorisé sur cet appareil.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/cours-agent-maitrise"
              className="bg-primary text-primary-foreground inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              Cours et quiz de ma spécialité
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/examen-blanc-agent-maitrise"
              className="border-border hover:border-primary inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors"
            >
              Examen blanc chronométré
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
