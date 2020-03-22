import axios from "axios";
import md5 from "md5";
const XUMI_ENDPOINT = "http://localhost:3001/api/";

export const userExists = requiredUserName => {
  return axios
    .get(XUMI_ENDPOINT + "userExists?username=" + requiredUserName)
    .then(response => {
      console.log("axios response.data " + response.data);
      return response.data;
    });
};

export const register = newUser => {
  const newUserObject = {
    username: newUser.username,
    password: md5(newUser.password),
    email: newUser.email
  };

  return axios
    .post(XUMI_ENDPOINT + "user", newUserObject)
    .then(response => {
      console.log("Registered");
      return response.data;
    })
    .catch(err => {
      console.log("Error en promise Registro", err);
    });
};

export const login = user => {
  const userObject = {
    username: user.username,
    password: md5(user.password)
  };

  return axios
    .post(XUMI_ENDPOINT + "login", userObject)
    .then(response => {
      const userData = response.data[0];
      return userData;
    })
    .catch(error => {
      console.log(error);
    });
};
