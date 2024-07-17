import React, { useState } from "react";
import TripCard from "./TripCard";
import styles from "./TripList.module.css";

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
  searchTerm: string;
}

const TripList: React.FC<TripListProps> = ({ trips, searchTerm }) => {
  const [filter, setFilter] = useState("All");

  const filteredTrips = trips.filter((trip) => {
    const matchesFilter =
      filter === "All" ||
      (filter === "Upcoming" && trip.status === "todo") ||
      (filter === "Completed" && trip.status === "done");

    const matchesSearch =
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
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
