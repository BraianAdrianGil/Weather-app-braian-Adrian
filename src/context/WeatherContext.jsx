import { createContext, useEffect, useRef, useState } from 'react';
import { getCoordinates } from '../services/getCoordinates';
import { getWeather } from '../services/getWeather';
import { getWeatherByQueryCity } from '../services/getWeatherByQueryCity';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [withoutPermissionMessage, setWithoutPermissionMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchErrorMessage, setSearchErrorMessage] = useState('');
  const searchCity = useRef();
  const searchCountry = useRef();

  const loadWeather = async () => {
    try {
      setIsLoading(true);
      const coords = await getCoordinates();

      if (coords) {
        const weatherData = await getWeather(coords.latitude, coords.longitude);
        setWeather(weatherData);
      } else {
        setWithoutPermissionMessage(
          'Para poder brindarte el clima actual de tu posición necesitas activar los permisos de localización. Por defecto cuando entras a esta pagina te los pide, pero si por error lo negaste o cerraste, debajo encontraras como activarlos de nuevo'
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadSearchWeather = async (city, country) => {
    try {
      if (!city && !country) return;
      if (searchCity.current === city && searchCountry.current === country)
        return;

      if (!city && country) {
        const weatherSearchData = await getWeatherByQueryCity(country);
        if (!weatherSearchData) {
          setSearchErrorMessage(
            'No pudimos encontrar la ciudad o el país con este nombre'
          );
          setWeather(null);
          return;
        }
        setWeather(weatherSearchData);
        setSearchErrorMessage('');
        searchCity.current = city;
        searchCountry.current = country;
      }

      if (city && !country) {
        const weatherSearchData = await getWeatherByQueryCity(city);
        if (!weatherSearchData) {
          setSearchErrorMessage(
            'No pudimos encontrar la ciudad o el país con este nombre'
          );
          setWeather(null);
          return;
        }
        setWeather(weatherSearchData);
        searchCity.current = city;
        searchCountry.current = country;
      }

      if (city && country) {
        const weatherSearchData = await getWeatherByQueryCity(city, country);
        if (!weatherSearchData) {
          setSearchErrorMessage(
            'No pudimos encontrar la ciudad o el país con este nombre'
          );
          setWeather(null);
          return;
        }
        setWeather(weatherSearchData);
        searchCity.current = city;
        searchCountry.current = country;
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadWeather();
  }, []);

  const values = {
    loadWeather,
    weather,
    withoutPermissionMessage,
    isLoading,
    loadSearchWeather,
    searchErrorMessage,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
