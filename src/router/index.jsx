import { createBrowserRouter } from 'react-router-dom';
import WeatherDetail from '../pages/WeatherDetail/WeatherDetail.jsx';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/detail/:id',
    element: <WeatherDetail />,
  },
  {
    path: '*',
    element: <h1>404 page not found</h1>,
  },
]);
