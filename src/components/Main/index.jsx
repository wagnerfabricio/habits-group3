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
          <HabitsList>

            <p style={{ height: "80px", background: "lightGreen", marginBottom: "10px"}}>Habit Card 1</p>
            <p style={{ height: "80px", background: "lightGreen", marginBottom: "10px"}}>Habit Card 1</p>
            <p style={{ height: "80px", background: "lightGreen", marginBottom: "10px"}}>Habit Card 1</p>
            <p style={{ height: "80px", background: "lightGreen", marginBottom: "10px"}}>Habit Card 1</p>
            <p style={{ height: "80px", background: "lightGreen", marginBottom: "10px"}}>Habit Card 1</p>
          </HabitsList>
          <h2>Atividades</h2>
          <ActivitiesList>
            <p style={{ height: "70px", background: "lightGrey", marginBottom: "10px" }}> Activity Card 1 </p>
            <p style={{ height: "70px", background: "lightGrey", marginBottom: "10px" }}> Activity Card 1 </p>
            <p style={{ height: "70px", background: "lightGrey", marginBottom: "10px" }}> Activity Card 1 </p>
            <p style={{ height: "70px", background: "lightGrey", marginBottom: "10px" }}> Activity Card 1 </p>
            <p style={{ height: "70px", background: "lightGrey", marginBottom: "10px" }}> Activity Card 1 </p>
            <p style={{ height: "70px", background: "lightGrey", marginBottom: "10px" }}> Activity Card 1 </p>
          </ActivitiesList>
        </LeftBox>
        <Content className="group">
          <Header>
            <h2>Grupos</h2>
            <p>Total: </p>
          </Header>
          <Content className="groups_list">
            <p style={{ height: "80px", background: "lightBlue", marginBottom: "10px" }}>Group Card 1</p>
            <p style={{ height: "80px", background: "lightBlue", marginBottom: "10px" }}>Group Card 1</p>
            <p style={{ height: "80px", background: "lightBlue", marginBottom: "10px" }}>Group Card 1</p>
            <p style={{ height: "80px", background: "lightBlue", marginBottom: "10px" }}>Group Card 1</p>
            <p style={{ height: "80px", background: "lightBlue", marginBottom: "10px" }}>Group Card 1</p>
            <p style={{ height: "80px", background: "lightBlue", marginBottom: "10px" }}>Group Card 1</p>
            <p style={{ height: "80px", background: "lightBlue", marginBottom: "10px" }}>Group Card 1</p>
            <p style={{ height: "80px", background: "lightBlue", marginBottom: "10px" }}>Group Card 1</p>
            <p style={{ height: "80px", background: "lightBlue", marginBottom: "10px" }}>Group Card 1</p>
          </Content>
        </Content>
      </GridBox>
    </Container>
  );
};

export default Main;
