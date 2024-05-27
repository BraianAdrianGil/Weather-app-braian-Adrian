import FooterComponent from './components/FooterComponent/FooterComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import WeatherForm from './components/WeatherForm/WeatherForm';
import WeatherCard from './components/WeatherCard/WeatherCard';
import WithoutPermissionComponent from './components/WithoutPermissionComponent.jsx/WithoutPermissionComponent';
import { CLOUDY_BACKGROUND } from './constants';
import { useWeatherContext } from './hooks/useWeatherContext';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const { isLoading, withoutPermissionMessage, searchErrorMessage, weather } =
    useWeatherContext();
  const notCurrentPositionGranted =
    withoutPermissionMessage && !weather && !searchErrorMessage;

  return (
    <div
      className='App'
      style={{
        background: weather?.weather?.main === 'Clouds' && CLOUDY_BACKGROUND,
      }}
    >
      {/* LOADER======================================= */}
      {isLoading && <div className='loader'></div>}

      {/* HEADER======================================= */}
      <header>
        <HeaderComponent />
      </header>

      {/* MAIN========================================= */}
      <main>
        {!isLoading && <WeatherForm />}
        {/* NO PERMISSION BY USER TO GET LOCATION ========================== */}
        {notCurrentPositionGranted && <WithoutPermissionComponent />}
        {/* ERROR WITH THE SEARCH============================= */}
        {searchErrorMessage && (
          <div className='weather__search__error__container'>
            <p>{searchErrorMessage}</p>
          </div>
        )}
        {/* IF THERE IS WEATHER AND ALL OK ========================== */}
        {weather && !isLoading && (
          <>
            <WeatherCard weather={weather} />

            {/* EN PROGRESO DISEÑANDO WEATHER DETAIL PAGE!!!!!!!!! */}
            {/* <div className=' weather__link__container'>
              <Link
                to={`detail/${weather.id}`}
                className='weather__detail__link'
              >
                Más información sobre este clima{' '}
                <span>
                  <i className='bx bx-chevrons-right'></i>
                </span>
              </Link>
            </div> */}
          </>
        )}
      </main>

      {/* FOOTER======================================= */}
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
