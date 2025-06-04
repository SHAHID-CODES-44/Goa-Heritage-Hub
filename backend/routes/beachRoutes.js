import express from 'express';
import { getAllBeaches } from '../controllers/beachController.js';

const router = express.Router();

router.get('/', getAllBeaches);

export default router;
