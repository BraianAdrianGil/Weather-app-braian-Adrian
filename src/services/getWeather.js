import axios from 'axios';
import { getWindDirection } from '../utils/getWindDirection';
import { kelvinToCelsius } from '../utils/kelvinToCelsius';
import { kelvinToFahrenheit } from '../utils/kelvinToFahrenheit';
import { API_KEY, BASE_URL } from '../constants';

export const getWeather = async (lat, lon) => {
  try {
    const params = {
      lat,
      lon,
      lang: 'sp',
      appid: API_KEY,
    };

    const res = await axios.get(BASE_URL, { params });

    const data = res.data;

    const formattedData = {
      id: data.id,
      tempMain: {
        kelvin: {
          temp: data.main.temp,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          tempSensation: data.main.feels_like,
        },
        celsius: {
          temp: kelvinToCelsius(data.main.temp),
          temp_min: kelvinToCelsius(data.main.temp_min),
          temp_max: kelvinToCelsius(data.main.temp_max),
          tempSensation: kelvinToCelsius(data.main.feels_like),
        },
        fahrenheit: {
          temp: kelvinToFahrenheit(data.main.temp),
          temp_min: kelvinToFahrenheit(data.main.temp_min),
          temp_max: kelvinToFahrenheit(data.main.temp_max),
          tempSensation: kelvinToFahrenheit(data.main.feels_like),
        },
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      },
      zoneData: {
        name: data.name,
        country: data.sys.country,
      },
      weather: {
        id: data.weather[0].id,
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        timezone: data.timezone,
      },
      wind: {
        direction: getWindDirection(data.wind.deg),
        speed: Math.round(data.wind.speed),
        gust: data.wind.gust,
      },
    };

    return formattedData;
  } catch (error) {
    console.error(error);
  }
};
