import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Travel Dreams Logo" />
      </div>
      <button disabled className={styles.createButton}>Create New Trip</button>
    </nav>
  );
};

export default Navbar;
