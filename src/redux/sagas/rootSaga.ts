import { all, fork } from "redux-saga/effects";
import * as userSaga from "./userSaga";

export default function* rootSaga() {
  yield console.log("Root Saga run");
  yield all(Object.values(userSaga).map(fork));
}
