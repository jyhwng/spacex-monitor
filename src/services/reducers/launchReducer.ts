import { handleActions } from "redux-actions";
import { LaunchInfo } from "../../types";
import { GET_LAUNCHES, FILTER_BY_MISSION_NAME } from "../actions/launchActions";

export interface LaunchState {
  launches: LaunchInfo[];
  filtered: LaunchInfo[];
  searchKeyword?: string;
}

const initialLaunchesState: LaunchState = {
  launches: [],
  filtered: [],
  searchKeyword: undefined
};

export const launchReducer = handleActions(
  {
    [GET_LAUNCHES.SUCCEEDED]: (state, action: any) => ({
      ...state,
      launches: action.payload
    }),
    [GET_LAUNCHES.FAILED]: (state, action: any) => ({
      ...state,
      launches: []
    }),
    [FILTER_BY_MISSION_NAME]: (state, action: any) => ({
      ...state,
      searchKeyword: action.payload,
      filtered: state.launches.filter((launch: LaunchInfo) =>
        launch.missionName.includes(action.payload)
      )
    })
  },
  initialLaunchesState
);
