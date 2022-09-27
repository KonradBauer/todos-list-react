import "./style.css";

const Buttons = ({ tasks, hideDone }) =>
  tasks.length > 0 && (
    <div className="header__container">
      <button className="toggleDoneTasksButton">
        {!hideDone ? "Ukryj ukończone" : "Pokaż ukończone"}
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
