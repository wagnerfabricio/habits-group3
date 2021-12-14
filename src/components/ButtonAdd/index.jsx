import { Children } from "react";
import { Container } from "./style";
import { BsPlusLg } from "react-icons/bs"





export const ButtonAdd = ({ Children, onClick }) => {



    return (
        <>
            <Container onClick={onClick}>
                <BsPlusLg />

            </Container>
        </>
    )
}