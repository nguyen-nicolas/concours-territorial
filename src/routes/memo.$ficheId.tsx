import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  BookMarked,
  Clock,
  Target,
  Sparkles,
  MessageSquareQuote,
  HelpCircle,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ApercuLimite } from "@/components/acces-limite";
import { getFicheMemo } from "@/lib/memoData";
import { concoursList } from "@/lib/concours";

export const Route = createFileRoute("/memo/$ficheId")({
  loader: ({ params }) => {
    const fiche = getFicheMemo(params.ficheId);
    if (!fiche) throw notFound();
    return { fiche };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Fiche introuvable | Prépa Territoriale" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.fiche.title} — fiche mémo | Prépa Territoriale`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.fiche.resume },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.fiche.resume },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: FicheIntrouvable,
  errorComponent: FicheIntrouvable,
  component: FichePage,
});

function FicheIntrouvable() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-foreground font-display text-3xl">Fiche introuvable</h1>
        <Link
          to="/memo"
          className="bg-primary text-primary-foreground mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-sans text-sm font-semibold"
        >
          Retour aux fiches mémo
        </Link>
      </main>
    </div>
  );
}

function FichePage() {
  const { fiche } = Route.useLoaderData();
  const concours = concoursList.filter((c) => fiche.concoursIds.includes(c.id));

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/memo"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 font-sans text-sm"
        >
          <ArrowLeft className="size-4" /> Toutes les fiches mémo
        </Link>

        <p className="text-primary mt-6 flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.2em] uppercase">
          <BookMarked className="size-4" />
          {fiche.theme}
        </p>
        <h1 className="text-foreground font-display mt-3 text-3xl sm:text-4xl">{fiche.title}</h1>
        <p className="text-muted-foreground mt-3 font-sans text-base sm:text-lg">{fiche.resume}</p>
        <p className="text-muted-foreground mt-3 flex flex-wrap items-center gap-2 font-sans text-xs">
          <Clock className="size-3.5" />
          {fiche.duree} · Catégories {fiche.categories.join(", ")}
        </p>

        <ApercuLimite message="la fiche en entier, à ses repères chiffrés et aux questions du jury">
          <div className="mt-10 space-y-8">
            {fiche.sections.map((section) => (
              <section key={section.titre}>
                <h2 className="text-foreground font-display text-2xl">{section.titre}</h2>
                <ul className="text-muted-foreground mt-3 space-y-2 font-sans text-sm sm:text-base">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-primary mt-1.5 size-1.5 shrink-0 rounded-full bg-current" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {fiche.phraseJury && (
            <section className="border-primary/30 bg-primary/5 mt-10 rounded-2xl border p-5 sm:p-6">
              <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                <MessageSquareQuote className="size-4" /> La phrase à dire au jury
              </p>
              <p className="text-foreground mt-3 font-sans text-sm sm:text-base">
                {fiche.phraseJury}
              </p>
            </section>
          )}

          {fiche.questionsJury && fiche.questionsJury.length > 0 && (
            <section className="border-border bg-card mt-6 rounded-2xl border p-5 sm:p-6">
              <p className="text-muted-foreground flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                <HelpCircle className="size-4" /> Questions fréquentes du jury
              </p>
              <dl className="mt-3 space-y-3 font-sans text-sm">
                {fiche.questionsJury.map((q) => (
                  <div key={q.question}>
                    <dt className="text-foreground font-semibold">{q.question}</dt>
                    <dd className="text-muted-foreground">{q.reponse}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {fiche.ultraMemo && (
            <p className="border-border text-foreground mt-6 rounded-2xl border border-dashed p-5 text-center font-sans text-sm font-semibold sm:p-6">
              {fiche.ultraMemo}
            </p>
          )}

          <section className="border-border bg-card mt-10 rounded-2xl border p-5 sm:p-6">
            <p className="text-muted-foreground flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
              <Sparkles className="size-4" /> Repères à citer
            </p>
            <ul className="text-foreground mt-3 space-y-2 font-sans text-sm">
              {fiche.reperes.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section className="border-primary/30 bg-primary/5 mt-6 rounded-2xl border p-5 sm:p-6">
            <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
              <Target className="size-4" /> À retenir absolument
            </p>
            <ul className="text-foreground mt-3 space-y-2 font-sans text-sm">
              {fiche.aRetenir.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>

          <section className="border-destructive/30 bg-destructive/5 mt-6 rounded-2xl border p-5 sm:p-6">
            <p className="text-destructive flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
              <AlertTriangle className="size-4" /> Pièges fréquents
            </p>
            <ul className="text-foreground mt-3 space-y-2 font-sans text-sm">
              {fiche.pieges.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>

          {concours.length > 0 && (
            <section className="mt-10">
              <h2 className="text-foreground font-display text-xl">Concours concernés</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {concours.map((c) => (
                  <Link
                    key={c.id}
                    to="/concours/$concoursId"
                    params={{ concoursId: c.id }}
                    className="border-border hover:border-primary/50 rounded-full border px-3 py-1.5 font-sans text-xs"
                  >
                    {c.title} · {c.categorie}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </ApercuLimite>
      </main>
    </div>
  );
}
