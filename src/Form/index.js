import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
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

  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form__container">
        <input
          ref={inputRef}
          value={newTaskContent}
          className="form__input"
          autoFocus
          required
          placeholder="Co jest do zrobienia?"
          onChange={({ target }) => setNewTaskContent(target.value)}
        />
        <button onClick={inputFocus} className="form__button">
          Dodaj zadanie
        </button>
      </div>
    </form>
  );
};

export default Form;
