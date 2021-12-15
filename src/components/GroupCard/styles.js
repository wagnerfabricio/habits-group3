import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 140px;
  background: #f0edeb;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  border-right: 1px solid transparent;

  svg {
    color: #541da8;
  }

  header {
    color: #541da8
    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  display: flex;
  div + div {
    margin-left: 45px;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: bold;
    margin-right: 5px;
  }
`;
