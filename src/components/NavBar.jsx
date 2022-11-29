import styled from "styled-components";
import logo from "../img/tane-logo.png";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  /* background-color: blue; */
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  border-style: none none solid none;
`;

const Title = styled.h1`
  margin: 0;
  position: fixed;
  color: #2f2f2f;
  text-align: center;
  font-family: "Karla", sans-serif;
  font-size: 3rem;
`;

// const Logo = styled.img`
//   height: 6rem;
// `;

export const NavBar = () => {
  return (
    <NavContainer>
      <Title>
        <i>Tāne</i>
      </Title>
      {/* <Logo src={logo} alt="Hello" /> */}
    </NavContainer>
  );
};
