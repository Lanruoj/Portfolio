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
  border-style: none none solid none;
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
  border: none;
  font-size: 3rem;
  position: absolute;
  align-self: center;
  left: 1rem;
`;

const MenuContainer = styled.ul`
  position: fixed;
  background-color: white;
  list-style: none;
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
      {menuVisible ? (
        <MenuContainer>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </MenuContainer>
      ) : null}
    </>
  );
};
