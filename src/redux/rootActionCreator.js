import { getDataInfo } from './info/info.action.creators';
import { getAllTasks } from './tasks/tasks.action.creators';

export const getData = () => (dispatch) => {
  dispatch(getDataInfo());
  dispatch(getAllTasks());
};
