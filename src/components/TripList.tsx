import React, { useState } from "react";
import TripCard from "./TripCard"; // Import your TripCard component
import styles from "./TripList.module.css"; // Import your module styles here

interface Trip {
  id: number;
  title: string;
  description: string;
  photo_url: string;
  status: string;
  itinerary: Array<{ day: string; activities: string[] }>;
}

interface TripListProps {
  trips: Trip[];
}

const TripList: React.FC<TripListProps> = ({ trips }) => {
  const [filter, setFilter] = useState("All");

  const filteredTrips = trips.filter((trip) => {
    if (filter === "All") return true;
    if (filter === "Upcoming") return trip.status === "todo";
    if (filter === "Completed") return trip.status === "done";
    return true;
  });

  const handleFilterChange = (filterType: string) => {
    setFilter(filterType);
  };

  return (
    <div className={styles.container}>
      <div className={styles.toggleGroup}>
        <button
          className={`${styles.toggleButton} ${
            filter === "All" && styles.active
          }`}
          onClick={() => handleFilterChange("All")}
        >
          All
        </button>
        <button
          className={`${styles.toggleButton} ${
            filter === "Upcoming" && styles.active
          }`}
          onClick={() => handleFilterChange("Upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`${styles.toggleButton} ${
            filter === "Completed" && styles.active
          }`}
          onClick={() => handleFilterChange("Completed")}
        >
          Completed
        </button>
      </div>
      <>
        {filteredTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </>
    </div>
  );
};

export default TripList;
