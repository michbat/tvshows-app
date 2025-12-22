import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import styles from "./styles.module.css";

export const TVShowDetail = ({ tvShow }) => {
  const rating = tvShow.vote_average / 2;
  return (
    <div>
      <div className={`${styles.title}`}>{tvShow.name}</div>
      <div className={`${styles.rating_container}`}>
        <FiveStarRating rating={rating} />
        <span>{(tvShow.vote_average / 2).toFixed(1)} / 5</span>
      </div>
      <div className={`${styles.overview}`}>{tvShow.overview}</div>
    </div>
  );
};
