import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import { Container } from "../../../common/Container/styled";
import { useDispatch, useSelector } from "react-redux";
import { getExampleTasks, selectLoadingStatus } from "../tasksSlice";
import { SetDynamicButton } from "./Buttons/styled";

function TasksPage() {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectLoadingStatus);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <SetDynamicButton
            disabled={loadingStatus}
            onClick={() => dispatch(getExampleTasks())}
          >
            {loadingStatus ? "Ładowanie..." : "Pobierz przykładowe zadania"}
          </SetDynamicButton>
        }
      />

      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
