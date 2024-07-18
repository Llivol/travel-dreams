import React from "react";
import styles from "./ConfirmationModal.module.css";

interface ConfirmationModalProps {
  message: string;
  confirmBtnText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  confirmBtnText,
  onConfirm,
  onCancel,
}) => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h5>{message}</h5>
        <div className={styles.buttonContainer}>
          <button className={styles.dangerButton} onClick={onConfirm}>
            {confirmBtnText}
          </button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
