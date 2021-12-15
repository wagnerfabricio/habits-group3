import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center; // remover depois
  width: 100%;
  max-width: 800px;
  height: 100%;

  padding: 0 20px;
`;

export const UpperSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 60%;
  padding: 20px 0;
  filter: drop-shadow(10px 7px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  background: #39006e;
  color: #ffffff;

  h2 {
    padding: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 40px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 139px;
  background: #ffffff;
  border-radius: 50%;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  height: 100%;
  padding: 10px;
`;

export const Cards = styled.div`
  width: 35%;
  height: 130px;
  background: white;
  padding: 10px;
`;

export const LowerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
`;

export const StatsContainer = styled.section`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  gap: 0 50px;
`;

export const StatsActivities = styled.div`
  display: flex;

  text-align: center;
  flex-direction: column;
  align-items: center;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;

    color: blue;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: blue;
  }
`;

export const StatsGroups = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;

    color: red;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: red;
  }
`;

export const StatsHabits = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;

    color: #000000;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
  }
`;

export const StatsGoals = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;

    color: green;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: green;
  }
`;
