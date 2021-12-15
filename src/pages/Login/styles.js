import styled, { keyframes } from "styled-components";
import SignUpImage from "../../assets/images/login-image.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: stretch;

  @media (max-width: 1299px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

  }
`;

export const Background = styled.div`
  @media (min-width: 1299px) {
    width: 100vw;
    height: 100vh;
    flex: 1;
    background: url(${SignUpImage}) no-repeat center,
      linear-gradient(
        0deg,
        rgba(149, 51, 191, 1) 35%,
        rgba(81, 30, 165, 1) 100%
      );
  }
  @media (max-width: 1299px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;
  max-width: 750px;
  background: linear-gradient(
    0deg,
    rgba(149, 51, 191, 1) 35%,
    rgba(81, 30, 165, 1) 100%
  );

  button {
    background: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#c85311;")};
    color: ${(props) => (props.whiteSchema ? "#c85317;" : "#f5f5f5")};
    height: 45px;
    border-radius: 0.5rem;
    border: 0;
    width: 216px;
    font-weight: 600;
    transition: 0.5s;
    border: 2px solid black;
    font-family: "Roboto Mono";
    margin-top: 1rem;
    :hover {
      border: 2px solid #c85311;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
  }
  @media (min-width: 1299px) {
    form {
      /* width: 500px;
      padding: 70px 70px; */
    }
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  form {
    /* margin: 80px 0; */
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 3rem;
    }
    p {
      margin-top: 0.5rem;
      a {
        font-weight: bold;
        color: #c85311;
      }
    }
  }

  div {
    img {
      width: 250px;
      /* margin-bottom: 60px; */
    }
  }
  @media (min-width: 1299px) {
    img {
      display: none;
    }
  }
`;
