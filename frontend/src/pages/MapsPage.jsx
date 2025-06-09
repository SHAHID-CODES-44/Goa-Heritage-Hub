import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { Helmet } from 'react-helmet';

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
  Adventures: [
  { name: "Scuba Diving - Grande Island", lat: 15.3832, lng: 73.7541 },
  { name: "Scuba Diving - Calangute Beach", lat: 15.5449, lng: 73.7550 },
  { name: "Jet Skiing - Baga Beach", lat: 15.5523, lng: 73.7517 },
  { name: "Jet Skiing - Dona Paula", lat: 15.4600, lng: 73.8000 },
  { name: "Parasailing - Anjuna Beach", lat: 15.5750, lng: 73.7440 },
  { name: "Parasailing - Candolim Beach", lat: 15.5121, lng: 73.7684 },
  { name: "Snorkeling - Bat Island", lat: 15.3976, lng: 73.7772 },
  { name: "Snorkeling - Palolem Beach", lat: 15.0096, lng: 74.0235 },
  { name: "Banana Ride - Calangute", lat: 15.5449, lng: 73.7550 },
  { name: "Banana Ride - Colva Beach", lat: 15.2798, lng: 73.9225 },
  { name: "Kayaking - Chapora River", lat: 15.6050, lng: 73.7497 },
  { name: "Kayaking - Nerul River", lat: 15.5152, lng: 73.7753 },
  { name: "ATV Biking - Mandrem", lat: 15.6670, lng: 73.7100 },
  { name: "ATV Biking - Canacona", lat: 15.0200, lng: 74.0200 },
  { name: "Bungee Jumping - Mayem Lake", lat: 15.5940, lng: 73.9450 },
  { name: "Hot Air Balloon - Assolda Ground", lat: 15.2060, lng: 74.0360 },
  { name: "White Water Rafting - Mhadei River", lat: 15.5526, lng: 74.2196 },
  { name: "Flyboarding - Chapora", lat: 15.6080, lng: 73.7430 },
  { name: "Flyboarding - Vagator", lat: 15.5920, lng: 73.7396 },
  { name: "Trekking - Dudhsagar Waterfalls", lat: 15.3142, lng: 74.3149 }
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
  // Additional beaches
  { name: "Betalbatim Beach", lat: 15.2529, lng: 73.9172 },
  { name: "Majorda Beach", lat: 15.264, lng: 73.918 },
  { name: "Arambol Beach", lat: 15.687, lng: 73.703 },
  { name: "Kalacha Beach", lat: 15.595, lng: 73.743 },
  { name: "Querim Beach", lat: 15.704, lng: 73.683 },
  { name: "Dabolim Beach", lat: 15.396, lng: 73.822 },
  { name: "Miramar Beach", lat: 15.48, lng: 73.824 },
  { name: "Velsao Beach", lat: 15.215, lng: 73.942 },
  { name: "Sernabatim Beach", lat: 15.23, lng: 73.93 },
  { name: "Keri Beach", lat: 15.659, lng: 73.711 },
  { name: "Sinquerim Beach", lat: 15.51, lng: 73.764 },
],

