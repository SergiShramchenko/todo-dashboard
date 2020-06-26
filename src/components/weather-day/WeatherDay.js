import React from 'react';

import Date from '../date';

import './weatherDay.css';
import WeatherItem from '../weather-item';

export default ({ name }) => (
  <div className='todo-info__weather-date'>
    <WeatherItem name={name} />
    <Date />
  </div>
);
