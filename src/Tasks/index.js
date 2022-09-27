import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="tasks section__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`task${task.done && hideDone ? " task--hidden" : ""}`}
      >
        <button className="button ">{task.done ? "✔" : ""}</button>
        <span className={`task__item${task.done ? " task--done" : ""}`}>
          {task.content}
        </span>
        <button className="button--remove">🗑️</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
