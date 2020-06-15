import React from 'react';

import NavOptionItem from '../nav-option-item';

import './navOptions.css';

export default ({
  options: { all, active, done },
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
}) => (
  <div className='options'>
    <div className='options-features'>
      <NavOptionItem toggleBtn={toggleBtnAll} nav={all} name={'All'} />
      <NavOptionItem toggleBtn={toggleBtnActive} nav={active} name={'Active'} />
      <NavOptionItem toggleBtn={toggleBtnDone} nav={done} name={'Done'} />
    </div>
  </div>
);
