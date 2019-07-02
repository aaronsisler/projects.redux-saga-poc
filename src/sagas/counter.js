import { put, takeLatest } from "redux-saga/effects";
import {
  decrementCounter,
  incrementCounter,
  REQUEST_DECREMENT,
  REQUEST_INCREMENT
} from "../actions";

function* decrement() {
  yield put(decrementCounter);
}

function* increment() {
  yield put(incrementCounter);
}

export function* decrementSaga() {
  yield takeLatest(REQUEST_DECREMENT, decrement);
}

export function* incrementSaga() {
  yield takeLatest(REQUEST_INCREMENT, increment);
}
