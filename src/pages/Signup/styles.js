import styled, { keyframes } from "styled-components";
import SignUpImage from "../../assets/images/cadastre-se.svg";

export const Container = styled.div`
  height: calc(100vh - 3vh);
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    background: url(${SignUpImage}) no-repeat center,
      linear-gradient(
        0deg,
        rgba(149, 51, 191, 1) 35%,
        rgba(81, 30, 165, 1) 100%
      );
    background-size: 40vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;

  background: linear-gradient(
    0deg,
    rgba(149, 51, 191, 1) 35%,
    rgba(81, 30, 165, 1) 100%
  );

  /* .form-father {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 30px 20px;
    background-color: white;
    border-radius: 10px;
    width: 25%;
    gap: 10px 0;
  }


  @media (min-width: 1024px) {
    width: 40%;
    form {
      padding: 60px 15px;
    }
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
   
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
  animation: ${appearFromRight} 1s;
  form {
    /* margin: 80px 0; */
    margin: 0;
    width: 300px;
    padding: 10px;
    text-align: center;
    h1 {
      margin-bottom: 3rem;
    }
    p {
      margin-top: 0.5rem;
      margin: 0.1rem;
      a {
        font-weight: bold;
        color: #c85311;
      }
    }
  }
  @media (min-width: 450px) {
    form {
      width: 400px;
      /* margin-right: 30px; */
    }
  }
  @media (max-width: 430px) {
    h2{
      margin-top: 5px;
    }
    form {
      margin-top: 10px;
      width: 320px;
      height: 460px;
      /* margin-right: 30px; */
    }
    button{
      padding: 10px;
    }
  }
  div {
    img {
      margin-top: 10px;
      height: 120px;
      width: 150px;
      /* margin-bottom: 60px; */
    }
  }
  @media (min-width: 1030px) {
    img {
      display: none;
    }
  }
`;
