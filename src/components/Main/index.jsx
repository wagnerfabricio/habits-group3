import ActivityCard from "../ActivityCard";
import GroupCard from "../GroupCard";
import HabitCard from "../HabitCard";
import {
  Container,
  Content,
  HabitsList,
  LeftBox,
  Header,
  ActivitiesList,
  GridBox,
} from "./styles";

const Main = () => {
  return (
    <Container>
      <Header>
        <img
          src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="lake, mountains and a tree"
        />
      </Header>
      <GridBox>
        <LeftBox>
          <Header>
            <div>
              <h2>Seus hábitos</h2>
              <p>
                {new Date().toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                })}
              </p>
            </div>
            <div></div>
          </Header>
          <HabitsList>
            <HabitCard schema={"Fácil"} color={"#E5DDF0"} />
            <HabitCard schema={"Difícil"} color={"#C3DDDC"} />
            <HabitCard schema={"Médio"} />
            <HabitCard schema={"Médio"} />
            <HabitCard schema={"Difícil"} color={"#C3DDDC"} />
          </HabitsList>
          <h2>Atividades</h2>
          <ActivitiesList>
            <ActivityCard />
            <ActivityCard />
            <ActivityCard />
          </ActivitiesList>
        </LeftBox>
        <Content className="group">
          <div>
            <h2>Grupos</h2>
            <p>Total: </p>
          </div>
          <Content className="groups_list">
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </Content>
        </Content>
      </GridBox>
    </Container>
  );
};

export default Main;
