/**
 * TVShowDetail.jsx - Composant d'affichage des détails d'une série TV
 *
 * Affiche le titre, la note et la description d'une série TV.
 * @param {Object} tvShow - L'objet contenant les données de la série
 */

import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import styles from "./styles.module.css";

export const TVShowDetail = ({ tvShow }) => {
  // Conversion de la note sur 10 en note sur 5 pour l'affichage des étoiles
  const rating = tvShow.vote_average / 2;

  return (
    <div>
      {/* Titre de la série */}
      <div className={`${styles.title}`}>{tvShow.name}</div>

      {/* Conteneur de la notation */}
      <div className={`${styles.rating_container}`}>
        <FiveStarRating rating={rating} />
        <span>{(tvShow.vote_average / 2).toFixed(1)} / 5</span>
      </div>

      {/* Description de la série */}
      <div className={`${styles.overview}`}>{tvShow.overview}</div>
    </div>
  );
};
