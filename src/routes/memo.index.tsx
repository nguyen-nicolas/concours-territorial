import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookMarked, Clock, Filter, Lightbulb } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { fichesMemo, memoThemes } from "@/lib/memoData";
import { concoursList, type Categorie } from "@/lib/concours";

export const Route = createFileRoute("/memo/")({
  // ?concours=<id> : préfiltre la liste sur un concours (lien depuis la page du concours).
  validateSearch: (search: Record<string, unknown>): { concours?: string } => {
    const concours = search["concours"];
    return typeof concours === "string" ? { concours } : {};
  },
  head: () => {
    const description =
      "Fiches mémo pour les concours de la fonction publique territoriale : institutions, statut, finances, service public, méthode. Filtrables par concours, catégorie et thème.";
    const title = "Fiches mémo | Prépa Territoriale";
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
  component: MemoIndex,
});

const CATEGORIES: Categorie[] = ["A", "B", "C"];

function MemoIndex() {
  const [categorie, setCategorie] = useState<Categorie | "toutes">("toutes");
  const { concours: concoursDemande } = Route.useSearch();
  const [concoursId, setConcoursId] = useState<string>(
    concoursDemande && concoursList.some((c) => c.id === concoursDemande)
      ? concoursDemande
      : "tous",
  );
  const [theme, setTheme] = useState<string>("tous");

  const fiches = useMemo(
    () =>
      fichesMemo.filter(
        (f) =>
          (categorie === "toutes" || f.categories.includes(categorie)) &&
          (concoursId === "tous" || f.concoursIds.includes(concoursId)) &&
          (theme === "tous" || f.theme === theme),
      ),
    [categorie, concoursId, theme],
  );

  const selectClass =
    "border-border bg-card text-foreground w-full rounded-xl border px-3 py-2 font-sans text-sm";

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-primary font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          Fiches mémo
        </p>
        <h1 className="text-foreground font-display mt-3 text-3xl sm:text-4xl">
          L'essentiel à réviser, fiche par fiche
        </h1>
        <p className="text-muted-foreground mt-3 font-sans text-base sm:text-lg">
          Des fiches courtes et structurées, classées par concours, par catégorie et par thème :
          définitions exactes, repères à citer, points à retenir et confusions à éviter. Rédigées à
          partir des sources publiques officielles (Constitution, CGCT, code général de la fonction
          publique, code de la commande publique) et des programmes des épreuves.
        </p>
        <p className="text-muted-foreground mt-2 font-sans text-sm">
          {fichesMemo.length} fiches · {memoThemes.length} thèmes · contenus indicatifs, sans valeur
          réglementaire
        </p>

        <section className="border-border bg-card mt-8 rounded-2xl border p-4 sm:p-6">
          <p className="text-muted-foreground flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
            <Filter className="size-4" /> Filtrer les fiches
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <label className="block">
              <span className="text-muted-foreground mb-1 block font-sans text-xs">Concours</span>
              <select
                className={selectClass}
                value={concoursId}
                onChange={(e) => setConcoursId(e.target.value)}
              >
                <option value="tous">Tous les concours</option>
                {concoursList.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-muted-foreground mb-1 block font-sans text-xs">Catégorie</span>
              <select
                className={selectClass}
                value={categorie}
                onChange={(e) => setCategorie(e.target.value as Categorie | "toutes")}
              >
                <option value="toutes">Toutes catégories</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    Catégorie {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-muted-foreground mb-1 block font-sans text-xs">Thème</span>
              <select
                className={selectClass}
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                <option value="tous">Tous les thèmes</option>
                {memoThemes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <p className="text-muted-foreground mt-3 font-sans text-sm">
            {fiches.length} fiche{fiches.length > 1 ? "s" : ""} correspondante
            {fiches.length > 1 ? "s" : ""}
          </p>
        </section>

        <div className="mt-8 space-y-4">
          {fiches.map((fiche) => (
            <Link
              key={fiche.id}
              to="/memo/$ficheId"
              params={{ ficheId: fiche.id }}
              className="border-border bg-card hover:border-primary/50 group block rounded-2xl border p-5 transition sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-muted-foreground flex flex-wrap items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase">
                    <BookMarked className="size-4" />
                    {fiche.theme}
                  </p>
                  <h2 className="text-foreground font-display mt-2 text-xl sm:text-2xl">
                    {fiche.title}
                  </h2>
                  <p className="text-muted-foreground mt-2 font-sans text-sm">{fiche.resume}</p>
                  <p className="text-muted-foreground mt-3 flex flex-wrap items-center gap-2 font-sans text-xs">
                    <Clock className="size-3.5" />
                    {fiche.duree} · Catégories {fiche.categories.join(", ")} ·{" "}
                    {fiche.aRetenir.length} points à retenir
                  </p>
                </div>
                <ArrowRight className="text-primary mt-1 size-5 shrink-0 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
          {fiches.length === 0 && (
            <p className="text-muted-foreground font-sans text-sm">
              Aucune fiche ne correspond à ces filtres. Élargissez votre sélection.
            </p>
          )}
        </div>

        <section className="border-primary/30 bg-primary/5 mt-12 rounded-2xl border p-5 sm:p-6">
          <p className="text-primary flex items-center gap-2 font-sans text-xs font-semibold tracking-[0.15em] uppercase">
            <Lightbulb className="size-4" /> Comment réviser avec ces fiches
          </p>
          <ul className="text-muted-foreground mt-3 space-y-2 font-sans text-sm">
            <li>Filtrez sur votre concours : vous ne révisez que l'utile.</li>
            <li>Lisez la fiche, fermez-la, reformulez les trois points à retenir à voix haute.</li>
            <li>Relisez uniquement la section « pièges » la veille de l'épreuve.</li>
            <li>Enchaînez sur le quiz du thème correspondant pour vérifier que c'est acquis.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
