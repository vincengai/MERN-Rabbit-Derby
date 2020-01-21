import * as SessionActions from "../actions/session_actions";

const _defaultState = {
  isAuthenticated: false,
  user: {}
};

const sessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case SessionActions.RECEIVE_CURRENT_USER:
      return {
        ...oldState,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case SessionActions.RECEIVE_USER_LOGIN:
      return {
        ...oldState,
        isSignedIn: true
      };
    case SessionActions.RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return oldState;
  }
};

export default sessionReducer;