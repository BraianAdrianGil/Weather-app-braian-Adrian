export const kelvinToFahrenheit = (deg) => {
  const fahrenheit = Math.round(((deg - 273.15) * 9) / 5 + 32);
  return fahrenheit;
};
