import { ADD_TASK, DELETE_TASK } from './tasks.types';

const initialState = {
  tasks: [
    {
      id: 0,
      name: 'Learn TypeScript',
      done: false,
      important: false,
      active: false,
    },
    {
      id: 1,
      name: 'Learn ECMAScript',
      done: false,
      important: false,
      active: false,
    },
    {
      id: 2,
      name: 'Learn MobX',
      done: false,
      important: false,
      active: false,
    },
  ],
  options: {
    all: true,
    active: false,
    done: false,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
      };
    case DELETE_TASK:
      return {
        ...state,
      };
    default:
      return state;
  }
};
