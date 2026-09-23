import { Link } from "@tanstack/react-router";
import { Landmark, GraduationCap, UserRound } from "lucide-react";
import { useSession } from "@/hooks/useSession";

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const { session } = useSession();
  return (
    <header
      className={
        dark
          ? "bg-primary text-primary-foreground"
          : "bg-background/90 supports-[backdrop-filter]:bg-background/75 border-b backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span
            className={
              dark
                ? "bg-primary-foreground/15 flex h-10 w-10 items-center justify-center rounded-full"
                : "bg-primary flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground"
            }
          >
            <Landmark className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-lg font-bold tracking-tight">
              Prépa Territoriale
            </span>
            <span
              className={
                dark
                  ? "block text-[11px] tracking-wide uppercase opacity-75"
                  : "text-muted-foreground block text-[11px] tracking-wide uppercase"
              }
            >
              Concours & formation
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/"
            className={
              dark
                ? "hover:bg-primary-foreground/10 hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
                : "text-muted-foreground hover:text-foreground hover:bg-accent hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
            }
          >
            Accueil
          </Link>
          <Link
            to="/concours"
            className={
              dark
                ? "hover:bg-primary-foreground/10 hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
                : "text-muted-foreground hover:text-foreground hover:bg-accent hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
            }
          >
            Les concours
          </Link>
          <Link
            to="/"
            hash="themes"
            className={
              dark
                ? "hover:bg-primary-foreground/10 hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
                : "text-muted-foreground hover:text-foreground hover:bg-accent hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
            }
          >
            Les thèmes
          </Link>
          <Link
            to="/francais"
            className={
              dark
                ? "hover:bg-primary-foreground/10 hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
                : "text-muted-foreground hover:text-foreground hover:bg-accent hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
            }
          >
            Français
          </Link>
          <Link
            to="/maths"
            className={
              dark
                ? "hover:bg-primary-foreground/10 hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
                : "text-muted-foreground hover:text-foreground hover:bg-accent hidden rounded-md px-3 py-2 text-sm transition-colors sm:block"
            }
          >
            Mathématiques
          <Link
            to="/concours"
            className={
              dark
                ? "hover:bg-primary-foreground/10 hidden rounded-md px-3 py-2 text-sm transition-colors sm:inline-flex sm:items-center sm:gap-2"
                : "text-muted-foreground hover:text-foreground hover:bg-accent hidden rounded-md px-3 py-2 text-sm transition-colors sm:inline-flex sm:items-center sm:gap-2"
            }
          >
            <GraduationCap className="h-4 w-4" />
            S'entraîner
          </Link>
          <Link
            to={session ? "/mon-espace" : "/auth"}
            className={
              dark
                ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors"
                : "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            }
          >
            <UserRound className="h-4 w-4" />
            {session ? "Mon espace" : "Se connecter"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
