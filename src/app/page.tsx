import { useEffect, useState } from 'react';
import { fetchTrips } from '../services/tripService';

interface Trip {
  id: number;
  title: string;
  details: string;
  thumbnail: string;
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
        setError('Error fetching trips');
      } finally {
        setLoading(false);
      }
    };

    getTrips();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Travel Dreams</h1>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h2>{trip.title}</h2>
            <p>{trip.details}</p>
            <img src={trip.thumbnail} alt={trip.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
