import { useState, useRef } from "react";
import { FormWrapper, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../../tasks/tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedContentBlock = newTaskContent.trim();

    if (!trimmedContentBlock) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedContentBlock,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
  };

  const inputRef = useRef(null);
  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        autoFocus
        required
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button onClick={inputFocus}>Dodaj zadanie</Button>
    </FormWrapper>
  );
};

export default Form;
