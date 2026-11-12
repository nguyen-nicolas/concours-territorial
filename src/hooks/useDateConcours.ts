import { useCallback, useEffect, useState } from "react";

interface DonneesDate {
  /** Date de l'épreuve, au format AAAA-MM-JJ. */
  date: string;
  /** Jour où la date a été enregistrée, au format AAAA-MM-JJ. */
  debut: string;
}

const prefixe = "prepa.dateConcours.";

/** Date locale au format AAAA-MM-JJ. */
export function versIso(d: Date): string {
  const mois = String(d.getMonth() + 1).padStart(2, "0");
  const jour = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mois}-${jour}`;
}

/** Date locale à minuit depuis une chaîne AAAA-MM-JJ, ou null si invalide. */
export function depuisIso(valeur: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valeur);
  if (!m) return null;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return Number.isNaN(d.getTime()) ? null : d;
}

/**
 * Date du concours choisie par la personne, mémorisée sur son appareil.
 * (Aucune donnée n'est envoyée au serveur.)
 */
export function useDateConcours(concoursId: string) {
  const [donnees, setDonnees] = useState<DonneesDate | null>(null);

  useEffect(() => {
    try {
      const brut = window.localStorage.getItem(prefixe + concoursId);
      if (!brut) return;
      const lu = JSON.parse(brut) as Partial<DonneesDate>;
      if (lu.date && depuisIso(lu.date) && lu.debut && depuisIso(lu.debut)) {
        setDonnees({ date: lu.date, debut: lu.debut });
      }
    } catch {
      /* stockage indisponible ou contenu illisible : on l'ignore */
    }
  }, [concoursId]);

  const definir = useCallback(
    (date: string) => {
      if (!depuisIso(date)) return;
      const nouveau: DonneesDate = { date, debut: versIso(new Date()) };
      setDonnees(nouveau);
      try {
        window.localStorage.setItem(prefixe + concoursId, JSON.stringify(nouveau));
      } catch {
        /* stockage indisponible */
      }
    },
    [concoursId],
  );

  const effacer = useCallback(() => {
    setDonnees(null);
    try {
      window.localStorage.removeItem(prefixe + concoursId);
    } catch {
      /* stockage indisponible */
    }
  }, [concoursId]);

  return { donnees, definir, effacer };
}
