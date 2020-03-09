import React, { Component } from "react";
import Product from "../../components/Product";
// import c from "./ProductsPage.module.css";

export default class ProductsPage extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3004/products");
      const products = await response.json();
      this.setState({ products });
    };
    fetchProducts();
  }

  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <div className="products">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}
