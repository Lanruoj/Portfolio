import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1rem;
  margin-top: 1rem;
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 1.5rem;
  color: black;
  text-align: center;
  font-style: italic;
  text-decoration: underline;
  ::before {
    content: ">\u00A0";
    text-decoration: underline;
    display: inline-block;
    position: relative;
    left: 0;
    transition: 0.2s;
  }
  :hover::before {
    left: 0.5rem;
  }
`;

const LocalLink = (props) => {
  return <StyledLink to={props.to}>{props.text} </StyledLink>;
};

export { LocalLink };
