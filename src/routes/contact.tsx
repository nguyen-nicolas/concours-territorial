import { createFileRoute, Link } from "@tanstack/react-router";
import { Bug, Mail, MessageCircle } from "lucide-react";
import { PageLegale } from "@/components/page-legale";
import { infosLegales } from "@/lib/infosLegales";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Prépa Territoriale" },
      {
        name: "description",
        content: "Une question, une erreur repérée dans un quiz ? Écrivez à Prépa Territoriale.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const email = infosLegales.email;
  const mailto = (sujet: string) => `mailto:${email}?subject=${encodeURIComponent(sujet)}`;
  const carteClass =
    "group bg-card hover:border-primary/40 flex gap-4 rounded-2xl border p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md";

  return (
    <PageLegale
      surtitre="Contact"
      titre="Une question ? Écrivez-moi"
      intro="Chaque message est lu personnellement. Réponse en général sous 48 heures ouvrées."
    >
      <div className="grid gap-4">
        <a href={mailto("Signalement d'une erreur — Prépa Territoriale")} className={carteClass}>
          <Bug className="text-primary mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>
            <span className="text-foreground block font-semibold">Signaler une erreur</span>
            <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
              Une question mal corrigée, une règle qui a changé ? Indiquez le thème et le début de
              la question : elle sera vérifiée et corrigée.
            </span>
          </span>
        </a>
        <a href={mailto("Mon compte — Prépa Territoriale")} className={carteClass}>
          <MessageCircle className="text-primary mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>
            <span className="text-foreground block font-semibold">Mon compte</span>
            <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
              Validation de l'accès, connexion, suppression du compte ou de vos données.
            </span>
          </span>
        </a>
        <a href={mailto("Question — Prépa Territoriale")} className={carteClass}>
          <Mail className="text-primary mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>
            <span className="text-foreground block font-semibold">Autre question</span>
            <span className="text-muted-foreground mt-1 block text-sm leading-relaxed">
              Une suggestion de thème, un concours à ajouter, une remarque sur le site.
            </span>
          </span>
        </a>
      </div>

      <p className="text-muted-foreground text-sm">
        Vous pouvez aussi écrire directement à{" "}
        <a href={`mailto:${email}`} className="text-primary underline-offset-4 hover:underline">
          {email}
        </a>
        . Pour savoir comment vos données sont utilisées, consultez la{" "}
        <Link to="/confidentialite" className="text-primary underline-offset-4 hover:underline">
          politique de confidentialité
        </Link>
        .
      </p>
    </PageLegale>
  );
}
