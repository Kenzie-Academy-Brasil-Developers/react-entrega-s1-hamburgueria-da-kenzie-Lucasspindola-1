import { ProductsList } from "./style";
import { toast } from "react-toastify";
const ProductsListContainer = ({
  products,
  productsAdd,
  setProductsAdd,
  filtredProduct,
  valueInput,
}) => {
  const notify = (mensager) => toast.success(mensager);
  console.log(productsAdd);
  return (
    <ProductsList>
      {products &&
        products.map((element, index) => {
          return (
            <li key={index} id={element.id}>
              <figure>
                <img
                  src={element.img}
                  alt={`Imagem ilustrativa de${element.name}`}
                />
              </figure>
              <h2>{element.name}</h2>
              <span>{element.category}</span>
              <p>R${element.price}</p>
              <button
                onClick={() => {
                  if (productsAdd === []) {
                    setProductsAdd((previous) => [...previous, element]);
                    notify("Produto Adicionado!");
                  } else {
                    if (productsAdd.find((item) => item.id === element.id)) {
                      notify("Produto existente!");
                    } else {
                      setProductsAdd((previous) => [...previous, element]);
                      notify("Produto Adicionado!");
                    }
                  }
                }}
              >
                Adicionar
              </button>
            </li>
          );
        })}
    </ProductsList>

    /* <li>
        <figure>
          <img src="/202109090436_skn5yx754p 1.png" alt="" />
        </figure>
        <h2>Hamburguer</h2>
        <span>Sanduíches</span>
        <p>R$14,00</p>
        <button>Adicionar</button>
      </li>
      <li>
        <figure>
          <img src="/202109090436_skn5yx754p 1.png" alt="" />
        </figure>
        <h2>Hamburguer</h2>
        <span>Sanduíches</span>
        <p>R$14,00</p>
        <button>Adicionar</button>
      </li>
      <li>
        <figure>
          <img src="/202109090436_skn5yx754p 1.png" alt="" />
        </figure>
        <h2>Hamburguer</h2>
        <span>Sanduíches</span>
        <p>R$14,00</p>
        <button>Adicionar</button>
      </li>
      <li>
        <figure>
          <img src="/202109090436_skn5yx754p 1.png" alt="" />
        </figure>
        <h2>Hamburguer</h2>
        <span>Sanduíches</span>
        <p>R$14,00</p>
        <button>Adicionar</button>
      </li>
      <li>
        <figure>
          <img src="/202109090436_skn5yx754p 1.png" alt="" />
        </figure>
        <h2>Hamburguer</h2>
        <span>Sanduíches</span>
        <p>R$14,00</p>
        <button>Adicionar</button>
      </li> */
  );
};

export default ProductsListContainer;
