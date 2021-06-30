import axiosInstance from "../../axios/axiosApi";
import { REFRESH_TOKEN } from "../types";

export const refresh = () => {
  return (dispatch) => {
    const data = {
      refresh: localStorage.getItem("refreshToken"),
    };
    axiosInstance.post("api/token/refresh/", data).then(
      (res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.access);
        dispatch(postRefresh(res.data.access));
      },
      (err) => {
        console.log(err);
      }
    );
  };
};

export const postRefresh = (token) => {
  return {
    type: REFRESH_TOKEN,
    payload: token,
  };
};
