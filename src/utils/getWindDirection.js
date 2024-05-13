export const getWindDirection = (deg) => {
  if (deg === 0 || deg === 360) return 'North';
  if (deg > 0 && deg < 90) return 'Northeast';
  if (deg === 90) return 'East';
  if (deg > 90 && deg < 180) return 'Southeast';
  if (deg === 180) return 'South';
  if (deg > 180 && deg < 270) return 'Southwest';
  if (deg === 270) return 'West';
  if (deg > 270 && deg < 360) return 'Northwest';
};
