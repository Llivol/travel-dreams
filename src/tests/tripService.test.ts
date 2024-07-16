import { fetchTrips } from '../services/tripService';
import axios from 'axios';

jest.mock('axios');

describe('fetchTrips', () => {
  it('should fetch trips data successfully', async () => {
    const trips = [{ id: 1, title: 'Trip 1', details: 'Details 1', thumbnail: 'image1.jpg' }];
    axios.get.mockResolvedValue({ data: trips });

    const result = await fetchTrips();
    expect(result).toEqual(trips);
  });

  it('should handle errors', async () => {
    axios.get.mockRejectedValue(new Error('Error fetching data'));

    await expect(fetchTrips()).rejects.toThrow('Error fetching data');
  });
});
