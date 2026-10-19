import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  ListChecks,
  Loader2,
  Target,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { getConcours, type Concours } from "@/lib/concours";
import { quizThemes } from "@/lib/quizData";
import { fichesMemo } from "@/lib/memoData";
import { useConcoursChoisi } from "@/hooks/useConcoursChoisi";

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

      <footer className="border-border border-t">
        <div className="text-muted-foreground mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:px-6">
          <p>Prépa Territoriale — s'informer, se former, réussir.</p>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <p>Contenus d'entraînement, sans valeur réglementaire.</p>
            <Link
              to="/soutenir"
              className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
            >
              Soutenir le projet
            </Link>
          </div>
        </div>
      </footer>
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
