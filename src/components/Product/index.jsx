import { useContext } from "react";
import { Contexts } from "../../context";

import { ProductStyled } from "./styled";

function Product({ elem }) {
  const {handleClick} = useContext(Contexts);
  return (
    <ProductStyled>
      <div className="imageMold">
        <img src={elem.img} alt="Foto do Lanche" className="imageFood" />
      </div>
      <h2 className="name">{elem.name}</h2>
      <p className="category">{elem.category}</p>
      <p className="price">R$  {elem.price.toFixed(2)}</p>
      <button onClick={()=> handleClick(elem.id)} className="addButton">Adicionar</button>
    </ProductStyled>
  );
}

export default Product;
