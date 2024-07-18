import React, { useState, useEffect } from "react";
import TripCard from "./TripCard";
import styles from "./TripList.module.css";
import { Trip } from "../types/interfaces";

interface TripListProps {
  trips: Trip[];
  searchTerm: string;
  onDelete: (tripId: number) => void;
  onMarkComplete: (tripId: number) => void;
}

const TripList: React.FC<TripListProps> = ({
  trips,
  searchTerm,
  onDelete,
  onMarkComplete,
}) => {
  const [filter, setFilter] = useState("All");
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);

  useEffect(() => {
    const filterTrips = () => {
      const newFilteredTrips = trips.filter((trip) => {
        const matchesFilter =
          filter === "All" ||
          (filter === "Upcoming" && trip.status === "todo") ||
          (filter === "Completed" && trip.status === "done");

        const matchesSearch =
          trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trip.itinerary.some(
            (day) =>
              day.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
              day.description.toLowerCase().includes(searchTerm.toLowerCase())
          );

        return matchesFilter && matchesSearch;
      });
      setFilteredTrips(newFilteredTrips);
      console.log("aruba > Updated filteredTrips", newFilteredTrips);
    };

    filterTrips();
  }, [trips, searchTerm, filter]);

  const handleFilterChange = (filterType: string) => {
    setFilter(filterType);
  };

  console.log("aruba > Current filter:", filter);
  console.log("aruba > Filtered trips to be rendered:", filteredTrips);

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
          <TripCard
            key={`${trip.title}-${trip.id}`}
            trip={trip}
            onDelete={onDelete}
            onMarkComplete={onMarkComplete}
          />
        ))}
      </>
    </div>
  );
};

export default TripList;
