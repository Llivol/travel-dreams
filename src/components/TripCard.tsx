import React, { useState } from "react";
import styles from "./TripCard.module.css";
import Modal from "./Modal";

interface Trip {
  id: number;
  title: string;
  description: string;
  photo_url: string;
  status: string;
  itinerary: Array<{ day: string; activities: string[] }>;
}


interface TripCardProps {
  key: number;
  trip: Trip;
  onDelete: (tripId: number) => void;
}

const TripCard: React.FC<TripCardProps> = ({ key, trip, onDelete }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  const handleDeleteConfirmationClick = () => {
    onDelete(trip.id);
  };

  const handleConfirmDelete = () => {
    handleDeleteConfirmationClick();
    setShowConfirmModal(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmModal(false);
  };

  return (
    <div key={key} className={styles.tripCard}>
      <div className={styles.imageContainer}>
        <img src={trip.photo_url} alt={trip.title} className={styles.image} />
      </div>
      <div className={styles.tripInfo}>
        <h2>{trip.title}</h2>
        <p>{trip.description}</p>
        <div className={styles.buttons}>
          <div>
            <button className={styles.primaryButton}>See Trip Details</button>
          </div>
          <div>
            <button className={styles.primaryButton}>Edit</button>
            <button className={styles.dangerButton} onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {showConfirmModal && (
        <Modal>
          <p>Are you sure you want to delete this trip?</p>
          <div>
            <button
              className={styles.primaryButton}
              onClick={handleConfirmDelete}
            >
              Confirm
            </button>
            <button
              className={styles.dangerButton}
              onClick={handleCancelDelete}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TripCard;
