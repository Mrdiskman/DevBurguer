import Product from "../Product";
import "./style.css";
import { Contexts } from "../../context";
import { useContext } from "react";

function ProductsList() {
  const { products, filter } = useContext(Contexts);

  return (
    <ul className="containerListaProdutos">
      {filter && Array.isArray(filter) && filter.length ? (
        filter.map((elem, index) => <Product elem={elem} key={index} />)
      ) : (
        products && Array.isArray(products) && products.length ? (
          products.map((elem, index) => <Product elem={elem} key={index} />)
        ) : (
          <p>No products available</p>
        )
      )}
    </ul>
  );
}

export default ProductsList;
