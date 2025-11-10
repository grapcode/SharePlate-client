import React from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../components/FoodCard';

const AvailableFoods = () => {
  const foodData = useLoaderData();
  console.log(foodData);
  return (
    <div>
      <h2>AvailableFoods page</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {foodData.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
