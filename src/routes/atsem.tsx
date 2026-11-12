import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Clock, ExternalLink, ListChecks, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CompteARebours } from "@/components/compte-a-rebours";
import { coursDeSpecialite } from "@/lib/coursAgentMaitrise";
import { casDeSpecialite } from "@/lib/casPratiquesAgentMaitrise";
import { concoursList } from "@/lib/concours";
import { questionsQcmAtsem } from "@/lib/qcmAtsem";

const title = "Préparer le concours d'ATSEM principal de 2e classe | Prépa Territoriale";
const description =
  "Cours, QCM à plusieurs bonnes réponses au barème officiel, cas pratiques et entretien : une préparation dédiée au concours d'ATSEM, d'après les notes de cadrage des centres de gestion.";

export const Route = createFileRoute("/atsem")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AtsemPage,
});

const DOCUMENTS = [
  {
    label:
      "Fiche du concours d'ATSEM, annales et rapports de jury (centres de gestion d'Auvergne-Rhône-Alpes)",
    url: "https://www.cdg-aura.fr/concours/agent-territorial-specialise-ecoles-maternelles-principal-2e-classe-0",
  },
  {
    label: "Note de cadrage : QCM du concours externe",
    url: "https://www.cdg-aura.fr/sites/default/files/Notes%20de%20cadrage/atsem-ext-cadrage-qcm_0.pdf",
  },
  {
    label: "Note de cadrage : 3 à 5 questions, concours interne et 3e concours",
    url: "https://www.cdg-aura.fr/sites/default/files/Notes%20de%20cadrage/atsem-int-3c-cadrage_3-5questions_1.pdf",
  },
  {
    label: "Note de cadrage : entretien avec le jury",
    url: "https://www.cdg-aura.fr/sites/default/files/Notes%20de%20cadrage/atsem-ext-int-3c-cadrage_entretien_0.pdf",
  },
  {
    label: "Sujet 2026 du QCM, concours externe",
    url: "https://www.cdg-aura.fr/sites/default/files/Annales/2026_cdg69-atsem_ext_sujet_qcm.pdf",
  },
  {
    label: "Sujet 2026 des questions, concours interne et 3e concours",
    url: "https://www.cdg-aura.fr/sites/default/files/Annales/2026_atsem_int_3c_sujet_questions.pdf",
  },
  {
    label: "Sujet 2025 du QCM, concours externe",
    url: "https://www.cdg-aura.fr/sites/default/files/Annales/2025_atsem_ext_sujet_qcm.pdf",
  },
  {
    label: "Sujet 2025 des questions, concours interne et 3e concours",
    url: "https://www.cdg-aura.fr/sites/default/files/Annales/2025_atsem_int_3c_sujet_questions.pdf",
  },
];

