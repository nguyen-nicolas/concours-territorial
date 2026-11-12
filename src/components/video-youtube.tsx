import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Lecteur YouTube respectueux de la vie privée : rien n'est chargé depuis YouTube
 * tant que le visiteur n'a pas cliqué sur « lire ». Une fois lancée, la vidéo passe par
 * le domaine youtube-nocookie.com.
 */
export function VideoYoutube({
  id,
  titre,
  details,
}: {
  id: string;
  titre: string;
  details?: string;
}) {
  const [actif, setActif] = useState(false);
  return (
    <figure className="border-border bg-card overflow-hidden rounded-2xl border shadow-sm">
      <div className="bg-primary relative aspect-video">
        {actif ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={titre}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActif(true)}
            aria-label={`Lire la vidéo : ${titre}`}
            className="text-primary-foreground hover:bg-primary/90 absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center transition-colors"
          >
            <span className="bg-primary-foreground/15 flex size-16 items-center justify-center rounded-full">
              <Play className="size-7" aria-hidden="true" />
            </span>
            <span className="font-display text-lg leading-snug sm:text-xl">{titre}</span>
          </button>
        )}
      </div>
      <figcaption className="text-muted-foreground space-y-2 px-5 py-4 text-sm leading-relaxed">
        {details ? <p>{details}</p> : null}
        <p className="text-xs">
          La vidéo n'est chargée depuis YouTube qu'au moment où vous la lancez.{" "}
          <a
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            Voir sur YouTube
          </a>
        </p>
      </figcaption>
    </figure>
  );
}
