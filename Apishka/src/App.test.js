import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HackathonFeed from './components/HackathonFeed';
import ProfilePage from './components/ProfilePage';
import TeamCreationPage from './components/TeamCreationPage';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HackathonFeed />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/create-team" element={<TeamCreationPage />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;
