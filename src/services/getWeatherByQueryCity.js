import axios from 'axios';
import { API_KEY, BASE_URL, COUNTRY_CODES } from '../constants';
import { kelvinToCelsius } from '../utils/kelvinToCelsius';
import { kelvinToFahrenheit } from '../utils/kelvinToFahrenheit';
import { getWindDirection } from '../utils/getWindDirection';

export const getWeatherByQueryCity = async (city, country) => {
  const countryCodesCopy = Object.keys({ ...COUNTRY_CODES });
  const countryCodesCopyJoined = countryCodesCopy.map((countryIndex) =>
    countryIndex.split('_').join(' ').toLocaleLowerCase()
  );

  const countryCodeAlpha2 = countryCodesCopyJoined.find(
    country.toLocaleLowerCase()
  );
  console.log(countryCodeAlpha2);

  // const countryAlpha2Code = COUNTRY_CODES.incl;
  try {
    const querySearch = `${city},${country}`;
    const res = await axios.get(BASE_URL, {
      params: {
        q: querySearch,
        appid: API_KEY,
        lang: 'sp',
      },
    });

    if (res.statusText !== 'OK') {
      throw {
        error: res,
        customError: 'Something went wrong with the res fetch',
      };
    }

    const data = await res.data;
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
