import { combineReducers } from "redux";
import auth from "./auth/authReducer";
import message from "./message/messageReducer";
import nft from "./getNft/getNftReducer";

const rootReducer = combineReducers({
  auth,
  message,
  nft,
});

export default rootReducer;
