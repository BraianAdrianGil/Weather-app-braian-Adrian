import { getWeatherImg } from '../../utils/getWeatherImg';
import useWeatherTime from '../../hooks/useWeatherTime';
import './WeatherCard.css';

const CurrentWeatherCard = ({ weather }) => {
  const { time } = useWeatherTime({ weather });

  const img = getWeatherImg(weather.weather.id, time);

  return (
    <article className='weather_card__general__container'>
      <header className=' weather_card__img_container'>
        <img src={img} alt={weather.weather.description} />
      </header>
      <div>
        <main className=' weather__card__main'>
          <div className='weather__card__first__dates'>
            <h2>{weather.tempMain.celsius.temp}°C</h2>
            <span>{weather.weather.description}</span>
            <p>
              {weather.zoneData.name}, <span>{weather.zoneData.country}</span>
            </p>
          </div>

          <ul className='weather__card__ul'>
            <li className='weather__card__li'>
              <div className='weather__card__li__img__container'>
                <img src='/src/assets/humidity-icon.png' alt='' />
              </div>
              <div className='weather__card__li__content'>
                <span>{weather.tempMain.humidity}%</span>
                <span>Humedad</span>
              </div>
            </li>

            <li className='weather__card__li'>
              <div className='weather__card__li__img__container'>
                <img
                  src='/src/assets/wind-speed-icon.png'
                  alt='Wind speed icon'
                />
              </div>
              <div className=' weather__card__li__content'>
                <span>{weather.wind.speed} Km/h</span>
                <span>Velocidad Viento</span>
              </div>
            </li>
          </ul>
        </main>
      </div>
    </article>
  );
};

export default CurrentWeatherCard;
