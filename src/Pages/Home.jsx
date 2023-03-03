import React, { useCallback, useState } from "react";
import Header from "../Components/Header";
import "../style/home.css";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageViewer from "react-simple-image-viewer";
import product9 from "../assets/Images/photo.png.jpg";
import product10 from "../assets/Images/png.jpeg";
import product11 from "../assets/Images/photo2.jpg";
import product12 from "../assets/Images/tirsta.jpeg";
import "../style/product.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const [currentImage, setCurrentImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeProductsTab, setActiveProductsTab] = useState("marble");

  const openImageViewer = useCallback((imgUrl) => {
    setCurrentImage(imgUrl);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(null);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Header />
      <div className="hero-section-wrapper">
        <div className="hero-section">
          <h1>Transform Your Space with Our Premium Marble Products</h1>
          <p>
            We offer a wide variety of marble products that are both beautiful and durable, making them perfect for any
            home or commercial space. Our marble is expertly crafted using the latest technology and highest quality
            materials, ensuring that each piece is unique and long-lasting. At Helwan, we are committed to providing our
            customers with exceptional products and outstanding customer service. Browse our selection of marble
            products today and discover how Helwan can help you transform your space.
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
            At Helwan, we are proud to offer our products to customers around the world. With our expertise in exporting
            and importing, we can ensure that your order is delivered on time and in excellent condition, no matter
            where yimport product from './../Components/product'; ou are located. We work import product from
            './../Components/Product'; with trusted shipping partners to provide reliable and efficient delivery
            services, and we handle all of the necessary paperwork and documentation to make the process as smooth and
            hassle-free as possible. Whether you need a small shipment for a personal project or a large order for a
            commercial project, Helwan is your go-to source for top-quality manufactured marble products.
          </p>
        </div>
      </div>
      <div className="our-products-section" id="our-products">
        <h1>Our Products</h1>
        <div className="tabs">
          <div
            className={`tab ${activeProductsTab == "marble" ? "active" : ""}`}
            onClick={() => setActiveProductsTab("marble")}
          >
            Marble
          </div>
          <div
            className={`tab ${activeProductsTab == "granite" ? "active" : ""}`}
            onClick={() => setActiveProductsTab("granite")}
          >
            Granite
          </div>
        </div>
        {activeProductsTab == "marble" ? (
          <Carousel responsive={responsive} autoPlay>
            <div className="card">
              <img src={product10} alt="" onClick={() => openImageViewer(product10)} />
              <h3>Short black marble</h3>
            </div>
            <div className="card">
              <img src={product11} alt="" onClick={() => openImageViewer(product11)} />
              <h3>Galala marble</h3>
            </div>
            <div className="card">
              <img src={product10} alt="" onClick={() => openImageViewer(product10)} />
              <h3>Short black marble</h3>
            </div>
            <div className="card">
              <img src={product11} alt="" onClick={() => openImageViewer(product11)} />
              <h3>Galala marble</h3>
            </div>
            <div className="card">
              <img src={product10} alt="" onClick={() => openImageViewer(product10)} />
              <h3>Short black marble</h3>
            </div>
            <div className="card">
              <img src={product11} alt="" onClick={() => openImageViewer(product11)} />
              <h3>Galala marble</h3>
            </div>
          </Carousel>
        ) : (
          <Carousel responsive={responsive} autoPlay>
            <div className="card">
              <img src={product9} alt="" onClick={() => openImageViewer(product9)} />
              <h3>Sheikh Fadl granite</h3>
            </div>
            <div className="card">
              <img src={product10} alt="" onClick={() => openImageViewer(product9)} />
              <h3>Sheikh Fadl granite</h3>
            </div>
            <div className="card">
              <img src={product9} alt="" onClick={() => openImageViewer(product9)} />
              <h3>Sheikh Fadl granite</h3>
            </div>
            <div className="card">
              <img src={product10} alt="" onClick={() => openImageViewer(product9)} />
              <h3>Sheikh Fadl granite</h3>
            </div>
            <div className="card">
              <img src={product9} alt="" onClick={() => openImageViewer(product9)} />
              <h3>Sheikh Fadl granite</h3>
            </div>
          </Carousel>
        )}
      </div>

      <div style={{ position: "absolute", zIndex: 1000 }}>
        {isViewerOpen && currentImage && (
          <ImageViewer
            src={[currentImage]}
            currentIndex={0}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            backgroundStyle={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          />
        )}
      </div>

      <Footer />
    </>
  );
}
