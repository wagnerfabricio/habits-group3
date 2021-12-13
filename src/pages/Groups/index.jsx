import { ButtonAdd } from "../../components/ButtonAdd"
import { Modal, Box } from "@mui/material";
import AddHabitModal from "../../components/Modal/addHabit";
import AddGroupModal from "../../components/Modal/addGroup";
import { useState } from "react";

const Groups = () => {

    const [openAddGroup, setOpenAddGroup] = useState(true);
    const handleOpenAddGroupModal = () => setOpenAddGroup(true);
    const handleCloseAddGroupModal = () => setOpenAddGroup(false);

    return (
        <>
            <div>Groups</div>

            <Modal
                open={openAddGroup}
                onClose={handleOpenAddGroupModal}
            >
                <Box>
                    <AddGroupModal handleCloseAddGroupModal={handleCloseAddGroupModal} />
                </Box>
            </Modal>
        </>
    )
}

export default Groups