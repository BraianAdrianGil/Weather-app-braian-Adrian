import './HeaderComponent.css';

const HeaderComponent = () => {
  return (
    <div className='header__div__container'>
      <img
        src='/assets/cloudy-day.png'
        alt=''
        className='current_weather__header_img'
      />
      <h1>Weather App</h1>
    </div>
  );
};

export default HeaderComponent;
