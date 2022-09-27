import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks section__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`task${task.done && hideDone ? " task--hidden" : ""}`}
      >
        <button onClick={() => toggleTaskDone(task.id)} className="button ">
          {task.done ? "✔" : ""}
        </button>
        <span className={`task__item${task.done ? " task--done" : ""}`}>
          {task.content}
        </span>
        <button onClick={() => removeTask(task.id)} className="button--remove">
          🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