"Stay & Eats": [
  // Resorts & Hotels
  { name: "Taj Exotica Resort & Spa, Benaulim", lat: 15.262, lng: 73.922 },
  { name: "The Leela Goa, Cavelossim", lat: 15.1746, lng: 73.941 },
  { name: "Alila Diwa Goa, Majorda", lat: 15.278, lng: 73.93 },
  { name: "W Goa, Vagator", lat: 15.5896, lng: 73.7386 },
  { name: "Taj Fort Aguada Resort & Spa, Candolim", lat: 15.514, lng: 73.769 },
  { name: "ITC Grand Goa, Arossim", lat: 15.292, lng: 73.92 },
  { name: "Hilton Goa Resort, Candolim", lat: 15.523, lng: 73.77 },
  { name: "Ahilya by the Sea, Nerul", lat: 15.523, lng: 73.77 },
  { name: "Fort Tiracol Heritage Hotel, Tiracol", lat: 15.7202, lng: 73.6814 },
  { name: "The Postcard Hideaway, Netravali", lat: 15.2335, lng: 74.1401 },
  { name: "Alila Springs, Sanquelim", lat: 15.6015, lng: 74.0031 },
  { name: "Cidade de Goa, Vainguinim Beach", lat: 15.4527, lng: 73.8195 },
  { name: "Resort Rio, Baga", lat: 15.5532, lng: 73.7571 },
  
  // Popular Restaurants & Cafes
  { name: "Martin's Corner, Betalbatim", lat: 15.272, lng: 73.918 },
  { name: "Fisherman's Wharf, Cavelossim", lat: 15.174, lng: 73.942 },
  { name: "Mum's Kitchen, Panaji", lat: 15.4905, lng: 73.8303 },
  { name: "Joseph's Bar, Panaji", lat: 15.495, lng: 73.83 },
  { name: "Viva Panjim, Panaji", lat: 15.4948, lng: 73.8302 },
  { name: "Bhatti Village, Nerul", lat: 15.525, lng: 73.77 },
  { name: "Cavatina by Avinash Martins, Benaulim", lat: 15.262, lng: 73.922 },
  { name: "Chef Fernando's Nostalgia, Raia", lat: 15.313, lng: 73.943 },
  { name: "Souza Lobo, Calangute", lat: 15.543, lng: 73.755 },
  { name: "Gunpowder, Assagao", lat: 15.5727, lng: 73.7496 },
  { name: "Vinayak Family Restaurant, Anjuna", lat: 15.573, lng: 73.743 },
  { name: "Cafe Chocolatti, Panaji", lat: 15.494, lng: 73.828 },
  { name: "Britto's, Baga", lat: 15.5512, lng: 73.7541 },
  { name: "Cafe Mambo, Baga", lat: 15.5517, lng: 73.7538 },
  { name: "Fat Fish, Candolim", lat: 15.521, lng: 73.77 },
  { name: "Pousada by the Beach, Calangute", lat: 15.544, lng: 73.755 },
  { name: "Zest, Panaji", lat: 15.492, lng: 73.829 },
  { name: "Mojigao, Mandrem", lat: 15.668, lng: 73.712 },
  { name: "Ritz Classic, Panaji", lat: 15.4957, lng: 73.8295 },
  
  // Beach Shacks & Casual Dining
  { name: "Curlies, Anjuna", lat: 15.572, lng: 73.743 },
  { name: "Baga Beach Shack, Baga", lat: 15.552, lng: 73.754 },
  { name: "La Plage, Ashwem", lat: 15.659, lng: 73.734 },
  { name: "Mambo's Beach Shack, Baga", lat: 15.5515, lng: 73.7542 },
  { name: "Viva Vida, Palolem", lat: 15.0089, lng: 74.0213 },
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
     <Helmet>
        <title>Goa Tourist Map | Explore Beaches, Wildlife & Attractions</title>
        <meta
          name="description"
          content="Interactive Goa map showing top beaches, wildlife sanctuaries, restaurants, and adventure spots. Plan your trip with accurate locations and directions."
        />
        <meta
          name="keywords"
          content="Goa tourist map, map of Goa attractions, beaches in Goa, wildlife in Goa, Goa travel map, interactive map Goa, directions in Goa"
        />
        <meta name="author" content="YourSiteName" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="map-main-container">
        <div className="map-navbar">
          <div className="map-nav-txt">
           <a href="/"><p>Home</p></a> 
            <a href="/Food"><p>See all Hotels</p></a>
            <a href="/WeatherApp"><p>See Weather</p></a>
            <a href="/Feedback"><p>Feedback</p></a>
            <a href="/Post"><p>Posts</p></a>
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
            <h4>Select Category :</h4>
            <select value={category} onChange={onCategoryChange}>
  <option value="Wildlife">Wildlife</option>
  <option value="Beaches">Beaches</option>
  <option value="Stay & Eats">Stay & Eats</option>
  <option value="Adventures">Adventures</option> {/* NEW */}
</select>

          </div>
          <div className="map-input-search">

            <h4>Search</h4>
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
<br />
<br />
<br />
<br />
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
