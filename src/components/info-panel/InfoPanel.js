import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectWeather,
  selectNews,
  selectRates,
} from '../../redux/info/info.selectors';

import { selectLoading } from '../../redux/ui/ui.selectors';

import News from '../news';
import Weather from '../weather';
import ExchangeRates from '../exchange-rates';

import withSkeleton from '../../hocs/with-skeleton';

import './InfoPanel.css';

const InfoPanel = ({ weather, news, rates }) => (
  <div className='todo-info'>
    <Weather weather={weather} />
    <News news={news} />
    <ExchangeRates rates={rates} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  news: selectNews,
  rates: selectRates,
  weather: selectWeather,
  loading: selectLoading,
});

export default compose(connect(mapStateToProps), withSkeleton)(InfoPanel);
