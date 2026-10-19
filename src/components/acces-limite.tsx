import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Clock, Lock } from "lucide-react";
import { useAcces, type StatutAcces } from "@/hooks/useAcces";

/**
 * Encart qui invite à s'inscrire (visiteur) ou explique l'attente de validation (compte non validé).
 * N'affiche rien pendant le chargement ni pour un compte validé.
 */
export function VerrouContenu({
  statut,
  message,
}: {
  statut: StatutAcces;
  /** Ce que l'inscription débloque, par exemple « la fiche en entier ». */
  message: string;
}) {
  if (statut === "chargement" || statut === "valide") return null;

  if (statut === "en-attente") {
    return (
      <div className="bg-card mt-6 rounded-2xl border p-6 text-center shadow-sm">
        <Clock className="text-primary mx-auto h-6 w-6" aria-hidden="true" />
        <h2 className="font-display mt-3 text-xl font-bold">
          Votre compte est en cours de validation
        </h2>
        <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm leading-relaxed">
          Dès qu'il sera validé, en général sous 24 heures, vous aurez accès à {message}.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card mt-6 rounded-2xl border p-6 text-center shadow-sm">
      <Lock className="text-primary mx-auto h-6 w-6" aria-hidden="true" />
      <h2 className="font-display mt-3 text-xl font-bold">La suite est réservée aux inscrits</h2>
      <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm leading-relaxed">
        Créez votre compte gratuit pour accéder à {message}.
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <Link
          to="/auth"
          search={{ mode: "inscription" }}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
        >
          Créer mon compte gratuit
        </Link>
        <Link
          to="/auth"
          className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
        >
          J'ai déjà un compte
        </Link>
      </div>
    </div>
  );
}

/**
 * Affiche le contenu en entier pour un compte validé ; sinon, seulement le début
 * (coupé en fondu, non interactif) suivi de l'invitation à s'inscrire.
 */
export function ApercuLimite({
  children,
  message,
  hauteur = "26rem",
}: {
  children: ReactNode;
  message: string;
  /** Hauteur visible de l'aperçu. */
  hauteur?: string;
}) {
  const statut = useAcces();
  if (statut === "valide") return <>{children}</>;

  return (
    <div>
      <div className="relative">
        <div inert className="overflow-hidden select-none" style={{ maxHeight: hauteur }}>
          {children}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-background))" }}
        />
      </div>
      <VerrouContenu statut={statut} message={message} />
    </div>
  );
}
