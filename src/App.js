import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import "./App.css";




import Manufacturing from "./Pages/Manufacturing";
import Contact from "./Pages/Contact";

export class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>

          <Route path="manufacturing" element={<Manufacturing />}></Route>
        </Routes>
      </div>
    );
  }
}
