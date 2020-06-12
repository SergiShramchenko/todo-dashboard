import React from 'react';

import './weather.css';

export default ({ weather: { main, name, weather } }) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className='todo-info__weather'>
      <h3>Weather</h3>
      <div className='weather-block'>
        <div className='todo-info__weather-date'>
          <p>{name}</p>
          <p>
            {months[new Date().getMonth()]} {new Date().getDate()}
          </p>
          <p>{days[new Date().getDay()]}</p>
          {weather ? (
            <>
              <img
                src={`http://openweathermap.org/img/w/${weather.map(
                  ({ icon }) => icon
                )}.png`}
                alt='wthr img'
              />
              {/* <p>{weather.map(({ description }) => description)}</p> */}
            </>
          ) : null}
        </div>
        <div className='todo-info__weather-temp'>
          <span className='temp'>{!main ? null : main.temp}</span>
        </div>
        <div className='todo-info__weather-data'>
          <p>min {!main ? null : main.temp_min}</p>
          <p>max {!main ? null : main.temp_max}</p>
          <p>feels {!main ? null : main.feels_like}</p>
        </div>
      </div>
    </div>
  );
};
