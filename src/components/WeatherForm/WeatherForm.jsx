import { useState } from 'react';
import { useWeatherContext } from '../../hooks/useWeatherContext';
import './WeatherForm.css';

const WeatherForm = () => {
  const { loadSearchWeather } = useWeatherContext();
  const [maxHeightDiv, setMaxHeightDiv] = useState(false);

  const handleWeatherSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let { citySearch, countrySearch } = Object.fromEntries(formData);
    const countrySearchUppercase = countrySearch.toUpperCase();
    loadSearchWeather(citySearch, countrySearchUppercase);
    setMaxHeightDiv(false);
    document.getElementById('form').reset();
  };

  const handleFocus = () => {
    setMaxHeightDiv(true);
  };

  const handleBlur = () => {
    setMaxHeightDiv(false);
  };

  return (
    <form
      className={`weather__form__container  ${maxHeightDiv && 'expanded'}`}
      onSubmit={handleWeatherSubmit}
      id='form'
    >
      <input
        type='text'
        name='citySearch'
        onFocus={handleFocus}
        onBlur={handleBlur}
        id='cityInput'
        placeholder='Ciudad'
        aria-label='Ingresa la ciudad'
      />

      <input
        type='text'
        name='countrySearch'
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder='País'
        aria-label='Ingresa el país'
      />
      <button type='submit' onFocus={handleFocus} onBlur={handleBlur}>
        <i className='bx bx-search'></i>
      </button>
    </form>
  );
};

export default WeatherForm;
