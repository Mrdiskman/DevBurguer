import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Headear from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  function handleClick(productId) {
    const addItem = products.find((elem) => elem.id === productId);

    const itemOnCart = carrinho.find((elem) => elem.id === productId);
    if (!itemOnCart) {
      setCarrinho([...carrinho, addItem]);
    }
  }

  return (
    <>
      <Headear products={products} setFiltrado={setFiltrado} />
    </>
  );
}

export default App;
