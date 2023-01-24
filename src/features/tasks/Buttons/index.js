import { Header, SetDynamicButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    tasks.length > 0 && (
      <Header>
        <SetDynamicButton onClick={() => dispatch(toggleHideDone())}>
          {!hideDone ? "Ukryj ukończone" : "Pokaż ukończone"}
        </SetDynamicButton>
        <SetDynamicButton
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </SetDynamicButton>
      </Header>
    )
  );
};

export default Buttons;
