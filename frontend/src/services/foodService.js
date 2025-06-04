const API_URL = 'http://localhost:5000/api/food/restaurants';

export const fetchRestaurants = async (filters = {}) => {
  try {
    // Build query string from filters
    const queryParams = new URLSearchParams();

    if (filters.location) queryParams.append('location', filters.location);
    if (filters.cuisine) queryParams.append('cuisine', filters.cuisine);
    if (filters.minRating) queryParams.append('minRating', filters.minRating);

    const urlWithParams = `${API_URL}?${queryParams.toString()}`;

    const response = await fetch(urlWithParams);
    if (!response.ok) {
      throw new Error('Failed to fetch restaurants');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    return [];
  }
};
