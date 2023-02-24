import React, { useState } from "react";
import "../style/header.css";
import logo from "../assets/Images/helwan-logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="topbar-container">
        <a className="logo" href="/">
          <img src={logo} alt="" />
        </a>
        <div className={"hamburger-menu" + (isMenuOpen ? " open" : "")} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={"links-nav-container" + (isMenuOpen ? " open" : "")}>
          <Link to="/">Home</Link>
          <Link to="/manufacturing">Manufacturing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
