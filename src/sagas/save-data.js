import { call, put, takeLatest } from "redux-saga/effects";
import history from "../tools/history";
import {
  failToSaveData,
  REQUEST_SAVE_DATA,
  saveData,
  setErrorNotification,
  setSuccessNotification
} from "../actions";

let willCallFail = false;

function* saveDataWorkflow() {
  try {
    if (willCallFail) {
      yield call(failToSaveData);
    } else {
      yield call(saveData);
      yield put(setSuccessNotification("Data saved successfully"));
      willCallFail = !willCallFail;
      history.push("/saved");
    }
  } catch (error) {
    willCallFail = !willCallFail;
    yield put(setErrorNotification(error.message));
  }
}

export function* saveDataSaga() {
  yield takeLatest(REQUEST_SAVE_DATA, saveDataWorkflow);
}
