import express from 'express';
import { fetchRestaurants } from '../controllers/foodController.js';

const router = express.Router();

router.get('/restaurants', fetchRestaurants);

export default router;
