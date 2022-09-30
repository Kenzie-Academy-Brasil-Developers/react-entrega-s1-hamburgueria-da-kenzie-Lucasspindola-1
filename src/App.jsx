import React, { useState } from "react";
import { useEffect } from "react";
import api from "./services/api";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Cabecalho from "./components/Cabecalho/index";
import ProductsList from "./components/ProductsList";

import CartProducts from "./components/CartProducts/index";

function App() {
  const [products, setProducts] = useState([]);
  const [productsAdd, setProductsAdd] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [filtredProduct, setFiltredProduct] = useState([]);
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    api.get().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <header className="App">
        <Cabecalho
          products={products}
          setProducts={setProducts}
          setFiltredProduct={setFiltredProduct}
          valueInput={valueInput}
          setValueInput={setValueInput}
        />
      </header>
      <main>
        <ProductsList
          productsAdd={productsAdd}
          setProductsAdd={setProductsAdd}
          products={products}
          filtredProduct={filtredProduct}
          valueInput={valueInput}
        />

        <CartProducts
          productsAdd={productsAdd}
          setProductsAdd={setProductsAdd}
          totalValue={totalValue}
          setTotalValue={setTotalValue}
        />
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
