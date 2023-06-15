import styled from "styled-components";

export const EmptyCartStyle = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  width: 90%;
  height: 300px;

  .infoCard {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 65px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }

  .emptyBag {
    width: 100%;
    height: 200px;
    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .emptyCartMessage {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #333333;
  }

  .addItemsMessage {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #828282;
  }

  .botaoRmv {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #bdbdbd;
    border: none;
    background-color: transparent;
  }
  @media (min-width: 1024px) {
    width: 20%;
    margin-top: 55px;
  }
`;

export const CartSection = styled.section`
  width: 90%;
  min-height: 300px;
  height: fit-content;

  button {
    cursor: pointer;
  }

  .infoCard {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 65px;
    background: #27ae60;
    border-radius: 5px 5px 0px 0px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }

  .cartItemList {
    padding-top: 5px;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }

  .cartItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 5px;
    background-color: #f0eded;
    border-radius: 10px;
  }

  .itemImg {
    width: 80px;
    height: 80px;
  }

  .imageBackground {
    background-color: #e8e6e6;
    border-radius: 10px;
    height: 100%;
  }

  .itemText {
    display: flex;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    flex-direction: column;
    gap: 10px;
  }

  .itemCategory {
    font-size: 12px;
    font-weight: 400;
  }

  .removeButton {
    color: #660d0d;
    cursor: pointer;
  }
  .removeButton:hover {
    transition: 1s;
    color: #fc0303;
  }

  .total {
    margin-top: 5px;
    border-top: 2px solid #e0e0e0;
  }

  .subtotal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  .totalPrice {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
    width: 35px;
  }

  .amount {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #27ae60;
  }

  .removeAllButton {
    margin-top: 15px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #e0e0e0;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #616161;
  }

  @media (min-width: 1024px) {
    width: 20%;
    margin-top: 55px;
  }
`;
