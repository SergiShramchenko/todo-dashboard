import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK_OPTIONS,
  GET_SEARCH_VALUE,
  TOGGLE_BTN_ALL,
  TOGGLE_BTN_ACTIVE,
  TOGGLE_BTN_DONE,
} from './tasks.types';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleTaskOptions = (taskId, optName) => ({
  type: TOGGLE_TASK_OPTIONS,
  taskId,
  optName,
});

export const getSearchValue = (value) => ({
  type: GET_SEARCH_VALUE,
  payload: value,
});

export const toggleBtnAll = () => ({
  type: TOGGLE_BTN_ALL,
});
export const toggleBtnActive = () => ({
  type: TOGGLE_BTN_ACTIVE,
});
export const toggleBtnDone = () => ({
  type: TOGGLE_BTN_DONE,
});
