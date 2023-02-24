import React, { Component } from "react";
import Header from "../Components/Header";
import "../style/home.css";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <div className="page-container1">
          <div className="section1">
            <h1>Transform Your Space <br/> with Our Premium Marble Products</h1>
            <p>
              We offer a wide variety of marble products that are both beautiful
              and durable, making them perfect <br/> for any home or commercial space.
              Our marble is expertly crafted using the latest technology and<br/>
              highest quality materials, ensuring that each piece is unique and
              long-lasting. At Helwan, we are<br/> committed to providing our
              customers with exceptional products and outstanding customer
              service.<br/> Browse our selection of marble products today and
              discover how Helwan can help you transform your space.
            </p>
           <Link to='/contact us'><button>Contact Us</button></Link> 
          </div>
        </div>
        <div className="page-container2">
        <div className="section1">
        <h1 >Your Trusted Partner for <br/>
Exporting and Importing <br/>
High-Quality Marble Products</h1>
<div className="pa">
<p>
At Helwan, we are proud to offer our products to customers around the world. With our <br/> expertise in exporting and 
importing, we can ensure that your order is delivered on time <br/> and in excellent condition, no matter where you are
 located. We work with trusted <br/> shipping partners to provide reliable and efficient delivery services, and we handle all of
  <br/> the necessary paperwork and documentation to make the process as smooth and <br/> hassle-free as possible. Whether
   you need a small shipment for a personal project or a
 <br/> large order for a commercial project, Helwan is your go-to source for top-quality<br/> manufactured marble products.
            </p>
</div>
            
        </div>
        </div>
        
     
        <Footer />
      </>
    );
  }
}
