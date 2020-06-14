import React from 'react';

import './tasksOptions.css';

export default ({
  options: { all, active, done },
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
}) => (
  <div className='options'>
    <div className='options-features'>
      <p onClick={toggleBtnAll} className={all ? 'active' : ''}>
        All
      </p>
      <p onClick={toggleBtnActive} className={active ? 'active' : ''}>
        Active
      </p>
      <p onClick={toggleBtnDone} className={done ? 'active' : ''}>
        Done
      </p>
    </div>
  </div>
);
