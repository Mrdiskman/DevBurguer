import Product from "../Product";
import { Contexts } from "../../context";
import { useContext } from "react";
import {ProductListStyled} from "./styled"
function ProductsList() {
  const { products, filter } = useContext(Contexts);

  return (
    <ProductListStyled>
      {filter && Array.isArray(filter) && filter.length ? (
        filter.map((elem, index) => <Product elem={elem} key={index} />)
      ) : (
        products && Array.isArray(products) && products.length ? (
          products.map((elem, index) => <Product elem={elem} key={index} />)
        ) : (
          <p>No products available</p>
        )
      )}
    </ProductListStyled>
  );
}

export default ProductsList;
