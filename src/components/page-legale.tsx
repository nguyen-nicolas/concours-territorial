import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/** Gabarit commun aux pages d'information (mentions légales, confidentialité, contact). */
export function PageLegale({
  surtitre,
  titre,
  intro,
  children,
}: {
  surtitre: string;
  titre: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">{surtitre}</p>
        <h1 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{titre}</h1>
        {intro && <p className="text-muted-foreground mt-3 text-base leading-relaxed">{intro}</p>}
        <div className="mt-10 space-y-10">{children}</div>
      </main>
      <SiteFooter largeur="max-w-3xl" />
    </div>
  );
}

export function SectionLegale({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold">{titre}</h2>
      <div className="text-muted-foreground mt-3 space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
