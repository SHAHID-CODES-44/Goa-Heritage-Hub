import React, { useState, useEffect } from 'react';
import { fetchBeaches } from '../services/beachService';
import './BeachPage.css';

const BeachPage = () => {
  const [filters, setFilters] = useState({ location: '', search: '' });
  const [beaches, setBeaches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  // Filter beaches by location for display
  const northBeaches = beaches.filter(b => b.location.toLowerCase() === 'north goa');
  const southBeaches = beaches.filter(b => b.location.toLowerCase() === 'south goa');

  const renderBeachCard = (beach, index) => (
    <div key={beach.id} className="beach-card">
      <div className="beach-index">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
      <img src={`/uploads/BeachPage/${beach.image}`} alt={beach.name} className="beach-image" />
      <h3>{beach.name}</h3>
      <p>{beach.description}</p>
      <p>Rating: {beach.rating}</p>
      <button onClick={() => window.open(beach.directions_url || '#', '_blank')}>
        Directions
      </button>
    </div>
  );

  return (
    <>
      <div className="beach-page-container">
        {/* Navbar omitted for brevity, keep yours if needed */}

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
          <p>Loading beaches...</p>
        ) : error ? (
          <p>{error}</p>
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

      {/* Footer omitted for brevity, keep yours if needed */}
    </>
  );
};

export default BeachPage;
