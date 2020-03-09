import React from "react";

export const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="image" />
      <h2 className="name">{product.name}</h2>
      <p className="description">{product.description}</p>
      <div className="price">{product.price}</div>
      <div className="quantity">{product.quantity}</div>
      <div className="buttons">
        <button>Add to cart</button>
        <button>Preview</button>
      </div>
    </div>
  );
};
