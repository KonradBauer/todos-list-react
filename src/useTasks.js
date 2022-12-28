import { useState, useEffect } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length !== 0)
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("tasks"));
    if (storageData) {
      setTasks(storageData);
    }
  }, []);

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
    localStorage.removeItem("tasks");
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    setTasks,
  };
};

export default useTasks;
