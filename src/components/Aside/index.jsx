import { Container, UpperSection, LowerSection, PieChart } from "./styles";

const Aside = () => {
  return (
    <Container>
      <UpperSection>
        <div>
          <div>
            <figure>
              <img src="" alt="" />
            </figure>
          </div>
          <h2>Kenzinho</h2>
        </div>

        <div>
          <div>
            <figure>
              <img src="" alt="" />
            </figure>
          </div>
          <div>
          <figure>
              <img src="" alt="" />
            </figure>
          </div>
          <div>
          <figure>
              <img src="" alt="" />
            </figure>
          </div>
          <div>
          <figure>
              <img src="" alt="" />
            </figure>
          </div>
        </div>
      </UpperSection>

      <LowerSection>
        <div>
          <div>
            <span>12</span>
            <p>Atividades</p>
          </div>
          <div>
            <span>06</span>
            <p>Grupos</p>
          </div>
          <div>
            <span>08</span>
            <p>Hábitos</p>
          </div>
        </div>

        <div>
          <div>
            <span>04</span>
            <p>Goals</p>
          </div>
          <PieChart></PieChart>
        </div>
      </LowerSection>
    </Container>
  );
};

export default Aside;
