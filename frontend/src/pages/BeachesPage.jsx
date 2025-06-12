import React, { useState, useEffect } from 'react';
import { fetchBeaches } from '../services/beachService';
import { Helmet } from 'react-helmet';
import './BeachPage.css';

const BeachPage = () => {
  const [filters, setFilters] = useState({ location: '', search: '' });
  const [beaches, setBeaches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBeach, setSelectedBeach] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getBeaches = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBeaches(filters);
        setBeaches(data);
      } catch (err) {
        setError('Error fetching beaches.');
        setBeaches([]);
      } finally {
        setLoading(false);
      }
    };

    getBeaches();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const openModal = (beach) => {
    setSelectedBeach(beach);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Filter beaches by location
  const northBeaches = beaches.filter(b => b.location.toLowerCase() === 'north goa');
  const southBeaches = beaches.filter(b => b.location.toLowerCase() === 'south goa');

  const renderBeachCard = (beach, index) => (
    <div key={beach.id} className="beach-card" onClick={() => openModal(beach)}>
      <div className="beach-index">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
      <img src={`/uploads/BeachPage/${beach.image}`} alt={beach.name} className="beach-image" />
      <h3>{beach.name}</h3>
      <p id='beach-dscr'>{beach.description.substring(0, 100)}...</p>
      <p>Rating: {beach.rating}</p>
      <button className="directions-btn">View Details</button>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Best Beaches in Goa | Top Goa Beaches Guide 2025</title>
        <meta
          name="description"
          content="Explore the best beaches in Goa - from popular sandy shores to hidden gems. Find details on water sports, sunset views, and beachside attractions."
        />
        <meta
          name="keywords"
          content="Goa beaches, best beaches in Goa, North Goa beaches, South Goa beaches, Goa beach guide, water sports Goa, sunset beaches Goa"
        />
        <meta name="author" content="YourSiteName" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="beach-navbar">
        <div className="beach-nav-txt">
          <a href="/"><p>Home</p></a>
          <a href="/Wildlife"><p>Nature of Goa</p></a>
          <a href="/Feedback"><p>Feedback</p></a>
          <a href="/About"><p>About us</p></a>
        </div>
        <div className="beach-nav-btns">
          <a href="/Chatbot"><button className="SignupIn">Ask Bot</button></a>
          <a href="/Map"><button className="SignupIn">Map</button></a>
        </div>
      </div>

      <div className="beach-page-container">
        <h1>Explore Beaches of Goa</h1>

        <div className="filters">
          <input
            type="text"
            name="search"
            placeholder="Search beaches by name"
            value={filters.search}
            onChange={handleFilterChange}
          />
          <select name="location" value={filters.location} onChange={handleFilterChange}>
            <option value="">All Locations</option>
            <option value="North Goa">North Goa</option>
            <option value="South Goa">South Goa</option>
          </select>
        </div>

        {loading ? (
          <div className="loading-spinner"></div>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <>
            {/* Show only when North is selected or no filter */}
            {(filters.location === 'North Goa' || !filters.location) && (
              <section>
                <h2>North Goa Beaches</h2>
                <div className="beach-list">
                  {northBeaches.length === 0 ? <p>No beaches found.</p> : northBeaches.map(renderBeachCard)}
                </div>
              </section>
            )}

            {/* Show only when South is selected or no filter */}
            {(filters.location === 'South Goa' || !filters.location) && (
              <section>
                <h2>South Goa Beaches</h2>
                <div className="beach-list">
                  {southBeaches.length === 0 ? <p>No beaches found.</p> : southBeaches.map(renderBeachCard)}
                </div>
              </section>
            )}
          </>
        )}
      </div>

      {/* Modal */}
      {modalOpen && selectedBeach && (
        <div className="beach-modal-overlay" onClick={closeModal}>
          <div className="beach-modal-content" onClick={e => e.stopPropagation()}>
            <button className="beach-close-modal" onClick={closeModal}>
              &times;
            </button>

            <div className="beach-modal-header">
              <h2>{selectedBeach.name}</h2>
              <div className="beach-rating">
                Rating: {selectedBeach.rating} ★
              </div>
              <div className="beach-location">
                {selectedBeach.location}
              </div>
            </div>

            <div className="beach-modal-body">
              <div className="modal-image-container">
                <img
                  src={`/uploads/BeachPage/${selectedBeach.image}`}
                  alt={selectedBeach.name}
                  className="beach-modal-image"
                />
              </div>

              <div className="beach-modal-details">
                <h3>About This Beach</h3>
                <p>{selectedBeach.description}</p>

                <div className="features-grid">
                  <div className="feature">
                    <span className="feature-icon">🏖</span>
                    <span className="feature-text">Beach Type: {selectedBeach.type || 'Sandy'}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🌊</span>
                    <span className="feature-text">Water Sports: {selectedBeach.waterSports || 'Available'}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🍹</span>
                    <span className="feature-text">Shacks: {selectedBeach.shacks || 'Available'}</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🌅</span>
                    <span className="feature-text">Sunset View: {selectedBeach.sunsetView ? 'Yes' : 'No'}</span>
                  </div>
                </div>

                <div className="beach-modal-actions">
                  <button
                    className="beach-directions-btn"
                    type="button"
                    onClick={() => window.open(selectedBeach.directions_url, '_blank')}
                  >
                    Get Directions
                  </button>


                  {/* <button className="save-btn">Save to Favorites</button> */}
                  <button className="beach-close-button" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div> 
          </div>
        </div>
      )}
    </>
  );
};

export default BeachPage;