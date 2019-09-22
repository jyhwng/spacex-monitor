import { createAction } from "redux-actions";

const GET_LAUNCHES_PREFIX = "GET_LAUNCHES";

export const GET_LAUNCHES = {
  REQUESTED: `${GET_LAUNCHES_PREFIX}_REQUESTED`,
  SUCCEEDED: `${GET_LAUNCHES_PREFIX}_SUCCEEDED`,
  FAILED: `${GET_LAUNCHES_PREFIX}_FAILED`
};

export const getLaunches = createAction(GET_LAUNCHES.REQUESTED);
