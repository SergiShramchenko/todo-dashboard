import { GET_WEATHER, GET_NEWS, GET_RATES, GET_ERROR } from './info.types';

const initialState = {
  news: [],
  rates: {},
  weather: {},
  error: false,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case GET_RATES:
      return {
        ...state,
        rates: action.payload,
      };
    case GET_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
