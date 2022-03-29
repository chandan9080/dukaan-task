import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/whitefulllogo.svg";
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="right_header">
        <span className="sign_link">Sign In</span>
        <button className="btn white_bg">Dukaan for Pc</button>
      </div>
    </header>
  );
};

export default Navbar;
