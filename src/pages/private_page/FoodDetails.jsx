import React from 'react';
import { useLoaderData } from 'react-router';

const FoodDetails = () => {
  const food = useLoaderData();

  console.log(food);

  const {
    foodName,
    foodQuantity,
    pickupLocation,
    expireDate,
    additionalNotes,
    donatorName,
    donatorEmail,
    donatorImage,
    foodStatus,
  } = food;

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-base-100 rounded-2xl shadow-lg border">
      {/* Food Image */}
      <img
        src={food.foodImage}
        alt={foodName}
        className="w-full h-64 object-cover rounded-xl"
      />

      {/*  Food Info */}
      <div className="mt-6 space-y-3">
        <h1 className="text-2xl font-bold text-gray-800">{foodName}</h1>
        <p className="text-gray-600">🍽️ Quantity: {foodQuantity}</p>
        <p className="text-gray-600">📍 Pickup: {pickupLocation}</p>
        <p className="text-gray-600">⏰ Expire Date: {expireDate}</p>

        {/*  Additional Notes */}
        <p className="italic text-sm text-gray-500 border-l-4 border-blue-400 pl-3">
          {additionalNotes}
        </p>

        {/*  Donator Info */}
        <div className="flex items-center gap-4 pt-4 border-t mt-4">
          <img
            src={donatorImage}
            alt={donatorName}
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{donatorName}</h3>
            <p className="text-sm text-gray-500">{donatorEmail}</p>
          </div>
        </div>

        {/*  Status */}
        <div className="mt-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              foodStatus === 'Available'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {foodStatus}
          </span>
        </div>

        {/*  Request Button */}
        <div className="mt-6 text-center">
          <button className="btn btn-primary rounded-lg px-6">
            Request This Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
