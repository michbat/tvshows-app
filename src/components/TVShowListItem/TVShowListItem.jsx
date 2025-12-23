/**
 * TVShowListItem.jsx - Composant représentant un item de série dans une liste
 *
 * Affiche une miniature de la série avec son titre tronqué.
 * Cliquable pour sélectionner la série.
 * @param {Object} tvShow - L'objet contenant les données de la série
 * @param {Function} onClickItem - Callback exécuté lors du clic sur l'item
 */

import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import styles from "./styles.module.css";

// Limite de caractères pour le titre avant troncature
const MAX_TITLE_CHAR = 20;

export const TVShowListItem = ({ tvShow, onClickItem }) => {
  /**
   * Gère le clic sur l'item et notifie le composant parent
   */
  const isItemClicked = () => {
    onClickItem(tvShow);
  };

  return (
    <div onClick={isItemClicked} className={styles.container}>
      {/* Image de la série */}
      <img
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={styles.image}
      />

      {/* Titre tronqué si nécessaire */}
      <div className={styles.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};
