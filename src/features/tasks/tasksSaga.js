import { takeEvery, call, put } from "redux-saga/effects";
import { getExampleTasks, setExampleTasks } from "./tasksSlice";
import fetchExampleTasks from "./getExampleTasks";

function* getExampleTasksHandler() {
  try {
    const exampleTasks = yield call(fetchExampleTasks);
    yield put(setExampleTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Ups, coś poszło nie tak!");
  }
}

export function* watchGetExampleTasks() {
  yield takeEvery(getExampleTasks.type, getExampleTasksHandler);
}
