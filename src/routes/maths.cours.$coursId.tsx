import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, CheckCircle2, Lightbulb, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ApercuLimite } from "@/components/acces-limite";
import { getMathCours, mathNiveaux } from "@/lib/mathsData";

export const Route = createFileRoute("/maths/cours/$coursId")({
  loader: ({ params }) => {
    const cours = getMathCours(params.coursId);
    if (!cours) throw notFound();
    return { cours };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Cours introuvable | Prépa Territoriale" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.cours.title} — cours de mathématiques | Prépa Territoriale`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.cours.resume },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.cours.resume },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CoursIntrouvable,
  component: CoursPage,
});

function CoursIntrouvable() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-display text-3xl text-foreground">Cours introuvable</h1>
        <p className="mt-3 font-sans text-muted-foreground">
          Ce cours n'existe pas ou a été renommé.
        </p>
        <Link
          to="/maths"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-sans text-sm font-semibold text-primary-foreground"
        >
          Retour aux mathématiques
        </Link>
      </main>
    </div>
  );
}

function CoursPage() {
  const { cours } = Route.useLoaderData();
  const niveau = mathNiveaux.find((n) => n.id === cours.niveau);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <Link
          to="/maths"
          className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Tous les niveaux
        </Link>

        <p className="mt-8 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {niveau?.title ?? "Mathématiques"}
        </p>
        <h1 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">{cours.title}</h1>
        <p className="mt-3 font-sans text-lg text-muted-foreground">{cours.resume}</p>
        <p className="mt-2 font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground">
          Durée conseillée : {cours.duree}
        </p>

        <ApercuLimite message="tout le cours et à ses exemples corrigés">
          <section className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg text-foreground">Ce que vous saurez faire</h2>
            <ul className="mt-3 space-y-2">
              {cours.objectifs.map((o) => (
                <li key={o} className="flex gap-2 font-sans text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 space-y-10">
            {cours.sections.map((section) => (
              <section key={section.titre}>
                <h2 className="font-display text-2xl text-foreground">{section.titre}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphes.map((p) => (
                    <p key={p} className="font-sans text-base leading-relaxed text-foreground/90">
                      {p}
                    </p>
                  ))}
                </div>
                {section.formules?.length ? (
                  <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 p-5">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                      À connaître par cœur
                    </p>
                    <ul className="mt-3 space-y-2">
                      {section.formules.map((f) => (
                        <li key={f} className="font-mono text-sm text-foreground">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="font-display text-2xl text-foreground">Exemples corrigés</h2>
            <div className="mt-5 space-y-6">
              {cours.exemples.map((ex) => (
                <article key={ex.enonce} className="rounded-2xl border border-border bg-card p-6">
                  <p className="font-sans text-sm font-semibold text-foreground">{ex.enonce}</p>
                  <ol className="mt-4 space-y-2">
                    {ex.etapes.map((etape, i) => (
                      <li
                        key={etape}
                        className="flex gap-3 font-sans text-sm text-muted-foreground"
                      >
                        <span className="font-semibold text-primary">{i + 1}.</span>
                        <span>{etape}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-4 rounded-xl bg-success/10 px-4 py-3 font-sans text-sm font-semibold text-foreground">
                    {ex.resultat}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                <Lightbulb className="size-4" /> À retenir
              </p>
              <ul className="mt-3 space-y-2">
                {cours.aRetenir.map((r) => (
                  <li key={r} className="font-sans text-sm text-muted-foreground">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
              <p className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-destructive">
                <AlertTriangle className="size-4" /> Pièges fréquents
              </p>
              <ul className="mt-3 space-y-2">
                {cours.pieges.map((p) => (
                  <li key={p} className="font-sans text-sm text-muted-foreground">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {niveau ? (
            <Link
              to="/quiz/$themeId"
              params={{ themeId: niveau.quizThemeId }}
              className="mt-12 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-sans text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Target className="size-4" />
              Passer à l'entraînement de ce niveau
            </Link>
          ) : null}
        </ApercuLimite>
      </main>
    </div>
  );
}
