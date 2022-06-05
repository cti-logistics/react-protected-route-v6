import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Customer from './pages/Customer';
import NotFound from './pages/NotFound';
import BlankLayout from './components/BlankLayout';
import AppLayout from './components/AppLayout';

const routes = (auth) => [
  {
    path: '/app',
    element: auth.userName !== null ? <AppLayout /> : <Navigate to="/login" />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'customer', element: <Customer /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element:
      auth.userName === null ? <BlankLayout /> : <Navigate to="/app/home" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/home" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
