import {
  GET_CURRENT_WEATHER,
  GET_CURRENT_NEWS,
  GET_CURRENT_RATES,
  GET_ERROR,
} from './info.types';

import { startLoading, stopLoading } from '../ui/ui.action';

const newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
const newsApiKey = 'a66a7bdb28954b278cf6b21f93b6c85a';

const weatherApiUrl =
  'http://api.openweathermap.org/data/2.5/weather?lat=48.332675&lon=39.542150&appid=';
const weatherApiKey = '7f70d7aad0ed68b8146bb8b1ba3352c5';

export const getCurrentNewsInfo = (news) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await fetch(`${newsApiUrl}${newsApiKey}`)
      .then((res) => res.json())
      .then(({ articles }) => articles.slice(0, 3))
      .then((news) =>
        dispatch({
          type: GET_CURRENT_NEWS,
          payload: news,
        })
      )
      .then(() => dispatch(stopLoading()))
      .catch((error) => {
        dispatch(getError(error));
        dispatch(stopLoading());
      });
  };
};

export const getCurrentRatesInfo = (rates) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await fetch('https://api.ratesapi.io/api/latest?base=USD')
      .then((res) => res.json())
      .then(({ rates: { EUR, RUB, USD } }) =>
        dispatch({ type: GET_CURRENT_RATES, payload: { EUR, RUB, USD } })
      )
      .then(() => dispatch(stopLoading()))
      .catch((error) => {
        dispatch(getError(error));
        dispatch(stopLoading());
      });
  };
};

export const getCurrentWeatherInfo = (weather) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await fetch(`${weatherApiUrl}${weatherApiKey}`)
      .then((res) => res.json())
      .then((weather) =>
        dispatch({ type: GET_CURRENT_WEATHER, payload: weather })
      )
      .then(() => dispatch(stopLoading()))
      .catch((error) => {
        dispatch(getError(error));
        dispatch(stopLoading());
      });
  };
};

export const getError = (errorMessage) => ({
  type: GET_ERROR,
  payload: errorMessage,
});
