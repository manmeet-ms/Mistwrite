import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store/store.js';

import App from './App.jsx';
import AuthLayout from './components/AuthLayout';
import NoteCard from './components/NoteCard';
import './index.css';
import './style.css';
import AddNote from './pages/AddNote';
import EditNotes from './pages/EditPosts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Setting from './pages/Setting';
import { LatestUpdatesAsPage } from './components/UpdatesComponents.jsx';
import CHangelog from './pages/Changelog.jsx';
import Changelog from './pages/Changelog.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import ViewNote from './pages/ViewNote.jsx';

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
            <AuthLayout authentication>
            <Contact />
            </AuthLayout>
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
        element: <ViewNote />,
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
