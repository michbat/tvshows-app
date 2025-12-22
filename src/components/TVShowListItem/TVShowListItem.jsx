import styles from "./styles.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

const MAX_TITLE_CHAR = 20;

export const TVShowListItem = ({ tvShow, onClickItem }) => {
  const isItemClicked = () => {
    onClickItem(tvShow);
  };
  return (
    <div onClick={isItemClicked} className={styles.container}>
      <img
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={styles.image}
      />
      <div className={styles.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};
