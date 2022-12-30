import { Header, SetDynamicButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <Header>
      <SetDynamicButton onClick={toggleHideDone}>
        {!hideDone ? "Ukryj ukończone" : "Pokaż ukończone"}
      </SetDynamicButton>
      <SetDynamicButton
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </SetDynamicButton>
    </Header>
  );

export default Buttons;
