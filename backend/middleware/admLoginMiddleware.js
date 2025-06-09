// backend/middleware/adminAuth.js
import jwt from 'jsonwebtoken';

export const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
  if (!token) return res.status(401).json({ message: 'Token missing' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    req.adminId = decoded.adminId;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
