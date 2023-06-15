import styled from "styled-components";

export const ProductStyled = styled.li`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 300px;
  height: 346px;
  list-style: none;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;

  .imageMold {
    width: 100%;
    height: 150px;
    display: flex;
    background: #f5f5f5;
    align-items: center;
    justify-content: center;
  }

  .imageFood {
    width: 50%;
    height: 100%;
  }

  .name {
    width: 260px;
    height: 40px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-left: 21px;
    margin-top: 26px;
    margin-bottom: 0px;
  }

  .category {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #828282;
    margin-left: 22px;
    margin-top: 1px;
    margin-bottom: 0px;
  }

  .price {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #27ae60;
    margin-left: 23px;
    margin-top: 14px;
    margin-bottom: 14px;
  }

  .addButton {
    cursor: pointer;
    width: 106px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background: #27ae60;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-left: 19px;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .addButton:hover{
    transition: 1s;
    background: #18c761;
  }

  @media (min-width: 769px) {
    margin-bottom: 6px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 6px;
  }
`;
