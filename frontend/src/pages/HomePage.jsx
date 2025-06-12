import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { Helmet } from 'react-helmet';
import logo from '../uploads/Homepage/logo5.png';
import image1 from '../uploads/Homepage/image-1.png';
import image2 from '../uploads/Homepage/jetski.png';
import image3 from '../uploads/Homepage/taj_exotica.png';
import image4 from '../uploads/Homepage/image-4.png';
import image5 from '../uploads/Homepage/image-5.png';
import image6 from '../uploads/Homepage/image-6.png';
import image7 from '../uploads/Homepage/image-7.png';
import image8 from '../uploads/Homepage/image-8.png';
import image9 from '../uploads/Homepage/image-9.png';
import image10 from '../uploads/Homepage/image-10.png';
import image11 from '../uploads/Homepage/image-11.png';
import image12 from '../uploads/Homepage/image-12.png';
import robotIcon from '../uploads/Homepage/robot-icon.png';
import anjuna from '../uploads/BeachPage/anjuna.png';
import { Menu } from 'lucide-react';

const HomePage = () => {
    const [email, setEmail] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth > 768 && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, rememberMe });
    };

    const apiKey = 'e040d6c3ce9ac8cb37a7afc18884967c';
    const city = 'Goa';

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch weather. May be internet issue.');
                }
                return res.json();
            })
            .then(data => setWeather(data))
            .catch(err => setError('Not connected to network.'));
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <Helmet>
                <title>Explore Goa Tourism 2025 | Beaches, Wildlife, Adventures & More</title>
                <meta
                    name="description"
                    content="Discover the best of Goa tourism including pristine beaches, wildlife sanctuaries, exciting adventures, delicious restaurants, and comfortable stays. Plan your perfect Goa trip now!"
                />
                <meta
                    name="keywords"
                    content="Goa tourism, Goa travel guide, Goa beaches, wildlife in Goa, Goa adventures, Goa restaurants, Goa stay, Goa holidays"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://yourwebsite.com/" />
            </Helmet>

            <div className="home-container">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="main-container">
                        <div className="navbar">
                            <img src={logo} alt="Goa Travel Logo" id="logo" />

                            <Menu
                                size={100}
                                onClick={toggleMobileMenu}
                                aria-label="Toggle menu"
                                className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
                            />
                            
                            <div className={`navtxt ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                                <Link to="/" onClick={() => windowWidth <= 768 && toggleMobileMenu()}>Home</Link>
                                <Link to="/Adventure" onClick={() => windowWidth <= 768 && toggleMobileMenu()}>Adventure</Link>
                                <Link to="/Event" onClick={() => windowWidth <= 768 && toggleMobileMenu()}>Events</Link>
                                <Link to="/Beach" onClick={() => windowWidth <= 768 && toggleMobileMenu()}>Beaches</Link>
                                <Link to="/Wildlife" onClick={() => windowWidth <= 768 && toggleMobileMenu()}>WildLife</Link>
                                <Link to="/Food" onClick={() => windowWidth <= 768 && toggleMobileMenu()}>Stay&Eats</Link>
                            </div>
                            
                            <div className={`register ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                                <Link to="/SignupIn" onClick={() => windowWidth <= 768 && toggleMobileMenu()}>
                                    <button className="outline-btn">SignUp</button>
                                </Link>
                                <Link to="/SignupIn" onClick={() => windowWidth <= 768 && toggleMobileMenu()}>
                                    <button className="primary-btn">Login</button>
                                </Link>
                            </div>
                        </div>

                        <div className="title">
                            <h1>TRAVEL</h1>
                            <h2>Explore The beauty of Goa</h2>
                            <div className="action-buttons">
                                <Link to="/Map"><button className="primary-btn">Visit Map</button></Link>
                                <Link to="/Chatbot"><button className="outline-btn">Ask Robot</button></Link>
                            </div>
                        </div>

                        <div className="botton-txt">
                            <div className="stat-item">
                                <p>population</p>
                                <p>1,458,545 </p>
                            </div>
                            <div className="stat-item">
                                <p>Language</p>
                                <p>Konkani</p>
                            </div>
                            <div className="stat-item">
                                <p>Beaches</p>
                                <p>43</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Weather Section with error handling */}
                <div className="weather-widget-container">
                    {error ? (
                        <div className="weather-widget error">
                            <h2>Weather Information</h2>
                            <p style={{ color: "red" }}>{error}</p>
                        </div>
                    ) : !weather ? (
                        <div className="weather-widget loading">
                            <h2>Weather Information</h2>
                            <p>Loading weather data...</p>
                        </div>
                    ) : (
                        <div className={`weather-widget ${weather.main.temp > 30 ? 'hot' :
                            weather.main.temp > 18 ? 'moderate' : 'cold'
                        }`}>
                            <h2>Weather in {weather.name}</h2>
                            <p>Temperature: {weather.main.temp} °C</p>
                            <p>Condition: {weather.weather[0].description}</p>
                            <Link to="/WeatherApp"><button id="weather-btn">See Full Details</button></Link>
                        </div>
                    )}
                </div>

                {/* Featured Images Section */}
                <div className="featured-section">
                    <h2>Popular Destinations</h2>
                    <div className="featured-images">
                        <Link to="/Beach"><div className="featured-item">
                            <img src={image1} alt="Goa Destination 1" />
                            <p>Goa Beaches</p>
                        </div></Link>
                        <Link to="/Adventure"><div className="featured-item">
                            <img src={image2} alt="Goa Destination 2" />
                            <p>Adventures</p>
                        </div></Link>
                        <Link to="/Food"><div className="featured-item">
                            <img src={image3} alt="Goa Destination 3" />
                            <p>Goan Cuisine</p>
                        </div></Link>
                    </div>
                </div>

                {/* Gallery Section */}
               <div className="gallery-section">
  <h2 className="section-title">Discover Goa's Hidden Gems</h2>
  <p className="section-subtitle">Explore the vibrant culture, stunning landscapes, and rich heritage of India's beach paradise</p>
  
  <div className="gallery-container">
    <div className="gallery-main">
      {/* Featured image with overlay */}
      <div className="featured-image" 
           style={{ backgroundImage: `url(${image4})` }}>
        <div className="image-overlay">
          <h3>Goa's Pristine Beaches</h3>
          <p>50+ stunning beaches along the Arabian Sea</p>
        </div>
      </div>
      
      {/* Secondary images grid */}
      <div className="secondary-grid">
        {[image5, image6, image7].map((img, index) => (
          <div key={index} className="gallery-item" 
               style={{ backgroundImage: `url(${img})` }}>
            <div className="hover-content">
              <button className="quick-view-btn">Quick View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Thumbnail carousel */}
    <div className="thumbnail-carousel">
      {[image8, image9, image10, image11, image12, anjuna].map((img, index) => (
        <div key={index} className="thumbnail-item">
          <img src={img} alt={`Goa thumbnail ${index+1}`} />
          <div className="thumbnail-overlay"></div>
        </div>
      ))}
    </div>
  </div>
  
  {/* Interactive CTA section */}
  <div className="cta-section">
    <div className="cta-card" onClick={() => navigate('/Food')}>
      <div className="cta-icon">🍽️</div>
      <h3>Goan Cuisine</h3>
      <p>Explore 100+ restaurants serving authentic Goan flavors</p>
      <button className="cta-btn">Discover Restaurants</button>
    </div>
    
    <div className="cta-card" onClick={() => navigate('/Facts')}>
      <div className="cta-icon">ℹ️</div>
      <h3>Goa Facts</h3>
      <p>Learn fascinating facts about Goa's history and culture</p>
      <button className="cta-btn">Explore Facts</button>
    </div>
    
    <div className="cta-card" onClick={() => navigate('/Adventure')}>
      <div className="cta-icon">🚀</div>
      <h3>Adventure Sports</h3>
      <p>Experience thrilling water sports and activities</p>
      <button className="cta-btn">Find Adventures</button>
    </div>
  </div>
</div>
                <hr />

                {/* CTA Section */}
                <div className="cta-section">
                    <img src={robotIcon} alt="Travel Assistant Robot" className="robot-icon" />
                    <h2>Need help planning your trip?</h2>
                    <p>Our virtual assistant can help you create the perfect itinerary</p>
                    <Link to="/Chatbot"><button className="primary-btn">Ask Robot</button></Link>
                    <Link to="/beach"><button className="outline-btn">Explore More</button></Link>
                </div>

                {/* Footer */}
                <footer className="main-footer">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src={logo} alt="Goa Travel Logo" />
                            <p>Explore the paradise of Goa</p>
                        </div>
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <Link to="/">Home</Link>
                            <Link to="/FAQ">FAQs</Link>
                            <Link to="/Transport">Transport in Goa</Link>
                            <Link to="/About">About</Link>
                        </div>
                        <div className="footer-links">
                              <Link to="/Safety">Guide & safety tips</Link>
                            <Link to="/Contact">Contact</Link>
                            <Link to="/Terms">Terms & Conditions</Link>
                            <Link to="/Feedback">Feedback to us</Link>
                            <Link to="/Post">Posts & Reviews</Link>
                        </div>
                        <div className="footer-contact">
                            <h3>Contact Us</h3>
                            <p>travel-goa@gmail.com</p>
                            <p>+91 demo number....</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Goa Travel. @official site</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default HomePage;
