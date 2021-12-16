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
    var(--color-grey-50);
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
  background-color: var(--color-grey-100);

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
    background-color: var(--color-grey-50);
    color: var(--color-white);
  }
  p{
      color: var(--color-white);
  }
  span{
    color: var(--color-grey-description)
  }

  @media (min-width: 1024px) {
    width: 40%;
    form {
      padding: 70px 70px; 
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
  height: 60vh;
  animation: ${appearFromRight} 1s;
  form {
    /* margin: 80px 0; */
    margin: 0;
    width: 300px;
    padding: 10px;
    text-align: center;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      margin-top: 0.5rem;
      margin: 0.1rem;

    }
  }
  @media (min-width: 450px) {
    form {
      margin: 10px;
      padding: 10px;
      width: 400px;
      /* margin-right: 30px; */
    }
    h1{
      margin-top: 50px;
    }
  }
  @media (max-width: 430px) {
    form {
      padding: 10px;
    }
    button{
      padding: 10px;
    }
  }

  @media (min-width: 1030px) {
    img {
      display: none;
    }
  }
`;
