import { createPost, getAllPosts } from '../models/postModel.js';

export async function addPost(req, res) {
  try {
    const { name, content } = req.body;

    if (!name || !content) {
      return res.status(400).json({ error: 'Name and content are required.' });
    }

    const postId = await createPost(name, content);
    return res.status(201).json({ message: 'Post created', postId });
  } catch (error) {
    console.error('Add Post Error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}

export async function fetchPosts(req, res) {
  try {
    const posts = await getAllPosts();
    return res.json(posts);
  } catch (error) {
    console.error('Fetch Posts Error:', error);
    return res.status(500).json({ error: 'Server error' });
  }
}
