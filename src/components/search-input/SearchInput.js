import React from 'react';

import './searchInput.css';

export default ({ searchValue, getSearchValue }) => (
  <input
    className='todo-tasks__input'
    type='text'
    required
    placeholder='search'
    value={searchValue}
    onChange={(e) => getSearchValue(e.target.value)}
  />
);
