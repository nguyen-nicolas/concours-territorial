import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";

/**
 * Concours que l'utilisateur connecté a choisi de préparer (colonne profiles.concours_id).
 * Partagé par l'accueil, la page concours et les quiz pour personnaliser le parcours.
 * La clé commence par "profil" : toute mise à jour depuis « Mon espace » la rafraîchit aussi.
 */
export function useConcoursChoisi() {
  const { user, loading } = useSession();
  const queryClient = useQueryClient();
  const userId = user?.id;

  const requete = useQuery({
    queryKey: ["profil", "concours", userId],
    enabled: Boolean(userId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("concours_id")
        .eq("id", userId!)
        .maybeSingle();
      if (error) throw error;
      return data?.concours_id ?? null;
    },
  });

  async function choisir(concoursId: string | null): Promise<boolean> {
    if (!userId) return false;
    const { error } = await supabase
      .from("profiles")
      .update({ concours_id: concoursId })
      .eq("id", userId);
    if (error) {
      console.error("[Profil] enregistrement du concours impossible :", error.message);
      return false;
    }
    await queryClient.invalidateQueries({ queryKey: ["profil"] });
    return true;
  }

  return {
    connecte: Boolean(userId),
    chargement: loading || requete.isLoading,
    concoursId: requete.data ?? null,
    choisir,
  };
}
