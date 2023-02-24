import React, { Component } from "react";
import "../style/header.css";
import logo from'../assets/Images/helwan-logo.png'
export default class Header extends Component {
  render() {
    return (
      <>
        <div className="topbar-container">
          <div className="logo">
          <img src={logo} alt="" />
            <nav class="navbar bg-body-tertiary">
              <div class="container">
                <a class="navbar-brand" href="#">
                 
                </a>
              </div>
            </nav>
          </div>
          <div className="links">
            <nav class="navbar navbar-expand-lg">
              <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                  <a class=" nav-link" aria-current="page" href="/home">
                    Home
                  </a>
                  <a class="nav-link" href="/manufacturing">
                    Manufacturing
                  </a>
                  <a class="nav-link" href="/about">
                    About
                  </a>
                  <a class="nav-link " href="/contact us">Contact Us</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
