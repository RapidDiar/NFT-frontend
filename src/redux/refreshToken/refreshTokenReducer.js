import { REFRESH_TOKEN } from "../actions/types";

const initialState = {
  token: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REFRESH_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
}
