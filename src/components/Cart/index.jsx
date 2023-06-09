import "./style.css";

function Cart({ carrinho, setCarrinho }) {
  function remove(removedItem) {
    const filtered = carrinho.filter((elem) => elem.id !== removedItem.id);
    setCarrinho(filtered);
  }

  const total = carrinho.reduce((counter, acc) => (counter += acc.price), 0);
  return carrinho.length === 0 ? (
    <div className="carrinho">
      <div className="divisoriaVerde">
        <h1 className="titleCarrinho">Carrinho de compras</h1>
      </div>
      <div className="parteEscritaCarrinhoVazio">
        <h1 className="sacolaVazia">Sua sacola está vazia</h1>
        <p className="adicione">Adicione itens</p>
      </div>
    </div>
  ) : (
    <div className="carrinho">
      <div className="divisoriaVerde">
        <h1 className="titleCarrinho">Carrinho de compras</h1>
      </div>
      <ul className="containerListaCarrinho">
        {carrinho.map((elem, index) => (
          <li key={index} className="listaCarrinho">
            {console.log(elem)}
            <div className="fundoCinza">
              <img src={elem.img} alt="" className="imgDoItem" />
            </div>
            <div className="parteEscritaItem">
              <h1 className="nomeItem">{elem.name}</h1>
              <p className="categoriaItem">{elem.category}</p>
            </div>
            <div className="containerBotaoRmv">
              <button onClick={() => remove(elem)} className="botaoRmv">
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="tot">
        <div className="deuIsso">
          <h1 className="precoTot">Total</h1>
          <p className="num">
            {total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <button onClick={() => setCarrinho([])} className="botaoRmvTds">Remover todos</button>
      </div>
    </div>
  );
}

export default Cart;
