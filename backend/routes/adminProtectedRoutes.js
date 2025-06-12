// backend/routes/adminProtectedRoutes.js
import express from 'express';
import { authenticateAdmin } from '../middleware/admLoginMiddleware.js';

const router = express.Router();

// ✅ Example protected route — only logged-in admins can access
router.get('/dashboard', authenticateAdmin, (req, res) => {
  res.json({
    success: true,
    message: 'Welcome, admin!',
    adminId: req.admin.adminId
  });
});

export default router;
