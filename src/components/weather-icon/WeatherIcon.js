import React from 'react';

import './weatherIcon.css';

export default ({ weather }) => {
  return weather ? (
    <img
      src={`http://openweathermap.org/img/w/${weather.map(
        ({ icon }) => icon
      )}.png`}
      alt='wthr img'
    />
  ) : null;
};
