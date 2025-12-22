import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import styles from "./styles.module.css";

export const TVShowList = ({ handleOnItemClick, tvShowList }) => {
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
      <div className={`${styles.title}`}>You'll probably like :</div>
      <div className={`${styles.list}`}>{renderTVShowListItem()}</div>
    </div>
  );
};
