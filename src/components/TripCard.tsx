import React from "react";
import styles from "./TripCard.module.css";

interface Trip {
  id: number;
  title: string;
  description: string;
  photo_url: string;
  status: string;
  itinerary: Array<{ day: string; activities: string[] }>;
}

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <div className={styles.tripCard}>
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
            <button className={styles.dangerButton}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
