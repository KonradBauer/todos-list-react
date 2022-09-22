import "./style.css";

const Form = () => (
    <form className="form">
                <div className="form__container">
                    <input className="form__input" autofocus required placeholder="Co jest do zrobienia?"/>
                    <button className="form__button">Dodaj zadanie</button>
                </div>
            </form>
);

export default Form;