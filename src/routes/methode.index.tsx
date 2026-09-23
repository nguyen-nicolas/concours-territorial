import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, FileText, Lightbulb } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { methodeFiches } from "@/lib/methodeData";

export const Route = createFileRoute("/methode/")({
  head: () => {
    const description =
      "Méthode complète des épreuves écrites de la fonction publique territoriale : note administrative, note de synthèse et rapport technique, étape par étape.";
    const title = "Cours de méthode des épreuves écrites | Prépa Territoriale";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: MethodeIndex,
});

function MethodeIndex() {
  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-primary font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          Épreuves écrites
        </p>
        <h1 className="text-foreground font-display mt-3 text-3xl sm:text-4xl">
          Les cours de méthode
        </h1>
        <p className="text-muted-foreground mt-3 font-sans text-lg">
          La note administrative, la note de synthèse et le rapport technique se
          jouent d'abord sur la méthode : une commande bien comprise, un plan
          solide, une forme irréprochable. Chaque fiche vous donne le déroulé
          minute par minute, le plan type, les formulations à réutiliser, les
          critères de notation et les erreurs qui coûtent le plus cher.
        </p>

        <div className="mt-10 space-y-5">
          {methodeFiches.map((fiche) => (
            <Link
              key={fiche.id}
              to="/methode/$methodeId"
              params={{ methodeId: fiche.id }}
              className="border-border bg-card hover:border-primary/50 group block rounded-2xl border p-6 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-muted-foreground flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase">
                    <FileText className="size-4" />
                    {fiche.epreuve}
                  </p>
                  <h2 className="text-foreground font-display mt-2 text-2xl">
                    {fiche.title}
                  </h2>
                  <p className="text-muted-foreground mt-2 font-sans text-sm">
                    {fiche.resume}
                  </p>
                  <p className="text-muted-foreground mt-3 flex items-center gap-2 font-sans text-xs">
                    <Clock className="size-3.5" />
                    {fiche.duree} · {fiche.concours}
                  </p>
                </div>
                <ArrowRight className="text-primary mt-1 size-5 shrink-0 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <section className="border-primary/30 bg-primary/5 mt-12 rounded-2xl border p-6">
          <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
            <Lightbulb className="size-4" /> Comment s'entraîner
          </p>
          <ul className="text-muted-foreground mt-3 space-y-2 font-sans text-sm">
            <li>
              Commencez par une lecture de la fiche, puis traitez un sujet en
              conditions réelles, chronomètre en main.
            </li>
            <li>
              Entraînez séparément les étapes difficiles : une séance « plan
              seulement » en 45 minutes vaut beaucoup de devoirs complets.
            </li>
            <li>
              Relisez-vous avec la grille des critères de notation : vous
              corrigez comme le jury corrige.
            </li>
            <li>
              Constituez votre propre carnet de formulations administratives et
              réutilisez-les jusqu'à les écrire sans y penser.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
