import { Cabecalho } from "./style";

// const search = () => {
//   const productSearch = () => {
//     products.filter((element) => {
//       searchValue.toLowerCase();
//       element.name.toLowerCase() === searchValue;

//       // setProducts()
//     });
//   };
// };

const Nav = ({ products, setProducts, valueInput, setValueInput }) => {
  const search = (event) => {
    event.preventDefault();
    setValueInput("");
    const filtredItems = products.filter(
      (element) =>
        element.name.toLowerCase() ===
          valueInput
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") ||
        element.category.toLowerCase() ===
          valueInput
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
    );
    setProducts(filtredItems);
  };
  return (
    <Cabecalho>
      <figure>
        <img src="/Mask Group.svg" alt="logo Hamburgueria Kenzie" />
      </figure>

      <form onSubmit={search}>
        <input
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

// onChange={(event) => setNewDescription(event.target.value)}
