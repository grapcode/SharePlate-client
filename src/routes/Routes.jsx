import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layout/MainLayout';
import AvailableFoods from '../pages/AvailableFoods';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

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
      {
        path: '/*',
        element: <h2>Error 404</h2>,
      },
    ],
  },
]);
