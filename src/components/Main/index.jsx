import { useHabits } from "../../providers/habits";
import { useUserGroups } from "../../providers/userGroups";
import HabitCard from "../HabitCard";
import { ButtonAdd } from "../ButtonAdd";
import {
  Container,
  Content,
  HabitsList,
  LeftBox,
  Header,
  GridBox,
  FlexContainer,
} from "./styles";
import ActivitiesCard from "../ActivitiesCard";
import { useEffect } from "react";
import mountain from '../../assets/images/mountain.jpg'

const Main = ({ handleClick }) => {
  const { userHabits } = useHabits();
  const { userGroups } = useUserGroups();
  const { getHabits } = useHabits();

  const orderedHabits = userHabits.sort((a, b) => a.id - b.id);

  const showHabits = orderedHabits.map((habit) => (
    <HabitCard habit={habit} key={habit.id} />
  ));

  const userGroupsHabits = userGroups.flatMap((group) => {
    return group.goals.map((habit) => habit);
  });

  const orderedUserGroupsHabits = userGroupsHabits.sort((a, b) => a.id - b.id);

  const showGroupsHabits = orderedUserGroupsHabits.map((habit) => (
    <HabitCard habit={habit} group={true} key={habit.id} goal={true} />
  ));

  const userGroupsEvents = userGroups.flatMap((group) => {
    return group.activities.map((activity) => activity);
  });

  const showEvents = userGroupsEvents.map((activity) => {
    const activityGroup = userGroups.filter(
      (group) => group.id === activity.group
    );
    return (
      <ActivitiesCard
        activity={activity}
        group={activityGroup[0]}
        key={activity.id}
      />
    );
  });

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <Container className="main">
      <Header>
        <img
          src={mountain}
          alt="lake, mountains and a tree"
        />
      </Header>
      <GridBox>
        <LeftBox>
          <Header>
            <div>
              <FlexContainer>
                <h2>Seus hábitos</h2>
                <ButtonAdd onClick={handleClick} />
              </FlexContainer>
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
          <HabitsList>{showEvents}</HabitsList>
        </LeftBox>
        <Content className="group">
          <Header>
            <h2>Metas em seus Grupos:</h2>
            <p>
              Total: <span>{orderedUserGroupsHabits.length}</span>{" "}
            </p>
          </Header>
          <Content className="groups_list">{showGroupsHabits}</Content>
        </Content>
      </GridBox>
    </Container>
  );
};

export default Main;
