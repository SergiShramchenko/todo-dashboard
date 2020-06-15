import { updateState } from '../reducer.utils';

export const getWeather = (state, action) =>
  updateState(state, { weather: action.payload });

export const getNews = (state, action) =>
  updateState(state, { news: action.payload });

export const getRates = (state, action) =>
  updateState(state, { rates: action.payload });

export const getError = (state, action) =>
  updateState(state, { error: true, errorMessage: action.payload });
