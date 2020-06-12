import { combineReducers } from 'redux';

import uiReducer from './ui/ui.reducer';
import infoReducer from './info/info.reducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  info: infoReducer,
});

export default rootReducer;
