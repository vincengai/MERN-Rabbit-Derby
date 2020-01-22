import jwt_decode from "jwt-decode";
import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

// Dispatched on user login
const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

// Dispatched on user signup to redirect to the login page
// const receiveUserLogin = data => {
//   return {
//     type: RECEIVE_USER_LOGIN,
//     data
//   };
// };

// Dispatched on user logout
const receiveUserLogout = () => {
  return {
    type: RECEIVE_USER_LOGOUT
  };
};

// Dispatched to show authentication errors
const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = user => dispatch => {
  return (
    SessionAPIUtil.signup(user)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        SessionAPIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
      })
      .catch(error => {
        dispatch(receiveErrors(error.response.data));
      })
  );
};

export const login = user => dispatch => {
  return (
    SessionAPIUtil.login(user)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        SessionAPIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
      })
      .catch(error => {
        dispatch(receiveErrors(error.data));
      })
  );
};

export const logout = () => dispatch => {
  // 1. Remove the token from local storage
  localStorage.removeItem("jwtToken");
  // 2. Remove the token from the common axios header
  SessionAPIUtil.setAuthToken(false);
  // 3. Dispatch a logout action to update the store
  dispatch(receiveUserLogout());
};