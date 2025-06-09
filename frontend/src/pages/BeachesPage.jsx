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
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Filter beaches by location for display
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
            <section>
              <h2>North Goa Beaches</h2>
              <div className="beach-list">
                {northBeaches.length === 0 ? <p>No beaches found.</p> : northBeaches.map(renderBeachCard)}
              </div>
            </section>

            <section>
              <h2>South Goa Beaches</h2>
              <div className="beach-list">
                {southBeaches.length === 0 ? <p>No beaches found.</p> : southBeaches.map(renderBeachCard)}
              </div>
            </section>
          </>
        )}
      </div>

      {/* Beautiful Modal */}
      {modalOpen && selectedBeach && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            
            <div className="modal-header">
              <h2>{selectedBeach.name}</h2>
              <div className="beach-rating">
                Rating: {selectedBeach.rating} ★
              </div>
              <div className="beach-location">
                {selectedBeach.location}
              </div>
            </div>
            
            <div className="modal-body">
              <div className="modal-image-container">
                <img 
                  src={`/uploads/BeachPage/${selectedBeach.image}`} 
                  alt={selectedBeach.name} 
                  className="modal-image"
                />
              </div>
              
              <div className="modal-details">
                <h3>About This Beach</h3>
                <p>{selectedBeach.description}</p>
                
                <div className="features-grid">
                  <div className="feature">
                    <span className="feature-icon">🏖️</span>
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
                
                <div className="modal-actions">
                  <a href="/Map"><button className="directions-btn">
                    Get Directions
                  </button>
                  </a>
                  <button className="save-btn">
                    Save to Favorites
                  </button>
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