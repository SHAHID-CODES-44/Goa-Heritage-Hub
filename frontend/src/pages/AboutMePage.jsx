import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Goa Tourism Guide</h1>
     <a href="/"><button id="about-to-home-btn">Home</button></a>
      <p>
        Welcome to the Goa Tourism Guide – your ultimate travel companion!
        Discover the vibrant beauty of Goa with ease, confidence, and a touch of adventure. Our smart web application offers trusted information, interactive tools, and tailored recommendations to help you unlock hidden gems, top attractions, and local favorites.
        Make every moment in Goa unforgettable—with comfort, safety, and style.
      </p>

      <h2>Key Features</h2>
      <ul className="features-list">
        <li>Search tourist spots by type, season, and location</li>
        <li>Interactive maps with routes and estimated time</li>
        <li>Live images and event updates</li>
        <li>AI chatbot for instant help and suggestions</li>
        <li>Offline access with cached data</li>
        <li>User reviews and feedback system</li>
        <li>Safety tips and emergency contacts</li>
      </ul>

      <h2>Technology Stack</h2>
      <ul className="tech-stack-list">
        <li>Frontend: React.js</li>
        <li>Vanilla css</li>
        <li>Backend: Node.js with Express.js</li>
        <li>Database: MySQL</li>
        <li>Other Tools: OpenStreetMap API, GPT API for chatbot</li>
      </ul>

      <h2>Purpose</h2>
      <p>
        The app aims to improve the travel experience in Goa by offering practical tools for route planning, live updates, and smart suggestions, all in one place.
      </p>
      <p>
        The vision is to guide people to thier destinations safely.
      </p>
      <p>Tourists should not be dissatified with our service.</p>
      <p>
        Goa is full of best destinations, our job is to help you to find those destinations.
      </p>
    </div>
  );
};

export default About;