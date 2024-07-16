import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels';

export const fetchTrips = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
