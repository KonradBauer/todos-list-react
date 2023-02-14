import { Header, DynamicButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setTasksDone,
  selectTasksDone,
  selectTasksLength,
  selectHideDone,
} from "../../../tasks/tasksSlice";

const Buttons = () => {
  const setDoneButton = useSelector(selectHideDone);
  const buttonDisabled = useSelector(selectTasksDone);
  const isArrayEmpty = useSelector(selectTasksLength);
  const dispatch = useDispatch();

  return (
    <Header>
      {isArrayEmpty && (
        <>
          <DynamicButton onClick={() => dispatch(toggleHideDone())}>
            {!setDoneButton ? "Ukryj ukończone" : "Pokaż ukończone"}
          </DynamicButton>
          <DynamicButton
            onClick={() => dispatch(setTasksDone())}
            disabled={buttonDisabled}
          >
            Ukończ wszystkie
          </DynamicButton>
        </>
      )}
    </Header>
  );
};

export default Buttons;
