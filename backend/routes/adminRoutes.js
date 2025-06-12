import express from 'express';
import {
  getAdventures,
  getAdventureById,
  createAdventure,
  updateAdventure,
  deleteAdventure,
  getBeaches,
  getBeachById,
  createBeach,
  updateBeach,
  deleteBeach,
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} from '../controllers/adminController.js';

const router = express.Router();

// Adventure routes
router.get('/adventures', getAdventures);
router.get('/adventures/:id', getAdventureById);
router.post('/adventures', createAdventure);
router.put('/adventures/:id', updateAdventure);
router.delete('/adventures/:id', deleteAdventure);

// Beach routes
router.get('/beaches', getBeaches);
router.get('/beaches/:id', getBeachById);
router.post('/beaches', createBeach);
router.put('/beaches/:id', updateBeach);
router.delete('/beaches/:id', deleteBeach);

// 🆕 Restaurant (Stay & Eats) routes
router.get('/restaurants', getRestaurants);
router.get('/restaurants/:id', getRestaurantById);
router.post('/restaurants', createRestaurant);
router.put('/restaurants/:id', updateRestaurant);
router.delete('/restaurants/:id', deleteRestaurant);

export default router;
