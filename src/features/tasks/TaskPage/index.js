import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  const handleTaskError = "Nie znaleziono takiego zadania 😥";

  if (!task) {
    return handleTaskError;
  }

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : handleTaskError}
        body={
          <>
            <strong>Ukończono: </strong>
            {task.done ? "Tak" : "Nie"}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
