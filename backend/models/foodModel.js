import { Op } from 'sequelize';
import Restaurant from './RestaurantModel.js';

export const getAllRestaurants = async (filters) => {
  try {
    const where = {};

    if (filters.location) {
      where.location = filters.location;
    }
    if (filters.cuisine) {
      where.cuisine = filters.cuisine;
    }
    if (filters.minRating) {
      where.rating = { [Op.gte]: filters.minRating };
    }

    const restaurants = await Restaurant.findAll({ where });
    return restaurants;
  } catch (error) {
    console.error('Error in getAllRestaurants:', error);
    throw error;
  }
};
