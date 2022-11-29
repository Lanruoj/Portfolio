import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { MenuContext } from "./utils/MenuContext";
import { useState } from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>
      <MenuContext.Provider value={{ menuVisible, setMenuVisible }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </MenuContext.Provider>
    </>
  );
}

export default App;
