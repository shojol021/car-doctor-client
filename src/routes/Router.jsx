
import Main from '../layouts/Main'
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../pages/home/home/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';
import Checkout from '../pages/checkout/Checkout';
import Bookings from '../pages/checkout/bookings/Bookings';
import PrivateRoute from './PrivateRoute';
import About from '../pages/about/About';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Register></Register>
        },
        {
          path: '/service/:id',
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
  ]);

  export default router