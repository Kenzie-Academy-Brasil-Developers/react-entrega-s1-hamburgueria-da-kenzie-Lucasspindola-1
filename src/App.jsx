import React from "react";

import "./App.css";
import Cabecalho from "./components/Cabecalho/index";
import ProductsList from "./components/ProductsList";
import Cart from "./components/CartProducts/index";

function App() {
  return (
    <>
      <header className="App">
        <Cabecalho />
      </header>
      <main>
        <ProductsList />
        <Cart />
      </main>
    </>
  );
}

export default App;
