import { ProductsList } from "./style";
const ProductsListContainer = ({ products }) => {
  return (
    <ProductsList>
      {products &&
        products.map((element, index) => {
          return (
            <li key={index}>
              <figure>
                <img
                  src={element.img}
                  alt={`Imagem ilustrativa de${element.name}`}
                />
              </figure>
              <h2>{element.name}</h2>
              <span>{element.category}</span>
              <p>R${element.price}</p>
              <button>Adicionar</button>
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
