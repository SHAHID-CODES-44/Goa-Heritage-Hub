import express from 'express';
import { submitFeedback, getFeedbacks } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/submit', submitFeedback);

router.get('/', getFeedbacks);

export default router;
