import rainyThunderstormImg from '../assets/rainy-thunderstorm.png';
import thunderstormImg from '../assets/thunderstorm.png';
import rainyDayImg from '../assets/rainy-day.png';
import rainyNightImg from '../assets/rainy-night.png';
import snowImg from '../assets/snow.png';
import snowNightImg from '../assets/snow-night.png';
import smokeImg from '../assets/smoke-mist.png';
import tornadoImg from '../assets/tornado.png';
import clearDayImg from '../assets/sun.png';
import clearNightImg from '../assets/crescent-moon.png';
import cloudyDayImg from '../assets/cloudy-day.png';
import cloudyNight from '../assets/cloudy-night.png';
import cloudsImg from '../assets/clouds.png';

export const getWeatherImg = (type, time) => {
  switch (type) {
    // Thunderstorm with rain====================
    case 200:
    case 201:
    case 202:
    case 221:
    case 230:
    case 231:
    case 232:
      return rainyThunderstormImg;
    // Thunderstorm ==========================================
    case 210:
    case 211:
    case 212:
      return thunderstormImg;
    // Drizzle || Rain =======================================
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 511:
    case 520:
    case 521:
    case 522:
    case 531:
      if (time > 6 && time <= 19) return rainyDayImg;
      else return rainyNightImg;
    // Snow ================================================
    // case 611-612-613-615-616-620-621-622 are snow with rain but we need get asset for those. Meanwhile we covered it with the current one.
    case 600:
    case 601:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      if (time > 6 && time <= 19) return snowImg;
      else return snowNightImg;
    // Atmosphere ==============================================
    /*Mist */ case 701:
    /*Smoke*/ case 711:
    /*Haze */ case 721:
    /*Fog  */ case 741:
      return smokeImg;

    /*Tornado*/ case 781:
      return tornadoImg;

    // Clear ===================================================
    case 800:
      if (time > 6 && time <= 19) return clearDayImg;
      else return clearNightImg;

    // Clouds ==================================================
    case 801:
    case 802:
    case 803:
      if (time > 6 && time <= 19) return cloudyDayImg;
      else return cloudyNight;

    case 804:
      return cloudsImg;
  }
};
