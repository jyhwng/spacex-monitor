import { LaunchState } from "../reducers/launchReducer";
import { QueryState } from "../reducers/queryReducer";

export interface RootState {
  launch: LaunchState;
  query: QueryState;
}
