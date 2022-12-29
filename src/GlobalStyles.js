import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

body {
  background-color: #eee;
  font-family: "Montserrat", sans-serif;
  word-break: break;
}

@media (max-width: 768px) {
  .form__container {
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .form__button {
    width: 100%;
    display: flex;
  }
}

@media (max-width: 768px) {
  .form__input {
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .setDoneButton {
    margin: 25px;
  }
}

`;
