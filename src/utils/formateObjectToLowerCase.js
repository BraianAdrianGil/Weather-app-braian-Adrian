export const formateObjectToLowerCase = (object) => {
  return Object.entries(object).reduce((newObject, [key, value]) => {
    newObject[key.split('_').join(' ').toLocaleLowerCase()] = value;
    return newObject;
  }, {});
};
