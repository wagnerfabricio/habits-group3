import { ButtonAdd } from "../../components/ButtonAdd"
import { Modal, Box } from "@mui/material";
import AddHabitModal from "../../components/Modal/addHabit";
import { useState } from "react";


const Dashboard = () => {

    const [openAddHabit, setOpenAddHabit] = useState(false);
    const handleOpenAddHabit = () => setOpenAddHabit(true);
    const handleCloseAddHabit = () => setOpenAddHabit(false);

    return (

        <>

            <div>Dashboard</div>

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