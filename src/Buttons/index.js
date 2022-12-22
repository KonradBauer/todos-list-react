import { Header, SetDoneButton, ToggleDoneTasksButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <Header>
      <ToggleDoneTasksButton onClick={toggleHideDone}>
        {!hideDone ? "Ukryj ukończone" : "Pokaż ukończone"}
      </ToggleDoneTasksButton>
      <SetDoneButton
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </SetDoneButton>
    </Header>
  );

export default Buttons;
