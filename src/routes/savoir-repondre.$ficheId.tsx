import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Dumbbell,
  MessageSquareQuote,
  Wrench,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { getRepondreFiche } from "@/lib/repondreData";

export const Route = createFileRoute("/savoir-repondre/$ficheId")({
  loader: ({ params }) => {
    const fiche = getRepondreFiche(params.ficheId);
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
    const title = `${loaderData.fiche.title} | Prépa Territoriale`;
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
  component: FichePage,
});

function FicheIntrouvable() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-foreground font-display text-3xl">Fiche introuvable</h1>
        <Link
          to="/savoir-repondre"
          className="bg-primary text-primary-foreground mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-sans text-sm font-semibold"
        >
          Retour à la méthode
        </Link>
      </main>
    </div>
  );
}

function FichePage() {
  const { fiche } = Route.useLoaderData();

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <Link
          to="/savoir-repondre"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 font-sans text-sm transition"
        >
          <ArrowLeft className="size-4" />
          Répondre quand on ne sait pas
        </Link>

        <p className="text-primary mt-8 font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          {fiche.contexte === "ecrit" ? "Épreuves écrites" : "Entretien oral"}
        </p>
        <h1 className="text-foreground font-display mt-3 text-3xl sm:text-4xl">
          {fiche.title}
        </h1>
        <p className="text-primary mt-3 font-sans text-lg font-semibold">
          {fiche.accroche}
        </p>
        <p className="text-muted-foreground mt-2 font-sans text-base">{fiche.resume}</p>

        <section className="border-border bg-card mt-8 rounded-2xl border p-6">
          <h2 className="text-foreground font-display text-lg">Les principes</h2>
          <ul className="mt-3 space-y-2">
            {fiche.principes.map((p) => (
              <li key={p} className="text-muted-foreground flex gap-2 font-sans text-sm">
                <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-foreground font-display flex items-center gap-2 text-2xl">
            <Wrench className="text-primary size-5" />
            Les techniques
          </h2>
          <div className="mt-5 space-y-5">
            {fiche.techniques.map((t, i) => (
              <article
                key={t.nom}
                className="border-border bg-card rounded-2xl border p-6"
              >
                <h3 className="text-foreground font-display text-lg">
                  <span className="text-primary mr-2">{i + 1}.</span>
                  {t.nom}
                </h3>
                <p className="text-foreground/90 mt-2 font-sans text-sm leading-relaxed">
                  {t.principe}
                </p>
                <p className="text-muted-foreground mt-2 font-sans text-xs tracking-[0.1em] uppercase">
                  Quand l'utiliser : {t.quand}
                </p>
                <p className="border-primary/30 bg-primary/5 text-foreground mt-3 rounded-xl border px-4 py-3 font-sans text-sm italic">
                  {t.exemple}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-foreground font-display text-2xl">
            Situations concrètes
          </h2>
          <div className="border-border bg-card mt-5 divide-y rounded-2xl border">
            {fiche.situations.map((s) => (
              <div key={s.situation} className="p-5">
                <p className="text-foreground font-sans text-sm font-semibold">
                  {s.situation}
                </p>
                <p className="text-muted-foreground mt-1.5 font-sans text-sm">
                  {s.reflexe}
                </p>
                <p className="text-foreground/90 mt-2 font-sans text-sm italic">
                  {s.formulation}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-foreground font-display flex items-center gap-2 text-2xl">
            <MessageSquareQuote className="text-primary size-5" />
            Vos phrases de secours
          </h2>
          <div className="mt-5 space-y-4">
            {fiche.phrases.map((p) => (
              <div
                key={p.exemple}
                className="border-primary/30 bg-primary/5 rounded-2xl border p-5"
              >
                <p className="text-primary font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                  {p.usage}
                </p>
                <p className="text-foreground mt-2 font-sans text-sm italic">
                  « {p.exemple} »
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="border-destructive/30 bg-destructive/5 rounded-2xl border p-6">
            <p className="text-destructive flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
              <AlertTriangle className="size-4" /> À ne jamais faire
            </p>
            <ul className="mt-3 space-y-2">
              {fiche.interdits.map((i) => (
                <li key={i} className="text-muted-foreground font-sans text-sm">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-border bg-card rounded-2xl border p-6">
            <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
              <Dumbbell className="size-4" /> Pour s'entraîner
            </p>
            <ul className="mt-3 space-y-2">
              {fiche.exercices.map((e) => (
                <li key={e} className="text-muted-foreground font-sans text-sm">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
