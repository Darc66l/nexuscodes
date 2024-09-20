import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-900 text-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-blue-600">
            404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Oops! We can't find the page you're looking for.
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            It seems like the page you're looking for doesn't exist or was removed.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-blue-600 hover:bg-blue-700 text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
