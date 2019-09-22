import { combineReducers } from "redux";
import { launchReducer } from "./launchReducer";
import { queryReducer } from "./queryReducer";

export default combineReducers({
  launch: launchReducer,
  query: queryReducer
});
