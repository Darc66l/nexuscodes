import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../api/userApi';

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
    <nav>
      <ul>
        <li><Link to="/">News Feed</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
        <li><Link to="/create-team">Create Team</Link></li>
        <li><Link to="/ai-assistant">AI Assistant</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
