import React, { useEffect, useState } from 'react';
import { fetchAdventures } from '../services/adventureService';
import './Adventure.css';

const AdventurePage = () => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAdventures = async () => {
      try {
        const data = await fetchAdventures();
        setAdventures(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAdventures();
  }, []);

  if (loading) return <div className="loading">Loading adventures...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div>
      {/* Navbar */}
      <nav className="adv-navbar">
        <a href="/" className="nav-logo">Goa Adventures</a>
        <div className="adv-nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/beaches" className="nav-link">Beaches</a>
          <a href="/map" className="nav-link">Map</a>
          <a href="/chatbot" className="nav-link">Chatbot</a>
        </div>
        <div className="auth-buttons">
          <button className="auth-button login">Login</button>
          <button className="auth-button signup">Sign Up</button>
        </div>
      </nav>

      {/* Adventure Content */}
      <div className="adventure-container">
        <h1 className="page-title">Adventures in Goa</h1>
        
        {adventures.length === 0 ? (
          <p className="no-adventures">No adventures available.</p>
        ) : (
          <div className="adventures-grid">
            {adventures.map((adventure) => (
              <div key={adventure.adventure_id} className="adventure-card">
                <img
                  src={`/uploads/adventurePage/${adventure.image_path}`}
                  alt={adventure.title}
                  className="adventure-image"
                />
                <div className="adventure-content">
                  <h2 className="adventure-title">{adventure.title}</h2>
                  <p className="adventure-description">{adventure.description}</p>
                  {adventure.direction_url && (
                    <a 
                      href={adventure.direction_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="direction-button"
                    >
                      Get Directions
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdventurePage;
