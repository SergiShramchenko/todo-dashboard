import React from 'react';

import { days, months } from '../../utils/date';

import './date.css';

export default () => (
  <>
    <p>
      {months[new Date().getMonth()]} {new Date().getDate()}
    </p>
    <p>{days[new Date().getDay()]}</p>
  </>
);
