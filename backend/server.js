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
import chatbotRoutes from './routes/chatbotRoutes.js';  // <-- chatbot related routes
import eventRoutes from './routes/eventRoutes.js';


dotenv.config();

const app = express();

// Resolve __dirname in ES modules environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware setup
app.use(cors());
app.use(express.json());

// Serve static files (for images, etc.)
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Mount chatbot routes under /api/chatbot (better semantic separation)
app.use('/api/chatbot', chatbotRoutes);

// Mount other API routes
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/wildlife', wildlifeRoutes);
app.use('/api/beaches', beachRoutes);
app.use('/api/events', eventRoutes);

// Sync DB and start server
sequelize.sync({ alter: true })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => {
    console.error('Database sync failed:', err);
  });
