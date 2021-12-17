import styled from "styled-components";
import { deepOrange } from "@mui/material/colors";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
  margin: 0 auto;
  @media (min-width: 800px) {
    max-width: 600px;
    height: 100vh;
  }
`;

export const UpperSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  height: 55%;
  /* padding: 50px 0;
  gap: 20px 0; */
  border-radius: 15px;
  background: var(--color-grey-100);
  color: var(--color-white);
  @media (min-width: 800px) {
    padding: 30px 0;
    gap: 10px 0;
    height: 55%;
  }

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
  width: 100px;
  height: 100px;
  background: #ffffff;
  border-radius: 50%;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 100%;
  max-height: 200px;
  /* padding: 20px 0; */
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  max-height: 150px;
  padding: 20px;
  gap: 10px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  gap: 10px;
  height: 100%;
  padding: 20px;

  @media (min-width: 800px) {
    padding: 0;
  }
`;

export const CardButton = styled.div`
  display: flex;

  color: var(--color-white);
  width: 80%;
  height: 130px;
  background: var(--color-grey-description);
  padding: 10px;
  cursor: pointer;
  border-radius: 15px 0 15px 0;
  border-right: 4px solid transparent;
  svg {
    background: ${deepOrange[500]};
  }

  :hover {
    border-right: 4px solid ${deepOrange[500]};
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export const LowerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
  padding: 10px;
  margin-bottom: 40px;

  @media (min-width: 800px) {
    max-width: 600px;
    margin-bottom: 0;
  }

  svg {
    border-radius: 15px;
  }
  text {
    fill: var(--color-white);
  }
`;

export const StatsContainer = styled.section`
  /* width: 20%; */
  max-width: 800px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  gap: 10px;

  font-style: bolder;
`;

export const Stats = styled.div`
  color: var(--color-white);
  display: flex;
  flex: 1;
  padding: 3px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  @media (min-width: 800px) {
    font-size: 1.8rem;
    font-style: bolder;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  position: relative;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  color: var(--color-grey-description);
  background: none;
  font-weight: 600;
  transition: 0.5s;
  :hover {
    color: white;
  }
  @media (min-width: 800px) {
    position: relative;
    right: 10px;
  }
`;
