import { GET_GEO_LOCATION } from './geoData.types';

export const getGeoData = (lat, long) => ({
  type: GET_GEO_LOCATION,
  lat,
  long,
});
