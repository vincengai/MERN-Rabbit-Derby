import axios from "axios";

// 1. Sets a common header for requests on user login
// 2. Deletes the common header on user logout (any falsey token)
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = userData => {
  return axios.post("/api/users/register", userData)
    .then( () => login(userData));
};

export const login = userData => {
  return axios.post("/api/users/login", userData);
};