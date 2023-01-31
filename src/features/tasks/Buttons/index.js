import { Header, SetDynamicButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setTasksDone,
  selectTasksDone,
  selectTasksLength,
  selectHideDone,
  getExampleTasks,
} from "../tasksSlice";

const Buttons = () => {
  const setDoneButton = useSelector(selectHideDone);
  const buttonDisabled = useSelector(selectTasksDone);
  const isArrayEmpty = useSelector(selectTasksLength);
  const dispatch = useDispatch();

  return (
    <Header>
      {isArrayEmpty && (
        <>
          <SetDynamicButton onClick={() => dispatch(toggleHideDone())}>
            {!setDoneButton ? "Ukryj ukończone" : "Pokaż ukończone"}
          </SetDynamicButton>
          <SetDynamicButton
            onClick={() => dispatch(setTasksDone())}
            disabled={buttonDisabled}
          >
            Ukończ wszystkie
          </SetDynamicButton>
        </>
      )}
      <SetDynamicButton onClick={() => dispatch(getExampleTasks())}>
        Pobierz przykładowe zadania
      </SetDynamicButton>
    </Header>
  );
};

export default Buttons;
