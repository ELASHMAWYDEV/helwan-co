import React, { Component } from "react";
import "../style/footer.css";
import logo from "../assets/Images/helwan-logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="footer-top">
          <div className="nav-container">
            <h5>Home</h5>
            <ul>
              <li>
                <a href="#">Manufacturing</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Conatct Us</a>
              </li>
            </ul>
          </div>
          <div className="about-container">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <p>Helwan Co. for construction and development Export and import and agriculturalreclamation</p>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="col-sm">&copy;{new Date().getFullYear()} Helwan Co.</p>
        </div>
      </div>
    );
  }
}
