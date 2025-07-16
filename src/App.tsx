import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NOTEBOOK from "./components/NOTEBOOK";
import Music_show_rec from "./components/Music_show_rec";
import NYC_PARK_MAP from "./components/NYC_PARK_MAP";
import Uptap from "./components/Uptap";
import Publication from "./components/Publication";
import { useEffect } from "react";
import Media_Dashboard from "./components/Media_Dashboard";

function App() {
  useEffect(() => {
    const blob = document.getElementById("blob");
    document.body.onpointermove = (e) => {
      const { clientX, clientY } = e;
      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);
  return (
    <>
      <div>
        <div className="app-container">
          <div id="blob"></div>
          <div id="blur"></div>
          <Router>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/notebook" element={<NOTEBOOK />} />
              <Route path="/uptap" element={<Uptap />} />
              <Route path="/nyc_park_map" element={<NYC_PARK_MAP />} />
              <Route path="/music_show_rec" element={<Music_show_rec />} />
              <Route path="/media_dashboard" element={<Media_Dashboard />} />
              <Route path="/publication" element={<Publication />} />
            </Routes>
          </Router>
        </div>
        <footer>
          <p>Copyright © 2025 Rena Shen</p>
          <p>All rights reserved</p>{" "}
        </footer>
      </div>
    </>
  );
}

export default App;
