import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.jsx';
import { WeatherProvider } from './context/WeatherContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </WeatherProvider>
  </React.StrictMode>
);
