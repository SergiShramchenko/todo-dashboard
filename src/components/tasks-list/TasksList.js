import React from 'react';

import TaskItem from '../task-item';

import './tasksList.css';

export default () => (
  <ul className='tasks'>
    <li className='tasks__item' style={{ color: 'rgb(95, 94, 94)' }}>
      Add new
    </li>
    <TaskItem />
    <TaskItem />
    <TaskItem />
    <li className='tasks__item' style={{ color: 'rgb(95, 94, 94)' }}>
      Add new
    </li>
  </ul>
);
