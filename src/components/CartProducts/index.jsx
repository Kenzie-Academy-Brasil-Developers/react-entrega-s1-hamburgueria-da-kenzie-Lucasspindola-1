import CarListProducts from "../CarListProducts";
import { Cart } from "./style";
import { toast } from "react-toastify";
const notify = (mensager) => toast.success(mensager);

const CartProducts = ({
  productsAdd,
  setProductsAdd,
  totalValue,
  setTotalValue,
}) => {
  let value = productsAdd.reduce((currentValue, atualValue) => {
    return currentValue + atualValue.price;
  }, 0);
  console.log(value);
  setTotalValue(value);
  if (productsAdd.length === 0) {
    return (
      <Cart>
        <div className="carTitle">
          <span>Carrinho de compras</span>
        </div>
        <div className="containerCarProducts">
          <h5>Sua sacola está vazia</h5>
          <span>Adicione itens</span>
        </div>
      </Cart>
    );
  } else {
    return (
      <Cart>
        <div className="carTitle">
          <span>Carrinho de compras</span>
        </div>
        <ul className="containerCarProductsFull">
          {productsAdd.map((element, index) => (
            <CarListProducts
              productsAdd={productsAdd}
              setProductsAdd={setProductsAdd}
              key={index}
              element={element}
            />
          ))}
        </ul>
        <section className="containerTotalPrice">
          <div className="informationsPriceSome">
            <span className="total">Total</span>
            <span className="value">{totalValue}</span>
          </div>
          <button
            className="btnRemoveProduct"
            onClick={() => {
              setProductsAdd([]);
              notify("Todos Produtos Removidos!");
            }}
          >
            Remover Todos
          </button>
        </section>
      </Cart>
    );
  }
};

export default CartProducts;
