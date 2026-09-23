import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpenCheck, Headphones, PenLine, SpellCheck2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { dictees } from "@/lib/dicteeData";
import { francaisThemes } from "@/lib/francaisQuiz";

const title = "Épreuves de français — orthographe, grammaire et dictées | Prépa Territoriale";
const description =
  "Entraînez-vous aux épreuves de français des concours territoriaux : quiz d'orthographe, de grammaire et de conjugaison, dictées lues à voix haute et corrigées mot à mot.";

export const Route = createFileRoute("/francais/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FrancaisPage,
});

function FrancaisPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Maîtrise de la langue
        </p>
        <h1 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
          Les épreuves de français
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-lg text-muted-foreground">
          L'orthographe et la grammaire sont notées dans presque toutes les épreuves
          écrites, quel que soit le concours. Entraînez-vous ici phrase après phrase :
          chaque erreur est expliquée.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-2xl text-foreground">Quiz d'entraînement</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {francaisThemes.map((theme) => (
              <Link
                key={theme.id}
                to="/quiz/$themeId"
                params={{ themeId: theme.id }}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  {theme.id === "orthographe" ? (
                    <SpellCheck2 className="size-5" />
                  ) : (
                    <PenLine className="size-5" />
                  )}
                </span>
                <h3 className="mt-4 font-display text-xl text-foreground group-hover:text-primary">
                  {theme.title}
                </h3>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  {theme.description}
                </p>
                <p className="mt-4 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  {theme.level} · {theme.questions.length} questions en banque
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl text-foreground">Dictées</h2>
          <p className="mt-2 max-w-2xl font-sans text-sm text-muted-foreground">
            Le texte est lu à voix haute, phrase par phrase, à la vitesse que vous
            choisissez. Vous écrivez, puis la correction compare votre copie mot à mot.
          </p>
          <div className="mt-6 space-y-4">
            {dictees.map((dictee) => (
              <Link
                key={dictee.id}
                to="/francais/dictee/$dicteeId"
                params={{ dicteeId: dictee.id }}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition hover:border-primary hover:shadow-lg"
              >
                <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Headphones className="size-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-xl text-foreground group-hover:text-primary">
                    {dictee.title}
                  </span>
                  <span className="mt-2 block font-sans text-sm text-muted-foreground">
                    {dictee.intro}
                  </span>
                  <span className="mt-3 block font-sans text-xs uppercase tracking-wider text-muted-foreground">
                    {dictee.level} · {dictee.phrases.length} phrases · {dictee.duree}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8">
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpenCheck className="size-5" />
          </span>
          <h2 className="mt-4 font-display text-2xl text-foreground">
            Comment travailler efficacement
          </h2>
          <ul className="mt-4 space-y-3 font-sans text-sm text-muted-foreground">
            <li>
              1. Commencez par les quiz : ils ciblent les règles les plus souvent
              sanctionnées dans les copies.
            </li>
            <li>
              2. Passez ensuite à une dictée du même niveau et notez les mots qui vous
              résistent dans un carnet personnel.
            </li>
            <li>
              3. Refaites la même dictée deux jours plus tard : c'est la répétition
              espacée qui ancre l'orthographe.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
