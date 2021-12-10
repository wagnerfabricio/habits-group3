import styled from "styled-components";

export const Container = styled.div`
  width: 480px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const ContainerScroll = styled.div`
  width: 460px;
  height: 260px;
  overflow-y: scroll;
  &::-webkit-scrollbar{
  }
  
`;

export const ActivityContainer = styled.div`
  width: 410px;
  height: 90px;
  display: flex;
  align-items: center;
  background-color: #efede8;
  padding: 10px;
  border-radius: 15px;
  margin: 8px;

  div {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  h4 {
    width: 300px;
  }
  p {
    margin: 0;
  }
  span {
    color: grey;
  }
`;

export const DeleteButton = styled.button`
  float: right;
  border: none;
  cursor: pointer;
  :hover {
    color: red;
  }
`;
export const Title = styled.h4`
  padding-bottom: 5px;
  justify-self: flex-start;
  margin: 0;
`;
