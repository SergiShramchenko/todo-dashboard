import React from 'react';

import WeatherItem from '../weather-item';
import WeatherIcon from '../weather-icon/';

import './weatherData.css';

export default ({ weather, main }) =>
  main ? (
    <>
      <div className='todo-info__weather-temp'>
        <WeatherItem temp={main.temp} className={'temp'} />
        <WeatherIcon weather={weather} />
      </div>
      <div className='todo-info__weather-data'>
        <WeatherItem name={'min'} temp={main.temp_min} />
        <WeatherItem name={'max'} temp={main.temp_max} />
        <WeatherItem name={'feels'} temp={main.feels_like} />
      </div>
    </>
  ) : null;
