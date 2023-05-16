import styled from "styled-components";
import { HeroText } from "../components/styled/HeroText";
import { LocalLink } from "../components/LocalLink";
import heroBg from "../img/mt-feathertop.JPG";

export const Hero = () => {
  return (
    <Wrapper>
      <HeroText>
        Tāne
        <br />
        &nbsp;&nbsp;&nbsp;Kaio
      </HeroText>
      <LocalLink to="/about" text="About me" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${heroBg});
  background-size: auto;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 4rem;
  left: 0;
`;
