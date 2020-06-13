import React from 'react';

import SearchInput from '../search-input';
import TasksOptions from '../tasks-options';
import TasksList from '../tasks-list';

import './tasksPanel.css';

export default () => (
  <div className='todo-tasks'>
    <SearchInput />
    <TasksOptions />
    <TasksList />
  </div>
);
