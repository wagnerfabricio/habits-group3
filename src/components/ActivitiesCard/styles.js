import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
`;

export const ContainerScroll = styled.div`
  width: 460px;
  height: 260px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
  }
`;

export const ActivityContainer = styled.div`
  width: 95%;
  height: 90px;
  display: flex;
  align-items: center;
  background-color: #efede8;
  padding: 0px 8px;
  border-radius: 15px;
  margin: 8px;

  div {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
  h4 {
    color: black;
    width: 300px;
  }
  p {
    margin: 0;
  }
  span {
    color: grey;
    margin: 25px;
  }
`;

export const DeleteButton = styled.button`
  float: right;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 80px;
  background-color: transparent;
  svg{
    height: 1.2rem;
    width: 1.2rem;
  }
  :hover {
    color: tomato;
  }
`;
export const Title = styled.h4`
  padding-bottom: 5px;
  justify-self: flex-start;
  margin: 0;
`;

export const ButtonCard = styled.button`
  margin: 0;
  padding: 0;
  width: 90%;
  height: 70px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efede8;
`