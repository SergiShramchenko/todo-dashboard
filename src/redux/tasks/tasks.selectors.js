import { createSelector } from 'reselect';

const selectTodo = (state) => state.tasks;

export const selectTasks = createSelector([selectTodo], ({ tasks }) => tasks);

export const selectSearchValue = createSelector(
  [selectTodo],
  ({ searchValue }) => searchValue
);

export const selectOptions = createSelector(
  [selectTodo],
  ({ options }) => options
);

export const selectNewTaskValue = createSelector(
  [selectTodo],
  ({ newTaskValue }) => newTaskValue
);
