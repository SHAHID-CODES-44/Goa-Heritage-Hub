import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // ✅ Added useNavigate
import signupimg from '../uploads/Signin/imagesignup.png';
import './SignupIn.css';

const SignupIn = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup
      ? "http://localhost:5000/api/auth/register"
      : "http://localhost:5000/api/auth/login";

    try {
      const response = await axios.post(url, formData);
      alert(response.data.message);
      navigate('/'); // ✅ Redirect on success
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      {/* Left Side with Image - Now narrower */}
      <div className="auth-image-container">
        <img src={signupimg} alt="Travel Goa" className="auth-image" />
        <div className="image-overlay">
          <h2>Welcome to Goa</h2>
          <div className="auth-image-buttons">
            <button 
              className={`image-btn ${isSignup ? 'active' : ''}`}
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </button>
            <button 
              className={`image-btn ${!isSignup ? 'active' : ''}`}
              onClick={() => setIsSignup(false)}
            >
              Sign In
            </button>
            <a href="/AdminLogin"><button 
              className='image-btn'
            >
              Admin Login
            </button>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="auth-form-container">
        <div className="form-box">
          <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>
            {isSignup && (
              <div className="input-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>
            )}
            <button type="submit" className="submit-btn">
              {isSignup ? "Register" : "Login"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={() => setIsSignup(!isSignup)} className="toggle-link">
                {isSignup ? " Sign In" : " Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupIn;
