import { createSelector } from 'reselect';

const selectUi = (state) => state.ui;

export const selectLoading = createSelector(
  [selectUi],
  ({ loading }) => loading
);
