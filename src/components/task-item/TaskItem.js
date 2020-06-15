import React from 'react';

import toggleBtn from '../../utils/toggle-btn';
import searchTask from '../../utils/search-task';

import TaskOptions from '../task-options';

import './taskItem.css';

export default ({
  tasks,
  options,
  deleteTask,
  searchValue,
  toggleTaskOptions,
}) =>
  searchTask(toggleBtn(tasks, options), searchValue).map(
    ({ name, id, done, important }) => {
      let taskDone = done ? 'done' : '';
      let taskImportant = important ? 'important' : '';

      return (
        <div className='tasks__item' key={id}>
          <div className={`item ${taskDone} ${taskImportant}`}>{name}</div>
          <TaskOptions
            id={id}
            toggleTaskOptions={toggleTaskOptions}
            deleteTask={deleteTask}
          />
        </div>
      );
    }
  );
