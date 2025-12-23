/**
 * SearchBar.jsx - Composant de barre de recherche
 *
 * Permet à l'utilisateur de rechercher des séries TV par titre.
 * La recherche est déclenchée par la touche Enter.
 * @param {Function} onSubmitSearch - Callback exécuté lors de la soumission de la recherche
 */

import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import styles from "./styles.module.css";

export const SearchBar = ({ onSubmitSearch }) => {
  // State pour stocker le texte saisi par l'utilisateur
  const [searchText, setSearchText] = useState("");

  /**
   * Met à jour le state à chaque modification de l'input
   */
  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  /**
   * Détecte la touche Enter et lance la recherche si le texte n'est pas vide
   */
  const handleOnKeyUp = (e) => {
    if (e.key === "Enter" && searchText.trim()) {
      onSubmitSearch(searchText);
      setSearchText(""); // Réinitialise le champ après la recherche
    }
  };

  return (
    <div className={styles.search_container}>
      {/* Icône de recherche (loupe) */}
      <i className="bi bi-search"></i>
      <input
        onChange={handleOnChange}
        onKeyUp={handleOnKeyUp}
        className={styles.input}
        type="text"
        placeholder="Search a tv show..."
        value={searchText}
      />
    </div>
  );
};
