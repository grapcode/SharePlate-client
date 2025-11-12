import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

import MyLoading from '../../components/my-components/MyLoading';
import RequestCard from '../../components/RequestCard';

const MyRequests = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-requests?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoods(data.reverse());
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
      <h2 className="text-2xl font-bold text-center my-4">
        My <span className="bg-accent">requests</span>
      </h2>
      <div className="p-6">
        {foods.map((food) => (
          <RequestCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default MyRequests;
