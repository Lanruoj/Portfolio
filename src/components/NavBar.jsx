import styled, { keyframes } from "styled-components";
import squareLogo from "../img/ta-ne-logo.png";
import { useMenuContext } from "../utils/MenuContext";
import { useWindowSizeContext } from "../utils/WindowSizeContext";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  const { menuVisible, setMenuVisible } = useMenuContext();
  const { windowSize } = useWindowSizeContext();
  const toggleMenu = () => {
    menuVisible ? setMenuVisible(false) : setMenuVisible(true);
  };
  let urlPath = props.location.pathname;

  return (
    <NavWrapper>
      <NavContainer>
        <MenuButton onClick={toggleMenu} windowSize={windowSize}>
          &gt;
        </MenuButton>
        <Logo src={squareLogo} />
      </NavContainer>
      <MenuContainer
        menuVisible={menuVisible && menuVisible}
        windowSize={windowSize}
      >
        <li>
          <MenuLink
            to="/"
            id="home"
            onClick={toggleMenu}
            windowSize={windowSize}
          >
            {urlPath === "/" ? <s>Home</s> : "Home"}
          </MenuLink>
        </li>
        <li>
          <MenuLink
            to="/about"
            id="about"
            onClick={toggleMenu}
            windowSize={windowSize}
          >
            {urlPath === "/about" ? <s>About</s> : "About"}
          </MenuLink>
        </li>
        <li>
          <MenuLink
            to="/projects"
            id="projects"
            onClick={toggleMenu}
            windowSize={windowSize}
          >
            {urlPath === "/projects" ? <s>Projects</s> : "Projects"}
          </MenuLink>
        </li>
        <li>
          <MenuLink
            to="/contact"
            id="contact"
            onClick={toggleMenu}
            windowSize={windowSize}
          >
            {urlPath === "/contact" ? <s>Contact</s> : "Contact"}
          </MenuLink>
        </li>
        <LogoForm
          menuVisible={menuVisible && menuVisible}
          windowSize={windowSize}
        >
          <ContactLink href="tel:+61466651820" target="_blank">
            <img
              src={require("../img/phone-logo.png")}
              width="50px"
              alt="Phone"
            />
          </ContactLink>
          <ContactLink href="mailto:tanesamuelkaio@gmail.com" target="_blank">
            <img
              src={require("../img/email-logo.png")}
              width="50px"
              alt="Email"
            />
          </ContactLink>
          <ContactLink href="https://github.com/Lanruoj" target="_blank">
            <img
              src={require("../img/github-mark.png")}
              width="50px"
              alt="GitHub"
            />
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/tane-kaio/"
            target="_blank"
          >
            <img
              src={require("../img/li-logo.png")}
              height="50px"
              alt="LinkedIn"
            />
          </ContactLink>
        </LogoForm>
      </MenuContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 60rem;
  height: 4rem;
  top: 0;
  z-index: 999;
`;

const menuButtonBounce = keyframes`
0% { margin-left: 1rem }
50% { margin-left: 1.5rem }
75% { margin-left: 1rem }
100% { margin-left: 1rem }
`;

const MenuButton = styled.button`
  visibility: ${(props) => (props.windowSize > 1200 ? "hidden" : "visible")};
  background-color: rgba(255, 255, 255, 0);
  color: black;
  width: 3rem;
  border: none;
  font-size: 4rem;
  padding: 0;
  margin-left: 1rem;
  animation-name: ${menuButtonBounce};
  animation-duration: 0.8s;
  animation-iteration-count: 2;
  cursor: pointer;
  :hover {
    margin-left: 1.5rem;
  }
  transition: 0.2s ease-out;
`;

const Logo = styled.img`
  margin: 0.5rem 0.5rem 0 0;
`;

const MenuContainer = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Spline Sans Mono";
  list-style: none;
  width: ${(props) => (props.windowSize > 800 ? "-37.5rem" : "70vw")};
  height: 100vh;
  left: ${(props) =>
    props.menuVisible ? "0px" : props.windowSize > 800 ? "-37.5rem" : "-70vw"};
  transition: 0.5s;
`;

const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-style: italic;
  font-size: ${(props) => (props.windowSize < 360 ? "2rem" : "2.5rem")};
  :hover::before {
    content: ">";
  }
`;

const LogoForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  left: ${(props) =>
    props.menuVisible ? "0px" : props.windowSize > 800 ? "-37.5rem" : "-70vw"};
  width: ${(props) => (props.windowSize < 360 ? "min-content" : "18rem")};
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
