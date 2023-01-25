import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  margin-top: 3rem;
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 1.5rem;
  color: black;
  text-decoration: underline;
  text-align: center;
`;

const LocalLink = (props) => {
  return <StyledLink to={props.to}>&gt; {props.text} </StyledLink>;
};

export { LocalLink };
