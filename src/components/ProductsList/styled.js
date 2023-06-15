import styled from "styled-components";

export const ProductListStyled = styled.ul`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  padding: 0px;
  margin-left: 0px;
  margin-top: 40px;
  margin-bottom: 40px;

@media (min-width: 1024px) {
    width: 65%;
    padding-left: 5%;
    display: flex;
    overflow-x: hidden;
    flex-wrap: wrap;
}
`