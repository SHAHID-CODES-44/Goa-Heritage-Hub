import React from 'react';
import './FactsPage.css';

const Facts = () => {
  return (
    <div id="fact-container" className="fact-container">
      <h1 id="fact-heading" className="fact-heading">Amazing Facts About Goa</h1>
      
      <div id="fact-grid" className="fact-grid">
        {/* Category 1: History & Culture */}
        <div className="fact-category">
          <h2 className="fact-category-heading">History & Culture</h2>
          <ul className="fact-list">
            <li className="fact-item">Goa was a Portuguese colony for over 450 years until 1961</li>
            <li className="fact-item">It's India's smallest state by area but has the highest GDP per capita</li>
            <li className="fact-item">Goa has two official state languages - Konkani and Marathi</li>
            <li className="fact-item">The Basilica of Bom Jesus in Old Goa is a UNESCO World Heritage Site</li>
            <li className="fact-item">Goa celebrates Carnival, a tradition inherited from Portuguese rule</li>
          </ul>
        </div>

        {/* Category 2: Geography & Nature */}
        <div className="fact-category">
          <h2 className="fact-category-heading">Geography & Nature</h2>
          <ul className="fact-list">
            <li className="fact-item">Goa has over 100 km of coastline with beautiful beaches</li>
            <li className="fact-item">The Western Ghats in Goa are a UNESCO World Heritage Site</li>
            <li className="fact-item">Dudhsagar Falls is one of India's tallest waterfalls (310 meters)</li>
            <li className="fact-item">Goa has 7 major rivers and 42 estuarine islands</li>
            <li className="fact-item">The state animal is the Gaur (Indian Bison)</li>
          </ul>
        </div>

        {/* Category 3: Tourism & Beaches */}
        <div className="fact-category">
          <h2 className="fact-category-heading">Tourism & Beaches</h2>
          <ul className="fact-list">
            <li className="fact-item">Goa receives over 8 million tourists annually (pre-pandemic)</li>
            <li className="fact-item">Palolem Beach is shaped like a perfect crescent moon</li>
            <li className="fact-item">Anjuna Flea Market started in the 1960s by hippies</li>
            <li className="fact-item">Baga Beach is famous for its nightlife and water sports</li>
            <li className="fact-item">Goa has Asia's only Naval Aviation Museum</li>
          </ul>
        </div>

        {/* Category 4: Food & Drink */}
        <div className="fact-category">
          <h2 className="fact-category-heading">Food & Drink</h2>
          <ul className="fact-list">
            <li className="fact-item">Goa is the only Indian state where you can legally brew your own alcohol</li>
            <li className="fact-item">Feni (cashew or coconut liquor) is Goa's signature drink</li>
            <li className="fact-item">Vindaloo originated in Goa (from Portuguese "vinha d'alhos")</li>
            <li className="fact-item">Goan cuisine uses coconut extensively in both sweet and savory dishes</li>
            <li className="fact-item">The state has over 5000 licensed liquor shops (highest density in India)</li>
          </ul>
        </div>

        {/* Category 5: Unique Traditions */}
        <div className="fact-category">
          <h2 className="fact-category-heading">Unique Traditions</h2>
          <ul className="fact-list">
            <li className="fact-item">Goa has the highest percentage of Christians among Indian states (25%)</li>
            <li className="fact-item">Shigmo is Goa's version of Holi with elaborate parades</li>
            <li className="fact-item">The Feast of St. Francis Xavier is held every 10 years</li>
            <li className="fact-item">Goan houses often have oyster shell windows for ventilation</li>
            <li className="fact-item">Traditional Goan weddings can last 3-5 days</li>
          </ul>
        </div>

        {/* Category 6: Wildlife & Environment */}
        <div className="fact-category">
          <h2 className="fact-category-heading">Wildlife & Environment</h2>
          <ul className="fact-list">
            <li className="fact-item">Bhagwan Mahavir Wildlife Sanctuary is home to Bengal tigers</li>
            <li className="fact-item">Goa has 6 wildlife sanctuaries covering 755 sq km</li>
            <li className="fact-item">The state bird is the Ruby-throated Yellow Bulbul</li>
            <li className="fact-item">Olive Ridley turtles nest on Morjim and Galgibaga beaches</li>
            <li className="fact-item">Goa has over 2000 species of flowering plants</li>
          </ul>
        </div>

        {/* Category 7: Economy & Infrastructure */}
        <div className="fact-category">
          <h2 className="fact-category-heading">Economy & Infrastructure</h2>
          <ul className="fact-list">
            <li className="fact-item">Mining was Goa's primary industry before tourism took over</li>
            <li className="fact-item">Goa has the highest literacy rate in India (94%)</li>
            <li className="fact-item">The Zuari Bridge is India's third longest cable-stayed bridge</li>
            <li className="fact-item">Goa International Airport was built on reclaimed marshland</li>
            <li className="fact-item">The state has India's best road network per square km</li>
          </ul>
        </div>
      </div>

      <button className="fact-button">Show More Facts</button>
    </div>
  );
};

export default Facts;