import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  left: ${(props) => (props.menuVisible ? "50vw" : "0px")};
  transition: 0.5s;
  padding: 1rem;
`;
