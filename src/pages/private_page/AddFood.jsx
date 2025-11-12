import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext'; // 🧩 তোমার context অনুযায়ী path ঠিক করো
import { Link } from 'react-router';

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddFood = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;
    const additionalNotes = form.notes.value;

    // 🍀 Data structure to save in MongoDB
    const newFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expireDate,
      additionalNotes,
      foodStatus: 'Available',
      donatorName: user?.displayName,
      donatorEmail: user?.email,
      donatorImage: user?.photoURL,
      addedAt: new Date(),
    };

    try {
      const res = await fetch('http://localhost:3000/foods', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newFood),
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Food added successfully!');
        form.reset();
      } else {
        toast.error('Failed to add food. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error while adding food!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-base-200 shadow-xl rounded-2xl p-6 my-10">
      <h2 className="text-2xl font-bold text-center mb-4">
        🍱 Add <span className="bg-accent">Food</span>
      </h2>

      <form onSubmit={handleAddFood} className="space-y-4">
        {/* Food Name */}
        <div>
          <label className="label">
            <span className="text-sm">Food Name</span>
          </label>
          <input
            type="text"
            name="foodName"
            required
            placeholder="Enter food name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Food Image */}
        <div>
          <label className="label">
            <span className="text-sm">Food Image (imgbb URL)</span>
          </label>
          <input
            type="text"
            name="foodImage"
            required
            placeholder="Paste imgbb image URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="label">
            <span className="text-sm">Food Quantity</span>
          </label>
          <input
            type="text"
            name="foodQuantity"
            required
            placeholder="e.g. Serves 3 people"
            className="input input-bordered w-full"
          />
        </div>

        {/* Pickup Location */}
        <div>
          <label className="label">
            <span className="text-sm">Pickup Location</span>
          </label>
          <input
            type="text"
            name="pickupLocation"
            required
            placeholder="Enter pickup location"
            className="input input-bordered w-full"
          />
        </div>

        {/* Expire Date */}
        <div>
          <label className="label">
            <span className="text-sm">Expire Date</span>
          </label>
          <input
            type="date"
            name="expireDate"
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="label">
            <span className="text-sm">Additional Notes</span>
          </label>
          <textarea
            name="notes"
            rows="3"
            placeholder="Add some details..."
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Donator Info */}
        <div>
          <h2 className="text-xl font-semibold text-center mb-2">
            🙋‍♂️ Donar Info
          </h2>

          <div className="flex md:flex-row flex-col gap-4 bg-base-100 p-3 rounded-xl border">
            <img
              src={user?.photoURL}
              alt=""
              className="w-16 h-auto rounded-full mx-auto my-3 shadow-md border border-primary"
            />
            <div className="border-r border-2 border-accent"></div>
            <div>
              <label className="label">
                <span className="text-sm">Donator Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName || ''}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-sm">Donator Email</span>
              </label>
              <input
                type="email"
                value={user?.email || ''}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-5">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Food'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
