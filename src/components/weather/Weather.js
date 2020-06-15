import React from 'react';

import WeatherDay from '../weather-day';
import WeatherData from '../weather-data/WeatherData';

import './weather.css';

export default ({ weather: { main, name, weather } }) => (
  <div className='todo-info__weather'>
    <h3>Weather</h3>
    <div className='weather-block'>
      <WeatherDay weather={weather} name={name} />
      <WeatherData main={main} />
    </div>
  </div>
);
