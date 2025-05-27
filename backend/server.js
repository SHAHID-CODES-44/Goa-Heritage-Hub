// backend/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';  // Add this line
import User from './models/userModel.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);  // Add this line

// DB Sync and Server start
sequelize.sync({ alter: true })
  .then(() => {
    console.log('✅ Database synced');
    app.listen(5000, () => console.log('🚀 Server running on port 5000'));
  })
  .catch(err => console.error('❌ DB sync failed:', err));
