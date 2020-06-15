import { updateState } from '../reducer.utils';

export const loadingInfoPanel = (state) =>
  updateState(state, { loadingInfoPanel: true });

export const stopLoadinInfoPanel = (state) =>
  updateState(state, { loadingInfoPanel: false });

export const loadingTasksPanel = (state) =>
  updateState(state, { loadingTaskPanel: true });

export const stopLoadingTasksPanel = (state) =>
  updateState(state, { loadingTaskPanel: false });
