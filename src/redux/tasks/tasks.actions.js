import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_DONE,
  TOGGLE_IMPORTANT,
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

export const toggleDone = (taskId) => ({
  type: TOGGLE_DONE,
  payload: taskId,
});

export const toggleImportant = (taskId) => ({
  type: TOGGLE_IMPORTANT,
  payload: taskId,
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
