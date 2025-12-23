import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import styles from "./styles.module.css";

export const SearchBar = ({ onSubmitSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter" && searchText.trim()) {
      onSubmitSearch(searchText);
      setSearchText("");
    }
  };

  return (
    <div className={styles.search_container}>
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
