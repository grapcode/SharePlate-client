import React from 'react';
import { toast } from 'react-toastify';

const RequestCard = ({ food, refetch }) => {
  const {
    location,
    reason,
    phone,
    foodId,
    requestName,
    requestEmail,
    requestImage,
    status,
    _id,
  } = food;

  // 🔹 Accept / Reject Handler using fetch

  const handleStatusChange = async (newStatus) => {
    const update = async (url, data) =>
      fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

    const reqRes = await update(`http://localhost:3000/requests/${_id}`, {
      status: newStatus,
    });
    if (!reqRes.ok) return toast.error('Failed to update request');

    if (newStatus === 'accepted') {
      const foodRes = await update(`http://localhost:3000/foods/${foodId}`, {
        status: 'donated',
      });
      if (!foodRes.ok) return toast.error('Failed to update food');
    }

    toast.success(`Request ${newStatus} successfully!`);
    refetch?.();
  };

  return (
    <div className="bg-base-100 border rounded-xl shadow-md p-5 mb-6">
      {/*  Requester Info */}
      <div className="flex items-center gap-4 border-b pb-3 mb-4">
        <img
          src={requestImage}
          alt=""
          className="w-14 h-14 rounded-full border"
        />
        <div>
          <h3 className="text-lg font-semibold">{requestName}</h3>
          <p className="text-sm text-gray-500">{requestEmail}</p>
        </div>
        <span
          className={`ml-auto text-xs px-3 py-1 rounded-full font-medium ${
            status === 'pending'
              ? 'bg-yellow-100 text-yellow-700'
              : status === 'accepted'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {status}
        </span>
      </div>

      {/*  Request Details Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <tbody>
            <tr className="hover">
              <td className="font-semibold w-1/4">📍 Location</td>
              <td>{location}</td>
            </tr>
            <tr className="hover">
              <td className="font-semibold">📞 Phone</td>
              <td>{phone}</td>
            </tr>
            <tr className="hover">
              <td className="font-semibold">🍽️ Reason</td>
              <td>{reason}</td>
            </tr>
            <tr className="hover">
              <td className="font-semibold">🥗 Food ID</td>
              <td className="text-gray-500">{foodId}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 🎯 Accept / Reject Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => handleStatusChange('accepted')}
          disabled={status !== 'pending'}
          className="btn btn-success btn-sm disabled:opacity-50"
        >
          Accept
        </button>
        <button
          onClick={() => handleStatusChange('rejected')}
          disabled={status !== 'pending'}
          className="btn btn-error btn-sm disabled:opacity-50"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
