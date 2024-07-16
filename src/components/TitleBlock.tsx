import React from "react";
import styles from "./TitleBlock.module.css";

const TitleBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>The places you dream of</h1>
        <h3>Let&apos;s live new adventures</h3>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Search trips" className={styles.input} />
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
};

export default TitleBlock;
