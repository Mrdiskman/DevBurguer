import styled from "styled-components";

export const ProductListStyled = styled.ul`
  width: 99%;
  height: max-content;
  display: flex;
  overflow-x: scroll;
  padding: 0px;
  margin-left: 0px;
  margin-top: 40px;

@media (min-width: 1024px) {
    width: 65%;
    display: flex;
    overflow-x: hidden;
    flex-wrap: wrap;
}
`