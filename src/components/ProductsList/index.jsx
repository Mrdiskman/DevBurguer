import Product from "../Product";
import "./style.css";

function ProductsList({ products, handleClick, filtrado }) {
  return (
    <ul className="containerListaProdutos">
      {filtrado.length
        ? filtrado.map((elem, index) => (
            <Product elem={elem} key={index} handleClick={handleClick} />
          ))
        : products.map((elem, index) => (
            <Product elem={elem} key={index} handleClick={handleClick} />
          ))}
    </ul>
  );
}

export default ProductsList;
