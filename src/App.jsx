
import {Navbar} from "./Components/Navbar/Navbar"
import MenSection from "./Components/MenSection";
import {Home} from "./Components/Home/Home"
import {Footer} from "./Components/Footer/Footer"
import {Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/mens" element={<MenSection></MenSection>}></Route>
      </Routes>


      
       <Footer></Footer>
    </div>
  );
}

export default App;
