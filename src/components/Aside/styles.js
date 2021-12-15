import styled from "styled-components";
import { deepOrange } from "@mui/material/colors";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  /* max-width: 600px; */
  height: 100%;
`;

export const UpperSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  min-width: 320px;
  height: 60%;
  padding: 20px;

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
  width: 70%;
  height: 100%;
  max-height: 200px;
  padding: 20px;
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
  padding: 10px;
`;

export const CardButton = styled.div`
  display: flex;

  color: black;
  width: 70%;
  height: 130px;
  background: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 15px 0 15px 0;
  border-right: 4px solid transparent;

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
  font-size: 2vh;
  font-style: bolder;
`;

export const Stats = styled.div`
  display: flex;
  flex: 1;
  padding: 5px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
`;

export const Button = styled.button`
  background: none;
  color: #ffffff;
  height: 30px;
  border-radius: 0.5rem;
  border: none;
  width: 30px;
  max-width: 336px;
  font-weight: 600;
  transition: 0.5s;

  margin-top: 1rem;
  :hover {
    border: 2px solid #f5f5f5;
  }
`;
