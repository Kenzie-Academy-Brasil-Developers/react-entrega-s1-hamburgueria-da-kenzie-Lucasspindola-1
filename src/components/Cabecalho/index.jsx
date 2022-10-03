import { Cabecalho } from "./style";

const Nav = ({
  products,
  setProducts,
  valueInput,
  setValueInput,
  setFiltredProduct,
}) => {
  const search = (event) => {
    event.preventDefault();
    setFiltredProduct([]);

    const filtredItems = products.filter((element) => {
      const value = element.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(valueInput.toLowerCase());
      return value;
    });

    const filtredItemsCategory = products.filter((element) => {
      const valueType = element.category
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(valueInput.toLowerCase());
      return valueType;
    });

    if (filtredItems.length > 0) {
      setFiltredProduct(filtredItems);
    }
    if (filtredItemsCategory.length > 0) {
      setFiltredProduct(filtredItemsCategory);
    }
  };

  return (
    <Cabecalho>
      <figure>
        <img src="/Mask Group.svg" alt="logo Hamburgueria Kenzie" />
      </figure>

      <form onSubmit={search}>
        <input
          data-ls-module="charCounter"
          maxlength="10"
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setValueInput(event.target.value)}
        />
        <button>Pesquisar</button>
      </form>
    </Cabecalho>
  );
};
export default Nav;
