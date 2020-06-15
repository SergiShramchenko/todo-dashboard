import { createSelector } from 'reselect';

const selectUi = (state) => state.ui;

export const selectLoadingInfoPanel = createSelector(
  [selectUi],
  ({ loadingInfoPanel }) => loadingInfoPanel
);
export const selectLoadingTasksPanel = createSelector(
  [selectUi],
  ({ loadingTaskPanel }) => loadingTaskPanel
);
