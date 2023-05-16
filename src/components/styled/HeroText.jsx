import styled from "styled-components";

export const HeroText = (props) => {
  return <Text>{props.children}</Text>;
};

const Text = styled.h1`
  color: red;
  font-size: 22vw;
  font-family: "Spline Sans Mono", monospace;
`;
