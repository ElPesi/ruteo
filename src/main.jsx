import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import Home from "../src/components/Home";
import Region from "../src/components/Region";
import Subregion from "../src/components/Subregion";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/Region" element={<Region/>} />
      <Route path="/Subregion" element={<Subregion/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);