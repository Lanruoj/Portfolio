import styled from "styled-components";

const StyledLink = styled.a`
  display: block;
  margin-top: 1rem;
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 1.5rem;
  color: black;
  text-decoration: underline;
  text-align: center;
`;

const ExternalLink = (props) => {
  return <StyledLink href={props.to}>&gt; {props.text} </StyledLink>;
};

export { ExternalLink };
