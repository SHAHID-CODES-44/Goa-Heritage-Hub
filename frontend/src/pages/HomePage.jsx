import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import logo from '../uploads/Homepage/Homepage.png';
import image1 from '../uploads/Homepage/image-1.png';
import image2 from '../uploads/Homepage/image-2.png';
import image3 from '../uploads/Homepage/image-3.png';
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

const HomePage = () => {
    const [email, setEmail] = React.useState("");
    const [rememberMe, setRememberMe] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ email, rememberMe });
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="main-container">
                    <div className="navbar">
                        <img src={logo} alt="Goa Travel Logo" id="logo" />
                        <div className="navtxt">
                            <p>Home</p>
                            <p>Adventure</p>
                            <a href="/Beach"><p>Beaches</p></a>
                            <p>WildLife</p>
                            <a href="/Feedback"><p>Feedback</p></a>
                        </div>
                        <div className="register">
                            <a href="/SignupIn">
                                <button className="outline-btn">SignUp</button>
                            </a>

                            <a href="/SignupIn"><button className="primary-btn">Login</button></a>
                        </div>
                    </div>

                    <div className="title">
                        <h1>TRAVEL</h1>
                        <h2>Explore The beauty of Goa</h2>
                        <div className="action-buttons">
                            <button className="primary-btn">Explore More</button>
                            <button className="outline-btn">Ask Robot</button>
                        </div>
                    </div>

                    <div className="botton-txt">
                        <div className="stat-item">
                            <p>population</p>
                            <p>200000</p>
                        </div>
                        <div className="stat-item">
                            <p>Language</p>
                            <p>Konkani</p>
                        </div>
                        <div className="stat-item">
                            <p>Beaches</p>
                            <p>50</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Images Section */}
            <div className="featured-section">
                <h2>Popular Destinations</h2>
                <div className="featured-images">
                    <div className="featured-item">
                        <img src={image1} alt="Goa Destination 1" />
                        <p>North Goa Beaches</p>
                    </div>
                    <div className="featured-item">
                        <img src={image2} alt="Goa Destination 2" />
                        <p>Portuguese Architecture</p>
                    </div>
                    <div className="featured-item">
                        <img src={image3} alt="Goa Destination 3" />
                        <p>Goan Cuisine</p>
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="gallery-section">
                <h2>Explore More of Goa</h2>
                <div className="gallery-grid">
                    <img src={image4} alt="Goa Gallery 1" />
                    <img src={image5} alt="Goa Gallery 2" />
                    <img src={image6} alt="Goa Gallery 3" />
                    <img src={image7} alt="Goa Gallery 4" />
                    <img src={image8} alt="Goa Gallery 5" />
                    <img src={image9} alt="Goa Gallery 6" />
                    <img src={image10} alt="Goa Gallery 7" />
                    <img src={image11} alt="Goa Gallery 8" />
                    <img src={image12} alt="Goa Gallery 9" />
                </div>
                <button className="primary-btn gallery-btn">Click to See More</button>
            </div>

            {/* Newsletter Section */}
            <div className="newsletter-section">
                <h2>Stay Updated</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button type="submit" className="primary-btn submit-btn">Submit</button>
                </form>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <img src={robotIcon} alt="Travel Assistant Robot" className="robot-icon" />
                <h2>Need help planning your trip?</h2>
                <p>Our virtual assistant can help you create the perfect itinerary</p>
                <button className="primary-btn">Ask Robot</button>
                <button className="outline-btn">Explore More</button>
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
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Destinations</a>
                        <a href="/">Contact</a>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>info@goatravel.com</p>
                        <p>+91 9876543210</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Goa Travel. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;