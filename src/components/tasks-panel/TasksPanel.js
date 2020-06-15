import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLoadingTasksPanel } from '../../redux/ui/ui.selectors';

import SearchInput from '../search-input';
import NavOptions from '../nav-options';
import TasksList from '../tasks-list';

import withSpinner from '../../hocs/with-spinner';

import './tasksPanel.css';

const TaskPanel = () => (
  <div className='todo-tasks'>
    <SearchInput />
    <NavOptions />
    <TasksList />
  </div>
);

const mapStateToProps = createStructuredSelector({
  loading: selectLoadingTasksPanel,
});

export default connect(mapStateToProps)(withSpinner(TaskPanel));
