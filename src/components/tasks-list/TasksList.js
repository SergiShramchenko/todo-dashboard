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
  toggleDone,
  toggleImportant,
}) => (
  <div className='tasks'>
    <TaskItem
      tasks={tasks}
      options={options}
      toggleDone={toggleDone}
      toggleImportant={toggleImportant}
      deleteTask={deleteTask}
      searchValue={searchValue}
    />
    <NewTaskItem addTask={addTask} />
  </div>
);
