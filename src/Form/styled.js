import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  max-width: 1000px;
  background-color: white;
  margin: 0 auto;
  justify-content: space-between;
  grid-gap: 15px;
  padding: 20px;

  @media (max-width: 990px) {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }
`;

export const Input = styled.input`
  display: flex;
  flex-grow: 1;
  width: 80%;
  padding: 10px;
`;

export const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  padding: 10px;
  transition: 0.35s;

  @media (max-width: 990px) {
    flex-wrap: wrap;
    flex-grow: 1;
    justify-content: center;
  }

  &:hover {
    transform: scale(1.125);
    border: none;
    background-color: hsl(180, 100%, 35%);
    color: white;
    padding: 10px;
    cursor: pointer;
  }

  &:active {
    border: none;
    background-color: hsl(180, 100%, 45%);
    color: white;
    padding: 10px;
  }
`;
