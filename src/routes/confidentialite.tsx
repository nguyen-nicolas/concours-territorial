import { createFileRoute } from "@tanstack/react-router";
import { PageLegale, SectionLegale } from "@/components/page-legale";
import { infosLegales } from "@/lib/infosLegales";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité | Prépa Territoriale" },
      {
        name: "description",
        content:
          "Quelles données Prépa Territoriale collecte, pourquoi, combien de temps elles sont conservées et comment exercer vos droits.",
      },
    ],
  }),
  component: Confidentialite,
});

function Confidentialite() {
  const i = infosLegales;
  const mail = (
    <a href={`mailto:${i.email}`} className="text-primary underline-offset-4 hover:underline">
      {i.email}
    </a>
  );
  return (
    <PageLegale
      surtitre="Vos données"
      titre="Politique de confidentialité"
      intro={`Ce qui est collecté, pourquoi, et comment garder la main sur vos données. Dernière mise à jour : ${i.miseAJour}.`}
    >
      <SectionLegale titre="Qui est responsable de vos données ?">
        <p>
          Le responsable du traitement est {i.editeur}, éditeur du site, joignable à l'adresse{" "}
          {mail}.
        </p>
      </SectionLegale>

      <SectionLegale titre="Sans compte : aucune donnée personnelle collectée">
        <p>
          Vous pouvez faire les quiz et consulter les fiches sans créer de compte. Le site n'utilise
          aucun cookie publicitaire et aucun outil de mesure d'audience. Comme tout site web,
          l'hébergeur traite des données techniques de connexion (adresse IP, journaux du serveur)
          pour assurer le fonctionnement et la sécurité du service.
        </p>
      </SectionLegale>

      <SectionLegale titre="Avec un compte : les données enregistrées">
        <ul className="list-disc space-y-1 pl-5">
          <li>votre prénom ou pseudo et votre adresse e-mail ;</li>
          <li>
            votre mot de passe, stocké sous forme chiffrée par le service d'authentification :
            personne, pas même l'éditeur, ne peut le lire ;
          </li>
          <li>
            si vous vous connectez avec Google : votre nom et votre adresse e-mail transmis par
            Google ;
          </li>
          <li>
            le concours que vous préparez, vos résultats aux quiz et la validation de votre accès.
          </li>
        </ul>
        <p>
          Ces données servent uniquement à créer et gérer votre compte, à enregistrer votre
          progression et à valider votre accès. Elles ne sont ni vendues, ni louées, ni utilisées à
          des fins publicitaires. Ce traitement repose sur l'exécution du service que vous demandez
          en créant un compte.
        </p>
      </SectionLegale>

      <SectionLegale titre="Qui y a accès ?">
        <p>
          Seul l'éditeur accède à vos données. Elles sont hébergées par des prestataires techniques
          qui les traitent pour son compte : {i.hebergeur.nom} (hébergement), Supabase (base de
          données et authentification) et, si vous l'utilisez, Google (connexion avec un compte
          Google). Certains de ces prestataires sont situés aux États-Unis : vos données peuvent
          donc être traitées hors de l'Union européenne, dans le cadre des garanties prévues par
          leurs conditions.
        </p>
      </SectionLegale>

      <SectionLegale titre="Combien de temps sont-elles conservées ?">
        <p>
          Vos données sont conservées tant que votre compte est actif. Elles sont supprimées si vous
          en faites la demande, ou après 3 ans sans aucune connexion.
        </p>
      </SectionLegale>

      <SectionLegale titre="Stockage dans votre navigateur">
        <p>
          Pour que vous restiez connecté(e), votre session est conservée dans le stockage local de
          votre navigateur. Ce stockage est indispensable au fonctionnement du compte et ne sert à
          aucun suivi : il ne nécessite donc pas votre consentement. Il est effacé quand vous vous
          déconnectez.
        </p>
      </SectionLegale>

      <SectionLegale titre="Vos droits">
        <p>
          Vous pouvez à tout moment accéder à vos données, les corriger, les faire supprimer avec
          votre compte, en demander une copie ou vous opposer à leur traitement. Écrivez simplement
          à {mail} depuis l'adresse liée à votre compte ; une réponse vous sera apportée dans un
          délai d'un mois au plus.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation
          à la CNIL (
          <a href="https://www.cnil.fr" className="text-primary underline-offset-4 hover:underline">
            cnil.fr
          </a>
          ).
        </p>
      </SectionLegale>
    </PageLegale>
  );
}
