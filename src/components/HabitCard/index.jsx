import {
  CategoryBox,
  Content,
  ColumnBox,
  Counter,
  EditButton,
  IncreaseButton,
  Level,
  Container,
} from "./styles";
import { IoAddCircleOutline } from "react-icons/io5";
import { TiMediaFastForwardOutline } from "react-icons/ti";
import { useHabits } from "../../providers/habits";
import { useEffect } from "react";
import { useGroups } from "../../providers/groups";

const HabitCard = ({ habit, group = false }) => {
  const { id, title, category, difficulty, how_much_achieved } = habit;
  const { editGroupGoal } = useGroups();

  const { editHabit } = useHabits();

  const handleIncreaseAchievement = () => {
    if (group) {
      const increase = how_much_achieved + 1;
      editGroupGoal({ how_much_achieved: increase }, id);
    } else {
      const increase = how_much_achieved + 1;
      editHabit({ how_much_achieved: increase }, id);
    }
  };

  const newTitle =
    title.slice(0, 30).length > 8
      ? `${title.split(" ").slice(0, 6).join(" ")}...`
      : title;

  useEffect(() => {}, [editHabit, editGroupGoal]);

  return (
    <Container difficulty={difficulty}>
      <IncreaseButton onClick={handleIncreaseAchievement}>
        <IoAddCircleOutline />
      </IncreaseButton>
      <Content onClick={() => console.log("clicou!")}>
        <div>
          <h3>{newTitle}</h3>
          <CategoryBox>Categoria: {category}</CategoryBox>
        </div>
        <div>
          <Level>{difficulty}</Level>
        </div>
        <ColumnBox>
          {group && "Grupo"}
          <Counter>
            <TiMediaFastForwardOutline /> {how_much_achieved}
          </Counter>
        </ColumnBox>
      </Content>
    </Container>
  );
};

export default HabitCard;
