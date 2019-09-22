import { combineReducers } from "redux";
import { launchReducer } from "./launchReducer";

export default combineReducers({
  launch: launchReducer
});
