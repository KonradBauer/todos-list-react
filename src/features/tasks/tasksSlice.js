import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loadingStatus: false,
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
    getExampleTasks: (state) => {
      state.loadingStatus = true;
    },
    setExampleTasksAndLoading: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loadingStatus = false;
    },
    setExampleTasksError: (state) => {
      state.loadingStatus = false;
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
  setExampleTasksAndLoading,
  setExampleTasksError,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectHideDone = (state) => selectTasksState(state).hideDone;

export const selectTasksArray = (state) => selectTasksState(state).tasks;

export const selectLoadingStatus = (state) =>
  selectTasksState(state).loadingStatus;

export const selectTasksLength = (state) =>
  selectTasksState(state).tasks.length !== 0;

export const selectTasksDone = (state) =>
  selectTasksArray(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
  selectTasksArray(state).find(({ id }) => id === taskId);

export const searchTasksByQuery = (state, query) => {
  const tasks = selectTasksArray(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.toUpperCase().trim())
  );
};

export default tasksSlice.reducer;
