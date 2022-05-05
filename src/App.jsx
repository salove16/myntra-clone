import {Navbar} from "./Components/Navbar/Navbar"
import MenSection from "./Components/MenSection";

import {Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" ></Route>
        <Route path="/mens" element={<MenSection></MenSection>}></Route>
      </Routes>
      {/* {Few things which needs to be discussed before starting off with the project
        0) How to contribute - 
        1) CSS library - Ant design, Material UI, Bootstrap.  - Material UI
        2) Redux / Context API -  Context API.
        3) Hardcode the data or API - Zara API.


        4) Payment gateway - 
      } */}
    </div>
  );
}

export default App;
