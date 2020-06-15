import React from 'react';

import Date from '../date';
import WeatherIcon from '../weather-icon';

import './weatherDay.css';
import WeatherItem from '../weather-item';

export default ({ weather, name }) => (
  <div className='todo-info__weather-date'>
    <WeatherItem name={name} />
    <Date />
    <WeatherIcon weather={weather} />
  </div>
);
