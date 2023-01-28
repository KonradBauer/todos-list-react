import { Header, SetDynamicButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleHideDone,
  setTasksDone,
  checkTasksDone,
} from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const buttonDisabled = useSelector(checkTasksDone);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <Header>
        <SetDynamicButton onClick={() => dispatch(toggleHideDone())}>
          {!hideDone ? "Ukryj ukończone" : "Pokaż ukończone"}
        </SetDynamicButton>
        <SetDynamicButton
          onClick={() => dispatch(setTasksDone())}
          disabled={buttonDisabled}
        >
          Ukończ wszystkie
        </SetDynamicButton>
      </Header>
    )
  );
};

export default Buttons;
