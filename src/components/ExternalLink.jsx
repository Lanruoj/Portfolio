import styled from "styled-components";

const StyledLink = styled.a`
  display: block;
  font-family: "Spline Sans Mono", sans-serif;
  font-size: 1.5rem;
  color: black;
  text-align: center;
  font-style: italic;
  text-decoration: none;
  ::before {
    content: ">";
    display: inline-block;
    position: relative;
    left: -0.5rem;
    transition: 0.2s;
  }
  :hover::before {
    left: 0;
  }
`;

const ExternalLink = (props) => {
  return (
    <StyledLink href={props.to} target="_blank">
      {props.text}{" "}
    </StyledLink>
  );
};

export { ExternalLink };
