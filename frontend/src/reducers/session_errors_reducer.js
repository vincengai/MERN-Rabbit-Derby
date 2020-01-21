import * as SessionActions from "../actions/session_actions";

const _defaultState = [];

const sessionErrorsReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SessionActions.RECEIVE_SESSION_ERRORS:
      return action.errors;
    case SessionActions.RECEIVE_CURRENT_USER:
      return _defaultState;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;