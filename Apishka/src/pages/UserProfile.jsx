import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../http/userApi'; // Assuming you have a function to handle registration

const Register = ({ setIsAuthenticated }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation for empty fields and matching passwords
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      const data = await registerUser({ name, email, password });
      if (data.token) {
        setIsAuthenticated(true); // Устанавливаем статус аутентификации
        navigate('/profile'); // Перенаправляем на страницу профиля после успешной регистрации
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.log('Registration failed', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-12 rounded-lg shadow-lg text-white w-full max-w-2xl">
        <h2 className="text-5xl font-bold text-center mb-10">Register</h2>
        {error && <p className="text-red-500 text-center mb-6">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-5 text-lg rounded-lg bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-5 text-lg rounded-lg bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-5 text-lg rounded-lg bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-5 text-lg rounded-lg bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 text-xl rounded-lg transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
