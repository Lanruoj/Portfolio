import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  left: ${(props) =>
    props.menuVisible ? (props.windowSize > 800 ? "0rem" : "70vw") : "0rem"};
  transition: 0.5s;
  padding: 1rem;
  text-align: center;
  max-width: 60rem;
`;
