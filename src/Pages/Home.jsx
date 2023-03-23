import React, { useCallback, useState, useEffect } from "react";
import Header from "../Components/Header";
import "../style/home.css";
import Footer from "./../Components/Footer";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ImageViewer from "react-simple-image-viewer";
import product9 from "../assets/Images/photo.png.jpg";
import product10 from "../assets/Images/png.jpeg";
import granite1 from "../assets/Images/granite1.jpg"
import garnite2 from "../assets/Images/garnite2.jpg"
import granite3 from "../assets/Images/granite3.jpg"
import granite4 from "../assets/Images/granite4.jpg"
import granite5 from "../assets/Images/granite5.jpg"
import granite6 from "../assets/Images/granite6.jpg"
import product11 from "../assets/Images/photo2.jpg";
import marple1 from "../assets/Images/marple1.jpeg"
import marple2 from "../assets/Images/marple2.jpeg"
import marple4 from "../assets/Images/marple4.jpeg"
import marple3 from "../assets/Images/marple3.jpeg"
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

  // Go to products section if the url contains #our-products
  useEffect(() => {
    if (window.location.hash == "#our-products") {
      document.getElementById("our-products")?.scrollIntoView();
    }
  }, []);

  return (
    <>
      <Header />
      <div className="hero-section-wrapper">
        <div className="hero-section">
          <h1>Transform Your Space with Our Premium Marble Products</h1>
          <p>
            We offer a wide variety of marble products that are both beautiful and durable, making them perfect for any
            home or commercial space. Our marble is expertly crafted using the latest technology and highest quality
            materials, ensuring that each piece is unique and long-lasting. At ElHoda, we are committed to providing our
            customers with exceptional products and outstanding customer service. Browse our selection of marble
            products today and discover how ElHoda can help you transform your space.
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
            At ElHoda, we are proud to offer our products to customers around the world. With our expertise in exporting
            and importing, we can ensure that your order is delivered on time and in excellent condition, no matter
            where you import products from. We work import product from
             with trusted shipping partners to provide reliable and efficient delivery
            services, and we handle all of the necessary paperwork and documentation to make the process as smooth and
            hassle-free as possible. Whether you need a small shipment for a personal project or a large order for a
            commercial project, ElHoda is your go-to source for top-quality manufactured marble products.
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
              <h3>اسود قصير</h3>
            </div>
            <div className="card">
              <img src={product11} alt="" onClick={() => openImageViewer(product11)} />
              <h3>رخام جلاله</h3>
            </div>
            <div className="card">
              <img src={marple1} alt="" onClick={() => openImageViewer(marple1)} />
              <h3>جولدن كريمي</h3>
            </div>
            <div className="card">
              <img src={marple2} alt="" onClick={() => openImageViewer(marple2)} />
              <h3>رخام سماحه</h3>
            </div>
            <div className="card">
              <img src={marple3} alt="" onClick={() => openImageViewer(marple3)} />
              <h3>رخام زعفرانه</h3>
            </div>
            <div className="card">
              <img src={marple4} alt="" onClick={() => openImageViewer(marple4)} />
              <h3>رخام خاتميه غامق</h3>
            </div>
          </Carousel>
        ) : (
          <Carousel responsive={responsive} autoPlay>
            <div className="card">
              <img src={granite4} alt="" onClick={() => openImageViewer(granite4)} />
              <h3>فيردي غزال</h3>
            </div>
            <div className="card">
              <img src={product10} alt="" onClick={() => openImageViewer(product9)} />
              <h3>شيخ فضل جرانيت</h3>
            </div>
            <div className="card">
              <img src={garnite2} alt="" onClick={() => openImageViewer(garnite2)} />
              <h3>اسود اسوان</h3>
            </div>
            <div className="card">
            <img src={granite1} alt="" onClick={() => openImageViewer(granite1)} />
              <h3>روزا النصر</h3>
            </div>
            <div className="card">
              <img src={granite3} alt="" onClick={() => openImageViewer(granite3)} />
              <h3>حلايب جرانيت</h3>
            </div>
            <div className="card">
              <img src={granite6} alt="" onClick={() => openImageViewer(granite6)} />
              <h3>رمادي الشركه</h3>
            </div>
            <div className="card">
              <img src={granite5} alt="" onClick={() => openImageViewer(granite5)} />
              <h3>احمر رويال</h3>
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
