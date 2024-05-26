import FooterComponent from './components/FooterComponent/FooterComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import WeatherForm from './components/WeatherForm/WeatherForm';
import WeatherCard from './components/WeatherCard/WeatherCard';
import WithoutPermissionComponent from './components/WithoutPermissionComponent.jsx/WithoutPermissionComponent';
import { useWeatherContext } from './hooks/useWeatherContext';
import './App.css';

function App() {
  const { isLoading, withoutPermissionMessage, searchErrorMessage, weather } =
    useWeatherContext();
  const notCurrentPositionGranted =
    withoutPermissionMessage && !weather && !searchErrorMessage;

  console.log(searchErrorMessage);

  return (
    <div className='App'>
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
        {weather && !isLoading && <WeatherCard weather={weather} />}
      </main>

      {/* FOOTER======================================= */}
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
