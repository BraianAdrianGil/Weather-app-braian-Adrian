import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error(
      'useWeatherContext debe ser usado dentro de un WeatherProvider'
    );
  }
  return context;
};
