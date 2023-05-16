import styled from "styled-components";
import { HeroText } from "../components/styled/HeroText";

export const Hero = () => {
  return (
    <Wrapper>
      <HeroText>
        Tāne
        <br />
        &nbsp;&nbsp;Kaio
      </HeroText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: left;
  width: 100vw;
`;
