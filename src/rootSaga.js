import { tasksSaga } from "./features/tasks/tasksSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
