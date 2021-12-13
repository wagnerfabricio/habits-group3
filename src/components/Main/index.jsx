import { useHabits } from "../../providers/habits";
import { useUserGroups } from "../../providers/userGroups";
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
  const { userHabits } = useHabits();
  const { userGroups } = useUserGroups();

  const orderedHabits = userHabits.sort((a, b) => a.id - b.id);

  const showHabits = orderedHabits.map((habit) => (
    <HabitCard habit={habit} key={habit.id} />
  ));

  const userGroupsHabits = userGroups.flatMap((group) => {
    return group.goals.map((habit) => habit);
  });

  const orderedUserGroupsHabits = userGroupsHabits.sort((a, b) => a.id - b.id);

  const showGroupsHabits = orderedUserGroupsHabits.map((habit) => (
    <HabitCard habit={habit} group={true} key={habit.id} />
  ));

  return (
    <Container className="main">
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
          <HabitsList>{showHabits}</HabitsList>
          <h2>Eventos de seus Grupos:</h2>
          <ActivitiesList>
            <p
              style={{
                height: "70px",
                background: "lightGrey",
                marginBottom: "10px",
              }}
            >
              {" "}
              Activity Card 1{" "}
            </p>
            <p
              style={{
                height: "70px",
                background: "lightGrey",
                marginBottom: "10px",
              }}
            >
              {" "}
              Activity Card 1{" "}
            </p>
            <p
              style={{
                height: "70px",
                background: "lightGrey",
                marginBottom: "10px",
              }}
            >
              {" "}
              Activity Card 1{" "}
            </p>
            <p
              style={{
                height: "70px",
                background: "lightGrey",
                marginBottom: "10px",
              }}
            >
              {" "}
              Activity Card 1{" "}
            </p>
            <p
              style={{
                height: "70px",
                background: "lightGrey",
                marginBottom: "10px",
              }}
            >
              {" "}
              Activity Card 1{" "}
            </p>
            <p
              style={{
                height: "70px",
                background: "lightGrey",
                marginBottom: "10px",
              }}
            >
              {" "}
              Activity Card 1{" "}
            </p>
          </ActivitiesList>
        </LeftBox>
        <Content className="group">
          <Header>
            <h2>Metas em seus Grupos:</h2>
            <p>Total: <span>{orderedUserGroupsHabits.length}</span> </p>
          </Header>
          <Content className="groups_list">{showGroupsHabits}</Content>
        </Content>
      </GridBox>
    </Container>
  );
};

export default Main;
