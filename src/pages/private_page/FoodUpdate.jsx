import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext'; // 🧩 তোমার context অনুযায়ী path ঠিক করো
import { useParams } from 'react-router';
import MyLoading from '../../components/my-components/MyLoading';

const FoodUpdate = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState({});

  const {
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expireDate,
    additionalNotes,
  } = food;

  useEffect(() => {
    fetch(`http://localhost:3000/foods/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFood(data);
        setLoading(false);
      });
  }, [id]);

  const handleAddFood = (e) => {
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

    fetch(`http://localhost:3000/foodUpdate/${food._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFood(data);
        toast.success('Successfully updated!');
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <MyLoading />;
  }
  return (
    <div className="max-w-2xl mx-auto bg-base-200 shadow-xl rounded-2xl p-6 my-10">
      <h2 className="text-2xl font-bold text-center mb-4">
        📦 Update <span className="bg-accent">Food</span>
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
            defaultValue={foodName}
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
            defaultValue={foodImage}
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
            defaultValue={foodQuantity}
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
            defaultValue={pickupLocation}
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
            defaultValue={expireDate}
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
            defaultValue={additionalNotes}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* update Button */}
        <div className="text-center mt-5">
          <button type="submit" className="btn btn-primary w-full">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default FoodUpdate;
