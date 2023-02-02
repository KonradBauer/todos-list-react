import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useDispatch } from "react-redux";
import { getExampleTasks } from "../tasksSlice";
import { SetDynamicButton } from "./Buttons/styled";

function TasksPage() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <SetDynamicButton onClick={() => dispatch(getExampleTasks())}>
            Pobierz przykładowe zadania
          </SetDynamicButton>
        }
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
