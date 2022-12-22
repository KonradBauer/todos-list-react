import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1000px;
  background-color: white;
  margin: 0 auto;
  justify-content: space-between;
  grid-gap: 15px;
`;

export const Input = styled.input`
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  width: 80%;
`;

export const Button = styled.button`
  display: grid;
  grid-gap: 10px;
  border: none;
  background-color: teal;
  color: white;
  padding: 10px;
  transition: 0.35s;

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
