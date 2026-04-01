import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Roster from "./pages/Roster";
import WebTV from "./pages/WebTV";
import Staff from "./pages/Staff";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/webtv" element={<WebTV />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}