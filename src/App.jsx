import React, { useState } from "react";
import { useEffect } from "react";
import api from "./services/api";

import "./App.css";
import Cabecalho from "./components/Cabecalho/index";
import ProductsList from "./components/ProductsList";
import Cart from "./components/CartProducts/index";

// https://hamburgueria-kenzie-json-serve.herokuapp.com/products

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get().then((response) => {
      setProducts(response.data);
      console.log(response);
    });
  }, []);
  console.log(products);
  return (
    <>
      <header className="App">
        <Cabecalho />
      </header>
      <main>
        <ProductsList products={products} />
        <Cart />
      </main>
    </>
  );
}

export default App;
