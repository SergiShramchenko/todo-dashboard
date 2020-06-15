import React from 'react';

import toggleBtn from '../../utils/toggle-btn';
import searchTask from '../../utils/search-task';

import TaskOptions from '../task-options';
import TaskName from '../task-name';

import './taskItem.css';

export default ({ tasks, options, deleteTask, searchValue, toggleOptions }) =>
  searchTask(toggleBtn(tasks, options), searchValue).map(
    ({ name, id, done, important }) => (
      <div className='tasks__item' key={id}>
        <TaskName name={name} done={done} important={important} />
        <TaskOptions
          id={id}
          toggleOptions={toggleOptions}
          deleteTask={deleteTask}
        />
      </div>
    )
  );
