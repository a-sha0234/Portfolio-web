import React from "react";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import "./styles/main.scss";

function App() {
  return (
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
  );
}

export default App;
