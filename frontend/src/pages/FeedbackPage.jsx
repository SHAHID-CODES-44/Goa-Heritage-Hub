import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Feedback.css";

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    feedback: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await axios.post('http://localhost:5000/api/feedback/submit', formData);
      setStatus({ success: true, message: 'Feedback submitted successfully!' });
      setFormData({ name: '', email: '', contact: '', feedback: '' });
    } catch (error) {
      setStatus({
        success: false,
        message: error.response?.data?.message || 'Failed to submit feedback',
      });
    }
  };

  return (
    <div className="feedback-container">
      {/* Navigation Bar */}
      <nav className="feedback-nav">
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          <a href="/FAQ">Testimonial</a>
        </div>
        <div className="auth-links">
          <Link to="/SignupIn" className="signup-btn">SignUp</Link>
          <Link to="/SignupIn" className="login-btn">Login</Link>
        </div>
      </nav>

      {/* Feedback Form */}
      <div className="feedback-form-container">
        <h2>Share Your Feedback</h2>

        {status && (
          <div className={`status-message ${status.success ? 'success' : 'error'}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows="3"
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
