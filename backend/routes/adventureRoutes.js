import express from 'express';
import { fetchAdventures } from '../controllers/adventureController.js';

const router = express.Router();

router.get('/', fetchAdventures);

export default router; // ✅ Ensure this line exists
