// Import des styles des icônes Bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

/**
 * Composant qui affiche une notation sur 5 étoiles
 * @param {number} rating - Note à afficher (entre 0 et 5)
 */
export const FiveStarRating = ({ rating }) => {
  const starList = [];

  // Calcul du nombre d'étoiles pleines (partie entière de la note)
  const starFillCount = Math.floor(rating);

  // Vérifie si on doit afficher une demi-étoile (si la décimale >= 0.5)
  const hasStarHalf = rating - starFillCount >= 0.5;

  // Calcul du nombre d'étoiles vides pour compléter à 5
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  // Ajout des étoiles pleines
  for (let i = 0; i < starFillCount; i++) {
    starList.push(<i key={"star-fill-" + i} className="bi bi-star-fill"></i>);
  }

  // Ajout de la demi-étoile si nécessaire
  if (hasStarHalf) {
    starList.push(<i key="star-half" className="bi bi-star-half"></i>);
  }

  // Ajout des étoiles vides
  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(<i key={"star-empty-" + i} className="bi bi-star"></i>);
  }

  return <div>{starList}</div>;
};
