import React from "react";
import "./App.css";
import Product from "./Products/Product";
import { getProducts } from "./Data/Data";
import ProductList from "./Products/ProductList";

const App = () => {
  return (
    <div className="App">
      <header className="appHeader"></header>
      <main className="mainContent">
        <Product name="Featured Product" price={1000} quantity={120} img="https://www.decolore.net/wp-content/uploads/2017/04/product-mock-up-set-2.jpg" />
        <ProductList products={getProducts()} />
      </main>
      <footer className="appFooter"></footer>
    </div>
  );
};

export default App;
