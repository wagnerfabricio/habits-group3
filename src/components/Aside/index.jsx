import { useHabits } from "../../providers/habits";
import { useUserGroups } from "../../providers/userGroups";
import {
  Container,
  UpperSection,
  LowerSection,
  CardsContainer,
  Stats,
  StatsContainer,
  UserContainer,
  UserContent,
  CardButton,
  Button,
} from "./styles";
import { Chart } from "react-google-charts";
import { useUser } from "../../providers/user";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import groupsSVG from "../../assets/images/groups.svg";
import habitsSVG from "../../assets/images/habit.svg";
import { useHistory } from "react-router-dom";
import { useActivities } from "../../providers/activities";
import { GiHamburgerMenu } from "react-icons/gi";
import { EditUser } from "../Modal/editUser";
import { useState } from "react";
import { Modal, Box } from "@mui/material";

const Aside = () => {
  const { userHabits } = useHabits();
  const { userGroups } = useUserGroups();
  const { userData } = useUser();
  const { username, email } = userData.user;
  const history = useHistory();
  const { activities } = useActivities();
  const userGroupsHabits = userGroups.flatMap((group) => {
    return group.goals.map((habit) => habit);
  });
  const orderedUserGroupsHabits = userGroupsHabits.sort((a, b) => a.id - b.id);
  const [openEditUser, setOpenEditUser] = useState(false);
  const handleOpenEditUserModal = () => setOpenEditUser(true);
  const handleCloseEditUserModal = () => setOpenEditUser(false);


  return (
    <Container>
      <UpperSection>
        <Button onClick={handleOpenEditUserModal}>
          <GiHamburgerMenu size={30} />
        </Button>
        <UserContainer>
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              width: 80,
              height: 80,
              fontSize: 50,
            }}
          >
            {username.slice(0, 1).toUpperCase()}
          </Avatar>
          <UserContent>
            <h3>{username.toUpperCase()}</h3>
            <p>{email}</p>
          </UserContent>
        </UserContainer>

        <CardsContainer>
          <CardButton onClick={() => history.push("/groups")}>
            <h3>Grupos</h3>
            <img
              src={groupsSVG}
              alt="Homem olhando para um quadro com vários cards"
            />
          </CardButton>

          <CardButton onClick={() => history.push("/habits")}>
            <h3>Hábitos</h3>
            <img
              src={habitsSVG}
              alt="Mulher ao lado de um círculo com várias atividades"
            />
          </CardButton>
        </CardsContainer>
      </UpperSection>

      <LowerSection>
        <StatsContainer>
          <Stats>
            <span>{activities.length}</span>
            <p>Eventos</p>
          </Stats>
          <Stats>
            <span>{userGroups.length}</span>
            <p>Grupos</p>
          </Stats>
          <Stats>
            <span>{userHabits.length}</span>
            <p>Hábitos</p>
          </Stats>
          <Stats>
            <span>{orderedUserGroupsHabits.length}</span>
            <p>Metas</p>
          </Stats>
        </StatsContainer>
        <Chart
          className="chart"
          width={"100%"}
          height={"100%"}
          options={{ backgroundColor: "grey", fill: "white" }}
          max-heigth={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Quant"],
            ["Hábitos", userHabits.length],
            ["Metas", 5],
            ["Grupos", userGroups.length],
            ["Eventos", 2],
          ]}
          rootProps={{ "data-testid": "1" }}
        />
      </LowerSection>

      <Modal open={openEditUser} onClose={handleOpenEditUserModal}>
        <Box>
          <EditUser handleCloseEditUserModal={handleCloseEditUserModal} />
        </Box>
      </Modal>
    </Container>
  );
};

export default Aside;
