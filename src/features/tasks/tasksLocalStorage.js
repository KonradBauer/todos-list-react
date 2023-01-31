const localStorageItem = "tasks";

export const saveTasksInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageItem, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(localStorageItem)) || [];
