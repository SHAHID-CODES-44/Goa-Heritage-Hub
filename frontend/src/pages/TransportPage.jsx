import React from "react";
import "./TransportPage.css";

const GoaTransportationGuide = () => {
  return (
    <div className="transport-container">
      {/* Navbar */}
      <nav id="transport-navbar" className="transport-navbar">
        <ul className="transport-nav-list">
          <li className="transport-nav-item"><a href="/">Home</a></li>
          <li className="transport-nav-item"><a href="/Beach">Beach</a></li>
          <li className="transport-nav-item"><a href="/Food">Restaurants</a></li>
          <li className="transport-nav-item"><a href="/Wildlife">Wild Life</a></li>
          <li className="transport-nav-item"><a href="/Feedback">Feedback</a></li>
          <li className="transport-nav-item"><a href="/SignupIn">Login</a></li>
          <li className="transport-nav-item"><a href="/SignupIn">Signup</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="transport-home" className="transport-section transport-home">
        <h1>Welcome to Goa Transportation Guide</h1>
        <p>
          Discover the best ways to travel around the beautiful state of Goa. Whether you prefer buses, taxis, or flying in, this guide helps you navigate like a local and enjoy your trip to the fullest.
        </p>
      </section>

      <section id="transport-beach" className="transport-section transport-beach">
        <h2>Beaches of Goa</h2>
        <p>
          Goa is famous for its stunning beaches like Baga, Anjuna, Palolem, and Calangute. Getting there is easy with several transportation options available to suit every budget.
        </p>
      </section>

      <section id="transport-restaurants" className="transport-section transport-restaurants">
        <h2>Restaurants in Goa</h2>
        <p>
          From beach shacks to fine dining, Goa offers a variety of food experiences. Many popular restaurants are easily accessible by taxi or rented scooters.
        </p>
      </section>

      <section id="transport-wildlife" className="transport-section transport-wildlife">
        <h2>Wildlife and Nature</h2>
        <p>
          Explore Goa's wildlife sanctuaries and nature parks such as Bhagwan Mahavir and Cotigao. Buses and taxis can take you to these serene escapes from the bustling town centers.
        </p>
      </section>

      <section id="transport-feedback" className="transport-section transport-feedback">
        <h2>Feedback</h2>
        <p>
          We value your thoughts! Share your experience and tips on traveling in Goa to help fellow travelers.
        </p>
      </section>

      <section id="transport-login" className="transport-section transport-login">
        <h2>Login</h2>
        <p>Access your account to save your favorite travel spots and get personalized recommendations.</p>
      </section>

      <section id="transport-signup" className="transport-section transport-signup">
        <h2>Signup</h2>
        <p>Create an account to unlock special features and connect with other travelers.</p>
      </section>

      {/* Transportation Guide Sections */}
      <section id="transport-buses" className="transport-section transport-buses">
        <h2>Travel by Bus in Goa</h2>
        <p>
          Goa State Transport buses are the cheapest way to travel between cities and towns. They cover major routes such as Panaji to Mapusa, Margao to Vasco, and more.
          Although buses can be crowded during peak times, they offer an authentic experience and connect most tourist spots.
        </p>
      </section>

      <section id="transport-planes" className="transport-section transport-planes">
        <h2>Travel by Plane</h2>
        <p>
          Goa International Airport (Dabolim Airport) connects Goa with major cities in India and international destinations.
          Flying is the fastest way to reach Goa, especially during tourist season. Several airlines operate daily flights, and booking in advance helps secure better fares.
        </p>
      </section>

      <section id="transport-taxis" className="transport-section transport-taxis">
        <h2>Taxis and Cabs</h2>
        <p>
          Taxis are convenient for point-to-point travel, especially when traveling in groups or with luggage.
          Metered taxis are available, but many drivers prefer fixed rates, so negotiate fares before the ride.
          Ride-sharing apps like Ola and Uber also operate in Goa for easy booking.
        </p>
      </section>

      <section id="transport-custom" className="transport-section transport-custom">
        <h2>You Add You Need</h2>
        <p>
          Add your preferred mode of transport here! Whether it’s renting scooters, bicycles, or private car hires, Goa offers diverse travel options to suit your style.
        </p>
      </section>

      <section id="transport-best-info" className="transport-section transport-best-info">
        <h2>Best Tips for Traveling in Goa</h2>
        <ul>
          <li>Rent a scooter or bike for maximum freedom and ease of travel, especially to remote beaches.</li>
          <li>Always negotiate taxi fares in advance or insist on using the meter.</li>
          <li>Plan bus routes ahead as some services are infrequent, especially during the monsoon season.</li>
          <li>Use apps like Google Maps and local guides to navigate unfamiliar areas.</li>
          <li>Be cautious of pickpockets in crowded bus and market areas.</li>
          <li>Respect local traffic rules and drive safely, especially on narrow roads.</li>
        </ul>
      </section>
    </div>
  );
};

export default GoaTransportationGuide;
