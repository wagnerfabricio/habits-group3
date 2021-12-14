import { ButtonAdd } from "../../components/ButtonAdd"
import { Modal, Box } from "@mui/material";
import AddHabitModal from "../../components/Modal/addHabit";
import { useState } from "react";
import Aside from '../../components/Aside'
import Main from "../../components/Main";
import { Container } from "./styles";


const Dashboard = () => {

    const [openAddHabit, setOpenAddHabit] = useState(false);
    const handleOpenAddHabit = () => setOpenAddHabit(true);
    const handleCloseAddHabit = () => setOpenAddHabit(false);

    return (

        <>

            <Container>
                <Aside />
                <Main handleClick={handleOpenAddHabit}/>
            </Container>

            <Modal
                open={openAddHabit}
                onClose={handleOpenAddHabit}
            >
                <Box>
                    <AddHabitModal handleCloseAddHabit={handleCloseAddHabit} />
                </Box>
            </Modal>

        </>
    )
}

export default Dashboard