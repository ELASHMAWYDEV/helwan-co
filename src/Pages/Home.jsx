import React, { Component } from "react";
import Header from "../Components/Header";
import "../style/home.css";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import Product1 from "../assets/Images/product-1.jpg";
import Product2 from "../assets/Images/product-2.jpg";
import Product4 from "../assets/Images/product-4.jpg";
import Product5 from "../assets/Images/product-5.jpg";
import Product6 from "../assets/Images/product-6.jpg";
import Product7 from "../assets/Images/product-7.jpg";
import Product8 from "../assets/Images/product-8.jpg";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <div className="hero-section-wrapper">
          <div className="hero-section">
            <h1>Transform Your Space with Our Premium Marble Products</h1>
            <p>
              We offer a wide variety of marble products that are both beautiful and durable, making them perfect for
              any home or commercial space. Our marble is expertly crafted using the latest technology and highest
              quality materials, ensuring that each piece is unique and long-lasting. At Helwan, we are committed to
              providing our customers with exceptional products and outstanding customer service. Browse our selection
              of marble products today and discover how Helwan can help you transform your space.
            </p>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="exports-section-wrapper hero-section-wrapper">
          <div className="hero-section">
            <h1>
              Your Trusted Partner for <br />
              Exporting and Importing <br />
              High-Quality Marble Products
            </h1>
            <p>
              At Helwan, we are proud to offer our products to customers around the world. With our expertise in
              exporting and importing, we can ensure that your order is delivered on time and in excellent condition, no
              matter where you are located. We work with trusted shipping partners to provide reliable and efficient
              delivery services, and we handle all of the necessary paperwork and documentation to make the process as
              smooth and hassle-free as possible. Whether you need a small shipment for a personal project or a large
              order for a commercial project, Helwan is your go-to source for top-quality manufactured marble products.
            </p>
          </div>
        </div>
        <div className="our-products-section">
          <h1>Our Products</h1>
          <div className="products-grid">
            <div className="product">
              <img src={Product1} />
            </div>
            <div className="product">
              <img src={Product2} />
            </div>
            <div className="product">
              <img src={Product4} />
            </div>
            <div className="product">
              <img src={Product5} />
            </div>
            <div className="product">
              <img src={Product6} />
            </div>
            <div className="product">
              <img src={Product7} />
            </div>
            <div className="product">
              <img src={Product8} />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
