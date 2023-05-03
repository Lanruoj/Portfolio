import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  padding: 1rem;
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 1.2rem;
  color: black;
  text-align: center;
  text-decoration: none;
  border: solid black 1px;
  line-height: 0.5;
  ::before {
    content: ">\u00A0";
    display: inline-block;
    position: relative;
    left: 0;
    transition: 0.2s;
  }
  :hover::before {
    left: 0.5rem;
  }
`;

export { StyledLink };
