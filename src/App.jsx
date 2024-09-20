import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsFeed from './components/HackathonFeed';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateTeam from './pages/CreateTeam';
import AIAssistant from './pages/AIAssistant';
import Profile from './pages/Profile'; // Добавляем профиль
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main className="flex flex-col items-center p-6">
          <section className="text-center my-12">
            <h1 className="text-5xl font-bold text-blue-400">NexusCode</h1>
            <p className="text-lg text-gray-400 mt-4">
              The hub of tech connectivity.
            </p>
          </section>
          <NewsFeed />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/create-team" element={<CreateTeam />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            {isAuthenticated && <Route path="/profile" element={<Profile />} />} {/* Путь для профиля */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
