import React, { useEffect, useState } from 'react';
import { fetchAdventures } from '../services/adventureService';
import './Adventure.css';
import { Helmet } from 'react-helmet';

const AdventurePage = () => {
  const [adventures, setAdventures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedAdventure, setSelectedAdventure] = useState(null); // New state for modal

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
    <>
      <Helmet>
        <title>Top Adventure Activities in Goa | Thrilling Goa Adventures 2025</title>
        <meta
          name="description"
          content="Discover the best adventure activities in Goa including trekking, water sports, scuba diving, parasailing, and more. Experience the thrill and excitement in Goa."
        />
        <meta
          name="keywords"
          content="Goa adventure activities, Goa water sports, trekking in Goa, scuba diving Goa, parasailing Goa, adventure sports Goa, thrilling activities Goa"
        />
        <meta name="author" content="YourSiteName" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div>
        {/* Navbar - unchanged */}
        <nav className="adv-navbar">
          <a href="/" className="nav-logo">Goa Adventures</a>
          <div className="adv-nav-links">
            <a href="/" className="nav-link">Home</a>
            <a href="/beach" className="nav-link">Beaches</a>
            <a href="/Map" className="nav-link">Map</a>
            <a href="/Chatbot" className="nav-link">Chatbot</a>
          </div>
          <div className="auth-buttons">
            <a href="/SignupIn"><button className="auth-button login">Login</button></a>
            <a href="/SignupIn"><button className="auth-button signup">Sign Up</button></a>
          </div>
        </nav>

        {/* Adventure Content - with modal trigger */}
        <div className="adventure-container">
          <h1 className="page-title">Adventures in Goa</h1>
          
          {adventures.length === 0 ? (
            <p className="no-adventures">No adventures available.</p>
          ) : (
            <div className="adventures-grid">
              {adventures.map((adventure) => (
                <div 
                  key={adventure.adventure_id} 
                  className="adventure-card"
                  onClick={() => setSelectedAdventure(adventure)} // Added click handler
                >
                  <img
                    src={`/uploads/adventurePage/${adventure.image_path}`}
                    alt={adventure.title}
                    className="adventure-image"
                  />
                  <div className="adventure-content">
                    <h2 className="adventure-title">{adventure.title}</h2>
                    <p className="adventure-description">{adventure.description}</p>
                    <a href="/Map" className="direction-button">
                      Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal - New addition */}
        {selectedAdventure && (
          <div className="adventure-modal">
            <div className="modal-content">
              <span 
                className="close-modal" 
                onClick={() => setSelectedAdventure(null)}
              >
                &times;
              </span>
              <img
                src={`/uploads/adventurePage/${selectedAdventure.image_path}`}
                alt={selectedAdventure.title}
                className="modal-image"
              />
              <div className="modal-details">
                <h2>{selectedAdventure.title}</h2>
                <p>{selectedAdventure.description}</p>
                <a href="/Map" className="modal-button">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdventurePage;