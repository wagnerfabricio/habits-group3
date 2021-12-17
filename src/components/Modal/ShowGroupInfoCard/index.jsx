import { Container } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import HabitCard from "../../HabitCard";
import ActivitiesCard from "../../ActivitiesCard";
import { useEffect, useState } from "react";
import { Box, Modal, Tooltip } from "@mui/material";
import AddGoalModal from "../addGoal";
import ActivitiesForm from "../../activitiesForm";

const ShowGroupInfoCard = ({
  groupName,
  groupId,
  info,
  users = false,
  goals = false,
  activities = false,
  handleClose,
  group,
}) => {
  const showUsers = info.map((user) => (
    <li key={user.id}>
      <h5><span>Usuário: </span>{user.username}</h5>
      <p><span>Email: </span>{user.email}</p>
    </li>
  ));

  const showGoals =
    goals &&
    info
      .sort((a, b) => a.id - b.id)
      .map((goal) => (
        <HabitCard habit={goal} group={true} key={goal.id} goal={true} />
      ));

  const showEvents =
    activities &&
    info.map((activity) => {
      return (
        <ActivitiesCard activity={activity} group={group} key={activity.id} />
      );
    });

  //Modal add group goal
  const [openAddGoalModal, setOpenAddGoalModal] = useState(false);
  const handleOpenAddGoalModal = () => setOpenAddGoalModal(true);
  const handleCloseAddGoalModal = () => setOpenAddGoalModal(false);

  //Modal add activity
  const [openAddActivityModal, setOpenAddActivityModal] = useState(false);
  const isAddForm = true;

  useEffect(() => {}, [activities]);

  return (
    <>
      <Container>
        <header>
          <h3>Grupo: {groupName}</h3>
          <div>
            {goals && (
              <Tooltip title="Adicionar" arrow>
                <button onClick={handleOpenAddGoalModal}>
                  <IoMdAddCircleOutline />
                </button>
              </Tooltip>
            )}

            {activities && (
              <Tooltip title="Adicionar" arrow>
                <button onClick={() => setOpenAddActivityModal(true)}>
                  <IoMdAddCircleOutline />
                </button>
              </Tooltip>
            )}
            <Tooltip title="Sair" arrow>
              <button onClick={handleClose}>
                <AiOutlineCloseCircle />
              </button>
            </Tooltip>
          </div>
        </header>
        <ul>{users && showUsers}</ul>
        <ul>{goals && showGoals}</ul>
        <ul>{activities && showEvents}</ul>
      </Container>
      <Modal open={openAddGoalModal} onClose={handleOpenAddGoalModal}>
        <Box>
          <AddGoalModal
            handleCloseAddGoalModal={handleCloseAddGoalModal}
            groupId={groupId}
          />
        </Box>
      </Modal>

      <Modal
        open={openAddActivityModal}
        onClose={() => setOpenAddActivityModal(false)}
      >
        <Box>
          <ActivitiesForm isAddForm={isAddForm} group={group} />
        </Box>
      </Modal>
    </>
  );
};

export default ShowGroupInfoCard;
