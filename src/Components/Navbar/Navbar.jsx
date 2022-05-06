import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import Myntra_logo from "./NavImage/Myntra-logo-png-ico.png";
import { MenNav } from "./MiniNavbar/Men";
import { WomenNav } from "./MiniNavbar/WomenNav";
import { KidsNav } from "./MiniNavbar/KidsNav";
import { HomeLivingNav } from "./MiniNavbar/HomeLivingNav";
import { BeautyNav } from "./MiniNavbar/BeautyNav";
import { StudioNav } from "./MiniNavbar/Studio";

const Div = styled.nav`
  /* position: fixed; */
  display: flex;
  padding: 5px 10px;
  width: 100%;
  /* height: 70px; */
  top: 0;
  margin-left: 5%;
  right: 0;
  z-index: 1;
  align-items: center;
  background-color: #fffffe;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 80px 60px rgba(0, 0, 0, 0.1);
`;

export const Navbar = () => {
  return (
    <>
      <Div>
        <Link className="link1" to="/">
          <img
            style={{
              width: "75%",
              height: "50px",
              marginLeft: "30%",
              // marginRight: "30%",
            }}
            src={Myntra_logo}
            alt=""
          />
        </Link>

        <div className="link1">
          <Link
            className="link men"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "20px",
              paddingRight: "5px",
              //   hoverBorderBottom:"5px solid #ee5f73"
            }}
            to="/men"
          >
            MEN
          </Link>
          <MenNav></MenNav>
        </div>

        <div className="link1">
          <Link
            className="link women"
            style={{
              marginLeft: "3%",
              marginBottom: "-2%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            to="/Women"
          >
            WOMEN
          </Link>
          <WomenNav></WomenNav>
        </div>

        <div className="link1">
          <Link
            className="link kids"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            to="/Kids"
          >
            KIDS
          </Link>
          <KidsNav></KidsNav>
        </div>

        {/* <Link style={{ marginLeft: "2%", fontWeight: "bold", fontSize: "17px", textDecoration: "none", color: '#282C3F' }} to="/homeandkitchen">Home & Living</Link> */}

        <div className="link1">
          <Link
            className="link home"
            style={{
              //   marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            to="/home&living"
          >
            HOME & LIVING
          </Link>
          <HomeLivingNav></HomeLivingNav>
        </div>

        <div className="link1">
          <Link
            className="link beauty"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            to="/Beauty"
          >
            BEAUTY
          </Link>
          <BeautyNav></BeautyNav>
        </div>

        <div className="link1">
          <Link
            className="link studio"
            style={{
              marginLeft: "3%",
              fontWeight: "bold",
              fontSize: "14px",
              textDecoration: "none",
              color: "#282C3F",
              paddingBottom: "25px",
              paddingLeft: "5px",
              paddingRight: "5px",
              marginBottom: "-2%",
            }}
            to="/Studio"
          >
            STUDIO
          </Link>
          <StudioNav></StudioNav>
        </div>

        {/* <p className="nw">NEW</p> */}

        <div className="inp1">
          <input
            type="text"
            className="inp"
            placeholder="Search for products, brands and more"
          />
        </div>

        <p style={{ marginLeft: "4%" }}>
          <img
            style={{ marginLeft: "15%", fontSize: "12px" }}
            src="https://img.icons8.com/material-outlined/24/000000/gender-neutral-user.png"
            alt=""
          />
          <br></br>
          <span>
            {" "}
            <Link to={"/login"}>Login</Link>{" "}
          </span>
        </p>

        <p style={{ marginLeft: "2%" }}>
          <img
            style={{ marginLeft: "25%" }}
            src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"
            alt=""
          />
          <br></br>
          <span>Wishlist</span>
        </p>

        <Link
          style={{
            marginLeft: "2%",
            fontSize: "15px",
            textDecoration: "none",
            color: "#282C3F",
          }}
          to="/cart/:id"
        >
          {" "}
          <p>
            <img
              style={{ marginLeft: "3%" }}
              src="https://img.icons8.com/material-outlined/24/000000/shopping-bag--v1.png"
              alt=""
            />
            <br></br>
            <span>Bag</span>
          </p>
        </Link>
      </Div>
    </>
  );
};
