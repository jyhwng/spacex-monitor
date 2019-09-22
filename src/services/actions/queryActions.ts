import { createAction } from "redux-actions";
import { QueryState } from "../reducers/queryReducer";

export const SET_QUERY = "SET_QUERY";
export const CLEAR_QUERY = "CLEAR_QUERY";

export const setQuery = createAction(SET_QUERY, (query: QueryState) => query);
export const clearQuery = createAction(CLEAR_QUERY);
