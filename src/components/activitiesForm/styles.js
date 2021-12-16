import styled from "styled-components";


export const Container = styled.div`
  height: 450px;
  width: 400px;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  margin: 20vh auto;
  align-items: center;
  border-radius: 15px;
  box-shadow: 3px 5px 5px #00000080;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;


  input {
      padding: 8px;
  }

  p{
      margin: 10px;
  }
`;

export const CloseModal = styled.button`
    border: none;
    background-color: transparent;
    margin-left: auto;
    margin-top: 0;
    margin-right: 30px;
    padding: 10px;
    svg {
    height: 1.5rem;
    width: 1.5rem;
    }
    svg:hover{
        color: tomato;
    }

`