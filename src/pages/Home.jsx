import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router';
import FoodCard from '../components/FoodCard';
import HomeSections from '../components/HomeSection';

const Home = () => {
  const foodData = useLoaderData();
  return (
    <div className="mx-3">
      <Banner />
      <h2 className="text-2xl font-bold py-4 text-center">
        Featured <span className="bg-accent">Foods</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {foodData.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <HomeSections />
    </div>
  );
};

export default Home;
