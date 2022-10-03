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

      const valueType = element.category
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(valueInput.toLowerCase());
      if (value === true) {
        return value;
      }
      if (valueType === true) {
        return valueType;
      }
    });

    // element.name.toLowerCase() ===
    //   valueInput
    //     .toLocaleLowerCase()
    //     .normalize("NFD")
    //     .replace(/[\u0300-\u036f]/g, "") ||
    // element.category.toLowerCase() ===
    //   valueInput
    //     .toLocaleLowerCase()
    //     .normalize("NFD")
    //     .replace(/[\u0300-\u036f]/g, "")
    setFiltredProduct(filtredItems);
    console.log(filtredItems);
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
