import React from "react";
import styles from "./Modal.module.css";

const Modal: React.FC = ({ children }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  );
};

export default Modal;
