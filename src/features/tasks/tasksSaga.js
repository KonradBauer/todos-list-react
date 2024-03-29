import {
  takeLatest,
  call,
  put,
  takeEvery,
  select,
  delay,
} from "redux-saga/effects";
import {
  getExampleTasks,
  setExampleTasksAndLoading,
  selectTasksArray,
  setExampleTasksError,
} from "./tasksSlice";
import { downloadExampleTasks } from "./downloadExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* getExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(downloadExampleTasks);
    yield put(setExampleTasksAndLoading(exampleTasks));
  } catch (error) {
    yield put(setExampleTasksError());
    yield call(alert, "Ups, coś poszło nie tak! Spróbuj jeszcze raz!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasksArray);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(getExampleTasks.type, getExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
