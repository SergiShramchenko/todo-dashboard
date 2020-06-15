import React from 'react';

import TaskItem from '../task-item';
import NewTaskItem from '../new-task-item';

import './tasksList.css';

export default ({
  tasks,
  searchValue,
  newTaskValue,
  options,
  deleteTask,
  toggleOptions,
  getNewTaskValue,
  addNewItem,
}) => (
  <div className='tasks'>
    <TaskItem
      tasks={tasks}
      options={options}
      deleteTask={deleteTask}
      searchValue={searchValue}
      toggleOptions={toggleOptions}
    />
    <NewTaskItem
      newTaskValue={newTaskValue}
      getNewTaskValue={getNewTaskValue}
      addNewItem={addNewItem}
    />
  </div>
);
