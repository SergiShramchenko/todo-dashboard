import React from 'react';

import OptionIcon from '../option-icon';

import './taskKOptions.css';

export default ({ id, toggleOptions, deleteTask }) => (
  <div className='tasks__item-functions'>
    <OptionIcon toggle={toggleOptions} id={id} optName={'done'} />
    <OptionIcon toggle={toggleOptions} id={id} optName={'important'} />
    <OptionIcon toggle={deleteTask} id={id} optName={'delete'} />
  </div>
);
