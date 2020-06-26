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

import {
  getTasks,
  addTask,
  deleteTask,
  toogleOptions,
  getSearchValue,
  getNewTaskValue,
  cleanUpInput,
  toggleBtnAll,
  toggleBtnActive,
  toggleBtnDone,
} from './tasks.reducer.utils';

const initialState = {
  tasks: [
    {
      id: 0,
      name: 'Learn TypeScript',
      done: false,
      important: false,
    },
    {
      id: 1,
      name: 'Learn ECMAScript',
      done: false,
      important: false,
    },
    {
      id: 2,
      name: 'Learn MobX',
      done: true,
      important: false,
    },
  ],
  options: {
    all: true,
    active: false,
    done: false,
  },
  searchValue: '',
  newTaskValue: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return getTasks(state);
    case ADD_TASK:
      return addTask(state, action);
    case DELETE_TASK:
      return deleteTask(state, action);
    case TOGGLE_OPTIONS:
      return toogleOptions(state, action);
    case GET_SEARCH_VALUE:
      return getSearchValue(state, action);
    case GET_NEW_TASK_VALUE:
      return getNewTaskValue(state, action);
    case CLEAN_UP_INPUT:
      return cleanUpInput(state);
    case TOGGLE_BTN_ALL:
      return toggleBtnAll(state);
    case TOGGLE_BTN_ACTIVE:
      return toggleBtnActive(state);
    case TOGGLE_BTN_DONE:
      return toggleBtnDone(state);

    default:
      return state;
  }
};
