import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2, Mail, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { SiteHeader } from "@/components/site-header";
import { useSession } from "@/hooks/useSession";

export const Route = createFileRoute("/auth")({
  head: () => {
    const title = "Créer un compte ou se connecter | Prépa Territoriale";
    const description =
      "Créez votre compte Prépa Territoriale pour enregistrer votre progression, vos scores et le concours que vous préparez.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const { session, loading } = useSession();
  const [mode, setMode] = useState<"connexion" | "inscription">("inscription");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && session) {
      navigate({ to: "/mon-espace", replace: true });
    }
  }, [loading, session, navigate]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setPending(true);
    setErreur(null);
    setMessage(null);

    if (mode === "inscription") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
          data: { prenom },
        },
      });
      if (error) {
        setErreur(traduire(error.message));
      } else if (!data.session) {
        setMessage(
          "Compte créé. Ouvrez votre boîte mail et cliquez sur le lien de confirmation pour activer votre espace.",
        );
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setErreur(traduire(error.message));
    }

    setPending(false);
  }

  async function handleGoogle() {
    setErreur(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setErreur("La connexion avec Google n'a pas abouti. Réessayez dans un instant.");
      return;
    }
  }

  return (
    <div className="bg-background flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-md flex-1 px-4 py-12">
        <Link
          to="/"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </Link>

        <h1 className="font-display mt-6 text-3xl font-bold">
          {mode === "inscription" ? "Créer votre compte" : "Se connecter"}
        </h1>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          Votre progression, vos scores et le concours que vous préparez sont enregistrés
          et vous suivent sur tous vos appareils.
        </p>

        <button
          type="button"
          onClick={handleGoogle}
          className="border-border hover:bg-accent mt-8 flex w-full items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
        >
          Continuer avec Google
        </button>

        <div className="my-6 flex items-center gap-3">
          <span className="bg-border h-px flex-1" />
          <span className="text-muted-foreground text-xs uppercase">ou par e-mail</span>
          <span className="bg-border h-px flex-1" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "inscription" && (
            <div>
              <label htmlFor="prenom" className="mb-1.5 block text-sm font-medium">
                Prénom ou pseudo
              </label>
              <input
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
                autoComplete="given-name"
                className="border-input bg-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Adresse e-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="border-input bg-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              autoComplete={mode === "inscription" ? "new-password" : "current-password"}
              className="border-input bg-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
            />
            {mode === "inscription" && (
              <p className="text-muted-foreground mt-1.5 text-xs">8 caractères minimum.</p>
            )}
          </div>

          {erreur && (
            <p className="text-destructive rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm">
              {erreur}
            </p>
          )}
          {message && (
            <p className="text-success flex gap-2 rounded-md border border-success/30 bg-success/5 px-3 py-2 text-sm">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{message}</span>
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60"
          >
            {pending && <Loader2 className="h-4 w-4 animate-spin" />}
            {mode === "inscription" ? "Créer mon compte" : "Me connecter"}
          </button>
        </form>

        <p className="text-muted-foreground mt-6 text-center text-sm">
          {mode === "inscription" ? "Vous avez déjà un compte ?" : "Pas encore de compte ?"}{" "}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "inscription" ? "connexion" : "inscription");
              setErreur(null);
              setMessage(null);
            }}
            className="text-primary font-semibold underline-offset-4 hover:underline"
          >
            {mode === "inscription" ? "Se connecter" : "Créer un compte"}
          </button>
        </p>
      </main>
    </div>
  );
}

function traduire(message: string) {
  if (message.includes("Invalid login credentials"))
    return "E-mail ou mot de passe incorrect.";
  if (message.includes("already registered"))
    return "Un compte existe déjà avec cette adresse. Connectez-vous.";
  if (message.includes("Email not confirmed"))
    return "Votre adresse n'est pas encore confirmée : cliquez sur le lien reçu par e-mail.";
  if (message.includes("not allowed") || message.includes("Placeholder"))
    return "Cette adresse e-mail n'est pas acceptée. Utilisez une adresse réelle capable de recevoir le message de confirmation.";
  if (message.includes("known to be weak") || message.includes("easy to guess"))
    return "Ce mot de passe est trop courant et a déjà fuité sur Internet : choisissez-en un autre, plus personnel.";
  if (message.toLowerCase().includes("password"))
    return "Mot de passe trop court : 8 caractères minimum.";
  return "Une erreur est survenue. Réessayez dans un instant.";
}
