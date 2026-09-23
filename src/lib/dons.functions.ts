import { createServerFn } from "@tanstack/react-start";
import {
  type StripeEnv,
  createStripeClient,
  getStripeErrorMessage,
} from "@/lib/stripe.server";

type DonCheckoutResult = { clientSecret: string } | { error: string };

export const createDonCheckout = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      amountInCents: number;
      customerEmail?: string;
      returnUrl: string;
      environment: StripeEnv;
    }) => {
      if (
        !Number.isInteger(data.amountInCents) ||
        data.amountInCents < 100 ||
        data.amountInCents > 500000
      ) {
        throw new Error(
          "Le montant doit être compris entre 1 € et 5 000 €.",
        );
      }
      if (
        data.customerEmail &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.customerEmail)
      ) {
        throw new Error("Adresse e-mail invalide.");
      }
      return data;
    },
  )
  .handler(async ({ data }): Promise<DonCheckoutResult> => {
    try {
      const stripe = createStripeClient(data.environment);
      const montant = (data.amountInCents / 100).toFixed(2).replace(".", ",");
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: "Don — Prépa Territoriale",
                description:
                  "Soutien au développement de la plateforme d'entraînement aux concours territoriaux",
              },
              unit_amount: data.amountInCents,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        ui_mode: "embedded_page",
        return_url: data.returnUrl,
        payment_intent_data: {
          description: `Don de ${montant} € — Prépa Territoriale`,
        },
        ...(data.customerEmail && { customer_email: data.customerEmail }),
      });
      return { clientSecret: session.client_secret ?? "" };
    } catch (error) {
      return { error: getStripeErrorMessage(error) };
    }
  });
