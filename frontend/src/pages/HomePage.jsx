import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import image13 from '../uploads/WildLifePage/mahaveer.png';
import image14 from '../uploads/BeachPage/colva.png';
import { Menu } from 'lucide-react';

const HomePage = () => {
    const [email, setEmail] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    useEffect(() => {
        const apiKey = 'e040d6c3ce9ac8cb37a7afc18884967c';
        const city = 'Goa';

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch weather');
                return res.json();
            })
            .then(data => setWeather(data))
            .catch(err => setError('Weather data unavailable'));
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
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
                    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                        <img src={logo} alt="Goa Travel Logo" className="logo" />

                        <Menu
                            size={24}
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                            className={`mobile-menu-button ${isMobileMenuOpen ? 'open' : ''}`}
                        />
                        
                        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                            <Link to="/" onClick={closeMobileMenu}>Home</Link>
                            <Link to="/Adventure" onClick={closeMobileMenu}>Adventure</Link>
                            <Link to="/Event" onClick={closeMobileMenu}>Events</Link>
                            <Link to="/Beach" onClick={closeMobileMenu}>Beaches</Link>
                            <Link to="/Wildlife" onClick={closeMobileMenu}>WildLife</Link>
                            <Link to="/Food" onClick={closeMobileMenu}>Stay&Eats</Link>
                        </div>
                        
                        <div className={`auth-buttons ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                            <Link to="/SignupIn" onClick={closeMobileMenu}>
                                <button className="outline-btn">SignUp</button>
                            </Link>
                            <Link to="/SignupIn" onClick={closeMobileMenu}>
                                <button className="primary-btn">Login</button>
                            </Link>
                        </div>
                    </div>

                    <div className="hero-content">
                        <h1 className="hero-title">TRAVEL</h1>
                        <h2 className="hero-subtitle">Explore The Beauty of Goa</h2>
                        <div className="hero-actions">
                            <Link to="/Map"><button className="primary-btn pulse-animation" id="home-map-button">Visit Map</button></Link>
                            <Link to="/Chatbot"><button className="outline-btn" id="home-bot-button">Ask Chatbot</button></Link>
                        </div>
                    </div>

                    <div className="stats-container">
                        <div className="stat-item">
                            <p className="stat-label">population</p>
                            <p className="stat-value">1,458,545 </p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-label">Language</p>
                            <p className="stat-value">Konkani</p>
                        </div>
                        <div className="stat-item">
                            <p className="stat-label">Beaches</p>
                            <p className="stat-value">43</p>
                        </div>
                    </div>
                </div>

                {/* Weather Widget */}
                <div className="weather-widget-container">
                    {error ? (
                        <div className="weather-widget error">
                            <h2>Weather Information</h2>
                            <p className="error-message">{error}</p>
                        </div>
                    ) : !weather ? (
                        <div className="weather-widget loading">
                            <h2>Weather Information</h2>
                            <div className="loading-spinner"></div>
                        </div>
                    ) : (
                        <div className={`weather-widget ${weather.main.temp > 30 ? 'hot' :
                            weather.main.temp > 18 ? 'moderate' : 'cold'
                        }`}>
                            <h2>Weather in {weather.name}</h2>
                            <p>Temperature: {weather.main.temp} °C</p>
                            <p>Condition: {weather.weather[0].description}</p>
                            <Link to="/WeatherApp"><button className="weather-details-btn">See Full Details</button></Link>
                        </div>
                    )}
                </div>

                {/* Featured Destinations */}
                <div className="featured-section">
                    <h2 className="section-title">Popular Destinations</h2>
                    <div className="featured-grid">
                        <Link to="/Beach" className="featured-card">
                            <img src={image1} alt="Goa Beaches" className="featured-image" />
                            <div className="featured-overlay">
                                <h3>Goa Beaches</h3>
                                <p>Discover pristine shores</p>
                            </div>
                        </Link>
                        <Link to="/Adventure" className="featured-card">
                            <img src={image2} alt="Adventures" className="featured-image" />
                            <div className="featured-overlay">
                                <h3>Adventures</h3>
                                <p>Thrilling activities</p>
                            </div>
                        </Link>
                        <Link to="/Food" className="featured-card">
                            <img src={image3} alt="Goan Cuisine" className="featured-image" />
                            <div className="featured-overlay">
                                <h3>Goan Cuisine</h3>
                                <p>Taste local flavors</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="gallery-section">
                    <h2 className="section-title">Discover Goa's Hidden Gems</h2>
                    <p className="section-subtitle">Explore the vibrant culture, stunning landscapes, and rich heritage</p>
                    
                    <div className="gallery-container">
                        <div className="gallery-main">
                            <div className="featured-gallery-item" style={{ backgroundImage: `url(${image4})` }}>
                                <div className="gallery-overlay">
                                    <h3>Goa's Pristine Beaches</h3>
                                    <p>50+ stunning beaches along the Arabian Sea</p>
                                </div>
                            </div>
                            
                            <div className="secondary-gallery-grid">
                                {[image5, image6, image7].map((img, index) => (
                                    <div key={index} className="gallery-item" style={{ backgroundImage: `url(${img})` }}>
                                        <div className="gallery-item-overlay">
                                            <button className="quick-view-btn">Quick View</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="gallery-carousel">
                            {[image8, image9, image10, image11, image12,image13, anjuna,image14].map((img, index) => (
                                <div key={index} className="carousel-item">
                                    <img src={img} alt={`Goa attraction ${index+1}`} className="carousel-image" />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="cta-grid">
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

                {/* Travel Assistant CTA */}
                <div className="assistant-cta">
                    <img src={robotIcon} alt="Travel Assistant" className="assistant-icon" />
                    <h2>Need help planning your trip?</h2>
                    <p>Our virtual assistant can help you create the perfect itinerary</p>
                    <div className="assistant-actions">
                        <Link to="/Chatbot"><button className="primary-btn pulse-animation">Ask Robot</button></Link>
                        <Link to="/beach"><button className="outline-btn">Explore More</button></Link>
                    </div>
                </div>

                <footer className="main-footer">
    <div className="footer-content">
        <div className="footer-brand">
            <img src={logo} alt="Goa Travel Logo" className="footer-logo" />
            <p className="footer-tagline">Explore the paradise of Goa</p>
        </div>
        
        <div className="footer-links-container">
            <div className="footer-links-column">
                <Link to="/">Home</Link>
                <Link to="/FAQ">FAQs</Link>
                <Link to="/Transport">Transport</Link>
                <Link to="/About">About</Link>
            </div>
            
            <div className="footer-links-column">
                <Link to="/Safety">Safety Tips</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Terms">Terms</Link>
                <Link to="/Feedback">Feedback</Link>
            </div>
        </div>
        
        <div className="footer-contact">
            <h3 className="contact-heading">Contact Us</h3>
            <p className="contact-email">travel-goa@gmail.com</p>
        </div>
    </div>
    
    <div className="footer-bottom">
        <p className="copyright">&copy; {new Date().getFullYear()} Goa Travel</p>
    </div>
</footer>
            </div>
        </>
    );
};

export default HomePage;