import { PayloadAction } from "@reduxjs/toolkit";
import { fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import {
  decreaseNumber,
  incrementNumber,
  loginAction,
  userSlice,
} from "../reducers/userSlice";

function* userLogger({ token, authCode, payload }) {
  console.log(`<--------------------->`);
  console.log(`authCode:${authCode}`);
  console.log(`token:${token}`);
  console.log(`payload: ${payload}`);
  yield put(incrementNumber(payload));
}

function* handleLogin(payload) {
  console.log(`Login in with token: ${payload}`);
}
function* handleLogout() {
  console.log("Logout");
}
function* loginFlow() {
  while (true) {
    const action: PayloadAction<string> = yield take(
      userSlice.actions.loginAction
    );
    yield fork(handleLogin, action.payload);
    yield take(userSlice.actions.logOutAction);
    yield fork(handleLogout);
  }
}

export default function* userSaga() {
  yield takeEvery<string | any>("INCREASE_NUMBER", userLogger);
  yield takeEvery<string | any>("DECREASE_NUMBER", userLogger);
  yield takeEvery<string | any>("LOGIN_ACTION", handleLogin);
  yield fork(loginFlow);
}
// EVERY DISPATCH WITH PAYLOAD WILL RUN ALL OVER THE ACTION, GENERATOR SO YOU CAN CALLOU an action.payload or {payload} AT THE PARAMETER
