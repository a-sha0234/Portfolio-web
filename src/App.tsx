import React from "react";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";
import "./styles/main.scss";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <BrowserRouter>
          {" "}
          <Navbar />
          <Routes>
            {" "}
            <Route path="/" element={<Home />}>
              {" "}
            </Route>{" "}
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ParallaxProvider>
  );
}

export default App;
