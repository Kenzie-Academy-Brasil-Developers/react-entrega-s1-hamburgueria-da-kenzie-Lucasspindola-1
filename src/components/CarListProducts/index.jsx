import { toast } from "react-toastify";
const CarListProducts = ({ element, productsAdd, setProductsAdd }) => {
  const notify = (mensager) => toast.success(mensager);
  return (
    <li key={element.id}>
      <div>
        <img src={element.img} alt="" />
        <div className="containerInformationsProductCar">
          <h5>{element.name}</h5>
          <span>{element.category}</span>
        </div>
      </div>
      <button
        onClick={() => {
          let filtrado = productsAdd.filter(
            (elementFilter) => elementFilter.id !== element.id
          );
          setProductsAdd(filtrado);
          notify("Produto Deletado!");
        }}
      >
        Remover
      </button>
    </li>
  );
};

export default CarListProducts;
