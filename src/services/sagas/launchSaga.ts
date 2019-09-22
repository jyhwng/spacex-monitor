import { takeLeading, call, put, fork } from "redux-saga/effects";
import { GET_LAUNCHES } from "../actions";
import { fetchLaunches } from "../apis";

function* getLaunchesAsyncSaga() {
  try {
    const data = yield fetchLaunches();
    yield put({ type: GET_LAUNCHES.SUCCEEDED, payload: data });
  } catch (e) {
    yield put({ type: GET_LAUNCHES.FAILED });
  }
}

function* launchGenerator() {
  yield call(getLaunchesAsyncSaga);
}

function* launchWatcher() {
  yield takeLeading(GET_LAUNCHES.REQUESTED, launchGenerator);
}

export default function* launchSaga() {
  yield fork(launchWatcher);
}
