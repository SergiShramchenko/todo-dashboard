import React from 'react';

import './navOptionItem.css';

export default ({ toggleBtn, nav, name }) => (
  <p onClick={toggleBtn} className={nav ? 'active' : ''}>
    {name}
  </p>
);
