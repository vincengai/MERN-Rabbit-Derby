import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errors from './errors_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  errors
});

export default rootReducer;