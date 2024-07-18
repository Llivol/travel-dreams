import React from "react";
import styles from "./TripDetailsModal.module.css";
import { Trip } from "../types/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

interface TripDetailsModalProps {
  trip: Trip;
  onClose: () => void;
  onMarkComplete: (id: number) => void;
}

const TripDetailsModal: React.FC<TripDetailsModalProps> = ({
  trip,
  onClose,
  onMarkComplete,
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
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className={styles.imageWrapper}>
          <img src={trip.photo_url} alt={trip.title} className={styles.image} />
        </div>
        <div className={styles.modalBodyWrapper}>
          <div className={styles.modalBody}>
            <div>
              <h1>{trip.title}</h1>
              <label className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  checked={trip.status === "done"}
                  onChange={() => onMarkComplete(trip.id)}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={styles.checkIcon}
                  />
                </span>
                <span>
                  {trip.status === "done"
                    ? "Complete"
                    : "Mark the trip as completed"}
                </span>
              </label>
            </div>
            <p>{trip.description}</p>
            {trip.itinerary.length > 0 && (
              <>
                <hr className={styles.hr} />
                <h2>Itinerary</h2>
                <div className={styles.itinerary}>
                  {trip.itinerary.map(({ day, location, description }) => (
                    <div key={day} className={styles.dayBlock}>
                      <div className={styles.dot} />
                      <div className={styles.dayContent}>
                        <h3>
                          Day {day}: {location}
                        </h3>
                        <p>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsModal;
