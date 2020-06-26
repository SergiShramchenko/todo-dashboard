import { GET_GEO_LOCATION } from './geoData.types';

const initialState = {
  lat: '55.753215',
  long: '37.622504',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GEO_LOCATION:
      return {
        ...state,
        lat: action.lat,
        long: action.long,
      };
    default:
      return state;
  }
};
