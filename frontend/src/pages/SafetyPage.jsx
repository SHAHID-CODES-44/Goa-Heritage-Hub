import React from 'react';
import './Safety.css';

const LocalTipsSafetyGuide = () => {
  return (
    <div id="guide-container" className="guide-container">
      <h1 id="guide-title" className="guide-title">Local Tips & Safety Guide - Goa</h1>

      <div id="guide-buttons" className="guide-buttons">
        <a href="/Map"><button id="btn-show-map" className="guide-button guide-button-map" >
          Show Map
        </button>
        </a>
       <a href="/Chatbot"> <button id="btn-chatbot" className="guide-button guide-button-chatbot" >
          Chatbot
        </button>
        </a>
      </div>

      <section id="guide-tips" className="guide-section guide-tips">
        <h2 className="guide-subtitle">Local Tips for Travelers</h2>
        <ul className="guide-list">
          <li className="guide-list-item">
            <strong>Respect Local Culture:</strong> Dress modestly when visiting temples and religious places.
          </li>
          <li className="guide-list-item">
            <strong>Stay Hydrated:</strong> Carry bottled water; avoid drinking tap water.
          </li>
          <li className="guide-list-item">
            <strong>Use Authorized Transport:</strong> Prefer prepaid taxis or app-based cabs to avoid overcharging.
          </li>
          <li className="guide-list-item">
            <strong>Carry Cash:</strong> Many local markets and small shops prefer cash over cards.
          </li>
          <li className="guide-list-item">
            <strong>Try Local Cuisine:</strong> Sample Goan dishes like fish curry, bebinca, and feni but avoid street food that looks unhygienic.
          </li>
          <li className="guide-list-item">
            <strong>Stay Connected:</strong> Get a local SIM card or ensure roaming for easy communication.
          </li>
        </ul>
      </section>

      <section id="guide-safety" className="guide-section guide-safety">
        <h2 className="guide-subtitle">Safety Guidelines</h2>
        <ul className="guide-list">
          <li className="guide-list-item">
            <strong>Beach Safety:</strong> Swim only in designated areas and avoid venturing into rough waters.
          </li>
          <li className="guide-list-item">
            <strong>Valuables:</strong> Do not leave your belongings unattended on beaches or crowded places.
          </li>
          <li className="guide-list-item">
            <strong>Night Travel:</strong> Avoid traveling alone late at night, especially in isolated areas.
          </li>
          <li className="guide-list-item">
            <strong>Emergency Contacts:</strong> Keep local emergency numbers handy (Police: 100, Ambulance: 102).
          </li>
          <li className="guide-list-item">
            <strong>Medical Facilities:</strong> Know the location of the nearest hospital or clinic in your area.
          </li>
          <li className="guide-list-item">
            <strong>COVID-19 Precautions:</strong> Follow local health guidelines and wear masks in crowded places.
          </li>
        </ul>
      </section>

      <section id="guide-transportation" className="guide-section guide-transportation">
        <h2 className="guide-subtitle">Transportation Guide</h2>
        <ul className="guide-list">
          <li className="guide-list-item">
            <strong>Local Buses:</strong> Goa's public buses are often crowded, especially during peak hours and festival days. Bus timings may be irregular on holidays or weekends.
          </li>
          <li className="guide-list-item">
            <strong>Auto Rickshaws:</strong>Available sometimes but always agree on a fare before starting your journey or prefer meters if available.
          </li>
          <li className="guide-list-item">
            <strong>Taxi Services:</strong> Prepaid taxi stands and app-based services like Ola and Uber operate mainly in major towns and airports.
          </li>
          <li className="guide-list-item">
            <strong>Rental Scooters & Bikes:</strong> Popular for tourists but ensure you have a valid driving license and wear a helmet for safety.
          </li>
          <li className="guide-list-item">
            <strong>Traffic Congestion:</strong> During tourist season, traffic can be heavy on main roads — plan your trips accordingly.
          </li>
        </ul>
      </section>

      <footer id="guide-footer" className="guide-footer">
        <small>© 2025 Goa Tourism. Stay safe and enjoy your trip!</small>
      </footer>
    </div>
  );
};

export default LocalTipsSafetyGuide;
