import styled from "styled-components";
import { useWindowSizeContext } from "../utils/WindowSizeContext";

export const Wrapper = ({ children }) => {
  const { windowSize } = useWindowSizeContext();
  return <StyledWrapper windowSize={windowSize}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.windowSize > 800 ? "row" : "column")};
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
