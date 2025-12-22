import { useEffect, useState } from "react";
import "./App.css";
import { TVShowAPI } from "./api/tv-show";
import icon from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { BACKDROP_BASE_URL } from "./config";

export const App = () => {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationsList, setRecommendationsList] = useState([]);

  // Chargement initial des séries populaires
  useEffect(() => {
    const fetchPopulars = async () => {
      const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
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
        }
      }
    };
    fetchRecommendations();
  }, [currentTVShow]);


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
              <input style={{ width: "100%" }} type="text" />
            </div>
          </div>
        </div>
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
