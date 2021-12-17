import {
  Container,
  FlexContainer,
  HabitsList,
  Header,
  PageContainer,
  SearchError,
  ButtonAdd,
} from "./styles";
import { useHabits } from "../../providers/habits";
import HabitCard from "../../components/HabitCard";
import { useState } from "react";
import { Box, Modal, Tooltip } from "@mui/material";
import AddHabitModal from "../../components/Modal/addHabit";
import { ImSearch } from "react-icons/im";
import { BsPlusLg } from "react-icons/bs";
import { GroupMenu } from "../Groups/styles";
import { AiOutlineHome } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Habits = () => {
  const [inputSearchHabit, setInputSearchHabit] = useState("");
  const { userHabits } = useHabits();
  const history = useHistory();

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
    <PageContainer>
      <Container>
        <Header>
          <FlexContainer>
            <GroupMenu>
              <ButtonAdd
                id="buttonAdd"
                onClick={handleOpenAddHabit}
                style={{ width: "40px" }}
              >
                <BsPlusLg />
              </ButtonAdd>
              <h1 onClick={() => setInputSearchHabit("")}>Seus hábitos</h1>
            </GroupMenu>
            <Tooltip title="Voltar para Home" arrow>
              <button
                className="home"
                onClick={() => {
                  history.push("/dashboard");
                }}
              >
                <AiOutlineHome />
              </button>
            </Tooltip>
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
            <button onClick={handleSearch} className="searchButton">
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
    </PageContainer>
  );
};

export default Habits;
