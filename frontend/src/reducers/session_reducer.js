import * as SessionActions from "../actions/session_actions";

const _defaultState = {
  isAuthenticated: false,
  currentUser: undefined
};

const sessionReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case SessionActions.RECEIVE_CURRENT_USER:
      nextState["isAuthenticated"] = !!action.currentUser;
      nextState["currentUser"] = action.currentUser;
      return nextState;
    // case SessionActions.RECEIVE_USER_LOGIN:
    //   nextState["user"] = action.data;
    //   nextState["isAuthenticated"] = true;
    //   nextState["isSignedIn"] = true;
    //   return nextState;
    case SessionActions.RECEIVE_USER_LOGOUT:
      return _defaultState;
    default:
      return oldState;
  }
};

export default sessionReducer;