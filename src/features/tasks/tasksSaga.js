import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";
import {
  getExampleTasks,
  setExampleTasks,
  selectTasksState,
} from "./tasksSlice";
import { fetchExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* getExampleTasksHandler() {
  try {
    const exampleTasks = yield call(fetchExampleTasks);
    yield put(setExampleTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Ups, coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasksState);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(getExampleTasks.type, getExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
