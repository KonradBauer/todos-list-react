import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    setTasksDone: ({ tasks }) => {
      tasks.forEach((task) => {
        task.done = true;
      });
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    getExampleTasks: () => {},
    setExampleTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setTasksDone,
  removeTask,
  getExampleTasks,
  setExampleTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectTasksArray = (state) => selectTasksState(state).tasks;
export const selectTasksLength = (state) =>
  selectTasksState(state).tasks.length !== 0;
export const selectTasksDone = (state) =>
  selectTasksArray(state).every(({ done }) => done);
export default tasksSlice.reducer;
