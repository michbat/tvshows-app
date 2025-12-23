/**
 * App.jsx - Composant principal de l'application
 *
 * Gère l'affichage d'une série TV avec ses détails et recommandations.
 * Permet la recherche de séries via la barre de recherche.
 */

import { useEffect, useState } from "react";
import "./App.css";
import { TVShowAPI } from "./api/tv-show";
import icon from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { BACKDROP_BASE_URL } from "./config";

export const App = () => {
  // State pour stocker la série TV actuellement affichée
  const [currentTVShow, setCurrentTVShow] = useState();

  // State pour stocker la liste des séries recommandées (max 10)
  const [recommendationsList, setRecommendationsList] = useState([]);

  // State pour gérer les messages d'erreur à afficher à l'utilisateur
  const [error, setError] = useState(null);

  // Chargement initial des séries populaires
  useEffect(() => {
    const fetchPopulars = async () => {
      const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
        setError(null);
      } else {
        setError(
          "Erreur de chargement.Impossible de charger les séries populaires"
        );
      }
    };
    fetchPopulars();
  }, []);

  // Chargement des recommandations quand la série courante change
  useEffect(() => {
    const fetchRecommendations = async () => {
      if (currentTVShow) {
        const getRecommendationsResp = await TVShowAPI.fetchRecommendations(
          currentTVShow.id
        );
        if (getRecommendationsResp.length > 0) {
          setRecommendationsList(getRecommendationsResp.slice(0, 10));
        } else {
          setRecommendationsList([]);
        }
      }
    };
    fetchRecommendations();
  }, [currentTVShow]);

  /**
   * Recherche une série TV par son titre
   * @param {string} title - Le titre de la série à rechercher
   */
  const fetchByTitle = async (title) => {
    const searchResponse = await TVShowAPI.fetchByTitle(title);

    if (searchResponse.length > 0) {
      // Affiche la première série trouvée
      setCurrentTVShow(searchResponse[0]);
      setError(null);
    } else {
      // Affiche un message d'erreur si aucune série n'est trouvée
      setError(`Erreur de chargement.Aucune série trouvée pour "${title}"`);
    }
  };

  /**
   * Gère le clic sur un item de la liste de recommandations
   * Met à jour la série actuellement affichée
   * @param {Object} tvShow - L'objet série TV sélectionné
   */
  const handleOnItemClickToUpdate = (tvShow) => {
    setCurrentTVShow(tvShow);
  };

  return (
    <>
      <div
        className="main_container"
        style={{
          background: currentTVShow
            ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
            : "#333",
        }}
      >
        <div className="header">
          <div className="row">
            <div className="col-4">
              <Logo
                img={icon}
                title="Watowatch"
                subtitle="Find a show you may like"
              />
            </div>
            <div className="col-md-12 col-lg-4">
              <SearchBar onSubmitSearch={fetchByTitle} />
            </div>
          </div>
        </div>
        {error && (
          <div className="alert alert-danger text-center mt-3" role="alert">
            {error}
          </div>
        )}
        <div className="tv_show_details">
          {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
        </div>
        <div className="recommended_tv_shows">
          {recommendationsList.length > 0 && (
            <TVShowList
              handleOnItemClick={handleOnItemClickToUpdate}
              tvShowList={recommendationsList}
            />
          )}
        </div>
      </div>
    </>
  );
};
