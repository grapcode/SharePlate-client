import React from 'react';

const FoodCard = ({ food }) => {
  const {
    food_name,
    food_image,
    food_quantity,
    pickup_location,
    expire_date,
    additional_notes,
    donator_name,
    donator_email,
    donator_image,
    food_status,
  } = food;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* 🖼️ Food Image */}
      <img
        src={food_image}
        alt={food_name}
        className="w-full h-48 object-cover"
      />

      {/* 📄 Food Info */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">{food_name}</h2>
        <p className="text-sm text-gray-600">{food_quantity}</p>

        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <span className="font-medium">📍 Location:</span>
          <span>{pickup_location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <span className="font-medium">⏰ Expire:</span>
          <span>{expire_date}</span>
        </div>

        <p className="text-gray-600 text-sm italic border-l-4 border-blue-400 pl-3">
          {additional_notes}
        </p>

        {/* 🧑 Donator Info */}
        <div className="flex items-center gap-3 mt-4">
          <img
            src={donator_image}
            alt={donator_name}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <p className="font-medium text-gray-800">{donator_name}</p>
            <p className="text-xs text-gray-500">{donator_email}</p>
          </div>
        </div>

        {/* 🔘 Food Status */}
        <div className="flex justify-between items-center mt-5">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              food_status === 'Available'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-600'
            }`}
          >
            {food_status}
          </span>

          <button className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-accent cursor-pointer transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
