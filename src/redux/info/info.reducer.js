import {
  GET_CURRENT_WEATHER,
  GET_CURRENT_NEWS,
  GET_CURRENT_RATES,
  GET_ERROR,
} from './info.types';

const initialState = {
  news: [],
  rates: {},
  weather: {},
  error: false,
  errorMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case GET_CURRENT_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case GET_CURRENT_RATES:
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
