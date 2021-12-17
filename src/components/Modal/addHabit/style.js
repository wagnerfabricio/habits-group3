import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  max-width: 400px;
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
    width: 100%;
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
    position: relative;
    right: 10px;
    top: 10px;
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
  .radio {
    height: 15px;
    width: 40px;
    margin: 0;
  }
  .divRadio {
    color: #ffffff;
    display: flex;
    align-items: flex-end;
    width: 110px;
  }
  fieldset legend {
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 5px;
  }
  .fildDificult,
  .fildfrequency {
    display: flex;
    width: 300px;
    border: none;
    display: flex;
    justify-content: space-around;
    margin: 15px 0 5px 0;
  }
  button {
    margin-top: 50px;
  }
`;
