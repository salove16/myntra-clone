import { Navbar } from "./Components/Navbar/Navbar";
import MenSection from "./Components/MenSection";

import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Products from "./components/Products";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={}></Route> */}
        <Route path="/mens" element={<MenSection></MenSection>}></Route>
        <Route path="/men" element={<Products data={"menTShirts"} />}></Route>
        <Route
          path="/women"
          element={<Products data={"womensProducts"} />}
        ></Route>
        <Route path="/boys" element={<Products data={"boysData"} />}></Route>
        <Route path="/home" element={<Products data={"homeData"} />}></Route>
        <Route
          path="/beauty"
          element={<Products data={"beautyData"} />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
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
