import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  left: ${(props) =>
    props.menuVisible ? (props.windowSize > 800 ? "600px" : "70vw") : "0px"};
  transition: 0.5s;
  padding: 1rem;
  text-align: center;
`;
