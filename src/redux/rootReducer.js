import { combineReducers } from 'redux';

import uiReducer from './ui/ui.reducer';
import infoReducer from './info/info.reducer';
import taskReducer from './tasks/tasks.reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  info: infoReducer,
  tasks: taskReducer,
});

export default rootReducer;
