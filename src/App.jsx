import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { MenuContext } from "./utils/MenuContext";
import { useState, useEffect } from "react";
import { WindowSizeContext } from "./utils/WindowSizeContext";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Main } from "./components/Main";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import styled from "styled-components";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
  }, [windowSize]);

  return (
    <>
      <WindowSizeContext.Provider value={{ windowSize }}>
        <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
          <NavBar location={location} />
          <Page>
            <Main
              menuVisible={menuVisible ? true : false}
              windowSize={windowSize}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Main>
          </Page>
        </MenuContext.Provider>
      </WindowSizeContext.Provider>
    </>
  );
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default App;
