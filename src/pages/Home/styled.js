import styled from "styled-components";

export const HomePageStyled = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
    
    @media (min-width: 1024px) {
        align-items: flex-start;
        flex-direction: row;
        padding-right: 4%;
    }
`