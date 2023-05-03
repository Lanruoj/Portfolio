import styled from "styled-components";

export const LogoForm = ({ menuVisible, windowSize }) => {
  return (
    <Wrapper menuVisible={menuVisible && menuVisible} windowSize={windowSize}>
      <ContactLink href="tel:+61466651820" target="_blank">
        <ContactLinkImg
          src={require("../img/phone-logo.png")}
          alt="Phone"
          windowSize={windowSize}
        />
      </ContactLink>
      <ContactLink href="mailto:tanesamuelkaio@gmail.com" target="_blank">
        <ContactLinkImg
          src={require("../img/email-logo.png")}
          alt="Email"
          windowSize={windowSize}
        />
      </ContactLink>
      <ContactLink href="https://github.com/Lanruoj" target="_blank">
        <ContactLinkImg
          src={require("../img/github-mark.png")}
          alt="GitHub"
          windowSize={windowSize}
        />
      </ContactLink>
      <ContactLink
        href="https://www.linkedin.com/in/tane-kaio/"
        target="_blank"
      >
        <ContactLinkImg
          src={require("../img/li-logo.png")}
          alt="LinkedIn"
          windowSize={windowSize}
        />
      </ContactLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  top: 20rem;
  transition: 0.5s;
`;

const ContactLink = styled.a`
  margin: 0 0.5rem 0 0.5rem;
  display: block;
  text-decoration: none;
  text-align: center;
  display: block;
  color: #343434;
  font-family: "Spline Sans Mono", monospace;
`;

const ContactLinkImg = styled.img`
  height: ${({ windowSize }) => (windowSize < 800 ? "50px" : "30px")};
`;
