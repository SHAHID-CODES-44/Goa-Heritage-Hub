import React, { useState, useEffect } from 'react';
import "./TasteandRestPage.css";

const TasteandRestPage = () => {
  const [filters, setFilters] = useState({
    location: '',
    cuisine: '',
    minRating: ''
  });

  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch restaurants when filters change
  const fetchRestaurants = async () => {
    setLoading(true);

    const query = new URLSearchParams();

    if (filters.location) query.append('location', filters.location);
    if (filters.cuisine) query.append('cuisine', filters.cuisine);
    if (filters.minRating) query.append('minRating', filters.minRating);

    try {
      const res = await fetch(`http://localhost:5000/api/food/restaurants?${query.toString()}`);
      const data = await res.json();
      setRestaurants(Array.isArray(data) ? data : [data]); // ensure array
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

  // Handle filter input changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <>
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

        {/* Filter Section */}
        <div className="filter-container">
          <label>
            Location: 
            <select
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              className="filter-input"
            >
              <option value="">All Locations</option>
              <option value="panji">Panjim</option>
              <option value="Benaulim">Benaulim</option>
              <option value="Calangute">Calangute</option>
              {/* Add more locations as needed */}
            </select>
          </label>

          <label>
            Cuisine: 
            <select
              name="cuisine"
              value={filters.cuisine}
              onChange={handleFilterChange}
              className="filter-input"
            >
              <option value="">All Cuisines</option>
              <option value="Luxury Resort">Luxury Resort</option>
              <option value="Seafood">Seafood</option>
              {/* Add more cuisines as needed */}
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
              placeholder="0-5"
              onChange={handleFilterChange}
              className="filter-input"
            />
          </label>
        </div>

        <div className="restaurant-grid">
          {loading ? (
            <p className="loading">Loading delicious bla...</p>
          ) : restaurants.length === 0 ? (
            <p>No restaurants found.</p>
          ) : (
            restaurants.map(({ id, name, location, cuisine, image, rating }) => (
              <div key={id} className="restaurant-card">
                <img src={`/uploads/foodImages/${image}`} alt={name} />
                <div className="restaurant-details">
                  <h3>{name}</h3>
                  <p><b>Location:</b> {location}</p>
                  <p><b>Cuisine:</b> {cuisine}</p>
                  <p className="rating"><b>Rating:</b> {rating} ⭐</p>
                  <button id="direction-hotels">Directions</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default TasteandRestPage;
