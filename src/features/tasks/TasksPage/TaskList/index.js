import { List, Item, Button, Task, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  searchTasksByQuery,
} from "../../../tasks/tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => searchTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Task done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Task>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
