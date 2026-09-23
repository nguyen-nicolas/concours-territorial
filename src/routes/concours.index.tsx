import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, GraduationCap } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import {
  categorieLabels,
  concoursList,
  type Categorie,
} from "@/lib/concours";

export const Route = createFileRoute("/concours/")({
  head: () => ({
    meta: [
      { title: "Choisir son concours territorial — Prépa Territoriale" },
      {
        name: "description",
        content:
          "Adjoint administratif, ATSEM, rédacteur, technicien, attaché, ingénieur : choisissez votre concours de la fonction publique territoriale et révisez les thèmes qui comptent.",
      },
      {
        property: "og:title",
        content: "Choisir son concours territorial — Prépa Territoriale",
      },
      {
        property: "og:description",
        content:
          "Le catalogue des concours territoriaux par catégorie, avec les épreuves et les thèmes d'entraînement associés.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConcoursIndex,
});

const filtres: Array<{ value: Categorie | "tous"; label: string }> = [
  { value: "tous", label: "Tous" },
  { value: "C", label: "Catégorie C" },
  { value: "B", label: "Catégorie B" },
  { value: "A", label: "Catégorie A" },
];

function ConcoursIndex() {
  const [filtre, setFiltre] = useState<Categorie | "tous">("tous");
  const liste =
    filtre === "tous"
      ? concoursList
      : concoursList.filter((c) => c.categorie === filtre);

  return (
    <div className="bg-background min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6">
        <p className="bg-secondary text-secondary-foreground inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase">
          <GraduationCap className="h-3.5 w-3.5" />
          Fonction publique territoriale
        </p>
        <h1 className="font-display mt-6 max-w-3xl text-4xl font-bold text-balance sm:text-5xl">
          Quel concours préparez-vous ?
        </h1>
        <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-relaxed">
          Sélectionnez votre concours : vous verrez ses épreuves, les thèmes à
          réviser en priorité et les entraînements disponibles.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filtres.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFiltre(f.value)}
              className={
                filtre === f.value
                  ? "bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-semibold"
                  : "border-border text-muted-foreground hover:bg-accent rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
              }
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {liste.map((c) => (
            <Link
              key={c.id}
              to="/concours/$concoursId"
              params={{ concoursId: c.id }}
              className="group bg-card hover:border-primary/40 flex flex-col rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="bg-primary text-primary-foreground flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold">
                  {c.categorie}
                </span>
                <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  Filière {c.filiere}
                </span>
              </div>
              <h2 className="font-display mt-4 text-lg leading-snug font-bold">
                {c.title}
              </h2>
              <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                {c.tagline}
              </p>
              <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
                <span className="text-muted-foreground text-xs font-medium">
                  {c.themeIds.length} thèmes d'entraînement
                </span>
                <span className="text-primary inline-flex items-center gap-1 text-sm font-semibold">
                  Préparer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-muted-foreground mt-10 text-sm">
          {categorieLabels[filtre === "tous" ? "B" : filtre]}
        </p>
      </section>
    </div>
  );
}
