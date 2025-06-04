// frontend/src/services/postService.js

const API_BASE = 'http://localhost:5000/api/posts';

export async function fetchPosts() {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export async function createPost(name, content) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, content }),
  });
  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.error || 'Failed to create post');
  }
  return res.json();
}
