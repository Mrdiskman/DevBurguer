import { useContext } from "react";
import { Contexts } from "../../context";
import { IoIosRemoveCircleOutline } from 'react-icons/io';

import { CartSection, EmptyCartStyle } from "./styled";

function Cart() {
  const { cart, setCart, remove } = useContext(Contexts);

  const total = cart.reduce((counter, acc) => (counter += acc.price), 0);
  return cart.length === 0 ? (
    <EmptyCartStyle>
      <div className="infoCard">
        <h1 className="title">Carrinho</h1>
      </div>
      <div className="emptyBag">
        <h1 className="emptyCartMessage">Sua sacola esta vazia</h1>
        <p className="addItemsMessage">Adicione apenas um item por vez</p>
      </div>
    </EmptyCartStyle>
  ) : (
    <CartSection>
      <div className="infoCard">
        <h1 className="title">Carrinho</h1>
      </div>
      <ul className="cartItemList">
        {cart.map((elem, index) => (
          <li key={index} className="cartItem">
            <div className="imageBackground">
              <img src={elem.img} alt="" className="itemImg" />
            </div>
            <div className="itemText">
              <h1 className="itemName">{elem.name}</h1>
              <p className="itemCategory">{elem.category}</p>
            </div>
            <div className="removeButtonContainer">
              <IoIosRemoveCircleOutline onClick={() => remove(elem)} className="removeButton">
                Remove
              </IoIosRemoveCircleOutline>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <div className="subtotal">
          <h1 className="totalPrice">Total</h1>
          <p className="amount">
            {total.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>
        <button onClick={() => setCart([])} className="removeAllButton">
          Remove All
        </button>
      </div>
    </CartSection>
  );
}

export default Cart;
