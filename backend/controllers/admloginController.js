// backend/controllers/admloginController.js
import Admin from '../models/admloginModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ where: { username } });

    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const validPassword = await bcrypt.compare(password, admin.password_hash);

    if (!validPassword) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { adminId: admin.admin_id },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '2h' }
    );

    // Send token (optional), and success flag for frontend
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token, // frontend can use this later if needed
    });
    
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message,
    });
  }
};
