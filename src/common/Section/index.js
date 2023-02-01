import { Header } from "./styled";
import { useDispatch } from "react-redux";
import { getExampleTasks } from "../../features/tasks/tasksSlice";
import { SetDynamicButton } from "../../features/tasks/Buttons/styled";

const Section = ({ title, body, extraHeaderContent }) => {
  const dispatch = useDispatch();
  return (
    <section>
      <Header>
        {title}
        <SetDynamicButton onClick={() => dispatch(getExampleTasks())}>
          Pobierz przykładowe zadania
        </SetDynamicButton>
        {extraHeaderContent}
      </Header>
      {body}
    </section>
  );
};

export default Section;
