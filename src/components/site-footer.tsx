import { Link } from "@tanstack/react-router";

/** Pied de page commun : liens de confiance (mentions, confidentialité, contact) et soutien. */
export function SiteFooter({ largeur = "max-w-6xl" }: { largeur?: string }) {
  const lienClass = "hover:text-foreground underline-offset-4 transition-colors hover:underline";
  return (
    <footer className="border-border border-t">
      <div
        className={`text-muted-foreground mx-auto flex ${largeur} flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:px-6`}
      >
        <div className="text-center sm:text-left">
          <p>Prépa Territoriale — s'informer, se former, réussir.</p>
          <p className="mt-1 text-xs">
            Site indépendant de préparation. Contenus d'entraînement, sans valeur réglementaire.
          </p>
        </div>
        <nav
          aria-label="Informations légales"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2"
        >
          <Link to="/mentions-legales" className={lienClass}>
            Mentions légales
          </Link>
          <Link to="/confidentialite" className={lienClass}>
            Confidentialité
          </Link>
          <Link to="/contact" className={lienClass}>
            Contact
          </Link>
          <Link to="/soutenir" className={lienClass}>
            Soutenir le projet
          </Link>
        </nav>
      </div>
    </footer>
  );
}
