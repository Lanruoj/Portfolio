import styled from "styled-components";

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  flex-wrap: wrap;
  align-items: center;
`;

export const Wrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
