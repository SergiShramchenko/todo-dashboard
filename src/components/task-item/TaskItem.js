import React from 'react';

import './taskItem.css';

export default ({
  tasks,
  options,
  deleteTask,
  toggleDone,
  toggleImportant,
  searchValue,
}) => {
  let toggleBtn;

  if (options.active) toggleBtn = tasks.filter(({ done }) => !done);
  else if (options.done) toggleBtn = tasks.filter(({ done }) => done);
  else if (options.all) toggleBtn = tasks;

  return toggleBtn
    .filter(({ name }) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map(({ name, id, done, important }) => {
      let taskDone = done ? 'done' : '';
      let taskImportant = important ? 'important' : '';

      return (
        <div className='tasks__item' key={id}>
          <div className={`item ${taskDone} ${taskImportant}`}>{name}</div>
          <div className='tasks__item-functions'>
            <span className='material-icons' onClick={() => toggleDone(id)}>
              done
            </span>
            <span
              className='material-icons'
              onClick={() => toggleImportant(id)}
            >
              priority_high
            </span>
            <span className='material-icons' onClick={() => deleteTask(id)}>
              delete
            </span>
          </div>
        </div>
      );
    });
};
