import { handleActions } from "redux-actions";
import { SET_QUERY, CLEAR_QUERY } from "../actions/queryActions";

export interface QueryState {
  rocketId?: string;
  sort?: string;
  order?: string;
  launchSuccess?: boolean;
}

const initialQueryState: QueryState = {
  sort: "launch_date_utc",
  order: "desc"
};

export const queryReducer = handleActions<any>(
  {
    [SET_QUERY]: (state, action: any) => ({
      ...state,
      ...action.payload
    }),
    [CLEAR_QUERY]: (state, action: any) => initialQueryState
  },
  initialQueryState
);
