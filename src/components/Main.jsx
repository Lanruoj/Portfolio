import styled from "styled-components";
import { useMenuContext } from "../utils/MenuContext";

export const Main = styled.main`
  position: absolute;
  background-color: ${(props) => (props.menuVisible ? "red" : "blue")};
  left: ${(props) => (props.menuVisible ? "50%" : "0px")};
`;
