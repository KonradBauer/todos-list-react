import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: teal;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0%;
  max-width: 1000px;
  background-color: white;
  margin: 0 auto;
  margin-top: 2px;
  margin-bottom: 2px;
  padding: 30px;
  font-weight: 400;
  font-size: large;
`;

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  grid-gap: 15px;
  margin-bottom: 10px;
  border-bottom: 2px solid #eee;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  color: #fff;
  background-color: green;
  cursor: pointer;
  transition: 0.35s;
  flex-shrink: 0;

  &:hover {
    background-color: hsl(120, 100%, 35%);
  }

  &:active {
    background-color: hsl(120, 100%, 45%);
  }

  ${({ remove }) =>
    remove &&
    css`
      width: 35px;
      height: 35px;
      border: none;
      color: #fff;
      background-color: hsl(0, 100%, 55%);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.35s;

      &:hover {
        background-color: hsl(0, 100%, 65%);
      }

      &:active {
        background-color: hsl(0, 100%, 75%);
      }
    `}
`;

export const Task = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  grid-gap: 15px;
  margin-bottom: 10px;
  padding: 8px;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
