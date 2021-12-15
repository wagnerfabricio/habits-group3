import {
  Container,
  FlexContainer,
  HabitsList,
  Header,
  SearchError,
} from "./styles";
import { ButtonAdd } from "../../components/ButtonAdd";
import { useHabits } from "../../providers/habits";
import HabitCard from "../../components/HabitCard";
import { useState } from "react";
import { Box, Modal } from "@mui/material";
import AddHabitModal from "../../components/Modal/addHabit";
import { ImSearch } from "react-icons/im";

const Habits = () => {
  const [inputSearchHabit, setInputSearchHabit] = useState("");
  const { userHabits } = useHabits();

  const orderedHabits = userHabits.sort((a, b) => a.id - b.id);

  const searchHabit = orderedHabits.filter((habit) =>
    habit.title.toLowerCase().includes(inputSearchHabit.toLowerCase())
  );

  const showHabits = searchHabit.map((habit) => (
    <HabitCard habit={habit} key={habit.id} />
  ));

  const handleSearch = () => {};

  //Modal
  const [openAddHabit, setOpenAddHabit] = useState(false);
  const handleOpenAddHabit = () => setOpenAddHabit(true);
  const handleCloseAddHabit = () => setOpenAddHabit(false);

  return (
    <Container>
      <Header>
        <FlexContainer>
          <h1>Seus hábitos</h1>
          <ButtonAdd onClick={handleOpenAddHabit} />
        </FlexContainer>
        <FlexContainer>
          <input
            type="text"
            placeholder="Pesquisar hábito"
            value={inputSearchHabit}
            onFocus={(e) => e.target.select()}
            onChange={(e) => {
              setInputSearchHabit(e.target.value);
            }}
          />
          <button onClick={handleSearch}>
            <ImSearch />
          </button>
        </FlexContainer>
        <p>
          {new Date().toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
          })}
        </p>
      </Header>
      <HabitsList>
        {searchHabit.length > 0 ? (
          showHabits
        ) : (
          <SearchError>Não foi encontrado nenhum hábito</SearchError>
        )}
      </HabitsList>

      <Modal open={openAddHabit} onClose={handleOpenAddHabit}>
        <Box>
          <AddHabitModal handleCloseAddHabit={handleCloseAddHabit} />
        </Box>
      </Modal>
    </Container>
  );
};

export default Habits;
