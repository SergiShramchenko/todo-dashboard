import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_OPTIONS,
  GET_SEARCH_VALUE,
  TOGGLE_BTN_ALL,
  TOGGLE_BTN_ACTIVE,
  TOGGLE_BTN_DONE,
  GET_NEW_TASK_VALUE,
  CLEAN_UP_INPUT,
} from './tasks.types';

export const getTasks = () => ({
  type: GET_TASKS,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleOptions = (taskId, optName) => ({
  type: TOGGLE_OPTIONS,
  taskId,
  optName,
});

export const getSearchValue = (value) => ({
  type: GET_SEARCH_VALUE,
  payload: value,
});

export const getNewTaskValue = (value) => ({
  type: GET_NEW_TASK_VALUE,
  payload: value,
});

export const cleanUpInput = () => ({
  type: CLEAN_UP_INPUT,
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
