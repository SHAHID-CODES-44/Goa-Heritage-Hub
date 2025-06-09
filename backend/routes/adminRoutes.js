// backend/routes/adminRoutes.js
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
  deleteBeach
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

export default router;
