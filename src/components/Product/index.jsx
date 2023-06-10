import { useContext } from "react";
import { Contexts } from "../../context";
import "./style.css";

function Product({ elem }) {
  const {handleClick} = useContext(Contexts);
  return (
    <li className={elem.name === "Milkshake Ovomaltine"? "lista milkshake" : "lista"}>
      <div className="moldeFoto">
        <img src={elem.img} alt="" className="fotoLanche" />
      </div>
      <h2 className="nome">{elem.name}</h2>
      <p className="categoria">{elem.category}</p>
      <p className="preco">R$  {elem.price.toFixed(2)}</p>
      <button onClick={()=> handleClick(elem.id)} className="botaoAdd">Adicionar</button>
    </li>
  );
}

export default Product;
