import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: black;
  text-decoration: none;
  text-align: center;
`;

const LocalLink = (props) => {
  return <StyledLink to={props.to}>&gt; {props.text} </StyledLink>;
};

export { LocalLink };
