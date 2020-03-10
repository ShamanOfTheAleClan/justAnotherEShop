import React from "react";
import c from "./Product.module.css";

export const Product = ({ product }) => {
   const { image, name, description, price, quantity } = product;

   const shortDescription =
      (description || "")
         .split(" ")
         .splice(0, 20)
         .join(" ") + " ... ";

   return (
      <div className={c.product}>
         <img src={image} alt={name} className={c.image} />
         <div className={c.container}>
            <h2 className={c.name}>{name}</h2>
            <p className={c.description}>{shortDescription}</p>
            <div className={c.price}>Price: {price} €</div>
            <div className={c.quantity}>Quantity: {quantity}</div>
            <div className={c.buttons}>
               <button className={c.button}>Add to cart</button>
               <button className={c.button}>Preview</button>
            </div>
         </div>
      </div>
   );
};
