import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from './store/store.js';

import App from './App.jsx';
import AuthLayout from './components/AuthLayout';
import Loader from './components/Loader.jsx';
import NoteCard from './components/NoteCard';
import './index.css';
import AddNote from './pages/AddNote';
import EditNotes from './pages/EditPosts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './style.css';
import RTE from './components/RTE.jsx';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  //   children: [
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/notes",
            element: (
                <AuthLayout authentication>
                    <App />
                </AuthLayout>
            ),
        },
        {
            path: "/add-note",
            element: (
                    <AddNote />
            ),
        },
        {
            path: "/loader",
            element: (
<Loader/>
            ),
        },
        {
            path: "/edit-note/:slug",
            element: (
                <AuthLayout authentication>
                    <EditNotes />
                </AuthLayout>
            ),
        },
        {
            path: "/n/:slug",
            element: <NoteCard />,
        },
        
    ],
// },]
)
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/login",
//     element: <Login/>,
//   },
//   {
//     path: "/signup",
//     element: <Signup/>,
//   },
//   {
//     path: "/add-note",
//     element: <AddNote/>,
//   },
//   {
//     path: "/all-notes",
//     element: <AllNotes/>,
//   },
//   {
//     path: "/edit-note",
//     element: <EditNotes/>,
//   },
  
//   //TODO page about showing  search results can also be made here 
// ]);
createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
</React.StrictMode>,
)
