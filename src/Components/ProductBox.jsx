import Modal from "react-modal";
import React from "react";
import "../style/product-box.css";

Modal.setAppElement("#productModal");

const ProductBox = ({ product, isOpen, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          padding: "0",
          width: "80%",
          maxWidth: "800px",
          zIndex: "10000",
        },
      }}
    >
      <div className="product-box">
        <button className="product-box__close-btn" onClick={() => setIsOpen(false)}>
          <i className="fas fa-times"></i>
        </button>

        <div className="product-box__image">
          <img src={product.imgUrl} alt="product" />
        </div>
        <div className="product-box__info">
          <h3 className="product-box__title">{product.title}</h3>
          <p className="product-box__description">{product.description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ProductBox;
