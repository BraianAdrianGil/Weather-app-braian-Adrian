import { useWeatherContext } from '../../hooks/useWeatherContext';
import './WeatherDetail.css';

const WeatherDetail = () => {
  const { weather } = useWeatherContext();

  return <div className='weather__detail__general__container'></div>;
};

export default WeatherDetail;
