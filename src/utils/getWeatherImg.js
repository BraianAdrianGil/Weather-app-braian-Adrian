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
      return '/src/assets/rainy-thunderstorm.png';
    // Thunderstorm ==========================================
    case 210:
    case 211:
    case 212:
      return '/src/assets/thunderstorm.png';
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
      if (time > 6 && time <= 19) return '/src/assets/rainy-day.png';
      else return '/src/assets/rainy-night.png';
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
      if (time > 6 && time <= 19) return '/src/assets/snow.png';
      else return '/src/assets/snow-night.png';
    // Atmosphere ==============================================
    /*Mist */ case 701:
    /*Smoke*/ case 711:
    /*Haze */ case 721:
    /*Fog  */ case 741:
      return '/src/assets/smoke-mist.png';

    /*Tornado*/ case 781:
      return '/src/assets/tornado.png';

    // Clear ===================================================
    case 800:
      if (time > 6 && time <= 19) return '/src/assets/sun.png';
      else return '/src/assets/crescent-moon.png';

    // Clouds ==================================================
    case 801:
    case 802:
    case 803:
      if (time > 6 && time <= 19) return '/src/assets/cloudy-day.png';
      else return '/src/assets/cloudy-night.png';

    case 804:
      return '/src/assets/clouds.png';
  }
};
