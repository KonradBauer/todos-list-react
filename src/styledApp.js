import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #eee;

  &.${activeClassName} {
    font-weight: bold;
    color: #eee;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  grid-gap: 40px;
  margin: 0;
  padding: 20px;
  background-color: teal;
  list-style-type: none;
`;
