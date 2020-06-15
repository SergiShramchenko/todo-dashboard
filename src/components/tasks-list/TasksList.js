import React from 'react';

import TaskItem from '../task-item';
import NewTaskItem from '../new-task-item';

import './tasksList.css';

export default ({
  tasks,
  searchValue,
  options,
  addTask,
  deleteTask,
  toggleTaskOptions,
}) => (
  <div className='tasks'>
    <TaskItem
      tasks={tasks}
      options={options}
      deleteTask={deleteTask}
      searchValue={searchValue}
      toggleTaskOptions={toggleTaskOptions}
    />
    <NewTaskItem addTask={addTask} />
  </div>
);
