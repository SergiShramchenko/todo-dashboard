import { startLoadingInfoPanel, stopLoadingInfoPanel } from '../ui/ui.actions';
import { getWeather, getNews, getRates, getError } from './info.actions';

const getWeatherInfo = () => (dispatch) =>
  fetch(
    `${process.env.REACT_APP_WEATHER_API_URL}${process.env.REACT_APP_WEATHER_API_KEY}`
  )
    .then((res) => res.json())
    .then((weather) => dispatch(getWeather(weather)))
    .catch((error) => dispatch(getError(error)));

const getNewsInfo = () => (dispatch) =>
  fetch(
    `${process.env.REACT_APP_NEWS_API_URL}${process.env.REACT_APP_NEWS_API_KEY}`
  )
    .then((res) => res.json())
    .then(({ articles }) => articles.slice(0, 5))
    .then((news) => dispatch(getNews(news)))
    .catch((error) => dispatch(getError(error)));

const getRatesInfo = () => (dispatch) =>
  fetch(process.env.REACT_APP_RATES_URL)
    .then((res) => res.json())
    .then(({ rates: { EUR, RUB, GBP } }) =>
      dispatch(getRates({ EUR, RUB, GBP }))
    )
    .catch((error) => dispatch(getError(error)));

const fetchApiData = () => async (dispatch) =>
  await Promise.all([
    dispatch(getWeatherInfo()),
    dispatch(getNewsInfo()),
    dispatch(getRatesInfo()),
  ]);

export const getDataInfo = () => async (dispatch) => {
  dispatch(startLoadingInfoPanel());
  await dispatch(fetchApiData());
  dispatch(stopLoadingInfoPanel());
};
