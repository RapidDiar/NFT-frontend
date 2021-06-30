import {
  LOGIN_ERROR,
  LOGIN_LOAD,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_LOAD,
  REGISTER_ERROR,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../types";
import axiosInstance from "../../axios/axiosApi";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const login = (username, password) => (dispatch) => {
  dispatch({
    type: LOGIN_LOAD,
  });
  const loginData = {
    username: username,
    password: password,
  };
  axiosInstance.post("api/token/", loginData).then(
    (res) => {
      console.log(res);
      const decodeToken = jwtDecode(res.data.access);
      res.data.user_id = decodeToken.user_id;
      localStorage.setItem("userId", decodeToken.user_id);
      localStorage.setItem("accessToken", res.data.access);
      localStorage.setItem("refreshToken", res.data.refresh);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    },
    (err) => {
      console.log(err);
      dispatch({
        type: LOGIN_ERROR,
      });
      dispatch({
        type: SET_MESSAGE,
      });
    }
  );
};

export const register = (username, email, password) => (dispatch) => {
  // dispatch({
  //   type: REGISTER_LOAD,
  // });
  const registerData = {
    username: username,
    password: password,
    email: email,
  };

  console.log(registerData);

  axios.post("http://10.0.10.49:8000/account/register/", registerData).then(
    (res) => {
      console.log(res);
      dispatch({
        type: SET_MESSAGE,
        payload: res.data.message,
      });
      dispatch({
        type: REGISTER_SUCCESS,
      });
    },
    (err) => {
      dispatch({
        type: REGISTER_ERROR,
      });
      console.log(err);
    }
  );
  dispatch({
    type: CLEAR_MESSAGE,
  });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  dispatch({
    type: LOGOUT,
  });
};
