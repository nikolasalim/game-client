import request from "superagent";
const baseUrl = "http://localhost:4000";
// const baseUrl = "https://pacific-beach-63955.herokuapp.com";

export const SIGN_UP = "SIGN_UP";
function newUser(payload) {
  return {
    type: SIGN_UP,
    payload
  };
}

export const signup = (name, password) => dispatch => {
  const data = { name: name, password: password };
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const LOGIN = "LOGIN";
function loginUser(payload) {
  return {
    type: LOGIN,
    payload
  };
}

export const login = (name, password) => dispatch => {
  const data = { name: name, password: password };
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = loginUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
