import { takeLeading, call, put, fork, select } from "redux-saga/effects";
import { GET_LAUNCHES } from "../actions/launchActions";
import { fetchLaunches } from "../apis";
import { RootState } from "../types";
import { stringifyQueryObj } from "../utils";

function* getLaunchesAsyncSaga(query?: string) {
  try {
    const data = yield fetchLaunches(query);
    yield put({ type: GET_LAUNCHES.SUCCEEDED, payload: data });
  } catch (e) {
    yield put({ type: GET_LAUNCHES.FAILED });
  }
}

function* launchGenerator() {
  const query = yield select((state: RootState) => state.query);
  const stringifiedQuery = yield stringifyQueryObj(query);
  yield call(getLaunchesAsyncSaga, stringifiedQuery);
}

function* launchWatcher() {
  yield takeLeading(GET_LAUNCHES.REQUESTED, launchGenerator);
}

export default function* launchSaga() {
  yield fork(launchWatcher);
}
