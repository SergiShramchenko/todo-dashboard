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

const initialState = {
  tasks: [
    {
      id: 0,
      name: 'Learn TypeScript',
      done: false,
      important: false,
      active: true,
    },
    {
      id: 1,
      name: 'Learn ECMAScript',
      done: false,
      important: false,
      active: true,
    },
    {
      id: 2,
      name: 'Learn MobX',
      done: true,
      important: false,
      active: true,
    },
  ],
  options: {
    all: true,
    active: false,
    done: false,
  },
  searchValue: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            name: action.payload,
            done: false,
            important: false,
            active: false,
          },
        ],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: [...state.tasks.filter(({ id }) => id !== action.payload)],
      };
    case TOGGLE_DONE:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            return {
              ...task,
              done: task.id === action.payload ? !task.done : task.done,
              active: task.id === action.payload ? !task.active : task.active,
            };
          }),
        ],
      };
    case TOGGLE_IMPORTANT:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            return {
              ...task,
              important:
                task.id === action.payload ? !task.important : task.important,
            };
          }),
        ],
      };
    case GET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    case TOGGLE_BTN_ALL:
      return {
        ...state,
        options: { all: true, active: false, done: false },
      };
    case TOGGLE_BTN_ACTIVE:
      return {
        ...state,
        options: { all: false, active: true, done: false },
      };
    case TOGGLE_BTN_DONE:
      return {
        ...state,
        options: { all: false, active: false, done: true },
      };

    default:
      return state;
  }
};
