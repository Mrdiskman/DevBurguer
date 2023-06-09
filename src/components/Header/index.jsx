import {HeaderStyled} from "./style"
import { useState } from "react";
function Headear({ products, setFiltrado }) {
  const [input, setInput] = useState("");
  function inputFilter() {
    const filtro = products.filter(
      (elem) =>
        elem.category.toUpperCase().includes(input.toUpperCase()) ||
        elem.name.toUpperCase().includes(input.toUpperCase())
    );
    setFiltrado(filtro);
  }
  return (
    <HeaderStyled>
      <h1 className="title">Dev<span className="secondaryTitle">Burguer</span></h1>
      <div className="searchBox">
        <input type="text" onChange={(event) => setInput(event.target.value)}  className="searchInput" placeholder="Digitar pesquisa..."/>
        <button onClick={inputFilter} className="searchButton">Pesquisar</button>
      </div>
    </HeaderStyled>
  );
}
export default Headear;
