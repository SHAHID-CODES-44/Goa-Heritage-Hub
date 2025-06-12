import { Adventure, Beach,Restaurant } from '../models/adminModel.js';

// -------- Adventure Controllers --------

// Get all adventures
export const getAdventures = async (req, res) => {
  try {
    const adventures = await Adventure.findAll();
    res.json(adventures);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching adventures', error: error.message });
  }
};

// Get adventure by ID
export const getAdventureById = async (req, res) => {
  try {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) {
      return res.status(404).json({ message: 'Adventure not found' });
    }
    res.json(adventure);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching adventure', error: error.message });
  }
};

// Create adventure
export const createAdventure = async (req, res) => {
  try {
    const { title, description, image_path, direction_url } = req.body;
    const newAdventure = await Adventure.create({ title, description, image_path, direction_url });
    res.status(201).json({ message: 'Adventure created', adventure: newAdventure });
  } catch (error) {
    res.status(500).json({ message: 'Error creating adventure', error: error.message });
  }
};

// Update adventure
export const updateAdventure = async (req, res) => {
  try {
    const { title, description, image_path, direction_url } = req.body;
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) {
      return res.status(404).json({ message: 'Adventure not found' });
    }
    await adventure.update({ title, description, image_path, direction_url });
    res.json({ message: 'Adventure updated', adventure });
  } catch (error) {
    res.status(500).json({ message: 'Error updating adventure', error: error.message });
  }
};

// Delete adventure
export const deleteAdventure = async (req, res) => {
  try {
    const adventure = await Adventure.findByPk(req.params.id);
    if (!adventure) {
      return res.status(404).json({ message: 'Adventure not found' });
    }
    await adventure.destroy();
    res.json({ message: 'Adventure deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting adventure', error: error.message });
  }
};

// -------- Beach Controllers --------

// Get all beaches
export const getBeaches = async (req, res) => {
  try {
    const beaches = await Beach.findAll();
    res.json(beaches);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching beaches', error: error.message });
  }
};

// Get beach by ID
export const getBeachById = async (req, res) => {
  try {
    const beach = await Beach.findByPk(req.params.id);
    if (!beach) {
      return res.status(404).json({ message: 'Beach not found' });
    }
    res.json(beach);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching beach', error: error.message });
  }
};

// Create beach
export const createBeach = async (req, res) => {
  try {
    const { name, location, description, image, rating, directions_url } = req.body;
    const newBeach = await Beach.create({ name, location, description, image, rating, directions_url });
    res.status(201).json({ message: 'Beach created', beach: newBeach });
  } catch (error) {
    res.status(500).json({ message: 'Error creating beach', error: error.message });
  }
};

// Update beach
export const updateBeach = async (req, res) => {
  try {
    const { name, location, description, image, rating, directions_url } = req.body;
    const beach = await Beach.findByPk(req.params.id);
    if (!beach) {
      return res.status(404).json({ message: 'Beach not found' });
    }
    await beach.update({ name, location, description, image, rating, directions_url });
    res.json({ message: 'Beach updated', beach });
  } catch (error) {
    res.status(500).json({ message: 'Error updating beach', error: error.message });
  }
};

// Delete beach
export const deleteBeach = async (req, res) => {
  try {
    const beach = await Beach.findByPk(req.params.id);
    if (!beach) {
      return res.status(404).json({ message: 'Beach not found' });
    }
    await beach.destroy();
    res.json({ message: 'Beach deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting beach', error: error.message });
  }
};

// Get all restaurants
export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurants', error: error.message });
  }
};

// Get restaurant by ID
export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurant', error: error.message });
  }
};

// Create restaurant
export const createRestaurant = async (req, res) => {
  try {
    const { name, location, cuisine, image, rating } = req.body;
    const newRestaurant = await Restaurant.create({ name, location, cuisine, image, rating });
    res.status(201).json({ message: 'Restaurant created', restaurant: newRestaurant });
  } catch (error) {
    res.status(500).json({ message: 'Error creating restaurant', error: error.message });
  }
};

// Update restaurant
export const updateRestaurant = async (req, res) => {
  try {
    const { name, location, cuisine, image, rating } = req.body;
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    await restaurant.update({ name, location, cuisine, image, rating });
    res.json({ message: 'Restaurant updated', restaurant });
  } catch (error) {
    res.status(500).json({ message: 'Error updating restaurant', error: error.message });
  }
};

// Delete restaurant
export const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    await restaurant.destroy();
    res.json({ message: 'Restaurant deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting restaurant', error: error.message });
  }
};