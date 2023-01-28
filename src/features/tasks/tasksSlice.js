import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
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
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setTasksDone,
  removeTask,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasksLength = (state) =>
  selectTasksState(state).tasks.length !== 0;
export const getTasksArray = (state) => selectTasksState(state).tasks;
export const checkTasksDone = (state) =>
  getTasksArray(state).every(({ done }) => done);
export default tasksSlice.reducer;
