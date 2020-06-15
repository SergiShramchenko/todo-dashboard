import { addTask, cleanUpInput } from './tasks.actions';

export const addNewItem = (e, task) => (dispatch) => {
  e.preventDefault();
  dispatch(addTask(task));
  dispatch(cleanUpInput());
};
