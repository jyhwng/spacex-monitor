import { handleActions } from "redux-actions";
import { LaunchInfo } from "../../types";
import { GET_LAUNCHES, FILTER_BY_MISSION_NAME } from "../actions/launchActions";

export interface LaunchState {
  launches: LaunchInfo[];
}

const initialLaunchesState: LaunchState = {
  launches: []
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
      launches: state.launches.filter((launch: LaunchInfo) =>
        launch.missionName.includes(action.payload)
      )
    })
  },
  initialLaunchesState
);
