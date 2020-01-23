import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errors from './errors_reducer';
import highscores from './highscores_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors,
  highscores,
});

export default rootReducer;