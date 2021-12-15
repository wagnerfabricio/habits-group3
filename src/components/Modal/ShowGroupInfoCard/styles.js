import styled from "styled-components";

export const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #ffffff;
  background-color: #541da8;
  max-width: 400px;
  max-height: 450px;
  margin: 20vh auto;
  padding: 20px;
  overflow-y: scroll;
  border-radius: 15px;
  box-shadow: 3px 5px 5px #00000080;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: none;
      border: none;
      color: #ffffff;

      svg {
        font-size: 40px;
      }

      :hover {
      svg {
        box-shadow: 0px 0px 4px white;
        border-radius: 50%;
      }
    }
    }

    button + button {
      margin-left: 20px;
    }
  }

  hr {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;

    li {
      background-color: #ffffff;
      color: black;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px black;
      margin: 10px 0;
    }
  }
`;
