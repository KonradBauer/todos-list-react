import { List, Item, Button, Task } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleTaskDone,
  removeTask,
} from "../../../tasks/tasksSlice";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Task done={task.done}>{task.content}</Task>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;