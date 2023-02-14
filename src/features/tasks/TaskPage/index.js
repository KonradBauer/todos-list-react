import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Wrapper } from "../TasksPage/Search/styled";
import { Container } from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  if (!task) {
    return (
      <Container>
        <Header title="Szczegóły zadania" />
        <Section title="Nie znaleziono takiego zadania 😥" />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section title={task ? task.content : ""} />
      <Wrapper>
        <strong>Ukończono: </strong>
        {task.done ? "Tak" : "Nie"}
      </Wrapper>
    </Container>
  );
}

export default TaskPage;
