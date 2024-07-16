import React, { useState } from 'react';

interface Trip {
  id: number;
  title: string;
  details: string;
  thumbnail: string;
  completed: boolean;
}

interface TripListProps {
  trips: Trip[];
}

const TripList: React.FC<TripListProps> = ({ trips }) => {
  const [filter, setFilter] = useState('All');

  const filteredTrips = trips.filter(trip => {
    if (filter === 'All') return true;
    if (filter === 'Upcoming') return !trip.completed;
    if (filter === 'Completed') return trip.completed;
    return true;
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button onClick={() => setFilter('All')} style={filterButtonStyle(filter === 'All')}>All</button>
        <button onClick={() => setFilter('Upcoming')} style={filterButtonStyle(filter === 'Upcoming')}>Upcoming</button>
        <button onClick={() => setFilter('Completed')} style={filterButtonStyle(filter === 'Completed')}>Completed</button>
      </div>
      <div>
        {filteredTrips.map(trip => (
          <div key={trip.id} style={tripCardStyle}>
            <div style={{ width: '50%' }}>
              <img src={trip.thumbnail} alt={trip.title} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ width: '50%', padding: '10px' }}>
              <h2>{trip.title}</h2>
              <p>{trip.details}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
                <button style={primaryButtonStyle}>See Trip Details</button>
                <div>
                  <button style={secondaryButtonStyle}>Edit</button>
                  <button style={dangerButtonStyle}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const filterButtonStyle = (active: boolean) => ({
  backgroundColor: active ? '#007bff' : '#ccc',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  margin: '0 10px',
  cursor: 'pointer',
});

const tripCardStyle = {
  display: 'flex',
  margin: '20px 0',
  border: '1px solid #ccc',
  borderRadius: '5px',
  overflow: 'hidden',
};

const primaryButtonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const secondaryButtonStyle = {
  backgroundColor: '#ffc107',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '10px',
};

const dangerButtonStyle = {
  backgroundColor: '#dc3545',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '10px',
};

export default TripList;
