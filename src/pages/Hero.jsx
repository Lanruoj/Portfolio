import styled from "styled-components";
import { LocalLink } from "../components/LocalLink";
import { Header } from "../components/Header";
import heroBg from "../img/mt-feathertop.JPG";

export const Hero = () => {
  return (
    <Wrapper>
      <Tane>Tāne</Tane>
      <Kaio>Kaio</Kaio>
      <Undertitle>Software Engineer / Creator / Visionary</Undertitle>
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

const Tane = styled.h1`
  padding-top: 5vh;
  padding-right: 10vw;
  font-size: 15vh;
  font-family: "Spline Sans Mono", monospace;
  color: #404040;
`;

const Kaio = styled.h1`
  padding-bottom: 5vh;
  padding-left: 10vw;
  font-size: 15vh;
  font-family: "Spline Sans Mono", monospace;
  color: #404040;
`;

const Undertitle = styled(Header)`
  color: #787878;
  padding: 1rem;
`;
