import { useState, useRef } from "react";
import { FormWrapper, Input, Button } from "./styled";

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
