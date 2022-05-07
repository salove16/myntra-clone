
import {Navbar} from "./Components/Navbar/Navbar"
import MenSection from "./Components/MenSection";
import {Home} from "./Components/Home/Home";
import {Route, Routes } from "react-router-dom";
import {Footer} from "./Components/Footer/Footer"
// import {WishlistMainPage} from "./Components/WishlistPage/WishlistMainPage"

function App() {
  return (
    <div className="App">
      
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/mens" element={<MenSection></MenSection>}></Route>
        {/* <Route path="/wishlist" element={<WishlistMainPage/>} ></Route> */}
      </Routes>
      {/* {Few things which needs to be discussed before starting off with the project
        0) How to contribute - 
        1) CSS library - Ant design, Material UI, Bootstrap.  - Material UI
        2) Redux / Context API -  Context API.
        3) Hardcode the data or API - Zara API.


        4) Payment gateway - 
       */}
<Footer ></Footer>
    </div>
  );
}

export default App;
