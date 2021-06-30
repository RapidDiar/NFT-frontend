import {
  GET_DATA_NFT_ERROR,
  GET_DATA_NFT_LOAD,
  GET_DATA_NFT_SUCCESS,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../types";
import axiosInstance from "../../axios/axiosApi";

export const getDataNft = () => {
  return (dispatch) => {
    axiosInstance
      .get("account/api/NFT")
      .then((res) => {
        console.log(res);
        dispatch(getData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getData = (data) => {
  return {
    type: GET_DATA_NFT_SUCCESS,
    payload: data,
  };
};
