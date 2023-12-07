import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App.jsx';
import Contact from './pages/Contact.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'signin',
    element: <SignIn />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* Wrap your entire application with RouterProvider */}
  //   <RouterProvider router={router}>
  //     {/* <App /> */}
  //   </RouterProvider>
  // </React.StrictMode>,
  <RouterProvider router={router} />

);
