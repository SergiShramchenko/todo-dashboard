import React from 'react';

import OptionIcon from '../option-icon';

import './taskKOptions.css';

export default ({ id, toggleTaskOptions, deleteTask }) => (
  <div className='tasks__item-functions'>
    <OptionIcon toggle={toggleTaskOptions} id={id} optName={'done'} />
    <OptionIcon toggle={toggleTaskOptions} id={id} optName={'important'} />
    <OptionIcon toggle={deleteTask} id={id} optName={'delete'} />
  </div>
);
