import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WeatherPage.css';

import coldImg from '../uploads/weather/cold.png';
import rainyImg from '../uploads/weather/rainy.png';
import cloudyImg from '../uploads/weather/cloudy.png';
import sunnyImg from '../uploads/weather/sunny.png';

function WeatherPage() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [weatherClass, setWeatherClass] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const apiKey = 'e040d6c3ce9ac8cb37a7afc18884967c';
  const city = 'goa';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch weather');
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setDynamicStyles(data);
        setDynamicSuggestions(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  const setDynamicStyles = (data) => {
    const temp = data.main.temp;
    const condition = data.weather[0].main.toLowerCase();

    if (temp <= 18) {
      setWeatherClass('cold-weather');
      setWeatherIcon(coldImg);
    } else if (condition.includes('rain')) {
      setWeatherClass('rainy-weather');
      setWeatherIcon(rainyImg);
    } else if (condition.includes('cloud')) {
      setWeatherClass('cloudy-weather');
      setWeatherIcon(cloudyImg);
    } else {
      setWeatherClass('sunny-weather');
      setWeatherIcon(sunnyImg);
    }
  };

  const setDynamicSuggestions = (data) => {
    const temp = data.main.temp;
    const condition = data.weather[0].main.toLowerCase();

    let suggestionsList = [];

    if (temp > 28 && condition.includes('clear')) {
      suggestionsList = [
        { text: 'Beaches', path: '/beache' },
        { text: 'Adventure', path: '/adventure' },
        { text: 'Nightlife', path: '/nightlife' },
      ];
    } else if (condition.includes('rain')) {
      suggestionsList = [
        { text: 'Culture & Heritage', path: '/culture' },
        { text: 'Hotels & Foods', path: '/Food' },
        { text: 'Shopping', path: '/shopping' },
      ];
    } else if (condition.includes('cloud')) {
      suggestionsList = [
        { text: 'Wildlife Sanctuaries', path: '/Wildlife' },
        { text: 'Museums', path: '/culture' },
        { text: 'Hotels & Foods', path: '/Food' },
      ];
    } else if (temp <= 18) {
      suggestionsList = [
        { text: 'Spice Plantations', path: '/culture' },
        { text: 'Indoor Cafés', path: '/Food' },
        { text: 'Art Galleries', path: '/culture' },
      ];
    } else {
      suggestionsList = [
        { text: 'Adventure Sports', path: '/adventure' },
        { text: 'Beaches', path: '/Beach' },
        { text: 'Nightlife', path: '/nightlife' },
      ];
    }

    setSuggestions(suggestionsList);
  };

  if (error) return <div className="error-message">Error: {error}</div>;
  if (!weather) return <div className="loading-message">Loading...</div>;

  return (
    <div className={`weather-container ${weatherClass}`}>
      <Link to="/" className="back-button">
        <svg viewBox="0 0 24 24">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        Back Home
      </Link>

      <div className="weather-content">
        <div className="weather-header">
          <h2>Weather in {weather.name}</h2>
          <p>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        <div className="weather-details">
          <div className="weather-main">
            <img src={weatherIcon} alt="Weather icon" className="weather-icon" />
            <p className="temperature">{Math.round(weather.main.temp)}</p>
            <p className="condition">{weather.weather[0].description}</p>
          </div>

          <div className="weather-stats">
            <div className="stat-item">
              <p>Feels Like</p>
              <p className="stat-value">{Math.round(weather.main.feels_like)}°C</p>
            </div>
            <div className="stat-item">
              <p>Humidity</p>
              <p className="stat-value">{weather.main.humidity}%</p>
            </div>
            <div className="stat-item">
              <p>Wind Speed</p>
              <p className="stat-value">{weather.wind.speed} m/s</p>
            </div>
            <div className="stat-item">
              <p>Pressure</p>
              <p className="stat-value">{weather.main.pressure} hPa</p>
            </div>
          </div>
        </div>

        {/* Smart Suggestions */}
        <section className="suggestions-section">
          <h3>Best Places to Visit in This Weather</h3>
          <ul className="suggestions-list">
            {suggestions.map((sugg, index) => (
              <li key={index}>
                <Link to={sugg.path} className="suggestion-link">{sugg.text}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default WeatherPage;
