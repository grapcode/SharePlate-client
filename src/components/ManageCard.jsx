import React from 'react';
import { useNavigate } from 'react-router';

import Swal from 'sweetalert2';

const ManageCard = ({ food }) => {
  // console.log(food);
  const navigate = useNavigate();

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

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // api call
        fetch(`http://localhost:3000/foods/${_id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate('/availableFoods');
            // ======Sweet=====
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border border-primary m:gap-8 gap-4 bg-base-100 shadow-md  rounded-2xl p-5 mb-5">
      {/*  Image */}
      <div className="w-full md:w-1/8 ">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-30 object-cover rounded-xl"
        />
      </div>

      {/* 📄 Right: Details */}

      <div>
        <h2 className="text-xl font-semibold">{foodName}</h2>
        <p className="text-gray-600">🍽️ Quantity: {foodQuantity}</p>
      </div>
      <div>
        <p className="text-gray-600">📍 Pickup: {pickupLocation}</p>
        <p className="text-gray-600">⏰ Expire: {expireDate}</p>
      </div>

      {/* 👤 Donator Info */}
      <div className="flex items-center gap-3 mt-3">
        <img
          src={donatorImage}
          alt={donatorName}
          className="w-10 h-10 rounded-full border"
        />
        <span className="text-gray-800 font-medium">{donatorName}</span>
      </div>

      {/* 🔘 Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => navigate(`/foodUpdate/${_id}`)}
        >
          Update
        </button>

        <button
          className="btn btn-sm btn-accent"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageCard;
