// backend/routes/admloginRoutes.js
import express from 'express';
import { authenticateAdmin } from '../middleware/admLoginMiddleware.js';

import { loginAdmin } from '../controllers/admloginController.js';

const router = express.Router();

router.post('/admin/login', loginAdmin);

export default router;
