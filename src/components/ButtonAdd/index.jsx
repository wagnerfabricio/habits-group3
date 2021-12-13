import { Children } from "react";
import { Container } from "./style";





export const ButtonAdd = ({ Children, onClick }) => {



    return (
        <>
            <Container onClick={onClick}>
                +

            </Container>
        </>
    )
}