import React from 'react';

import './optionIcon.css';

export default ({ toggle, id, optName }) => (
  <span className='material-icons' onClick={() => toggle(id, optName)}>
    {optName === 'important' ? 'priority_high' : optName}
  </span>
);
