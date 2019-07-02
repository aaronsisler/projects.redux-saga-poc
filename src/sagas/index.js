import { all, fork } from "redux-saga/effects";
import * as counterSaga from "./counter";
import * as retrieveDataSaga from "./retrieve-data";
import * as saveDataSaga from "./save-data";

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(counterSaga),
      ...Object.values(retrieveDataSaga),
      ...Object.values(saveDataSaga)
    ].map(fork)
  );
}
