import { ProductsList } from "./style";
import { toast } from "react-toastify";
const ProductsListContainer = ({
  products,
  productsAdd,
  setProductsAdd,
  filtredProduct,
  valueInput,
  setFiltredProduct,
  setValueInput,
}) => {
  const notify = (mensager) => toast.success(mensager);

  if (filtredProduct.length === 0) {
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
    );
  } else {
    return (
      <ProductsList>
        <div className="searchResults">
          <div className="searchResultsDivision">
            <span>Resultados para:</span>
            <h5>{valueInput}</h5>
          </div>

          <button
            onClick={() => {
              setFiltredProduct([]);
              setValueInput([]);
            }}
            className="clearSearch"
          >
            Limpar busca
          </button>
        </div>
        {filtredProduct &&
          filtredProduct.map((element, index) => {
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
    );
  }
};

export default ProductsListContainer;
