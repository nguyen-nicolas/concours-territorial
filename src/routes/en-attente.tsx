import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/en-attente")({
  head: () => ({
    meta: [
      { title: "Compte en attente de validation | Prépa Territoriale" },
    ],
  }),
  component: EnAttentePage,
});

function EnAttentePage() {
  async function seDeconnecter() {
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <span className="bg-secondary text-secondary-foreground flex h-14 w-14 items-center justify-center rounded-2xl">
          <Clock className="h-7 w-7" />
        </span>
        <h1 className="font-display mt-6 text-3xl font-bold">
          Votre compte est en attente de validation
        </h1>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Merci pour votre inscription&nbsp;! Votre espace personnel sera
          accessible dès que votre compte aura été validé, généralement en
          moins de 24&nbsp;heures. Revenez simplement vous connecter un peu
          plus tard.
        </p>
        <div className="bg-card mt-8 w-full rounded-2xl border p-6 text-left shadow-sm">
          <p className="font-display text-lg font-bold">
            En attendant, commencez à réviser
          </p>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Les quiz, les fiches mémo et les épreuves blanches sont déjà
            ouverts : choisissez votre concours pour trouver les bons thèmes.
          </p>
          <Link
            to="/concours"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:w-auto"
          >
            Choisir mon concours
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            Retour à l'accueil
          </Link>
          <button
            type="button"
            onClick={seDeconnecter}
            className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Se déconnecter
          </button>
        </div>
      </main>
    </div>
  );
}
