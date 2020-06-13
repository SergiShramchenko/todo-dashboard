import { GET_WEATHER, GET_NEWS, GET_RATES, GET_ERROR } from './info.types';

export const getNews = (news) => ({
  type: GET_NEWS,
  payload: news,
});

export const getWeather = (weather) => ({
  type: GET_WEATHER,
  payload: weather,
});

export const getRates = (rates) => ({
  type: GET_RATES,
  payload: rates,
});

export const getError = (errorMessage) => ({
  type: GET_ERROR,
  payload: errorMessage,
});
