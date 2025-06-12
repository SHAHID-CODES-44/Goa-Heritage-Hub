import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import sequelize from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import postRoutes from './routes/postRoutes.js';
import faqRoutes from './routes/faqRoutes.js';
import foodRoutes from './routes/foodRoutes.js';
import wildlifeRoutes from './routes/wildlifeRoutes.js';
import beachRoutes from './routes/beachRoutes.js';
import chatbotRoutes from './routes/chatbotRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import adventureRoutes from './routes/adventureRoutes.js';

import adminRoutes from './routes/adminRoutes.js';
import admloginRoutes from './routes/admloginRoutes.js';
import adminProtectedRoutes from './routes/adminProtectedRoutes.js';

dotenv.config();
const app = express();

// ES module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// ✅ Mount API routes
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/wildlife', wildlifeRoutes);
app.use('/api/beaches', beachRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/adventure', adventureRoutes);
app.use('/api/chatbot', chatbotRoutes);

// ✅ Login route (no auth required)
app.use('/api/admin', admloginRoutes);

// ✅ Admin dashboard or protected stuff (requires token)
app.use('/api/admin', adminProtectedRoutes);

// (Optional) If you have general admin CRUDs (non-secured), keep this at the end
app.use('/api/admin', adminRoutes);

// Sequelize & Start Server
sequelize.sync({ alter: true })
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database sync failed:', err);
  });
