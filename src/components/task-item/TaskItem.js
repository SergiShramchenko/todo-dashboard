import React from 'react';

import './taskItem.css';

export default () => (
  <li className='tasks__item'>
    Learn Redux
    <div className='tasks__item-functions'>
      <span className='material-icons'>done</span>
      <span className='material-icons'>priority_high</span>
      <span className='material-icons'>delete</span>
    </div>
  </li>
);
