import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../services/eventService';
import "./EventPage.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message || 'Error loading events');
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleDescription = (eventId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  if (loading) return (
    <div className="event-page">
      <nav className="event-navbar">
        <div className="event-navbar-container">
          <div className="event-navbar-brand">
            <a href="/" className="event-navbar-logo">Goa Events</a>
          </div>
          <form className="event-search" onSubmit={handleSearch}>
            <input
              type="text"
              className="event-search-input"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="event-search-button">
              <span className="event-search-icon">🔍</span>
            </button>
          </form>
        </div>
      </nav>
      <div className="event-loading">Loading events...</div>
      <footer className="event-footer">
        <div className="event-footer-container">
          <p className="event-footer-text">© {new Date().getFullYear()} Goa Events</p>
        </div>
      </footer>
    </div>
  );
  
  if (error) return (
    <div className="event-page">
      <nav className="event-navbar">
        <div className="event-navbar-container">
          <div className="event-navbar-brand">
            <a href="/" className="event-navbar-logo">Goa Events</a>
          </div>
          <form className="event-search" onSubmit={handleSearch}>
            <input
              type="text"
              className="event-search-input"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="event-search-button">
              <span className="event-search-icon">🔍</span>
            </button>
          </form>
        </div>
      </nav>
      <div className="event-error">Error: {error}</div>
      <footer className="event-footer">
        <div className="event-footer-container">
          <p className="event-footer-text">© {new Date().getFullYear()} Goa Events</p>
        </div>
      </footer>
    </div>
  );

  return (
    <div className="event-page">
      {/* Navbar */}
      <nav className="event-navbar">
        <div className="event-navbar-container">
          <div className="event-navbar-brand">
            <a href="/" className="event-navbar-logo">Goa Events</a>
          </div>
          <form className="event-search" onSubmit={handleSearch}>
            <input
              type="text"
              className="event-search-input"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="event-search-button">
              <span className="event-search-icon">🔍</span>
            </button>
          </form>
          <div className="event-navbar-links">
            <a href="/" className="event-navbar-link">Home</a>
            <a href="/Beach" className='event-navbar-link'>Beaches</a>
            <a href="/Map" className='event-navbar-link'>Use Map</a>
            <a href="/events" className="event-navbar-link">Events</a>
            <a href="/About" className="event-navbar-link">About</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="event-main">
        <h1 className="event-heading">Events in Goa</h1>
        <div className="event-grid">
          {events.map(({ event_id, image_path, description, directions_url }) => {
            const isExpanded = expandedDescriptions[event_id];
            const displayText = isExpanded 
              ? description 
              : `${description.substring(0, 100)}${description.length > 100 ? '...' : ''}`;
            
            return (
              <div key={event_id} className="event-card">
                <img
                  src={`/uploads/EventPage/${image_path}`}
                  alt={`Event ${event_id}`}
                  className="event-image"
                />
                <div className="event-content">
              
                  <p className="event-description">
                    {displayText}
                    {description.length > 100 && (
                      <button 
                        onClick={() => toggleDescription(event_id)} 
                        className="event-toggle-description"
                      >
                        {isExpanded ? ' See Less' : ' See More'}
                      </button>
                    )}
                  </p>
                  <a
                    href={directions_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="event-button"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="event-footer">
        <div className="event-footer-container">
          <p className="event-footer-text">© {new Date().getFullYear()} Goa Events</p>
          <div className="event-footer-links">
            <a href="/privacy" className="event-footer-link">Privacy</a>
            <a href="/terms" className="event-footer-link">Terms</a>
            <a href="/contact" className="event-footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventPage;