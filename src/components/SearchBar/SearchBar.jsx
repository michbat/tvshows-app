import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./styles.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.search_container}>
      <i className="bi bi-search"></i>
      <input
        className={styles.input}
        type="text"
        placeholder="Search a tv show..."
      />
    </div>
  );
};
