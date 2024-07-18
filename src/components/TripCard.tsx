import React, { useState } from "react";
import styles from "./TripCard.module.css";
import ConfirmationModal from "./ConfirmationModal";
import TripDetailsModal from "./TripDetailsModal";
import { Trip } from "../types/interfaces";
import EditTripModal from "./EditTripModal";

interface TripCardProps {
  key: string;
  trip: Trip;
  onDelete: (tripId: number) => void;
  onMarkComplete: (tripId: number) => void;
  onEditSave: (trip: Trip) => void;
}

const TripCard: React.FC<TripCardProps> = ({ key, trip, onDelete, onMarkComplete, onEditSave }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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

  const handleOpenDetailsModal = () => setShowDetailsModal(true);
  const handleCloseDetailsModal = () => setShowDetailsModal(false);

  const handleOpenEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  return (
    <div key={key} className={styles.tripCard}>
      <div className={styles.imageContainer}>
        <img src={trip.photo_url} alt={trip.title} className={styles.image} />
      </div>
      <div className={styles.tripInfo}>
        <h2>{trip.title}</h2>
        <p>{trip.description}</p>
        <div className={styles.buttonContainer}>
          <div>
            <button onClick={handleOpenDetailsModal}>See Trip Details</button>
          </div>
          <div>
            <button onClick={handleOpenEditModal}>Edit</button>
            <button className={styles.dangerButton} onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <>
        {showConfirmModal && (
          <ConfirmationModal
            message="Are you sure you want to delete this trip?"
            confirmBtnText="Yes, delete"
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
        {showDetailsModal && (
          <TripDetailsModal
            trip={trip}
            onClose={handleCloseDetailsModal}
            onMarkComplete={onMarkComplete}
          />
        )}
        {showEditModal && (
          <EditTripModal
            trip={trip}
            onClose={handleCloseEditModal}
            onSave={onEditSave}
          />
        )}
      </>
    </div>
  );
};

export default TripCard;
