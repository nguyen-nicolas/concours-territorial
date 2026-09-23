const clientToken = import.meta.env.VITE_PAYMENTS_CLIENT_TOKEN;

export function PaymentTestModeBanner() {
  if (!clientToken) {
    return (
      <div className="w-full border-b border-destructive/30 bg-destructive/10 px-4 py-2 text-center text-sm text-destructive">
        Les paiements ne sont pas encore configurés en production.
      </div>
    );
  }
  if (clientToken.startsWith("pk_test_")) {
    return (
      <div className="w-full border-b border-accent bg-accent/50 px-4 py-2 text-center text-sm text-accent-foreground">
        Les dons effectués dans l'aperçu sont en mode test : aucun montant n'est
        réellement débité.
      </div>
    );
  }
  return null;
}
