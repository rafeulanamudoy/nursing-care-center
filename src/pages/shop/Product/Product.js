import React from "react";
import "./Product.css";

const Product = (props) => {
  const { product, img, price } = props.product;
  return (
    <div className="product-container">
      <img src={img} />
      <h5 className="text-center text-success">{product}</h5>
      <h6 className="text-center text-primary">Price:{price}</h6>
      <button className="btn btn-info mx-auto d-block text-light fw-bold mt-4">
        purchase
      </button>
    </div>
  );
};

export default Product;
