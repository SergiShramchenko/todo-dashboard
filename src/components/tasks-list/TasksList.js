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
  getNewTaskValue,
} from '../../redux/tasks/tasks.actions';

import { addNewItem } from '../../redux/tasks/tasks.action.creators';

import TaskItem from '../task-item';
import NewTaskItem from '../new-task-item';

import './tasksList.css';

const TaskList = ({
  tasks,
  searchValue,
  newTaskValue,
  options,
  deleteTask,
  toggleOptions,
  getNewTaskValue,
  addNewItem,
}) => (
  <div className='tasks'>
    <TaskItem
      tasks={tasks}
      options={options}
      deleteTask={deleteTask}
      searchValue={searchValue}
      toggleOptions={toggleOptions}
    />
    <NewTaskItem
      newTaskValue={newTaskValue}
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
  getNewTaskValue: (value) => dispatch(getNewTaskValue(value)),
  addNewItem: (e, item) => dispatch(addNewItem(e, item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
