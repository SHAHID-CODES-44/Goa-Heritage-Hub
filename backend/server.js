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

dotenv.config();

const app = express();

// ES module __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware: enable CORS for all origins (adjust if needed)
app.use(cors());

// Middleware: parse incoming JSON payloads
app.use(express.json());

// Serve static files for images, accessible via `/uploads/...` URL
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Mount API routes
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/wildlife', wildlifeRoutes);
app.use('/api/beaches', beachRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/adventure', adventureRoutes);
app.use('/api/chatbot', chatbotRoutes); // chatbot routes last or anywhere

// Sync Sequelize models with database and then start server
sequelize.sync({ alter: true })  // or { force: false } depending on your needs
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database sync failed:', err);
  });
