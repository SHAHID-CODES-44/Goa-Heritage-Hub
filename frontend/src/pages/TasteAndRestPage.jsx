import React, { useState, useEffect } from 'react';
import "./TasteandRestPage.css";
import { Helmet } from 'react-helmet';

const TasteandRestPage = () => {
  const [filters, setFilters] = useState({
    location: '',
    cuisine: '',
    minRating: ''
  });

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchRestaurants = async () => {
    setLoading(true);

    const query = new URLSearchParams();
    if (filters.location) query.append('location', filters.location);
    if (filters.cuisine) query.append('cuisine', filters.cuisine);
    if (filters.minRating) query.append('minRating', filters.minRating);

    try {
      const res = await fetch(`http://localhost:5000/api/food/restaurants?${query.toString()}`);
      const data = await res.json();
      setRestaurants(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
      setRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({ location: '', cuisine: '', minRating: '' });
  };

  const openModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <Helmet>
        <title>Best Restaurants & Eats in Goa | Top Goan Cuisine & Dining 2025</title>
        <meta name="description" content="Explore the finest restaurants and eateries in Goa offering authentic Goan cuisine, seafood, luxury dining, and budget-friendly options." />
        <meta name="keywords" content="Goa restaurants, Goan cuisine, seafood restaurants Goa, luxury dining Goa, budget restaurants Goa" />
        <meta name="author" content="YourSiteName" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="navbar-food">
        <div className="nav-food-txt">
          <a href="/"><p>Home</p></a>
          <a href="/Post"><p>Review</p></a>
          <a href="/Beach"><p>Beaches</p></a>
          <a href="/FAQ"><p>FAQs</p></a>
        </div>
        <div className="btns-food">
          <a href="/SignupIn"><button>Signup</button></a>
          <a href="/SignupIn"><button>Signin</button></a>
        </div>
      </div>

      <div className="taste-and-rest-page">
        <h2>Restaurants in Goa</h2>

        <div className="filter-container">
          <label>
            Location:
            <select name="location" value={filters.location} onChange={handleFilterChange} className="filter-input">
              <option value="">All Locations</option>
              <option value="Panaji">Panaji</option>
              <option value="Calangute">Calangute</option>
              <option value="Anjuna">Anjuna</option>
              <option value="Candolim">Candolim</option>
              <option value="Vagator">Vagator</option>
              <option value="Benaulim">Benaulim</option>
              <option value="Mapusa">Mapusa</option>
              <option value="Panjim">Panjim</option>
              <option value="Colva">Colva</option>
              <option value="Assagao">Assagao</option>
            </select>
          </label>

          <label>
            Cuisine:
            <select name="cuisine" value={filters.cuisine} onChange={handleFilterChange} className="filter-input">
              <option value="">All Cuisines</option>
              <option value="Goan">Goan</option>
              <option value="Seafood">Seafood</option>
              <option value="Cafe">Cafe</option>
              <option value="Luxury">Luxury</option>
              <option value="Bar">Bar</option>
              <option value="Multi-cuisine">Multi-cuisine</option>
            </select>
          </label>

          <label>
            Minimum Rating:
            <input
              type="number"
              name="minRating"
              value={filters.minRating}
              min="0"
              max="5"
              step="0.1"
              placeholder="0–5"
              onChange={handleFilterChange}
              className="filter-input"
            />
          </label>

          <button onClick={clearFilters} className="clear-filter-btn">Clear Filters</button>
        </div>

        <div className="restaurant-grid">
          {loading ? (
            <p className="loading">Loading delicious spots...</p>
          ) : restaurants.length === 0 ? (
            <p className="no-results">No restaurants found matching your criteria.</p>
          ) : (
            restaurants.map((restaurant) => (
              <div
                key={restaurant._id || restaurant.id}
                className="restaurant-card"
                onClick={() => openModal(restaurant)}
              >
                <img
                  src={`/uploads/foodImages/${restaurant.image}`}
                  alt={restaurant.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/default-restaurant.jpg';
                  }}
                />
                <div className="restaurant-details">
                  <h3>{restaurant.name}</h3>
                  <p><b>Location:</b> {restaurant.location}</p>
                  <p><b>Cuisine:</b> {restaurant.cuisine}</p>
                  <p className="rating"><b>Rating:</b> {restaurant.rating} ⭐</p>
                  <button className="view-details-btn" onClick={(e) => { e.stopPropagation(); openModal(restaurant); }}>
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {isModalOpen && selectedRestaurant && (
          <div className="restaurant-modal">
            <div className="modal-overlay" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">&times;</button>

                <div className="modal-image-container">
                  <img
                    src={`/uploads/foodImages/${selectedRestaurant.image}`}
                    alt={selectedRestaurant.name}
                    className="modal-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/default-restaurant.jpg';
                    }}
                  />
                </div>

                <div className="modal-details">
                  <h2>{selectedRestaurant.name}</h2>
                  <div className="detail-row"><span className="detail-label">Location:</span> {selectedRestaurant.location}</div>
                  <div className="detail-row"><span className="detail-label">Cuisine:</span> {selectedRestaurant.cuisine}</div>
                  <div className="detail-row rating-stars">
                    <span className="detail-label">Rating:</span>
                    {Array.from({ length: Math.floor(selectedRestaurant.rating) }).map((_, i) => <span key={i}>⭐</span>)}
                    {selectedRestaurant.rating % 1 >= 0.5 && <span>½</span>}
                    <span className="rating-value">({selectedRestaurant.rating})</span>
                  </div>

                  {selectedRestaurant.description && (
                    <div className="detail-row full-width">
                      <span className="detail-label">Description:</span>
                      <p>{selectedRestaurant.description}</p>
                    </div>
                  )}

                  {selectedRestaurant.hours && (
                    <div className="detail-row"><span className="detail-label">Opening Hours:</span> {selectedRestaurant.hours}</div>
                  )}

                  {selectedRestaurant.priceRange && (
                    <div className="detail-row"><span className="detail-label">Price Range:</span> {selectedRestaurant.priceRange}</div>
                  )}

                  {selectedRestaurant.contact && (
                    <div className="detail-row"><span className="detail-label">Contact:</span> {selectedRestaurant.contact}</div>
                  )}

                  <div className="modal-actions">
                    <a href="/Map" className="modal-direction-btn" onClick={(e) => e.stopPropagation()}>
                      See Directions
                    </a>
                    <button className="modal-back-btn" onClick={closeModal}>Back to List</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TasteandRestPage;
