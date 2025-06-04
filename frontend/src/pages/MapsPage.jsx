import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "./Map.css";

const dataByCategory = {
  Wildlife: [
    { name: "Bondla Wildlife Sanctuary", lat: 15.4089, lng: 74.1367 },
    { name: "Bhagwan Mahaveer Wildlife Sanctuary", lat: 15.3833, lng: 74.3333 },
    { name: "Mollem National Park", lat: 15.4, lng: 74.35 },
    { name: "Cotigao Wildlife Sanctuary", lat: 14.9966, lng: 74.0708 },
    { name: "Mhadei Wildlife Sanctuary", lat: 15.5322, lng: 74.2186 },
    { name: "Netravali Wildlife Sanctuary", lat: 15.23, lng: 74.14 },
    { name: "Salim Ali Bird Sanctuary", lat: 15.517, lng: 73.8666 },
  ],
  Beaches: [
    { name: "Baga Beach", lat: 15.5523, lng: 73.7517 },
    { name: "Calangute Beach", lat: 15.5439, lng: 73.755 },
    { name: "Anjuna Beach", lat: 15.575, lng: 73.744 },
    { name: "Colva Beach", lat: 15.2798, lng: 73.9225 },
    { name: "Palolem Beach", lat: 15.0096, lng: 74.0235 },
    { name: "Agonda Beach", lat: 15.038, lng: 73.9886 },
    { name: "Morjim Beach", lat: 15.636, lng: 73.74 },
    { name: "Arambol Beach", lat: 15.6868, lng: 73.7045 },
    { name: "Vagator Beach", lat: 15.592, lng: 73.7396 },
    { name: "Candolim Beach", lat: 15.5121, lng: 73.7684 },
    { name: "Sinquerim Beach", lat: 15.512, lng: 73.762 },
    { name: "Benaulim Beach", lat: 15.25, lng: 73.92 },
    { name: "Cavelossim Beach", lat: 15.172, lng: 73.941 },
    { name: "Majorda Beach", lat: 15.27, lng: 73.92 },
    { name: "Miramar Beach", lat: 15.482, lng: 73.827 },
    { name: "Dona Paula Beach", lat: 15.46, lng: 73.8 },
    { name: "Ashwem Beach", lat: 15.658, lng: 73.734 },
    { name: "Mandrem Beach", lat: 15.667, lng: 73.71 },
    { name: "Butterfly Beach", lat: 15.009, lng: 74.023 },
    { name: "Patnem Beach", lat: 15.01, lng: 74.02 },
  ],
  "Stay & Eats": [
    { name: "Taj Exotica Resort & Spa, Benaulim", lat: 15.262, lng: 73.922 },
    { name: "The Leela Goa, Cavelossim", lat: 15.1746, lng: 73.941 },
    { name: "Alila Diwa Goa, Majorda", lat: 15.278, lng: 73.93 },
    { name: "W Goa, Vagator", lat: 15.5896, lng: 73.7386 },
    { name: "Martin's Corner, Betalbatim", lat: 15.272, lng: 73.918 },
    { name: "Fisherman's Wharf, Cavelossim", lat: 15.174, lng: 73.942 },
    { name: "Mum's Kitchen, Panaji", lat: 15.49, lng: 73.83 },
    { name: "Joseph's Bar, Panaji", lat: 15.495, lng: 73.83 },
    { name: "Viva Panjim, Panaji", lat: 15.495, lng: 73.83 },
    { name: "Bhatti Village, Nerul", lat: 15.525, lng: 73.77 },
    { name: "Cavatina by Avinash Martins, Benaulim", lat: 15.262, lng: 73.922 },
    { name: "Chef Fernando's Nostalgia, Raia", lat: 15.313, lng: 73.943 },
    { name: "Taj Fort Aguada Resort & Spa, Candolim", lat: 15.514, lng: 73.769 },
    { name: "ITC Grand Goa, Arossim", lat: 15.292, lng: 73.92 },
    { name: "Hilton Goa Resort, Candolim", lat: 15.523, lng: 73.77 },
    { name: "Ahilya by the Sea, Nerul", lat: 15.523, lng: 73.77 },
    { name: "Fort Tiracol Heritage Hotel, Tiracol", lat: 15.72, lng: 73.68 },
    { name: "WelcomHeritage Panjim Inn, Panaji", lat: 15.495, lng: 73.83 },
    { name: "The Postcard Hideaway, Netravali", lat: 15.23, lng: 74.14 },
    { name: "Souza Lobo, Calangute", lat: 15.543, lng: 73.755 },
  ],
};

