import {
  CategoryBox,
  Content,
  ColumnBox,
  Counter,
  Level,
  Container,
} from "./styles";
import { TiMediaFastForwardOutline } from "react-icons/ti";
import { useHabits } from "../../providers/habits";
import { useEffect, useState } from "react";
import { useGroups } from "../../providers/groups";
import { Modal, Box } from "@mui/material";
import EditHabitModal from "../Modal/editHabit";
import EditGoalModal from "../Modal/editGoal";

import {ButtonAdd} from '../ButtonAdd'

const HabitCard = ({ habit, group = false, goal = false }) => {
  const { id, title, category, difficulty, how_much_achieved } = habit;
  const { editGroupGoal } = useGroups();

  const { editHabit } = useHabits();

  //modal habit
  const [openEditHabit, setOpenEditHabit] = useState(false);
  const handleOpenEditHabit = () => setOpenEditHabit(true);
  const handleCloseEditHabit = () => setOpenEditHabit(false);

  //modal goal
  const [openEditGoal, setOpenEditGoal] = useState(false);
  const handleOpenEditGoal = () => setOpenEditGoal(true);
  const handleCloseEditGoal = () => setOpenEditGoal(false);
  const handleIncreaseAchievement = () => {
    if (group) {
      const increase = how_much_achieved + 1;
      editGroupGoal({ how_much_achieved: increase }, id);
    } else {
      const increase = how_much_achieved + 1;
      editHabit({ how_much_achieved: increase }, id);
    }
  };

  // const newTitle =
  //   title.slice(0, 30).length > 8
  //     ? `${title.split(" ").slice(0, 6).join(" ")}...`
  //     : title;

  useEffect(() => {}, [editHabit, editGroupGoal]);

  return (
    <>
      <Container>
        <ButtonAdd onClick={handleIncreaseAchievement}/>
        <Content onClick={!goal ? handleOpenEditHabit : handleOpenEditGoal}>
          <div>
            <h4>{title}</h4>
            <CategoryBox><span>Categoria:</span> {category}</CategoryBox>
          </div>
          <div>
            <Level difficulty={difficulty}>{difficulty}</Level>
          </div>
          <ColumnBox>
            {group && "Grupo"}
            <Counter>
              <TiMediaFastForwardOutline /> {how_much_achieved}
            </Counter>
          </ColumnBox>
        </Content>
      </Container>
      {!goal && (
        <Modal open={openEditHabit} onClose={handleOpenEditHabit}>
          <Box>
            <EditHabitModal
              handleCloseEditHabit={handleCloseEditHabit}
              habit={habit}
            />
          </Box>
        </Modal>
      )}

      {goal && (
        <Modal open={openEditGoal} onClose={handleOpenEditGoal}>
          <Box>
            <EditGoalModal
              handleCloseEditGoal={handleCloseEditGoal}
              habit={habit}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default HabitCard;
