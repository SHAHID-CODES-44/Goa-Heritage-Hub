import { getAllRestaurants } from '../models/foodModel.js';

export const fetchRestaurants = async (req, res) => {
  try {
    const { location, cuisine, minRating } = req.query;
    const filters = {
      location: location || null,
      cuisine: cuisine || null,
      minRating: minRating ? parseFloat(minRating) : null,
    };

    const data = await getAllRestaurants(filters);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
