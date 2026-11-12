import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, ExternalLink, HelpCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { concoursList } from "@/lib/concours";
import { getCoursParConcours } from "@/lib/coursNouveauxConcours";
import { getQuizParConcours } from "@/lib/quizNouveauxConcours";
import { coursDeSpecialite } from "@/lib/coursAgentMaitrise";
import { casDeSpecialite } from "@/lib/casPratiquesAgentMaitrise";

export const Route = createFileRoute("/concours-filiere")({
  loader: ({ params }) => {
    const concours = concoursList.find((c) => c.id === params.concoursId);
    if (!concours) throw new Error("Concours introuvable");
    return concours;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Préparer le concours ${loaderData?.title} | Prépa Territoriale` },
      { name: "description", content: loaderData?.description },
    ],
  }),
  component: ConcoursFilierePage,
});

function ConcoursFilierePage() {
  const concours = Route.useLoaderData();
  const cours = getCoursParConcours(concours.id);
  const questions = getQuizParConcours(concours.id);
  const coursAM =
    concours.id === "agent-maitrise" ? [] : coursDeSpecialite(concours.id as any).slice(0, 3);
  const cas = casDeSpecialite(concours.id as any);

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
        <Link
          to="/concours/$concoursId"
          params={{ concoursId: concours.id }}
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition"
        >
          <ArrowLeft className="size-4" /> Retour à la fiche concours
        </Link>

        <p className="text-primary mt-8 text-sm font-semibold tracking-[0.2em] uppercase">
          Catégorie {concours.categorie} · {concours.filiere}
        </p>
        <h1 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{concours.title}</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl text-base leading-relaxed">
          {concours.description}
        </p>

        {/* Épreuves */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold">Épreuves</h2>
          <ul className="mt-4 space-y-2">
            {concours.epreuves.map((e, i) => (
              <li key={i} className="bg-secondary/50 rounded-xl px-4 py-3 text-sm leading-relaxed">
                {e}
              </li>
            ))}
          </ul>
        </section>

        {/* Cours dédiés */}
        {cours.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display flex items-center gap-2 text-xl font-bold">
              <BookOpen className="text-primary size-5" /> Cours dédiés
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {cours.map((c) => (
                <div key={c.id} className="bg-card border-border rounded-2xl border p-5">
                  <h3 className="font-display text-foreground text-lg font-semibold">{c.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{c.resume}</p>
                  <p className="text-muted-foreground mt-3 text-xs uppercase tracking-wide">
                    ⏱ {c.duree}
                  </p>
                  <div className="mt-4 space-y-3">
                    {c.sections.slice(0, 2).map((s, i) => (
                      <div key={i}>
                        <p className="text-sm font-semibold">{s.titre}</p>
                        {s.points && (
                          <ul className="text-muted-foreground mt-1 list-disc space-y-1 pl-5 text-sm">
                            {s.points.slice(0, 3).map((p, j) => (
                              <li key={j}>{p}</li>
                            ))}
                            {s.points.length > 3 && (
                              <li className="text-primary">+ {s.points.length - 3} autre(s)…</li>
                            )}
                          </ul>
                        )}
                        {s.tableau && (
                          <div className="mt-2 overflow-x-auto">
                            <table className="w-full text-left text-xs">
                              <thead>
                                <tr className="bg-secondary/60">
                                  {s.tableau.entetes.map((h, j) => (
                                    <th key={j} className="px-3 py-2 font-semibold">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {s.tableau.lignes.slice(0, 3).map((l, j) => (
                                  <tr key={j} className="border-border border-t">
                                    {l.map((c, k) => (
                                      <td key={k} className="text-muted-foreground px-3 py-1.5">
                                        {c}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="bg-primary/5 rounded-xl p-3">
                      <p className="text-sm font-semibold">À retenir</p>
                      <ul className="mt-1 list-disc space-y-1 pl-4 text-xs">
                        {c.aRetenir.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Quiz */}
        {questions.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display flex items-center gap-2 text-xl font-bold">
              <HelpCircle className="text-primary size-5" /> Questions d'entraînement
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              {questions.length} questions propres à ce concours
            </p>
            <div className="mt-5 space-y-5">
              {questions.slice(0, 5).map((q, idx) => (
                <div key={q.id} className="bg-card border-border rounded-2xl border p-5">
                  <p className="font-semibold text-sm">
                    {idx + 1}. {q.question}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {q.options.map((o, i) => (
                      <li
                        key={i}
                        className={`text-sm rounded-lg px-3 py-1.5 ${q.bonnes.includes(i) ? "bg-green-500/10 text-green-700 dark:text-green-400 font-medium" : "text-muted-foreground"}`}
                      >
                        {String.fromCharCode(65 + i)}. {o} {q.bonnes.includes(i) ? "✓" : ""}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-3 text-xs leading-relaxed bg-secondary/40 rounded-lg px-3 py-2">
                    {q.explication}
                  </p>
                </div>
              ))}
              {questions.length > 5 && (
                <p className="text-muted-foreground text-sm text-center">
                  + {questions.length - 5} autres questions disponibles prochainement dans le quiz
                  interactif.
                </p>
              )}
            </div>
          </section>
        )}

        {/* Ressources officielles */}
        {concours.ressources && concours.ressources.length > 0 && (
          <section className="mt-12 border-border rounded-2xl border p-6">
            <h2 className="font-display text-xl font-bold">Documents officiels</h2>
            <ul className="mt-4 space-y-2">
              {concours.ressources.map((r) => (
                <li key={r.url} className="text-sm">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex items-center gap-1.5 hover:underline underline-offset-4"
                  >
                    {r.label} <ExternalLink className="size-3.5 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Thèmes génériques */}
        <section className="mt-10 border-border rounded-2xl border p-6">
          <h2 className="font-display text-xl font-bold">
            S'entraîner sur les thèmes communs à tous les concours
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {concours.themeIds.map((id) => (
              <Link
                key={id}
                to="/quiz/$themeId"
                params={{ themeId: id }}
                search={{ concours: concours.id }}
                className="border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 rounded-full border px-4 py-2 text-sm font-semibold transition"
              >
                Quiz : {id.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </section>

        {/* Thèmes à venir */}
        {concours.aVenir && concours.aVenir.length > 0 && (
          <section className="mt-6 bg-secondary/40 rounded-2xl px-5 py-4">
            <p className="text-sm font-semibold">Contenu en cours de développement</p>
            <ul className="text-muted-foreground mt-2 list-disc pl-5 text-sm space-y-1">
              {concours.aVenir.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
