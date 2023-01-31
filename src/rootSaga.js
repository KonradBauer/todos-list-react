import { watchGetExampleTasks } from "./features/tasks/tasksSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchGetExampleTasks()]);
}
