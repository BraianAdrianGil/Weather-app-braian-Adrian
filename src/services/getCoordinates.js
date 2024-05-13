//Promisificar
export const getCoordinates = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      //Cuando se ejecuta resolve la promesa se resuelve y si se ejecuta reject se rechaza.
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const coordinates = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };

    return coordinates;
  } catch (error) {
    console.warn(error);
  }
};
