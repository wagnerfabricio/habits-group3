import styled from "styled-components";

export const Container = styled.div`
  height: 450px;
  width: 400px;
  background-color: var(--color-grey-100);
  display: flex;
  flex-direction: column;
  margin: 20vh auto;
  align-items: center;
  border-radius: 15px;
  box-shadow: 3px 5px 5px #00000080;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .headder {
    display: flex;
    margin: 0 0 30px 0;
  }
  .headder button {
    display: flex;
    align-items: center;
    height: 20px;
    width: 20px;
    justify-content: center;
    border-radius: 100%;
    margin: 0;
    border: none;
    color: #ffffff;
    background-color: #ffffff00;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    margin: 10px 0 0 270px;
  }
  h2 {
    margin: 40px auto 0 auto;
    color: #ffffff;
    font-size: 28px;
  }
  .inputText {
    background-color: #ffffff;
    border-radius: 5px;
    height: 20px;
    margin: 20px 0 0 0;
    height: 45px;
    width: 320px;
    border: none;
    padding-left: 10px;
  }
  button {
    margin-top: 50px;
  }
`;
