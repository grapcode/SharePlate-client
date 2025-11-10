import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext'; // 🔹 তোমার Context path অনুযায়ী ঠিক করে নিও

const FoodCard = ({ food }) => {
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expireDate,
    donatorName,
    donatorImage,
  } = food;

  const { user } = useContext(AuthContext); // 🔐 logged in user check
  const navigate = useNavigate();

  // 📦 Handle View Details Button
  const handleViewDetails = () => {
    if (!user) {
      navigate('/login'); // 🔁 যদি লগইন না করা থাকে, Login পেইজে পাঠাও
    } else {
      navigate(`/foods/${_id}`); // ✅ logged in হলে ডিটেইলস পেইজে পাঠাও
    }
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border rounded-2xl">
      {/* Food Image */}
      <figure className="px-5 pt-5">
        <img
          src={foodImage}
          alt={foodName}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>

      {/*  Card Body */}
      <div className="card-body items-center text-center">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {foodName}
        </h2>

        {/*  Donator Info */}
        <div className="flex items-center gap-2 mt-2">
          <img
            src={donatorImage}
            alt={donatorName}
            className="w-8 h-8 rounded-full border"
          />
          <p className="text-sm font-medium text-gray-700">{donatorName}</p>
        </div>

        {/*  Other Info */}
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p>🍽️ Quantity: {foodQuantity}</p>
          <p>📍 {pickupLocation}</p>
          <p>⏰ Expire: {expireDate}</p>
        </div>

        {/*  Button */}
        <div className="card-actions mt-4">
          <Link
            to={`/foodDetails/${_id}`}
            onClick={handleViewDetails}
            className="btn btn-primary btn-sm px-5 rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