function AtsemPage() {
  const cours = coursDeSpecialite("atsem");
  const cas = casDeSpecialite("atsem");
  const concours = concoursList.find((c) => c.id === "atsem");

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
        <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
          Catégorie C · Filière médico-sociale
        </p>
        <h1 className="font-display text-foreground mt-3 text-4xl sm:text-5xl">
          Préparer le concours d'ATSEM
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
          Une préparation dédiée au concours d'agent territorial spécialisé principal de 2e classe
          des écoles maternelles : cours, QCM à plusieurs bonnes réponses, cas pratiques et
          entretien, d'après les notes de cadrage et les annales publiées par les centres de
          gestion.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-foreground text-2xl">Le concours en bref</h2>
          <div className="border-border mt-5 overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <thead className="bg-secondary/60">
                <tr>
                  <th className="px-4 py-3 font-semibold">Voie</th>
                  <th className="px-4 py-3 font-semibold">Admissibilité</th>
                  <th className="px-4 py-3 font-semibold">Admission</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-border border-t align-top">
                  <td className="px-4 py-3 font-medium">Externe (CAP AEPE)</td>
                  <td className="text-muted-foreground px-4 py-3">
                    20 questions à choix multiple : 45 minutes, coefficient 1
                  </td>
                  <td className="text-muted-foreground px-4 py-3">
                    Entretien de 15 minutes, coefficient 2
                  </td>
                </tr>
                <tr className="border-border border-t align-top">
                  <td className="px-4 py-3 font-medium">Interne et 3e concours</td>
                  <td className="text-muted-foreground px-4 py-3">
                    3 à 5 questions courtes sur dossier : 2 heures, coefficient 1
                  </td>
                  <td className="text-muted-foreground px-4 py-3">
                    Entretien de 20 minutes dont 5 d'exposé, coefficient 2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed">
            Toute note inférieure à 5 sur 20 est éliminatoire. Vérifiez l'arrêté d'ouverture de
            votre centre de gestion : seul ce texte fait foi. En Auvergne-Rhône-Alpes, le concours a
            lieu tous les deux ans, avec une prochaine session en 2028.
          </p>
        </section>

        {concours && (
          <section className="mt-12">
            <CompteARebours concours={concours} />
          </section>
        )}

        <section className="mt-4">
          <h2 className="font-display text-foreground flex items-center gap-2 text-2xl">
            <BookOpen className="text-primary size-6" aria-hidden="true" /> Les cours
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {cours.map((c) => (
              <Link
                key={c.id}
                to="/cours-agent-maitrise/$coursId"
                params={{ coursId: c.id }}
                className="group border-border bg-card hover:border-primary flex flex-col rounded-2xl border p-6 transition hover:shadow-lg"
              >
                <h3 className="font-display text-foreground group-hover:text-primary text-xl">
                  {c.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">{c.resume}</p>
                <p className="text-muted-foreground mt-auto flex items-center gap-1.5 pt-4 text-xs tracking-[0.1em] uppercase">
                  <Clock className="size-3.5" /> {c.duree}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-foreground flex items-center gap-2 text-2xl">
            <ListChecks className="text-primary size-6" aria-hidden="true" /> S'entraîner
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Link
              to="/qcm-atsem"
              className="group border-border bg-card hover:border-primary flex flex-col rounded-2xl border p-6 transition hover:shadow-lg"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.12em] uppercase">
                QCM · barème officiel
              </p>
              <h3 className="font-display text-foreground group-hover:text-primary mt-2 text-xl">
                QCM d'entraînement
              </h3>
              <p className="text-muted-foreground mt-2 text-sm">
                {questionsQcmAtsem.length} questions de mise en situation à plusieurs bonnes
                réponses : épreuve blanche de 20 questions en 45 minutes, ou entraînement par thème
                avec correction immédiate.
              </p>
            </Link>
            {cas.map((c) => (
              <Link
                key={c.id}
                to="/cas-pratique-agent-maitrise/$casId"
                params={{ casId: c.id }}
                className="group border-border bg-card hover:border-primary flex flex-col rounded-2xl border p-6 transition hover:shadow-lg"
              >
                <p className="text-primary text-xs font-semibold tracking-[0.12em] uppercase">
                  Questions sur dossier · 2 heures · noté sur 20
                </p>
                <h3 className="font-display text-foreground group-hover:text-primary mt-2 text-xl">
                  {c.titre}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">{c.resume}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-border mt-14 rounded-2xl border p-6">
          <h2 className="font-display text-foreground flex items-center gap-2 text-xl">
            <Target className="text-primary size-5" aria-hidden="true" /> Documents officiels
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Notes de cadrage et sujets publiés par les centres de gestion. Ces liens s'ouvrent sur
            leurs sites.
          </p>
          <ul className="mt-4 space-y-2.5">
            {DOCUMENTS.map((d) => (
              <li key={d.url} className="text-sm">
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
                >
                  {d.label}
                  <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
            Les questions et les cas du site sont rédigés par Prépa Territoriale à partir de ces
            documents. Les sujets officiels ne publient pas de corrigé : seuls les exemples des
            notes de cadrage ont des réponses officielles.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
