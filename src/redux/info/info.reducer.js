import { GET_WEATHER, GET_NEWS, GET_RATES, GET_ERROR } from './info.types';

import { getWeather, getNews, getRates, getError } from './info.reducer.utils';

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
      return getWeather(state, action);
    case GET_NEWS:
      return getNews(state, action);
    case GET_RATES:
      return getRates(state, action);
    case GET_ERROR:
      return getError(state, action);
    default:
      return state;
  }
};
