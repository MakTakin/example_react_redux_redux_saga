import { call, put, takeEvery } from "redux-saga/effects";
import { getFakeData, updateFakeData } from "api";
import { FakeData } from "interfaces";
import {
  getInitialFakeStateFailed,
  getInitialFakeStateSuccessful,
  toggleButtonStateFailed,
  toggleButtonStateSuccessful,
} from "../buttonSlice";

function* getInitialFakeState() {
  try {
    const res: FakeData = yield call(getFakeData);
    yield put(getInitialFakeStateSuccessful(res));
  } catch (e) {
    yield put(getInitialFakeStateFailed());
  }
}

function* toggleButtonState(action: { payload: boolean; type: string }) {
  const { payload } = action;
  try {
    const res: FakeData = yield call(updateFakeData, !payload);
    yield put(toggleButtonStateSuccessful(res));
  } catch (e) {
    yield put(toggleButtonStateFailed());
  }
}
function* buttonSaga() {
  yield takeEvery("button/getInitialFakeState", getInitialFakeState);
  yield takeEvery("button/toggleButtonState", toggleButtonState);
}

export default buttonSaga;
