import styled from "styled-components";
import { useMenuContext } from "../utils/MenuContext";

export const Main = styled.main`
  position: relative;
  background-color: ${(props) => (props.menuVisible ? "red" : "blue")};
  left: ${(props) => (props.menuVisible ? "50vw" : "0px")};
  transition: 1s;
  overflow: hidden;
  /* inline-size: 100vw; */
`;
