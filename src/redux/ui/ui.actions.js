import {
  START_LOADING_INFO_PANEL,
  STOP_LOADING_INFO_PANEL,
  START_LOADING_TASKS_PANEL,
  STOP_LOADING_TASKS_PANEL,
} from './ui.types';

export const startLoadingInfoPanel = () => ({
  type: START_LOADING_INFO_PANEL,
});
export const stopLoadingInfoPanel = () => ({
  type: STOP_LOADING_INFO_PANEL,
});
export const startLoadingTasksPanel = () => ({
  type: START_LOADING_TASKS_PANEL,
});
export const stopLoadingTasksPanel = () => ({
  type: STOP_LOADING_TASKS_PANEL,
});
