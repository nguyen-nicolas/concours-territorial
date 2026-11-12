import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ApercuLimite } from "@/components/acces-limite";
import { coursAgentMaitrise, getCoursAM, partiesCoursAM } from "@/lib/coursAgentMaitrise";
import { getTheme } from "@/lib/quizData";

export const Route = createFileRoute("/cours-agent-maitrise/$coursId")({
  loader: ({ params }) => {
    const cours = getCoursAM(params.coursId);
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
    const title = `${loaderData.cours.title} — agent de maîtrise | Prépa Territoriale`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.cours.resume },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.cours.resume },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: CoursIntrouvable,
  component: CoursPage,
});

function CoursIntrouvable() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-display text-foreground text-3xl">Cours introuvable</h1>
        <p className="text-muted-foreground mt-3">Ce cours n'existe pas ou a été renommé.</p>
        <Link
          to="/cours-agent-maitrise"
          className="bg-primary text-primary-foreground mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
        >
          Retour aux cours
        </Link>
      </main>
    </div>
  );
}

function Point({ texte }: { texte: string }) {
  const numerote = texte.match(/^(\d+)\.\s+(.*)$/s);
  if (numerote) {
    return (
      <li className="text-foreground/90 flex gap-3 text-base leading-relaxed">
        <span className="text-primary mt-0.5 font-semibold">{numerote[1]}.</span>
        <span>{numerote[2]}</span>
      </li>
    );
  }
  return (
    <li className="text-foreground/90 flex gap-3 text-base leading-relaxed">
      <span aria-hidden="true" className="bg-primary mt-2.5 size-1.5 shrink-0 rounded-full" />
      <span>{texte}</span>
    </li>
  );
}

