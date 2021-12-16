import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--color-grey-100);

  height: calc(100vh -40px);
  @media (min-width: 800px) {
    padding: 40px;
  }
`;

export const Container = styled.div`
  padding: 10px;
  color: var(--color-white);
  background: var(--color-grey-50);

  @media (min-width: 800px) {
    padding: 30px;
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 20px;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    :hover {
      cursor: pointer;
    }
  }

  input {
    font-size: 1.2rem;
    letter-spacing: 2px;
    flex: 1;
    border: none;
    padding-left: 10px;
    border-radius: 10px;
    color: white;
    background-color: #3a3b3c;
  }

  button {
    color: #541da8;
    background: #f0edeb;
    border: none;
    padding: 5px;
    width: 42px;
    height: 42px;
    font-size: 22px;
    border-radius: 50%;
    margin-left: -30px;

    :hover {
      background: #c3dddc;
    }
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HabitsList = styled.ul`
  list-style-type: none;
  border-radius: 10px;
  margin: 10px 0;
  overflow-y: scroll;
`;

export const SearchError = styled.h3`
  margin: 20px;
  text-align: center;
`;
