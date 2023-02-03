import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";
import {
  getExampleTasks,
  setExampleTasks,
  selectTasksArray,
} from "./tasksSlice";
import { downloadExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* getExampleTasksHandler() {
  try {
    const exampleTasks = yield call(downloadExampleTasks);
    yield put(setExampleTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Ups, coś poszło nie tak!");
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
