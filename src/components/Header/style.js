import styled from "styled-components";

export const HeaderStyled = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  height: 140px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  align-items: center;
  .title {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    margin: 0px;
    font-size: 28px;
  }
  .secondaryTitle {
    color: #d41c26;
    font-size: 26px;
  }

  .searchBox {
    width: 85%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    gap: 5px;
    padding-right: 5px; 
    padding-left: 5px;
    margin-top: 10px
  }
  .searchButton {
    width: 35%;
    height: 40px;
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 10px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }

  .searchInput {
    width: 60%;
    height: 50px;
    color: #000000;
    border: none;
    font-family: "Inter", sans-serif;
    font-weight: 700;
  }
  @media (min-width: 769px) and (max-width: 1024px){
    flex-direction: row;
    height: 110px;
    gap: 30%;
    .searchBox{
      width: 30%;
    }
  }

  @media (min-width: 1025px){
    flex-direction: row;
    height: 110px;
    gap: 35%;
    .searchBox{
      width: 21%;
    }
  }
`;
