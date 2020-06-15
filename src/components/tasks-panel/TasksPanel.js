import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectTasks,
  selectSearchValue,
  selectOptions,
} from '../../redux/tasks/tasks.selectors';

import {
  addTask,
  deleteTask,
  toggleTaskOptions,
  getSearchValue,
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
} from '../../redux/tasks/tasks.actions';

import SearchInput from '../search-input';
import TasksOptions from '../nav-options';
import TasksList from '../tasks-list';

import './tasksPanel.css';

const TasksPanel = ({
  tasks,
  searchValue,
  options,
  getSearchValue,
  addTask,
  deleteTask,
  toggleTaskOptions,
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
}) => (
  <div className='todo-tasks'>
    <SearchInput getSearchValue={getSearchValue} searchValue={searchValue} />
    <TasksOptions
      toggleBtnAll={toggleBtnAll}
      toggleBtnActive={toggleBtnActive}
      toggleBtnDone={toggleBtnDone}
      options={options}
    />
    <TasksList
      tasks={tasks}
      searchValue={searchValue}
      options={options}
      addTask={addTask}
      deleteTask={deleteTask}
      toggleTaskOptions={toggleTaskOptions}
    />
  </div>
);

const mapStateToProps = createStructuredSelector({
  tasks: selectTasks,
  searchValue: selectSearchValue,
  options: selectOptions,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
  deleteTask: (taskId) => dispatch(deleteTask(taskId)),
  toggleTaskOptions: (taskId, optName) =>
    dispatch(toggleTaskOptions(taskId, optName)),
  getSearchValue: (value) => dispatch(getSearchValue(value)),
  toggleBtnAll: () => dispatch(toggleBtnAll()),
  toggleBtnActive: () => dispatch(toggleBtnActive()),
  toggleBtnDone: () => dispatch(toggleBtnDone()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksPanel);
