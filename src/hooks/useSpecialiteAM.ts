import { useCallback, useEffect, useState } from "react";
import { specialitesAM, type SpecialiteId } from "@/lib/specialitesAgentMaitrise";

const CLE = "prepa.specialiteAM";

/**
 * Spécialité d'agent de maîtrise choisie par la personne, mémorisée sur son appareil.
 * (Aucune donnée n'est envoyée au serveur.)
 */
export function useSpecialiteAM() {
  const [specialite, setSpecialite] = useState<SpecialiteId | null>(null);

  useEffect(() => {
    try {
      const valeur = window.localStorage.getItem(CLE);
      if (valeur && specialitesAM.some((s) => s.id === valeur)) {
        setSpecialite(valeur as SpecialiteId);
      }
    } catch {
      /* stockage indisponible : on garde la valeur en mémoire seulement */
    }
  }, []);

  const choisir = useCallback((id: SpecialiteId) => {
    setSpecialite(id);
    try {
      window.localStorage.setItem(CLE, id);
    } catch {
      /* stockage indisponible */
    }
  }, []);

  return { specialite, choisir };
}
