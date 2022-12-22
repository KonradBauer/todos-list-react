import { List, Item, Button, Task } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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

export default Tasks;
