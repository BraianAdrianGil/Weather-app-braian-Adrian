import './HeaderComponent.css';
import Logo from '../../assets/cloudy-day.png';

const HeaderComponent = () => {
  return (
    <div className='header__div__container'>
      <img
        src={Logo}
        alt='Logo de la app'
        className='current_weather__header_img'
      />
      <h1>Weather App</h1>
    </div>
  );
};

export default HeaderComponent;
