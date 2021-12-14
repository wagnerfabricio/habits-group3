import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center; // remover depois
  margin: 30px 0 50px;
`;

export const UpperSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 662px;
  height: 733px;
  filter: drop-shadow(15px 10px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  background: #39006e;
  color: #ffffff;
  text-align: center;

  div:nth-child(1) > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 199px;
    background: #ffffff;
    border-radius: 100%;
    margin: 20px 0 25px;
  }

  div:nth-child(1) > h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 60px;
  }

  div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 26px;
    /* margin: 20px 0 10px; */
  }

  div:nth-child(2) > div {
    width: 284px;
    height: 165px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const LowerSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;

  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 96px;
    line-height: 112px;
    color: #000000;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    padding-left: 15px;
  }

  div:nth-child(1) > div {
    display: flex;
    align-items: center;
  }

  div:nth-child(2) > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const PieChart = styled.div`
  width: 232px;
  height: 226px;
  background: #ff9d4d;
  border-radius: 100%;
`;
