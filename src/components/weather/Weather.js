import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectWeather } from '../../redux/info/info.selectors';

import WeatherDay from '../weather-day';
import WeatherData from '../weather-data/WeatherData';

import './weather.css';

const Weather = ({ weather: { main, name, weather } }) => (
  <div className='todo-info__weather'>
    <h3>Weather</h3>
    <div className='weather-block'>
      <WeatherDay name={name} />
      <WeatherData weather={weather} main={main} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  weather: selectWeather,
});

export default connect(mapStateToProps)(Weather);
