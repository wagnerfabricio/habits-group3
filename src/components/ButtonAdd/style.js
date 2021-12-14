import styled from "styled-components";

export const Container = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  background-color: #1c294b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #1c294b;

  &:hover {
    background-color: #ffffff;
    color: #1c294b;
    cursor: pointer;
    border: solid 2px #1c294b;
  }
`;
