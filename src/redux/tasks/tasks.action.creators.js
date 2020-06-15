import { getTasks, addTask, cleanUpInput } from './tasks.actions';
import {
  startLoadingTasksPanel,
  stopLoadingTasksPanel,
} from '../ui/ui.actions';

export const getAllTasks = () => async (dispatch) => {
  dispatch(startLoadingTasksPanel());
  await dispatch(getTasks());
  dispatch(stopLoadingTasksPanel());
};

export const addNewItem = (e, task) => (dispatch) => {
  e.preventDefault();
  dispatch(addTask(task));
  dispatch(cleanUpInput());
};
