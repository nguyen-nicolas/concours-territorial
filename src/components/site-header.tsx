import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Landmark, GraduationCap, UserRound, Heart, Menu, ChevronDown } from "lucide-react";
import { useSession } from "@/hooks/useSession";
import { useSignalerSiEnAttente } from "@/hooks/useAcces";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Lien = { to: string; label: string; hash?: string; description?: string };
type Groupe = { label: string; liens: Lien[] };

/**
 * Navigation organisée en deux intentions : s'entraîner (tester ses connaissances)
 * et réviser (apprendre). Les mêmes groupes servent au menu d'ordinateur et au menu mobile.
 */
const GROUPES: Groupe[] = [
  {
    label: "S'entraîner",
    liens: [
      {
        to: "/concours",
        label: "Choisir mon concours",
        description: "Les quiz adaptés à votre concours",
      },
      {
        to: "/",
        hash: "themes",
        label: "Tous les quiz",
        description: "Toutes les matières, par thème",
      },
      {
        to: "/epreuves-blanches",
        label: "Épreuves blanches",
        description: "Sujets complets et chronométrés",
      },
    ],
  },
  {
    label: "Réviser",
    liens: [
      { to: "/memo", label: "Fiches mémo", description: "L'essentiel à retenir, par concours" },
      { to: "/methode", label: "Méthode", description: "Note, synthèse, rapport : les techniques" },
      {
        to: "/culture",
        label: "Culture générale",
        description: "Dossiers thématiques approfondis",
      },
      { to: "/francais", label: "Français", description: "Orthographe, grammaire, dictées" },
      { to: "/maths", label: "Mathématiques", description: "Cours du niveau de base à l'expert" },
      {
        to: "/savoir-repondre",
        label: "Répondre quand on ne sait pas",
        description: "Garder ses moyens à l'écrit et à l'oral",
      },
    ],
  },
];

const LIEN_DON: Lien = { to: "/soutenir", label: "Soutenir le projet" };

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const { session } = useSession();
  const [open, setOpen] = useState(false);
  useSignalerSiEnAttente();

  const triggerClass = dark
    ? "hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/10 inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors"
    : "text-muted-foreground hover:text-foreground hover:bg-accent data-[state=open]:bg-accent data-[state=open]:text-foreground inline-flex items-center gap-1 whitespace-nowrap rounded-md px-3 py-2 text-sm transition-colors";

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

        {/* Ordinateur : deux menus déroulants, « S'entraîner » et « Réviser » */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {GROUPES.map((groupe) => (
            <DropdownMenu key={groupe.label} modal={false}>
              <DropdownMenuTrigger className={triggerClass}>
                {groupe.label}
                <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72 p-1.5">
                {groupe.liens.map((lien) => (
                  <DropdownMenuItem
                    key={lien.label}
                    asChild
                    className="cursor-pointer rounded-md px-3 py-2"
                  >
                    <Link to={lien.to} {...(lien.hash ? { hash: lien.hash } : {})}>
                      <span className="flex flex-col gap-0.5">
                        <span className="text-foreground text-sm font-medium">{lien.label}</span>
                        {lien.description && (
                          <span className="text-muted-foreground text-xs">{lien.description}</span>
                        )}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
            <span className="hidden sm:inline">{session ? "Mon espace" : "Se connecter"}</span>
          </Link>

          {/* Mobile et tablette : menu latéral avec les mêmes groupes */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Ouvrir le menu"
              className={
                dark
                  ? "hover:bg-primary-foreground/10 inline-flex items-center justify-center rounded-md p-2.5 transition-colors lg:hidden"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent inline-flex items-center justify-center rounded-md p-2.5 transition-colors lg:hidden"
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(20rem,90vw)] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="font-display text-left text-lg">Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Menu" className="mt-2 flex flex-col px-4 pb-8">
                {GROUPES.map((groupe) => (
                  <div key={groupe.label} className="mt-4 first:mt-0">
                    <p className="text-muted-foreground px-3 pb-1 text-xs font-semibold tracking-wide uppercase">
                      {groupe.label}
                    </p>
                    {groupe.liens.map((lien) => (
                      <Link
                        key={lien.label}
                        to={lien.to}
                        {...(lien.hash ? { hash: lien.hash } : {})}
                        onClick={() => setOpen(false)}
                        className="text-foreground hover:bg-accent block rounded-lg px-3 py-2.5 font-sans text-sm transition-colors"
                      >
                        {lien.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  to={session ? "/mon-espace" : "/auth"}
                  onClick={() => setOpen(false)}
                  className="bg-primary text-primary-foreground mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-sans text-sm font-semibold"
                >
                  <UserRound className="h-4 w-4" />
                  {session ? "Mon espace" : "Se connecter"}
                </Link>
                <Link
                  to={LIEN_DON.to}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground mt-4 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs transition-colors"
                >
                  <Heart className="h-3.5 w-3.5" />
                  {LIEN_DON.label}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
