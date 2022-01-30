import React, {useState, useEffect} from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import {getProducts} from "./services/productService";


export default function App() {
  const [size, setSize] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
     getProducts("shoes").then((response) => setProducts(response));
  },[]);
  function renderProduct(id) {
    return (
      <div key={id} className="product">
        <a href="/">
          <img src={`/images/${id.image}`} alt={id.name} />
          <h3>{id.name}</h3>
          <p>${id.price}</p>
        </a>
      </div>
    );
  }

  const filteredProducts = size ? products.filter((id) => id.skus.find((skus) => skus.size === parseInt(size))) : products;

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <section id="filters">
            <label htmlFor="size">Filter by Size:</label>{" "}
            <select id="size" value={size} onChange={(e)=>setSize(e.target.value)}>
              <option value="">All sizes</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            {size && <h1>Found:{filteredProducts.length} items</h1>}
          </section>
          <section id="products">
            {filteredProducts.map(renderProduct)}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
