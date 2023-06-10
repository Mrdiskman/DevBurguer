import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Headear from "./components/Header";
import ContextsProvider from "./context";

function App() {

  return (
    <ContextsProvider>
      <Headear/>
      <ProductsList/>
    </ContextsProvider>
  );
}

export default App;
