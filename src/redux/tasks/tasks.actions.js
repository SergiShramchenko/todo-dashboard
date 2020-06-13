import { ADD_TASK, DELETE_TASK } from './tasks.types';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
export const deleteTask = () => ({
  type: DELETE_TASK,
});
