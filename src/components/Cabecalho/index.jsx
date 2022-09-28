import React from "react";
import { Cabecalho } from "./style";

const Nav = () => {
  return (
    <Cabecalho>
      <figure>
        <img src="/Rectangle 13 (3).png" alt="logo Hamburgueria Kenzie" />
      </figure>
      <div>
        <input type="text" />
        <button>Pesquisar</button>
      </div>
    </Cabecalho>
  );
};
export default Nav;
