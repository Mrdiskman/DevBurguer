import Cart from "../../components/Cart"
import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"
import { HomePageStyled } from "./styled"

export default function Home(){
    return(
        <>
          <Header/>
          <HomePageStyled>
            <ProductsList/>
            <Cart/>
          </HomePageStyled>
        </>
    )
}