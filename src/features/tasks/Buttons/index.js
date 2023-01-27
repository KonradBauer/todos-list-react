import { Header, SetDynamicButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone, setTasksDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();
  return (
    tasks.length > 0 && (
      <Header>
        <SetDynamicButton onClick={() => dispatch(toggleHideDone())}>
          {!hideDone ? "Ukryj ukończone" : "Pokaż ukończone"}
        </SetDynamicButton>
        <SetDynamicButton
          onClick={() => dispatch(setTasksDone())}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </SetDynamicButton>
      </Header>
    )
  );
};

export default Buttons;
