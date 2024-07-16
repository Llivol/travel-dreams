"use client";

import { useEffect, useState } from "react";
import { fetchTrips } from "../services/tripService";
import Navbar from "../components/Navbar";
import TitleBlock from "../components/TitleBlock";
import TripList from "../components/TripList";

interface Trip {
  id: number;
  title: string;
  details: string;
  thumbnail: string;
  completed: boolean;
}

export default function Home() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTrips = async () => {
      try {
        const data = await fetchTrips();
        setTrips(data);
      } catch (error) {
        setError("Error fetching trips");
      } finally {
        setLoading(false);
      }
    };

    getTrips();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <TitleBlock />
      <TripList trips={trips} />
    </>
  );
}
