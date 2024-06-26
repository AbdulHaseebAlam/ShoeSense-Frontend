import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Landing from '../pages/Landing';
import Latest from '../pages/Latest';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Contacts from '../pages/Contacts';
import Checkout from '../pages/Checkout';
import Account from '../pages/Account';
import SignUp from '../pages/SignUp';
import ProductInfo from '../pages/ProductInfo';
import AboutUs from '../pages/AboutUs';
import Cart from '../pages/CartPage';
import PrivateRoute from '../routes/private';
import Preferences from '../pages/Preferences';
import Profile from '../pages/Profile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/Profile",
        element: <Profile />,
    },
    {
        path: "/latest",
        element: <Latest />,
    },
    {
        path: "/men",
        element: <Men />,
    },
    {
        path: "/women",
        element: <Women />,
    },
    {
        path: "/aboutus",
        element: <AboutUs />,
    },
    {
        path: "/contacts",
        element: <Contacts />,
    },
    {
        path: "/checkout",
        element: (
            <PrivateRoute />
        ),
        children: [
            {
                path: "",
                element: <Checkout />,
            },
        ],
    },
    {
        path: "/account",
        element: <Account />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/preferences",
        element: <Preferences />,
    },
    {
        path: "/preferences",
        element: <Preferences />,
    },
    {
        path: "/products/product-info/:productID",
        element: <ProductInfo />,
    },
    {
        path: "/cart",
        element: (
            <PrivateRoute />
        ),
        children: [
            {
                path: "",
                element: <Cart />,
            },
        ],
    }
]);

export default router;
