/**
 * TVShowList.jsx - Composant de liste de séries TV
 *
 * Affiche une liste horizontale scrollable de séries recommandées.
 * @param {Function} handleOnItemClick - Callback exécuté lors du clic sur un item
 * @param {Array} tvShowList - Tableau des séries à afficher
 */

import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import styles from "./styles.module.css";

export const TVShowList = ({ handleOnItemClick, tvShowList }) => {
  /**
   * Génère la liste des items de séries TV
   * @returns {Array} Tableau de composants TVShowListItem
   */
  const renderTVShowListItem = () => {
    return tvShowList.map((show) => {
      return (
        <span className={`${styles.tv_show_item}`} key={show.id}>
          <TVShowListItem tvShow={show} onClickItem={handleOnItemClick} />
        </span>
      );
    });
  };

  return (
    <div>
      {/* Titre de la section */}
      <div className={`${styles.title}`}>You'll probably like :</div>

      {/* Liste scrollable des séries */}
      <div className={`${styles.list}`}>{renderTVShowListItem()}</div>
    </div>
  );
};
