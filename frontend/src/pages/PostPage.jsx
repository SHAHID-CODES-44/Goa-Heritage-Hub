// frontend/src/pages/PostPages.jsx
import React, { useState, useEffect } from 'react';
import { fetchPosts, createPost } from '../services/postService.js';
import './PostPage.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const PostPages = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  // Fetch posts from backend
  const loadPosts = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load posts. Please try again later.');
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  // Submit new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !content.trim()) {
      setError('Both name and post content are required');
      return;
    }

    try {
      await createPost(name, content);
      setName('');
      setContent('');
      loadPosts(); // Refresh posts
    } catch (err) {
      setError(err.message || 'Failed to create post. Please try again.');
      console.error(err);
    }
  };

  return (
    <>
    <div className="navbar-post">
      <div className="nav-txt-post">
      <a href="/"><p>Home</p></a>
      <a href="/About"></a><p>About</p>
      <a href="/Feedback"><p>Feedback</p></a>
      <a href="/FAQ"><p>More</p></a>
      </div>
      <div className="post-nav-btns">
        <a href="/SignupIn"><button>Signup</button></a>
        <a href="/SignupIn"><button>Login</button></a>
      </div>
    </div>
    <div className="post-container">
      <h1 className="post-header">Community Posts</h1>
      
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content" className="form-label">Post Content</label>
          <textarea
            id="content"
            placeholder="Share your thoughts..."
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-textarea"
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <button type="submit" className="submit-button">
          Submit Post
        </button>
      </form>

      <h2 className="post-header">Recent Posts</h2>
      
      {posts.length === 0 ? (
        <div className="empty-state">No posts yet. Be the first to share!</div>
      ) : (
        <ul className="posts-list">
          {posts.map(post => (
            <li key={post.id} className="post-item">
              <div className="post-header">
                <h3 className="post-author">{post.name}</h3>
                <span className="post-date">
                  {new Date(post.created_at).toLocaleString()}
                </span>
              </div>
              <div className="post-content-txt">
              <p className="post-content">{post.content}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default PostPages;