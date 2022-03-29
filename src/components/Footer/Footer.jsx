import React from "react";
import logo from "../../assets/images/logo.svg";
import india from "../../assets/images/indianFlag.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer_links">
        <ul className="query_links">
          <li>Contact</li>
          <li>FAQ's</li>
        </ul>
        <ul className="study_links">
          <li>Tutorials</li>
          <li>Blog</li>
        </ul>
        <ul className="privacy_links">
          <li>Privarcy</li>
          <li>Banned Items</li>
        </ul>
        <ul className="careers_links">
          <li>About</li>
          <li>
            Jobs <span className="job_span">3</span>
          </li>
        </ul>
        <ul className="social_links">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Linkedin</li>
        </ul>
      </div>
      <div className="footer_terms">
        <p className="copyright_terms">Dukaan 2020, All rights reserved.</p>
        <p className="copyright_terms">
          Made in <img src={india} alt="india"></img>
        </p>
      </div>
    </div>
  );
};

export default Footer;
