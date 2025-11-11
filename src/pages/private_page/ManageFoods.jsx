import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import MyLoading from '../../components/my-components/MyLoading';
import ManageCard from '../../components/ManageCard';

const ManageFoods = () => {
  const { user } = use(AuthContext);
  const [foods, setFoods] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/manageFoods?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <MyLoading />;
  }

  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Manage My <span className="bg-accent">Foods</span> ({foods.length})
        </h2>
        {foods.map((food) => (
          <ManageCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default ManageFoods;
