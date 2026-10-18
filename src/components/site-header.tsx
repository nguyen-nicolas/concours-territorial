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

type NavLink = { to: string; label: string; hash?: string };

const NAV: NavLink[] = [
  { to: "/", label: "Accueil" },
  { to: "/concours", label: "Les concours" },
  { to: "/", label: "Les thèmes", hash: "themes" },
  { to: "/epreuves-blanches", label: "Épreuves blanches" },
  { to: "/memo", label: "Fiches mémo" },
  { to: "/francais", label: "Français" },
  { to: "/maths", label: "Mathématiques" },
  { to: "/methode", label: "Méthode" },
  { to: "/savoir-repondre", label: "Face à l'inconnu" },
  { to: "/culture", label: "Culture générale" },
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

        {/* Navigation complète : uniquement sur très grands écrans */}
        <nav className="hidden min-w-0 items-center gap-1 overflow-hidden 2xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...(item.hash ? { hash: item.hash } : {})}
              className={linkClass}
            >
              {item.label === "Faire un don" ? (
                <span className="inline-flex items-center gap-1.5">
                  <Heart className="h-4 w-4" />
                  {item.label}
                </span>
              ) : (
                item.label
              )}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/concours"
            className={
              dark
                ? "hover:bg-primary-foreground/10 hidden items-center gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors md:inline-flex 2xl:hidden"
                : "text-muted-foreground hover:text-foreground hover:bg-accent hidden items-center gap-2 rounded-md px-3 py-2 text-sm whitespace-nowrap transition-colors md:inline-flex 2xl:hidden"
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

          {/* Menu complet accessible sur toutes les tailles sous xl */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Ouvrir le menu"
              className={
                dark
                  ? "hover:bg-primary-foreground/10 inline-flex items-center justify-center rounded-md p-2.5 transition-colors 2xl:hidden"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent inline-flex items-center justify-center rounded-md p-2.5 transition-colors 2xl:hidden"
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
                    className="text-foreground hover:bg-accent rounded-lg px-3 py-3 font-sans text-sm transition-colors"
                  >
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
