import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MenSection from "./Components/MenSection";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* {Routes} */}
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/mens" element={<MenSection></MenSection>}></Route>
      </Routes>
      {/* {Few things which needs to be discussed before starting off with the project
        0) How to contribute - 
        1) CSS library - Ant design, Material UI, Bootstrap.  - Material UI
        2) Redux / Context API -  Context API.
        3) Hardcode the data or API - Zara API.


        4) Payment gateway - 
      } */}
    </BrowserRouter>
  </React.StrictMode>
);
