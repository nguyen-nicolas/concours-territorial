import { createFileRoute } from "@tanstack/react-router";
import { type StripeEnv, verifyWebhook } from "@/lib/stripe.server";

// Ce projet n'encaisse que des dons ponctuels (paiement unique) : aucun
// abonnement à suivre. Le webhook vérifie la signature de chaque
// événement et répond 200 pour éviter les renvois inutiles de Stripe.

async function handleWebhook(req: Request, env: StripeEnv) {
  const event = await verifyWebhook(req, env);

  switch (event.type) {
    case "checkout.session.completed": {
      // Pour un don en paiement unique, cet événement arrive une fois la
      // session validée. Le reçu est envoyé par Stripe lui-même.
      console.log("Don enregistré :", {
        env,
        sessionId: event.data.object.id,
        amount: event.data.object.amount_total,
      });
      break;
    }
    default:
      // Événements non gérés (annulation, expiration…) : on répond 200.
      console.log("Événement de paiement non géré :", event.type);
  }
}

export const Route = createFileRoute("/api/public/payments/webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const rawEnv = new URL(request.url).searchParams.get("env");
        if (rawEnv !== "sandbox" && rawEnv !== "live") {
          console.error(
            "Webhook reçu avec un paramètre env invalide ou manquant :",
            rawEnv,
          );
          return Response.json({ received: true, ignored: "invalid env" });
        }
        const env: StripeEnv = rawEnv;
        try {
          await handleWebhook(request, env);
          return Response.json({ received: true });
        } catch (e) {
          console.error("Erreur webhook :", e);
          return new Response("Webhook error", { status: 400 });
        }
      },
    },
  },
});
