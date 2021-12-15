import { Container } from "./style";
import { BsPlusLg } from "react-icons/bs"





export const ButtonAdd = ({ onClick }) => {



    return (
        <>
            <Container onClick={onClick}>
                <BsPlusLg />

            </Container>
        </>
    )
}