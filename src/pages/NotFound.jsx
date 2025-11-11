import React from 'react';
import { Link } from 'react-router';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 w-screen -mx-[calc((100vw-100%)/2)]  text-center px-5">
      <div className="max-w-md bg-base-100 shadow-lg rounded-2xl p-8 border">
        {/* ❌ 404 Text */}
        <h1 className="text-9xl font-extrabold text-primary mb-4">404</h1>

        {/*  Message */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        {/* Back Home Button */}
        <Link to="/" className="btn btn-primary btn-wide rounded-full gap-2">
          <FaHome /> Back to Home
        </Link>
      </div>

      {/* 🎨 Optional Illustration */}
      <div className="mt-10 opacity-70">
        <img
          src="https://illustrations.popsy.co/amber/student-with-diploma.svg"
          alt="404 illustration"
          className="w-52 mx-auto"
        />
      </div>
    </div>
  );
};

export default NotFound;
