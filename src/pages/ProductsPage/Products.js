import React, { Component } from "react";
import Product from "../../components/Product";
import c from "./Products.module.css";
import Modal from "react-modal";
import { CreateProductModal } from "../../components/CreateProductModal/CreateProductModal";

export default class Products extends Component {
   state = {
      products: [],
      isModalOpen: false
   };
   componentDidMount() {
      const fetchProducts = async () => {
         const response = await fetch("http://localhost:3004/products");
         const products = await response.json();
         this.setState({ products });
      };
      fetchProducts();
   }
   toggleModalHandler = () => {
      this.setState(prevState => ({
         isModalOpen: !prevState.isModalOpen
      }));
   };

   render() {
      const { products, isModalOpen } = this.state;
      console.log(products);
      return (
         <>
            <div className={c.buttonWrapper}>
               <button className={c.button} onClick={this.toggleModalHandler}>
                  Create product
               </button>
            </div>
            <div className={c.products}>
               {products.map(product => (
                  <Product key={product.id} product={product} />
               ))}
            </div>
            <CreateProductModal
               isModalOpen={isModalOpen}
               toggleModal={this.toggleModalHandler}
            />
         </>
      );
   }
}
