import React from "react"
import './App.css';
import { Route, Routes } from "react-router-dom"

import Homepage from "./pages/homepage/Homepage"
import UsingMUI from "./pages/usingMUI/index"
import UsingVanilla from "./pages/usingVanilla/index"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/usingMUI" element={<UsingMUI />} />
        <Route path="/usingVanilla" element={<UsingVanilla />} />
      </Routes>
    </>
  );
}

export default App;
