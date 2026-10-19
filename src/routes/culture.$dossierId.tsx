import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BookMarked, Clock, History, Quote, Scale, Target, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ApercuLimite } from "@/components/acces-limite";
import { getCultureDossier } from "@/lib/cultureData";

export const Route = createFileRoute("/culture/$dossierId")({
  loader: ({ params }) => {
    const dossier = getCultureDossier(params.dossierId);
    if (!dossier) throw notFound();
    return { dossier };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Dossier introuvable | Prépa Territoriale" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.dossier.title} — culture générale | Prépa Territoriale`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.dossier.resume },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.dossier.resume },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: DossierIntrouvable,
  component: DossierPage,
});

function DossierIntrouvable() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-foreground font-display text-3xl">Dossier introuvable</h1>
        <Link
          to="/culture"
          className="bg-primary text-primary-foreground mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 font-sans text-sm font-semibold"
        >
          Retour aux dossiers
        </Link>
      </main>
    </div>
  );
}

function DossierPage() {
  const { dossier } = Route.useLoaderData();

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-14">
        <Link
          to="/culture"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 font-sans text-sm transition"
        >
          <ArrowLeft className="size-4" />
          Tous les dossiers
        </Link>

        <p className="text-primary mt-8 font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          {dossier.famille}
        </p>
        <h1 className="text-foreground font-display mt-3 text-3xl sm:text-4xl">{dossier.title}</h1>
        <p className="text-muted-foreground mt-3 font-sans text-lg">{dossier.resume}</p>
        <p className="text-muted-foreground mt-2 flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase">
          <Clock className="size-3.5" />
          Lecture active : {dossier.duree}
        </p>

        <ApercuLimite message="tout le dossier, avec ses chiffres à citer et ses exemples">
          <section className="mt-10">
            <h2 className="text-foreground font-display flex items-center gap-2 text-2xl">
              <BookMarked className="text-primary size-5" />
              Les notions à maîtriser
            </h2>
            <div className="border-border bg-card mt-5 divide-y rounded-2xl border">
              {dossier.notions.map((n) => (
                <div key={n.terme} className="p-5">
                  <p className="text-foreground font-sans text-sm font-semibold">{n.terme}</p>
                  <p className="text-muted-foreground mt-1.5 font-sans text-sm">{n.definition}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-foreground font-display flex items-center gap-2 text-2xl">
              <History className="text-primary size-5" />
              Repères chronologiques
            </h2>
            <ul className="mt-5 space-y-3">
              {dossier.reperes.map((r) => (
                <li key={r.date + r.fait} className="flex gap-4">
                  <span className="text-primary w-24 shrink-0 font-sans text-sm font-semibold">
                    {r.date}
                  </span>
                  <span className="text-muted-foreground font-sans text-sm">{r.fait}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-foreground font-display text-2xl">Chiffres à citer</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {dossier.chiffres.map((c) => (
                <div
                  key={c.libelle}
                  className="border-primary/30 bg-primary/5 rounded-2xl border p-5"
                >
                  <p className="text-primary font-display text-2xl">{c.valeur}</p>
                  <p className="text-muted-foreground mt-1 font-sans text-sm">{c.libelle}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-3 font-sans text-xs">
              Ordres de grandeur indicatifs : citez-les comme tels (« de l'ordre de… »).
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-foreground font-display flex items-center gap-2 text-2xl">
              <Users className="text-primary size-5" />
              Les acteurs
            </h2>
            <div className="border-border bg-card mt-5 divide-y rounded-2xl border">
              {dossier.acteurs.map((a) => (
                <div key={a.nom} className="p-5">
                  <p className="text-foreground font-sans text-sm font-semibold">{a.nom}</p>
                  <p className="text-muted-foreground mt-1 font-sans text-sm">{a.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-foreground font-display flex items-center gap-2 text-2xl">
              <Scale className="text-primary size-5" />
              Les débats
            </h2>
            <div className="mt-5 space-y-6">
              {dossier.debats.map((d) => (
                <article key={d.question} className="border-border bg-card rounded-2xl border p-6">
                  <h3 className="text-foreground font-display text-lg">{d.question}</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="bg-success/10 rounded-xl p-4">
                      <p className="text-foreground font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                        Arguments favorables
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {d.pour.map((p) => (
                          <li key={p} className="text-muted-foreground font-sans text-sm">
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-destructive/10 rounded-xl p-4">
                      <p className="text-foreground font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                        Objections
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {d.contre.map((c) => (
                          <li key={c} className="text-muted-foreground font-sans text-sm">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="border-primary/30 bg-primary/5 text-foreground mt-4 rounded-xl border px-4 py-3 font-sans text-sm">
                    <span className="text-primary font-semibold">Ce qu'attend le jury : </span>
                    {d.position}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-foreground font-display text-2xl">Exemples concrets</h2>
            <div className="mt-5 space-y-4">
              {dossier.exemples.map((e) => (
                <div key={e.titre} className="border-border bg-card rounded-2xl border p-5">
                  <p className="text-foreground font-sans text-sm font-semibold">{e.titre}</p>
                  <p className="text-muted-foreground mt-1.5 font-sans text-sm">{e.contenu}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="border-border bg-card rounded-2xl border p-6">
              <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                <Target className="size-4" /> Sujets d'entraînement
              </p>
              <ul className="mt-3 space-y-2">
                {dossier.sujets.map((s) => (
                  <li key={s} className="text-muted-foreground font-sans text-sm">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-border bg-card rounded-2xl border p-6">
              <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
                <Quote className="size-4" /> Formules à retenir
              </p>
              <ul className="mt-3 space-y-3">
                {dossier.citations.map((c) => (
                  <li key={c} className="text-muted-foreground font-sans text-sm italic">
                    {c}
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
