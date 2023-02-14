import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import { Container } from "../../../common/Container/styled";
import { useDispatch, useSelector } from "react-redux";
import { getExampleTasks, selectLoadingStatus } from "../tasksSlice";
import { DynamicButton } from "./Buttons/styled";
import { RotatingLines } from "react-loader-spinner";

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
          <DynamicButton
            disabled={loadingStatus}
            onClick={() => dispatch(getExampleTasks())}
          >
            {loadingStatus ? (
              <RotatingLines
                strokeColor="teal"
                strokeWidth="5"
                animationDuration="0.75"
                width="15"
                visible={true}
              />
            ) : (
              "Pobierz przykładowe zadania"
            )}
          </DynamicButton>
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
