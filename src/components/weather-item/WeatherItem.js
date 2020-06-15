import React from 'react';

import './weatherItem.css';

export default ({ name, temp, className }) => (
  <p className={className}>
    {name} {temp}
  </p>
);
