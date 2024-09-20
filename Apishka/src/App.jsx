import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewsFeed from './components/HackathonFeed';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateTeam from './pages/CreateTeam';
import AIAssistant from './pages/AIAssistant';
import Register from './pages/Register';
import Profile from './pages/Profile'; // Добавляем профиль
import Error from './pages/Error'
import './App.css';
//x`import Register from './pages/UserProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {/* Apply relative positioning to the main container to handle z-index layering */}
      <div className="bg-gray-900 text-white min-h-screen relative">
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        
        {/* Adjust NexusCode Section to avoid overlap */}
        <section className="absolute top-16 right-0 m-4 text-right z-10">
          <h1 className="text-5xl font-bold text-blue-400">NexusCode</h1>
          <p className="text-lg text-gray-400 mt-1">The hub of tech connectivity.</p>
        </section>

        <main className="flex flex-col items-center p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/create-team" element={<CreateTeam />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="*" element={<Error />} />
            {isAuthenticated && <Route path="/profile" element={<Profile />} /> }
            {!isAuthenticated && <Route path="/profile" element={<Error />} /> }
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
