import { Content, Container, FlexColumn } from "./styles";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsCalendarEvent, BsClipboardData } from "react-icons/bs";
import { Badge, IconButton, Modal, Tooltip } from "@mui/material";
import { GiExitDoor, GiEntryDoor } from "react-icons/gi";
import { BiEdit } from "react-icons/bi";
import { useUserGroups } from "../../providers/userGroups";
import { Box } from "@mui/system";
import ShowGroupInfoCard from "../Modal/ShowGroupInfoCard";
import { useState } from "react";
import EditGroupModal from "../Modal/editGroup";
import { useUser } from "../../providers/user";

const GroupCard = ({ group, userGroups = false, disable = false }) => {
  const { id, name, category, users_on_group, activities, goals, description } =
    group;
  const { subscribeToGroup, unsubscribeFromGroup } = useUserGroups();
  const {userData} = useUser();


  //Modal show Goals
  const [openShowGoals, setOpenShowGoals] = useState(false);
  const handleOpenShowGoalsModal = () => setOpenShowGoals(true);
  const handleCloseShowGoalsModal = () => setOpenShowGoals(false);

  console.log(group.creator.id)
  console.log("user id", userData.user.id)

  //Modal show users on group
  const [openShowGroupUsers, setOpenShowGroupUsers] = useState(false);
  const handleOpenShowGroupUsersModal = () => setOpenShowGroupUsers(true);
  const handleCloseShowGroupUsersModal = () => setOpenShowGroupUsers(false);

  //Modal show Events
  const [openShowEvents, setOpenShowEvents] = useState(false);
  const handleOpenShowEventsModal = () => setOpenShowEvents(true);
  const handleCloseShowEventsModal = () => setOpenShowEvents(false);

  //Modal edit group
  const [openEditGroup, setOpenEditGroup] = useState(false);
  const handleOpenEditGroupModal = () => setOpenEditGroup(true);
  const handleCloseEditGroupModal = () => setOpenEditGroup(false);

  return (
    <>
      <Container>
        <header>
          <h4>{name}</h4>
          <Content>
            <Tooltip title="Usuários" arrow>
              <div>
                <IconButton
                  onClick={handleOpenShowGroupUsersModal}
                  disabled={disable}
                >
                  <Badge badgeContent={users_on_group.length} color="warning">
                    <HiOutlineUserGroup />
                  </Badge>
                </IconButton>
              </div>
            </Tooltip>

            <Tooltip title="Eventos" arrow>
              <div>
                <IconButton
                  onClick={handleOpenShowEventsModal}
                  disabled={disable}
                >
                  <Badge badgeContent={activities.length} color="warning">
                    <BsCalendarEvent />
                  </Badge>
                </IconButton>
              </div>
            </Tooltip>

            <Tooltip title="Goals" arrow>
              <div>
                <IconButton
                  onClick={handleOpenShowGoalsModal}
                  disabled={disable}
                >
                  <Badge badgeContent={goals.length} color="warning">
                    <BsClipboardData />
                  </Badge>
                </IconButton>
              </div>
            </Tooltip>
            {userGroups && (
              <Tooltip title="Sair do Grupo" arrow>
                <div>
                  <IconButton onClick={() => unsubscribeFromGroup(id)}>
                    <GiEntryDoor />
                  </IconButton>
                </div>
              </Tooltip>
            )}
            {!userGroups && (
              <Tooltip title="Entrar no Grupo" arrow>
                <div>
                  <IconButton onClick={() => subscribeToGroup(id)}>
                    <GiExitDoor />
                  </IconButton>
                </div>
              </Tooltip>
            )}
          </Content>
        </header>
        <hr />
        <FlexColumn>
          <div>
            <p>
              <span>Descrição:</span>
              {description}
            </p>
            <p>
              <span>Categoria:</span>
              {category}
            </p>
          </div>
          {group.creator.id === userData.user.id && (
            <Tooltip title="Editar grupo" arrow>
              <div>
                <IconButton onClick={handleOpenEditGroupModal}>
                  <BiEdit />
                </IconButton>
              </div>
            </Tooltip>
          )}
        </FlexColumn>
      </Container>

      <Modal open={openShowGroupUsers} onClose={handleOpenShowGroupUsersModal}>
        <Box>
          <ShowGroupInfoCard
            info={users_on_group}
            groupName={name}
            users={true}
            handleClose={handleCloseShowGroupUsersModal}
          />
        </Box>
      </Modal>

      <Modal open={openShowGoals} onClose={handleOpenShowGoalsModal}>
        <Box>
          <ShowGroupInfoCard
            info={goals}
            groupId={id}
            groupName={name}
            goals
            handleClose={handleCloseShowGoalsModal}
          />
        </Box>
      </Modal>

      <Modal open={openShowEvents} onClose={handleOpenShowEventsModal}>
        <Box>
          <ShowGroupInfoCard
            info={activities}
            groupName={name}
            group={group}
            activities
            handleClose={handleCloseShowEventsModal}
          />
        </Box>
      </Modal>

      {/* modal de editar grupo */}
      <Modal open={openEditGroup} onClose={handleOpenEditGroupModal}>
        <Box>
          <EditGroupModal
            group={group}
            handleClose={handleCloseEditGroupModal}
          />
        </Box>
      </Modal>
    </>
  );
};

export default GroupCard;
