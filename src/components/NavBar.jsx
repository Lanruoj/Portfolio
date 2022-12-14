import styled from "styled-components";
// import logo from "../img/tane-logo.png";
import { useMenuContext } from "../utils/MenuContext";
import { Link } from "react-router-dom";
import { usePageContext } from "../utils/PageContext";

const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4rem;
  top: 0;
  z-index: 999;
`;

const Title = styled.h1`
  margin: 0;
  color: #2f2f2f;
  text-align: center;
  font-family: "Karla", sans-serif;
  font-size: 3rem;
`;

const MenuButton = styled.button`
  position: absolute;
  background-color: rgba(255, 255, 255, 0);
  color: black;
  width: 3rem;
  border: none;
  font-size: 3rem;
  align-self: center;
  left: 0.5rem;
  padding: 0;
  margin: 0;
`;

const MenuContainer = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  list-style: none;
  width: 50vw;
  height: 100vh;
  left: ${(props) => (props.menuVisible ? "0px" : "-50vw")};
  transition: 0.5s;
`;

const MenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 3rem;
`;

export const NavBar = () => {
  const { menuVisible, setMenuVisible } = useMenuContext();
  const toggleMenu = () => {
    menuVisible ? setMenuVisible(false) : setMenuVisible(true);
  };

  const { currentPage, setCurrentPage } = usePageContext();
  const handleClick = (event) => {
    setCurrentPage(event.target.id);
  };

  return (
    <>
      <NavContainer>
        <MenuButton onClick={toggleMenu}>X</MenuButton>
        <Title>
          <i>Tāne</i>
        </Title>
      </NavContainer>
      <MenuContainer menuVisible={menuVisible && menuVisible}>
        <li>
          <MenuLink to="/" onClick={handleClick} id="home">
            {currentPage === "home" ? <s>Home</s> : "Home"}
          </MenuLink>
        </li>
        <li>
          <MenuLink to="/about" onClick={handleClick} id="about">
            {currentPage === "about" ? <s>About</s> : "About"}
          </MenuLink>
        </li>
      </MenuContainer>
    </>
  );
};
