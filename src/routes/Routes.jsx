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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/availableFoods',
        element: <AvailableFoods />,
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
      {
        path: '/*',
        element: <h2>Error 404</h2>,
      },
    ],
  },
]);
