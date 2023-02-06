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
  const handleTaskError = "Nie znaleziono takiego zadania 😥";

  if (!task) {
    return (
      <Container>
        <Header title="Szczegóły zadania" />
        <Section title={handleTaskError} />
      </Container>
    );
  }

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section title={task ? task.content : handleTaskError} />
      <Wrapper>
        <strong>Ukończono: </strong>
        {task.done ? "Tak" : "Nie"}
      </Wrapper>
    </Container>
  );
}

export default TaskPage;
