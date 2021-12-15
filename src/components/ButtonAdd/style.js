import styled from "styled-components";

export const Container = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 100%;
  background-color: #1c294b;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid #1c294b;

  &:hover {
    background-color: #ffffff;
    color: #1c294b;
    cursor: pointer;
    border: solid 3px #1c294b;
  }
  svg {
    margin: 0 auto;
  }
`;
