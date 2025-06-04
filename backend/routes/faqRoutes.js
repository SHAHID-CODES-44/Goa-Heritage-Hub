import express from 'express';
import { getFaqs, createFaq } from '../controllers/faqController.js';

const router = express.Router();

router.get('/', getFaqs);      // Handles GET /api/faqs
router.post('/', createFaq);   // Handles POST /api/faqs

export default router;
