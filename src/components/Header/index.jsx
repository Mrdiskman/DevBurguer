import { Contexts } from "../../context";
import { HeaderStyled } from "./style";
import { useContext, useState } from "react";

function Header() {
  const { products, setFilter } = useContext(Contexts);
  const [input, setInput] = useState("");

  function inputFilter() {
    const filter = products.filter(
      (elem) =>
        elem.category.toUpperCase().includes(input.toUpperCase()) ||
        elem.name.toUpperCase().includes(input.toUpperCase())
    );
    setFilter(filter);
  }

  return (
    <HeaderStyled>
      <h1 className="title">
        Dev<span className="secondaryTitle">Burguer</span>
      </h1>
      <div className="searchBox">
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          className="searchInput"
          placeholder="Digite a pesquisa..."
        />
        <button onClick={inputFilter} className="searchButton">
          Pesquisar
        </button>
      </div>
    </HeaderStyled>
  );
}

export default Header;