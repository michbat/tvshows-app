/**
 * Logo.jsx - Composant d'affichage du logo de l'application
 *
 * Affiche le logo avec son titre et sous-titre
 * @param {string} img - URL de l'image du logo
 * @param {string} title - Titre principal du logo
 * @param {string} subtitle - Sous-titre descriptif
 */

import styles from "./styles.module.css";

export const Logo = ({ img, title, subtitle }) => {
  return (
    <>
      {/* Conteneur du logo et du titre */}
      <div className={styles.container}>
        <img className={styles.image} src={img} alt={title} />
        <div className={styles.title}>{title}</div>
      </div>
      {/* Sous-titre affiché en dessous */}
      <div className={styles.subtitle}>{subtitle}</div>
    </>
  );
};
