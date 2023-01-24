import { List, Item, Button, Task } from "./styled";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => toggleTaskDone(task.id)}>
            {task.done ? "✔" : ""}
          </Button>
          <Task done={task.done}>{task.content}</Task>
          <Button onClick={() => removeTask(task.id)}>🗑</Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
