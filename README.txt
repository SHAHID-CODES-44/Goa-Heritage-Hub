Goa Heritage Hub..........
A dynamic tourism website that helps travelers explore, filter, and reach the top tourist destinations across Goa. The platform offers live routing, real-time content updates through an admin panel, and a user-friendly interface to assist tourists in planning their journey easily.

Project Structure..........
Goa-Tourism-Guide/

Backend/
controllers/
models/
routes/
configure/
server.js
Frontend/
public/images/
src/
pages/
services/

Purpose of the Website.............

Help tourists discover locations based on their preferences.
Provide direct routing to locations using map services.
Allow filtering of destinations such as:
Beaches
Restaurants
Wildlife
Adventure spots
Enable live data updates via an admin panel.
Include emergency contact details and transport guidance.
Feature a chatbot to guide users step-by-step to their ideal destinations.

GitHub Repository...........

Goa Tourism Guide Repository
Developer Information
Email: shahid.infipre.intern@gmail.com
Contact: +91 7249280617

Technologies Used...........

Frontend
React
React Router
Axios
Leaflet (for maps)
Backend..........

Node.js
Express.js
Sequelize ORM
MySQL
APIs:
OSRM for live map routing
Setup Instructions
Edit the database config:
Open Backend/configure/db.js

Set the following values.........

DB_USER

DB_PASSWORD

DB_NAME



Install dependencies:

Open two terminal windows or tabs.

In Terminal 1 (Backend):

Navigate: cd Backend

Install: npm install

Run server: node server.js

In Terminal 2 (Frontend):

Navigate: cd Frontend

Install: npm install

Run dev server: npm run dev

The site should now be running locally.


Features
Category-based filtering of destinations
Direct location routing with map
Admin panel for adding/updating data
Chatbot assistance for personalized suggestions
Emergency contact list and transport guide
Real-time data handling through feedback and admin inputs

Deployment
Deployment setup was not possible due to sudden crash in server.