function CoursPage() {
  const { cours } = Route.useLoaderData();
  const partie = partiesCoursAM.find((p) => p.id === cours.partie);
  const quiz = cours.quizThemeId ? getTheme(cours.quizThemeId) : undefined;
  const estAtsem = cours.specialite === "atsem";
  const groupe = coursAgentMaitrise.filter((c) => c.specialite === cours.specialite);
  const position = groupe.findIndex((c) => c.id === cours.id);
  const precedent = position > 0 ? groupe[position - 1] : undefined;
  const suivant = position < groupe.length - 1 ? groupe[position + 1] : undefined;

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-14">
        <Link
          to={estAtsem ? "/atsem" : "/cours-agent-maitrise"}
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition"
        >
          <ArrowLeft className="size-4" />
          {estAtsem ? "Préparer le concours d'ATSEM" : "Tous les cours"}
        </Link>

        <p className="text-primary mt-8 text-sm font-semibold tracking-[0.2em] uppercase">
          {estAtsem ? "Concours d'ATSEM" : (partie?.titre ?? "Agent de maîtrise")}
        </p>
        <h1 className="font-display text-foreground mt-3 text-3xl sm:text-4xl">{cours.title}</h1>
        <p className="text-muted-foreground mt-3 text-lg">{cours.resume}</p>
        <p className="text-muted-foreground mt-2 text-xs tracking-[0.15em] uppercase">
          Durée conseillée : {cours.duree}
        </p>

        <ApercuLimite
          message="tout le cours, à ses exemples corrigés et à l'entraînement associé"
          hauteur="30rem"
        >
          <section className="border-border bg-card mt-8 rounded-2xl border p-6">
            <h2 className="font-display text-foreground text-lg">Ce que vous saurez faire</h2>
            <ul className="mt-3 space-y-2">
              {cours.objectifs.map((o) => (
                <li key={o} className="text-muted-foreground flex gap-2 text-sm">
                  <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 space-y-12">
            {cours.sections.map((section) => (
              <section key={section.titre}>
                <h2 className="font-display text-foreground text-2xl">{section.titre}</h2>

                {section.paragraphes?.length ? (
                  <div className="mt-3 space-y-3">
                    {section.paragraphes.map((p) => (
                      <p key={p} className="text-foreground/90 text-base leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : null}

                {section.tableau ? (
                  <div className="border-border mt-4 overflow-x-auto rounded-2xl border">
                    <table className="w-full min-w-[32rem] text-left text-sm">
                      <thead className="bg-secondary/60">
                        <tr>
                          {section.tableau.entetes.map((e) => (
                            <th
                              key={e}
                              scope="col"
                              className="text-foreground px-4 py-3 font-semibold"
                            >
                              {e}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.tableau.lignes.map((ligne) => (
                          <tr key={ligne[0]} className="border-border border-t align-top">
                            {ligne.map((cellule, i) => (
                              <td
                                key={`${ligne[0]}-${i}`}
                                className={
                                  i === 0
                                    ? "text-foreground px-4 py-3 font-medium"
                                    : "text-muted-foreground px-4 py-3 leading-relaxed"
                                }
                              >
                                {cellule}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {section.points?.length ? (
                  <ul className="mt-4 space-y-2.5">
                    {section.points.map((p) => (
                      <Point key={p} texte={p} />
                    ))}
                  </ul>
                ) : null}

                {section.reperes?.length ? (
                  <div className="border-primary/30 bg-primary/5 mt-4 rounded-2xl border p-5">
                    <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">
                      À connaître par cœur
                    </p>
                    <ul className="mt-3 space-y-2">
                      {section.reperes.map((r) => (
                        <li key={r} className="text-foreground text-sm font-medium">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          {cours.exemples?.length ? (
            <section className="mt-12">
              <h2 className="font-display text-foreground text-2xl">Exemples corrigés</h2>
              <div className="mt-5 space-y-6">
                {cours.exemples.map((ex) => (
                  <article key={ex.enonce} className="border-border bg-card rounded-2xl border p-6">
                    <p className="text-foreground text-sm font-semibold">{ex.enonce}</p>
                    <ol className="mt-4 space-y-2">
                      {ex.etapes.map((etape, i) => (
                        <li key={etape} className="text-muted-foreground flex gap-3 text-sm">
                          <span className="text-primary font-semibold">{i + 1}.</span>
                          <span>{etape}</span>
                        </li>
                      ))}
                    </ol>
                    <p className="bg-success/10 text-foreground mt-4 rounded-xl px-4 py-3 text-sm font-semibold">
                      {ex.resultat}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="border-border bg-card rounded-2xl border p-6">
              <p className="text-primary flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase">
                <Lightbulb className="size-4" /> À retenir
              </p>
              <ul className="mt-3 space-y-2">
                {cours.aRetenir.map((r) => (
                  <li key={r} className="text-muted-foreground text-sm">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-destructive/30 bg-destructive/5 rounded-2xl border p-6">
              <p className="text-destructive flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase">
                <AlertTriangle className="size-4" /> Pièges fréquents
              </p>
              <ul className="mt-3 space-y-2">
                {cours.pieges.map((p) => (
                  <li key={p} className="text-muted-foreground text-sm">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {quiz ? (
            <Link
              to="/quiz/$themeId"
              params={{ themeId: quiz.id }}
              search={{ concours: "agent-maitrise" }}
              className="bg-primary text-primary-foreground mt-12 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              <Target className="size-4" />
              S'entraîner sur ce cours · {quiz.questions.length} questions
            </Link>
          ) : estAtsem ? (
            <Link
              to="/qcm-atsem"
              className="bg-primary text-primary-foreground mt-12 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:opacity-90"
            >
              <Target className="size-4" />
              S'entraîner : QCM d'ATSEM
            </Link>
          ) : null}

          <nav
            aria-label="Cours précédent et suivant"
            className="border-border mt-14 grid gap-4 border-t pt-8 sm:grid-cols-2"
          >
            {precedent ? (
              <Link
                to="/cours-agent-maitrise/$coursId"
                params={{ coursId: precedent.id }}
                className="border-border hover:border-primary rounded-2xl border p-4 transition"
              >
                <span className="text-muted-foreground flex items-center gap-2 text-xs uppercase">
                  <ArrowLeft className="size-3.5" /> Précédent
                </span>
                <span className="text-foreground mt-1 block text-sm font-medium">
                  {precedent.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {suivant ? (
              <Link
                to="/cours-agent-maitrise/$coursId"
                params={{ coursId: suivant.id }}
                className="border-border hover:border-primary rounded-2xl border p-4 text-right transition sm:col-start-2"
              >
                <span className="text-muted-foreground flex items-center justify-end gap-2 text-xs uppercase">
                  Suivant <ArrowRight className="size-3.5" />
                </span>
                <span className="text-foreground mt-1 block text-sm font-medium">
                  {suivant.title}
                </span>
              </Link>
            ) : null}
          </nav>
        </ApercuLimite>

        {cours.ressources?.length ? (
          <section className="border-border mt-12 rounded-2xl border p-6">
            <h2 className="font-display text-foreground text-xl">Documents officiels</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Sujets, notes de cadrage et fiches publiés par les centres de gestion et le CNFPT. Ces
              liens s'ouvrent sur leurs sites.
            </p>
            <ul className="mt-4 space-y-2.5">
              {cours.ressources.map((r) => (
                <li key={r.url} className="text-sm">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
      <SiteFooter largeur="max-w-3xl" />
    </div>
  );
}
