import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Landmark,
  GraduationCap,
  UserRound,
  Heart,
  Menu,
} from "lucide-react";
import { useSession } from "@/hooks/useSession";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * `visible` : à partir de quelle largeur d'écran le lien apparaît directement dans la barre.
 * Sans `visible`, le lien n'est accessible que dans le menu (bouton ☰), présent à toutes les tailles.
 */
type NavLink = { to: string; label: string; hash?: string; visible?: "lg" | "xl" };

const NAV: NavLink[] = [
  { to: "/", label: "Accueil" },
  { to: "/concours", label: "Les concours", visible: "lg" },
  { to: "/", label: "Les thèmes", hash: "themes" },
  { to: "/epreuves-blanches", label: "Épreuves blanches", visible: "lg" },
  { to: "/memo", label: "Fiches mémo", visible: "lg" },
  { to: "/francais", label: "Français" },
  { to: "/maths", label: "Mathématiques" },
  { to: "/methode", label: "Méthode", visible: "xl" },
  { to: "/savoir-repondre", label: "Face à l'inconnu" },
  { to: "/culture", label: "Culture générale", visible: "xl" },
  { to: "/soutenir", label: "Faire un don" },
];

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const { session } = useSession();
  const [open, setOpen] = useState(false);

  const linkClass = dark
    ? "hover:bg-primary-foreground/10 whitespace-nowrap rounded-md px-2.5 py-2 text-sm transition-colors"
    : "text-muted-foreground hover:text-foreground hover:bg-accent whitespace-nowrap rounded-md px-2.5 py-2 text-sm transition-colors";

  return (
    <header
      className={
        dark
          ? "bg-primary text-primary-foreground"
          : "bg-background/90 supports-[backdrop-filter]:bg-background/75 border-b backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-7xl 2xl:max-w-[92rem] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span
            className={
              dark
                ? "bg-primary-foreground/15 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                : "bg-primary text-primary-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            }
          >
            <Landmark className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="font-display block whitespace-nowrap text-base font-bold tracking-tight sm:text-lg">
              Prépa Territoriale
            </span>
            <span
              className={
                dark
                  ? "hidden text-[11px] whitespace-nowrap tracking-wide uppercase opacity-75 sm:block"
                  : "text-muted-foreground hidden text-[11px] whitespace-nowrap tracking-wide uppercase sm:block"
              }
            >
              Concours & formation
            </span>
          </span>
        </Link>

        {/* Liens principaux visibles dès les écrans d'ordinateur portable ; le reste est dans le menu ☰ */}
        <nav aria-label="Navigation principale" className="hidden min-w-0 items-center gap-1 lg:flex">
          {NAV.filter((item) => item.visible).map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              className={`${linkClass} ${item.visible === "xl" ? "hidden xl:inline-flex" : "inline-flex"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/concours"
            className={
              dark
                ? "hover:bg-primary-foreground/10 hidden items-center gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors md:inline-flex lg:hidden"
                : "text-muted-foreground hover:text-foreground hover:bg-accent hidden items-center gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors md:inline-flex lg:hidden"
            }
          >
            <GraduationCap className="h-4 w-4" />
            S'entraîner
          </Link>

          <Link
            to={session ? "/mon-espace" : "/auth"}
            aria-label={session ? "Mon espace" : "Se connecter"}
            className={
              dark
                ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 inline-flex items-center gap-2 rounded-full p-2.5 text-sm font-semibold transition-colors sm:px-4 sm:py-2"
                : "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-full p-2.5 text-sm font-semibold transition-colors sm:px-4 sm:py-2"
            }
          >
            <UserRound className="h-4 w-4" />
            <span className="hidden sm:inline">
              {session ? "Mon espace" : "Se connecter"}
            </span>
          </Link>

          {/* Menu complet, accessible à toutes les tailles d'écran */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Ouvrir le menu"
              className={
                dark
                  ? "hover:bg-primary-foreground/10 inline-flex items-center justify-center rounded-md p-2.5 transition-colors"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent inline-flex items-center justify-center rounded-md p-2.5 transition-colors"
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,90vw)] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="font-display text-left text-lg">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1 px-4 pb-8">
                {NAV.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    {...(item.hash ? { hash: item.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="text-foreground hover:bg-accent inline-flex items-center gap-1.5 rounded-lg px-3 py-3 font-sans text-sm transition-colors"
                  >
                    {item.label === "Faire un don" && <Heart className="h-4 w-4" />}
                    {item.label}
                  </Link>
                ))}
                <Link
                  to={session ? "/mon-espace" : "/auth"}
                  onClick={() => setOpen(false)}
                  className="bg-primary text-primary-foreground mt-3 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-sans text-sm font-semibold"
                >
                  <UserRound className="h-4 w-4" />
                  {session ? "Mon espace" : "Se connecter"}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
