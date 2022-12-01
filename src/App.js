import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { MenuContext } from "./utils/MenuContext";
import { PageContext } from "./utils/PageContext";
import { useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Main } from "./components/Main";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <>
      <PageContext.Provider value={{ currentPage, setCurrentPage }}>
        <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
          <NavBar />
          <Main menuVisible={menuVisible ? true : false}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </Main>
        </MenuContext.Provider>
      </PageContext.Provider>
    </>
  );
}

export default App;
