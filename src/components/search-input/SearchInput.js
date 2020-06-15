import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSearchValue } from '../../redux/tasks/tasks.selectors';

import { getSearchValue } from '../../redux/tasks/tasks.actions';

import './searchInput.css';

const SearchInput = ({ searchValue, getSearchValue }) => (
  <input
    className='todo-tasks__input'
    type='text'
    required
    placeholder='search'
    value={searchValue}
    onChange={(e) => getSearchValue(e.target.value)}
  />
);

const mapStateToProps = () =>
  createStructuredSelector({
    searchValue: selectSearchValue,
  });

export default connect(mapStateToProps, { getSearchValue })(SearchInput);
