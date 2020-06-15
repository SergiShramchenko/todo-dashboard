import { updateState } from '../reducer.utils';

export const getTasks = (state) => updateState(state);

export const addTask = (state, action) => {
  const tasks = [
    ...state.tasks,
    {
      id: state.tasks.length + 1,
      name: action.payload,
      done: false,
      important: false,
    },
  ];

  return updateState(state, { tasks });
};

export const deleteTask = (state, action) => {
  const tasks = [...state.tasks.filter(({ id }) => id !== action.payload)];

  return updateState(state, { tasks });
};

export const toogleOptions = (state, action) => {
  const tasks = [
    ...state.tasks.map((task) => {
      return {
        ...task,
        [action.optName]:
          task.id === action.taskId
            ? !task[action.optName]
            : task[action.optName],
      };
    }),
  ];

  return updateState(state, { tasks });
};

export const getSearchValue = (state, action) =>
  updateState(state, { searchValue: action.payload });

export const getNewTaskValue = (state, action) =>
  updateState(state, { newTaskValue: action.payload });

export const cleanUpInput = (state) => updateState(state, { newTaskValue: '' });

export const toggleBtnAll = (state) =>
  updateState(state, { options: { all: true, active: false, done: false } });

export const toggleBtnActive = (state) =>
  updateState(state, { options: { all: false, active: true, done: false } });

export const toggleBtnDone = (state) =>
  updateState(state, { options: { all: false, active: false, done: true } });
