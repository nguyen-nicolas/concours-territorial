import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useSession } from "@/hooks/useSession";

/**
 * Niveau d'accès au contenu :
 * - "chargement" : la session ou le profil sont en cours de lecture ;
 * - "visiteur"   : personne n'est connecté ;
 * - "en-attente" : connecté, mais compte pas encore validé (is_approved = false) ;
 * - "valide"     : compte validé, accès à tout le contenu.
 */
export type StatutAcces = "chargement" | "visiteur" | "en-attente" | "valide";

export function useAcces(): StatutAcces {
  const { user, loading } = useSession();
  const userId = user?.id;

  const requete = useQuery({
    queryKey: ["profil", "acces", userId],
    enabled: Boolean(userId),
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("is_approved")
        .eq("id", userId!)
        .maybeSingle();
      if (error) throw error;
      return data?.is_approved === true;
    },
  });

  if (loading) return "chargement";
  if (!userId) return "visiteur";
  if (requete.isLoading) return "chargement";
  return requete.data ? "valide" : "en-attente";
}
