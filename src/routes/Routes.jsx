import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import AvailableFoods from '../pages/AvailableFoods';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import AddFood from '../pages/private_page/AddFood';
import PrivateRoute from '../privateRoute/PrivateRoute';
import ManageFoods from '../pages/private_page/ManageFoods';
import MyRequests from '../pages/private_page/MyRequests';
import FoodDetails from '../pages/private_page/FoodDetails';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('http://localhost:3000/latest-foods'),
      },
      {
        path: '/availableFoods',
        element: <AvailableFoods />,
        loader: () => fetch('http://localhost:3000/foods'),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      // private page
      {
        path: '/addFood',
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: '/foodDetails/:id',
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:3000/foods/${params.id}`),
      },
      {
        path: '/manageFoods',
        element: (
          <PrivateRoute>
            <ManageFoods />
          </PrivateRoute>
        ),
      },
      {
        path: '/manageFoods',
        element: (
          <PrivateRoute>
            <ManageFoods />
          </PrivateRoute>
        ),
      },
      {
        path: '/myRequests',
        element: (
          <PrivateRoute>
            <MyRequests />
          </PrivateRoute>
        ),
      },
      // Not found route
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
