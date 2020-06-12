import React from 'react';

import './tasksPanel.css';

export default () => (
  <div className='todo-tasks'>
    <input
      className='todo-tasks__input'
      type='text'
      required
      placeholder='search'
    />
    <div className='options'>
      <div className='options-features'>
        <p>All</p>
        <p>Active</p>
        <p>Done</p>
      </div>
    </div>
    <ul className='tasks'>
      <li className='tasks__item' style={{ color: 'rgb(95, 94, 94)' }}>
        Add new
      </li>
      <li className='tasks__item'>
        Learn Redux
        <div className='tasks__item-functions'>
          <span className='material-icons'>done</span>
          <span className='material-icons'>priority_high</span>
          <span className='material-icons'>delete</span>
        </div>
      </li>
      <li className='tasks__item'>
        Learn Redux
        <div className='tasks__item-functions'>
          <span className='material-icons'>done</span>
          <span className='material-icons'>priority_high</span>
          <span className='material-icons'>delete</span>
        </div>
      </li>
      <li className='tasks__item'>
        Learn Redux
        <div className='tasks__item-functions'>
          <span className='material-icons'>done</span>
          <span className='material-icons'>priority_high</span>
          <span className='material-icons'>delete</span>
        </div>
      </li>
      <li className='tasks__item' style={{ color: 'rgb(95, 94, 94)' }}>
        Add new
      </li>
    </ul>
  </div>
);
