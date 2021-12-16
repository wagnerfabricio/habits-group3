import styled from "styled-components";

export const PageContainer = styled.div`
  background: var(--color-grey-100);

  @media (min-width: 800px) {
    padding: 40px;
  }
`;

export const Container = styled.div`
  color: var(--color-white);
  background: var(--color-grey-50);

  .aside {
    display: none;
  }

  @media (min-width: 800px) {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    border-radius: 20px;
  }

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    h1 {
      width: 100%;
      :hover {
        cursor: pointer;
      }
    }

    input {
      font-size: 1.2rem;
      letter-spacing: 2px;
      flex: 1;
      border: none;
      padding-left: 20px;
      border-radius: 10px;
      color: white;
      background-color: #3a3b3c;
      line-height: 42px;
    }

    button {
      color: var(--color-grey-description);
      border: none;
      padding: 5px;
      width: 42px;
      height: 42px;
      font-size: 22px;
      border-radius: 50%;

      :hover {
        background: var(--color-white);
      }
    }
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.div`
  padding: 10px;

  hr {
    margin: 10px 0;
  }

  @media (min-width: 800px) {
    height: calc(90vh - 40px);
  }
`;

export const MainHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  h1 {
    width: 100%;
    :hover {
      cursor: pointer;
    }
  }

  input {
    font-size: 1.2rem;
    letter-spacing: 2px;
    flex: 1;
    border: none;
    padding-left: 20px;
    border-radius: 10px;
    color: white;
    background-color: #3a3b3c;
    line-height: 42px;
  }

  button {
    color: var(--color-grey-description);
    border: none;
    padding: 5px;
    width: 42px;
    height: 42px;
    font-size: 22px;
    border-radius: 50%;
    margin-left: -40px;

    :hover {
      background: var(--color-white);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

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
    width: 50%;
  }
`;

export const ListBoxHeader = styled.header`
  width: 100%;
  color: var(--color-grey-description);

  h3 {
    margin: 0 auto;
  }
`;

export const UserGroupList = styled.ul`
  list-style-type: none;
  border-radius: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
 
  overflow-y: scroll;
  overflow-x: hidden;
  h3 {
    color: white;
    padding: 20px;
    text-align: center;
  }

  @media (min-width: 800px) {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 65vh;

    /* box-shadow: 0px 0px 5px black; */
  }
`;

export const PageControl = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    font-size: 30px;

    svg {
      border: 3px solid var(--color-green);
      color: var(--color-green);
      border-radius: 50%;
    }

    :hover {
      svg {
        background: var(--color-green);
        color: var(--color-white);
      }
    }
  }
`;
