import { useState } from "react";
import styled from "styled-components";
import logo from "../img/tane-logo.png";
import { useMenuContext } from "../utils/MenuContext";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: red;
`;

const Title = styled.h1`
  position: fixed;
  margin: 0;
  color: #2f2f2f;
  text-align: center;
  font-family: "Karla", sans-serif;
  font-size: 3rem;
`;

const MenuButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  color: black;
  width: 3rem;
  border: none;
  font-size: 3rem;
  position: fixed;
  align-self: center;
  left: 0.5rem;
  padding: 0;
  margin: 0;
`;

const MenuContainer = styled.ul`
  position: fixed;
  /* top: 0; */
  background-color: white;
  list-style: none;
  left: ${(props) => (props.menuVisible ? "0px" : "-50vw")};
  background-color: ${(props) => (props.menuVisible ? "red" : "blue")};
  transition: 1s;
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
          <MenuLink to="/">Home</MenuLink>
        </li>
        <li>
          <MenuLink to="/about">About</MenuLink>
        </li>
      </MenuContainer>
    </>
  );
};
