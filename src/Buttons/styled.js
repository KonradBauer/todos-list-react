import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-grow: 1;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 40px;
  }
`;

export const SetDynamicButton = styled.button`
  color: teal;
  border: none;
  background-color: transparent;
  transition: 0.35s;

  &:hover {
    color: hsl(180, 100%, 35%);
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  &:active {
    color: hsl(180, 100%, 45%);
    border: none;
    background-color: transparent;
  }

  &:disabled {
    border: none;
    background-color: transparent;
    color: hsl(0, 0%, 80%);
    cursor: not-allowed;
  }
`;
