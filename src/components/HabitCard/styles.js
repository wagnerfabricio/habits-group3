import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  height: 90px;
  background: ${(props) => {
    if (props.difficulty === "Fácil") return "#C3DDDC";
    if (props.difficulty === "Moderada") return "#F0EDEB";
    return "#E6DDF0";
  }};
  margin-bottom: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  border-right: 1px solid transparent;

  svg {
    font-size: 2.3rem;
    color: #541da8;
  }

  :hover {
    border-right: 1px solid green;
  }
`;

export const Content = styled.button`
  border: none;
  background: none;
  text-align: left;
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 2fr 1fr;
  align-items: center;
`;

export const IncreaseButton = styled.button`
  margin-right: 10px;
  background: none;
  border: none;

  :hover {
    svg {
      color: green;
    }
  }
`;

export const EditButton = styled.button`
  display: flex;
  flex-direction: column;
  text-align: left;
  background: none;
  border: none;
`;

export const CategoryBox = styled.p`
  color: grey;
`;

export const Level = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 80px;
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  text-align: right;
  color: grey;
`;

export const Counter = styled.p`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  svg {
    font-size: 1.2rem;
    color: grey;
    margin-right: 2px;
  }
`;
