import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarDays, ExternalLink } from "lucide-react";
import type { Concours } from "@/lib/concours";
import {
  planAgentMaitrise,
  planAtsem,
  planGenerique,
  type LienPlan,
  type TachePlan,
} from "@/lib/planRevision";
import { depuisIso, useDateConcours, versIso } from "@/hooks/useDateConcours";
import { useSpecialiteAM } from "@/hooks/useSpecialiteAM";

const JOUR = 24 * 60 * 60 * 1000;
const SEMAINES_VISIBLES = 3;

function formatDate(d: Date, avecAnnee = true): string {
  return d.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    ...(avecAnnee ? { year: "numeric" } : {}),
  });
}

function Tache({ tache, concoursId }: { tache: TachePlan; concoursId: string }) {
  const lien: LienPlan | undefined = tache.lien;
  const classe = "text-primary underline-offset-4 hover:underline";
  if (!lien) return <span>{tache.libelle}</span>;
  switch (lien.type) {
    case "cours":
      return (
        <Link to="/cours-agent-maitrise/$coursId" params={{ coursId: lien.id }} className={classe}>
          {tache.libelle}
        </Link>
      );
    case "quiz":
      return (
        <Link
          to="/quiz/$themeId"
          params={{ themeId: lien.id }}
          search={{ concours: concoursId }}
          className={classe}
        >
          {tache.libelle}
        </Link>
      );
    case "qcm-atsem":
      return (
        <Link to="/qcm-atsem" className={classe}>
          {tache.libelle}
        </Link>
      );
    case "examen":
      return (
        <Link to="/examen-blanc-agent-maitrise" className={classe}>
          {tache.libelle}
        </Link>
      );
    case "cas":
      return (
        <Link
          to="/cas-pratique-agent-maitrise/$casId"
          params={{ casId: lien.id }}
          className={classe}
        >
          {tache.libelle}
        </Link>
      );
    case "epreuves-blanches":
      return (
        <Link to="/epreuves-blanches" className={classe}>
          {tache.libelle}
        </Link>
      );
    case "memo":
      return (
        <Link to="/memo" search={{ concours: concoursId }} className={classe}>
          {tache.libelle}
        </Link>
      );
    case "externe":
      return (
        <a
          href={lien.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${classe} inline-flex items-center gap-1`}
        >
          {tache.libelle}
          <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
        </a>
      );
  }
}

/** Compte à rebours jusqu'à l'épreuve et plan de révision adapté au temps restant. */
export function CompteARebours({ concours }: { concours: Concours }) {
  const { donnees, definir, effacer } = useDateConcours(concours.id);
  const { specialite } = useSpecialiteAM();
  const [aujourdhui, setAujourdhui] = useState<Date | null>(null);
  const [saisie, setSaisie] = useState("");
  const [toutVoir, setToutVoir] = useState(false);
  const [modification, setModification] = useState(false);

  useEffect(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    setAujourdhui(d);
  }, []);

  if (!aujourdhui) return null;

  const cible = donnees ? depuisIso(donnees.date) : null;
  const jours = cible ? Math.round((cible.getTime() - aujourdhui.getTime()) / JOUR) : null;
  const semaines = jours !== null && jours > 0 ? Math.ceil(jours / 7) : 0;
  const debut = donnees ? depuisIso(donnees.debut) : null;
  const total =
    cible && debut ? Math.max(1, Math.round((cible.getTime() - debut.getTime()) / JOUR)) : 1;
  const ecoule = debut
    ? Math.max(0, Math.round((aujourdhui.getTime() - debut.getTime()) / JOUR))
    : 0;
  const progression = Math.min(100, Math.round((ecoule / total) * 100));

  const plan =
    jours !== null && jours > 0
      ? concours.id === "agent-maitrise"
        ? planAgentMaitrise(semaines, specialite)
        : concours.id === "atsem"
          ? planAtsem(semaines)
          : planGenerique(semaines, concours)
      : [];
  const semainesAffichees = toutVoir ? plan : plan.slice(0, SEMAINES_VISIBLES);

  const demain = new Date(
    aujourdhui.getFullYear(),
    aujourdhui.getMonth(),
    aujourdhui.getDate() + 1,
  );
  const indicative = concours.dateIndicative;

  const enregistrer = (valeur: string) => {
    definir(valeur);
    setSaisie("");
    setModification(false);
  };

  const formulaire = (
    <div className="mt-4 space-y-3">
      <div className="flex flex-wrap items-end gap-3">
        <label className="text-sm font-medium">
          <span className="block">Date de votre épreuve</span>
          <input
            type="date"
            value={saisie}
            min={versIso(demain)}
            onChange={(e) => setSaisie(e.target.value)}
            className="border-border bg-background mt-1 rounded-lg border px-3 py-2 text-sm"
          />
        </label>
        <button
          type="button"
          disabled={!saisie}
          onClick={() => enregistrer(saisie)}
          className="bg-primary text-primary-foreground rounded-xl px-5 py-2.5 text-sm font-semibold transition hover:opacity-90 disabled:opacity-50"
        >
          Calculer mon plan
        </button>
        {modification && (
          <button
            type="button"
            onClick={() => setModification(false)}
            className="text-muted-foreground text-sm underline-offset-4 hover:underline"
          >
            Annuler
          </button>
        )}
      </div>
      {indicative && depuisIso(indicative.date) && (
        <p className="text-muted-foreground text-sm leading-relaxed">
          Date indicative publiée : {indicative.libelle},{" "}
          <button
            type="button"
            onClick={() => enregistrer(indicative.date)}
            className="text-primary font-semibold underline-offset-4 hover:underline"
          >
            utiliser le {formatDate(depuisIso(indicative.date)!)}
          </button>
          . Les dates varient selon le centre de gestion : vérifiez celle de votre convocation.
        </p>
      )}
    </div>
  );

  return (
    <section className="bg-card mb-12 rounded-2xl border p-6 shadow-sm">
      <h2 className="font-display flex items-center gap-2 text-xl font-bold">
        <CalendarDays className="text-primary h-5 w-5" aria-hidden="true" />
        Compte à rebours et plan de révision
      </h2>

      {!cible || modification ? (
        <>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Indiquez la date de votre épreuve : le plan de révision s'adapte au nombre de semaines
            restantes{concours.id === "agent-maitrise" ? " et à votre spécialité" : ""}. La date est
            mémorisée uniquement sur cet appareil.
          </p>
          {formulaire}
        </>
      ) : jours !== null && jours <= 0 ? (
        <div className="mt-3">
          <p className="text-foreground text-sm font-semibold">
            {jours === 0
              ? "C'est aujourd'hui : bon courage !"
              : "La date que vous aviez indiquée est passée."}
          </p>
          <div className="mt-3 flex gap-4 text-sm">
            <button
              type="button"
              onClick={() => setModification(true)}
              className="text-primary font-semibold underline-offset-4 hover:underline"
            >
              Choisir une nouvelle date
            </button>
            <button
              type="button"
              onClick={effacer}
              className="text-muted-foreground underline-offset-4 hover:underline"
            >
              Effacer
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-4 flex flex-wrap items-end gap-x-8 gap-y-2">
            <div>
              <p className="text-primary font-display text-5xl leading-none font-bold">J-{jours}</p>
              <p className="text-muted-foreground mt-2 text-sm">
                {semaines} semaine{semaines > 1 ? "s" : ""} avant l'épreuve du {formatDate(cible!)}
              </p>
            </div>
          </div>
          <div
            className="bg-secondary mt-4 h-2 overflow-hidden rounded-full"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progression}
            aria-label="Temps écoulé depuis le début de la préparation"
          >
            <div className="bg-primary h-full rounded-full" style={{ width: `${progression}%` }} />
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <button
              type="button"
              onClick={() => setModification(true)}
              className="text-primary font-semibold underline-offset-4 hover:underline"
            >
              Modifier la date
            </button>
            <button
              type="button"
              onClick={effacer}
              className="text-muted-foreground underline-offset-4 hover:underline"
            >
              Effacer
            </button>
          </div>

          {semaines <= 4 && (
            <p className="bg-secondary/60 text-foreground mt-5 rounded-xl px-4 py-3 text-sm leading-relaxed">
              Il reste peu de temps : le plan se concentre sur l'essentiel. Mieux vaut maîtriser les
              thèmes qui reviennent le plus que tout survoler.
            </p>
          )}

          <ol className="mt-6 space-y-5">
            {semainesAffichees.map((s) => {
              const debutSemaine = new Date(
                aujourdhui.getFullYear(),
                aujourdhui.getMonth(),
                aujourdhui.getDate() + (s.numero - 1) * 7,
              );
              return (
                <li key={s.numero} className="border-border border-l-2 pl-4">
                  <p className="text-muted-foreground text-xs font-semibold tracking-[0.12em] uppercase">
                    {s.numero === 1 ? "Cette semaine" : `Semaine ${s.numero}`} · à partir du{" "}
                    {formatDate(debutSemaine, false)}
                  </p>
                  <h3 className="font-display text-foreground mt-1 text-base font-bold">
                    {s.phase}
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {s.taches.map((t, i) => (
                      <li
                        key={`${s.numero}-${i}`}
                        className="text-foreground/90 flex gap-2 text-sm leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="bg-primary mt-2 size-1.5 shrink-0 rounded-full"
                        />
                        <Tache tache={t} concoursId={concours.id} />
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>

          {plan.length > SEMAINES_VISIBLES && (
            <button
              type="button"
              onClick={() => setToutVoir((v) => !v)}
              className="text-primary mt-5 text-sm font-semibold underline-offset-4 hover:underline"
            >
              {toutVoir
                ? "Réduire le plan"
                : `Voir les ${plan.length - SEMAINES_VISIBLES} autres semaines`}
            </button>
          )}
        </>
      )}
    </section>
  );
}
