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

  // Clear filters
  const clearFilters = () => {
    setFilters({ location: '', cuisine: '', minRating: '' });
  };

  return (
    <>
    <Helmet>
        <title>Best Restaurants & Eats in Goa | Top Goan Cuisine & Dining 2025</title>
        <meta
          name="description"
          content="Explore the finest restaurants and eateries in Goa offering authentic Goan cuisine, seafood, luxury dining, and budget-friendly options. Discover your perfect meal in Goa."
        />
        <meta
          name="keywords"
          content="Goa restaurants, Goan cuisine, best eateries in Goa, seafood restaurants Goa, luxury dining Goa, budget restaurants Goa, top restaurants in Goa"
        />
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
              <option value="Panaji">Panaji</option>
              <option value="Cavelossim">Cavelossim</option>
              <option value="Calangute">Calangute</option>
              <option value="Benaulim">Benaulim</option>
              <option value="Cansaulim">Cansaulim</option>
              <option value="Vainguinim">Vainguinim</option>
              <option value="Mobor">Mobor</option>
              <option value="Anjuna">Anjuna</option>
              <option value="Vagator">Vagator</option>
              <option value="Majorda">Majorda</option>
              <option value="Betalbatim">Betalbatim</option>
              <option value="Ashwem">Ashwem</option>
              <option value="Assagao">Assagao</option>
              <option value="Candolim">Candolim</option>
              <option value="Mapusa">Mapusa</option>
              <option value="Panjim">Panjim</option>
              <option value="Sankhelim">Sankhelim</option>
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
              <option value="Business Hotel">Business Hotel</option>
              <option value="Boutique Hotel">Boutique Hotel</option>
              <option value="Family Resort">Family Resort</option>
              <option value="Budget Hotel">Budget Hotel</option>
              <option value="Seafood">Seafood</option>
              <option value="Goan">Goan</option>
              <option value="Cafe">Cafe</option>
              <option value="French">French</option>
              <option value="South Indian">South Indian</option>
              <option value="Burmese">Burmese</option>
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
              placeholder="0-5"
              onChange={handleFilterChange}
              className="filter-input"
            />
          </label>

          <button onClick={clearFilters} className="clear-filter-btn">
            Clear Filters
          </button>
        </div>

        <div className="restaurant-grid">
          {loading ? (
            <p className="loading">Loading delicious spots...</p>
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
                  <a href="/Map"><button id="direction-hotels">Directions</button></a>
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
