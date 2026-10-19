import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Clock,
  PenLine,
  Scale,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ApercuLimite } from "@/components/acces-limite";
import { getMethode } from "@/lib/methodeData";

export const Route = createFileRoute("/methode/$methodeId")({
  loader: ({ params }) => {
    const fiche = getMethode(params.methodeId);
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
    const title = `${loaderData.fiche.title} — méthode | Prépa Territoriale`;
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
  component: MethodePage,
});

function FicheIntrouvable() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-foreground font-display text-3xl">Fiche introuvable</h1>
        <p className="text-muted-foreground mt-3 font-sans">
          Cette fiche de méthode n'existe pas ou a été renommée.
        </p>
        <Link
          to="/methode"
          className="bg-primary text-primary-foreground mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-sans text-sm font-semibold"
        >
          Retour aux cours de méthode
        </Link>
      </main>
    </div>
  );
}

function MethodePage() {
  const { fiche } = Route.useLoaderData();

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <Link
          to="/methode"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 font-sans text-sm transition"
        >
          <ArrowLeft className="size-4" />
          Tous les cours de méthode
        </Link>

        <p className="text-primary mt-8 font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          {fiche.epreuve}
        </p>
        <h1 className="text-foreground font-display mt-3 text-3xl sm:text-4xl">{fiche.title}</h1>
        <p className="text-muted-foreground mt-3 font-sans text-lg">{fiche.resume}</p>
        <p className="text-muted-foreground mt-2 flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase">
          <Clock className="size-3.5" />
          {fiche.duree} · {fiche.concours}
        </p>

        <ApercuLimite message="toute la méthode : étapes, plan type, formulations et erreurs à éviter">
          <section className="border-border bg-card mt-8 rounded-2xl border p-6">
            <h2 className="text-foreground font-display text-lg">Ce que le jury attend</h2>
            <ul className="mt-3 space-y-2">
              {fiche.attendu.map((a) => (
                <li key={a} className="text-muted-foreground flex gap-2 font-sans text-sm">
                  <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-foreground font-display text-2xl">Le déroulé de l'épreuve</h2>
            <div className="mt-5 space-y-5">
              {fiche.etapes.map((etape, i) => (
                <article key={etape.titre} className="border-border bg-card rounded-2xl border p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-foreground font-display text-lg">
                      <span className="text-primary mr-2">{i + 1}.</span>
                      {etape.titre}
                    </h3>
                    <span className="text-muted-foreground shrink-0 font-sans text-xs tracking-[0.1em] uppercase">
                      {etape.duree}
                    </span>
                  </div>
                  <p className="text-foreground/90 mt-3 font-sans text-sm leading-relaxed">
                    {etape.description}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {etape.conseils.map((c) => (
                      <li key={c} className="text-muted-foreground flex gap-2 font-sans text-sm">
                        <span className="text-primary">·</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-foreground font-display flex items-center gap-2 text-2xl">
              <ClipboardList className="text-primary size-5" />
              Le plan type
            </h2>
            <div className="border-border bg-card mt-5 divide-y rounded-2xl border">
              {fiche.plan.map((partie) => (
                <div key={partie.titre} className="p-5">
                  <p className="text-foreground font-sans text-sm font-semibold">{partie.titre}</p>
                  <p className="text-muted-foreground mt-1.5 font-sans text-sm">{partie.contenu}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-foreground font-display flex items-center gap-2 text-2xl">
              <PenLine className="text-primary size-5" />
              Formulations à réutiliser
            </h2>
            <div className="mt-5 space-y-4">
              {fiche.formulations.map((f) => (
                <div
                  key={f.exemple}
                  className="border-primary/30 bg-primary/5 rounded-2xl border p-5"
                >
                  <p className="text-primary font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                    {f.usage}
                  </p>
                  <p className="text-foreground mt-2 font-sans text-sm italic">« {f.exemple} »</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-foreground font-display text-2xl">{fiche.extrait.titre}</h2>
            <pre className="border-border bg-card text-foreground/90 mt-4 overflow-x-auto rounded-2xl border p-5 font-mono text-xs leading-relaxed whitespace-pre">
              {fiche.extrait.lignes.join("\n")}
            </pre>
          </section>

          <section className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="border-border bg-card rounded-2xl border p-6">
              <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                <Scale className="size-4" /> Ce qui est noté
              </p>
              <ul className="mt-3 space-y-3">
                {fiche.criteres.map((c) => (
                  <li key={c.critere} className="font-sans text-sm">
                    <span className="text-foreground font-semibold">{c.critere}</span>
                    <span className="text-muted-foreground block">{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-destructive/30 bg-destructive/5 rounded-2xl border p-6">
              <p className="text-destructive flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                <AlertTriangle className="size-4" /> Erreurs éliminatoires
              </p>
              <ul className="mt-3 space-y-2">
                {fiche.erreurs.map((e) => (
                  <li key={e} className="text-muted-foreground font-sans text-sm">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </ApercuLimite>
      </main>
    </div>
  );
}
