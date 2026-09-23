import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { GraduationCap, LogOut, Loader2, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/site-header";
import { concoursList, getConcours } from "@/lib/concours";
import { getTheme } from "@/lib/quizData";

export const Route = createFileRoute("/_authenticated/mon-espace")({
  head: () => ({
    meta: [
      { title: "Mon espace | Prépa Territoriale" },
      {
        name: "description",
        content:
          "Retrouvez votre progression, vos scores de quiz et le concours que vous préparez.",
      },
      { property: "og:title", content: "Mon espace | Prépa Territoriale" },
      {
        property: "og:description",
        content: "Votre progression et vos résultats de quiz enregistrés.",
      },
    ],
  }),
  component: MonEspace,
});

function MonEspace() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [enregistrement, setEnregistrement] = useState(false);

  const profil = useQuery({
    queryKey: ["profil"],
    queryFn: async () => {
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData.user?.id;
      if (!userId) return null;
      const { data, error } = await supabase
        .from("profiles")
        .select("id, prenom, concours_id")
        .eq("id", userId)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  const resultats = useQuery({
    queryKey: ["resultats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("quiz_resultats")
        .select("id, theme_id, score, total, created_at")
        .order("created_at", { ascending: false })
        .limit(20);
      if (error) throw error;
      return data ?? [];
    },
  });

  const [concoursId, setConcoursId] = useState("");
  useEffect(() => {
    if (profil.data?.concours_id) setConcoursId(profil.data.concours_id);
  }, [profil.data?.concours_id]);

  async function enregistrerConcours(value: string) {
    setConcoursId(value);
    setEnregistrement(true);
    const { data: userData } = await supabase.auth.getUser();
    const userId = userData.user?.id;
    if (userId) {
      await supabase
        .from("profiles")
        .update({ concours_id: value || null })
        .eq("id", userId);
      await queryClient.invalidateQueries({ queryKey: ["profil"] });
    }
    setEnregistrement(false);
  }

  async function seDeconnecter() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const concoursChoisi = concoursId ? getConcours(concoursId) : undefined;
  const liste = resultats.data ?? [];
  const moyenne =
    liste.length > 0
      ? Math.round(
          (liste.reduce((sum, r) => sum + r.score / Math.max(r.total, 1), 0) /
            liste.length) *
            100,
        )
      : null;

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-bold">
              Bonjour {profil.data?.prenom || "et bienvenue"}
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
              Votre progression est enregistrée automatiquement à la fin de chaque quiz.
            </p>
          </div>
          <button
            onClick={seDeconnecter}
            className="border-border hover:bg-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Se déconnecter
          </button>
        </div>

        <section className="border-border mt-8 rounded-xl border p-6">
          <h2 className="font-display flex items-center gap-2 text-lg font-bold">
            <GraduationCap className="text-primary h-5 w-5" />
            Le concours que je prépare
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <select
              value={concoursId}
              onChange={(e) => enregistrerConcours(e.target.value)}
              className="border-input bg-background focus:ring-ring rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
            >
              <option value="">Choisir un concours…</option>
              {concoursList.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} (catégorie {c.categorie})
                </option>
              ))}
            </select>
            {enregistrement && (
              <Loader2 className="text-muted-foreground h-4 w-4 animate-spin" />
            )}
            {concoursChoisi && (
              <Link
                to="/concours/$concoursId"
                params={{ concoursId: concoursChoisi.id }}
                className="text-primary text-sm font-semibold underline-offset-4 hover:underline"
              >
                Voir mon programme
              </Link>
            )}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-display flex items-center gap-2 text-lg font-bold">
            <Trophy className="text-primary h-5 w-5" />
            Mes derniers quiz
            {moyenne !== null && (
              <span className="text-muted-foreground text-sm font-normal">
                — moyenne {moyenne}%
              </span>
            )}
          </h2>

          {resultats.isLoading ? (
            <p className="text-muted-foreground mt-4 text-sm">Chargement…</p>
          ) : liste.length === 0 ? (
            <div className="border-border mt-4 rounded-xl border border-dashed p-6 text-center">
              <p className="text-muted-foreground text-sm">
                Aucun quiz terminé pour l'instant.
              </p>
              <Link
                to="/concours"
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                Commencer un entraînement
              </Link>
            </div>
          ) : (
            <ul className="mt-4 space-y-2">
              {liste.map((r) => {
                const theme = getTheme(r.theme_id);
                const pct = Math.round((r.score / Math.max(r.total, 1)) * 100);
                return (
                  <li
                    key={r.id}
                    className="border-border flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3"
                  >
                    <div>
                      <p className="font-medium">{theme?.title ?? r.theme_id}</p>
                      <p className="text-muted-foreground text-xs">
                        {new Date(r.created_at).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <span
                      className={
                        pct >= 80
                          ? "text-success font-display text-lg font-bold"
                          : pct >= 50
                            ? "font-display text-lg font-bold"
                            : "text-destructive font-display text-lg font-bold"
                      }
                    >
                      {r.score}/{r.total}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
