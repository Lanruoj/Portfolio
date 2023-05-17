import styled from "styled-components";

export const HeroText = (props) => {
  return <Text>{props.children}</Text>;
};

const Text = styled.h1`
  text-align: center;
  font-size: 15vw;
  font-family: "Spline Sans Mono", monospace;
  color: #2d2d2d;
`;
