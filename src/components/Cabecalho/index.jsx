import React from "react";
import { Cabecalho } from "./style";

const Nav = () => {
  return (
    <Cabecalho>
      <figure>
        <img src="/Mask Group.svg" alt="logo Hamburgueria Kenzie" />
      </figure>
      <div>
        <input type="text" placeholder="Digitar Pesquisa" />
        <button>Pesquisar</button>
      </div>
    </Cabecalho>
  );
};
export default Nav;
