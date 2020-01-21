import * as SessionActions from "../actions/session_actions";

const _nullErrors = [];

const sessionErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case SessionActions.RECEIVE_SESSION_ERRORS:
      return action.errors;
    case SessionActions.RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;