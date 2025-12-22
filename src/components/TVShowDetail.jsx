import styles from "./styles.module.css";

export const TVShowDetail = ({ tvShow }) => {
  return (
    <div>
      <div className={`${styles.title}`}>{tvShow.name}</div>
      <div className={`${styles.rating}`}>{tvShow.vote_average / 2}/5</div>
      <div className={`${styles.overview}`}>{tvShow.overview}</div>
    </div>
  );
};
