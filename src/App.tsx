import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Publication from "./components/Publication";
import { useBlobAnimation } from "./hooks/useBlobAnimation";

function App() {
  useBlobAnimation();
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
