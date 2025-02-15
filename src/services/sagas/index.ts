import launchSaga from "./launchSaga";
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield fork(launchSaga);
}
