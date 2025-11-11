import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import FoodCard from '../components/FoodCard';

const Home = () => {
  const foodData = useLoaderData();
  return (
    <div>
      <Banner />
      <h2 className="text-2xl font-bold py-3">
        Featured <span className="bg-accent">Foods</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {foodData.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
