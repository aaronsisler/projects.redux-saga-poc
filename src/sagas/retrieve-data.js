import { call, put, takeLatest } from "redux-saga/effects";
import {
  failToRetrieveData,
  REQUEST_RETRIEVE_DATA,
  retrieveData,
  setErrorNotification,
  setSuccessNotification
} from "../actions";

let willCallFail = false;

function* retrieveDataWorkflow() {
  try {
    let data;
    if (willCallFail) {
      data = yield call(failToRetrieveData);
    } else {
      data = yield call(retrieveData);
      yield put(setSuccessNotification(data));
      willCallFail = !willCallFail;
    }
  } catch (error) {
    willCallFail = !willCallFail;
    yield put(setErrorNotification(error.message));
  }
}

export function* retrieveDataSaga() {
  yield takeLatest(REQUEST_RETRIEVE_DATA, retrieveDataWorkflow);
}