const GoaMap = () => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [category, setCategory] = useState("Wildlife");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const routingControlRef = useRef(null);

  // Initialize map
  useEffect(() => {
    if (!map) {
      const initialMap = L.map("map").setView([15.2993, 74.124], 10);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(initialMap);

      setMap(initialMap);
    }
  }, [map]);

  // Get user location and mark on map
  useEffect(() => {
    if (!map) return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const latlng = [pos.coords.latitude, pos.coords.longitude];
          setUserLocation(latlng);

          L.marker(latlng).addTo(map).bindPopup("You are here").openPopup();
          map.setView(latlng, 13);
        },
        (err) => {
          console.error("Error getting location", err);
          const goaCenter = [15.2993, 74.124];
          map.setView(goaCenter, 10);
          L.popup()
            .setLatLng(goaCenter)
            .setContent(
              "<b>Location permission denied.</b><br>Showing default Goa location."
            )
            .openOn(map);
        }
      );
    }
  }, [map]);

  // When category changes, reset search and suggestions
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
    setSearchTerm("");
    setSuggestions([]);
  };

  // On search input change, filter suggestions
  const onChangeSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = dataByCategory[category].filter((loc) =>
        loc.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // On suggestion click, update map and routing
  const onSuggestionClick = (loc) => {
    setSearchTerm(loc.name);
    setSuggestions([]);

    if (!map) return;

    map.setView([loc.lat, loc.lng], 15);

    L.popup()
      .setLatLng([loc.lat, loc.lng])
      .setContent(`<b>${loc.name}</b>`)
      .openOn(map);

    if (userLocation) {
      if (routingControlRef.current) {
        // Update waypoints instead of removing control
        routingControlRef.current.setWaypoints([
          L.latLng(userLocation[0], userLocation[1]),
          L.latLng(loc.lat, loc.lng),
        ]);
      } else {
        // Create routing control first time
        routingControlRef.current = L.Routing.control({
          waypoints: [L.latLng(userLocation[0], userLocation[1]), L.latLng(loc.lat, loc.lng)],
          lineOptions: {
            styles: [{ color: "blue", opacity: 0.6, weight: 5 }],
          },
          router: L.Routing.osrmv1({
            serviceUrl: "https://router.project-osrm.org/route/v1",
          }),
          showAlternatives: false,
          fitSelectedRoutes: true,
          addWaypoints: false,
          routeWhileDragging: false,
          createMarker: () => null,
        }).addTo(map);
      }
    }
  };

  // Recenter button handler
  const recenterMap = () => {
    if (!map) return;

    if (userLocation) {
      map.setView(userLocation, 13);
    } else {
      map.setView([15.2993, 74.124], 10);
    }
  };

  return (
    <>
      <div className="map-main-container">
        <div className="map-navbar">
          <div className="map-nav-txt">
           <a href="/"><p>Home</p></a> 
            <a href="/Food"><p>See all Hotels</p></a>
            <a href="/Weather"><p>See Weather</p></a>
            <a href="/Feedback"><p>Feedback</p></a>
            <a href="/Posts"><p>Posts</p></a>
          </div>
          <div className="map-buttons">
            <a href="/SignupIn"><button>Signup</button></a>
            <a href="/SignupIn"><button>Login</button></a>
          </div>
        </div>
        <div className="head-text">
          <h2>- Explore Goa Your Way -</h2>
        </div>
        <div style={{ position: "relative" }}>
          <div className="map-select-opt">
            <select
              value={category}
              onChange={onCategoryChange}
              style={{ width: "200px", marginBottom: "10px" }}
            >
              <option value="Wildlife">Wildlife</option>
              <option value="Beaches">Beaches</option>
              <option value="Stay & Eats">Stay & Eats</option>
            </select>
          </div>
          <div className="map-input-search">
            <input
              type="text"
              placeholder={`Search ${category}`}
              value={searchTerm}
              onChange={onChangeSearch}
              style={{ width: "300px", marginBottom: "5px", marginLeft: "10px" }}
            />
          </div>
          <div className="map-suggestions">
            {suggestions.length > 0 && (
              <ul
                style={{
                  border: "1px solid #ccc",
                  maxHeight: "150px",
                  overflowY: "auto",
                  padding: "0",
                  margin: "0 0 10px 0",
                  listStyleType: "none",
                  width: "310px",
                  backgroundColor: "white",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                {suggestions.map((loc) => (
                  <li
                    key={loc.name}
                    onClick={() => onSuggestionClick(loc)}
                    style={{ padding: "5px", cursor: "pointer" }}
                  >
                    {loc.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={recenterMap}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 1001,
              padding: "8px 12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            title="Recenter Map"
          >
            Recenter
          </button>

          <div id="map" style={{ height: "600px", width: "100%" }}></div>
        </div>
      </div>
    </>
  );
};

export default GoaMap;
