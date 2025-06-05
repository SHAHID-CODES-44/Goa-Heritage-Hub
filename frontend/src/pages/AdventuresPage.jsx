import React, { useEffect, useState } from 'react';
import { fetchAdventures } from '../services/adventureService';

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

  if (loading) return <div>Loading adventures...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Adventures in Goa</h1>
      {adventures.length === 0 ? (
        <p>No adventures available.</p>
      ) : (
        adventures.map((adventure) => (
          <div key={adventure.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <h2>{adventure.title}</h2>
            <p>{adventure.description}</p>
            {adventure.image && (
              <img src={`/uploads/adventurePage/${adventure.image}`} alt={adventure.title} />
            )}
            {/* Example of a direction button */}
            {adventure.direction && (
              <a href={adventure.direction} target="_blank" rel="noopener noreferrer">
                <button>Get Directions</button>
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AdventurePage;
