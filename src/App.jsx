import { Navbar } from "./Components/Navbar/Navbar";
import MenSection from "./Components/MenSection";
<<<<<<< HEAD
import {Home} from "./Components/Home/Home";
import {Route, Routes } from "react-router-dom";
import {Footer} from "./Components/Footer/Footer"
// import {WishlistMainPage} from "./Components/WishlistPage/WishlistMainPage"
=======
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Products from "./components/Products";
import Signup from "./components/Signup";
import { Home } from "./Components/Home/Home";
import { Footer } from "../src/Components/Footer/Footer";
>>>>>>> 1163edd8dff2256c0de61308b66db29cf96cd712

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/mens" element={<MenSection></MenSection>}></Route>
        {/* <Route path="/wishlist" element={<WishlistMainPage/>} ></Route> */}
=======
      <Navbar />
      <Routes>


        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/mens" element={<MenSection></MenSection>}></Route> */}
        <Route path="/men" element={<Products data={"menTShirts"} />}></Route>
        <Route
          path="/women"
          element={<Products data={"womensProducts"} />}
        ></Route>
        <Route path="/Kids" element={<Products data={"boysData"} />}></Route>
        <Route
          path="/home&living"
          element={<Products data={"homeData"} />}
        ></Route>
        <Route
          path="/Beauty"
          element={<Products data={"beautyData"} />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
>>>>>>> 1163edd8dff2256c0de61308b66db29cf96cd712
      </Routes>
      <Footer></Footer>
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
