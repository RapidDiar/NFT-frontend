import {
  LOGIN_ERROR,
  LOGIN_LOAD,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_ERROR,
  REGISTER_LOAD,
  REGISTER_SUCCESS,
} from "../types";

const initialState = {
  isLoading: false,
  isLogin: localStorage.getItem("accessToken") ? true : false,
  accessToken: null,
  refreshToken: null,
  userId: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        accessToken: payload.access,
        refreshToken: payload.refresh,
        userId: payload.user_id,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        accessToken: null,
        refreshToken: null,
      };
    case REGISTER_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
