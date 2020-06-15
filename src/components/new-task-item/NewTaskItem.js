import React from 'react';

import './newTaskItem.css';

export default ({ newTaskValue, getNewTaskValue, addNewItem }) => (
  <form onSubmit={(e) => addNewItem(e, newTaskValue)}>
    <input
      className='tasks__item new-task'
      type='text'
      style={{ color: 'rgb(95, 94, 94)' }}
      contentEditable
      placeholder='New task'
      onChange={(e) => getNewTaskValue(e.target.value)}
      value={newTaskValue}
      required
    />
  </form>
);
