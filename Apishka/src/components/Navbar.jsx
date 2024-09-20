import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../http/userApi';

const Navbar = ({ isAuthenticated, onLogout }) => {
  const handleLogout = async () => {
    try {
      await logoutUser();
      onLogout(); // Устанавливаем статус аутентификации в false
    } catch (error) {
      console.log('Logout failed', error);
    }
  };

  return (
    <nav className="bg-gray-800 text-white w-full p-4">
      <ul className="flex justify-between items-center">
        <li><Link to="/" className="px-4">News Feed</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/profile" className="px-4">Profile</Link></li>
            <li><button onClick={handleLogout} className="px-4">Logout</button></li>
          </>
        ) : (
          <li><Link to="/login" className="px-4">Login</Link>
          <Link to="/register" className="px-4">Register</Link></li>
        )}
        <li><Link to="/create-team" className="px-4">Create Team</Link></li>
        <li><Link to="/ai-assistant" className="px-4">AI Assistant</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
