// backend/routes/admloginRoutes.js
import express from 'express';
import { loginAdmin } from '../controllers/admloginController.js';

const router = express.Router();

// Route: POST /api/admin/login
router.post('/login', loginAdmin); 

export default router;
