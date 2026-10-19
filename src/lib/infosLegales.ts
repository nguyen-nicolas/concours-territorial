/**
 * Informations légales du site, utilisées par les pages Mentions légales, Confidentialité et Contact.
 *
 * ⚠️ À COMPLÉTER AVANT PUBLICATION : remplacez chaque valeur « À compléter » par la vraie information.
 * Tant qu'une valeur contient « À compléter », elle s'affiche telle quelle sur le site.
 */
export const infosLegales = {
  /** Nom et prénom de la personne qui édite le site (ou raison sociale de l'entreprise). */
  editeur: "Nicolas Nguyen",

  /**
   * Statut de l'éditeur, par exemple « Particulier » tant que rien n'est vendu,
   * puis « Entrepreneur individuel (micro-entreprise) » quand les abonnements seront lancés.
   */
  statut: "Particulier",

  /** Numéro SIRET : obligatoire dès que l'activité est commerciale. Laisser "" s'il n'y en a pas encore. */
  siret: "",

  /** Adresse postale de l'éditeur (obligatoire pour une activité professionnelle). Laisser "" sinon. */
  adresse: "",

  /** Adresse e-mail de contact, affichée sur le site. */
  email: "nc",

  /** Personne responsable des contenus publiés (en général, l'éditeur lui-même). */
  directeurPublication: "IA",

  /** Date de dernière mise à jour des pages légales. */
  miseAJour: "19 octobre 2026",

  /** Hébergeur du site et de la base de données. */
  hebergeur: {
    nom: "Lovable Labs Incorporated",
    adresse: "1111b South Governors Avenue, Dover, DE 19904, États-Unis",
    site: "https://lovable.dev",
  },
};

/** Vrai si une information n'a pas encore été renseignée. */
export function aCompleter(valeur: string): boolean {
  return valeur.trim() === "" || valeur.startsWith("À compléter");
}
