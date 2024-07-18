import React, { useState } from "react";
import styles from "./TitleBlock.module.css";

interface TitleBlockProps {
  onSearch: (term: string) => void;
}

const TitleBlock: React.FC<TitleBlockProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>The places you dream of</h1>
        <h3>Let&apos;s live new adventures</h3>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search trips"
          className={styles.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.searchButton} onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default TitleBlock;
