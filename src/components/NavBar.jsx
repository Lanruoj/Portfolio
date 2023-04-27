import styled, { keyframes } from "styled-components";
import squareLogo from "../img/ta-ne-logo.png";
import { useMenuContext } from "../utils/MenuContext";
import { useWindowSizeContext } from "../utils/WindowSizeContext";
import { Link } from "react-router-dom";
import { LogoForm } from "./LogoForm";

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
        {windowSize < 800 && (
          <MenuButtonContainer>
            <MenuButton
              onClick={windowSize < 800 ? toggleMenu : null}
              windowSize={windowSize}
            >
              &gt;
            </MenuButton>
          </MenuButtonContainer>
        )}
        <MenuContainer
          menuVisible={menuVisible && menuVisible}
          windowSize={windowSize}
        >
          <li>
            <MenuLink
              to="/"
              id="home"
              onClick={windowSize < 800 ? toggleMenu : null}
              windowSize={windowSize}
            >
              {urlPath === "/" ? <s>Home</s> : "Home"}
            </MenuLink>
          </li>
          <li>
            <MenuLink
              to="/about"
              id="about"
              onClick={windowSize < 800 ? toggleMenu : null}
              windowSize={windowSize}
            >
              {urlPath === "/about" ? <s>About</s> : "About"}
            </MenuLink>
          </li>
          <li>
            <MenuLink
              to="/projects"
              id="projects"
              onClick={windowSize < 800 ? toggleMenu : null}
              windowSize={windowSize}
            >
              {urlPath === "/projects" ? <s>Projects</s> : "Projects"}
            </MenuLink>
          </li>
          <li>
            <MenuLink
              to="/contact"
              id="contact"
              onClick={windowSize < 800 ? toggleMenu : null}
              windowSize={windowSize}
            >
              {urlPath === "/contact" ? <s>Contact</s> : "Contact"}
            </MenuLink>
          </li>
        </MenuContainer>
        <Logo src={squareLogo} onClick={windowSize < 800 ? toggleMenu : null} />
      </NavContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: ${(props) => (props.windowSize > 800 ? "60rem" : "60rem")};
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

const MenuButtonContainer = styled.div`
  width: 5rem;
`;

const MenuButton = styled.button`
  z-index: 9999;
  visibility: ${(props) => (props.windowSize > 800 ? "hidden" : "visible")};
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
  height: 3rem;
  cursor: pointer;
`;

const MenuContainer = styled.ul`
  position: ${(props) => (props.windowSize > 800 ? "relative" : "absolute")};
  display: flex;
  flex-direction: ${(props) => (props.windowSize > 800 ? "row" : "column")};
  font-family: "Spline Sans Mono";
  list-style: none;
  width: ${(props) => (props.windowSize > 800 ? "-37.5rem" : "70vw")};
  top: ${(props) => (props.windowSize > 800 ? "1.5rem" : "4rem")};
  height: ${(props) => (props.windowSize > 800 ? "4rem" : "100vw")};
  left: ${(props) =>
    props.menuVisible || props.windowSize > 800
      ? "0px"
      : props.windowSize > 800
      ? "-37.5rem"
      : "-70vw"};
  transition: 0.5s;
`;

const MenuLink = styled(Link)`
  margin: 1rem;
  color: black;
  text-decoration: underline;
  font-size: ${(props) => (props.windowSize < 800 ? "2rem" : "1.5rem")};
`;
