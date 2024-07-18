import React from "react";
import styles from "./TripDetailsModal.module.css";

interface TripDetailsModalProps {
  trip: {
    id: number;
    title: string;
    description: string;
    photo_url: string;
    status: string;
    itinerary: Array<{ day: string; activities: string[] }>;
  };
  onClose: () => void;
  onMarkComplete: (id: number) => void;
}

const TripDetailsModal: React.FC<TripDetailsModalProps> = ({ trip, onClose, onMarkComplete }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <img src={trip.photo_url} alt={trip.title} className={styles.image} />
        <h2>{trip.title}</h2>
        <label>
          <input
            type="checkbox"
            checked={trip.status === "done"}
            onChange={() => onMarkComplete(trip.id)}
          />
          Mark the trip as completed
        </label>
        <p>{trip.description}</p>
        <hr className={styles.hr} />
        <h2>Itinerary</h2>
        <div className={styles.itinerary}>
          {trip.itinerary.map((day, index) => (
            <div key={index} className={styles.dayBlock}>
              <div className={styles.dot} />
              <div className={styles.dayContent}>
                <h3>Day {index + 1}: {day.day}</h3>
                <p>{day.activities.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDetailsModal;
