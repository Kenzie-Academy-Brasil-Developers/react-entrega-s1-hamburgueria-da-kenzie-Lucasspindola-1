import { Cart } from "./style";

const CartProducts = () => {
  return (
    <Cart>
      {/* Se ul estiver vazia */}
      {/* <div className="carTitle">
        <span>Carrinho de compras</span>
      </div>
      <div className="containerCarProducts">
        <h5>Sua sacola está vazia</h5>
        <span>Adicione itens</span>
      </div> */}

      <div className="carTitle">
        <span>Carrinho de compras</span>
      </div>
      <ul className="containerCarProductsFull">
        <li>
          <div>
            <img src="/202109090436_skn5yx754p 1.png" alt="" />
            <div className="containerInformationsProductCar">
              <h5>Hamburguer</h5>
              <span>Sanduíches</span>
            </div>
          </div>
          <button>Remover</button>
        </li>

        {/* <li>
          <div>
            <img src="/202109090436_skn5yx754p 1.png" alt="" />
            <div className="containerInformationsProductCar">
              <h5>Hamburguer</h5>
              <span>Sanduíches</span>
            </div>
          </div>
          <button>Remover</button>
        </li>
        <li>
          <div>
            <img src="/202109090436_skn5yx754p 1.png" alt="" />
            <div className="containerInformationsProductCar">
              <h5>Hamburguer</h5>
              <span>Sanduíches</span>
            </div>
          </div>
          <button>Remover</button>
        </li>
        <li>
          <div>
            <img src="/202109090436_skn5yx754p 1.png" alt="" />
            <div className="containerInformationsProductCar">
              <h5>Hamburguer</h5>
              <span>Sanduíches</span>
            </div>
          </div>
          <button>Remover</button>
        </li>
        <li>
          <div>
            <img src="/202109090436_skn5yx754p 1.png" alt="" />
            <div className="containerInformationsProductCar">
              <h5>Hamburguer</h5>
              <span>Sanduíches</span>
            </div>
          </div>
          <button>Remover</button>
        </li> */}
      </ul>
      <section className="containerTotalPrice">
        <div className="informationsPriceSome">
          <span className="total">Total</span>
          <span className="value">R$40,00</span>
        </div>
        <button className="btnRemoveProduct">Remover Todos</button>
      </section>
    </Cart>
  );
};

export default CartProducts;
