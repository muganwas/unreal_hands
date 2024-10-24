import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Devices from './pages/Devices';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/devices/iphone16",
    Component: Devices
  },
  {
    path: "/devices/galaxya15",
    Component: Devices
  },
  {
    path: "/devices/google-pixel-8",
    Component: Devices
  },
  {
    path: "/devices/ipad",
    Component: Devices
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
