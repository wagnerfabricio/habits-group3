import { Container, UpperSection, LowerSection, PieChart } from "./styles";

export const Aside = () => {
  return (
    <Container>
      <UpperSection>
        <div>
          <figure>
            <img src="" alt="" />
          </figure>
          <h2>Kenzinho</h2>
        </div>

        <div>
          <figure>
            <img src="" alt="" />
          </figure>
          <figure>
            <img src="" alt="" />
          </figure>
          <figure>
            <img src="" alt="" />
          </figure>
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
      </UpperSection>

      <LowerSection>
        <span>12 Atividades</span>
        <span>06 Grupos</span>
        <span>08 Hábitos</span>
        <span>04 Goals</span>
        <PieChart></PieChart>
      </LowerSection>
    </Container>
  );
};
