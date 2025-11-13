import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MyLoading from '../../components/my-components/MyLoading';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://share-plate-server-xi.vercel.app/foods/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFood(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, user]);

  const {
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expireDate,
    additionalNotes,
    donatorName,
    donatorEmail,
    donatorImage,
    foodStatus,
  } = food;

  if (loading) return <MyLoading />;

  // 🔰 Handle Food Request
  const handleRequest = (e) => {
    e.preventDefault();
    const modal = document.getElementById('my_modal_5');

    const newRequest = {
      location: e.target.location.value,
      reason: e.target.reason.value,
      phone: e.target.phone.value,
      foodId: food._id,
      requestName: user?.displayName,
      requestEmail: user?.email,
      requestImage: user?.photoURL,
      status: 'pending',
    };

    fetch('https://share-plate-server-xi.vercel.app/requests', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Successfully requested!');
        modal.close(); // Close modal after submission
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-base-100 rounded-2xl shadow-lg border">
      {/* Food Image */}
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-64 object-cover rounded-xl"
      />

      {/* Food Info */}
      <div className="mt-6 space-y-3">
        <h1 className="text-2xl font-bold text-gray-800">{foodName}</h1>
        <p className="text-gray-600">🍽️ Quantity: {foodQuantity}</p>
        <p className="text-gray-600">📍 Pickup: {pickupLocation}</p>
        <p className="text-gray-600">⏰ Expire Date: {expireDate}</p>

        {/* Additional Notes */}
        <p className="italic text-sm mt-4 mb-1 text-gray-500 border-l-4 border-blue-400 pl-3">
          {additionalNotes}
        </p>

        {/* Donator Info */}
        <div className="flex items-center gap-4 pt-4 border-t mt-4">
          <img
            src={donatorImage}
            alt={donatorName}
            className="w-12 h-12 rounded-full border"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{donatorName}</h3>
            <p className="text-sm mt-1 text-gray-500">{donatorEmail}</p>
          </div>
        </div>

        {/* Status */}
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

        {/* 🔰 Modal Request Button */}
        <div className="mt-6 text-center">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('my_modal_5').showModal()}
          >
            Request This Food
          </button>

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form onSubmit={handleRequest} className="modal-box">
              <h3 className="font-bold text-lg">
                Request This <span className="bg-accent">Food</span>
              </h3>
              <p className="py-2">Fill the form to request this food.</p>

              {/* Location */}
              <div>
                <label className="label">
                  <span className="text-sm mt-2 mb-1">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Enter your location"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Reason */}
              <div>
                <label className="label">
                  <span className="text-sm mt-2 mb-1">Why Need Food?</span>
                </label>
                <textarea
                  name="reason"
                  required
                  placeholder="Write your reason"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="label">
                  <span className="text-sm mt-2 mb-1">Phone Number</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Modal Actions */}
              <div className="modal-action">
                <button type="submit" className="btn btn-primary mr-3">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => document.getElementById('my_modal_5').close()}
                >
                  Close
                </button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
