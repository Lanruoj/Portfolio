import styled from "styled-components";
import { useWindowSizeContext } from "../utils/WindowSizeContext";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.windowSize > 800 ? "row" : "column")};
  justify-content: center;
  /* height: ${(props) => (props.windowSize > 800 ? "50vh" : "100%")}; */
  max-width: 100vw;
  flex-wrap: wrap;
  align-items: center;
`;

export const Wrapper = ({ children }) => {
  const { windowSize } = useWindowSizeContext();
  return <StyledWrapper windowSize={windowSize}>{children}</StyledWrapper>;
};
