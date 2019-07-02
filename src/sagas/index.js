import { all, fork } from "redux-saga/effects";
import * as counterSaga from "./counter";

export default function* rootSaga() {
  yield all([...Object.values(counterSaga)].map(fork));
}
