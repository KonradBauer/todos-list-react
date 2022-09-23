import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) =>
  tasks.length > 0 && (
    <div className="header__container">
      <button className="toggleDoneTasksButton">
        {!hideDoneTasks ? "Ukryj ukończone" : "Pokaż ukończone"}
      </button>
      <button
        className="setDoneButton"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;
