import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both email and password');
      return;
    }

    try {
      // Add your login API call here
      const data = { token: true }; // Simulating successful login response
      if (data.token) {
        setIsAuthenticated(true);
        navigate('/profile');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <section className="bg-gray-900 h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white">
        NexusCode
        </a>

        <div className="w-full bg-gray-800 rounded-lg shadow-lg dark:border-gray-700 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Login to your account
            </h1>

            {error && <p className="text-red-500 text-center mb-6">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-600 rounded bg-gray-700 focus:ring-3 focus:ring-blue-500"
                  />
                </div>
                <label htmlFor="remember" className="ml-3 text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>

              <p className="text-sm font-light text-gray-400">
                Don't have an account yet?{' '}
                <a
                  href="/register"
                  className="font-medium text-blue-500 hover:underline"
                >
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
