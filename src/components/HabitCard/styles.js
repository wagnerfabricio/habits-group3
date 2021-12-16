import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  min-height: 90px;
  background-color: var(--color-grey-100);

  margin-bottom: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  border-right: 1px solid transparent;

  :hover {
    border-right: 1px solid var(--color-white);
  }
`;

export const Content = styled.button`
  font-family: ui-serif;

  display: grid;
  grid-template-columns: 4fr 2fr 1fr;
  align-items: center;
  text-align: left;
  color: var(--color-white);
  background: none;
  border: none;
  margin-left: 10px;
  width: 100%;

  h4 {
    margin-right: 10px;
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
  font-size: 14px;
  color: var(--color-grey-description);
  margin-top: 5px;

  span {
    font-weight: bold;
  }
`;

export const Level = styled.p`
  margin-right: 10px;
  text-align: center;
  width: 80px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border: 2px solid
    ${(props) => {
      if (props.difficulty === "Fácil") return "var(--color-green)";
      if (props.difficulty === "Moderada") return "var(--color-orange-50)";
      return "var(--color-red)";
    }};

  color: ${(props) => {
    if (props.difficulty === "Fácil") return "var(--color-green)";
    if (props.difficulty === "Moderada") return "var(--color-orange-50)";
    return "var(--color-red)";
  }};
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
