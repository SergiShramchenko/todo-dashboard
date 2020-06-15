import React from 'react';

import WeatherItem from '../weather-item';

import './weatherData.css';

export default ({ main }) =>
  main ? (
    <>
      <div className='todo-info__weather-temp'>
        <WeatherItem temp={main.temp} className={'temp'} />
      </div>
      <div className='todo-info__weather-data'>
        <WeatherItem name={'min'} temp={main.temp_min} />
        <WeatherItem name={'max'} temp={main.temp_max} />
        <WeatherItem name={'feels'} temp={main.feels_like} />
      </div>
    </>
  ) : null;
