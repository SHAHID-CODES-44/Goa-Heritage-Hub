import React, { useEffect, useState } from "react";
import { fetchWildlifeList } from "../services/wildlifeService";
import './WildlifePage.css';
import Wildlifeimg from '../uploads/WildLifePage/WildmainImg.png';

const WildlifePage = () => {
  const [wildlife, setWildlife] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWildlife = async () => {
      try {
        const data = await fetchWildlifeList();
        setWildlife(data);
      } catch (err) {
        setError(err.message || "Unexpected Error");
      } finally {
        setLoading(false);
      }
    };

    getWildlife();
  }, []);

  if (loading) return <div className="loading-screen">Loading wildlife sanctuaries...</div>;
  if (error) return <div className="error-screen">Error: {error}</div>;

  return (
    <div className="wildlife-container">
      {/* Hero Section */}
      <div className="wildlife-hero">
        <img src={Wildlifeimg} alt="Goa Wildlife" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Goa's Wildlife Sanctuaries</h1>
          <p className="hero-subtitle">Explore the untamed beauty of nature</p>
        </div>
      </div>

      {/* Floating Navbar */}
      <nav className="wildlife-navbar">
        <div className="wild-logo">
          <span className="logo-text">GoaWild</span>
        </div>
        <div className="wildlife-nav-links">
          <a href="/">Home</a>
          <a href="/Beach">Beaches</a>
          <a href="/Food">Restaurants</a>
          <a href="/Feedback">Feedback</a>
        </div>
        <div className="nav-buttons">
          <a href="/SignupIn"><button className="btn-login">Login</button></a>
          <a href="/SignupIn"><button className="btn-signup">SignUp</button></a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="wildlife-sanctuaries">
        {wildlife.map((item, index) => (
          <section className="sanctuary-item" key={item.id}>
            <div className="sanctuary-header">
              <div className="header-line"></div>
              <span className="header-number">{String(index + 1).padStart(2, '0')}</span>
              <h2 className="header-title">{item.title}</h2>
            </div>
            <div className="sanctuary-content">
              <img src={item.image_url} alt={item.title} className="sanctuary-image" />
              <div className="about-box">
                <h3 className="about-title">About</h3>
                <p className="about-text">{item.description}</p>
                <button className="explore-btn">{item.button_label || 'Explore More'}</button>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="wildlife-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Goa Tourism. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WildlifePage;