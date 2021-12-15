import styled from "styled-components";

export const Container = styled.div`
  background: #f5f5f5f5;

  .aside {
    display: none;
  }

  @media (min-width: 800px) {
    padding: 20px;
  }
`;

export const Main = styled.div`
  padding: 10px;

  header {
    display: flex;
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
      margin-left: -40px;

      :hover {
        background: #c3dddc;
      }
    }
  }

  hr {
    margin: 10px 0;
  }

  @media (min-width: 800px) {
    height: calc(100vh - 40px);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const ListBox = styled.div`
  border-radius: 10px;
  padding: 10px;
  flex: 1;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    input {
      padding: 10px;
      font-size: 1rem;
    }

    button {
      width: 38px;
      height: 38px;
    }
  }

  @media (min-width: 800px) {
    flex: 1;
    overflow-y: scroll;
    height: 80vh;

    /* box-shadow: 0px 0px 5px black; */
  }
`;

export const UserGroupList = styled.ul`
  padding: 10px;
  background: var(--color-purple);
  list-style-type: none;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow-y: scroll;

  h3 {
    color: white;
    padding: 20px;
    text-align: center;
  }
`;

export const PageControl = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    color: #ffffff;

    :hover {
      svg {
        box-shadow: 0px 0px 4px white;
        border-radius: 50%;
      }
    }
  }
`;
