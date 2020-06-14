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
  toggleDone,
  toggleImportant,
  getSearchValue,
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
} from '../../redux/tasks/tasks.actions';

import SearchInput from '../search-input';
import TasksOptions from '../tasks-options';
import TasksList from '../tasks-list';

import './tasksPanel.css';

const TasksPanel = ({
  tasks,
  searchValue,
  options,
  getSearchValue,
  addTask,
  deleteTask,
  toggleDone,
  toggleImportant,
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
}) => (
  <div className='todo-tasks'>
    <SearchInput getSearchValue={getSearchValue} />
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
      toggleDone={toggleDone}
      toggleImportant={toggleImportant}
      deleteTask={deleteTask}
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
  toggleDone: (taskId) => dispatch(toggleDone(taskId)),
  toggleImportant: (taskId) => dispatch(toggleImportant(taskId)),
  getSearchValue: (value) => dispatch(getSearchValue(value)),
  toggleBtnAll: () => dispatch(toggleBtnAll()),
  toggleBtnActive: () => dispatch(toggleBtnActive()),
  toggleBtnDone: () => dispatch(toggleBtnDone()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksPanel);
