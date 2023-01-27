import styled, { keyframes } from "styled-components";
import squareLogo from "../img/ta-ne-logo.png";
import { useMenuContext } from "../utils/MenuContext";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4rem;
  top: 0;
  z-index: 999;
`;

const Logo = styled.img`
  position: fixed;
  width: 4.5rem;
  right: 0;
  padding: 0.5rem;
`;

const MenuContainer = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Spline Sans Mono";
  list-style: none;
  width: 70vw;
  height: 100vh;
  left: ${(props) => (props.menuVisible ? "0px" : "-70vw")};
  transition: 0.5s;
`;

const menuButtonBounce = keyframes`
0% { left: 0.5rem}
50% {left: 1.5rem}
75% { left: 0.5rem}
100% {left: 0.5rem}
`;

const MenuButton = styled.button`
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  color: black;
  width: 3rem;
  border: none;
  font-size: 4rem;
  align-self: center;
  left: 0.5rem;
  padding: 0;
  margin: 0;
  animation-name: ${menuButtonBounce};
  animation-duration: 1s;
  animation-iteration-count: 2;
  :hover {
    left: 1.5rem;
  }
  transition: 0.2s ease-out;
`;

const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 3rem;
`;

export const NavBar = (props) => {
  const { menuVisible, setMenuVisible } = useMenuContext();
  const toggleMenu = () => {
    menuVisible ? setMenuVisible(false) : setMenuVisible(true);
  };
  let urlPath = props.location.pathname;

  return (
    <>
      <NavContainer>
        <MenuButton onClick={toggleMenu}>&gt;</MenuButton>
        <Logo src={squareLogo} />
      </NavContainer>
      <MenuContainer menuVisible={menuVisible && menuVisible}>
        <li>
          <MenuLink to="/" id="home" onClick={toggleMenu}>
            {urlPath === "/" ? <s>Home</s> : "Home"}
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/about" id="about" onClick={toggleMenu}>
            {urlPath === "/about" ? <s>About</s> : "About"}
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/projects" id="projects" onClick={toggleMenu}>
            {urlPath === "/projects" ? <s>Projects</s> : "Projects"}
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/contact" id="contact" onClick={toggleMenu}>
            {urlPath === "/contact" ? <s>Contact</s> : "Contact"}
          </MenuLink>
        </li>
      </MenuContainer>
    </>
  );
};
