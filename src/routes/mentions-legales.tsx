import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLegale, SectionLegale } from "@/components/page-legale";
import { aCompleter, infosLegales } from "@/lib/infosLegales";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | Prépa Territoriale" },
      {
        name: "description",
        content: "Éditeur, hébergeur et conditions d'utilisation du site Prépa Territoriale.",
      },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  const i = infosLegales;
  return (
    <PageLegale
      surtitre="Informations légales"
      titre="Mentions légales"
      intro={`Dernière mise à jour : ${i.miseAJour}.`}
    >
      <SectionLegale titre="Éditeur du site">
        <p>
          Le site Prépa Territoriale est édité par{" "}
          <strong className="text-foreground">{i.editeur}</strong>,{" "}
          {i.statut.charAt(0).toLowerCase() + i.statut.slice(1)}.
        </p>
        {!aCompleter(i.siret) && <p>Numéro SIRET : {i.siret}</p>}
        {!aCompleter(i.adresse) && <p>Adresse : {i.adresse}</p>}
        <p>
          Contact :{" "}
          <a href={`mailto:${i.email}`} className="text-primary underline-offset-4 hover:underline">
            {i.email}
          </a>
        </p>
        <p>Directeur ou directrice de la publication : {i.directeurPublication}.</p>
      </SectionLegale>

      <SectionLegale titre="Hébergement">
        <p>
          Le site et sa base de données sont hébergés par {i.hebergeur.nom}, {i.hebergeur.adresse} (
          <a href={i.hebergeur.site} className="text-primary underline-offset-4 hover:underline">
            {i.hebergeur.site.replace("https://", "")}
          </a>
          ), qui s'appuie sur des prestataires d'infrastructure, dont Supabase pour la base de
          données et l'authentification.
        </p>
      </SectionLegale>

      <SectionLegale titre="Site indépendant">
        <p>
          Prépa Territoriale est un site indépendant de préparation aux concours. Il n'a aucun lien
          avec le CNFPT, les centres de gestion ou toute autre autorité organisatrice de concours.
        </p>
      </SectionLegale>

      <SectionLegale titre="Contenus et responsabilité">
        <p>
          Les quiz, fiches et corrigés sont des contenus d'entraînement rédigés avec soin, mais sans
          valeur réglementaire. Les textes, seuils et délais évoluent : seuls les textes officiels
          et l'arrêté d'ouverture du concours publié par l'organisateur font foi.
        </p>
        <p>
          Vous avez repéré une erreur dans une question ou une fiche ?{" "}
          <Link to="/contact" className="text-primary underline-offset-4 hover:underline">
            Signalez-la
          </Link>
          , elle sera corrigée rapidement.
        </p>
      </SectionLegale>

      <SectionLegale titre="Propriété intellectuelle">
        <p>
          Les contenus du site (questions, corrections, fiches, textes et mise en page) sont
          protégés par le droit d'auteur. Toute reproduction ou diffusion, totale ou partielle, sans
          autorisation écrite préalable de l'éditeur est interdite, sauf pour un usage strictement
          personnel.
        </p>
      </SectionLegale>

      <SectionLegale titre="Données personnelles">
        <p>
          La façon dont vos données sont utilisées et vos droits sont détaillés dans la{" "}
          <Link to="/confidentialite" className="text-primary underline-offset-4 hover:underline">
            politique de confidentialité
          </Link>
          .
        </p>
      </SectionLegale>
    </PageLegale>
  );
}
