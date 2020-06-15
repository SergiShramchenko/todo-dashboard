import React from 'react';

import './taskName.css';

export default ({ name, done, important }) => {
  let taskDone = done ? 'done' : '';
  let taskImportant = important ? 'important' : '';
  return <div className={`item ${taskDone} ${taskImportant}`}>{name}</div>;
};
