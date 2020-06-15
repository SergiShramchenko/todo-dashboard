import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectTasks,
  selectSearchValue,
  selectOptions,
  selectNewTaskValue,
} from '../../redux/tasks/tasks.selectors';

import {
  deleteTask,
  toggleOptions,
  getSearchValue,
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
  getNewTaskValue,
} from '../../redux/tasks/tasks.actions';

import { addNewItem } from '../../redux/tasks/tasks.action.creators';

import SearchInput from '../search-input';
import NavOptions from '../nav-options';
import TasksList from '../tasks-list';

import './tasksPanel.css';

const TasksPanel = ({
  tasks,
  searchValue,
  newTaskValue,
  options,
  getSearchValue,
  deleteTask,
  toggleOptions,
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
  getNewTaskValue,
  addNewItem,
}) => (
  <div className='todo-tasks'>
    <SearchInput getSearchValue={getSearchValue} searchValue={searchValue} />
    <NavOptions
      toggleBtnAll={toggleBtnAll}
      toggleBtnActive={toggleBtnActive}
      toggleBtnDone={toggleBtnDone}
      options={options}
    />
    <TasksList
      tasks={tasks}
      searchValue={searchValue}
      newTaskValue={newTaskValue}
      options={options}
      deleteTask={deleteTask}
      toggleOptions={toggleOptions}
      getNewTaskValue={getNewTaskValue}
      addNewItem={addNewItem}
    />
  </div>
);

const mapStateToProps = createStructuredSelector({
  tasks: selectTasks,
  searchValue: selectSearchValue,
  newTaskValue: selectNewTaskValue,
  options: selectOptions,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (taskId) => dispatch(deleteTask(taskId)),
  toggleOptions: (taskId, optName) => dispatch(toggleOptions(taskId, optName)),
  getSearchValue: (value) => dispatch(getSearchValue(value)),
  getNewTaskValue: (value) => dispatch(getNewTaskValue(value)),
  toggleBtnAll: () => dispatch(toggleBtnAll()),
  toggleBtnActive: () => dispatch(toggleBtnActive()),
  toggleBtnDone: () => dispatch(toggleBtnDone()),
  addNewItem: (e, item) => dispatch(addNewItem(e, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksPanel);
