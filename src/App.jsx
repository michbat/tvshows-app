import { useEffect, useState } from "react";
import "./App.css";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";

export const App = () => {
  const [currentTVShow, setCurrentTVShow] = useState();

  useEffect(() => {
    const getPopulars = async () => {
      const popularTVShowList = await TVShowAPI.fetchPopulars();

      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    };

    getPopulars();
  }, []);

  // console.log(currentTVShow);

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
              <div>LOGO</div>
              <div>Subtitle</div>
            </div>
            <div className="col-md-12 col-lg-4">
              <input style={{ width: "100%" }} type="text" />
            </div>
          </div>
        </div>
        <div className="tv_show_details">
          {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
        </div>
        <div className="recommended_tv_shows">Recommended</div>
      </div>
    </>
  );
};
