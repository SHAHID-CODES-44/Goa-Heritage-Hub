import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupIn from './pages/Sign-in-up';
import Feedback from './pages/FeedbackPage';
import Beach from './pages/BeachesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignupIn" element={<SignupIn />} />
      <Route path="/Feedback" element={<Feedback/>} />
      <Route path="/Beach" element={<Beach/>}/>
    </Routes>
  );
}

export default App;
