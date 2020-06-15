import {
  START_LOADING_INFO_PANEL,
  START_LOADING_TASKS_PANEL,
  STOP_LOADING_INFO_PANEL,
  STOP_LOADING_TASKS_PANEL,
} from './ui.types';

import {
  loadingInfoPanel,
  loadingTasksPanel,
  stopLoadinInfoPanel,
  stopLoadingTasksPanel,
} from './ui.reducer.utils';

const initialState = {
  loadingInfoPanel: true,
  loadingTaskPanel: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_INFO_PANEL:
      return loadingInfoPanel(state);
    case STOP_LOADING_INFO_PANEL:
      return stopLoadinInfoPanel(state);
    case START_LOADING_TASKS_PANEL:
      return loadingTasksPanel(state);
    case STOP_LOADING_TASKS_PANEL:
      return stopLoadingTasksPanel(state);
    default:
      return state;
  }
};
