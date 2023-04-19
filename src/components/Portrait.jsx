import styled from "styled-components";
import { useWindowSizeContext } from "../utils/WindowSizeContext";
import portrait from "../img/portrait-cropped.jpeg";

const StyledImg = styled.img`
  max-width: ${(props) => (props.windowSize > 500 ? "300px" : "90%")};
  border-radius: 1rem;
`;

const Portrait = () => {
  const { windowSize } = useWindowSizeContext();
  return <StyledImg windowSize={windowSize} src={portrait} />;
};

export { Portrait };
