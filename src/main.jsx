import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.js';

import App from './App.jsx';
import AuthLayout from './components/AuthLayout';
import './index.css';
import About from './pages/About.jsx';
import AddNote from './pages/AddNote';
import Changelog from './pages/Changelog.jsx';
import Contact from './pages/Contact.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Login from './pages/Login';
import Setting from './pages/Setting';
import Signup from './pages/Signup';
import Test from './pages/Test/Test.jsx';
import ViewNote from './pages/ViewNote.jsx';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: (
            <AuthLayout authentication={false}>
                <Login />
            </AuthLayout>
        ),
    },
    {
        path: '/signup',
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
    },
    {
        path: '/notes',
        element: (
            <AuthLayout authentication>
                <App />
            </AuthLayout>
        ),
    },
    {
        path: '/add-note',
        element: (
            <AuthLayout authentication>
                <AddNote />
            </AuthLayout>
        ),
    },
    // {
    //     path: '/loader',
    //     element: <Loader />,
    // },
    {
        path: '/about',
        element: (
            <AuthLayout authentication>
                <About />
            </AuthLayout>
        ),
    },
    {
        path: '/settings',
        element: (
            <AuthLayout authentication>
                <Setting />
            </AuthLayout>
        ),
    },
    {
        path: '/contact',
        element: (
            //<AuthLayout authentication>
            <Contact />
            //</AuthLayout>
        ),
    },
    {
        path: '/changelog',
        element: (
            <Changelog />
            // <AuthLayout authentication={false}>
            // </AuthLayout>
        ),
    },
    {
        path: '/n/:id',
        element: (
            <AuthLayout authentication>
                <ViewNote />,
            </AuthLayout>
        ),
    },
    {
        path: '/t/:title',
        element: <Test />,
    },
    {
        path: '/home',
        element: (
            <AuthLayout authentication={false}>
                <LandingPage />
            </AuthLayout>
        ),
    },
]);

//   //TODO page about showing  search results can also be made here
// ]);
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
