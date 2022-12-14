import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask, tasks }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedContentBlock = newTaskContent.trim();

    if (!trimmedContentBlock) {
      return;
    }

    addNewTask(trimmedContentBlock);
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form__container">
        <input
          value={newTaskContent}
          className="form__input"
          autoFocus
          required
          placeholder="Co jest do zrobienia?"
          onChange={({ target }) => setNewTaskContent(target.value)}
        />
        <button
          onClick={localStorage.setItem("tasks", JSON.stringify(tasks))}
          className="form__button"
        >
          Dodaj zadanie
        </button>
      </div>
    </form>
  );
};

export default Form;
