import { createContext, useEffect, useState } from "react";

export const Contexts = createContext({});

const ContextsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  function handleClick(productId) {
    const addItem = products.find((elem) => elem.id === productId);
    const itemOnCart = cart.find((elem) => elem.id === productId);
    if (!itemOnCart) {
      setCart([...cart, addItem]);
    }
  }

  function remove(removedItem) {
    const filtered = cart.filter((elem) => elem.id !== removedItem.id);
    setCart(filtered);
  }


  const contextValue = {
    handleClick,
    filter,
    setFilter,
    cart,
    setCart,
    products,
    setProducts,
    remove
  };

  return (
    <Contexts.Provider value={contextValue}>
      {children}
    </Contexts.Provider>
  );
};

export default ContextsProvider;