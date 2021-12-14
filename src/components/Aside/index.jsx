import { useHabits } from "../../providers/habits";
import { useUserGroups } from "../../providers/userGroups";
import {
  Container,
  UpperSection,
  LowerSection,
  Cards,
  CardsContainer,
  Avatar,
  StatsActivities,
  StatsGoals,
  StatsHabits,
  StatsGroups,
  StatsContainer,
} from "./styles";
import { Chart } from "react-google-charts";

const Aside = () => {
  const { userHabits } = useHabits();
  const { userGroups } = useUserGroups();

  return (
    <Container>
      <UpperSection>
        <div>
          <Avatar>
            <figure>
              <img src="" alt="" />
            </figure>
          </Avatar>
          <h2>Kenzinho</h2>
        </div>

        <CardsContainer>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </CardsContainer>
      </UpperSection>

      <LowerSection>
        <StatsContainer>
          <StatsActivities>
            <span>12</span>
            <p>Atividades </p>
          </StatsActivities>
          <StatsGroups>
            <span>{userGroups.length}</span>
            <p>Grupos</p>
          </StatsGroups>
          <StatsHabits>
            <span>{userHabits.length}</span>
            <p>Hábitos</p>
          </StatsHabits>
          <StatsGoals>
            <span>04</span>
            <p>Goals</p>
          </StatsGoals>
        </StatsContainer>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Quant"],
            ["Hábitos", userHabits.length],
            ["Goals", 2],
            ["Grupos", userGroups.length],
            ["Atividades", 2],
          ]}
          rootProps={{ "data-testid": "1" }}
        />
      </LowerSection>
    </Container>
  );
};

export default Aside;
