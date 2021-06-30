import {
  GET_DATA_NFT_ERROR,
  GET_DATA_NFT_LOAD,
  GET_DATA_NFT_SUCCESS,
} from "../types";

const initialState = {
  isLoading: false,
  data: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_NFT_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_NFT_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
      };
    case GET_DATA_NFT_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
