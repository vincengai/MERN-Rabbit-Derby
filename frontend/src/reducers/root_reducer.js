import { combineReducers } from "redux";
import ui from "./ui_reducer";
import errors from './errors_reducer';
import session from "./session_reducer";
import highscores from './highscores_reducer';

const rootReducer = combineReducers({
  ui,
  session,
  errors,
  highscores,
});

export default rootReducer;