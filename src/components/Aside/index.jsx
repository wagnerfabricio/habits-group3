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
} from "./styles";
import { Chart } from "react-google-charts";
import { useUser } from "../../providers/user";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import groupsSVG from "../../assets/images/groups.svg";
import habitsSVG from "../../assets/images/habit.svg";
import { useHistory } from "react-router-dom";

const Aside = () => {
  const { userHabits } = useHabits();
  const { userGroups } = useUserGroups();
  const { userData } = useUser();
  const { username, email } = userData.user;
  const history = useHistory();

  return (
    <Container>
      <UpperSection>
        <UserContainer>
          <Avatar
            sx={{
              bgcolor: deepOrange[500],
              width: 100,
              height: 100,
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
            <span>12</span>
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
            <span>04</span>
            <p>Metas</p>
          </Stats>
        </StatsContainer>
        <Chart
          width={"100%"}
          height={"100%"}
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
    </Container>
  );
};

export default Aside;
