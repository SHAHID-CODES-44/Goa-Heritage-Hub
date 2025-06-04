import express from 'express';
import { addPost, fetchPosts } from '../controllers/postController.js';

const router = express.Router();

// POST /api/posts
router.post('/', addPost);

// GET /api/posts
router.get('/', fetchPosts);

export default router;
