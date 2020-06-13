import {
  GET_CURRENT_WEATHER,
  GET_CURRENT_NEWS,
  GET_CURRENT_RATES,
  GET_ERROR,
} from './info.types';

import { startLoading, stopLoading } from '../ui/ui.action';

export const getCurrentNewsInfo = () => (dispatch) =>
  fetch(
    `${process.env.REACT_APP_NEWS_API_URL}${process.env.REACT_APP_NEWS_API_KEY}`
  )
    .then((res) => res.json())
    .then(({ articles }) => articles.slice(0, 5))
    .then((news) =>
      dispatch({
        type: GET_CURRENT_NEWS,
        payload: news,
      })
    )
    .catch((error) => dispatch(getError(error)));

export const getCurrentRatesInfo = () => (dispatch) =>
  fetch(process.env.REACT_APP_RATES_URL)
    .then((res) => res.json())
    .then(({ rates: { EUR, RUB, GBP } }) =>
      dispatch({ type: GET_CURRENT_RATES, payload: { EUR, RUB, GBP } })
    )
    .catch((error) => dispatch(getError(error)));

export const getCurrentWeatherInfo = () => (dispatch) =>
  fetch(
    `${process.env.REACT_APP_WEATHER_API_URL}${process.env.REACT_APP_WEATHER_API_KEY}`
  )
    .then((res) => res.json())
    .then((weather) =>
      dispatch({ type: GET_CURRENT_WEATHER, payload: weather })
    )
    .catch((error) => dispatch(getError(error)));

export const getError = (errorMessage) => ({
  type: GET_ERROR,
  payload: errorMessage,
});

export const getDataInfo = () => async (dispatch) => {
  dispatch(startLoading());
  await dispatch(getCurrentWeatherInfo());
  await dispatch(getCurrentNewsInfo());
  await dispatch(getCurrentRatesInfo());
  dispatch(stopLoading());
};

// export const fetchApiData = () => (dispatch) => {
//   dispatch(getCurrentWeatherInfo());
//   dispatch(getCurrentNewsInfo());
//   dispatch(getCurrentRatesInfo());
// };

// export const getDataInfo = () => async (dispatch) => {
//   dispatch(startLoading());
//   await dispatch(fetchApiData());
//   dispatch(stopLoading());
// };
